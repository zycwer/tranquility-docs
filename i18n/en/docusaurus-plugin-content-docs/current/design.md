---
sidebar_position: 3
---

# Design Philosophy

This theme changes Hexo's default design logic, so it works differently from most Hexo themes. Please read the following carefully.

Most Hexo themes are designed for **pure blogging**, where a blogger's content is typically concentrated in a single discipline (e.g. internet technology). Driven by this need, most themes display an article list on the homepage and use numerous Categories for subdivision. This design serves that use case well.

When a user wants a homepage that showcases personal identity and needs **clear** domain boundaries across blog content, those themes fall short. The "Tranquility" theme was created for this audience — and defines its target users accordingly.

## The Change

The homepage does not display an article list. Instead, it shows identity-focused modules like "About" and "Timeline".

The concept of "Subpage" replaces "Category". All subpages have a top-level entry in the navigation bar. A subpage should represent a broader scope — typically a major discipline or domain. For example, all internet-technology posts should belong to one subpage, whether they're "frontend" or "backend".

For posts within the same subpage, the theme borrows WeChat Official Account's classification logic and uses Tags for classification and aggregation. Thus, the theme **removes** the default Category concept and entry, replacing it with "Subpage" and "Tag".

If the description here isn't clear enough, open the [demo site](https://www.hozen.site) and browse around — it should become obvious. If this change doesn't resonate with you, you may not have this need, and another Hexo theme might be a better fit.
