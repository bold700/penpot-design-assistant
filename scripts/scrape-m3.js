#!/usr/bin/env node
// scrape-m3.js — scrapes all M3 documentation and saves as markdown files
// Run: node scripts/scrape-m3.js
// Requires: npm install puppeteer

const puppeteer = require('puppeteer');
const fs        = require('fs');
const path      = require('path');

const BASE_URL   = 'https://m3.material.io';
const OUTPUT_DIR = path.join(__dirname, '../knowledge');

// All known M3 sections and pages
const PAGES = [
  // Overview
  { url: '/',                          file: 'overview.md' },

  // Components
  { url: '/components',                          file: 'components/index.md' },
  { url: '/components/badge',                    file: 'components/badge.md' },
  { url: '/components/bottom-app-bar',           file: 'components/bottom-app-bar.md' },
  { url: '/components/bottom-sheets',            file: 'components/bottom-sheets.md' },
  { url: '/components/buttons',                  file: 'components/buttons.md' },
  { url: '/components/cards',                    file: 'components/cards.md' },
  { url: '/components/carousel',                 file: 'components/carousel.md' },
  { url: '/components/checkbox',                 file: 'components/checkbox.md' },
  { url: '/components/chips',                    file: 'components/chips.md' },
  { url: '/components/date-pickers',             file: 'components/date-pickers.md' },
  { url: '/components/dialogs',                  file: 'components/dialogs.md' },
  { url: '/components/divider',                  file: 'components/divider.md' },
  { url: '/components/floating-action-button',   file: 'components/floating-action-button.md' },
  { url: '/components/extended-fab',             file: 'components/extended-fab.md' },
  { url: '/components/icon-buttons',             file: 'components/icon-buttons.md' },
  { url: '/components/lists',                    file: 'components/lists.md' },
  { url: '/components/menus',                    file: 'components/menus.md' },
  { url: '/components/navigation-bar',           file: 'components/navigation-bar.md' },
  { url: '/components/navigation-drawer',        file: 'components/navigation-drawer.md' },
  { url: '/components/navigation-rail',          file: 'components/navigation-rail.md' },
  { url: '/components/progress-indicators',      file: 'components/progress-indicators.md' },
  { url: '/components/radio-button',             file: 'components/radio-button.md' },
  { url: '/components/search',                   file: 'components/search.md' },
  { url: '/components/side-sheets',              file: 'components/side-sheets.md' },
  { url: '/components/sliders',                  file: 'components/sliders.md' },
  { url: '/components/snackbar',                 file: 'components/snackbar.md' },
  { url: '/components/switch',                   file: 'components/switch.md' },
  { url: '/components/tabs',                     file: 'components/tabs.md' },
  { url: '/components/text-fields',              file: 'components/text-fields.md' },
  { url: '/components/time-pickers',             file: 'components/time-pickers.md' },
  { url: '/components/tooltips',                 file: 'components/tooltips.md' },
  { url: '/components/top-app-bar',              file: 'components/top-app-bar.md' },

  // Foundations
  { url: '/foundations',                         file: 'foundations/index.md' },
  { url: '/foundations/accessibility',           file: 'foundations/accessibility.md' },
  { url: '/foundations/adaptive-design',         file: 'foundations/adaptive-design.md' },
  { url: '/foundations/color',                   file: 'foundations/color.md' },
  { url: '/foundations/content-design',          file: 'foundations/content-design.md' },
  { url: '/foundations/customization',           file: 'foundations/customization.md' },
  { url: '/foundations/design-tokens',           file: 'foundations/design-tokens.md' },
  { url: '/foundations/dynamic-color',           file: 'foundations/dynamic-color.md' },
  { url: '/foundations/interaction',             file: 'foundations/interaction.md' },
  { url: '/foundations/layout',                  file: 'foundations/layout.md' },
  { url: '/foundations/motion',                  file: 'foundations/motion.md' },
  { url: '/foundations/typography',              file: 'foundations/typography.md' },
  { url: '/foundations/understanding-layout',    file: 'foundations/understanding-layout.md' },

  // Styles
  { url: '/styles',                              file: 'styles/index.md' },
  { url: '/styles/color',                        file: 'styles/color.md' },
  { url: '/styles/color/the-color-system',       file: 'styles/color-system.md' },
  { url: '/styles/color/color-roles',            file: 'styles/color-roles.md' },
  { url: '/styles/color/dynamic-color',          file: 'styles/color-dynamic.md' },
  { url: '/styles/elevation',                    file: 'styles/elevation.md' },
  { url: '/styles/icons',                        file: 'styles/icons.md' },
  { url: '/styles/motion',                       file: 'styles/motion.md' },
  { url: '/styles/motion/easing-and-duration',   file: 'styles/motion-easing.md' },
  { url: '/styles/motion/transitions',           file: 'styles/motion-transitions.md' },
  { url: '/styles/shape',                        file: 'styles/shape.md' },
  { url: '/styles/typography',                   file: 'styles/typography.md' },
  { url: '/styles/typography/type-scale',        file: 'styles/typography-type-scale.md' },
];

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function scrapePage(page, url) {
  await page.goto(BASE_URL + url, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait for main content
  await page.waitForSelector('body', { timeout: 10000 }).catch(() => {});
  await new Promise(r => setTimeout(r, 1500)); // let JS render

  const content = await page.evaluate(() => {
    // Remove nav, footer, scripts, styles, code examples (visual only)
    const remove = document.querySelectorAll('nav, footer, script, style, [aria-hidden="true"], .toc, aside');
    remove.forEach(el => el.remove());

    // Try to find main content area
    const main = document.querySelector('main, article, [role="main"], .content, .page-content') || document.body;

    // Extract headings and paragraphs as structured text
    const lines = [];
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_ELEMENT);

    let node;
    while ((node = walker.nextNode())) {
      const tag = node.tagName.toLowerCase();
      const text = node.textContent.trim();
      if (!text || text.length < 3) continue;

      if (tag === 'h1') lines.push(`\n# ${text}\n`);
      else if (tag === 'h2') lines.push(`\n## ${text}\n`);
      else if (tag === 'h3') lines.push(`\n### ${text}\n`);
      else if (tag === 'h4') lines.push(`\n#### ${text}\n`);
      else if (tag === 'p') lines.push(text);
      else if (tag === 'li') lines.push(`- ${text}`);
    }

    // Deduplicate consecutive identical lines
    const deduped = [];
    for (const line of lines) {
      if (deduped[deduped.length - 1] !== line) deduped.push(line);
    }

    return deduped.join('\n');
  });

  return content;
}

