# HTML Renderer

A simple local app to preview HTML files with working JavaScript.

## Setup

```bash
npm install express
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

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
