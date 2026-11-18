// Our own sitemap, served at /sitemap-index.xml.
// Wix reserves /sitemap.xml and every *-sitemap.xml path, and its generated sitemap was returning 404
// for this site, so this lists every page route for Google directly. New pages in src/pages are
// picked up automatically; dynamic routes ([param]) and non-page files are skipped.
const SITE_URL = 'https://www.lasermicroduo.com';

const pageFiles = import.meta.glob('./**/*.astro');

const routes = Object.keys(pageFiles)
  .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, ''))
  .filter((p) => !p.includes('[') && !p.split('/').some((seg) => seg.startsWith('_')))
  // Ad landing pages (/lp/...) are noindex and stay out of the sitemap.
  .filter((p) => !p.startsWith('lp/'))
  .map((p) => (p === 'index' ? '/' : '/' + p.replace(/\/index$/, '')))
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

export async function GET() {
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    routes.map((r) => `  <url><loc>${SITE_URL}${r}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
