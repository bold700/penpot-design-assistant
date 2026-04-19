#!/usr/bin/env node
const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 7780;

// Load config
let config = {};
try {
  config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
} catch (e) {
  console.error('config.json not found or invalid. Copy config.example.json to config.json and fill in your API key.');
  process.exit(1);
}

const OPENAI_API_KEY = config.openaiApiKey;
const MODEL          = config.model || 'gpt-4o';

const SYSTEM_PROMPT = `You are an expert on Material Design 3 (M3), Google's design system.
You help designers and developers working in Penpot understand and apply M3 principles.

You have deep knowledge of:
- M3 color system: dynamic color, tonal palettes, color roles (primary, secondary, tertiary, surface, etc.)
- M3 typography: type scale, roles (Display, Headline, Title, Body, Label)
- M3 components: buttons, cards, dialogs, navigation, chips, FABs, etc.
- M3 elevation and shadow system
- M3 shape system (rounded corners)
- M3 motion and interaction guidelines
- M3 tokens and how they map to design tools
- Dark/light theme principles

Reference: https://m3.material.io/

Keep answers concise and practical. When relevant, mention specific token names or values.
If a question is about implementing something in a design tool like Penpot, give practical advice.`;

const MIME = {
  '.html': 'text/html',
  '.js':   'text/javascript',
  '.json': 'application/json',
  '.svg':  'image/svg+xml',
  '.css':  'text/css',
};

http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Chat API endpoint
  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const { messages } = JSON.parse(body);

        const payload = JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
          ],
          max_tokens: 1024,
          temperature: 0.4,
        });

        // Call OpenAI
        const options = {
          hostname: 'api.openai.com',
          path: '/v1/chat/completions',
          method: 'POST',
          headers: {
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Length': Buffer.byteLength(payload),
          },
        };

        const apiReq = require('https').request(options, apiRes => {
          let data = '';
          apiRes.on('data', chunk => data += chunk);
          apiRes.on('end', () => {
            try {
              const json = JSON.parse(data);
              if (json.error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: json.error.message }));
                return;
              }
              const reply = json.choices[0].message.content;
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ reply }));
            } catch (e) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to parse OpenAI response' }));
            }
          });
        });

        apiReq.on('error', e => {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: e.message }));
        });

        apiReq.write(payload);
        apiReq.end();

      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid request' }));
      }
    });
    return;
  }

  // Static files
  const pathname = req.url.split('?')[0];
  const filePath = path.join(__dirname, pathname === '/' ? '/index.html' : pathname);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });

}).listen(PORT, () => {
  console.log(`Design Assistant running at http://localhost:${PORT}`);
  console.log(`Install in Penpot: http://localhost:${PORT}/manifest.json`);
  console.log(`Model: ${MODEL}`);
});
