exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allStrapiArticulo {
          edges {
            node {
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
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1280)
                  }
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

  const articulos =
    result.data.allStrapiArticulo.edges;
  const articuloTemplate = require.resolve("./src/templates/articulo.js");

  articulos.forEach((item) => {
    createPage({
      path: `/blog/${item.node.slug}`,
      component: articuloTemplate,
      context: {
        articulo: item,
      },
    });
  });
};
