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
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
        alt="Sugar & Skin Studio treatment room interior"
        fill
        priority
        sizes="100vw"
        className="object-cover img-warm"
      />

      {/* Layered cream/ivory wash for that soft editorial feel */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/50 to-ivory/85"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,239,230,0.15)_0%,_rgba(245,239,230,0.6)_70%)]"
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
            <span className="eyebrow">
              <span className="hairline mr-3 align-middle" />
              Lake Havasu City · Arizona
              <span className="hairline ml-3 align-middle" />
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-soft-black"
          >
            <span className="font-display-italic text-gold-deep">Sugar</span>
            <span className="mx-2 text-gold">&</span>
            <span className="font-display-italic text-gold-deep">Skin</span>
            <span className="block mt-2 text-2xl md:text-3xl tracking-[0.32em] uppercase font-sans font-light text-soft-black/70">
              Studio
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-10 text-lg md:text-xl text-soft-black/75 font-light max-w-xl mx-auto leading-relaxed"
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
              className="text-sm tracking-[0.18em] uppercase text-soft-black/80 link-elegant"
            >
              Free 15-min consult
            </Link>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-20 flex items-center justify-center gap-8 text-xs tracking-widest uppercase text-soft-black/55"
          >
            <span>Appointment only</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>Clean products</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gold" />
            <span className="hidden sm:inline-block">Est. Lake Havasu</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient meet */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-cream"
        aria-hidden
      />
    </section>
  );
}
