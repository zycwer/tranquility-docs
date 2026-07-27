---
sidebar_position: 6
---

# 接入评论系统

本 fork 已移除原主题内置的 Gitalk 评论功能（原仓库归档、Gitalk 不再维护且依赖 GitHub OAuth）。如需评论，推荐以下两个轻量、现代的方案，并通过[自定义布局模板](./custom-layout.md)或[注入脚本](./inject-head.md)接入。

## 方案对比

| 方案 | giscus | Waline |
| --- | --- | --- |
| 数据存储 | GitHub Discussions | 自托管（LeanCloud / MySQL / PostgreSQL / SQLite） |
| 登录方式 | GitHub 账号 | 匿名 / 多种 OAuth |
| 部署难度 | 低（无需服务器） | 中（需部署后端） |
| 国内访问 | 依赖 GitHub | 自托管可控 |
| 审核 | 通过 Discussions 管理 | 后台管理面板 |
| 适合 | 技术博客、GitHub 用户 | 需要匿名评论、国内访问 |

## 方案一：giscus

[giscus](https://giscus.app/) 基于 GitHub Discussions，评论数据存储在你的仓库 Discussions 中，用户用 GitHub 账号登录后评论。

### 步骤 1：开启仓库 Discussions

在你的博客仓库（或专门的评论仓库）的 Settings → General → Features 勾选 Discussions。

### 步骤 2：安装 giscus App

访问 [giscus.app](https://giscus.app/)，按引导选择仓库并安装 giscus App，获取生成的配置参数（`data-repo`、`data-repo-id`、`data-category`、`data-category-id`）。

### 步骤 3：注入评论组件

在博客根目录覆盖文章模板（参考[自定义布局模板](./custom-layout.md)）：

```bash
cp themes/tranquility/layout/post.njk layout/post.njk
```

在 `layout/post.njk` 中文章正文之后、相关文章之前插入：

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
  data-lang="zh-CN"
  crossorigin="anonymous"
  async>
</script>
```

> `data-theme="preferred_color_scheme"` 会自动跟随系统深浅色。如需与主题深色模式联动，可改为 `data-theme="light"` / `"dark"` 并通过 JS 动态切换。

### 步骤 4：主题色联动（可选）

主题深色模式切换时，giscus 不会自动跟随。可在 `scripts/` 下注入一段 JS 监听 `data-theme` 变化：

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

## 方案二：Waline

[Waline](https://waline.js.org/) 是自托管的轻量评论系统，支持匿名评论，后端可选 LeanCloud / MySQL / PostgreSQL / SQLite。

### 步骤 1：部署 Waline 后端

参考 [Waline 官方部署文档](https://waline.js.org/guide/get-started/)，选择 LeanCloud、Vercel + 数据库或 Docker 部署。部署完成后获得服务端地址（如 `https://your-waline.vercel.app`）。

### 步骤 2：引入客户端脚本

与 giscus 类似，在覆盖的 `layout/post.njk` 文章正文之后插入：

```html
<div id="waline"></div>
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v3/dist/waline.css">
<script type="module">
  import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
  init({
    el: '#waline',
    serverURL: 'https://your-waline.vercel.app',
    dark: 'html[data-theme="dark"]',
    lang: 'zh-CN',
  });
</script>
```

> `dark: 'html[data-theme="dark"]'` 让 Waline 自动跟随主题深色模式切换。

## 注意事项

- **升级保留**：覆盖的 `post.njk` 放在博客根目录 `layout/` 下，升级主题时不受影响，但需留意主题 `post.njk` 的更新并手动合并。
- **国内访问**：giscus 依赖 GitHub，国内访问可能不稳定；Waline 自托管可控，国内访问更稳定。
- **性能**：评论脚本建议加 `async` 或 `defer`，避免阻塞页面渲染。giscus 脚本已自带 `async`。
- **数据备份**：giscus 评论存储在 GitHub Discussions，可通过 GitHub API 导出；Waline 数据存储在自托管数据库，需自行备份。
