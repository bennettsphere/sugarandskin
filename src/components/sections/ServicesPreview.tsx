"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { serviceCategories } from "@/lib/site";
import { staggerContainer, staggerItem, Reveal } from "@/components/motion/Reveal";

export function ServicesPreview() {
  return (
    <section id="services" className="section bg-cream">
      <div className="container-ss">
        <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <span className="eyebrow">
            <span className="hairline mr-3 align-middle" />
            Services
            <span className="hairline ml-3 align-middle" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 text-soft-black">
            A curated <span className="font-display-italic text-gold-deep">beauty</span> menu
          </h2>
          <p className="mt-6 text-soft-black/70 leading-relaxed">
            From gentle sugaring to advanced skincare — every service uses the
            cleanest products and gets 100% of Jen&apos;s focused, unhurried
            attention.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
        >
          {serviceCategories.map((cat) => (
            <motion.div key={cat.slug} variants={staggerItem}>
              <Link
                href={`/services#${cat.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-ivory"
              >
                {/* TODO: replace with real studio photo */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover img-warm transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-soft-black/85 via-soft-black/25 to-transparent"
                  aria-hidden
                />

                {cat.featured && (
                  <span className="absolute top-5 left-5 inline-flex items-center gap-1 bg-gold text-soft-black text-[10px] tracking-[0.22em] uppercase py-1.5 px-3">
                    <Sparkles size={10} /> Premium
                  </span>
                )}

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-ivory">
                  <p className="eyebrow text-gold-soft">{cat.priceRange}</p>
                  <h3 className="font-display text-2xl md:text-3xl mt-2">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm text-ivory/80 max-w-xs">
                    {cat.blurb}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ivory/90 group-hover:text-gold transition-colors">
                    Learn more
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="text-center mt-14">
          <Link
            href="/services"
            className="btn btn-outline border-soft-black/25 text-soft-black hover:bg-soft-black hover:text-ivory"
          >
            View all services
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
