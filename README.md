
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

## Deployment Notes

This app builds to the `dist/` directory with `npm run build`. It can be hosted on static platforms such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages. The app currently uses hash routes (`#/about`, `#/projects`, `#/blog`), so it does not need server-side route rewrites.
  
