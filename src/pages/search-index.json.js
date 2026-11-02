import { getCollection } from 'astro:content';

export async function GET() {
  const cases = await getCollection('cases', ({ data }) => !data.draft);
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const items = [
    ...cases.map((p) => ({
      type: '案例',
      title: p.data.title,
      description: p.data.description,
      tags: p.data.tags,
      url: `/cases/${p.id}/`,
    })),
    ...articles.map((p) => ({
      type: '知識',
      title: p.data.title,
      description: p.data.description,
      tags: p.data.tags,
      url: `/articles/${p.id}/`,
    })),
  ];
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
