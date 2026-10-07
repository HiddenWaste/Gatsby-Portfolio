# Carter Gordon — Portfolio & Digital Lab

A personal website, portfolio, and self-publishing platform built with **Gatsby 5**, **React 18**, and **Tailwind CSS 3**. Serves as an interactive resume, showcase for creative audio and AI projects, and digital garden for essays and adventures.

---

## 🌟 Highlights & Features

- **Responsive Design**: Mobile-first navigation with slide-over drawer and collapsible desktop sidebar.
- **Self-Publishing Pipeline**: Markdown rendering with automatic category classification (`essays`, `blogs`, `projects`), tag filtering, and draft exclusions.
- **Syncthing Ready**: Point `CONTENT_DIR` to your synced writing vault to publish seamlessly from Obsidian, MarkText, or any device.
- **Interactive Audio & Creative Tech**: Showcases web audio projects (F-E-R-M, S-M-G, Word2Vec Sonic Poetry, Blanket Synth).
- **Self-Hosting Ready**: Multi-stage Docker setup with high-performance Nginx caching, ready for Proxmox VE LXC + Cloudflare Tunnel.

---

## 🚀 Quick Start

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start Gatsby local dev server
npm start
# -> Site running at http://localhost:8000
```

### Production Build

```bash
# Build static files
npm run build

# Test static production build locally
npm run serve
```

### Docker Deployment

```bash
# Build and run the lightweight container
docker compose up -d --build
# -> Site running at http://localhost:8080
```

---

## 📂 Content Organization

```text
content/
├── live/                    # Published content synced from your devices
│   ├── essays/              # Deep-dive essays & think pieces
│   ├── blogs/               # Short updates & music roundups
│   └── projects/            # Project writeups & lab notes
└── drafts/                  # Works-in-progress (excluded from live site)
```

---

## 📖 Documentation

Detailed documentation is available in the [`docs/`](./docs) directory:

- [**Architecture Overview**](./docs/ARCHITECTURE.md): Technology stack, data lifecycle, and Gatsby nodes.
- [**Content & Publishing Workflow**](./docs/CONTENT_WORKFLOW.md): Syncthing setup, frontmatter specs, and media embedding.
- [**Styling Guide & Cheat Sheet**](./docs/STYLING_GUIDE.md): Tailwind CSS utilities, mobile breakpoints, and customization.
- [**Deployment Guide**](./docs/DEPLOYMENT.md): Proxmox LXC, Docker Compose, and Cloudflare Tunnel integration.

---

## 📜 License

Created by Carter Gordon. Open source for educational and portfolio demonstration.
