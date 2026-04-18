"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
