---
sidebar_position: 6
---

# Comments

The theme has built-in comment system integration supporting **giscus / Waline / Disqus**. Fill in the corresponding fields in the `comments` block of `_config.tranquility.yml` and the theme auto-renders the comment component at the bottom of post pages — no template modifications needed.

## Enabling comments

```yml
comments:
  enable: true
```

When `enable: false`, post pages won't render the comment section. When `true`, the theme picks the first fully-configured solution in **giscus → Waline → Disqus** priority order.

## Solution comparison

| Solution | giscus | Waline | Disqus |
| --- | --- | --- | --- |
| Data storage | GitHub Discussions | Self-hosted (LeanCloud / MySQL / PostgreSQL / SQLite) | Disqus servers |
| Login | GitHub account | Anonymous / multiple OAuth | Disqus account / anonymous |
| Setup difficulty | Low (no server) | Medium (needs backend) | Low (register and go) |
| China access | Depends on GitHub | Self-hosted, controllable | Requires VPN |
| Dark mode sync | Supported (`theme: auto`) | Supported (auto-follow) | Controlled by Disqus |
| Best for | Tech blogs, GitHub users | Anonymous comments, China access | Overseas sites |

## Option 1: giscus

[giscus](https://giscus.app/) is powered by GitHub Discussions. Comments are stored in your repo's Discussions; users sign in with GitHub to comment.

### 1. Enable Discussions

In your blog repo (or a dedicated comments repo), go to Settings → General → Features and check Discussions.

### 2. Install the giscus App and get parameters

Visit [giscus.app](https://giscus.app/) and follow the guide to select your repo and install the giscus App. You'll get `data-repo`, `data-repo-id`, `data-category`, `data-category-id`.

### 3. Fill in the config

```yml
comments:
  enable: true
  giscus:
    repo: yourname/yourrepo           # format: owner/repo
    repo_id: R_XXXXXXXXX              # from giscus.app
    category: Announcements            # Discussions category name
    category_id: DIC_XXXXXXXXX        # from giscus.app
    mapping: pathname                  # mapping: pathname | url | title | og:title
    reactions_enabled: 1               # reactions: 0 off / 1 on
    input_position: bottom             # comment box position: top / bottom
    lang: en                           # language
    theme: auto                        # light / dark / preferred_color_scheme / auto
```

### giscus theme options

| Value | Behavior |
| --- | --- |
| `light` | Fixed light |
| `dark` | Fixed dark |
| `preferred_color_scheme` | Follows system color scheme |
| `auto` | **Follows the theme's dark mode toggle** (recommended) |

When set to `auto`, the theme sends a `postMessage` to giscus when you toggle dark mode, syncing the comment theme color automatically — no manual action needed.

## Option 2: Waline

[Waline](https://waline.js.org/) is a self-hosted lightweight comment system supporting anonymous comments. The backend can be LeanCloud, MySQL, PostgreSQL, or SQLite.

### 1. Deploy the Waline backend

Follow the [Waline deployment guide](https://waline.js.org/guide/get-started/). After deployment you'll get a server URL (e.g. `https://your-waline.vercel.app`).

### 2. Fill in the config

```yml
comments:
  enable: true
  waline:
    serverURL: https://your-waline.vercel.app
    lang: en
    emoji:                              # optional, emoji CDN; leave empty for default
```

Waline's dark mode auto-follows the theme (via the CSS selector `html[data-theme="dark"]`) — no extra config needed.

## Option 3: Disqus

[Disqus](https://disqus.com/) is a veteran comment system — register and go, but requires a VPN in mainland China.

### 1. Register and get the shortname

Create a site at [Disqus](https://disqus.com/admin/create/) to get the shortname.

### 2. Fill in the config

```yml
comments:
  enable: true
  disqus:
    shortname: your-shortname
```

## Priority and coexistence

The theme picks the first "fully configured" solution in **giscus → Waline → Disqus** priority order:

- giscus requires `repo`, `repo_id`, `category`, `category_id` all non-empty
- Waline requires `serverURL` non-empty
- Disqus requires `shortname` non-empty

For example, if both giscus and Waline configs are filled but giscus's `repo` is empty, Waline is used. To avoid confusion, fill in only one solution's config.

## Disabling comments

```yml
comments:
  enable: false
```

Or disable per-post via front-matter (requires a custom template — see [Custom Layout Templates](./custom-layout.md)).

## Notes

- **China access**: giscus depends on GitHub and may be unstable in China; Waline is self-hosted and more stable; Disqus is essentially unusable in China.
- **Performance**: all comment scripts use `async` or `defer` and don't block rendering.
- **Data backup**: giscus comments live in GitHub Discussions (exportable via the GitHub API); Waline data is in your self-hosted database — back it up yourself; Disqus data is on Disqus servers (exportable from the dashboard).
- **Upgrade safety**: comment config lives in your blog root's `_config.tranquility.yml` and is unaffected by theme upgrades.
