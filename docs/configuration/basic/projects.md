---
sidebar_position: 11
---

# 项目展示

在首页展示你的项目卡片，适合个人主页呈现作品集。数据在**构建时静态渲染**，无任何外部请求。

## 配置

```yml
projects:
  enable: true
  title: 我的项目
  items:
    - name: 项目名称
      description: 一句话项目简介
      link: https://github.com/you/repo       # 项目主页（可选）
      repo: https://github.com/you/repo       # 仓库链接（可选，展示为右上角 ↗）
      tags:                                    # 技术标签（可选）
        - JavaScript
        - Node.js
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `projects.enable` | 是否开启项目展示区块 |
| `projects.title` | 区块标题 |
| `items` | 项目数组 |
| `items[].name` | 项目名称（必填） |
| `items[].description` | 项目简介 |
| `items[].link` | 项目主页链接，缺省则项目名不可点击 |
| `items[].repo` | 仓库链接，展示为卡片右上角 ↗ |
| `items[].tags` | 技术标签数组 |

## 说明

- 卡片随屏幕宽度自适应多列（移动端单列）
- `link` / `repo` 为外链时自动添加 `target="_blank" rel="noopener noreferrer"`
- 文案中的 HTML 会被转义，请填写纯文本
