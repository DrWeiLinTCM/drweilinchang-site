import { getCollection } from 'astro:content';
import { SITE } from '@/config';
export async function GET() {
  const cases = await getCollection('cases', ({ data }) => !data.draft);
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const pages = [
    { url:'/', priority:'1.0', freq:'weekly' },
    { url:'/about/', priority:'0.7', freq:'monthly' },
    { url:'/cases/', priority:'0.9', freq:'weekly' },
    { url:'/articles/', priority:'0.9', freq:'weekly' },
  ];
  cases.forEach(p => pages.push({ url:`/cases/${p.slug}/`, priority:'0.8', freq:'monthly', mod:(p.data.updatedDate||p.data.publishDate).toISOString() }));
  articles.forEach(p => pages.push({ url:`/articles/${p.slug}/`, priority:'0.8', freq:'monthly', mod:(p.data.updatedDate||p.data.publishDate).toISOString() }));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(e=>`  <url>\n    <loc>${SITE.url}${e.url}</loc>\n    <changefreq>${e.freq}</changefreq>\n    <priority>${e.priority}</priority>${e.mod?`\n    <lastmod>${e.mod}</lastmod>`:''}\n  </url>`).join('\n')}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
