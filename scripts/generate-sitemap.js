const fs = require('fs');
const path = require('path');

// Read files or import them
// Note that typescript files can be read or we can import if ts-node / node support is available, or parse json/export.
const { products } = require('../src/lib/products.ts');
const { categories } = require('../src/lib/categories.ts');
const { aboutSections } = require('../src/lib/aboutUs.ts');

const BASE_URL = 'https://triadglobaltrading.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/products', changefreq: 'daily', priority: '0.9' },
  { path: '/harvest', changefreq: 'weekly', priority: '0.8' },
  { path: '/quality-policy', changefreq: 'monthly', priority: '0.8' },
  { path: '/inquiry', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
];

const urls = [
  ...staticPages.map((p) => ({
    loc: `${BASE_URL}${p.path}`,
    lastmod: today,
    changefreq: p.changefreq,
    priority: p.priority,
  })),
  ...aboutSections.map((s) => ({
    loc: `${BASE_URL}${s.href}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.8',
  })),
  ...categories.map((c) => ({
    loc: `${BASE_URL}/categories/${c.id}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.9',
  })),
  ...products.map((p) => ({
    loc: `${BASE_URL}/products/${p.id}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.9',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${urls.length} URLs at ${outputPath}`);
