const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["articulo"],
  singleTypes: [
    "blog",
    "capital",
    "contacto",
    "directiva",
    "educacion",
    "legal",
    "medio",
    "responsabilidad",
    "servicio",
    "sugerencia",

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
              tutulo: "*",
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
              tutulo: "*",
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
                 descarga: "*"
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
                 descarga: "*"
                },
              },
            },
          },
        },
      },
    },
  ],
};

module.exports = strapiConfig;
