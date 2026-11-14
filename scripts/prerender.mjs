// scripts/prerender.mjs
// Static Site Generation (SSG) script for Pakistan Power Engineering Services
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { routeSeoMap, getCanonicalUrl } from '../src/data/routeSeoMap.js';

async function prerender() {
  console.log('🚀 Starting Static Pre-rendering (SSG)...');

  const distDir = path.resolve('dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found! Run "vite build" first.');
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Load the SSR bundle
  const ssrBundlePath = pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href;
  const { render } = await import(ssrBundlePath);

  const routes = Object.keys(routeSeoMap);
  console.log(`📄 Found ${routes.length} routes to prerender.\n`);

  const results = [];

  for (const route of routes) {
    const seo = routeSeoMap[route];
    const canonicalUrl = getCanonicalUrl(route);

    // 1. Render React tree to HTML string
    const appHtml = render(route);

    // 2. Inject rendered HTML into #root
    let pageHtml = baseTemplate.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // 3. Update Title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/s,
      `<title>${seo.title}</title>`
    );

    // 4. Update Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/is,
      `<meta name="description" content="${seo.description}" />`
    );

    // 5. Update Canonical
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/is,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // 6. Update OpenGraph Tags
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/is,
      `<meta property="og:title" content="${seo.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/is,
      `<meta property="og:description" content="${seo.description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/is,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // 7. Update Twitter Tags
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/is,
      `<meta name="twitter:title" content="${seo.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/is,
      `<meta name="twitter:description" content="${seo.description}" />`
    );

    // 8. Determine file destination
    let destFile;
    if (route === '/') {
      destFile = path.join(distDir, 'index.html');
    } else {
      const routeDir = path.join(distDir, route.replace(/^\//, ''));
      fs.mkdirSync(routeDir, { recursive: true });
      destFile = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(destFile, pageHtml, 'utf-8');

    const hasH1 = pageHtml.includes('<h1');
    const sizeKb = (Buffer.byteLength(pageHtml, 'utf-8') / 1024).toFixed(1);
    results.push({ route, destFile: path.relative(distDir, destFile), sizeKb, hasH1 });
    console.log(`  ✓ ${route.padEnd(38)} ──► ${destFile.replace(/.*dist[\\/]/, 'dist/')} (${sizeKb} kB) [h1: ${hasH1}]`);
  }

  // 9. Clean up temporary dist-ssr directory
  try {
    const distSsrDir = path.resolve('dist-ssr');
    if (fs.existsSync(distSsrDir)) {
      fs.rmSync(distSsrDir, { recursive: true, force: true });
      console.log('\n🧹 Cleaned up temporary dist-ssr directory.');
    }
  } catch (err) {
    console.warn('Could not remove dist-ssr:', err.message);
  }

  console.log(`\n🎉 SSG Prerender Complete: All ${results.length} routes generated successfully!`);
}

prerender().catch(err => {
  console.error('\n❌ Prerender failed:', err);
  process.exit(1);
});

