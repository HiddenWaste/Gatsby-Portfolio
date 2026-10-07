// src/templates/blog-post.js
import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, date, tags } = post.frontmatter;

  return (
    <Layout>
      <article className="max-w-3xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-semibold text-purple-700 hover:text-purple-900 transition group"
          >
            <svg
              className="w-4 h-4 mr-1.5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all essays & posts
          </Link>
        </div>

        {/* Post Header Card */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {post.fields && post.fields.category && (
              <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-2.5 py-1 rounded-md">
                {post.fields.category}
              </span>
            )}
            {tags &&
              tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            {date && (
              <span className="text-xs font-medium text-slate-400 ml-auto">
                Published: {date}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>
        </header>

        {/* Post Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <div
            className="prose-custom max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        {/* Post Footer */}
        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-sm font-semibold transition"
          >
            ← More Articles
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-slate-500 hover:text-purple-700 transition"
          >
            Portfolio Home
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

export const Head = ({ data }) => (
  <title>{data.markdownRemark.frontmatter.title} | Carter Gordon</title>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        category
      }
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;