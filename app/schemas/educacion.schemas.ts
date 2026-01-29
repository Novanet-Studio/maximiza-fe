export const getEducacionQuery = `
  query EducacionQuery {
    educacion {
      principal {
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
      items_titulo
      items {
        id
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
      programas_titulo
      programas {
        id
        seccion
        mercados {
          id
          titulo
          contenido
        }
        imagen {
          url
          alternativeText
        }
      }
    }
  }
`;