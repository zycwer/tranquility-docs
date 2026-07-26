---
sidebar_position: 10
---

# 更新日志

本页汇总本 fork 相较原仓库（hooozen/hexo-theme-tranquility）在 v1.4.0 ~ v1.6.1 期间的演进摘要。完整的发布说明请参考 [GitHub Releases](https://github.com/zycwer/hexo-theme-tranquility/releases)。

## v1.6.1 — 健壮性修复

- 4 项健壮性修复，进一步降低构建与运行时异常的风险
- 提升配置项与外部资源（RSS / hitokoto / Service Worker）的容错能力

## v1.6.0 — 新功能与 Gitalk 移除

- 新增 5 项功能，覆盖无障碍、加载性能与运行时深色模式等
- 移除已废弃的 Gitalk 评论功能（原仓库归档、Gitalk 不再维护且依赖 GitHub OAuth）
- 评论替代方案：推荐接入 [giscus](https://giscus.app/) 或 [Waline](https://waline.js.org/)

## v1.5.2 — 安全加固

- 完成 16 项安全修复，覆盖以下方向：
  - XSS 注入
  - `</script>` 注入
  - localStorage 兜底
  - 其他前端输入与输出处理

## v1.5.0 — SEO 与可发现性增强

- Open Graph / Twitter Card 社交分享卡片
- JSON-LD 结构化数据（Person / Article / WebSite）
- 站点地图（sitemap.xml）
- robots.txt
- RSS 自动发现
- PWA（manifest.json + Service Worker）、图片懒加载
- 运行时深色模式四策略（light / dark / auto / time）
- 文章搜索增强

## v1.4.0 — 主题重构

- 一言（Hitokoto）Slogan 开关
- 文章驱动的时间线（取代配置文件事件）
- Hexo 原生关于页（取代配置文件内容）
- 构建时 RSS 聚合的「最近更新」卡片
- 删除与关于页重复的简历（CV）功能
- 代码精简（scripts 目录 -23%）

---

> 如需了解每个版本的完整变更与升级注意事项，请查看对应的 Release 页面。升级步骤参考[升级指南](./upgrade.md)。
