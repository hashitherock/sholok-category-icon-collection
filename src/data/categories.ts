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
    body: `<title>Women's Clothing</title><path fill="var(--icon-accent, none)" d="M40 17l4 13 6 21-8 2-3-28z"></path><path d="M26 9c2 4 7 5 11 2l3-1 6 3 3 9-6 2-2-4"></path><path d="M26 9l-6 2-6 10 6 2 2-4"></path><path d="M22 19l-3 11 2 22c5 2 11 2 14 0l2-20"></path><path d="M40 17l4 13 6 21-8 2-3-28"></path><path d="M37 12L20 33M40 18L21 45M43 49l-7 2"></path>`,
  },
  {
    id: 2,
    name: "Men's Clothing",
    slug: "mens-clothing",
    concept: "Classic men's shirt",
    body: `<title>Men's Clothing</title><path d="M27 8h10l1 4-6 4-6-4z"></path><path d="M26 11l-9 4-7 28 6 2 5-20 1 25c6 2 16 2 22 0l1-25 5 20 6-2-7-28-9-4"></path><path fill="var(--icon-accent, none)" d="M30 16h4v12h-4z"></path><path d="M10 41l6 2M48 43l6-2"></path><circle cx="32" cy="19" r=".6" fill="currentColor"></circle><circle cx="32" cy="22.5" r=".6" fill="currentColor"></circle><circle cx="32" cy="26" r=".6" fill="currentColor"></circle>`,
  },
  {
    id: 3,
    name: "Beauty & Makeup",
    slug: "beauty-makeup",
    concept: "Lipstick and makeup brush",
    body: `<title>Beauty &amp; Makeup</title><rect x="12" y="34" width="16" height="20" rx="2"></rect><path d="M14 34v-8h12v8"></path><path fill="var(--icon-accent, none)" d="M16 26V16l8-5v15z"></path><circle cx="45" cy="38" r="10" fill="var(--icon-accent, none)"></circle><circle cx="45" cy="38" r="6"></circle><path d="M41 49l-2 5h12l-2-5"></path>`,
  },
  {
    id: 4,
    name: "Personal Care",
    slug: "personal-care",
    concept: "Pump dispenser bottle",
    body: `<title>Personal Care</title><path d="M26 8h12M30 8v8h-2M38 8l4 3"></path><rect x="26" y="16" width="10" height="6" rx="1"></rect><path d="M22 22h18a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V26a4 4 0 0 1 4-4z"></path><path fill="var(--icon-accent, none)" d="M31 32c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z"></path><path d="M52 18c1.6 2.2 2.6 3.5 2.6 4.8a2.6 2.6 0 0 1-5.2 0c0-1.3 1-2.6 2.6-4.8z"></path>`,
  },
  {
    id: 5,
    name: "Fashion & Lifestyle",
    slug: "fashion-lifestyle",
    concept: "Elegant handbag",
    body: `<title>Fashion &amp; Lifestyle</title><path d="M23 24v-4a9 9 0 0 1 18 0v4"></path><path fill="var(--icon-accent, none)" d="M14 24h36l-3 28H17z"></path><path d="M14 24h36l-3 28H17z"></path><path d="M22 32h20"></path><rect x="29" y="29" width="6" height="6" rx="1"></rect>`,
  },
  {
    id: 6,
    name: "Health & Wellness",
    slug: "health-wellness",
    concept: "Heart with medical cross",
    body: `<title>Health &amp; Wellness</title><path d="M32 54S10 41 10 25a11 11 0 0 1 22-3 11 11 0 0 1 22 3c0 16-22 29-22 29z"></path><path fill="var(--icon-accent, none)" d="M28 26h8v6h6v8h-6v6h-8v-6h-6v-8h6z"></path>`,
  },
  {
    id: 7,
    name: "Baby Care",
    slug: "baby-care",
    concept: "Baby feeding bottle",
    body: `<title>Baby Care</title><circle cx="32" cy="36" r="18" fill="var(--icon-accent, none)"></circle><path d="M14.5 31.5a4.5 4.5 0 0 0 0 9M49.5 31.5a4.5 4.5 0 0 1 0 9"></path><path d="M33 18c-3-1-3-5 0-6 3 0 4 3 2 5"></path><path d="M23 30c1.2-1.6 3.4-1.6 4.6 0M36.4 30c1.2-1.6 3.4-1.6 4.6 0"></path><circle cx="25.5" cy="36" r="1.6" fill="currentColor" stroke="none"></circle><circle cx="38.5" cy="36" r="1.6" fill="currentColor" stroke="none"></circle><path d="M28.5 43c2 2 5 2 7 0"></path>`,
  },
  {
    id: 8,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    concept: "Cooking pot with lid",
    body: `<title>Home &amp; Kitchen</title><path d="M32 14v4"></path><path fill="var(--icon-accent, none)" d="M14 24c0-4 8-6 18-6s18 2 18 6z"></path><path d="M14 24h36"></path><path d="M16 28h32v18a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6z"></path><path d="M16 32H9M48 32h7"></path><path d="M22 36v8"></path>`,
  },
  {
    id: 9,
    name: "Cleaning Supplies",
    slug: "cleaning-supplies",
    concept: "Spray cleaning bottle",
    body: `<title>Cleaning Supplies</title><path d="M18 10h16l4 6H22z"></path><path d="M22 16l-4 8M38 12h6"></path><path d="M24 16v6M32 16v6"></path><path d="M22 22h12l4 10v18a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V32z"></path><path fill="var(--icon-accent, none)" d="M18 36h18v10H18z"></path><path d="M50 22v8M46 26h8M48 40v4M46 42h4"></path>`,
  },
  {
    id: 10,
    name: "Stationery & Office",
    slug: "stationery-office",
    concept: "Pencil and notebook",
    body: `<title>Stationery &amp; Office</title><rect x="10" y="12" width="28" height="40" rx="3"></rect><path d="M10 20h-0M18 12v40"></path><path d="M24 24h8M24 32h8M24 40h6"></path><path fill="var(--icon-accent, none)" d="M46 14l6 0v30l-3 7-3-7z"></path><path d="M46 14h6v30l-3 7-3-7zM46 20h6M46 44h6"></path>`,
  },
  {
    id: 11,
    name: "Pet Care",
    slug: "pet-care",
    concept: "Pet paw print",
    body: `<title>Pet Care</title><path fill="var(--icon-accent, none)" d="M32 32c-7 0-14 8-14 14 0 5 5 7 9 5 3-1.5 7-1.5 10 0 4 2 9 0 9-5 0-6-7-14-14-14z"></path><path d="M32 32c-7 0-14 8-14 14 0 5 5 7 9 5 3-1.5 7-1.5 10 0 4 2 9 0 9-5 0-6-7-14-14-14z"></path><ellipse cx="25" cy="17" rx="4.5" ry="6"></ellipse><ellipse cx="39" cy="17" rx="4.5" ry="6"></ellipse><ellipse cx="14" cy="28" rx="4" ry="5.5" transform="rotate(-25 14 28)"></ellipse><ellipse cx="50" cy="28" rx="4" ry="5.5" transform="rotate(25 50 28)"></ellipse>`,
  },
  {
    id: 12,
    name: "Toys & Sports",
    slug: "toys-sports",
    concept: "Sports ball",
    body: `<title>Toys &amp; Sports</title><circle cx="32" cy="32" r="22"></circle><path fill="var(--icon-accent, none)" d="M32 23l8 6-3 9h-10l-3-9z"></path><path d="M32 23l8 6-3 9h-10l-3-9z"></path><path d="M32 23V10M40 29l12-4M37 38l7 11M27 38l-7 11M24 29l-12-4"></path>`,
  },
  {
    id: 13,
    name: "Vehicle Essentials",
    slug: "vehicle-essentials",
    concept: "Compact car, front view",
    body: `<title>Vehicle Essentials</title><path d="M18 28l4-12a4 4 0 0 1 4-3h12a4 4 0 0 1 4 3l4 12"></path><path fill="var(--icon-accent, none)" d="M22 27l3-9h14l3 9z"></path><rect x="10" y="28" width="44" height="16" rx="4"></rect><circle cx="19" cy="36" r="3"></circle><circle cx="45" cy="36" r="3"></circle><path d="M27 38h10"></path><path d="M14 44v6h8v-6M42 44v6h8v-6"></path>`,
  },
];

export function buildSvg(c: Category, size = 64): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64" color="${BRAND_COLOR}" fill="none" stroke="${BRAND_COLOR}" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">${c.body}</svg>`;
}
