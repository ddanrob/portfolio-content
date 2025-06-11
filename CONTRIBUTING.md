# Contributing

This repository holds the editable content for the portfolio site. Follow these guidelines when adding or updating content.

## Adding a blog post

1. Create a new folder under `blogs/` named `YYYY-MM-DD-your-slug`.
2. Inside the folder add `index.md` with YAML front matter:

```md
---
title: "Post title"
date: "2025-06-11"
excerpt: "Short summary"
tags: ["Tag"]
coverImage: "./hero.jpg"
slug: "your-slug"
draft: false
---
```

3. Place any images used by the post in the same folder.
4. Keep hero images around **1600x900** and under **4&nbsp;MB**.
5. If the post is a work in progress, either set `draft: true` or move the folder under `drafts/`.

## Local preview

From your portfolio site repository:

```bash
git submodule add https://github.com/your-user/portfolio-content.git content
```

Run your Next.js dev server and edits to this repo will appear automatically.

## Releases

Tag stable snapshots of this repo so your site can pin to a version:

```bash
git tag v1
```

Use the tag's zip URL when fetching content in production.

