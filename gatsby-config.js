/**
 * @type {import('gatsby').GatsbyConfig}
 */

const fs = require('fs');
const path = require('path');

// Determine content directory:
// 1. CONTENT_DIR environment variable (e.g. Syncthing live folder)
// 2. content/live in project root
// 3. Fallback to src/blogs for backward compatibility
let contentPath = path.resolve(__dirname, 'content/live');
if (process.env.CONTENT_DIR && fs.existsSync(process.env.CONTENT_DIR)) {
  contentPath = path.resolve(process.env.CONTENT_DIR);
} else if (!fs.existsSync(contentPath) && fs.existsSync(path.resolve(__dirname, 'src/blogs'))) {
  contentPath = path.resolve(__dirname, 'src/blogs');
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: contentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
  ],
};