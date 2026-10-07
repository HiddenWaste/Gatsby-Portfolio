# Architecture Overview

This document explains the technical architecture, data flow, and file layout of Carter Gordon's portfolio and self-publishing website.

---

## 1. High-Level Technology Stack

- **Framework**: [Gatsby 5](https://www.gatsbyjs.com/) (Static Site Generation / SSG with React 18)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) via PostCSS (`gatsby-plugin-postcss`)
- **Content Engine**: Markdown parsed with `gatsby-transformer-remark` and `gatsby-source-filesystem`
- **Asset Pipeline**: Responsive images, Webpack asset handling, Tone.js Web Audio integrations
- **Hosting / Deployment**: Multi-stage Docker container (Node.js builder + Nginx Alpine runner) designed for Proxmox LXC + Cloudflare Tunnel (`cloudflared`)

---

## 2. Directory Structure

```text
gatsby-portfolio/
├── content/                     # Self-published markdown vault
│   ├── live/                    # Published content (synced via Syncthing)
│   │   ├── blogs/               # Short-form blogs & logs
│   │   ├── essays/              # Deep-dive essays & think-pieces
│   │   └── projects/            # Project writeups & adventures
│   └── drafts/                  # Works in progress (excluded from live site)
│
├── docs/                        # Complete technical documentation
│   ├── ARCHITECTURE.md          # This file
│   ├── CONTENT_WORKFLOW.md      # Syncthing & Markdown writing guide
│   ├── STYLING_GUIDE.md         # Tailwind CSS & design customization
│   └── DEPLOYMENT.md            # Proxmox LXC, Docker & Cloudflare guide
│
├── src/
│   ├── components/              # Shared React components
│   │   ├── layout.js            # App shell, responsive header, footer
│   │   └── sidebar.js           # Responsive drawer / desktop sidebar
│   ├── images/                  # Static images & project thumbnails
│   │   └── index.js             # Centralized image exports
│   ├── pages/                   # Top-level Gatsby routes
│   │   ├── index.js             # Homepage & featured projects
│   │   ├── about-me.js          # Bio, credentials, resume preview
│   │   ├── blog.js              # Publishing hub (filter by category & tag)
│   │   ├── github-fun.js        # Curated repo bookmarks
│   │   ├── 404.js               # Friendly 404 page
│   │   └── projects/            # Individual project showcases
│   │       ├── ferm.js          # F-E-R-M interactive embed
│   │       ├── smg.js           # Simple Music Generator embed
│   │       ├── sonicPoetry.js   # Word2Vec Sonic Poetry embed
│   │       └── blanket-synth.js # Blanket-Synth YouTube embed
│   ├── templates/               # Dynamic page templates
│   │   └── blog-post.js         # Single essay / blog post view
│   ├── global.css               # Tailwind directives & .prose-custom typography
│   └── styles.js                # Design presets and helper constants
│
├── static/                      # Untouched static assets (e.g. resume.pdf)
├── Dockerfile                   # Multi-stage production container build
├── docker-compose.yml           # Compose orchestration for Proxmox LXC
├── nginx.conf                   # High-performance static caching config
├── gatsby-config.js             # Plugins and data source definitions
├── gatsby-node.js               # Node creation, slug & category resolution
├── gatsby-browser.js            # Browser-level global CSS imports
├── gatsby-ssr.js                # Server-side rendering CSS imports
├── tailwind.config.js           # Tailwind theme & content configuration
└── postcss.config.js            # PostCSS plugin pipeline
```

---

## 3. Data Flow & Page Lifecycle

### A. Sourcing Content (`gatsby-config.js`)
Gatsby uses `gatsby-source-filesystem` to locate files on disk:
- It checks `process.env.CONTENT_DIR`. If provided and the folder exists, it uses that path (ideal for mounting an external Syncthing directory).
- If not provided, it falls back to `./content/live`.
- If `./content/live` is not found, it falls back to `./src/blogs`.

### B. Node Creation & Field Enrichment (`gatsby-node.js`)
When Gatsby processes each Markdown file:
1. **Category Assignment**: Derived from either the `category` frontmatter field or the directory name (`essays/`, `blogs/`, or `projects/`).
2. **Slug Generation**: Created based on the file hierarchy (e.g., `/essays/reflection-on-creativity/`) or customized via `slug` frontmatter.
3. **Draft Flag**: Identifies whether `draft: true` is set in the frontmatter.

### C. Page Creation (`gatsby-node.js`)
During `createPages`:
1. Gatsby runs a GraphQL query across all `allMarkdownRemark` nodes.
2. Nodes with `fields.draft === true` are filtered out.
3. For each published node, Gatsby instantiates a page route using `src/templates/blog-post.js` and injects the `slug` and `category` into GraphQL page context.

### D. Component Rendering
- The template executes its page query using the provided `$slug`.
- The HTML output from Remark is injected into the container with `.prose-custom` styling for readable typography.

---

## 4. Key Outside Learning Resources

- **Gatsby Framework**:
  - [Official Gatsby Tutorial & Docs](https://www.gatsbyjs.com/docs/)
  - [Understanding Gatsby's Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)
- **GraphQL**:
  - [GraphQL for Gatsby Guide](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/)
  - [How to Query Data with GraphQL](https://graphql.org/learn/)
- **React 18**:
  - [React Official Documentation](https://react.dev/)
- **Tailwind CSS**:
  - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
