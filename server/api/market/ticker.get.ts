// Market quotes for the header ticker.
//
// MOCK: the data source is pending confirmation from Novanet. When it is decided, replace
// `getQuotes()` with either option A (direct API call) or option B (scraping the public
// source), keeping the `{ data, updatedAt }` response shape so the client does not change.
// Fetching here, server-side, keeps the CSP `connect-src 'self'` intact.

interface RawQuote {
  symbol: string
  volume: number
  lastPrice: number
  changePct: number
}

const BASE_QUOTES: RawQuote[] = [
  { symbol: 'DOM', volume: 12500, lastPrice: 4.85, changePct: 1.25 },
  { symbol: 'EFE', volume: 3800, lastPrice: 18.4, changePct: -0.54 },
  { symbol: 'ENV', volume: 950, lastPrice: 2.1, changePct: 0 },
  { symbol: 'FNC', volume: 7200, lastPrice: 35.6, changePct: 2.31 },
  { symbol: 'FNV', volume: 1540, lastPrice: 9.75, changePct: -1.02 },
  { symbol: 'GMC.B', volume: 22000, lastPrice: 0.62, changePct: 0.8 },
  { symbol: 'GZL', volume: 410, lastPrice: 1.15, changePct: 0 },
  { symbol: 'ICP', volume: 6300, lastPrice: 12.3, changePct: -2.4 },
  { symbol: 'BNC', volume: 31800, lastPrice: 1234.5, changePct: 0.45 },
  { symbol: 'MVZ.A', volume: 2750, lastPrice: 145.2, changePct: 1.1 },
]

const round = (value: number, decimals: number) => Number(value.toFixed(decimals))

// Small random drift so the periodic refresh is visible while the data is mocked.
// Quotes with no change stay flat, so the "=" state is always represented.
const getQuotes = (): RawQuote[] =>
  BASE_QUOTES.map((quote) => {
    if (quote.changePct === 0) return quote
    const drift = (Math.random() - 0.5) * 0.01
    return {
      ...quote,
      volume: Math.round(quote.volume * (1 + Math.random() * 0.1)),
      lastPrice: round(quote.lastPrice * (1 + drift), 2),
      changePct: round(quote.changePct + drift * 100, 2),
    }
  })

export default defineEventHandler((event) => {
  setResponseHeader(event, 'Cache-Control', 'no-store')
  return { data: getQuotes(), updatedAt: new Date().toISOString() }
})
