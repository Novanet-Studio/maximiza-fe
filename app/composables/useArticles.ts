import { useKairos } from './useKairos'

// La API de Kairos usa nombres planos (title/date/portrait); los mapeamos a
// MXMZ.Article para no tocar los templates que ya consumen la forma de Strapi.
const normalize = (item: any): MXMZ.Article => ({
  titulo: item.title,
  fecha: item.date,
  slug: item.slug,
  descripcion: item.description,
  imagen: {
    url: item.portrait,
    alternativeText: item.portrait_alt,
  },
})

// Kairos pagina /articulos con un tamaño fijo (ignora `limit`) y en orden de inserción, así que
// el artículo más reciente puede caer en la última página. El tope evita un bucle desmedido si
// el CMS devuelve un totalPages absurdo.
const MAX_PAGES = 20

type ArticlesPage = {
  data: any[]
  pagination?: { totalPages?: number }
}

export const useArticles = () => {
  const { request } = useKairos()

  const getAllArticles = async (): Promise<MXMZ.Article[]> => {
    try {
      const first = await request<ArticlesPage>('/articulos')
      const totalPages = Math.min(first.pagination?.totalPages || 1, MAX_PAGES)

      // Las páginas restantes se piden en paralelo; si alguna falla se muestran las demás en
      // lugar de vaciar el blog entero.
      const rest = await Promise.allSettled(
        Array.from({ length: totalPages - 1 }, (_, i) =>
          request<ArticlesPage>('/articulos', { page: String(i + 2) })
        )
      )

      const data = [
        ...(first.data || []),
        ...rest.flatMap((page) => (page.status === 'fulfilled' ? page.value.data || [] : [])),
      ]

      return data.map(normalize).sort((a, b) => b.fecha.localeCompare(a.fecha))
    } catch (error) {
      console.error('Error fetching all articles:', error)
      return []
    }
  }

  const getArticleBySlug = async (slug: string): Promise<MXMZ.Article | null> => {
    try {
      const { data } = await request<{ data: any }>(`/articulos/${slug}`)
      return data ? normalize(data) : null
    } catch (error) {
      console.error('Error fetching article by slug:', error)
      return null
    }
  }

  return {
    getAllArticles,
    getArticleBySlug,
  }
}
