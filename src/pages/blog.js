// src/pages/blog.js

import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const pageStyles = {
  color: "#232129",
  padding: "20px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: "20px",
  maxWidth: "600px",
};

const blogListStyles = {
  listStyleType: "none",
  padding: 0,
};

const blogItemStyles = {
  marginBottom: "20px",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "1.2rem",
  textDecoration: "none",
};

const BlogPage = ({ data }) => {
  if (!data) {
    return (
      <Layout>
        <main style={pageStyles}>
          <h1 style={headingStyles}>Blog</h1>
          <p>No blog posts found.</p>
        </main>
      </Layout>
    );
  }

  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Blog</h1>
        <p>Welcome to my blog! Here you'll find articles and tutorials on web development, React, and more.</p>
        <ul style={blogListStyles}>
          {posts.map(({ node }) => (
            <li key={node.fields.slug} style={blogItemStyles}>
              <Link to={node.fields.slug} style={linkStyle}>
                {node.frontmatter.title}
              </Link>
              <p>{node.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => <title>Blog</title>;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`;
