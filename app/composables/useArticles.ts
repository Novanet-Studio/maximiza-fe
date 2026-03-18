import { articles } from './schemas'

export const useArticles = () => {
    const graphql = useStrapiGraphQL()

    const getAllArticles = async () => {
        try {
            const response = await graphql<any>(articles.getAllArticles)
            return response.data?.articulos || []
        } catch (error) {
            console.error('Error fetching all articles:', error)
            return []
        }
    }

    const getArticleBySlug = async (slug: string) => {
        try {
            const response = await graphql<any>(articles.getArticleBySlug, { slug })
            return response.data?.articulos?.[0] || null
        } catch (error) {
            console.error('Error fetching article by slug:', error)
            return null
        }
    }

    return {
        getAllArticles,
        getArticleBySlug
    }
}
