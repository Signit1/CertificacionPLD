const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const HTML_DIR = path.join(PUBLIC_DIR, 'html');
const MANIFEST = path.join(PUBLIC_DIR, 'files.json');

if (!fs.existsSync(HTML_DIR)) {
  fs.mkdirSync(HTML_DIR, { recursive: true });
}

const files = fs
  .readdirSync(HTML_DIR)
  .filter((name) => name.endsWith('.html'))
  .sort();

const manifest = files.map((name) => ({
  name,
  url: `/html/${encodeURIComponent(name)}`,
}));

fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Built manifest with ${files.length} HTML file(s).`);
