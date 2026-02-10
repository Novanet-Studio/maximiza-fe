export const getBlogQuery = `
  query BlogQuery {
    blog {
      principal {
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
    }
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
`;

export const getArticuloBySlugQuery = `
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
`;