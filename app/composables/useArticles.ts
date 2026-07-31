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

export const useArticles = () => {
  const { request } = useKairos()

  const getAllArticles = async (): Promise<MXMZ.Article[]> => {
    try {
      const { data } = await request<{ data: any[] }>('/articulos')
      return (data || []).map(normalize).sort((a, b) => b.fecha.localeCompare(a.fecha))
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
