"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function AboutPreview() {
  return (
    <section id="about" className="section bg-ivory">
      <div className="container-ss grid gap-12 md:gap-16 lg:grid-cols-2 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* TODO: replace with real studio photo */}
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80"
              alt="Esthetician at work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover img-warm"
            />
          </div>
          <div
            className="absolute -z-0 -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-28 h-28 md:w-40 md:h-40 border border-gold"
            aria-hidden
          />
          <div
            className="absolute -z-0 -top-6 -left-6 md:-top-8 md:-left-8 w-20 h-20 md:w-28 md:h-28 bg-rose-soft/60"
            aria-hidden
          />
        </Reveal>

        <Reveal delay={0.15} className="max-w-xl">
          <span className="eyebrow">
            <span className="hairline mr-3 align-middle" />
            Meet Jen
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 text-soft-black">
            Care that feels{" "}
            <span className="font-display-italic text-gold-deep">
              personal
            </span>
            , not rushed.
          </h2>
          <p className="mt-6 text-soft-black/75 leading-relaxed">
            Meet Jen — M.Ed, LE, Sugarista with{" "}
            <strong className="text-soft-black">10+ years</strong> of
            experience helping clients feel beautiful, confident, and
            completely at ease.
          </p>
          <p className="mt-4 text-soft-black/70 leading-relaxed">
            Every appointment is one-on-one by design. No rushing, no
            overlapping services — just calm, dedicated time with clean
            products that respect your skin.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 md:gap-6 border-y border-[var(--ss-line)] py-8">
            <div>
              <dt className="eyebrow">Experience</dt>
              <dd className="font-display text-3xl md:text-4xl text-gold-deep mt-1">
                10+
              </dd>
              <p className="text-xs text-soft-black/60 mt-1">years</p>
            </div>
            <div>
              <dt className="eyebrow">Credentials</dt>
              <dd className="font-display text-2xl md:text-3xl text-soft-black mt-1">
                M.Ed · LE
              </dd>
              <p className="text-xs text-soft-black/60 mt-1">licensed</p>
            </div>
            <div>
              <dt className="eyebrow">Approach</dt>
              <dd className="font-display text-2xl md:text-3xl text-soft-black mt-1">
                1-on-1
              </dd>
              <p className="text-xs text-soft-black/60 mt-1">every visit</p>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/about" className="btn btn-primary">
              Read Jen&apos;s story <ArrowRight size={14} />
            </Link>
            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="link-elegant text-sm tracking-[0.18em] uppercase text-soft-black/80"
            >
              Book your appointment
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
