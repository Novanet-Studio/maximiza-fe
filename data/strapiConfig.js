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
    "empresa",
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
                  localfile: "*"
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
                  localfile: "*"
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
  ],
};

module.exports = strapiConfig;