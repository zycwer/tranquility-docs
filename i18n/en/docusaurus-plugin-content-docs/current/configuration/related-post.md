---
sidebar_position: 23
---

# Related Posts

Related posts show recommended posts at the bottom of each article.

## 1. Install the dependency

```bash
npm install hexo-related-popular-posts
```

## 2. Configure

Configure via the `related_post` option. See the [plugin docs](https://github.com/tea3/hexo-related-popular-posts) for details.

```yml
related_post:
  enable: true
  config:
    maxCount: 5 # Maximum count of a list. default 5
    ulClass: # Class name of element. default 'popular-posts'
    PPMixingRate: 0.4 # Mixing ratio of popular posts and related posts. default 0.0(=Related posts only)
    isDate: # visible the date. false
    isImage: # visible the image. false
    isExcerpt: # visible the excerpt. false
    PPCategoryFilter: # Option to fix category on Popular Posts. undefined
    PPTagFilter: # Option to fix tag on Popular Posts. undefined
```
