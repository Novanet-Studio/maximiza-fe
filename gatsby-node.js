exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allStrapiArticulo {
          nodes {
            id
            titulo
            fecha
            descripcion {
              data {
                descripcion
              }
            }
            slug
            imagen {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1280)
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const articulos = result.data.allStrapiArticulo.nodes;
  const articuloTemplate = require.resolve("./src/templates/articulo.js");

  articulos.forEach((item) => {
    createPage({
      path: `/blog/${item.slug}`,
      component: articuloTemplate,
      context: {
        articulo: item,
      },
    });
  });
};
