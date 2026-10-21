import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const read = (file) => readFile(path.join(dist, file), 'utf8');
const index = JSON.parse(await read('search-index.json'));
assert(Array.isArray(index) && index.length > 0, 'Search must publish a JSON index.');
const urls = new Set();
for (const item of index) {
  assert(['案例', '知識'].includes(item.type));
  assert.equal(typeof item.title, 'string');
  assert.equal(typeof item.description, 'string');
  assert(Array.isArray(item.tags) && item.tags.every((tag) => typeof tag === 'string'));
  assert.match(item.url, /^\/(cases|articles)\/[^?#]+\/$/);
  assert(!urls.has(item.url), `Duplicate search result: ${item.url}`);
  urls.add(item.url);
  const html = await read(`${item.url.slice(1)}index.html`);
  assert.match(html, /rel="author"/, `Missing visible author: ${item.url}`);
}
for (const collection of ['cases', 'articles']) {
  const entries = await readdir(path.join(dist, collection), { withFileTypes: true });
  for (const entry of entries.filter((entry) => entry.isDirectory() && entry.name !== 'tag')) {
    assert(urls.has(`/${collection}/${entry.name}/`), `Published page missing from search: ${entry.name}`);
  }
}
const about = await read('about/index.html');
assert(!about.includes('[object Object]'), 'Specialties must show readable labels.');
assert(!about.includes('請填寫'), 'The public profile must not show unfinished fields.');
assert(about.includes('腸躁症') && about.includes('膏肓痛'));
const home = await read('index.html');
assert.match(home, /aria-label="搜尋醫案與健康知識"/);
assert(home.includes('看診') && home.includes('無門診'));
const notFound = await read('404.html');
assert(notFound.includes('找不到這個頁面'));
assert.match(notFound, /name="robots" content="noindex, follow"/);
assert(!(await read('sitemap.xml')).includes('/404'));

async function checkAssets(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await checkAssets(filename);
    else if (entry.name.endsWith('.html')) {
      const html = await readFile(filename, 'utf8');
      for (const [, src] of html.matchAll(/<img\b[^>]*\bsrc="(\/[^"]+)"/g)) {
        await access(path.join(dist, decodeURIComponent(src.split(/[?#]/)[0])));
      }
      for (const [, src] of html.matchAll(/url\(['"]?(\/[^'"\)]+)['"]?\)/g)) {
        await access(path.join(dist, decodeURIComponent(src.split(/[?#]/)[0])));
      }
    }
  }
}
await checkAssets(dist);
console.log(`Verified ${index.length} searchable posts, author links, readable profile, local images, and custom 404.`);
