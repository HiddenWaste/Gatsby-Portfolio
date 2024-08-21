// src/templates/blog-post.js

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";


const BlogPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the contents horizontally
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  text-align: center; /* Center text inside the container */
`;

const BlogPostTitle = styled.h1`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const BlogPostContent = styled.div`
  line-height: 1.6;
  font-size: 16px;
  padding: 20px;
`;

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <BlogPostWrapper>
        <BlogPostTitle>{post.frontmatter.title}</BlogPostTitle>
        <BlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPostWrapper>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;