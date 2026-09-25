import type { H3Event } from 'h3'
import { getHeader } from 'h3'

interface RateLimitEntry {
  count: number
  resetTime: number
}

// Rate limit map per IP. Note: in Netlify, state is per function instance,
// so this limits abuse per instance but not globally. A distributed cache
// (Redis, Memcached) is needed for true global rate limiting (tracked as
// future work).
const rateLimitMap = new Map<string, RateLimitEntry>()

// Cleanup old entries every 5 minutes to prevent unbounded growth
const CLEANUP_INTERVAL = 5 * 60 * 1000
let lastCleanupTime = Date.now()

const cleanupRateLimit = () => {
  const now = Date.now()
  if (now - lastCleanupTime < CLEANUP_INTERVAL) return

  for (const [ip, entry] of rateLimitMap.entries()) {
    if (entry.resetTime < now) {
      rateLimitMap.delete(ip)
    }
  }
  lastCleanupTime = now
}

/**
 * Validate request origin against the host. Rejects with 403 if origin
 * is missing or does not match the request host.
 *
 * If Origin header is absent, falls back to Referer header. A legitimate
 * browser request always sends at least one of these in a POST cross-origin scenario.
 */
export const validateOrigin = (event: H3Event): boolean => {
  const origin = getHeader(event, 'origin')
  let referer = getHeader(event, 'referer')

  // Compare just the host part, ignoring protocol/port variations
  const reqHost = getHeader(event, 'host')?.split(':')[0]

  if (origin) {
    try {
      const originUrl = new URL(origin)
      const originHost = originUrl.hostname
      return originHost === reqHost
    } catch {
      return false
    }
  }

  if (referer) {
    try {
      const refererUrl = new URL(referer)
      const refererHost = refererUrl.hostname
      return refererHost === reqHost
    } catch {
      return false
    }
  }

  // Both missing: reject
  return false
}

/**
 * Validate combined size of htmlContent and cssContent.
 * Limit: 500KB. Measured in bytes after encoding as UTF-8.
 *
 * Justification: A fully populated form (MainDocument, OpeningDocument,
 * OriginFundsDocuments, SignatureRegistrationDocument) produces ~250KB
 * of HTML and ~50-100KB of CSS in a typical flow. 500KB provides a 2x
 * safety margin while preventing memory exhaustion in Chromium.
 */
export const validateContentSize = (htmlContent: string, cssContent: string): boolean => {
  const MAX_SIZE_BYTES = 500 * 1024 // 500KB

  const htmlBytes = new TextEncoder().encode(htmlContent).length
  const cssBytes = new TextEncoder().encode(cssContent).length
  const totalBytes = htmlBytes + cssBytes

  return totalBytes <= MAX_SIZE_BYTES
}

/**
 * Check rate limit for the request IP. Allows 10 requests per 60 seconds.
 * Returns true if within limit, false if exceeded.
 */
export const checkRateLimit = (event: H3Event): boolean => {
  cleanupRateLimit()

  // Extract client IP from X-Forwarded-For or connection socket
  let ip = getHeader(event, 'x-forwarded-for')
  if (ip) {
    ip = ip.split(',')[0].trim()
  } else {
    ip = event.node.req.socket?.remoteAddress || 'unknown'
  }

  const now = Date.now()
  const RATE_LIMIT_WINDOW = 60 * 1000 // 60 seconds
  const RATE_LIMIT_MAX = 10 // requests per window

  const entry = rateLimitMap.get(ip)

  if (!entry || entry.resetTime < now) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count++
  return true
}

/**
 * Abort all network requests except data: and blob: URIs.
 *
 * The HTML is injected via page.setContent(), so no navigation occurs.
 * Any external resource (image, font, stylesheet, iframe) is an abuse vector.
 * This handler prevents SSRF attacks like `<iframe src="http://169.254.169.254/...">`
 * or requests to internal services.
 */
export const createRequestInterceptor = (page: any) => async (request: any) => {
  const url = request.url()
  if (url.startsWith('data:') || url.startsWith('blob:')) {
    request.continue()
  } else {
    request.abort()
  }
}
