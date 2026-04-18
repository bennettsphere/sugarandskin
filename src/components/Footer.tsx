import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-soft-black text-ivory">
      <div className="container-ss py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="font-display text-3xl">
            <span className="font-display-italic text-gold">Sugar</span>
            <span className="mx-1 text-gold">&</span>
            <span className="font-display-italic text-gold">Skin</span>
            <span className="block text-sm tracking-[0.25em] uppercase mt-2 text-ivory/60">
              Studio
            </span>
          </div>
          <p className="mt-6 text-ivory/70 leading-relaxed text-sm">
            Clean products. Elevated service. A quiet, personal beauty
            experience in Lake Havasu City — by appointment only.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sugar & Skin Studio on Facebook"
            className="inline-flex items-center gap-2 mt-6 text-gold hover:text-ivory transition-colors link-elegant text-sm"
          >
            <FacebookIcon size={16} />
            Follow on Facebook
          </a>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Visit</h3>
          <address className="not-italic mt-5 text-sm text-ivory/80 leading-relaxed">
            <span className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 text-gold" />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}
            </span>
          </address>
          <div className="mt-6 space-y-3 text-sm">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-ivory/80 hover:text-gold transition-colors"
            >
              <Phone size={15} className="text-gold" /> {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center gap-2 text-ivory/80 hover:text-gold transition-colors break-all"
            >
              <Mail size={15} className="text-gold shrink-0" /> {site.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Hours</h3>
          <ul className="mt-5 space-y-2 text-sm text-ivory/80">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-ivory/60">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-ivory/50 tracking-wide">
            By appointment only
          </p>
          <a
            href={site.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-6 btn btn-primary text-[11px] py-3 px-5"
          >
            Book an appointment
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-ss py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© {year} Sugar & Skin Studio. All rights reserved.</p>
          <p className="tracking-widest uppercase">
            Lake Havasu City · Arizona
          </p>
        </div>
      </div>
    </footer>
  );
}
