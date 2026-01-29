export const getHomeQuery = `
query HomeQuery {
  home {
    principal {
      logo_texto
      imagen {
        url
        alternativeText
      }
    }
    beneficios_titulo
    beneficios {
      id
      titulo
      contenido
    }
    servicios_titulo
    servicios {
      id
      titulo
      contenido
      link
      imagen {
        url
        alternativeText
      }
    }
    contacto_titulo
    contacto_descripcion
  }
}
`;
