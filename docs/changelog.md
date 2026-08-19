---
sidebar_position: 10
---

# 更新日志

本页汇总本 fork 相较原仓库（hooozen/hexo-theme-tranquility）的演进摘要。完整的发布说明请参考 [GitHub Releases](https://github.com/zycwer/hexo-theme-tranquility/releases)。

## v1.7.0 — 个人主页功能与安全性能增强

### 新功能（个人主页）

- **项目展示**：首页项目卡片区块（主页链接/仓库链接/技术标签）
- **技能展示**：首页分组技能区，0-100 熟练度进度条或标签两种形态
- **公告横幅**：全站可关闭公告条，localStorage 记忆关闭状态，内容更新后自动重新展示
- **建站时长**：页脚实时显示「本站已运行 X 天 X 小时 X 分 X 秒」

### 安全增强

- **CSP 内容安全策略**：meta 标签落地，来源白名单按已开启功能自动收集
- **Referrer-Policy / Permissions-Policy**：默认防完整 URL 泄露、禁用摄像头/麦克风/定位
- **构建期 URL 校验**：拦截主题配置中 `javascript:` 等危险协议链接并中和
- **CI 安全扫描**：CodeQL 自动扫描 + 构建冒烟测试

### 性能增强

- **资源内容指纹**：css/js/图片/字体引用追加内容哈希，永久强缓存 + 自动失效
- **字体 WOFF 输出**：子集字体默认输出 WOFF，体积约为 TTF 一半
- **PWA 离线增强**：离线提示页、stale-while-revalidate 策略、版本化缓存管理

## v1.6.2 ~ v1.6.5 — npm 包与体积优化

- v1.6.2/v1.6.3：正式支持 npm 安装（`npm install hexo-theme-tranquility`），修复多个构建崩溃问题
- v1.6.4：字体子集化（包体积 -73%）、安全漏洞修复、健壮性增强
- v1.6.5：主题包体积再减半（12.15MB → 6.3MB）

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
