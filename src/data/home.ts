export type Place = {
  name: string;
  state: string;
  src: string;
  tours: number;
  from: string;
};

/** Every image below is an Indian domestic destination. */
export const PLACES: Record<string, Place> = {
  kashmir: { name: "Srinagar", state: "Kashmir", src: "/dest-kashmir.jpg", tours: 42, from: "₹18,500" },
  manali: { name: "Manali", state: "Himachal Pradesh", src: "/dest-manali.jpg", tours: 56, from: "₹12,900" },
  ladakh: { name: "Leh", state: "Ladakh", src: "/hero-ladakh.jpg", tours: 38, from: "₹24,000" },
  sikkim: { name: "Darjeeling", state: "West Bengal & Sikkim", src: "/dest-sikkim.jpg", tours: 29, from: "₹16,200" },
  jaisalmer: { name: "Jaisalmer", state: "Rajasthan", src: "/hero-rajasthan.jpg", tours: 47, from: "₹14,800" },
  udaipur: { name: "Udaipur", state: "Rajasthan", src: "/dest-udaipur.jpg", tours: 51, from: "₹15,400" },
  agra: { name: "Agra", state: "Uttar Pradesh", src: "/dest-agra.jpg", tours: 33, from: "₹9,800" },
  varanasi: { name: "Varanasi", state: "Uttar Pradesh", src: "/hero-varanasi.jpg", tours: 27, from: "₹8,900" },
  kerala: { name: "Alleppey", state: "Kerala", src: "/hero-kerala.jpg", tours: 64, from: "₹17,600" },
  goa: { name: "Goa", state: "Goa", src: "/dest-goa.jpg", tours: 58, from: "₹11,500" },
  andaman: { name: "Havelock", state: "Andaman Islands", src: "/dest-andaman.jpg", tours: 31, from: "₹26,900" },
  meghalaya: { name: "Cherrapunji", state: "Meghalaya", src: "/dest-meghalaya.jpg", tours: 24, from: "₹19,400" },
};

export type FeaturedTab = { id: string; label: string; places: string[] };

export const FEATURED_TABS: FeaturedTab[] = [
  { id: "mountains", label: "Mountains & Valleys", places: ["kashmir", "manali", "ladakh", "sikkim"] },
  { id: "heritage", label: "Heritage & Culture", places: ["jaisalmer", "udaipur", "agra", "varanasi"] },
  { id: "nature", label: "Beaches & Nature", places: ["kerala", "goa", "andaman", "meghalaya"] },
];

export const TOP_PLACES = ["agra", "kerala", "goa", "kashmir", "andaman", "jaisalmer", "udaipur", "manali"];

export const COLLAGE = [
  { src: "/hero-kerala.jpg", alt: "Houseboat in the Kerala backwaters" },
  { src: "/dest-goa.jpg", alt: "Sunset on a Goa beach" },
  { src: "/dest-andaman.jpg", alt: "Turquoise waters of the Andaman Islands" },
  { src: "/dest-kashmir.jpg", alt: "Shikara on Dal Lake, Kashmir" },
];

export const ADVENTURES = [
  { title: "Paragliding", place: "Bir Billing, Himachal" },
  { title: "Parasailing", place: "Baga Beach, Goa" },
  { title: "Skydiving", place: "Aamby Valley, Maharashtra" },
];
