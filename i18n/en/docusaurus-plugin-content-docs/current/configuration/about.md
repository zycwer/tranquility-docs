---
sidebar_position: 6
---

# About Page

The about page uses Hexo's native **Page** feature. Content is written in a markdown file — no need to fill it in the theme config.

## 1. Create the page

Create `about/index.md` in your blog's `source` directory:

```markdown
---
title: About
layout: about
date: 2024-01-01 00:00:00
---

Here's my about page. Full markdown syntax is supported.

## Experience

- Content is written directly in the page file
- Rendered from markdown to HTML using the theme's `about` layout
```

## 2. Enable the nav entry

Enable the nav entry in `_config.tranquility.yml`:

```yml
nav:
  sticky: false
  about: true   # show an "About" entry in the navbar, linking to /about/
```

The theme provides the `layout: about` page template, which renders the page title and markdown body, and automatically shows the blog RSS subscription link at the bottom (if [Recent Updates](./recent-updates.md) is enabled).
