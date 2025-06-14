/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path'); // Used to get the path for markdown blog posts

module.exports = {
  // An export specifically for blog markdown files
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,     // Path for blog markdowns
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,    // Path for images
      },
    },
    `gatsby-transformer-remark`,            // Markdown Plugin Used
  ],
};