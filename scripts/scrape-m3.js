#!/usr/bin/env node
// scrape-m3.js — crawls all M3 documentation and saves as markdown files
// Run: node scripts/scrape-m3.js
// Requires: npm install puppeteer

const puppeteer = require('puppeteer');
const fs        = require('fs');
const path      = require('path');

const BASE_URL   = 'https://m3.material.io';
const OUTPUT_DIR = path.join(__dirname, '../knowledge');

// Sub-pages each component/section can have
const SUB_PAGES = ['overview', 'specs', 'guidelines', 'accessibility', 'xr', 'develop'];

// Known top-level sections to crawl
const SECTIONS = [
  '/components',
  '/foundations',
  '/styles',
  '/develop',
  '/blog',
];

const visited   = new Set();
const toVisit   = new Set();
const allPages  = []; // { url, file }

function urlToFile(u) {
  // Strip base URL and leading slash
  let rel = u.replace(BASE_URL, '').replace(/^\//, '');
  if (!rel) rel = 'index';
  // Replace slashes with directory structure
  return rel.replace(/\//g, '/') + '.md';
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function discoverUrls(page) {
  console.log('Discovering URLs from navigation...');

  for (const section of SECTIONS) {
    await page.goto(BASE_URL + section, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));

    const links = await page.evaluate((base, sectionPath) => {
      const anchors = Array.from(document.querySelectorAll('a[href]'));
      return anchors
        .map(a => a.getAttribute('href'))
        .filter(href => href && href.startsWith(sectionPath))
        .map(href => href.split('#')[0]) // remove anchors
        .filter(href => href.length > sectionPath.length);
    }, BASE_URL, section);

    for (const link of links) {
      const full = BASE_URL + link;
      if (!visited.has(full)) toVisit.add(full);
    }

    // Also add the section root itself
    toVisit.add(BASE_URL + section);
  }

  console.log(`Found ${toVisit.size} URLs to scrape`);
}

async function scrapePage(page, targetUrl) {
  await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 45000 });
  await new Promise(r => setTimeout(r, 2500));

  return await page.evaluate(() => {
    // Remove non-content elements
    const toRemove = document.querySelectorAll(
      'nav, footer, script, style, noscript, header, svg, ' +
      '[aria-hidden="true"], [role="navigation"], [role="banner"]'
    );
    toRemove.forEach(el => el.remove());

    // Find main content
    const main =
      document.querySelector('main article') ||
      document.querySelector('main') ||
      document.querySelector('article') ||
      document.querySelector('[role="main"]') ||
      document.body;

    const lines = [];
    const seen  = new Set();

    function processNode(node) {
      if (node.nodeType === 3) { // text node
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
        if (text && !seen.has(text)) {
          seen.add(text);
          lines.push(`- ${text}`);
        }
        return;
      }

      if (tag === 'p') {
        const text = node.textContent.trim();
        if (text && !seen.has(text)) {
          seen.add(text);
          lines.push(text);
        }
        return;
      }

      if (tag === 'table') {
        // Extract table as simple text
        const rows = Array.from(node.querySelectorAll('tr'));
        for (const row of rows) {
          const cells = Array.from(row.querySelectorAll('th,td')).map(c => c.textContent.trim());
          if (cells.length) lines.push('| ' + cells.join(' | ') + ' |');
        }
        return;
      }

      // Recurse
      for (const child of node.childNodes) processNode(child);
    }

    processNode(main);
    return lines.join('\n');
  });
}

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page    = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  page.on('console', () => {});

  // Step 1: discover all URLs
  await discoverUrls(page);

  // Step 1b: add sub-pages for each discovered URL
  const discovered = Array.from(toVisit);
  for (const base of discovered) {
    for (const sub of SUB_PAGES) {
      const subUrl = `${base}/${sub}`;
      if (!visited.has(subUrl)) toVisit.add(subUrl);
    }
  }
  console.log(`Total URLs including sub-pages: ${toVisit.size}`);

  // Step 2: scrape each page
  let success = 0;
  let failed  = 0;
  const urls = Array.from(toVisit).sort();

  for (const targetUrl of urls) {
    if (visited.has(targetUrl)) continue;
    visited.add(targetUrl);

    const relPath  = targetUrl.replace(BASE_URL, '').replace(/^\//, '') || 'index';
    const filePath = path.join(OUTPUT_DIR, relPath + '.md');
    ensureDir(filePath);

    try {
      process.stdout.write(`Scraping ${relPath} ... `);
      const content = await scrapePage(page, targetUrl);

      if (content.trim().length < 50) {
        console.log('SKIP (too little content)');
        failed++;
        continue;
      }

      const markdown = `<!-- Source: ${targetUrl} -->\n<!-- Scraped: ${new Date().toISOString()} -->\n\n${content.trim()}\n`;
      fs.writeFileSync(filePath, markdown, 'utf8');
      console.log(`OK (${content.length} chars)`);
      success++;
      allPages.push({ url: targetUrl, file: relPath + '.md' });
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
      failed++;
    }

    await new Promise(r => setTimeout(r, 400));
  }

  await browser.close();

  // Write index
  const index = [
    '# M3 Knowledge Base',
    `Scraped from ${BASE_URL} on ${new Date().toISOString()}`,
    `${success} pages saved, ${failed} failed\n`,
    '## Pages\n',
    ...allPages.map(p => `- [${p.file}](${p.file}) — ${p.url}`),
  ].join('\n');

  fs.writeFileSync(path.join(OUTPUT_DIR, 'INDEX.md'), index, 'utf8');
  console.log(`\nDone. ${success} pages saved, ${failed} failed.`);
}

run().catch(e => { console.error(e); process.exit(1); });
