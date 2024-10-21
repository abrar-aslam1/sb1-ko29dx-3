import { getCollection } from 'astro:content';

export async function get() {
  const pages = await getCollection('pages');
  const posts = await getCollection('blog');

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => `
        <url>
          <loc>${new URL(page.slug, "https://bizsecurity.io").href}</loc>
          <lastmod>${new Date(page.data.lastModified).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
      ${posts.map((post) => `
        <url>
          <loc>${new URL(`blog/${post.slug}`, "https://bizsecurity.io").href}</loc>
          <lastmod>${new Date(post.data.pubDate).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>
  `.trim();

  return {
    body: sitemap,
    headers: {
      "Content-Type": "application/xml",
    },
  };
}
