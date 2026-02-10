export const getDirectivaQuery = `
  query DirectivaQuery {
    directiva {
      principal {
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
      secciones {
        seccion {
          id
          titulo
          imagen {
            url
            alternativeText
          }
          personas {
            id
            cargo
            persona
            descripcion
          }
        }
      }
    }
  }
`;