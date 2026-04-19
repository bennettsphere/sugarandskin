"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = ["top", "cta-final"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const intersecting = new Set<Element>();

    const compute = () => {
      const scrolledPast = window.scrollY > 400;
      setVisible(scrolledPast && intersecting.size === 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) intersecting.add(e.target);
          else intersecting.delete(e.target);
        }
        compute();
      },
      { threshold: 0.05 },
    );
    targets.forEach((t) => observer.observe(t));

    window.addEventListener("scroll", compute, { passive: true });
    compute();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", compute);
    };
  }, []);

  return (
    <a
      href={site.booking}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment at Sugar & Skin Studio"
      className={`md:hidden fixed bottom-5 inset-x-5 z-40 btn btn-primary text-xs transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Calendar size={16} />
      Book an appointment
    </a>
  );
}
