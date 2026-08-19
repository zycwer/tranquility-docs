---
sidebar_position: 6
---

# 资源指纹

为主题自带的 CSS / JS / 图片 / 字体引用自动追加**内容哈希**（`?v=xxxxxxxx`），实现「永久强缓存 + 自动失效」。默认开启。

## 工作原理

```
引用变化前：<link rel="stylesheet" href="/css/layout.css?v=03a4efc4">
修改样式后：<link rel="stylesheet" href="/css/layout.css?v=91b2d7f0">  ← 哈希变化，URL 变化
```

1. 构建时对**源文件内容**计算 SHA-256 哈希（CSS 追溯到 `.styl` 源文件及其全部 `@import` 依赖；字体追溯到生成产物）
2. 哈希追加到页面中所有本地资源引用的 URL 上
3. 浏览器看到带指纹的 URL，可放心启用**一年期强缓存**
4. 任何源文件变更 → 哈希变化 → URL 变化 → 缓存自动失效，回访者拿到新资源

## 配置

```yml
fingerprint:
  enable: true   # 默认开启；置 false 恢复为不带指纹的原始 URL
```

## 覆盖范围

| 位置 | 处理方式 |
| --- | --- |
| HTML 中 `src` / `href` 属性 | ✅ 追加 `?v=` |
| 内联 `<style>` 中的 `url()`（如 `@font-face` 字体） | ✅ 追加 `?v=` |
| preload 字体链接 | ✅ 追加 `?v=` |
| `hexo server` 本地预览 | ✅ 同样生效，便于调试 |

**不处理**：外链资源（`http://`、`https://`）、纯锚点（`#`）、相对路径资源。

## 说明

- 哈希基于**文件内容**而非版本号：只改一个字符，哈希即变化
- 与 PWA Service Worker 缓存配合：带指纹的资源变更后，SW 缓存键随之更新，访客不会停留在旧版页面
- 已有查询串的 URL 只更新 `v` 参数，不会叠加出 `?v=a?v=b`
- 主题外的资源（你自己注入的脚本、文章内图片）不受影响
