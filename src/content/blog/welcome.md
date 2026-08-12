---
title: "Welcome to the blog"
description: "How to add a new post to this portfolio site."
pubDate: 2026-08-10
tags: ["meta", "writing"]
draft: false
---

This site’s blog is powered by Markdown files in `src/content/blog/`.

## Post a new article

1. Create a new file, e.g. `src/content/blog/my-new-post.md`
2. Add frontmatter at the top:

```yaml
---
title: "Your title"
description: "One-line summary for listings and SEO"
pubDate: 2026-08-12
tags: ["career", "sql"]
draft: false
---
```

3. Write the body in Markdown
4. Commit and push to `main` — GitHub Pages rebuilds the site

Set `draft: true` to keep a post out of the public listing until you’re ready.
