const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["articulo"],
  singleTypes: [
    "blog",
    {
      singularName: "home",
      queryParams: {
        populate: {
          principal: {
            populate: {
              logo_texto: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          servicios_titulo: "*",
          servicios: {
            populate: {
              id: "*",
              titulo: "*",
              contenido: "*",
              link: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          beneficios_titulo: "*",
          beneficios: {
            populate: {
              titulo: "*",
              id: "*",
              contenido: "*",
            },
          },
          contacto_titulo: "*",
          contacto_descripcion: "*",
        },
      },
    },

    {
      singularName: "empresa",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          historia: {
            populate: {
              id: "*",
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          equipo: {
            populate: {
              titulo: "*",
              contenido: "*",
            },
          },
          aliados: {
            populate: {
              id: "*",
              titulo: "*",
              contenido: "*",
            },
          },
          nosotros: {
            populate: {
              id: "*",
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          balances: {
            populate: {
              id: "*",
              ano: "*",
              mes: {
                populate: {
                  id: "*",
                  mes: "*",
                  descarga: "*",
                },
              },
            },
          },
          balances_auditados: {
            populate: {
              id: "*",
              ano: "*",
              mes: {
                populate: {
                  id: "*",
                  mes: "*",
                  descarga: "*",
                },
              },
            },
          },
        },
      },
    },

    {
      singularName: "servicio",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          inversionista: {
            populate: {
              id: "*",
              nombre: "*",
              identidad: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
              items: {
                populate: {
                  id: "*",
                  titulo: "*",
                  contenido: "*",
                  icono: {
                    populate: {
                      alternativeText: "*",
                      localfile: "*",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    {
      singularName: "directiva",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },

          secciones: {
            populate: {
              seccion: {
                populate: {
                  id: "*",
                  titulo: "*",
                  imagen: {
                    populate: {
                      alternativeText: "*",
                      localfile: "*",
                    },
                  },
                  personas: {
                    populate: {
                      cargo: "*",
                      descripcion: "*",
                      id: "*",
                      persona: "*",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    {
      singularName: "contacto",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          info_contacto: {
            populate: {
              icono: "*",
              prefijo: "*",
              contenido: "*",
              vinculo: "*",
            },
          },
        },
      },
    },

    {
      singularName: "capital",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          partners_titulo: "*",
          partners_secciones: {
            populate: {
              id: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
        },
      },
    },

    {
      singularName: "educacion",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          items_titulo: "*",
          items: {
            populate: {
              id: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          programas_titulo: "*",
          programas: {
            populate: {
              id: "*",
              seccion: "*",
              mercados: {
                populate: {
                  id: "*",
                  titulo: "*",
                  contenido: "*",
                },
              },
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
        },
      },
    },

    {
      singularName: "responsabilidad",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          contribucion: "*",
          contribuciones_secciones: {
            populate: {
              id: "*",
              titulo: "*",
              contenido: "*",
            },
          },
          colaboracion_texto: "*",
        },
      },
    },

    {
      singularName: "medio",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
        },
      },
    },

    {
      singularName: "legal",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          informacion: {
            populate: {
              id: "*",
              titulo: "*",
              contenido: "*",
            },
          },
          codigo: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          normativas_titulo: "*",
          descargas: {
            populate: {
              id: "*",
              documento: "*",
              titulo: "*",
            },
          },
        },
      },
    },

    {
      singularName: "sugerencia",
      queryParams: {
        populate: {
          principal: {
            populate: {
              titulo: "*",
              contenido: "*",
              imagen: {
                populate: {
                  alternativeText: "*",
                  localfile: "*",
                },
              },
            },
          },
          info_sugerencias: "*",
        },
      },
    },
  ],
};

module.exports = strapiConfig;
