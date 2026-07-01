import { balances } from './schemas'

export const useBalances = () => {
  const graphql = useStrapiGraphQL()

  const getAllBalances = async () => {
    try {
      const response = await graphql<
        MXMZ.Response<{ balances: MXMZ.Balance[] }>
      >(balances.getAllBalances)
      return response.data?.balances || []
    } catch (error) {
      console.error('Error fetching all balances:', error)
      return []
    }
  }

  return {
    getAllBalances,
  }
}
