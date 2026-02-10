export const getMediosQuery = `
  query MediosQuery {
    medio {
      principal {
        titulo
        contenido 
        imagen {
          alternativeText
          url
        }
      }
    }
  }
`;