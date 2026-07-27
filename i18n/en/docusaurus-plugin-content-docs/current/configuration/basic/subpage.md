---
sidebar_position: 5
---

# Subpage

Subpages are configured under `subpage`:

```yml
subpage: # enable "subpage" feature, see README
  enable: true  # whether to enable subpages
  pages:  # subpage array
    - name: # subpage identifier, e.g. developer
      path: # defaults to name if not set
      title: # menu label shown in the navbar, e.g. Developer
      icon: # icon path
      description: # description
```

When subpages are disabled (`enable: false`), the navbar shows only a single "Blog" button that leads to the full article list.

When enabled (`enable: true`), the `pages` array must be configured. Each entry uses `name` as its identifier. `path` specifies the subpage URL (defaults to `name`). `title` is shown in the navbar. Once configured, all entries appear in the top navbar with their `title`, each linking to the corresponding subpage. `icon` and `description` configure the subpage's icon and description.

## Assigning posts to a subpage

After creating a new post, set its `category` field to a subpage's `name` to assign it to that subpage.
