export type Slide = {
  src: string;
  alt: string;
  place: string;
  label: string;
  titlePrimary: string;
  titleItalic: string;
  titleLine2: string;
  endPrimary: string;
  endItalic: string;
  endLine2: string;
  desc: string;
  isVideo?: boolean;
};

export const SLIDES: Slide[] = [
  {
    src: "/special/south.mp4",
    alt: "Kerala backwaters and serene green lagoons",
    place: "Alleppey & Munnar, Kerala",
    label: "Kerala",
    titlePrimary: "Tr",
    titleItalic: "opical",
    titleLine2: "Kerala",
    endPrimary: "b",
    endItalic: "ack",
    endLine2: "waters.",
    desc: "Gliding through emerald backwaters, palm canopies and aromatic spice hills of God's Own Country.",
    isVideo: true,
  },
  {
    src: "/special/Meghalaya.mp4",
    alt: "Meghalaya waterfalls, living root bridges and cloud-kissed peaks",
    place: "Cherrapunji & Dawki, Meghalaya",
    label: "Meghalaya",
    titlePrimary: "M",
    titleItalic: "ystic",
    titleLine2: "Meghalaya",
    endPrimary: "c",
    endItalic: "loud",
    endLine2: "realm.",
    desc: "Living root bridges, roaring crystal falls and untouched river canyons above the clouds.",
    isVideo: true,
  },
  {
    src: "/special/jaipur.mp4",
    alt: "Royal palaces, majestic forts and golden lights of Jaipur",
    place: "Jaipur, Rajasthan",
    label: "Jaipur",
    titlePrimary: "R",
    titleItalic: "oyal",
    titleLine2: "Jaipur",
    endPrimary: "f",
    endItalic: "ort",
    endLine2: "palaces.",
    desc: "Step into the regal splendour of Amer Fort, pink sandstone havelis and timeless Rajputana elegance.",
    isVideo: true,
  },
  {
    src: "/special/northie.mp4",
    alt: "Ladakh bike expedition across high Himalayan mountain passes",
    place: "Khardung La & Pangong, Ladakh",
    label: "Ladakh Ride",
    titlePrimary: "R",
    titleItalic: "ide",
    titleLine2: "Ladakh",
    endPrimary: "h",
    endItalic: "igh",
    endLine2: "passes.",
    desc: "Conquer the world's highest motorable roads, raw mountain passes, and turquoise Pangong Lake.",
    isVideo: true,
  },
];

export const SLIDE_MS = 6500;

export type Destination = {
  name: string;
  label: string;
  emoji: string;
  icon: "palm" | "mountain" | "castle" | "boat" | "wave" | "tree" | "compass" | "sun" | "sparkles" | "cloud" | "temple";
  hint: string;
};

export const DESTINATIONS: Destination[] = [
  { name: "Kerala", label: "Kerala", emoji: "🌴", icon: "palm", hint: "Backwaters & spice hills" },
  { name: "Ladakh", label: "Ladakh", emoji: "🏔️", icon: "mountain", hint: "High passes & monasteries" },
  { name: "Rajasthan", label: "Rajasthan", emoji: "🏰", icon: "castle", hint: "Forts, deserts & palaces" },
  { name: "Kashmir", label: "Kashmir", emoji: "🛶", icon: "boat", hint: "Shikaras & meadows" },
  { name: "Goa", label: "Goa", emoji: "🏖️", icon: "wave", hint: "Beaches & Portuguese lanes" },
  { name: "Himachal Pradesh", label: "Himachal", emoji: "🌲", icon: "tree", hint: "Manali, Shimla, Spiti" },
  { name: "Andaman Islands", label: "Andaman", emoji: "🐠", icon: "compass", hint: "Coral reefs & white sand" },
  { name: "Varanasi", label: "Varanasi", emoji: "🪔", icon: "sun", hint: "Ghats & Ganga aarti" },
  { name: "Sikkim & Darjeeling", label: "Sikkim", emoji: "🍵", icon: "sparkles", hint: "Tea gardens & Kanchenjunga" },
  { name: "Meghalaya", label: "Meghalaya", emoji: "🌧️", icon: "cloud", hint: "Living root bridges" },
  { name: "Uttarakhand", label: "Uttarakhand", emoji: "🛕", icon: "temple", hint: "Char Dham & Rishikesh" },
  { name: "Tamil Nadu", label: "Tamil Nadu", emoji: "🏛️", icon: "temple", hint: "Temples & Ooty hills" },
];

/** Best-season hint for each month across India. */
export const MONTH_HINTS: [string, string][] = [
  ["Jan", "Rajasthan"],
  ["Feb", "Goa"],
  ["Mar", "Holi trails"],
  ["Apr", "Himachal"],
  ["May", "Kashmir"],
  ["Jun", "Ladakh"],
  ["Jul", "Monsoon Kerala"],
  ["Aug", "Meghalaya"],
  ["Sep", "Spiti Valley"],
  ["Oct", "Durga Puja"],
  ["Nov", "Pushkar Fair"],
  ["Dec", "Andaman"],
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];

export const REGIONS = ["North", "South", "East", "West", "Northeast", "Central", "Islands"];

export const CONTACT_PHONE = "+91 96335 12049";
export const CONTACT_PHONE_ALT = "+91 92491 81509";
export const CONTACT_TEL = "tel:+919633512049";
export const CONTACT_TEL_ALT = "tel:+919249181509";
export const WHATSAPP_LINK = "https://wa.me/919633512049?text=Hi%20Indivoya%20Holidays%2C%20I%20would%20like%20to%20plan%20a%20tour%20package.";
export const ADDRESS_TEXT = "Civil Line Rd, Sonia Nagar, Palarivattom, Ernakulam, Kerala 682025";
