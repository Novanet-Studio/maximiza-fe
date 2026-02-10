export const getResponsabilidadQuery = `
 query ResponsabilidadQuery {
    responsabilidad {
      principal {
        titulo
        contenido
        imagen {
          url
          alternativeText
        }
      }
      contribucion
      contribuciones_secciones {
        id
        titulo
        contenido
      }
      colaboracion_texto
    }
  }
`;