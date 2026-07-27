---
sidebar_position: 1
---

# Open Graph & Twitter Card

The theme automatically injects Open Graph and Twitter Card meta tags into every page, used by social platforms to render the title, description, and cover image when sharing (read by WeChat, Telegram, Twitter/X, Slack, Discord, etc.).

No extra configuration needed — tags are generated automatically:

- `og:type` — `article` on post pages, `website` elsewhere
- `og:title` / `og:description` — from the page title and description (posts use their excerpt)
- `og:url` — absolute URL of the page (generated via `full_url_for`)
- `og:site_name` — taken from `title` in your blog's root `_config.yml`
- `og:image` — priority: post `cover` → homepage `index.photo` → `logo`
- `twitter:card` — `summary_large_image` by default (when a cover exists) or `summary`

## Customizing the share image

To customize the share image, set the `cover` field in a post's front-matter (used both as the post list cover and the share card image):

```yml
---
title: One of My Posts
cover: /assets/images/my-cover.jpg
---
```

:::note
`og:image` is automatically converted to an absolute URL. If `cover` is already a full URL starting with `http(s)://`, it is used as-is.
:::
