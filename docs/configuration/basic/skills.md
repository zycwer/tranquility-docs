---
sidebar_position: 12
---

# 技能展示

在首页按分组展示技能。为技能指定 `level`（0-100）时渲染为**熟练度进度条**，省略 `level` 则显示为**标签**。

## 配置

```yml
skills:
  enable: true
  title: 技能
  groups:
    - name: 前端
      items:
        - name: JavaScript
          level: 85      # 0-100 熟练度，渲染为进度条
        - name: CSS
          level: 70
    - name: 后端
      items:
        - name: Node.js
          level: 60
    - name: 工具
      items:
        - name: Git      # 省略 level，渲染为标签
        - name: Docker
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `skills.enable` | 是否开启技能展示区块 |
| `skills.title` | 区块标题 |
| `groups` | 技能分组数组 |
| `groups[].name` | 分组名称 |
| `groups[].items` | 分组内技能数组，每项含 `name` 与可选 `level` |
| `items[].level` | 熟练度，取值 0-100；省略或越界时该项降级为标签展示 |

## 说明

- 进度条宽度带 400ms 过渡动画，并遵循 `prefers-reduced-motion` 无障碍降级
- 分组随屏幕宽度自适应多列（移动端单列）
- 进度条带 `aria-label`，屏幕阅读器可读出「技能名 + 熟练度」