async function run() {
  console.log(`Scraping ${PAGES.length} pages from ${BASE_URL}...\n`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page    = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Suppress console noise
  page.on('console', () => {});

  let success = 0;
  let failed  = 0;

  for (const { url, file } of PAGES) {
    const outputPath = path.join(OUTPUT_DIR, file);
    ensureDir(outputPath);

    try {
      process.stdout.write(`Scraping ${url} ... `);
      const content = await scrapePage(page, url);

      if (content.trim().length < 100) {
        console.log('SKIP (too little content)');
        failed++;
        continue;
      }

      const markdown = `<!-- Source: ${BASE_URL}${url} -->\n<!-- Scraped: ${new Date().toISOString()} -->\n\n${content.trim()}\n`;
      fs.writeFileSync(outputPath, markdown, 'utf8');
      console.log(`OK (${content.length} chars)`);
      success++;
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
      failed++;
    }

    // Small delay to be polite
    await new Promise(r => setTimeout(r, 500));
  }

  await browser.close();

  // Write index file
  const index = [
    '# M3 Knowledge Base',
    `Scraped from ${BASE_URL} on ${new Date().toISOString()}`,
    `Total pages: ${success} succeeded, ${failed} failed\n`,
    '## Files\n',
    ...PAGES.map(p => `- [${p.file}](${p.file}) — ${BASE_URL}${p.url}`),
  ].join('\n');

  fs.writeFileSync(path.join(OUTPUT_DIR, 'INDEX.md'), index, 'utf8');

  console.log(`\nDone. ${success} pages saved to knowledge/`);
  console.log(`${failed} pages failed.`);
}

run().catch(e => { console.error(e); process.exit(1); });
