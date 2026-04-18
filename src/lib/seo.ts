import type { Metadata } from "next";
import { site } from "./site";

type Input = {
  title?: string;
  description?: string;
  path?: string;
};

export function getMetadata({
  title,
  description = site.description,
  path = "/",
}: Input = {}): Metadata {
  const pageTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const url = new URL(path, site.url).toString();

  return {
    metadataBase: new URL(site.url),
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    icons: { icon: "/favicon.ico" },
  };
}
