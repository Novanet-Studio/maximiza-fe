const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allStrapiArticulo {
          nodes {
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    );

    return;
  }

  const articulos = result.data.allStrapiArticulo.nodes;
  const articuloTemplate = path.resolve("./src/templates/articulo.js");

  if (articulos.length < 1) {
    reporter.panicOnBuild("An error ocurred!");
    return;
  }

  articulos.forEach((item) => {
    createPage({
      path: `/blog/${item.slug}`,
      component: articuloTemplate,
      context: {
        slug: item.slug,
      },
    });
  });
};
