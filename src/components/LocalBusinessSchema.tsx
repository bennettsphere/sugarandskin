import { site } from "@/lib/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: site.name,
    image: `${site.url}/og-default.jpg`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: site.openingHoursSpec,
    sameAs: [site.facebook],
    founder: {
      "@type": "Person",
      name: site.owner.name,
      jobTitle: site.owner.title,
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sugaring Hair Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facials & Skin Treatments" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chemical Peels" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lash Extensions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lash Lift & Tint" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brow Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Procell Microchanneling" } },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
