import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/config';
export async function GET(ctx) {
  const cases = await getCollection('cases', ({ data }) => !data.draft);
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const all = [...cases.map(p=>({...p, prefix:'/cases/'})), ...articles.map(p=>({...p, prefix:'/articles/'}))];
  all.sort((a,b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
  return rss({ title: SITE.title, description: SITE.description, site: ctx.site,
    items: all.map(p => ({ title:p.data.title, pubDate:p.data.publishDate, description:p.data.description, link:`${p.prefix}${p.slug}/`, categories:p.data.tags })),
    customData: `<language>${SITE.lang}</language>` });
}
