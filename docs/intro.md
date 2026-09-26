---
sidebar_position: 1
---

# 介绍

致远（Tranquility）是一款为个人主页及多学科领域博主设计的 Hexo 主题。主题以「宁静致远」为设计理念，聚焦个性展示，适合需要明确领域划分与个人主页形态的博主。

## 设计理念速览

与大多数 Hexo 主题不同，致远**主页不展示文章列表**，而是展示关于、时间线、项目、技能等个性内容；以「**子页**」取代「分类」（Category）——每个子页对应一个学科大类并在导航栏拥有一级入口，子页内部用「标签」聚合文章。

这套设计服务于两类需求：**展示个人特点的主页**，以及对多领域内容的**明确划分**。详见[设计逻辑](./design.md)。

## 核心特性

**个人主页**

- 主页聚焦个性展示：[关于](./configuration/basic/about.md)、[时间线](./configuration/basic/timeline.md)、[项目](./configuration/basic/projects.md)、[技能](./configuration/basic/skills.md)
- 支持[纯个人主页模式](./configuration/basic/homepage.md)（不含文章，聚合外部博客 RSS）
- [「子页」设计](./configuration/basic/subpage.md)，适应多领域写作
- [最近更新卡片](./configuration/basic/recent-updates.md)：构建时聚合外部博客 RSS，国内加载稳定
- [公告横幅](./configuration/basic/announcement.md)、页脚建站时长、[一言 Slogan](./configuration/basic/slogan.md)、[赞赏](./configuration/basic/reward.md)

**写作功能**

- [文章封面](./configuration/writing/post-cover.md)、[目录](./configuration/writing/post-toc.md)、[置顶](./configuration/writing/post-pin.md)、[摘要](./configuration/writing/post-excerpt.md)
- [相关文章](./configuration/writing/related-post.md)、[标签云](./configuration/writing/tagcloud.md)、[代码高亮](./configuration/writing/code-highlight.md)
- [归档页](./configuration/basic/archive.md)：按年份分组的时间线式文章归档
- [数学公式](./configuration/writing/math.md)（MathJax）、[Mermaid 图表](./configuration/writing/mermaid.md)

**SEO 与可发现性**

- [Open Graph](./configuration/seo/open-graph.md) / Twitter Card 社交分享卡片、[JSON-LD](./configuration/seo/json-ld.md) 结构化数据
- [站点地图](./configuration/seo/sitemap.md)、[robots.txt](./configuration/seo/robots.md)、[RSS 自动发现](./configuration/seo/rss.md)
- [文章搜索](./configuration/seo/search.md)：本地搜索免外部服务，可选 Algolia DocSearch

**性能 / 体验 / 安全**

- [深色模式](./configuration/experience/dark-mode.md)四策略（浅色 / 深色 / 定时 / 跟随浏览器）
- [PWA](./configuration/experience/pwa.md) 离线访问、[资源内容指纹](./configuration/experience/fingerprint.md)强缓存、[字体子集化](./configuration/experience/font.md)
- [樱花飘落](./configuration/experience/sakura.md)装饰动画、[音乐播放器](./configuration/experience/music.md)（跨页记忆播放进度）
- [回到顶部按钮](./configuration/experience/accessibility.md)、`prefers-reduced-motion` 无障碍降级、图片懒加载、三端自适应
- [CSP 安全策略](./configuration/experience/security.md)、构建期 URL 校验、XSS 注入防护

## 演示站

- [Tranquility 演示站](https://zycwer.github.io/hexo-theme-tranquility/)（特性全览，每次提交自动构建）
- [致远](https://theme.hozen.site/tranquility/)（原主题演示站）
- [浩然的主页](https://www.hozen.site)

## Fork 说明

本仓库是 [hooozen/hexo-theme-tranquility](https://github.com/hooozen/hexo-theme-tranquility) 的 fork。原仓库已于 2026 年 6 月归档、停止维护，本 fork 在其基础上持续维护并持续新增特性、修复缺陷，主要演进包括：一言 Slogan、文章驱动时间线、Hexo 原生关于页、构建时 RSS 聚合的「最近更新」、运行时深色模式、Open Graph / JSON-LD / sitemap / robots.txt / RSS 自动发现、PWA、图片懒加载、回到顶部按钮、无障碍降级、字体加载优化、安全加固（XSS / CSP / 注入防护）、项目展示、技能展示、公告横幅、建站时长统计、归档页、樱花飘落装饰动画、音乐播放器等。

完整的版本演进见[更新日志](./changelog.md)与 [Releases](https://github.com/zycwer/hexo-theme-tranquility/releases)。

## 下一步

- [安装主题](./installation.md) —— npm 一分钟上手
- [配置](./configuration/basic/homepage.md) —— 个性化你的站点
- [设计逻辑](./design.md) —— 理解「子页」与「标签」的分工
