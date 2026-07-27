---
sidebar_position: 6
---

# 代码高亮

代码高亮依赖于博客**根目录**下的 `_config.yml` 的 `highlight` 配置，请配置如下：

```yml
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace: ""
  wrap: true
  hljs: true
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ""
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `highlight.enable` | 启用 Hexo 自带代码高亮 |
| `highlight.line_number` | 显示行号 |
| `highlight.auto_detect` | 自动检测语言（建议关闭，性能与准确性较差） |
| `highlight.tab_replace` | 制表符替换 |
| `highlight.wrap` | 是否包裹元素 |
| `highlight.hljs` | 启用 highlight.js 风格 |

## 注意事项

主题样式基于 highlight.js，因此需要：

- `highlight.enable: true` 与 `highlight.hljs: true`
- `prismjs.enable: false` 以避免与 highlight.js 冲突
