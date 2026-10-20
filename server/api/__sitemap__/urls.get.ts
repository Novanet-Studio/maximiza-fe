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
    type ArticlesPage = {
      data: { slug: string }[]
      pagination?: { totalPages?: number }
    }
    const fetchPage = (page: number) =>
      $fetch<ArticlesPage>(target.toString(), {
        headers: { 'x-api-key': config.kairos.apiKey, origin: config.kairos.origin },
        query: { page },
      })

    // Kairos paginates /articulos with a fixed page size, so every page has to be walked or the
    // newest articles (which land on the last page) are left out. Capped like useArticles.ts.
    const first = await fetchPage(1)
    const totalPages = Math.min(first.pagination?.totalPages || 1, 20)
    const rest = await Promise.allSettled(
      Array.from({ length: totalPages - 1 }, (_, i) => fetchPage(i + 2))
    )

    articleSlugs = [
      ...(first.data || []),
      ...rest.flatMap((page) => (page.status === 'fulfilled' ? page.value.data || [] : [])),
    ].map((item) => item.slug)
  } catch {
    // A CMS outage must not break sitemap generation; it just omits the articles for this run.
  }

  return [
    '/registro/persona-natural',
    '/registro/persona-juridica',
    ...articleSlugs.map((slug) => `/blog/${slug}`),
  ]
})
