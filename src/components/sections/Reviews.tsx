"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { reviews, type Review } from "@/lib/site";
import { staggerContainer, staggerItem, Reveal } from "@/components/motion/Reveal";

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="section bg-cream">
      <div className="container-ss">
        <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <span className="eyebrow">
            <span className="hairline mr-3 align-middle" />
            Reviews
            <span className="hairline ml-3 align-middle" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 text-soft-black">
            Loved by{" "}
            <span className="font-display-italic text-gold-deep">
              Havasu
            </span>
          </h2>
          <p className="mt-6 text-soft-black/70 leading-relaxed">
            Real words from real clients, pulled straight from Facebook and
            Google.
          </p>
        </Reveal>

        {/* Mobile: horizontal snap carousel. Desktop: 3-col grid */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-5 pb-4 -mx-5 px-5"
        >
          {reviews.map((r) => (
            <motion.li
              key={r.name}
              variants={staggerItem}
              className="min-w-[85%] snap-start bg-surface border border-[var(--ss-line)] p-7"
            >
              <ReviewCard review={r} />
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((r) => (
            <motion.li
              key={r.name}
              variants={staggerItem}
              className="bg-surface border border-[var(--ss-line)] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            >
              <ReviewCard review={r} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <Stars />
        <Quote size={22} className="text-gold/40" />
      </div>
      <p className="mt-5 font-display text-xl md:text-2xl leading-snug text-soft-black">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="mt-6 pt-5 border-t border-[var(--ss-line)] flex items-center justify-between">
        <p className="text-sm font-medium text-soft-black">{review.name}</p>
        <p className="text-xs tracking-[0.2em] uppercase text-gold-deep">
          {review.source}
        </p>
      </div>
    </>
  );
}
