export const getCumplimientoQuery = `
  query CumplimientoQuery {
    legal {
      principal {
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
      informacion {
        id
        titulo
        contenido
      }
      codigo {
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
      normativas_titulo
      descargas {
        id
        documento
        vinculo
      }
    }
  }
`;