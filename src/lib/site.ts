export const site = {
  name: "Sugar & Skin Studio",
  shortName: "Sugar & Skin",
  tagline: "The ultimate beauty experience in Lake Havasu City",
  description:
    "Sugar & Skin Studio — sugaring hair removal, advanced skincare, lash extensions, and more in Lake Havasu City, AZ. Clean products, appointment-only, 100% dedicated time with Jen Rodriguez, LE.",
  url: "https://sugarandskinstudio.com",
  phone: "(928) 486-8749",
  phoneHref: "tel:+19284868749",
  email: "sugarandskinstudio@gmail.com",
  emailHref: "mailto:sugarandskinstudio@gmail.com",
  address: {
    street: "60 S Acoma Blvd, Ste C100",
    city: "Lake Havasu City",
    region: "AZ",
    postalCode: "86403",
    country: "US",
  },
  addressFull: "60 S Acoma Blvd, Ste C100, Lake Havasu City, AZ 86403",
  geo: { latitude: 34.4839, longitude: -114.3226 },
  hours: [
    { days: "Mon – Fri", time: "9:00 am – 5:00 pm" },
    { days: "Sat – Sun", time: "Closed" },
  ],
  openingHoursSpec: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  booking:
    "https://book.squareup.com/appointments/knlmdbo91g9jei/location/L5M0XCE64854A/services",
  facebook: "https://www.facebook.com/sugarandskinstudio/",
  mapEmbed:
    "https://www.google.com/maps?q=60+S+Acoma+Blvd+Ste+C100+Lake+Havasu+City+AZ+86403&output=embed",
  owner: {
    name: "Jen Rodriguez",
    credentials: "M.Ed, LE",
    title: "Licensed Esthetician & Sugarista",
    experience: "10+ years",
  },
} as const;

export type ServiceCategory = {
  slug: string;
  name: string;
  blurb: string;
  priceRange: string;
  count?: string;
  note?: string;
  featured?: boolean;
  image: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "sugaring",
    name: "Sugaring Hair Removal",
    blurb: "Gentle, all-natural hair removal — body & face.",
    priceRange: "$10 – $100",
    count: "19 services",
    image:
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "facials",
    name: "Facials & Skin",
    blurb: "Custom facials tailored to your skin's needs.",
    priceRange: "$65 – $130",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "peels",
    name: "Chemical Peels",
    blurb: "Targeted resurfacing for brighter, smoother skin.",
    priceRange: "$65 – $150",
    image:
      "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "lash-extensions",
    name: "Lash Extensions",
    blurb: "Classic, hybrid & volume — wake up ready.",
    priceRange: "$30 – $190",
    note: "$95 nonrefundable deposit for Full Set",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "lash-lift",
    name: "Lash Lift & Tint",
    blurb: "A low-maintenance lift to your natural lashes.",
    priceRange: "$25 – $80",
    image:
      "https://images.unsplash.com/photo-1599733589046-8a35aca84344?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "brows",
    name: "Brow Services",
    blurb: "Shaping, tinting, waxing — beautifully framed.",
    priceRange: "$15 – $65",
    image:
      "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "procell",
    name: "Procell Microchanneling",
    blurb: "Our signature premium treatment for visible renewal.",
    priceRange: "$340",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
  },
];

export type Review = {
  name: string;
  source: "Facebook" | "Google";
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Shannon Fletcher",
    source: "Facebook",
    quote:
      "Omg!!! Had Theeeee Best Experience at S&S today…we will be back!!!",
  },
  {
    name: "Karla Lala",
    source: "Facebook",
    quote:
      "Great experience and will return again. Jennifer was knowledgeable and full of good energy.",
  },
  {
    name: "Sara Violet",
    source: "Facebook",
    quote:
      "I have been through a few lash ladies and I always had such bad problems with retention! Jennifer is HANDS DOWN THE BEST!! My lashes are stunning.",
  },
  {
    name: "Yolanda DeAnda",
    source: "Facebook",
    quote:
      "Jen is personable & fun, while staying professional and caring! It's always a pleasurable experience whether it be lashes, facials, sugaring or waxing.",
  },
  {
    name: "Shannon Thornton",
    source: "Google",
    quote:
      "I love all my appts @Sugar & Skin Studio. Clean, great customer service, loved my facials and sugaring. Jenn is on top of her game.",
  },
  {
    name: "Lindsay Smale",
    source: "Google",
    quote: "Excellent eyebrow beautification and Brazilian waxing.",
  },
];
