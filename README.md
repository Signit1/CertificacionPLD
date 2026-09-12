# HTML Renderer

A simple local app to preview HTML files with working JavaScript.

## Setup

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

Push to GitHub and import the repo in Vercel. The build step copies HTML files from `html/` into `public/html/` and generates `public/files.json` so the file list works without the Express server.

## Usage

1. Put your `.html` files in the `html/` folder.
2. They appear in the sidebar automatically.
3. Click a file to render it in the preview panel — scripts run normally.

A sample file is included at `html/example.html`.

## Development

```bash
npm run dev
```

Uses Node's `--watch` flag to restart the server when files change.
