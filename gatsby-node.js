const path = require('path')

exports.createPages = async ({ actions:{ createPage }, graphql }) => {
  const blogTemplate = path.resolve('./src/pages/blog/blog.template.js')
  const { data } = await graphql(`
    {
      allStrapiArticulo {
        edges {
          node {
            id
            Slug
          }
        }
      }
    }
  `)

  if (data.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  data.allStrapiArticulo.edges.forEach(({ node: articulo }) => {
    const slug = articulo.Slug
  
    createPage({
      path: `/blog/${slug}`,
      component: blogTemplate,
      context: {
        id: articulo.id,
      },
    })
  })
}