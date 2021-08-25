require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Maximiza - Asesoría de inversión`,
    description: `Somos una casa de bolsa que ofrece innovadoras herramientas para la inversión, gestión y estructuración de activos financieros.`,
    author: `@novanetstudio`,
    image: `https://res.cloudinary.com/novanet-studio/image/upload/v1605300652/maximiza/uploads/maximiza_com_ve_inicio_289286fe23.jpg`,
    type: "website",
    siteUrl: "https://maximiza.com.ve",
    titleTemplate: " Maximiza",
    twitterUsername: "@novanetstudio",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maximiza`,
        short_name: `Maximiza`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00735f`,
        display: `standalone`,
        orientation: `portrait`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.NODE_ENV === 'production'
        ? process.env.API_URL
        : 'http://localhost:1337',
        contentTypes: ["articulo"],
        singleTypes: [
          "blog",
          "contact",
          "educacion",
          "empresa",
          "home",
          "legal",
          "servicios",
          "private-equity",
          "responsabilidad",
          "medios",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      otions: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-4W17JXKS6P", // Google Analytics / GA        
        ],
        gtagConfig: {
          optimize_id: "GTM-5LFLQGT",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,        
        },
      },
    },
  ],
}
