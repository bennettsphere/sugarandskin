"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section id="cta-final" className="relative bg-soft-black text-ivory overflow-hidden">
      <div className="relative container-ss py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-gold">
            <span className="inline-block w-10 h-px bg-gold mr-3 align-middle" />
            Appointment only
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 text-ivory">
            Ready to{" "}
            <span className="font-display-italic text-gold">glow</span>?{" "}
            <span className="block mt-2 text-ivory/80">
              Book your appointment today.
            </span>
          </h2>
          <p className="mt-6 text-ivory/70 max-w-lg leading-relaxed">
            New clients and longtime regulars both welcome. Start with a free
            15-minute consult, or dive straight in.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6">
            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto justify-center"
            >
              Book an appointment <ArrowRight size={14} />
            </a>
            <a
              href={site.phoneHref}
              className="btn btn-outline border-ivory/50 text-ivory hover:bg-ivory hover:text-soft-black hover:border-ivory w-full sm:w-auto justify-center"
            >
              Call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
