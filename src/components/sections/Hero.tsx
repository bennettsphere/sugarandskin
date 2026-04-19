"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { staggerContainer, staggerItem } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92svh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* TODO: replace with real studio photo */}
      <Image
        src="/images/stock/hero.jpg"
        alt="Sugar & Skin Studio treatment room interior"
        fill
        priority
        sizes="100vw"
        className="object-cover img-warm"
        style={{ objectPosition: "30% center" }}
      />

      {/* Darker top/middle → ivory bottom veil for AA contrast on any image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,25,23,0.55) 0%, rgba(28,25,23,0.35) 50%, rgba(245,239,230,0.75) 100%)",
        }}
        aria-hidden
      />

      <div className="relative container-ss pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={staggerItem} className="mb-8">
            <span className="eyebrow !text-gold-soft">
              <span className="hairline mr-3 align-middle !bg-gold-soft" />
              Lake Havasu City · Arizona
              <span className="hairline ml-3 align-middle !bg-gold-soft" />
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory drop-shadow-[0_1px_12px_rgba(0,0,0,0.25)]"
          >
            <span className="font-display-italic text-gold">Sugar</span>
            <span className="mx-2 text-gold">&</span>
            <span className="font-display-italic text-gold">Skin</span>
            <span className="block mt-2 text-2xl md:text-3xl tracking-[0.32em] uppercase font-sans font-light text-ivory/85">
              Studio
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-10 text-lg md:text-xl text-ivory/95 font-light max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]"
          >
            {site.tagline}.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
          >
            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              Book an appointment
              <ArrowRight size={14} />
            </a>
            <Link
              href="/#contact"
              className="text-sm tracking-[0.18em] uppercase text-ivory/95 link-elegant drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]"
            >
              Free 15-min consult
            </Link>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-8 text-xs tracking-widest uppercase text-soft-black/75"
          >
            <span>Appointment only</span>
            <span className="w-1 h-1 rounded-full bg-gold-deep" />
            <span>Clean products</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gold-deep" />
            <span className="hidden sm:inline-block">Est. Lake Havasu</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient meet into cream body */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-cream"
        aria-hidden
      />
    </section>
  );
}
