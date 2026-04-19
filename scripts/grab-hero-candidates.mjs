import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "screenshots");
await mkdir(outDir, { recursive: true });

const searches = [
  "https://unsplash.com/s/photos/facial-treatment",
  "https://unsplash.com/s/photos/skincare",
  "https://unsplash.com/s/photos/esthetician",
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 2000 },
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
});

const summary = [];
for (const url of searches) {
  const slug = url.split("/photos/")[1];
  console.log(`→ ${url}`);
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  // wait for grid images to render
  await page
    .waitForSelector('figure a[itemprop="contentUrl"], figure img[srcset]', {
      timeout: 20000,
    })
    .catch(() => {});
  // scroll a bit so more thumbnails lazy-load
  await page.evaluate(async () => {
    for (let y = 0; y < 2200; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 250));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);

  const gridPath = join(outDir, `grid-${slug}.png`);
  await page.screenshot({ path: gridPath, fullPage: false });
  console.log(`  grid: ${gridPath}`);

  const candidates = await page.evaluate(() => {
    const items = [];
    document
      .querySelectorAll("figure a[itemprop='contentUrl']")
      .forEach((a) => {
        const img = a.querySelector("img");
        if (!img) return;
        const alt = img.getAttribute("alt") || "";
        const srcset = img.getAttribute("srcset") || "";
        // Prefer the largest candidate in srcset
        const urls = srcset
          .split(",")
          .map((s) => s.trim().split(" ")[0])
          .filter((u) => u.startsWith("https://images.unsplash.com/"));
        const src = img.getAttribute("src") || urls[urls.length - 1] || "";
        const href = a.getAttribute("href") || "";
        // Aspect (wide preferred)
        const rect = img.getBoundingClientRect();
        items.push({
          alt,
          src,
          href,
          w: rect.width,
          h: rect.height,
        });
      });
    return items;
  });

  console.log(`  ${candidates.length} candidates`);
  summary.push({ search: url, grid: gridPath, candidates });
}

await writeFile(
  join(outDir, "candidates.json"),
  JSON.stringify(summary, null, 2),
);
console.log("→ screenshots/candidates.json written");

await browser.close();
