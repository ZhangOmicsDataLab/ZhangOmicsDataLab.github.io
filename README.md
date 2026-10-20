# OmicsDataLab website

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Editing content

- **Team member**: add `src/content/team/<Name>.md` (frontmatter + bio) and a photo in `src/assets/team/`.
- **Tool / project page**: add `src/content/projects/<name>.md`; it also appears on the Tools page.
- **Funded projects list**: edit `src/data/funded-projects.json`.
- **Nav, email, footer**: `src/data/site.ts`. Layout: `src/layouts/Base.astro`. Styles: `src/styles/global.css`.

One-time setup: in the GitHub repo, Settings → Pages → Source → **GitHub Actions**.
