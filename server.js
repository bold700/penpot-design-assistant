#!/usr/bin/env node
const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');
const url   = require('url');

const PORT = 7780;

// ── Config ─────────────────────────────────────────────────
// To switch LLM or knowledge source, only edit config.json and prompt.txt
let config = {};
try {
  config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
} catch (e) {
  console.error('config.json not found. Copy config.example.json to config.json and fill in your settings.');
  process.exit(1);
}

const API_KEY  = config.apiKey;
const API_URL  = config.apiUrl  || 'https://api.openai.com/v1/chat/completions';
const MODEL    = config.model   || 'gpt-4o';
const PROMPT_FILE = config.systemPromptFile || 'prompt.txt';

// ── System prompt ──────────────────────────────────────────
// Edit prompt.txt to change the knowledge source (M3, Confluence, etc.)
let SYSTEM_PROMPT = '';
try {
  SYSTEM_PROMPT = fs.readFileSync(path.join(__dirname, PROMPT_FILE), 'utf8');
  console.log(`System prompt loaded from: ${PROMPT_FILE}`);
} catch (e) {
  console.error(`Could not load system prompt from ${PROMPT_FILE}`);
  process.exit(1);
}

// ── MIME types ─────────────────────────────────────────────
const MIME = {
  '.html': 'text/html',
  '.js':   'text/javascript',
  '.json': 'application/json',
  '.svg':  'image/svg+xml',
  '.css':  'text/css',
};

// ── LLM call ───────────────────────────────────────────────
// Supports any OpenAI-compatible API (OpenAI, Ollama, LM Studio, etc.)
function callLLM(messages) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 1024,
      temperature: 0.4,
    });

    const parsed   = new url.URL(API_URL);
    const isHttps  = parsed.protocol === 'https:';
    const reqLib   = isHttps ? https : http;

    const options = {
      hostname: parsed.hostname,
      port:     parsed.port || (isHttps ? 443 : 80),
      path:     parsed.pathname,
      method:   'POST',
      headers: {
        'Content-Type':   'application/json',
        'Authorization':  `Bearer ${API_KEY}`,
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const apiReq = reqLib.request(options, apiRes => {
      let data = '';
      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.error) return reject(new Error(json.error.message));
          resolve(json.choices[0].message.content);
        } catch (e) {
          reject(new Error('Failed to parse LLM response'));
        }
      });
    });

    apiReq.on('error', reject);
    apiReq.write(payload);
    apiReq.end();
  });
}

// ── Server ─────────────────────────────────────────────────
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // Chat endpoint
  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const { messages } = JSON.parse(body);
        const reply = await callLLM(messages);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ reply }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
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
  console.log(`API:   ${API_URL}`);
});
