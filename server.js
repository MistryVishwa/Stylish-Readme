'use strict';

// Simple local dev server that mimics Vercel routing.
// - Serves index.html and static files from project root
// - Routes /api/<type>.svg and /api/widget to api/widget.js handler

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const widgetHandler = require('./api/widget');

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico':  'image/x-icon',
  '.txt':  'text/plain; charset=utf-8'
};

function safeJoin(base, target) {
  const p = path.normalize(path.join(base, target));
  if (!p.startsWith(base)) return null;
  return p;
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  let pathname = decodeURIComponent(parsed.pathname || '/');

  // Disable caching for HTML in dev
  const noCacheHtml = () => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  };

  // /api/<type>.svg  →  widget handler (rewrite mirrors vercel.json)
  const svgMatch = pathname.match(/^\/api\/([\w-]+)\.svg$/);
  if (svgMatch) {
    const q = { ...parsed.query, type: svgMatch[1] };
    const search = new URLSearchParams(q).toString();
    req.url = `/api/widget?${search}`;
    return widgetHandler(req, res);
  }

  // /api/widget direct
  if (pathname === '/api/widget') {
    return widgetHandler(req, res);
  }

  // Static files
  if (pathname === '/') pathname = '/index.html';
  const filePath = safeJoin(ROOT, pathname);
  if (!filePath) {
    res.statusCode = 400;
    return res.end('Bad request');
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      return res.end('Not found');
    }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
    if (ext === '.html') noCacheHtml();
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`README Forge dev server listening on http://${HOST}:${PORT}`);
});
