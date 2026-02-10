export const getEmpresaQuery = `
query EmpresaQuery {
  empresa {
    principal {
      titulo
      contenido
      imagen {
        url
        alternativeText
      }
    }
    historia {
      id
      titulo
      contenido
      imagen {
        url
        alternativeText
      }
    }
    equipo {
      titulo
      contenido
    }
    nosotros {
      id
      titulo
      contenido
      imagen {
        url
        alternativeText
      }
    }
    aliados {
      titulo
      contenido
    }
    balances(pagination: { limit: -1 }) {
      id
      ano
      mes(pagination: { limit: -1 }) {
        id
        mes
        descarga
      }
    }
    balances_auditados(pagination: { limit: -1 }) {
      id
      ano
      mes(pagination: { limit: -1 }) {
        id
        mes
        descarga
      }
    }
  }
}
`;
