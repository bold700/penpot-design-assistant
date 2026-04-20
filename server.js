#!/usr/bin/env node
const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');
const url   = require('url');

const PORT         = 7780;
const KNOWLEDGE_DIR = path.join(__dirname, 'knowledge');

// ── Config ─────────────────────────────────────────────────
let config = {};
try {
  config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
} catch (e) {
  console.error('config.json not found. Copy config.example.json to config.json and fill in your settings.');
  process.exit(1);
}

const API_KEY     = config.apiKey;
const API_URL     = config.apiUrl  || 'https://api.openai.com/v1/chat/completions';
const MODEL       = config.model   || 'gpt-4o';
const PROMPT_FILE = config.systemPromptFile || 'prompt.txt';

// ── Base system prompt ─────────────────────────────────────
let BASE_PROMPT = '';
try {
  BASE_PROMPT = fs.readFileSync(path.join(__dirname, PROMPT_FILE), 'utf8');
} catch (e) {
  console.error(`Could not load system prompt from ${PROMPT_FILE}`);
  process.exit(1);
}

// ── Knowledge base ─────────────────────────────────────────
// Load all scraped markdown files into memory at startup
const knowledge = {}; // { 'components/buttons': '...content...' }

function loadKnowledge(dir, prefix) {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      loadKnowledge(fullPath, prefix ? `${prefix}/${file}` : file);
    } else if (file.endsWith('.md') && file !== 'INDEX.md') {
      const key = (prefix ? `${prefix}/` : '') + file.replace('.md', '');
      knowledge[key] = fs.readFileSync(fullPath, 'utf8');
    }
  }
}

loadKnowledge(KNOWLEDGE_DIR, '');
console.log(`Knowledge base loaded: ${Object.keys(knowledge).length} files`);

// ── Knowledge retrieval ────────────────────────────────────
// Find the most relevant knowledge files for a given question
function findRelevantKnowledge(question) {
  const q = question.toLowerCase();
  const scored = [];

  for (const [key, content] of Object.entries(knowledge)) {
    let score = 0;
    const keyWords = key.replace(/[-\/]/g, ' ').split(' ');

    // Score based on keyword matches in question
    for (const word of keyWords) {
      if (word.length > 2 && q.includes(word)) score += 3;
    }

    // Score based on content relevance (simple word overlap)
    const contentLower = content.toLowerCase();
    const questionWords = q.split(/\s+/).filter(w => w.length > 3);
    for (const word of questionWords) {
      const count = (contentLower.match(new RegExp(word, 'g')) || []).length;
      score += Math.min(count, 5); // cap per word
    }

    if (score > 0) scored.push({ key, content, score });
  }

  // Return top results, capped at ~12000 chars total to stay within context
  scored.sort((a, b) => b.score - a.score);
  const results = [];
  let totalChars = 0;
  for (const s of scored) {
    if (totalChars + s.content.length > 12000) break;
    results.push(s.content);
    totalChars += s.content.length;
    if (results.length >= 8) break;
  }
  return results;
}

function buildSystemPrompt(question) {
  const relevant = findRelevantKnowledge(question);
  if (relevant.length === 0) return BASE_PROMPT;

  return `${BASE_PROMPT}

---

The following is the actual M3 documentation relevant to this question. Use this as your primary source:

${relevant.join('\n\n---\n\n')}`;
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
function callLLM(messages) {
  return new Promise((resolve, reject) => {
    // Use the last user message to find relevant knowledge
    const lastUser = [...messages].reverse().find(m => m.role === 'user');
    const systemPrompt = lastUser ? buildSystemPrompt(lastUser.content) : BASE_PROMPT;

    const payload = JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      max_tokens: 1024,
      temperature: 0.3,
    });

    const parsed  = new url.URL(API_URL);
    const isHttps = parsed.protocol === 'https:';
    const reqLib  = isHttps ? https : http;

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
  const resolved = pathname === '/' ? '/index.html'
                 : pathname.endsWith('/') ? pathname + 'index.html'
                 : pathname;
  const filePath = path.join(__dirname, resolved);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });

}).listen(PORT, () => {
  console.log(`Design Assistant running at http://localhost:${PORT}`);
  console.log(`Install in Penpot: http://localhost:${PORT}/manifest.json`);
  console.log(`Model: ${MODEL} | API: ${API_URL}`);
});
