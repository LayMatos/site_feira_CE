import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "docs", "screenshots");
const baseUrl = process.env.BASE_URL || "http://localhost:5175";

const shots = [
  { name: "desktop-hero", viewport: { width: 1440, height: 900 }, fullPage: false },
  { name: "desktop-full", viewport: { width: 1440, height: 900 }, fullPage: true },
  { name: "mobile-hero", viewport: { width: 390, height: 844 }, fullPage: false },
  { name: "mobile-full", viewport: { width: 390, height: 844 }, fullPage: true },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

for (const shot of shots) {
  await page.setViewportSize(shot.viewport);
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(outDir, `${shot.name}.png`),
    fullPage: shot.fullPage,
  });
  console.log(`Saved ${shot.name}.png`);
}

// Seções individuais (desktop)
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(baseUrl, { waitUntil: "networkidle" });

const sections = [
  { id: "sobre", name: "desktop-about" },
  { id: "palestrantes", name: "desktop-speakers" },
  { id: "patrocinadores", name: "desktop-sponsors" },
  { id: "expositor", name: "desktop-footer" },
];

for (const section of sections) {
  const el = page.locator(`#${section.id}`);
  if (await el.count()) {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await el.screenshot({ path: path.join(outDir, `${section.name}.png`) });
    console.log(`Saved ${section.name}.png`);
  }
}

await browser.close();
console.log("Done!");
