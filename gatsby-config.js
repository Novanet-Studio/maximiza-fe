require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Maximiza - Asesoría de inversión`,
    description: `Somos una casa de bolsa que ofrece innovadoras herramientas para la inversión, gestión y estructuración de activos financieros.`,
    author: `@novanetstudio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/icon.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },

    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL,
        contentTypes: ["articulo"],
        singleTypes: [
          "blog",
          "contacto",
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
  ],
}
