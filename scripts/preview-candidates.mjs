import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "screenshots");
await mkdir(outDir, { recursive: true });

const candidates = [
  {
    id: "C1_beautician_cream",
    url: "https://images.unsplash.com/premium_photo-1661680271644-00e5bdf97627?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "C2_hands_face_massage",
    url: "https://images.unsplash.com/premium_photo-1661274109570-5d14d6f4aa68?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "C3_facial_mask",
    url: "https://images.unsplash.com/photo-1731514771613-991a02407132?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "C4_woman_eyes_closed",
    url: "https://images.unsplash.com/photo-1683408640631-2c99fff964d7?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "C5_white_towel",
    url: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "C6_glass_bottle_warm",
    url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "C7_chin_hands",
    url: "https://images.unsplash.com/premium_photo-1661340946994-d2cddba7461b?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "C8_face_cleansing",
    url: "https://images.unsplash.com/premium_photo-1661699867413-e6920d14d4dc?w=1600&q=80&auto=format&fit=crop",
  },
];

for (const c of candidates) {
  const res = await fetch(c.url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    },
  });
  if (!res.ok) {
    console.log(`✗ ${c.id} [${res.status}]`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(outDir, `${c.id}.jpg`), buf);
  console.log(`→ ${c.id}.jpg (${(buf.length / 1024).toFixed(0)} KB)`);
}
