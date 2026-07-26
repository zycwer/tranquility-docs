---
sidebar_position: 29
---

# 其他

其他配置请查看配置文件 `_config-template.yml` 的注释。

## 百度 SEO

```yml
# Baidu Webmaster tools verification.
# See: https://ziyuan.baidu.com/site
baidu_site_verification:

# Baidu Analytics
# See: https://tongji.baidu.com
baidu_analytics: # <app_id>
```

| 字段 | 说明 |
| --- | --- |
| `baidu_site_verification` | 百度站长平台站点验证码 |
| `baidu_analytics` | 百度统计 App ID |

## Google Analytics

```yml
google_ad:
  enable: false
  meta_tag: "G-XXXXXXXXXX" # Google Analytics meta tag
```

| 字段 | 说明 |
| --- | --- |
| `google_ad.enable` | 是否开启 Google Analytics |
| `google_ad.meta_tag` | Google Analytics 的 meta tag，如 `G-XXXXXXXXXX` |

## CDN

```yml
# 第三方库(MathJax / Mermaid / DocSearch)的 CDN 源
# 默认 jsDelivr;unpkg 国内访问不稳定。国内可改为 https://npm.elemecdn.com
cdn: https://cdn.jsdelivr.net/npm
```

`cdn` 用于配置第三方库（MathJax / Mermaid / DocSearch 等）的 CDN 源。默认使用 jsDelivr，国内可改为 `https://npm.elemecdn.com` 等更稳定的源。

## 评论功能

> 原主题内置的 Gitalk 已在本 fork 中移除（原仓库归档、Gitalk 不再维护且依赖 GitHub OAuth）。如需评论，推荐接入 [giscus](https://giscus.app/)（基于 GitHub Discussions）或 [Waline](https://waline.js.org/)，通过自定义 `layout` 或在 `source` 下页面文件中嵌入对应组件即可。
