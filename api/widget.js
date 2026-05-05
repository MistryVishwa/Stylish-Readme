'use strict';

const { renderWidget } = require('../lib/widgets');

module.exports = async (req, res) => {
  try {
    const url = new URL(req.url, 'http://x');
    const q = Object.fromEntries(url.searchParams.entries());
    const type = q.type || 'time';
    const svg = await renderWidget(type, q);

    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=60, stale-while-revalidate=120');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = 200;
    res.end(svg);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    res.end(`<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" width="320" height="60"><rect width="320" height="60" fill="#7f1d1d"/><text x="16" y="36" fill="#fff" font-family="monospace" font-size="12">Render error: ${String(err && err.message || err).replace(/[<>&]/g,'')}</text></svg>`);
  }
};
