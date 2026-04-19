# DECISIONS.md

Defaults chosen silently while scaffolding Sugar & Skin Studio. Revisit if any feel wrong.

## Scaffold
- Used `npx create-next-app@latest . --typescript --eslint --tailwind --src-dir --app --turbopack --use-npm --import-alias "@/*" --yes` inside the empty project dir (vs. scaffolding into a subdir then moving files).
- Next.js 16.2.4 + React 19.2.4 — current stable at scaffold time.
- Tailwind v4 with the default `@theme inline` setup, not a `tailwind.config.ts`.
- Turbopack enabled for `next dev` (scaffold default). `next build` still uses the production pipeline.
- Kept default favicon until a branded one ships.

## Fonts
- `next/font/google` for Cormorant Garamond + Inter — no external <link> tags.
- Display weights for Cormorant: 300, 400, 500, 600. Inter weights: 300, 400, 500, 600.
- CSS variables: `--font-cormorant`, `--font-inter` bound on `<html>`.

## Images
- Stock images downloaded locally to `public/images/stock/` so nothing depends on external CDNs at runtime.
- Every stock photo is marked with `{/* TODO: replace with real studio photo */}`.
- Replacement pass (category-appropriate, no generic spa fallback):
  - `sugaring.jpg` — candidate 1 (Unsplash `photo-1540555700478`)
  - `lash-extensions.jpg` — candidate 2 (Unsplash `photo-1583241800698`); candidate 1 (`photo-1588387036370`) returned 404
  - `lash-lift.jpg` — candidate 2 (Unsplash `photo-1596704017254`); candidate 1 (`photo-1616065554720`) returned 404
  - `brows.jpg` — candidate 1 (Unsplash `photo-1616683693504`)
  - `about-jen.jpg` — candidate 1 (Unsplash `photo-1522337660859`)

## SEO
- `metadataBase` set to `https://sugarandskinstudio.com` (client-owned domain — placeholder until confirmed).
- LocalBusinessSchema emits `@type: "BeautySalon"` with full NAP + hours + rating aggregate omitted (no public review data to aggregate yet).

## Repo / deploy
- Public GitHub repo `bennettsphere/sugarandskin`.
- Vercel preview deploy only — not promoting to production in this pass.

## Deferred
- Services, About, Book, Contact pages — this pass ships Home only.
- Real studio photography, final logo artwork, contact form endpoint.
