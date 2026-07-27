---
sidebar_position: 3
---

# 注入自定义 Head 代码

很多第三方服务（站点验证、统计、广告、字体）要求在页面 `<head>` 中插入 `<meta>`、`<link>` 或 `<script>` 标签。本主题支持在不修改模板的前提下注入自定义 Head 代码。

## 方式一：通过 Hexo injector（推荐）

Hexo 原生提供 `hexo.extend.injector` API，可在指定位置注入代码。在博客根目录的 `scripts/` 下新建一个 JS 文件：

```js
// scripts/custom-head.js
hexo.extend.injector.register('head_begin', `
  <meta name="google-site-verification" content="你的验证码">
  <link rel="preconnect" href="https://fonts.googleapis.com">
`, 'all');
```

`head_begin` 表示注入到 `<head>` 的最前面。可选的注入点：

| 注入点 | 位置 |
| --- | --- |
| `head_begin` | `<head>` 标签之后最前面 |
| `head_end` | `</head>` 标签之前 |
| `body_begin` | `<body>` 标签之后 |
| `body_end` | `</body>` 标签之前 |

`'all'` 表示对所有页面生效，也可指定 `'post'`（仅文章页）、`'page'`（仅自定义页面）、`'home'`（仅首页）。

### 示例：仅文章页注入

```js
hexo.extend.injector.register('head_end', `
  <script>console.log('仅文章页可见')</script>
`, 'post');
```

## 方式二：通过自定义模板文件

在博客根目录创建 `layout/_partials/custom-head.njk`：

```html
<!-- layout/_partials/custom-head.njk -->
<meta name="baidu-site-verification" content="codeva-XXXXXX">
<link rel="stylesheet" href="/css/custom.css">
```

然后在覆盖的 `layout/_partials/layout.njk` 的 `<head>` 中引入（参考[自定义布局模板](./custom-layout.md)）：

```html
<head>
  <!-- 主题原有内容 -->
  {% include '_partials/custom-head.njk' %}
</head>
```

> 方式一（injector）更轻量，推荐优先使用；方式二适合需要访问模板变量（如 `config.title`）的场景。

## 常见用例

### Google Search Console 验证

```js
hexo.extend.injector.register('head_begin', `
  <meta name="google-site-verification" content="ABCDEFGH123456789">
`, 'all');
```

### 百度站长验证

主题已内置 `baidu_site_verification` 配置项，直接在 `_config.tranquility.yml` 填写即可，无需手动注入：

```yml
baidu_site_verification: codeva-XXXXXX
```

### 引入 Google Fonts

```js
hexo.extend.injector.register('head_begin', `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap" rel="stylesheet">
`, 'all');
```

### 站点统计代码

百度统计与 Google Analytics 已内置配置项，参考[站点统计](./analytics.md)。

## 注意事项

- **性能**：`<head>` 中的同步 `<script>` 会阻塞渲染，建议加 `defer` 或 `async`，或注入到 `body_end`。
- **CSP**：若站点启用了 Content Security Policy，内联脚本可能被拦截，需在 CSP 中放行 `unsafe-inline` 或改用外链。
- **升级保留**：injector 脚本放在博客根目录 `scripts/` 下，与主题目录隔离，升级主题不受影响。
