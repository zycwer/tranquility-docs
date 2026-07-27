---
sidebar_position: 5
---

# 标签云

标签云出现在每个子页的首页，用来展示该子页下文章的标签分布。标签云有两种形式：3D 动画云和静态标签云。

## 配置

```yml
tagcloud:
  fancy: false
  min_font: 14
  max_font: 30
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `tagcloud.fancy` | 是否开启 3D 动画云 |
| `tagcloud.min_font` | 最小字号 |
| `tagcloud.max_font` | 最大字号 |

`tagcloud` 的其他选项用以配置 3D 标签云，参考 [Hexo tagcloud helper](https://hexo.io/zh-cn/docs/helpers#tagcloud)。

## 两种形式

- **3D 动画云**（`fancy: true`）：球形旋转动画，鼠标可拖动旋转，更具视觉效果。
- **静态标签云**（`fancy: false`，默认）：按字号大小展示标签分布，加载更快、对性能与无障碍更友好。
