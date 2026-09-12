require('./scripts/build');

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const HTML_DIR = path.join(PUBLIC_DIR, 'html');

if (!fs.existsSync(HTML_DIR)) {
  fs.mkdirSync(HTML_DIR, { recursive: true });
}

app.use(express.static(PUBLIC_DIR));

app.get('/api/files', (_req, res) => {
  const files = fs
    .readdirSync(HTML_DIR)
    .filter((name) => name.endsWith('.html'))
    .sort()
    .map((name) => ({
      name,
      url: `/html/${encodeURIComponent(name)}`,
    }));

  res.json(files);
});

app.listen(PORT, () => {
  console.log(`HTML renderer running at http://localhost:${PORT}`);
  console.log(`Place .html files in: ${HTML_DIR}`);
});
