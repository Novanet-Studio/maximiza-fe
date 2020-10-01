require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        name: `novanet-project-template`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      otions: {
        useResolveUrlLoader: true,
      },
    },
    // Uncomment to use
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL,
        contentTypes: ["articulo"],
        singleTypes: ["blog", "contacto", "educacion", "empresa", "inicio", "servicios"],
        queryLimit: 1000,
      },
    },
  ],
}
