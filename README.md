# HTML Renderer

A simple local app to preview HTML files with working JavaScript.

## Setup

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Usage

1. Put your `.html` files in `public/html/`.
2. Run `npm run build` (or restart the dev server) to refresh the sidebar list.
3. Click a file to render it in the preview panel — scripts run normally.

## Development

```bash
npm run dev
```

Uses Node's `--watch` flag to restart the server when files change.

## Deploy to Vercel

HTML files must be committed to git inside `public/html/`. Vercel only deploys what is in the repository — local-only files will not appear in production.

```bash
git add public/html/ public/files.json
git commit -m "Add HTML files for deployment"
git push
```

The Vercel build runs `npm run build`, which generates `public/files.json` from the HTML files in that folder.
