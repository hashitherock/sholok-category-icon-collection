export const BRAND_COLOR = "#5D0096";

export type Category = {
  id: number;
  name: string;
  slug: string;
  concept: string;
  /** Inner SVG markup for a 64×64 viewBox, stroke-based. */
  body: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Women's Clothing",
    slug: "womens-clothing",
    concept: "Elegant women's dress",
    body: `<path d="M26 8h12"/><path d="M26 8l-2 6 4 6h8l4-6-2-6"/><path d="M28 20l-2 8h12l-2-8"/><path d="M26 28L14 53c6 3 30 3 36 0L38 28"/>`,
  },
  {
    id: 2,
    name: "Men's Clothing",
    slug: "mens-clothing",
    concept: "Classic men's shirt",
    body: `<path d="M24 10L12 16 6 28l8 4 4-6v28h28V26l4 6 8-4-6-12-12-6"/><path d="M24 10l4 10 4-3 4 3 4-10"/><path d="M32 17v37"/><circle cx="32" cy="27" r="1" fill="${BRAND_COLOR}"/><circle cx="32" cy="35" r="1" fill="${BRAND_COLOR}"/><circle cx="32" cy="43" r="1" fill="${BRAND_COLOR}"/>`,
  },
  {
    id: 3,
    name: "Beauty & Makeup",
    slug: "beauty-makeup",
    concept: "Lipstick and makeup brush",
    body: `<rect x="10" y="34" width="14" height="20" rx="2"/><rect x="12" y="26" width="10" height="8"/><path d="M13 26V16l8-6v16"/><path d="M40 22c0-8 2-14 6-14s6 6 6 14z"/><rect x="40" y="22" width="12" height="6" rx="1"/><path d="M44 28h4l-1 26h-2z"/>`,
  },
  {
    id: 4,
    name: "Personal Care",
    slug: "personal-care",
    concept: "Pump dispenser bottle",
    body: `<rect x="16" y="26" width="24" height="28" rx="6"/><rect x="24" y="19" width="8" height="7"/><path d="M28 19v-9h12v4"/><path d="M22 36h12"/><path d="M50 32c-3 4-4 6-4 8a4 4 0 0 0 8 0c0-2-1-4-4-8z"/>`,
  },
  {
    id: 5,
    name: "Fashion & Lifestyle",
    slug: "fashion-lifestyle",
    concept: "Elegant handbag",
    body: `<path d="M12 26h40l-4 28H16z"/><path d="M22 26v-6a10 10 0 0 1 20 0v6"/><path d="M27 36h10v5H27z"/>`,
  },
  {
    id: 6,
    name: "Health & Wellness",
    slug: "health-wellness",
    concept: "Heart with medical cross",
    body: `<path d="M32 54S8 40 8 24a12 12 0 0 1 24-6 12 12 0 0 1 24 6c0 16-24 30-24 30z"/><path d="M32 26v14"/><path d="M25 33h14"/>`,
  },
  {
    id: 7,
    name: "Baby Care",
    slug: "baby-care",
    concept: "Baby feeding bottle",
    body: `<path d="M28 16c0-6 2-8 4-8s4 2 4 8"/><rect x="22" y="16" width="20" height="6" rx="2"/><path d="M24 22h16v28a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z"/><path d="M24 30h5"/><path d="M24 37h5"/><path d="M24 44h5"/><path d="M35 43s-4-2.5-4-5a2 2 0 0 1 4-1 2 2 0 0 1 4 1c0 2.5-4 5-4 5z"/>`,
  },
  {
    id: 8,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    concept: "Cooking pot with lid",
    body: `<path d="M12 28h40v18a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8z"/><path d="M10 28c0-6 10-10 22-10s22 4 22 10"/><path d="M29 18v-4h6v4"/><path d="M12 34H6"/><path d="M52 34h6"/>`,
  },
  {
    id: 9,
    name: "Cleaning Supplies",
    slug: "cleaning-supplies",
    concept: "Spray cleaning bottle",
    body: `<path d="M18 10h16l6 5-6 3H18z"/><path d="M22 18v6"/><path d="M30 18v6"/><path d="M18 24h16l4 8v20a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V32z"/><path d="M18 18l-4 7"/><path d="M50 10v8"/><path d="M46 14h8"/><path d="M52 26v4"/><path d="M50 28h4"/>`,
  },
  {
    id: 10,
    name: "Stationery & Office",
    slug: "stationery-office",
    concept: "Pencil and notebook",
    body: `<rect x="10" y="10" width="28" height="44" rx="3"/><path d="M16 22h16"/><path d="M16 30h16"/><path d="M16 38h10"/><path d="M50 18l6 6-18 26-8 2 2-8z"/><path d="M46 24l6 6"/>`,
  },
  {
    id: 11,
    name: "Pet Care",
    slug: "pet-care",
    concept: "Pet paw print",
    body: `<path d="M32 34c-8 0-14 8-14 14 0 5 4 7 8 6s4-2 6-2 3 1 6 2 8-1 8-6c0-6-6-14-14-14z"/><ellipse cx="14" cy="30" rx="4" ry="5"/><ellipse cx="24" cy="18" rx="4" ry="6"/><ellipse cx="40" cy="18" rx="4" ry="6"/><ellipse cx="50" cy="30" rx="4" ry="5"/>`,
  },
  {
    id: 12,
    name: "Toys & Sports",
    slug: "toys-sports",
    concept: "Sports ball",
    body: `<circle cx="32" cy="32" r="22"/><path d="M10 32h44"/><path d="M32 10v44"/><path d="M17 16c6 6 6 26 0 32"/><path d="M47 16c-6 6-6 26 0 32"/>`,
  },
  {
    id: 13,
    name: "Vehicle Essentials",
    slug: "vehicle-essentials",
    concept: "Compact car, front view",
    body: `<path d="M10 42v-10l6-14h32l6 14v10a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z"/><path d="M19 30l4-8h18l4 8z"/><circle cx="18" cy="37" r="2.5"/><circle cx="46" cy="37" r="2.5"/><path d="M27 38h10"/><path d="M14 44v6h8v-6"/><path d="M42 44v6h8v-6"/>`,
  },
];

export function buildSvg(c: Category, size = 64): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" stroke="${BRAND_COLOR}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${c.body}</svg>`;
}
