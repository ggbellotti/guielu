module.exports = {
  siteMetadata: {
    title: `Guielu Fotografia`,
    description: `Amamos contar histórias e registra-las através da fotografia. Queremos registrar sua história para que você lembre-se dela para sempre.`,
    author: `@guielu_fotos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: `${__dirname}/src/images/`,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carousel`,
        path: `${__dirname}/src/images/carousel`,
      },
    },
    // need to come after 'uploads' and 'carousel'
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1280,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-zoom`,
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Barlow Semi Condensed\:200,200i,400,400i,600,600i`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `guielu-fotografia`,
        short_name: `Guielu`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon-preto.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
