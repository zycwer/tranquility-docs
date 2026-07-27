---
sidebar_position: 6
---

# Comments

This fork removed the Gitalk comments feature built into the original theme (the original repo is archived, Gitalk is unmaintained, and it depends on GitHub OAuth). For comments, we recommend two lightweight, modern solutions — integrate them via [Custom Layout Templates](./custom-layout.md) or [script injection](./inject-head.md).

## Comparison

| Solution | giscus | Waline |
| --- | --- | --- |
| Data storage | GitHub Discussions | Self-hosted (LeanCloud / MySQL / PostgreSQL / SQLite) |
| Login | GitHub account | Anonymous / multiple OAuth |
| Setup difficulty | Low (no server) | Medium (needs a backend) |
| China access | Depends on GitHub | Self-hosted, controllable |
| Moderation | Via Discussions | Admin dashboard |
| Best for | Tech blogs, GitHub users | Anonymous comments, China access |

## Option 1: giscus

[giscus](https://giscus.app/) is powered by GitHub Discussions. Comments are stored in your repo's Discussions; users sign in with GitHub to comment.

### Step 1: Enable Discussions

In your blog repo (or a dedicated comments repo), go to Settings → General → Features and check Discussions.

### Step 2: Install the giscus App

Visit [giscus.app](https://giscus.app/) and follow the guide to select your repo and install the giscus App. You'll get the config parameters (`data-repo`, `data-repo-id`, `data-category`, `data-category-id`).

### Step 3: Inject the comment component

Override the post template in your blog root (see [Custom Layout Templates](./custom-layout.md)):

```bash
cp themes/tranquility/layout/post.njk layout/post.njk
```

Insert the following after the post body, before related posts, in `layout/post.njk`:

```html
<div class="giscus"></div>
<script src="https://giscus.app/client.js"
  data-repo="yourname/yourrepo"
  data-repo-id="R_XXXXXXXXX"
  data-category="Announcements"
  data-category-id="DIC_XXXXXXXXX"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="top"
  data-theme="preferred_color_scheme"
  data-lang="en"
  crossorigin="anonymous"
  async>
</script>
```

> `data-theme="preferred_color_scheme"` follows the system color scheme. To sync with the theme's dark mode, switch `data-theme` dynamically via JS.

### Step 4: Theme color sync (optional)

giscus won't auto-follow the theme's dark mode toggle. Inject a JS snippet in `scripts/` to listen for `data-theme` changes:

```js
hexo.extend.injector.register('body_end', `
  <script>
    const syncGiscus = () => {
      const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const iframe = document.querySelector('iframe.giscus-frame');
      if (iframe) iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
    };
    new MutationObserver(syncGiscus).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  </script>
`, 'post');
```

## Option 2: Waline

[Waline](https://waline.js.org/) is a self-hosted lightweight comment system supporting anonymous comments. The backend can be LeanCloud, MySQL, PostgreSQL, or SQLite.

### Step 1: Deploy the Waline backend

Follow the [Waline deployment guide](https://waline.js.org/guide/get-started/). After deployment you'll get a server URL (e.g. `https://your-waline.vercel.app`).

### Step 2: Load the client script

Similar to giscus, insert this after the post body in your overridden `layout/post.njk`:

```html
<div id="waline"></div>
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v3/dist/waline.css">
<script type="module">
  import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
  init({
    el: '#waline',
    serverURL: 'https://your-waline.vercel.app',
    dark: 'html[data-theme="dark"]',
    lang: 'en',
  });
</script>
```

> `dark: 'html[data-theme="dark"]'` makes Waline auto-follow the theme's dark mode.

## Notes

- **Upgrade safety**: the overridden `post.njk` lives in your blog root `layout/` and survives theme upgrades, but watch for theme `post.njk` updates and merge manually.
- **China access**: giscus depends on GitHub and may be unstable in China; Waline is self-hosted and more stable.
- **Performance**: add `async` or `defer` to comment scripts to avoid blocking rendering. The giscus script already has `async`.
- **Data backup**: giscus comments live in GitHub Discussions (exportable via the GitHub API); Waline data is in your self-hosted database — back it up yourself.
