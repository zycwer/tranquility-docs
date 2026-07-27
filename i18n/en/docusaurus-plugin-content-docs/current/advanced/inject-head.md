---
sidebar_position: 3
---

# Inject Custom Head Code

Many third-party services (site verification, analytics, ads, fonts) require `<meta>`, `<link>`, or `<script>` tags in the page `<head>`. The theme supports injecting custom head code without modifying templates.

## Option 1: Hexo injector (recommended)

Hexo natively provides `hexo.extend.injector` to inject code at specific positions. Create a JS file in your blog root's `scripts/` directory:

```js
// scripts/custom-head.js
hexo.extend.injector.register('head_begin', `
  <meta name="google-site-verification" content="your-verification-code">
  <link rel="preconnect" href="https://fonts.googleapis.com">
`, 'all');
```

`head_begin` injects at the very start of `<head>`. Available injection points:

| Point | Location |
| --- | --- |
| `head_begin` | Right after `<head>` |
| `head_end` | Right before `</head>` |
| `body_begin` | Right after `<body>` |
| `body_end` | Right before `</body>` |

`'all'` applies to all pages. You can also specify `'post'` (post pages only), `'page'` (custom pages), or `'home'` (homepage only).

### Example: post pages only

```js
hexo.extend.injector.register('head_end', `
  <script>console.log('post pages only')</script>
`, 'post');
```

## Option 2: Custom template file

Create `layout/_partials/custom-head.njk` in your blog root:

```html
<!-- layout/_partials/custom-head.njk -->
<meta name="baidu-site-verification" content="codeva-XXXXXX">
<link rel="stylesheet" href="/css/custom.css">
```

Then include it in an overridden `layout/_partials/layout.njk` `<head>` (see [Custom Layout Templates](./custom-layout.md)):

```html
<head>
  <!-- existing theme content -->
  {% include '_partials/custom-head.njk' %}
</head>
```

> Option 1 (injector) is lighter and recommended; Option 2 is useful when you need access to template variables (like `config.title`).

## Common use cases

### Google Search Console verification

```js
hexo.extend.injector.register('head_begin', `
  <meta name="google-site-verification" content="ABCDEFGH123456789">
`, 'all');
```

### Baidu webmaster verification

The theme has a built-in `baidu_site_verification` config — just fill it in `_config.tranquility.yml`:

```yml
baidu_site_verification: codeva-XXXXXX
```

### Load Google Fonts

```js
hexo.extend.injector.register('head_begin', `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap" rel="stylesheet">
`, 'all');
```

### Analytics

Baidu Analytics and Google Analytics have built-in config options — see [Analytics](./analytics.md).

## Notes

- **Performance**: synchronous `<script>` in `<head>` blocks rendering. Add `defer` or `async`, or inject at `body_end`.
- **CSP**: if your site uses Content Security Policy, inline scripts may be blocked. Allow `unsafe-inline` in CSP or use external scripts.
- **Upgrade safety**: injector scripts live in your blog root's `scripts/`, isolated from the theme directory — upgrades won't affect them.
