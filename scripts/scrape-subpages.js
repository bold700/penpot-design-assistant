#!/usr/bin/env node
// scrape-subpages.js — scrapes sub-pages (overview, specs, guidelines, etc.)
// for all pages already in knowledge/INDEX.md
// Run: node scripts/scrape-subpages.js

const puppeteer = require('puppeteer');
const fs        = require('fs');
const path      = require('path');

const BASE_URL   = 'https://m3.material.io';
const OUTPUT_DIR = path.join(__dirname, '../knowledge');
const INDEX_FILE = path.join(OUTPUT_DIR, 'INDEX.md');

const SUB_PAGES = ['overview', 'specs', 'guidelines', 'accessibility', 'develop'];

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function scrapePage(page, targetUrl) {
  await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 45000 });
  await new Promise(r => setTimeout(r, 2500));

  return await page.evaluate(() => {
    const toRemove = document.querySelectorAll(
      'nav, footer, script, style, noscript, header, svg, ' +
      '[aria-hidden="true"], [role="navigation"], [role="banner"]'
    );
    toRemove.forEach(el => el.remove());

    const main =
      document.querySelector('main article') ||
      document.querySelector('main') ||
      document.querySelector('article') ||
      document.querySelector('[role="main"]') ||
      document.body;

    const lines = [];
    const seen  = new Set();

    function processNode(node) {
      if (node.nodeType === 3) {
        const text = node.textContent.trim();
        if (text.length > 2) lines.push(text);
        return;
      }
      if (node.nodeType !== 1) return;

      const tag = node.tagName.toLowerCase();
      const style = window.getComputedStyle(node);
      if (style.display === 'none' || style.visibility === 'hidden') return;
      if (['script','style','noscript','svg','img','button','input'].includes(tag)) return;

      if (/^h[1-6]$/.test(tag)) {
        const text = node.textContent.trim();
        if (text && !seen.has(text)) {
          seen.add(text);
          const level = '#'.repeat(parseInt(tag[1]));
          lines.push(`\n${level} ${text}\n`);
        }
        return;
      }
      if (tag === 'li') {
        const text = node.textContent.trim();
        if (text && !seen.has(text)) { seen.add(text); lines.push(`- ${text}`); }
        return;
      }
      if (tag === 'p') {
        const text = node.textContent.trim();
        if (text && !seen.has(text)) { seen.add(text); lines.push(text); }
        return;
      }
      if (tag === 'table') {
        const rows = Array.from(node.querySelectorAll('tr'));
        for (const row of rows) {
          const cells = Array.from(row.querySelectorAll('th,td')).map(c => c.textContent.trim());
          if (cells.length) lines.push('| ' + cells.join(' | ') + ' |');
        }
        return;
      }
      for (const child of node.childNodes) processNode(child);
    }

    processNode(main);
    return lines.join('\n');
  });
}

async function run() {
  // Read known pages from INDEX.md
  const indexText = fs.readFileSync(INDEX_FILE, 'utf8');
  const basePages = indexText
    .split('\n')
    .filter(l => l.startsWith('- ['))
    .map(l => {
      const m = l.match(/\((.+?)\)/);
      return m ? m[1].replace('.md', '') : null;
    })
    .filter(Boolean);

  // Build sub-page URLs to try
  const toScrape = [];
  for (const page of basePages) {
    for (const sub of SUB_PAGES) {
      const relPath = `${page}/${sub}`;
      const filePath = path.join(OUTPUT_DIR, relPath + '.md');
      if (!fs.existsSync(filePath)) {
        toScrape.push({ relPath, url: `${BASE_URL}/${relPath}`, filePath });
      }
    }
  }

  console.log(`Found ${toScrape.length} sub-pages to try (skipping already scraped)`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page    = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  page.on('console', () => {});

  let success = 0;
  let failed  = 0;
  const newPages = []; // { url, file }

  for (const { relPath, url, filePath } of toScrape) {
    try {
      process.stdout.write(`Scraping ${relPath} ... `);
      const content = await scrapePage(page, url);

      if (content.trim().length < 100) {
        console.log('SKIP (too little content)');
        failed++;
        continue;
      }

      ensureDir(filePath);
      const markdown = `<!-- Source: ${url} -->\n<!-- Scraped: ${new Date().toISOString()} -->\n\n${content.trim()}\n`;
      fs.writeFileSync(filePath, markdown, 'utf8');
      console.log(`OK (${content.length} chars)`);
      success++;
      newPages.push({ url, file: relPath + '.md' });
    } catch (e) {
      console.log(`SKIP (${e.message.split('\n')[0]})`);
      failed++;
    }

    await new Promise(r => setTimeout(r, 300));
  }

  await browser.close();

  // Append new pages to INDEX.md
  if (newPages.length > 0) {
    const append = newPages.map(p => `- [${p.file}](${p.file}) — ${p.url}`).join('\n');
    fs.appendFileSync(INDEX_FILE, '\n' + append + '\n', 'utf8');
    console.log(`\nAdded ${newPages.length} sub-pages to INDEX.md`);
  }

  console.log(`\nDone. ${success} sub-pages saved, ${failed} skipped/failed.`);
}

run().catch(e => { console.error(e); process.exit(1); });
