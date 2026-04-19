import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const url = "https://sugarandskin.vercel.app";
const outDir = resolve("screenshots/comparison");
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  console.log(`[${vp.name}] loading ${url}`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3000);

  const heroPath = resolve(outDir, `${vp.name}-hero.jpg`);
  const fullPath = resolve(outDir, `${vp.name}-full.jpg`);

  await page.screenshot({
    path: heroPath,
    fullPage: false,
    type: "jpeg",
    quality: 75,
  });
  await page.screenshot({
    path: fullPath,
    fullPage: true,
    type: "jpeg",
    quality: 75,
  });

  console.log(`[${vp.name}] saved ${heroPath}`);
  console.log(`[${vp.name}] saved ${fullPath}`);
  await ctx.close();
}
await browser.close();
console.log("done");
