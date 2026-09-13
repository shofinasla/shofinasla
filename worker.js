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
    if (
      url.pathname === "/sitemap.xml" ||
      url.pathname === "/sitemap"
    ) {
      const today = new Date().toISOString().split("T")[0];

      const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url.origin}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${url.origin}/#services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${url.origin}/#projects</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${url.origin}/#skills</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${url.origin}/#contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`.trim();

      return new Response(sitemapXML, {
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control":
            "public, max-age=3600, s-maxage=86400"
        }
      });
    }

    // =========================
    // ROBOTS.TXT
    // =========================
    if (url.pathname === "/robots.txt") {
      const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${url.origin}/sitemap.xml
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