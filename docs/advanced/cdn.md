---
sidebar_position: 4
---

# CDN 源配置

主题部分功能依赖第三方 JS 库（MathJax 数学公式渲染、Mermaid 图表、DocSearch 搜索），这些库通过 CDN 加载。你可以通过 `cdn` 配置项统一指定 CDN 源。

## 配置

```yml
# 第三方库（MathJax / Mermaid / DocSearch）的 CDN 源
# 默认 jsDelivr；unpkg 国内访问不稳定。国内可改为 https://npm.elemecdn.com
cdn: https://cdn.jsdelivr.net/npm
```

## 可选 CDN 源

| CDN | 地址 | 适用场景 |
| --- | --- | --- |
| jsDelivr（默认） | `https://cdn.jsdelivr.net/npm` | 全球通用，国内有时不稳定 |
| unpkg | `https://unpkg.com` | 海外稳定，国内访问慢 |
| 饿了么 CDN | `https://npm.elemecdn.com` | 国内访问稳定，推荐国内用户使用 |
| 字节跳动 CDN | `https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M` | 国内备选 |

### 国内推荐配置

```yml
cdn: https://npm.elemecdn.com
```

## 工作原理

主题在加载第三方库时，会拼接 `cdn` + 包名 + 版本号，例如：

```
MathJax:  {cdn}/mathjax@3/es5/tex-mml-chtml.js
Mermaid:  {cdn}/mermaid@10.9.3/dist/mermaid.min.js
```

切换 `cdn` 后所有第三方库统一从新源加载，无需逐项配置。

## 自托管第三方库（离线场景）

若站点部署在内网或希望完全离线，可将第三方库下载到博客 `source/` 下并通过 injector 覆盖加载：

1. 下载库文件到 `source/lib/mathjax/tex-mml-chtml.js`
2. 在 `scripts/` 下注入脚本并关闭主题内置加载（设置 `mathjax: false` 后自行在文章页引入）

> 自托管会增加博客仓库体积，仅在内网或对可用性要求极高的场景下推荐。绝大多数情况下使用 CDN 即可。

## 注意事项

- **Mermaid 版本固定**：主题固定了 Mermaid 版本（`10.9.3`），避免 `latest` 因上游 breaking change 失效。升级 Mermaid 版本需同步修改配置，详见 [Mermaid 图表](../configuration/writing/mermaid.md)。
- **CDN 不可达降级**：CDN 加载失败时，对应功能（公式渲染、图表）不会生效，但不会影响页面其他内容。
