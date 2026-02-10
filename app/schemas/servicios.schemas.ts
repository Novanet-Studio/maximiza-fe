export const getServiciosQuery = `
query ServiciosQuery {
  servicio {
    principal {
      titulo
      contenido
      imagen {
        url
        alternativeText
      }
    }
    inversionista {
      id
      nombre
      identidad
      imagen {
        url
        alternativeText
      }
      items {
        id
        titulo
        contenido
        icono {
          url
          alternativeText
        }
      }
    }
  }
}
`;
