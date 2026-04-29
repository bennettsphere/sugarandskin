export type Service = {
  name: string;
  price: string;
  duration: string;
};

export type ServiceCategoryFull = {
  slug: string;
  eyebrow: string;
  pillLabel: string;
  ctaLabel: string;
  h2: string;
  intro: string;
  services: Service[];
  note?: string;
  deposit?: string;
};

export const servicesCatalog: ServiceCategoryFull[] = [
  {
    slug: "sugaring",
    eyebrow: "Sugaring",
    pillLabel: "Sugaring",
    ctaLabel: "Sugaring",
    h2: "Smooth, naturally.",
    intro:
      "All-natural sugar paste — water, sugar, lemon. Gentler than wax, kinder to your skin, and effective on every hair type. Most clients are in and out in under an hour.",
    services: [
      { name: "Sugaring - Lip", price: "$15", duration: "15 min" },
      { name: "Sugaring - Chin", price: "$15", duration: "15 min" },
      { name: "Sugaring - Cheeks", price: "$15", duration: "15 min" },
      { name: "Sugaring - Ears", price: "$15", duration: "15 min" },
      { name: "Nose Wax", price: "$10", duration: "15 min" },
      {
        name: "Sugaring - Full Face Including Brows",
        price: "$70",
        duration: "45 min",
      },
      { name: "Sugaring - Half Arm", price: "$30", duration: "30 min" },
      { name: "Sugaring - Full Arm", price: "$60", duration: "45 min" },
      { name: "Sugaring - Half Leg", price: "$50", duration: "1 hr" },
      { name: "Sugaring - Full Leg", price: "$100", duration: "1 hr" },
      { name: "Sugaring - Bikini", price: "$40", duration: "20 min" },
      {
        name: "Sugaring - Brazilian - First Time / Full Growth",
        price: "$75",
        duration: "45 min",
      },
      {
        name: "Sugaring - Brazilian - Maintenance",
        price: "$60",
        duration: "30 min",
      },
      { name: "Sugaring - Partial Chest", price: "$45", duration: "30 min" },
      { name: "Sugaring - Full Chest", price: "$65", duration: "30 min" },
      { name: "Sugaring - Full Back", price: "$65", duration: "45 min" },
      { name: "Sugaring - Bum", price: "$40", duration: "30 min" },
      { name: "Sugaring - Nipples", price: "$15", duration: "15 min" },
      { name: "Sugaring - Feet", price: "$15", duration: "15 min" },
    ],
    note:
      "Brazilian sugaring is an all-inclusive treatment for the bikini region — front, back, sides, everything in-between. Prefer a thin strip on top? Just ask.",
  },
  {
    slug: "facials",
    eyebrow: "Facials & Skin",
    pillLabel: "Facials & Skin",
    ctaLabel: "Facials",
    h2: "Built around your skin.",
    intro:
      "Every facial starts with a conversation about what your skin actually needs that day. No off-the-shelf protocols — just thoughtful, hands-on treatment with products chosen for you.",
    services: [
      { name: "Custom Facial — 60 minutes", price: "$80", duration: "1 hr" },
      {
        name: "Custom Facial — 80 minutes",
        price: "$100",
        duration: "1 hr 20 min",
      },
      {
        name: "Facial with Dermaplaning",
        price: "$130",
        duration: "1 hr 30 min",
      },
      {
        name: "Facial with Microdermabrasion",
        price: "$100",
        duration: "1 hr 20 min",
      },
      { name: "Dermaplaning", price: "$65", duration: "45 min" },
      { name: "Vajacial", price: "$85", duration: "40 min" },
    ],
  },
  {
    slug: "peels",
    eyebrow: "Chemical Peels",
    pillLabel: "Chemical Peels",
    ctaLabel: "Peels",
    h2: "Targeted resurfacing.",
    intro:
      "Professional-grade peels for tone, texture, clarity, and pigmentation. Each protocol is matched to your skin's tolerance and goals — never one-size-fits-all.",
    services: [
      { name: "PCA Chemical Peel", price: "$150", duration: "1 hr 30 min" },
      {
        name: "Bikini / Brazilian Area Chemical Peel",
        price: "$100",
        duration: "1 hr",
      },
      { name: "Intimate Lightening", price: "$65", duration: "45 min" },
    ],
  },
  {
    slug: "lash-extensions",
    eyebrow: "Lash Extensions",
    pillLabel: "Lash Extensions",
    ctaLabel: "Lash Extensions",
    h2: "Wake up ready.",
    intro:
      "Classic, hybrid, or volume — chosen to suit your eye shape and the look you want. New sets take care; fills keep them looking their best.",
    services: [
      {
        name: "Lash Extensions — Full Set",
        price: "$190",
        duration: "2 hr 45 min",
      },
      { name: "Lash Extension Mini Fill", price: "$60", duration: "45 min" },
      {
        name: "Lash Extension Fill — 2 weeks (75 min)",
        price: "$85",
        duration: "1 hr 15 min",
      },
      { name: "Lash Extension Fill — 2 hours", price: "$120", duration: "2 hr" },
      {
        name: "Lash Extension Fill — Foreign Fill",
        price: "$100",
        duration: "1 hr 30 min",
      },
      {
        name: "Gel-Lynk Lashes Patch Test",
        price: "$30",
        duration: "40 min",
      },
    ],
    deposit:
      "A nonrefundable $95 deposit is due at the time a Full Set is scheduled to hold the appointment.",
  },
  {
    slug: "lash-lift",
    eyebrow: "Lash Lift & Tint",
    pillLabel: "Lash Lift & Tint",
    ctaLabel: "Lash Lift",
    h2: "Your own lashes, lifted.",
    intro:
      "A low-maintenance enhancement to the lashes you already have. Lasts 6-8 weeks. No daily mascara required.",
    services: [
      { name: "Lash Lift and Tint", price: "$80", duration: "1 hr" },
      { name: "Lash Lift Only — No Tint", price: "$70", duration: "30 min" },
      { name: "Lash Tint", price: "$25", duration: "30 min" },
    ],
  },
  {
    slug: "brows",
    eyebrow: "Brow Services",
    pillLabel: "Brows",
    ctaLabel: "Brows",
    h2: "Beautifully framed.",
    intro:
      "Shaping, tinting, lamination — for brows that anchor your whole face.",
    services: [
      { name: "Brow Grooming", price: "$20", duration: "30 min" },
      { name: "Brow Grooming Deluxe", price: "$30", duration: "45 min" },
      { name: "Brow Tint", price: "$15", duration: "30 min" },
      { name: "Brow Lamination", price: "$65", duration: "1 hr" },
    ],
  },
];

export const procellCategory = {
  slug: "procell",
  pillLabel: "Procell",
  h2: "Procell Microchanneling.",
  intro:
    "Our signature advanced treatment — micro-channels stimulate collagen renewal for visible improvement in tone, texture, and firmness. A series of 3 is recommended for best results.",
  service: { name: "Procell", price: "$340", duration: "2 hr 30 min" },
  image: "/images/stock/procell.jpg",
} as const;
