/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path'); // Used to get the path for markdown blog posts

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};

// module.exports = {
//   siteMetadata: {
//     title: `FirstGatsby`,
//     siteUrl: `https://www.yourdomain.tld`
//   },
//   plugins: ["gatsby-transformer-remark", {
//     resolve: 'gatsby-source-filesystem',
//     options: {
//       "name": "blogs",
//       "path": path.join(`src`, `blogs`), // Use path.join to construct the path
//     },
//     __key: "blogs"
//   }]
// };