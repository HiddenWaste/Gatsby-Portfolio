# Content & Self-Publishing Workflow

This guide details how to write, manage, and publish essays, blogs, and project adventures using Markdown and Syncthing.

---

## 1. The Syncthing Model

The site is designed to pull content from a designated directory:
- **Default path**: `./content/live/` within the repository.
- **Configurable path**: Set the environment variable `CONTENT_DIR=/path/to/sync/live` before building or starting Gatsby.

### Recommended Vault Organization
In your Syncthing shared folder (e.g. from your laptop, phone, or tablet via Obsidian/MarkText):

```text
MyWritingVault/
├── drafts/                  # Unfinished ideas, rough notes (never built)
│   ├── new-synth-idea.md
│   └── book-notes.md
│
└── live/                    # Synced to your server / repository
    ├── essays/              # Polished deep-dive essays
    │   └── on-digital-timbre.md
    ├── blogs/               # Quick logs, monthly music roundups
    │   └── march-2026-listening.md
    └── projects/            # Project writeups & adventures
        └── pace-synth-breakdown.md
```

---

## 2. Frontmatter Specifications

Every post must begin with a YAML frontmatter block enclosed by three dashes (`---`).

### Standard Frontmatter Template

```yaml
---
title: "The Architecture of Algorithmic Sound"
date: "2026-10-07"
tags: ["Audio", "AI", "Creative Code"]
category: "essays"        # Optional: Defaults to folder name (essays, blogs, projects)
draft: false             # Set to true to hide from the live site
slug: "/essays/algo-sound" # Optional: Custom URL override
---
```

### Frontmatter Fields Reference

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | String | **Yes** | Post title displayed in headings and `<title>` tags |
| `date` | String | Recommended | Publication date in `YYYY-MM-DD` or custom string |
| `tags` | Array | Recommended | List of topic tags (e.g. `["Music", "Essay"]`) |
| `category`| String | Optional | Explicit category: `essays`, `blogs`, or `projects` |
| `draft` | Boolean | Optional | If `true`, the page is excluded from production builds |
| `slug` | String | Optional | Custom URL slug (e.g. `/my-custom-path/`) |

---

## 3. Formatting & Rich Media Examples

### Code Blocks with Syntax
Code snippets inside Markdown triple-backticks will render with clean monospace styling and dark container styling:

````markdown
```javascript
const synth = new Tone.Synth().toDestination();
synth.triggerAttackRelease("C4", "8n");
```
````

### Embedding Spotify Playlists or Tracks
Copy the Spotify embed code and paste it directly into your Markdown file:

```html
<iframe 
  style="border-radius:12px" 
  src="https://open.spotify.com/embed/playlist/37sGJT2tvpDBSY3pNpr0tV?utm_source=generator" 
  width="100%" 
  height="152" 
  frameBorder="0" 
  allowfullscreen="" 
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy">
</iframe>
```

### Embedding YouTube Videos
Use responsive iframe embedding:

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
  <iframe 
    src="https://www.youtube.com/embed/Us90SciE54w" 
    style="position: absolute; top:0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>
```

### Images
Place images in the markdown folder or reference public URLs:
```markdown
![Patch diagram](https://example.com/images/patch-diagram.png)
```

---

## 4. Publishing Checklist

1. **Write & Iterate**: Create the document in `content/drafts/` or with `draft: true`.
2. **Review Formatting**: Check that headings (`#`, `##`) and links work properly.
3. **Move to Live**: Move the `.md` file to `content/live/<category>/`.
4. **Trigger Build / Sync**:
   - Once Syncthing syncs the file to your server, trigger a container rebuild (`docker compose build && docker compose up -d`).
   - The site automatically registers the new slug and updates the Publishing Hub (`/blog`).

---

## 5. Recommended Tools & Resources

- [Obsidian](https://obsidian.md/) - Local-first Markdown editor that works seamlessly with Syncthing.
- [MarkText](https://marktext.dev/) - Free, open-source real-time preview Markdown editor.
- [Syncthing Official Documentation](https://docs.syncthing.net/) - Multi-device continuous file synchronization.
- [Markdown Guide](https://www.markdownguide.org/) - Markdown syntax reference.
