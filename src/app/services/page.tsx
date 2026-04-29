import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { getMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceRow } from "@/components/services/ServiceRow";
import { CategoryAnchorNav } from "@/components/services/CategoryAnchorNav";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { servicesCatalog, procellCategory } from "@/lib/services-data";
import { site } from "@/lib/site";

export const metadata = getMetadata({
  title: "Services & Pricing",
  description:
    "Full menu of sugaring, facials, chemical peels, lash extensions, brows, and Procell microchanneling at Sugar & Skin Studio in Lake Havasu City. Transparent pricing, appointment only.",
  path: "/services",
});

const pills = [
  ...servicesCatalog.map((c) => ({ slug: c.slug, label: c.pillLabel })),
  { slug: procellCategory.slug, label: procellCategory.pillLabel },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="container-ss">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="eyebrow">
              <span className="hairline mr-3 align-middle" />
              Our menu
              <span className="hairline ml-3 align-middle" />
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-6 text-soft-black">
              Every service, every{" "}
              <span className="font-display-italic text-gold-deep">price</span>.
            </h1>
            <p className="mt-6 text-soft-black/70 leading-relaxed max-w-2xl mx-auto">
              42 services across hair removal, skin, brows, and lashes — all
              delivered one-on-one with the cleanest products available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Soft-entry consult banner */}
      <section className="bg-cream pb-12 md:pb-16">
        <div className="container-ss">
          <Reveal>
            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gold text-soft-black p-6 md:p-8 transition-colors hover:bg-gold-deep"
            >
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
                <div>
                  <p className="font-display text-2xl md:text-3xl text-soft-black leading-snug">
                    New to Sugar &amp; Skin? Start with a free 15-minute
                    consult.
                  </p>
                  <p className="mt-3 text-soft-black/85 text-sm md:text-base leading-relaxed max-w-2xl">
                    Meet Jen, talk through what you want, leave with a plan —
                    no pressure to book a service.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 self-start md:self-auto text-xs tracking-[0.22em] uppercase font-medium text-soft-black">
                  Book a free consult
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Sticky pill nav (desktop only) */}
      <CategoryAnchorNav pills={pills} />

      {/* Six standard category sections */}
      {servicesCatalog.map((cat, i) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`scroll-mt-24 md:scroll-mt-[140px] section ${
            i % 2 === 0 ? "bg-cream" : "bg-ivory"
          }`}
        >
          <div className="container-ss">
            <Reveal className="max-w-2xl mb-10 md:mb-14">
              <span className="eyebrow text-gold-deep">{cat.eyebrow}</span>
              <h2 className="font-display-italic text-4xl md:text-5xl lg:text-6xl mt-4 text-soft-black">
                {cat.h2}
              </h2>
              <p className="mt-6 text-soft-black/70 leading-relaxed">
                {cat.intro}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="md:columns-2 md:gap-x-12">
                {cat.services.map((s) => (
                  <ServiceRow
                    key={s.name}
                    name={s.name}
                    price={s.price}
                    duration={s.duration}
                  />
                ))}
              </div>

              {cat.note && (
                <p className="mt-8 text-sm text-soft-black/55 leading-relaxed max-w-2xl">
                  {cat.note}
                </p>
              )}

              {cat.deposit && (
                <div className="mt-8 max-w-xl border border-[var(--ss-line)] bg-rose-soft/30 p-5 md:p-6">
                  <p className="text-sm text-soft-black leading-relaxed">
                    {cat.deposit}
                  </p>
                </div>
              )}

              <div className="mt-10 md:mt-12">
                <a
                  href={site.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-soft-black/25 text-soft-black hover:bg-soft-black hover:text-ivory"
                >
                  Book {cat.ctaLabel} <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Procell — full-width premium card */}
      <section
        id={procellCategory.slug}
        className="scroll-mt-24 md:scroll-mt-[140px] section bg-cream"
      >
        <div className="container-ss">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-soft-black text-ivory min-h-[420px]">
              {/* Image — left at md+, top on mobile */}
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-full">
                {/* TODO: replace with real studio photo */}
                <Image
                  src={procellCategory.image}
                  alt="Procell Microchanneling treatment"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover img-warm"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-soft-black/40 md:to-soft-black/60"
                  aria-hidden
                />
              </div>

              {/* Content — right at md+ */}
              <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 self-start bg-gold text-soft-black text-[10px] tracking-[0.22em] uppercase py-1.5 px-3">
                  <Sparkles size={10} /> Premium
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-6 text-ivory">
                  {procellCategory.h2}
                </h2>
                <p className="mt-6 text-ivory/75 max-w-md leading-relaxed">
                  {procellCategory.intro}
                </p>
                <div className="mt-8 max-w-md flex items-baseline justify-between gap-6 border-t border-ivory/15 pt-6">
                  <p className="text-ivory">
                    {procellCategory.service.name}
                  </p>
                  <p className="text-right whitespace-nowrap">
                    <span className="text-ivory font-medium">
                      {procellCategory.service.price}
                    </span>
                    <span className="text-ivory/60 ml-2 text-sm">
                      · {procellCategory.service.duration}
                    </span>
                  </p>
                </div>
                <div className="mt-10">
                  <a
                    href={site.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary self-start"
                  >
                    Book Procell <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Consult-reminder footer (reuses CtaBanner) */}
      <CtaBanner
        eyebrow="Free consult"
        headingPrimary={
          <>
            Not sure where to{" "}
            <span className="font-display-italic text-gold">start</span>?
          </>
        }
        headingSecondary={null}
        description="A free 15-minute consult is the easiest first step. Bring questions, leave with a plan."
        primaryLabel="Book a consult"
      />
    </>
  );
}
