---
sidebar_position: 9
---

# Footer Customization

- `foot.title` configures the footer tagline

- `foot.linksRows` configures the number of link rows, see [issue#44](https://github.com/hooozen/hexo-theme-tranquility/issues/44)

- `links` configures friend links

- `social` configures social accounts or other links

- `contacts` configures contact methods

```yml
foot:
  title:
    - "海内存知己"
    - "天涯若比邻"
  linksRows: 4

links: # friend links
  - name: "Theme Tranquility"
    url: https://github.com/hooozen/hexo-theme-tranquility

social:
  - name: "hooozen"
    icon: "/images/logo-github.svg"
    url: https://github.com/hooozen

contacts:
  - name: "name@example.com"
    icon: "/images/icon/icon-email.svg"
    url: "mailto:name@example.com"
```
