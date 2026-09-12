/**
 * Cloudflare Worker: Sitemap & Edge Handler
 * Domain Worker: ahmad.shofinasla.workers.dev
 * Target Site / Origin: https://ahmad.shofinasla.workers.dev (or custom domain)
 */

const TARGET_ORIGIN = "https://ahmad.shofinasla.workers.dev";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Endpoint: /sitemap.xml
    if (url.pathname === "/sitemap.xml" || url.pathname === "/sitemap") {
      const today = new Date().toISOString().split("T")[0];

      const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${TARGET_ORIGIN}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${TARGET_ORIGIN}/#services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${TARGET_ORIGIN}/#projects</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${TARGET_ORIGIN}/#skills</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${TARGET_ORIGIN}/#contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`.trim();

      return new Response(sitemapXML, {
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
          "X-Robots-Tag": "noindex"
        }
      });
    }

    // Endpoint: /robots.txt
    if (url.pathname === "/robots.txt") {
      const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${TARGET_ORIGIN}/sitemap.xml
`.trim();

      return new Response(robotsTxt, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }

    // Root status information
    if (url.pathname === "/") {
      return new Response(
        `Cloudflare Worker ahmad.shofinasla.workers.dev is active.\nSitemap: ${url.origin}/sitemap.xml\nRobots: ${url.origin}/robots.txt`,
        {
          status: 200,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        }
      );
    }

    return new Response("Not Found", { status: 404 });
  }
};
