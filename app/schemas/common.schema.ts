export const getFooterQuery = `
  query FooterQuery {
    contacto {
      info_contacto {
        id
        icono
        prefijo
        vinculo
        contenido
      }
    }
  }
`;