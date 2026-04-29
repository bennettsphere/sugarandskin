"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-[var(--ss-line)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-ss flex items-center justify-between">
        <Link
          href="/"
          aria-label="Sugar & Skin Studio — home"
          className="font-display text-xl md:text-2xl tracking-tight text-soft-black"
        >
          <span className="font-display-italic text-gold-deep">Sugar</span>
          <span className="mx-1 text-gold">&</span>
          <span className="font-display-italic text-gold-deep">Skin</span>
          <span className="ml-2 eyebrow text-muted align-middle hidden sm:inline-block">
            Studio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-soft-black/80 hover:text-gold-deep transition-colors link-elegant"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-xs py-3 px-5"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-soft-black"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[64px] bg-ivory transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-ss pt-12 pb-20 flex flex-col gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-soft-black hover:text-gold-deep"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.booking}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 self-start"
          >
            Book an appointment
          </a>
        </div>
      </div>
    </header>
  );
}
