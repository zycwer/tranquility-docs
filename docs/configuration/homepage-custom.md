---
sidebar_position: 15
---

# 首页自定义

通过 `index` 配置项配置首页个性化内容：

```yml
index: # 配置首页个性化内容
  motto: "长风破浪会有时！"
  poem:
    - 君不见高堂明镜悲白发
    - 朝如青丝暮成雪
  photo: /images/about.jpg
  about:
    title: 关于
    text:
      - 酒入豪肠,七分酿成了月光
      -
      - 余下的三分啸成剑气
      -
      - 绣口一吐就半个盛唐
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `index.motto` | 首页座右铭，展示在显眼位置 |
| `index.poem` | 诗句数组，按行展示 |
| `index.photo` | 首页个人照片地址 |
| `index.about.title` | 首页关于区块标题 |
| `index.about.text` | 首页关于区块正文，按段落展示，空字符串表示空行 |

> `index.photo` 也会作为 Open Graph `og:image` 的回退来源之一，详见 [Open Graph & Twitter Card](./open-graph.md)。
