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
- `lash-extensions.jpg`: "fallback used" — original Unsplash URL `photo-1561618522-c4f2fb1afe3f` returned 404; substituted with Pexels `photos/3738349`.

## SEO
- `metadataBase` set to `https://sugarandskinstudio.com` (client-owned domain — placeholder until confirmed).
- LocalBusinessSchema emits `@type: "BeautySalon"` with full NAP + hours + rating aggregate omitted (no public review data to aggregate yet).

## Repo / deploy
- Public GitHub repo `bennettsphere/sugarandskin`.
- Vercel preview deploy only — not promoting to production in this pass.

## Deferred
- Services, About, Book, Contact pages — this pass ships Home only.
- Real studio photography, final logo artwork, contact form endpoint.
