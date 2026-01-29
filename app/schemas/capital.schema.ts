export const getCapitalQuery = `
  query CapitalQuery {
    capital {
      principal {
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
      partners_titulo
      partners_secciones {
        id
        contenido
        imagen {
          url
          alternativeText
        }
      }
    }
  }
`;