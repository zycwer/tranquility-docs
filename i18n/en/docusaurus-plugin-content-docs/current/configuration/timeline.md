---
sidebar_position: 5
---

# Timeline

The timeline is designed to showcase the blogger's **important** events or milestones — honors, publications, talks, etc.

You can also use it to feature selected posts or other content. The timeline supports custom configuration.

Timeline is configured under `timeline`:

```yml
timeline:
  enable: true  # whether to enable the timeline
  reversed_order: true # whether to show in reverse chronological order
  items:  # configure timeline categories
    - name: article  # category name
      color: "#ee936c"  # category theme color
      icon: /images/icon/icon-article.svg  # category icon
      checked: false  # whether shown by default
    - name: apps
      color: "#60a465"
      icon: /images/icon/icon-app.svg
      checked: true
    - name: event
      color: "#568dc4"
      icon: /images/icon/icon-event.svg
      checked: false
```

## Driving events from posts

After setting the `timeline` field in a post's front-matter to a category name, that post appears in the timeline list. For example:

```yml
---
id: 57
title: How Many Winters
date: 2022-11-30 23:23:48
tags:
  - prose
categories: life  # belongs to the life subpage
cover: /assets/images/57-1.jpg
timeline: article  # appears in the timeline list
---
```

### Events are article-driven

Timeline events are entirely driven by **articles**: set the `timeline` field in a post's front-matter (to one of the `items`' `name`), and the post will appear on the homepage timeline. Clicking the title opens the article for details. No need to define events separately in the config file — see the example above.

:::note
Changes to the timeline config **may require restarting the server** to take effect.
:::
