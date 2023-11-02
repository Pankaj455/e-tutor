/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path')

module.exports = {
  siteMetadata: {
    title: `e-tutor`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-use-query-params",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
  ],
};
