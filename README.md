
# Leonard Jonathan Saputra Portfolio

React + Vite portfolio site generated from a Figma Make starting point and cleaned up for production builds.

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Run deploy checks:

```bash
npm run typecheck
npm run build
npm run preview
```

## Editing Guide

Most personal content lives in `src/app/data/portfolio.ts`:

- `techSkills` and `otherSkills`: skills shown in the moving skill sections
- `projects`: project cards on the home and projects pages
- `competitions`: competition/report section on the about page
- `blogPosts`: blog entries
- `footerLinks`: footer navigation links

Page layouts live in `src/app/pages/`.

Shared UI for the main layout lives in `src/app/components/layout/`, and skill-specific UI lives in `src/app/components/skills/`.

## Deployment Notes

This app builds to the `dist/` directory with `npm run build`. It can be hosted on static platforms such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages. The app currently uses hash routes (`#/about`, `#/projects`, `#/blog`), so it does not need server-side route rewrites.
  
