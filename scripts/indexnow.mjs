#!/usr/bin/env node
/**
 * IndexNow submission — notifies Bing / Yandex (and other IndexNow engines) of
 * the site's URLs so new and changed pages are discovered quickly.
 *
 * Run this AFTER a production deploy (the URLs must be live, or the engines will
 * see 404s). Suggested: a Vercel "Deploy Hook" or a post-deploy CI step:
 *
 *   node scripts/indexnow.mjs
 *
 * It reads the live sitemap, extracts the page URLs and submits them in one
 * batched IndexNow request. The key file is hosted at
 *   https://www.cvshire.co.uk/<KEY>.txt
 * and must contain exactly <KEY>.
 */

const HOST = "www.cvshire.co.uk";
const KEY = "7304ec016ef942548babbf282b493e85";
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function main() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  // Extract <loc> page URLs (ignore <image:loc>).
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => u.startsWith(`https://${HOST}/`));
  const unique = [...new Set(urls)];
  if (unique.length === 0) throw new Error("No URLs found in sitemap");

  // IndexNow accepts up to 10,000 URLs per request.
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: unique.slice(0, 10000),
  };

  const submit = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  console.log(`Submitted ${body.urlList.length} URLs to IndexNow — HTTP ${submit.status}`);
  if (submit.status >= 400) {
    console.error(await submit.text());
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
