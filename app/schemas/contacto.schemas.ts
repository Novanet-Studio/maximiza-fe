export const getContactoQuery = `
  query ContactoQuery {
    contacto {
      principal {
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
    }
  }
`;