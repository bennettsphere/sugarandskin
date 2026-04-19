import { writeFile, readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const TARGETS = {
  "sugaring.jpg": [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
    "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1200&q=80",
    "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&w=1200",
  ],
  "lash-extensions.jpg": [
    "https://images.unsplash.com/photo-1588387036370-c62c6bb6d3cf?w=1200&q=80",
    "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=1200&q=80",
    "https://images.pexels.com/photos/2253834/pexels-photo-2253834.jpeg?auto=compress&w=1200",
  ],
  "lash-lift.jpg": [
    "https://images.unsplash.com/photo-1616065554720-cac7d4d3b1bc?w=1200&q=80",
    "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1200&q=80",
    "https://images.pexels.com/photos/3738346/pexels-photo-3738346.jpeg?auto=compress&w=1200",
  ],
  "brows.jpg": [
    "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=80",
    "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1200&q=80",
    "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&w=1200",
  ],
  "about-jen.jpg": [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80",
    "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&w=1200",
  ],
};

const MIN_BYTES = 50 * 1024;
const outDir = resolve("public/images/stock");

const report = {};

for (const [filename, urls] of Object.entries(TARGETS)) {
  let success = null;
  const attempts = [];

  for (const url of urls) {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) {
      attempts.push({ url, reason: `HTTP ${res.status}` });
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < MIN_BYTES) {
      attempts.push({ url, reason: `too small: ${buf.length} bytes` });
      continue;
    }
    if (buf[0] !== 0xff || buf[1] !== 0xd8 || buf[2] !== 0xff) {
      attempts.push({
        url,
        reason: `bad magic: ${buf.slice(0, 3).toString("hex")}`,
      });
      continue;
    }
    await writeFile(resolve(outDir, filename), buf);
    success = { url, bytes: buf.length, candidateIndex: urls.indexOf(url) };
    break;
  }

  report[filename] = { success, attempts };
  if (success) {
    console.log(
      `OK ${filename} ← candidate ${success.candidateIndex + 1} (${success.bytes} bytes)`,
    );
  } else {
    console.log(`FAIL ${filename} — all ${urls.length} candidates failed:`);
    for (const a of attempts) console.log(`   ${a.url} — ${a.reason}`);
  }
}

console.log("\n--- JSON report ---");
console.log(JSON.stringify(report, null, 2));

const allOk = Object.values(report).every((r) => r.success);
if (!allOk) process.exit(1);
