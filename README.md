# Roopal Kulshreshtha — Portfolio & Blog

Static portfolio site for job search, with editable copy and Markdown blogging. Built with [Astro](https://astro.build) and deployed to **GitHub Pages**.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Astro prints (usually `http://localhost:4321/RoopalKulshreshtha/`).

## Customize all text

Edit **`src/content/site.ts`** — name, tagline, about, experience, projects, skills, contact, nav labels, and social links. No layout changes required for copy updates.

Optional: add your PDF résumé as `public/resume.pdf` (linked from the hero CTA).

## Post a blog

1. Add a file under `src/content/blog/`, e.g. `my-post.md`
2. Use this frontmatter:

```yaml
---
title: "Your title"
description: "Short summary"
pubDate: 2026-08-12
tags: ["sql", "career"]
draft: false
---
```

3. Write the body in Markdown
4. Commit and push to `main`

Set `draft: true` to hide a post until ready.

## GitHub Pages setup

1. Config is already set for **`roopal20`**:
   - `site`: `https://roopal20.github.io`
   - `base`: `/RoopalKulshreshtha`

2. Update real **email** and **LinkedIn** in `src/content/site.ts` when ready.

3. Push to `main`.

4. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

5. After the workflow succeeds, the site is at:

   `https://roopal20.github.io/RoopalKulshreshtha/`

The deploy workflow lives at `.github/workflows/deploy.yml`.

## Scripts

| Command           | Purpose              |
| ----------------- | -------------------- |
| `npm run dev`     | Local development    |
| `npm run build`   | Production build     |
| `npm run preview` | Preview the build    |
