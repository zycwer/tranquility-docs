---
sidebar_position: 5
---

# Security Policy

The theme ships a Content Security Policy (CSP) plus two privacy policy headers, providing a browser-level defense line for static hosting (GitHub Pages, Vercel, etc.). Enabled by default.

## Background

Static hosting usually cannot customize HTTP response headers, so the theme delivers these policies via `<meta>` tags:

- **Content-Security-Policy**: restricts the origins allowed for scripts, styles, images, fonts, etc., dramatically reducing the XSS attack surface
- **Referrer-Policy** (default `strict-origin-when-cross-origin`): cross-origin requests send only the origin, preventing full-URL leakage
- **Permissions-Policy** (default `camera=(), microphone=(), geolocation=()`): explicitly disables sensitive capabilities

## Configuration

```yml
security:
  enable: true
  csp_extra:                      # extra custom CSP directives (array)
    # - "worker-src 'self'"
  referrer_policy: strict-origin-when-cross-origin   # set false to disable
  permissions_policy: "camera=(), microphone=(), geolocation=()"   # set false to disable
```

## Options

| Field | Description |
| --- | --- |
| `security.enable` | Enable the security meta tags |
| `security.csp_extra` | Extra custom CSP directives |
| `security.referrer_policy` | Referrer-Policy value, `false` to disable |
| `security.permissions_policy` | Permissions-Policy value, `false` to disable |

## Automatic origin allowlist

The CSP allowlist is generated automatically from the features you **actually enable** — no manual maintenance:

| Feature | Allowed origins |
| --- | --- |
| Theme itself | `'self'` (scripts/styles/images/fonts) |
| CDN (MathJax / Mermaid / DocSearch) | your configured `cdn` origin |
| Hitokoto slogan | `connect-src` allows `v1.hitokoto.cn` |
| Baidu Analytics | allows `hm.baidu.com` |
| giscus comments | allows `giscus.app` (script/iframe/connect) |
| Waline comments | allows `unpkg.com` and your `serverURL` |
| Disqus comments | allows `disqus.com` / `*.disquscdn.com` |

## If a third-party widget gets blocked

If a widget you inject via `inject_head` or similar is blocked by CSP (the browser console shows the blocked origin):

1. Append the required origins to `security.csp_extra`:
   ```yml
   security:
     csp_extra:
       - "script-src https://example.com https://cdn.another.com"
   ```
   :::note
   Sources in `csp_extra` are **merged** into the automatically generated directive of the same name — they never override each other.
   :::
2. Or set `security.enable` to `false` to disable everything (not recommended — you lose the XSS defense line).

## Build-time URL validation (url-guard)

Alongside CSP, the theme validates all link-like fields in the theme config (`url` / `link` / `icon` / `repo`, etc.) **at build time**:

- Only `http` / `https` / `mailto` / `tel` / `ftp` and relative paths are allowed
- Dangerous protocols such as `javascript:` trigger a build warning and the link is neutralized to `#`, preventing stored XSS
