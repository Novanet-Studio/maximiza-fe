/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = require("./data/strapiConfig");

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
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-transition-link",
    "gatsby-transformer-remark",
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
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: [
          `/empresa/`,
          `/servicios/*`,
          `/directiva/`,
          `/contacto/`,
          `/capital/`,
          `/responsabilidad/`,
          `/medios/`,
          `/blog/*`,
          `/cumplimiento/`,
          `/sugerencias/`,
        ],
        workboxConfig: {
          globPatterns: ["src/assets/images/icon.png"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          breakpoints: [416, 736, 1024, 1280, 1366],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-4W17JXKS6P",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        cookieDomain: "maximiza.com.ve",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/assets/scss/global";`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};
