import { useKairos } from './useKairos'

const normalize = (item: any): MXMZ.Enlace => ({
  titulo: item.titulo,
  fecha: item.fecha,
  link: item.link,
})

export const useEnlaces = () => {
  const { request } = useKairos()

  const getAllEnlaces = async (): Promise<MXMZ.Enlace[]> => {
    try {
      const enlaces: any[] = []
      let page = 1
      let totalPages = 1

      do {
        const { data, pagination } = await request<{ data: any[]; pagination: { totalPages: number } }>(
          '/enlaces',
          { page: String(page) }
        )
        enlaces.push(...(data || []))
        totalPages = pagination?.totalPages || 1
        page += 1
      } while (page <= totalPages)

      return enlaces.map(normalize).sort((a, b) => b.fecha.localeCompare(a.fecha))
    } catch (error) {
      console.error('Error fetching all enlaces:', error)
      return []
    }
  }

  return {
    getAllEnlaces,
  }
}
