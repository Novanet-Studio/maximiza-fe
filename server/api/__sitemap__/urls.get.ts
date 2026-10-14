// Source for @nuxtjs/sitemap (wired in nuxt.config.ts via sitemap.sources). The module only
// auto-discovers static file-based routes, so the dynamic ones — /registro/[person] and
// /blog/[slug] — are listed here instead: the two known person types, plus every article slug
// fetched straight from Kairos (same URL-building as server/api/cms/[...path].get.ts, but
// without its origin validation, since the path here is a hardcoded literal, not user input).

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  let articleSlugs: string[] = []
  try {
    const base = new URL(config.kairos.url)
    const basePrefix = base.pathname.endsWith('/') ? base.pathname : `${base.pathname}/`
    const target = new URL('articulos', `${base.origin}${basePrefix}`)

    // Kairos rejects a request whose Origin isn't the production site with a 403; a
    // server-to-server call carries none of its own, so it's set explicitly here too
    // (mirrors server/api/cms/[...path].get.ts).
    const { data } = await $fetch<{ data: { slug: string }[] }>(target.toString(), {
      headers: { 'x-api-key': config.kairos.apiKey, origin: config.kairos.origin },
    })

    articleSlugs = (data || []).map((item) => item.slug)
  } catch {
    // A CMS outage must not break sitemap generation; it just omits the articles for this run.
  }

  return [
    '/registro/persona-natural',
    '/registro/persona-juridica',
    ...articleSlugs.map((slug) => `/blog/${slug}`),
  ]
})
