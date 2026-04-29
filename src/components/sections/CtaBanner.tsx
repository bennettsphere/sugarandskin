"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  headingPrimary?: ReactNode;
  headingSecondary?: ReactNode;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  eyebrow = "Appointment only",
  headingPrimary = (
    <>
      Ready to <span className="font-display-italic text-gold">glow</span>?
    </>
  ),
  headingSecondary = "Book your appointment today.",
  description = "New clients and longtime regulars both welcome. Start with a free 15-minute consult, or dive straight in.",
  primaryHref = site.booking,
  primaryLabel = "Book an appointment",
  secondaryHref = site.phoneHref,
  secondaryLabel = `Call ${site.phone}`,
}: Props = {}) {
  return (
    <section
      id="cta-final"
      className="relative bg-soft-black text-ivory overflow-hidden"
    >
      <div className="relative container-ss py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-gold">
            <span className="inline-block w-10 h-px bg-gold mr-3 align-middle" />
            {eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 text-ivory">
            {headingPrimary}
            {headingSecondary && (
              <span className="block mt-2 text-ivory/80">
                {headingSecondary}
              </span>
            )}
          </h2>
          {description && (
            <p className="mt-6 text-ivory/70 max-w-lg leading-relaxed">
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6">
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto justify-center"
            >
              {primaryLabel} <ArrowRight size={14} />
            </a>
            <a
              href={secondaryHref}
              className="btn btn-outline border-ivory/50 text-ivory hover:bg-ivory hover:text-soft-black hover:border-ivory w-full sm:w-auto justify-center"
            >
              {secondaryLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
