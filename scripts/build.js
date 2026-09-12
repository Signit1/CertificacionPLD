const fs = require('fs');
const path = require('path');

const HTML_DIR = path.join(__dirname, '..', 'html');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUT_DIR = path.join(PUBLIC_DIR, 'html');
const MANIFEST = path.join(PUBLIC_DIR, 'files.json');

if (!fs.existsSync(HTML_DIR)) {
  fs.mkdirSync(HTML_DIR, { recursive: true });
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs
  .readdirSync(HTML_DIR)
  .filter((name) => name.endsWith('.html'))
  .sort();

for (const name of fs.readdirSync(OUT_DIR)) {
  fs.unlinkSync(path.join(OUT_DIR, name));
}

for (const name of files) {
  fs.copyFileSync(path.join(HTML_DIR, name), path.join(OUT_DIR, name));
}

const manifest = files.map((name) => ({
  name,
  url: `/html/${encodeURIComponent(name)}`,
}));

fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Built ${files.length} HTML file(s) for deployment.`);
