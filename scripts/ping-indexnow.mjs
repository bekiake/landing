#!/usr/bin/env node

import blogSlugs from '../data/blogSlugs.json' assert { type: 'json' };

const BASE_URL = process.env.INDEXNOW_BASE_URL ?? 'https://airtickett.uz';
const INDEXNOW_ENDPOINT = process.env.INDEXNOW_ENDPOINT ?? 'https://api.indexnow.org/indexnow';
const INDEXNOW_HOST = process.env.INDEXNOW_HOST ?? new URL(BASE_URL).host;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? 'f7e6be3d3073465f9eb0b69ea18a8a10';
const INDEXNOW_KEY_LOCATION =
  process.env.INDEXNOW_KEY_LOCATION ?? `${BASE_URL}/f7e6be3d3073465f9eb0b69ea18a8a10.txt`;

const languages = ['uz', 'ru', 'en'];
const staticPaths = ['/', '/ru', '/en', '/blog', '/ru/blog', '/en/blog'];

const blogPaths = blogSlugs.flatMap(({ slug }) =>
  languages.map((lng) => `${lng === 'uz' ? '' : `/${lng}`}/blog/${slug}`)
);

const urls = [...new Set([...staticPaths, ...blogPaths])].map((path) => `${BASE_URL}${path}`);

async function pingIndexNow() {
  if (!urls.length) {
    console.log('No URLs to submit to IndexNow.');
    return;
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urls,
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`IndexNow request failed with status ${response.status}: ${text}`);
  }

  console.log('IndexNow submission successful.');
}

pingIndexNow().catch((error) => {
  console.error('IndexNow submission failed:', error.message);
  process.exit(1);
});
