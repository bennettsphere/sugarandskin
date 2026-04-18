"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function ContactStrip() {
  return (
    <section id="contact" className="section bg-ivory">
      <div className="container-ss grid gap-12 md:gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
        <Reveal>
          <span className="eyebrow">
            <span className="hairline mr-3 align-middle" />
            Visit the studio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 text-soft-black">
            Come{" "}
            <span className="font-display-italic text-gold-deep">
              see us
            </span>
          </h2>
          <p className="mt-6 text-soft-black/70 leading-relaxed max-w-md">
            Tucked into downtown Lake Havasu City. Park, breathe, and step
            into your quiet hour.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="mt-1 w-9 h-9 shrink-0 grid place-items-center bg-gold/15 text-gold-deep">
                <MapPin size={16} />
              </span>
              <div>
                <p className="eyebrow">Address</p>
                <p className="mt-1 text-soft-black">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postalCode}
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 w-9 h-9 shrink-0 grid place-items-center bg-gold/15 text-gold-deep">
                <Phone size={16} />
              </span>
              <div>
                <p className="eyebrow">Phone</p>
                <a
                  href={site.phoneHref}
                  className="mt-1 block text-soft-black link-elegant"
                >
                  {site.phone}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 w-9 h-9 shrink-0 grid place-items-center bg-gold/15 text-gold-deep">
                <Mail size={16} />
              </span>
              <div>
                <p className="eyebrow">Email</p>
                <a
                  href={site.emailHref}
                  className="mt-1 block text-soft-black link-elegant break-all"
                >
                  {site.email}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 w-9 h-9 shrink-0 grid place-items-center bg-gold/15 text-gold-deep">
                <Clock size={16} />
              </span>
              <div>
                <p className="eyebrow">Hours</p>
                <ul className="mt-2 space-y-1 text-soft-black">
                  {site.hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex items-center gap-4 text-sm"
                    >
                      <span className="text-soft-black/80 w-20">
                        {h.days}
                      </span>
                      <span className="text-soft-black/60">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-soft-black/55 tracking-wide">
                  By appointment only
                </p>
              </div>
            </li>

            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold-deep hover:text-soft-black transition-colors link-elegant"
              >
                <FacebookIcon size={15} /> Follow on Facebook
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[5/4] md:aspect-[4/3] overflow-hidden border border-[var(--ss-line)]">
            <iframe
              src={site.mapEmbed}
              title="Map to Sugar & Skin Studio"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full grayscale-[0.15]"
            />
          </div>
          <p className="mt-4 text-xs text-soft-black/55 tracking-widest uppercase">
            {site.addressFull}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
