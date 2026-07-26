---
sidebar_position: 23
---

# 相关文章

相关文章用来在每篇文章底部展示与本篇文章相关的推荐文章。

## 安装依赖

首先安装依赖 [hexo-related-popular-posts](https://github.com/tea3/hexo-related-popular-posts)：

```bash
npm install hexo-related-popular-posts
```

## 配置

通过 `related_post` 配置项进行配置：

```yml
# see https://github.com/tea3/hexo-related-popular-posts
related_post:
  enable: true
  config:
    maxCount: 5 # Maximum count of a list. default 5
    ulClass: # Class name of element. deafult 'popular-posts'
    PPMixingRate: 0.4 # Mixing ratio of popular posts and related posts. default 0.0(=Related posts only)
    isDate: # visible the date. false
    isImage: # visible the image. false
    isExcerpt: # visible the excerpt. false
    PPCategoryFilter: # Option to fix category on Popular Posts. undefined
    PPTagFilter: # Option to fix tag on Popular Posts. undefined
```

## 配置项说明

| 字段 | 说明 |
| --- | --- |
| `related_post.enable` | 是否开启相关文章 |
| `related_post.config` | 透传给 `hexo-related-popular-posts` 插件的配置 |

具体配置查看[插件文档](https://github.com/tea3/hexo-related-popular-posts)。
