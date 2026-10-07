// src/pages/blog.js
import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState(null);

  const posts = data.allMarkdownRemark.edges;

  // Extract unique categories and tags
  const allCategories = Array.from(
    new Set(posts.map(({ node }) => node.fields.category || "general"))
  ).sort();

  const rawTags = posts.flatMap(({ node }) => node.frontmatter.tags || []);
  const allTags = Array.from(new Set(rawTags.filter(Boolean))).sort();

  // Filter posts by category and tag
  const filteredPosts = posts.filter(({ node }) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (node.fields.category || "").toLowerCase() === selectedCategory.toLowerCase();

    const matchesTag =
      selectedTag === null || (node.frontmatter.tags || []).includes(selectedTag);

    return matchesCategory && matchesTag;
  });

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
            Writings, Essays & Logs
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Publishing Hub
          </h1>
          <p className="text-slate-600 mt-2 text-base sm:text-lg max-w-2xl">
            My self-published essays, music reviews, project development adventures, and thought logs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider">
            Section:
          </span>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedTag(null);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
              selectedCategory === "all"
                ? "bg-purple-700 text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            All Works ({posts.length})
          </button>
          {allCategories.map((cat) => {
            const count = posts.filter(
              ({ node }) => (node.fields.category || "").toLowerCase() === cat.toLowerCase()
            ).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold capitalize transition ${
                  selectedCategory === cat
                    ? "bg-purple-700 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Tag Pills */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs text-slate-400 mr-1.5">Tags:</span>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-xs text-purple-700 bg-purple-100 hover:bg-purple-200 px-2 py-0.5 rounded-md font-medium transition"
              >
                Clear #{selectedTag} ✕
              </button>
            )}
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${
                  selectedTag === tag
                    ? "bg-purple-700 text-white font-semibold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-3">
              <p className="text-slate-500 font-medium">No published posts found in this view.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedTag(null);
                }}
                className="text-xs font-semibold text-purple-700 underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredPosts.map(({ node }) => {
              const { slug, category } = node.fields;
              const { title, date, tags } = node.frontmatter;

              return (
                <article
                  key={slug}
                  className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-full">
                        {category}
                      </span>
                      {tags &&
                        tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                          >
                            #{t}
                          </span>
                        ))}
                    </div>
                    {date && (
                      <time className="text-xs text-slate-400 font-medium">
                        {date}
                      </time>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition">
                    <Link to={slug} className="hover:underline">
                      {title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base mt-2.5 line-clamp-2 leading-relaxed">
                    {node.excerpt}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={slug}
                      className="text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 inline-flex items-center group-hover:translate-x-0.5 transition"
                    >
                      Read full article
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <span className="text-xs text-slate-400 font-mono">
                      {slug}
                    </span>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => <title>Writings & Essays | Carter Gordon</title>;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
            category
            draft
          }
          frontmatter {
            title
            date
            tags
          }
          excerpt(pruneLength: 220)
        }
      }
    }
  }
`;