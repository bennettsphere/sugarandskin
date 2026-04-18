import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Reviews } from "@/components/sections/Reviews";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata();

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Reviews />
      <CtaBanner />
      <ContactStrip />
    </>
  );
}
