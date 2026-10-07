// gatsby-node.js
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const relativePath = (fileNode && fileNode.relativePath) || "";

    // 1. Determine category (from frontmatter or directory structure)
    let category = "general";
    if (node.frontmatter && node.frontmatter.category) {
      category = node.frontmatter.category.toLowerCase();
    } else if (relativePath.startsWith("essays")) {
      category = "essays";
    } else if (relativePath.startsWith("blogs")) {
      category = "blogs";
    } else if (relativePath.startsWith("projects")) {
      category = "projects";
    }

    createNodeField({
      node,
      name: `category`,
      value: category,
    });

    // 2. Determine slug (frontmatter override or file path)
    let slug = "";
    if (node.frontmatter && node.frontmatter.slug) {
      slug = node.frontmatter.slug;
      if (!slug.startsWith("/")) slug = `/${slug}`;
      if (!slug.endsWith("/")) slug = `${slug}/`;
    } else {
      slug = createFilePath({ node, getNode });
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    // 3. Draft flag
    const isDraft = Boolean(node.frontmatter && node.frontmatter.draft);
    createNodeField({
      node,
      name: `draft`,
      value: isDraft,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              category
              draft
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for markdown pages.`);
    return;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    // Skip draft pages in production/live page generation
    if (node.fields.draft) {
      return;
    }

    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        category: node.fields.category,
      },
    });
  });
};
