// Cloudflare Pages Function — 愛心計數 API
// 需要在 Cloudflare 後台綁定一個 KV namespace，變數名稱：LIKES

export async function onRequestPost(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');
  if (!slug || !env.LIKES) {
    return new Response(JSON.stringify({ ok: false }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
  const key = `likes:${slug}`;
  const current = parseInt((await env.LIKES.get(key)) || '0', 10);
  await env.LIKES.put(key, String(current + 1));
  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
}

// 查看所有文章的愛心數：瀏覽器打開 /api/like?all=1
export async function onRequestGet(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  if (!env.LIKES) {
    return new Response(JSON.stringify({ error: 'KV 尚未綁定，請到 Cloudflare 後台設定 LIKES binding' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
  if (url.searchParams.get('all')) {
    const list = await env.LIKES.list({ prefix: 'likes:' });
    const out = {};
    for (const k of list.keys) {
      out[k.name.replace('likes:', '')] = parseInt((await env.LIKES.get(k.name)) || '0', 10);
    }
    return new Response(JSON.stringify(out, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
  }
  const slug = url.searchParams.get('slug');
  const count = slug ? parseInt((await env.LIKES.get(`likes:${slug}`)) || '0', 10) : 0;
  return new Response(JSON.stringify({ slug, count }), { headers: { 'Content-Type': 'application/json' } });
}
