---
sidebar_position: 5
---

# Analytics

The theme has built-in config for Baidu Analytics and Google Analytics — no manual script injection needed.

## Baidu Analytics

```yml
# Baidu Webmaster verification code
# See: https://ziyuan.baidu.com/site
baidu_site_verification:

# Baidu Analytics App ID
# See: https://tongji.baidu.com
baidu_analytics: # <app_id>
```

| Field | Description |
| --- | --- |
| `baidu_site_verification` | Baidu Webmaster verification code (for search engine ownership verification) |
| `baidu_analytics` | Baidu Analytics App ID — auto-injects the tracking script when set |

### Getting the App ID

1. Sign in to [Baidu Analytics](https://tongji.baidu.com) and add your site.
2. In "Code Acquisition", find the ID in `hm.js?xxxxxxxxxxxxxxxxx`.
3. Fill it into `baidu_analytics`.

## Google Analytics

```yml
google_ad:
  enable: false
  meta_tag: "G-XXXXXXXXXX"  # Google Analytics 4 Measurement ID
```

| Field | Description |
| --- | --- |
| `google_ad.enable` | Whether to enable Google Analytics |
| `google_ad.meta_tag` | Google Analytics 4 Measurement ID, format `G-XXXXXXXXXX` |

### Getting the Measurement ID

1. Sign in to [Google Analytics](https://analytics.google.com) and create a GA4 property.
2. In "Data Streams", find the Measurement ID (starts with `G-`).
3. Fill it into `google_ad.meta_tag` and set `enable: true`.

## Other analytics services

For services not built into the theme (Umami, Plausible, 51.LA, CNZZ, etc.), inject the code via [Inject Custom Head Code](./inject-head.md). Example with Umami:

```js
// scripts/custom-head.js
hexo.extend.injector.register('head_end', `
  <script async defer data-website-id="your-website-id" src="https://umami.example.com/script.js"></script>
`, 'all');
```

## Privacy & compliance

- **GDPR / Cookie laws**: Baidu Analytics and Google Analytics collect user data. Sites serving European users must disclose this in a privacy policy and obtain consent.
- **Cookie-less alternatives**: for privacy-conscious sites, try [Umami](https://umami.is/) or [Plausible](https://plausible.io/) (self-hosted or SaaS, no cookies, no PII).
- **Do Not Track**: privacy-focused analytics tools respect the user's `DNT` preference and skip data collection.
