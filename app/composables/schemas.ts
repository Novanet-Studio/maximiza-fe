export const articles = {
    getAllArticles: `
        query BlogQuery {    
            articulos(sort: "fecha:desc") {
                documentId
                titulo
                fecha
                slug
                descripcion
                imagen {
                    url
                    alternativeText
                }
            }
        }
    `,
    getArticleBySlug: `
        query ArticuloBySlug($slug: String!) {
            articulos(filters: { slug: { eq: $slug } }) {
                documentId
                titulo
                fecha
                slug
                descripcion
                imagen {
                    url
                    alternativeText
                }
            }
        }
    `
}

export const balances = {
    getAllBalances: `
        query BalanceQuery {
            balances {
                documentId
                label
                items {
                    ano
                    source(pagination: { limit: -1 }) {    
                        label
                        file {
                            url
                        }
                    }
                }
            }
        }
    `
}