"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="relative bg-soft-black text-ivory overflow-hidden">
      {/* TODO: replace with real studio photo */}
      <Image
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-20 img-warm"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-soft-black via-soft-black/85 to-soft-black/60"
        aria-hidden
      />

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
          <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book an appointment <ArrowRight size={14} />
            </a>
            <a
              href={site.phoneHref}
              className="btn btn-outline border-ivory/50 text-ivory hover:bg-ivory hover:text-soft-black hover:border-ivory"
            >
              Call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
