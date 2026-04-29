"use client";

import { useEffect, useState } from "react";

type Pill = { slug: string; label: string };

export function CategoryAnchorNav({ pills }: { pills: Pill[] }) {
  const [active, setActive] = useState<string>(pills[0]?.slug ?? "");

  useEffect(() => {
    const sections = pills
      .map((p) => document.getElementById(p.slug))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        const next = pills.find((p) => visible.has(p.slug));
        if (next) setActive(next.slug);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pills]);

  return (
    <nav
      aria-label="Service categories"
      className="hidden md:block sticky top-[60px] z-30 bg-cream/95 backdrop-blur-md border-y border-[var(--ss-line)]"
    >
      <div className="container-ss py-3 flex flex-wrap items-center gap-2">
        {pills.map((p) => {
          const isActive = active === p.slug;
          return (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className={`text-[11px] tracking-[0.18em] uppercase py-2 px-4 border transition-colors ${
                isActive
                  ? "bg-soft-black text-ivory border-soft-black"
                  : "bg-transparent text-soft-black/70 border-[var(--ss-line)] hover:text-soft-black hover:border-soft-black/40"
              }`}
            >
              {p.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
