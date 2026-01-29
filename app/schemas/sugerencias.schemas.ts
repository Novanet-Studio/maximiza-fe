export const getSugerenciasQuery = `
  query SugerenciasQuery {
    sugerencia {
      principal {
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
      info_sugerencias 
    }
  }
`;