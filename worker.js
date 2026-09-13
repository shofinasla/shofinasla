/**
 * Cloudflare Worker
 * Ahmad Shofi Nasla Portfolio
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // =========================
    // SITEMAP
    // =========================
    if (url.pathname === "/sitemap.xml" || url.pathname === "/sitemap") {
      const today = new Date().toISOString().split("T")[0];

      const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://ahmad.shofinasla.workers.dev/</loc>
        <lastmod>${today}</lastmod>
      </url>
      <url>
        <loc>https://ahmad.shofinasla.workers.dev/about</loc>
        <lastmod>${today}</lastmod>
      </url>
    </urlset>`.trim();

      return new Response(sitemapXML, {
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=86400"
        }
      });
    }
    // =========================
    // ROBOTS.TXT
    // =========================
    if (url.pathname === "/robots.txt") {
      const robotsTxt = `User-agent: *
    Allow: /

    Sitemap: https://ahmad.shofinasla.workers.dev/sitemap.xml
    `.trim();

      return new Response(robotsTxt, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }
    // =========================
    // WEBSITE / STATIC ASSETS
    // =========================
    return env.ASSETS.fetch(request);
  }
};