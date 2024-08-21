import React, { useState } from "react";    
import { graphql, Link } from "gatsby";     // Used to query markdown files
import Layout from "../components/layout";  // Used for general page layout

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

const tagButtonStyles = {
  margin: "5px",
  padding: "5px 10px",
  cursor: "pointer",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const BlogPage = ({ data }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const posts = data.allMarkdownRemark.edges;
  const allTags = Array.from(new Set(posts.flatMap(({ node }) => node.frontmatter.tags)));

  const filteredPosts = selectedTag
    ? posts.filter(({ node }) => node.frontmatter.tags.includes(selectedTag))
    : posts;

  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Blog and Essay Homepage</h1>
        <p>Welcome to my blog! Here you'll find essays and rants on my various interests and what I am working on!</p>
        <br />

        <div>
          <h4>Filter by tags:</h4>
          <div>
            {allTags.map((tag) => (
              <button
                key={tag}
                style={tagButtonStyles}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
            <button style={tagButtonStyles} onClick={() => setSelectedTag(null)}>All</button>
          </div>
        </div>
        
        <ul style={blogListStyles}>
          {filteredPosts.map(({ node }) => (
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
            tags
          }
          excerpt
        }
      }
    }
  }
`