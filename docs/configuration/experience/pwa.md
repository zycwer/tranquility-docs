---
sidebar_position: 2
---

# PWA（可安装应用）

主题可生成 Progressive Web App 所需的 `manifest.json` 与 Service Worker（`sw.js`），让站点支持「添加到主屏幕」、离线访问与静态资源缓存。

## 配置

```yml
pwa:
  enable: false       # 默认关闭，开启后生成 manifest.json 与 sw.js
  name:               # 应用全名（留空则取站点 title）
  short_name:         # 主屏幕图标下的短名（留空则取 name 前 12 字符）
  description:        # 应用描述
  display: standalone # standalone | fullscreen | minimal-ui | browser
  theme_color: "#fcfcfb"        # 应用主题色（与深色模式浅色色板一致）
  background_color: "#fcfcfb"   # 启动画面背景色
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `enable` | 是否开启 PWA |
| `name` | 应用全名，留空则取站点 `title` |
| `short_name` | 主屏幕图标下的短名，留空则取 `name` 前 12 字符 |
| `description` | 应用描述 |
| `display` | 显示模式：`standalone` / `fullscreen` / `minimal-ui` / `browser` |
| `theme_color` | 应用主题色（状态栏/标题栏颜色） |
| `background_color` | 启动画面背景色 |

## manifest.json

开启后 `manifest.json` 自动从 `favicon` 配置生成 `icons` 数组：

- apple-touch-icon 180×180
- favicon-32×32
- svg

## Service Worker 缓存策略

`sw.js` 采用「HTML 网络优先、静态资源 stale-while-revalidate」策略：

- **HTML 页面**：优先请求网络保证内容最新，成功后写入缓存；网络失败时回退到缓存（离线可访问已浏览过的页面），缓存也没有时返回自动生成的**离线提示页** `offline.html`
- **静态资源**（JS / CSS / 图片 / 字体）：优先返回缓存（零延迟），同时在后台更新缓存，下次访问即最新
- **预缓存**：首页、核心样式与离线页在 SW 安装时预缓存，首次访问后即可完全离线打开
- **缓存版本管理**：缓存名携带版本号，主题部署新版本后旧缓存自动清空，不会出现新旧资源混用

页面会自动注册 Service Worker（仅在生产环境、HTTPS 或 `localhost` 下生效），并设置 `<meta name="theme-color">`。

> `hexo server` 本地开发时不会注册 Service Worker，避免开发环境被缓存干扰。

## HTTPS 要求

> **注意**：PWA 必须在 **HTTPS** 环境下才能注册 Service Worker（`localhost` 除外）。GitHub Pages、Vercel、Netlify、Cloudflare Pages 等托管平台默认提供 HTTPS，可直接使用。
