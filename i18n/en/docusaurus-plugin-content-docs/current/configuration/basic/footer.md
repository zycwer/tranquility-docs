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

## Site uptime

The footer can display "This site has been running for X days X hours X minutes X seconds" in real time, computed locally in the browser with no external requests:

```yml
uptime:
  enable: true
  since: "2020-01-01T00:00:00+08:00" # site launch time, ISO format recommended (with timezone)
  template: "Running for {d} days {h} hours {m} minutes {s} seconds"
```

| Field | Description |
| --- | --- |
| `uptime.enable` | Enable the uptime display |
| `uptime.since` | Start time, ISO format recommended (e.g. `2020-01-01T00:00:00+08:00`) |
| `uptime.template` | Text template with `{d}`/`{h}`/`{m}`/`{s}` placeholders (hours/minutes/seconds zero-padded) |

:::tip
Placeholders can be freely combined, e.g. `"Running smoothly for {d} days"`. Hours, minutes, and seconds use tabular numerals so the per-second updates never jitter.
:::
