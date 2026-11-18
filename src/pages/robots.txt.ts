// Our own robots.txt. Wix's generated one points at /sitemap.xml, which Wix doesn't serve for this
// site, so the Wix robots route is turned off in astro.config.mjs and this one is used instead.
// The rules mirror Wix's defaults; the Sitemap line points at our working /sitemap-index.xml.
const SITE_URL = 'https://www.lasermicroduo.com';

const body = `User-agent: *
Allow: /
Disallow: *?lightbox=
Disallow: /api/
Disallow: /_wix/

# Optimization for Google Ads Bot
User-agent: AdsBot-Google-Mobile
User-agent: AdsBot-Google
Disallow: /_partials*
Disallow: /pro-gallery-webapp/v1/galleries/*

# Block PetalBot
User-agent: PetalBot
Disallow: /

# Crawl delay for overly enthusiastic bots
User-agent: dotbot
Crawl-delay: 10
User-agent: AhrefsBot
Crawl-delay: 10

Sitemap: ${SITE_URL}/sitemap-index.xml
`;

export async function GET() {
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
