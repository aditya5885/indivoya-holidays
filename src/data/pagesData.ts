export type TourPackage = {
  id: string;
  slug: string;
  title: string;
  destination: string;
  state: string;
  duration: string;
  price: string;
  rating: number;
  reviewsCount: number;
  image: string;
  highlights: string[];
  theme: "Honeymoon" | "Family" | "Adventure" | "Heritage" | "Spiritual" | "Wildlife" | "Nature";
  bestTimeToVisit: string;
  inclusions: string[];
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "pkg-1",
    slug: "magical-kerala-backwaters-munnar",
    title: "Enchanting Kerala: Munnar Hills & Alleppey Houseboat",
    destination: "Munnar, Thekkady & Alleppey",
    state: "Kerala",
    duration: "5 Nights / 6 Days",
    price: "₹18,999",
    rating: 4.9,
    reviewsCount: 142,
    image: "/hero-kerala.jpg",
    highlights: ["Overnight Luxury Houseboat", "Tea Garden Walks in Munnar", "Periyar Spice & Wildlife Cruise", "Kathakali Cultural Evening"],
    theme: "Honeymoon",
    bestTimeToVisit: "Sep to Mar",
    inclusions: ["4-Star Resorts & Houseboat", "Breakfast & Dinners", "Private AC Cab", "Sightseeing Passes"],
  },
  {
    id: "pkg-2",
    slug: "royal-rajasthan-jaipur-jodhpur-udaipur",
    title: "Royal Rajputana: Forts, Palaces & Desert Nights",
    destination: "Jaipur, Jodhpur & Udaipur",
    state: "Rajasthan",
    duration: "6 Nights / 7 Days",
    price: "₹24,500",
    rating: 4.9,
    reviewsCount: 98,
    image: "/hero-rajasthan.jpg",
    highlights: ["Amer Fort Elephant View", "Sunset Boat Ride on Lake Pichola", "Mehrangarh Fort Tour", "Chokhi Dhani Heritage Dinner"],
    theme: "Heritage",
    bestTimeToVisit: "Oct to Mar",
    inclusions: ["Heritage Havelis & 4-Star Stays", "Breakfast Buffet", "Chauffeur Driven AC Sedan", "Expert Monument Guides"],
  },
  {
    id: "pkg-3",
    slug: "mystic-ladakh-pangong-nubra",
    title: "High Pass Odyssey: Leh, Nubra Valley & Pangong Lake",
    destination: "Leh, Nubra, Turtuk & Pangong",
    state: "Ladakh",
    duration: "6 Nights / 7 Days",
    price: "₹29,999",
    rating: 4.8,
    reviewsCount: 76,
    image: "/hero-ladakh.jpg",
    highlights: ["Khardung La Top Drive", "Bactrian Camel Safari at Hunder", "Camp Under Milky Way at Pangong", "Ancient Diskit & Thiksey Gompas"],
    theme: "Adventure",
    bestTimeToVisit: "May to Sep",
    inclusions: ["Deluxe Hotel + Swiss Tents", "All Meals (Breakfast & Dinner)", "Oxygen Fitted SUV", "Inner Line Permits"],
  },
  {
    id: "pkg-4",
    slug: "kashmir-paradise-srinagar-gulmarg-pahalgam",
    title: "Heaven on Earth: Srinagar Shikara & Gulmarg Gondola",
    destination: "Srinagar, Gulmarg & Pahalgam",
    state: "Kashmir",
    duration: "5 Nights / 6 Days",
    price: "₹22,400",
    rating: 4.9,
    reviewsCount: 165,
    image: "/dest-kashmir.jpg",
    highlights: ["Dal Lake Shikara & Houseboat", "Phase 1 & 2 Gulmarg Gondola", "Betaab & Aru Valleys in Pahalgam", "Mughal Gardens Tour"],
    theme: "Family",
    bestTimeToVisit: "All Year (Snow: Dec-Feb)",
    inclusions: ["Dal Lake Heritage Houseboat & Hotels", "Daily Meals", "Dedicated Tourist Cab", "Gondola Assistance"],
  },
  {
    id: "pkg-5",
    slug: "andaman-exotic-havelock-neil-islands",
    title: "Tropical Bliss: Port Blair, Havelock & Neil Islands",
    destination: "Port Blair, Havelock & Neil",
    state: "Andaman Islands",
    duration: "5 Nights / 6 Days",
    price: "₹28,500",
    rating: 4.9,
    reviewsCount: 88,
    image: "/dest-andaman.jpg",
    highlights: ["Radhanagar Beach Sunset (Asia’s Top 7)", "Scuba & Coral Snorkeling at Elephant Beach", "Cellular Jail Light & Sound", "Natural Bridge at Neil"],
    theme: "Honeymoon",
    bestTimeToVisit: "Oct to May",
    inclusions: ["Beachside 4-Star Resorts", "High-speed Catamaran Ferries (Makruzz/Nautika)", "Airport Transfers", "Water Sports Voucher"],
  },
  {
    id: "pkg-6",
    slug: "divine-varanasi-ganga-aarti-sarnath",
    title: "Eternal Varanasi: Sacred Ghats, Dawn Boat & Sarnath",
    destination: "Varanasi & Sarnath",
    state: "Uttar Pradesh",
    duration: "3 Nights / 4 Days",
    price: "₹12,800",
    rating: 4.8,
    reviewsCount: 54,
    image: "/hero-varanasi.jpg",
    highlights: ["VIP Seating at Dashashwamedh Aarti", "Dawn Ganges Boat Cruise with Subah-e-Banaras", "Kashi Vishwanath Corridor VIP Darshan", "Buddhist Heritage at Sarnath"],
    theme: "Spiritual",
    bestTimeToVisit: "Oct to Mar",
    inclusions: ["Boutique Heritage Hotel by Ghat", "Breakfast & Banarasi Street Food Walk", "Private Boat & Priest", "Airport Transfers"],
  },
  {
    id: "pkg-7",
    slug: "himachal-shimla-kullu-manali",
    title: "Pine Valleys & Snowy Peaks: Shimla & Manali Escapade",
    destination: "Shimla, Kullu & Manali",
    state: "Himachal Pradesh",
    duration: "5 Nights / 6 Days",
    price: "₹15,900",
    rating: 4.7,
    reviewsCount: 112,
    image: "/dest-manali.jpg",
    highlights: ["Solang Valley Adventure Sports", "Atal Tunnel & Sissu Day Trip", "Mall Road & Jakhu Temple in Shimla", "River Rafting at Kullu"],
    theme: "Family",
    bestTimeToVisit: "Mar to Jun & Dec to Feb",
    inclusions: ["Cozy Mountain View Resorts", "Daily Breakfast & Dinner", "Dedicated Sedan/SUV", "All State Tolls & Taxes"],
  },
  {
    id: "pkg-8",
    slug: "meghalaya-living-root-bridges-dawki",
    title: "Clouds & Waterfalls: Shillong, Cherrapunji & Dawki",
    destination: "Shillong, Cherrapunji & Dawki",
    state: "Meghalaya",
    duration: "4 Nights / 5 Days",
    price: "₹21,500",
    rating: 4.9,
    reviewsCount: 63,
    image: "/dest-meghalaya.jpg",
    highlights: ["Crystal Clear Boating at Umngot River Dawki", "Double Decker Living Root Bridge Trek", "Nohkalikai & Wei Sawdong Falls", "Cleanest Village Mawlynnong"],
    theme: "Nature",
    bestTimeToVisit: "Sep to May",
    inclusions: ["Eco-Luxury Cottages", "Daily Breakfast", "SUV with Local Expert Driver", "Entry & Guide Fees"],
  },
];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  content: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "best-time-to-visit-kerala-backwaters-guide",
    title: "Complete Guide: Best Time to Visit Kerala & Plan Your Houseboat Trip",
    excerpt: "From monsoon Ayurveda retreats to winter backwater cruises in Alleppey, discover the ideal months, itinerary secrets, and local tips for your Kerala holiday.",
    category: "Travel Guides",
    date: "March 2026",
    readTime: "6 min read",
    image: "/hero-kerala.jpg",
    author: { name: "Devika", role: "Destination Specialist - South India" },
    metaTitle: "Best Time to Visit Kerala: Complete Travel & Houseboat Guide (2026)",
    metaDescription: "Planning a trip to Kerala? Learn the best season for Alleppey houseboats, Munnar tea hills, weather breakdown by month, and top budget-saving tips.",
    keywords: ["Kerala tour package", "best time to visit Kerala", "Alleppey houseboat booking", "Munnar weather", "Kerala itinerary"],
    content: [
      {
        heading: "Why Kerala Is Called God's Own Country",
        paragraphs: [
          "Few places in the world boast the geographic diversity of Kerala: 600 kilometers of Arabian Sea coastline, an intricate labyrinth of emerald backwaters, and misty mountain ranges dotted with cardamom and tea plantations.",
          "Whether you are drifting past coconut groves on a traditional Kettuvallam or sipping fresh brew high up in Munnar, Kerala offers a restorative escape unmatched anywhere in Asia.",
        ],
      },
      {
        heading: "Month-by-Month Weather & When to Go",
        paragraphs: [
          "Winter (October to March): Ideal for sightseeing, houseboat stays in Alleppey, and wildlife spotting in Periyar. The weather stays balmy with temperatures between 22°C and 30°C.",
          "Monsoon (June to August): Revered as the prime season for traditional Ayurvedic therapies. The rains breathe vibrant green life into the Western Ghats and waterfalls like Athirappilly roar at their mightiest.",
        ],
      },
      {
        heading: "Insider Tips for Booking an Alleppey Houseboat",
        paragraphs: [
          "Always opt for certified green-palm or gold-palm houseboats. These adhere to strict eco-friendly protocols, solar energy guidelines, and safety standards.",
          "Indivoya Holidays pairs every private houseboat booking with a seasoned on-board chef who prepares authentic Karimeen Pollichathu (pearl spot fish) and coconut curries on order.",
        ],
      },
    ],
  },
  {
    id: "blog-2",
    slug: "first-timers-guide-to-ladakh-high-altitude-tips",
    title: "First-Timer’s Guide to Ladakh: Acclimatization, Permits & Top Sights",
    excerpt: "Everything you must know before flying into Leh: handling altitude sickness, packing essentials, inner line permits, and how to reach Pangong & Nubra smoothly.",
    category: "Adventure & Treks",
    date: "March 2026",
    readTime: "7 min read",
    image: "/hero-ladakh.jpg",
    author: { name: "Ram", role: "Himalayan Expedition Lead" },
    metaTitle: "Ladakh Travel Guide: Acclimatization, Routes & Permits (2026)",
    metaDescription: "Essential guide to visiting Ladakh: how to acclimatize in Leh, best routes for Nubra & Pangong Lake, oxygen precautions, and optimal itinerary lengths.",
    keywords: ["Ladakh tour package", "Leh Ladakh itinerary", "acclimatization in Leh", "Pangong Tso permit", "Nubra Valley trip"],
    content: [
      {
        heading: "The Golden Rule of Ladakh: Rest on Day 1 & 2",
        paragraphs: [
          "Leh sits at 11,500 feet above sea level. When arriving by air, your body needs a mandatory 36-48 hours to adjust to lower barometric pressure and thinner oxygen levels.",
          "Drink 3 to 4 liters of water daily, avoid strenuous walking on your arrival day, and carry electrolytes. Our Indivoya vehicles are all equipped with portable pulse-oximeters and emergency medical oxygen.",
        ],
      },
      {
        heading: "Crossing Khardung La to the Sand Dunes of Nubra",
        paragraphs: [
          "Nubra Valley is unlike anywhere else on the planet — cold desert sand dunes surrounded by craggy snow-clad mountains where double-humped Bactrian camels roam freely.",
          "Plan at least 2 nights in Nubra to visit Diskit Monastery and take the scenic route along the Shyok River toward Pangong Tso.",
        ],
      },
    ],
  },
  {
    id: "blog-3",
    slug: "rajasthan-heritage-circuit-jaipur-jodhpur-udaipur",
    title: "Royal Rajasthan Itinerary: 7 Days Across Jaipur, Jodhpur & Udaipur",
    excerpt: "Step into the era of maharajas: handpicked heritage stays, magnificent hill forts, hidden stepwells, and mouthwatering culinary trails.",
    category: "Culture & Heritage",
    date: "February 2026",
    readTime: "5 min read",
    image: "/hero-rajasthan.jpg",
    author: { name: "Haripriya", role: "Heritage & Architecture Historian" },
    metaTitle: "Rajasthan 7-Day Royal Tour Plan: Jaipur, Jodhpur, Udaipur (2026)",
    metaDescription: "Experience the ultimate 7-day Rajasthan itinerary. Discover ancient forts, lake palaces, camel desert camps, and royal dining with Indivoya Holidays.",
    keywords: ["Rajasthan tour package", "Jaipur Jodhpur Udaipur trip", "Rajasthan heritage hotels", "Golden Triangle India"],
    content: [
      {
        heading: "The Pink City: Jaipur's Architectural Wonders",
        paragraphs: [
          "Start your journey at the iconic Hawa Mahal and Amer Fort. Ascending to the Jaigarh and Nahargarh battlements at sunset rewards travelers with panoramic vistas over the ancient Aravalli ridges.",
        ],
      },
      {
        heading: "Udaipur: The Venice of the East",
        paragraphs: [
          "Surrounded by serene lakes and white marble palaces, Udaipur is the romantic jewel of India. A sunset cruise around Jag Mandir and Lake Pichola is an essential milestone of any Rajasthan expedition.",
        ],
      },
    ],
  },
  {
    id: "blog-4",
    slug: "andaman-islands-scuba-diving-and-beaches",
    title: "Andaman Islands Travel Blueprint: Havelock, Scuba Spots & Coral Reefs",
    excerpt: "Crystal-clear turquoise waters, white powder shores, and untouched coral ecosystems. Find out how to island-hop across Port Blair, Havelock, and Neil.",
    category: "Beaches & Coastal",
    date: "February 2026",
    readTime: "5 min read",
    image: "/dest-andaman.jpg",
    author: { name: "Rahul", role: "Marine & Island Specialist" },
    metaTitle: "Andaman Islands Holiday Guide: Scuba, Ferries & Best Beaches (2026)",
    metaDescription: "Explore the Andaman Islands with our comprehensive guide to Havelock, Radhanagar Beach, Neil Island, scuba diving centers, and ferry bookings.",
    keywords: ["Andaman tour packages", "Havelock Island guide", "Radhanagar beach", "Andaman scuba diving", "Neil Island ferry"],
    content: [
      {
        heading: "Beyond the Mainland: The Magic of Andaman",
        paragraphs: [
          "With pristine coral reefs, emerald rainforests, and some of the world’s most celebrated sunset beaches, the Andaman archipelago offers an international-grade tropical escape with the convenience of domestic travel.",
        ],
      },
    ],
  },
];
