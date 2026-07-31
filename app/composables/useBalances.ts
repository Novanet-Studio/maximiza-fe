import { useKairos } from './useKairos'

// Kairos entrega balance-tipo -> inverse_relations["balance-periodo.type"];
// lo aplanamos a la forma MXMZ.Balance que ya consume BalanceSection.vue.
const normalize = (tipo: any): MXMZ.Balance => ({
  label: tipo.label,
  items: (tipo.inverse_relations?.['balance-periodo.type'] || []).map(
    (periodo: any): MXMZ.BalanceItem => ({
      ano: periodo.data?.ano,
      source: (periodo.data?.items || []).map((doc: any): MXMZ.BalanceSource => ({
        label: doc.label,
        file: { url: doc.file },
      })),
    })
  ),
})

export const useBalances = () => {
  const { request } = useKairos()

  const getAllBalances = async (): Promise<MXMZ.Balance[]> => {
    try {
      const { data } = await request<{ data: any[] }>('/balance-tipo', {
        fullRelation: 'true',
      })
      return (data || []).map(normalize)
    } catch (error) {
      console.error('Error fetching all balances:', error)
      return []
    }
  }

  return {
    getAllBalances,
  }
}
