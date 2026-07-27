---
sidebar_position: 6
---

# 评论系统

主题内置评论系统接入，支持 **giscus / Waline / Disqus** 三种方案。在 `_config.tranquility.yml` 的 `comments` 配置块中填写对应字段，主题会在文章页底部自动渲染评论组件，无需修改任何模板。

## 启用评论

```yml
comments:
  enable: true
```

`enable: false` 时文章页不渲染评论区。设为 `true` 后，主题按 **giscus → Waline → Disqus** 的优先级选择首个配置完整的方案。

## 方案对比

| 方案 | giscus | Waline | Disqus |
| --- | --- | --- | --- |
| 数据存储 | GitHub Discussions | 自托管（LeanCloud / MySQL / PostgreSQL / SQLite） | Disqus 服务器 |
| 登录方式 | GitHub 账号 | 匿名 / 多种 OAuth | Disqus 账号 / 匿名 |
| 部署难度 | 低（无需服务器） | 中（需部署后端） | 低（注册即用） |
| 国内访问 | 依赖 GitHub | 自托管可控 | 需科学上网 |
| 深色模式联动 | 支持（`theme: auto`） | 支持（自动跟随） | 由 Disqus 控制 |
| 适合 | 技术博客、GitHub 用户 | 需匿名评论、国内访问 | 海外站点 |

## 方案一：giscus

[giscus](https://giscus.app/) 基于 GitHub Discussions，评论数据存储在你的仓库 Discussions 中，用户用 GitHub 账号登录后评论。

### 1. 开启仓库 Discussions

在你的博客仓库（或专门的评论仓库）的 Settings → General → Features 勾选 Discussions。

### 2. 安装 giscus App 并获取参数

访问 [giscus.app](https://giscus.app/)，按引导选择仓库并安装 giscus App，获取 `data-repo`、`data-repo-id`、`data-category`、`data-category-id`。

### 3. 填写配置

```yml
comments:
  enable: true
  giscus:
    repo: yourname/yourrepo           # 格式 owner/repo
    repo_id: R_XXXXXXXXX              # 从 giscus.app 获取
    category: Announcements            # Discussions 分类名
    category_id: DIC_XXXXXXXXX        # 从 giscus.app 获取
    mapping: pathname                  # 映射方式：pathname | url | title | og:title
    reactions_enabled: 1               # 表情反应：0 关闭 / 1 开启
    input_position: bottom             # 评论框位置：top / bottom
    lang: zh-CN                        # 语言
    theme: auto                        # light / dark / preferred_color_scheme / auto
```

### giscus 主题选项

| 值 | 行为 |
| --- | --- |
| `light` | 固定浅色 |
| `dark` | 固定深色 |
| `preferred_color_scheme` | 跟随系统深浅色 |
| `auto` | **跟随本主题的深色模式切换**（推荐） |

设为 `auto` 时，主题会在你切换深色模式时通过 `postMessage` 通知 giscus 同步切换主题色，无需手动操作。

## 方案二：Waline

[Waline](https://waline.js.org/) 是自托管的轻量评论系统，支持匿名评论，后端可选 LeanCloud / MySQL / PostgreSQL / SQLite。

### 1. 部署 Waline 后端

参考 [Waline 官方部署文档](https://waline.js.org/guide/get-started/)。部署完成后获得服务端地址（如 `https://your-waline.vercel.app`）。

### 2. 填写配置

```yml
comments:
  enable: true
  waline:
    serverURL: https://your-waline.vercel.app
    lang: zh-CN
    emoji:                              # 可选，表情包 CDN，留空使用默认
```

Waline 的深色模式会自动跟随本主题（通过 CSS 选择器 `html[data-theme="dark"]`），无需额外配置。

## 方案三：Disqus

[Disqus](https://disqus.com/) 是老牌评论系统，注册即用，但国内访问需科学上网。

### 1. 注册并获取 shortname

在 [Disqus](https://disqus.com/admin/create/) 创建站点，获取 shortname。

### 2. 填写配置

```yml
comments:
  enable: true
  disqus:
    shortname: your-shortname
```

## 优先级与多方案共存

主题按 **giscus → Waline → Disqus** 的优先级选择首个「配置完整」的方案：

- giscus 需 `repo`、`repo_id`、`category`、`category_id` 全部非空
- Waline 需 `serverURL` 非空
- Disqus 需 `shortname` 非空

例如同时填写了 giscus 和 Waline 配置，但 giscus 的 `repo` 为空，则使用 Waline。建议只填写一个方案的配置，避免混淆。

## 关闭评论

```yml
comments:
  enable: false
```

或在文章 front-matter 中单独关闭（需自定义模板，参考[自定义布局模板](./custom-layout.md)）。

## 注意事项

- **国内访问**：giscus 依赖 GitHub，国内访问可能不稳定；Waline 自托管可控，国内访问更稳定；Disqus 国内基本不可用。
- **性能**：评论脚本均带 `async` 或 `defer`，不阻塞页面渲染。
- **数据备份**：giscus 评论存储在 GitHub Discussions，可通过 GitHub API 导出；Waline 数据存储在自托管数据库，需自行备份；Disqus 数据存储在 Disqus 服务器，可在后台导出。
- **升级保留**：评论配置写在博客根目录的 `_config.tranquility.yml` 中，主题升级不会影响。
