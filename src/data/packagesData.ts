export type ItineraryDay = {
  day: string;
  title: string;
  route?: string;
  description: string;
  places?: string[];
  highlights?: string[];
  overnight?: string;
  meals?: string;
};

export type ItineraryLeg = {
  legNumber: number;
  title: string;
  daysRange: string;
  route: string;
  days: ItineraryDay[];
};

export type HotelOptionItem = {
  destination: string;
  stay: string;
  hotel: string;
  roomCategory?: string;
  mealPlan?: string;
};

export type HotelTier = {
  tierName: string;
  pricePerPerson: string;
  note?: string;
  hotels: HotelOptionItem[];
};

export type OptionalExtension = {
  title: string;
  stay: string;
  experiences: string;
};

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
  theme: "Honeymoon" | "Family" | "Adventure" | "Heritage" | "Spiritual" | "Wildlife" | "Nature" | "Grand Tour";
  bestTimeToVisit: string;
  inclusions: string[];
  overview?: string;
  guests?: string;
  hotelCategory?: string;
  mealPlan?: string;
  transportation?: string;
  pickupDrop?: string;
  pricingTiers?: HotelTier[];
  itinerary?: ItineraryDay[];
  legs?: ItineraryLeg[];
  packageInclusions?: string[];
  packageExclusions?: string[];
  importantNotes?: string[];
  termsConditions?: string[];
  specialInclusions?: string[];
  optionalExtensions?: OptionalExtension[];
  validity?: string;
};

export const TOUR_PACKAGES: TourPackage[] = [
  // SOUTH INDIA HERITAGE TOUR PACKAGE
  {
    id: "pkg-south-india-heritage-10d",
    slug: "south-india-heritage-cultural-explorer",
    title: "South India Heritage & Cultural Explorer",
    destination: "Chennai, Mahabalipuram, Pondicherry, Thanjavur, Madurai, Rameswaram, Kanyakumari, Kovalam & Trivandrum",
    state: "Tamil Nadu & Kerala",
    duration: "9 Nights / 10 Days",
    price: "₹54,950",
    rating: 4.9,
    reviewsCount: 108,
    image: "/dest-south-heritage.jpg",
    highlights: [
      "Mahabalipuram UNESCO Shore Temple & Five Rathas",
      "Pondicherry French Quarter, White Town & Auroville",
      "Thanjavur Brihadeeswarar Temple & Tanjore Art",
      "Madurai Meenakshi Temple & Evening Ceremony",
      "Pamban Bridge Drive & Ramanathaswamy Sacred Wells",
      "Dhanushkodi Coastline & Kanyakumari Sunset & Sunrise",
      "Kovalam Beaches & Padmanabhaswamy Temple Trivandrum",
    ],
    theme: "Heritage",
    bestTimeToVisit: "Oct to Mar",
    inclusions: [
      "9 Nights in 4-Star / 3-Star Hotels (Double Sharing)",
      "Daily Breakfast at All Hotels",
      "Private Air-Conditioned Sedan with Dedicated Chauffeur",
      "Chennai Pickup & Trivandrum Drop",
      "All Fuel, Tolls, Driver Allowance, Parking & Interstate Taxes",
    ],
    overview:
      "An unforgettable 10-day cultural pilgrimage and coastal expedition traversing Tamil Nadu and Kerala. Journey from Chennai's colonial history to the ancient rock-cut monuments of Mahabalipuram, the French avenues of Pondicherry, the Chola architectural triumph of Thanjavur, the living temple devotion of Madurai and Rameswaram, the lands-end confluence in Kanyakumari, and the golden shores of Kovalam.",
    guests: "2 Adults (Double Sharing)",
    hotelCategory: "4-Star Hotels",
    mealPlan: "Daily Breakfast",
    transportation: "Private AC Sedan with Chauffeur",
    pickupDrop: "Pickup: Chennai (MAA) | Drop: Trivandrum (TRV)",
    validity: "Year-Round (Best: October to March)",
    pricingTiers: [
      {
        tierName: "South India Heritage All-Inclusive Plan",
        pricePerPerson: "₹54,950/- per person all inclusive",
        note: "Suggested for 2 adults travelling in a private Sedan. Double-sharing basis with daily breakfast.",
        hotels: [
          { destination: "Mahabalipuram", stay: "1 Night", hotel: "4-Star Beach Resort / Heritage Stay", roomCategory: "Deluxe AC Room", mealPlan: "Breakfast" },
          { destination: "Pondicherry", stay: "2 Nights", hotel: "French Quarter Boutique Hotel / 4-Star Stay", roomCategory: "Heritage Deluxe Room", mealPlan: "Breakfast" },
          { destination: "Thanjavur", stay: "1 Night", hotel: "4-Star Hotel in Thanjavur (Sangam / Similar)", roomCategory: "Deluxe Room", mealPlan: "Breakfast" },
          { destination: "Madurai", stay: "1 Night", hotel: "4-Star Hotel in Madurai (Heritage / Courtyard / Similar)", roomCategory: "Deluxe Room", mealPlan: "Breakfast" },
          { destination: "Rameswaram", stay: "1 Night", hotel: "4-Star / Premium Hotel in Rameswaram", roomCategory: "Deluxe AC Room", mealPlan: "Breakfast" },
          { destination: "Kanyakumari", stay: "1 Night", hotel: "4-Star Ocean View Hotel in Kanyakumari", roomCategory: "Ocean View Room", mealPlan: "Breakfast" },
          { destination: "Kovalam / Trivandrum", stay: "2 Nights", hotel: "4-Star Beach Resort in Kovalam", roomCategory: "Deluxe Garden / Sea View Room", mealPlan: "Breakfast" },
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Chennai – Mahabalipuram",
        route: "Chennai -> Mahabalipuram (60 km / 1.5–2 hrs)",
        description:
          "Arrive at Chennai Airport / Railway Station. Meet the driver and proceed towards Mahabalipuram. Visit the Shore Temple, a UNESCO World Heritage Site overlooking the Bay of Bengal. Explore Arjuna's Penance, Krishna's Butter Ball, and the Five Rathas (Pancha Rathas). Enjoy the coastal atmosphere and local stone-carving artisan shops.",
        places: ["Shore Temple", "Arjuna's Penance", "Krishna's Butter Ball", "Five Rathas", "Mahabalipuram Beach"],
        overnight: "Mahabalipuram (4-Star Beach Resort)",
        meals: "Breakfast on subsequent days",
      },
      {
        day: "Day 02",
        title: "Mahabalipuram – Pondicherry",
        route: "Mahabalipuram -> Pondicherry (100 km / 2–2.5 hrs)",
        description:
          "Breakfast at the hotel. Proceed along the East Coast Road to Pondicherry. Visit Auroville and the iconic golden Matrimandir viewpoint (subject to visitor access and advance booking). Explore the French Quarter with its colonial mustard-yellow mansions, bougainvillea balconies, and boutique cafes. Visit Sri Aurobindo Ashram and enjoy a scenic evening walk along Promenade Beach.",
        places: ["Auroville", "Matrimandir Viewpoint", "French Quarter", "Sri Aurobindo Ashram", "Promenade Beach"],
        overnight: "Pondicherry (Heritage Boutique Stay)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 03",
        title: "Pondicherry Local Sightseeing & Beaches",
        route: "Pondicherry Sightseeing",
        description:
          "Breakfast at the hotel. Visit the famous Manakula Vinayagar Temple. Explore the cobblestone alleys of White Town, visit the Gothic Basilica of the Sacred Heart of Jesus, and discover local bakeries and heritage buildings. Spend relaxed leisure time at Serenity Beach or take an optional boat ride to Paradise Beach.",
        places: ["Manakula Vinayagar Temple", "White Town", "Basilica of the Sacred Heart", "Paradise Beach / Serenity Beach"],
        overnight: "Pondicherry (Heritage Boutique Stay)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 04",
        title: "Pondicherry – Thanjavur (Tanjore)",
        route: "Pondicherry -> Thanjavur (170 km / 4–5 hrs)",
        description:
          "Breakfast at the hotel. Check out and proceed inland to Thanjavur, the heartland of the Chola Empire. Visit the magnificent 11th-century Brihadeeswarar Temple (Big Temple), a UNESCO World Heritage Site with an 80-tonne granite capstone. Explore Thanjavur Maratha Palace and the Royal Art Gallery. Witness local artisans creating world-famous Tanjore gold-foil paintings and bronze sculptures.",
        places: ["Brihadeeswarar Temple (UNESCO)", "Thanjavur Royal Palace", "Art Gallery", "Tanjore Painting Studios"],
        overnight: "Thanjavur (4-Star Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 05",
        title: "Thanjavur – Madurai (Cultural Capital)",
        route: "Thanjavur -> Madurai (190 km / 4–5 hrs)",
        description:
          "Breakfast at the hotel. Proceed to Madurai, one of the oldest continuously inhabited cities in the world. On arrival, check in to your hotel. Visit the historic Thirumalai Nayakkar Mahal with its monumental stucco arches. Explore the bustling streets and flower markets around the world-renowned Meenakshi Amman Temple. Attend the temple's captivating evening closing prayer ceremony.",
        places: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Mahal", "Madurai Flower Market", "Evening Temple Ceremony"],
        overnight: "Madurai (4-Star Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 06",
        title: "Madurai – Rameswaram",
        route: "Madurai -> Rameswaram (175 km / 3.5–4.5 hrs)",
        description:
          "Breakfast at the hotel. Proceed towards the holy island of Rameswaram. Experience the breathtaking drive across the engineering wonder of the Pamban Bridge over the ocean. Visit the sacred Ramanathaswamy Temple, celebrated for its 1,200 towering sculpted pillars and 22 sacred theerthams (wells). Visit Agni Theertham sea front.",
        places: ["Pamban Bridge Drive", "Ramanathaswamy Temple", "22 Sacred Theerthams", "Agni Theertham"],
        overnight: "Rameswaram (4-Star / Premium Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 07",
        title: "Rameswaram – Dhanushkodi – Kanyakumari",
        route: "Rameswaram -> Kanyakumari (310–330 km / 6–7 hrs)",
        description:
          "Early morning excursion to Dhanushkodi, the submerged 'ghost town' on the narrow strip between the Gulf of Mannar and Palk Strait (weather permitting). Explore the ruins of the railway station and church amidst wild coastal sands. Proceed south across Tamil Nadu to Kanyakumari, the southernmost tip of mainland India. Check into your hotel and enjoy sunset over the ocean.",
        places: ["Dhanushkodi Ghost Town", "Ram Setu Vantage Point", "Kanyakumari Sunset Beach"],
        overnight: "Kanyakumari (4-Star Ocean View Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 08",
        title: "Kanyakumari Sunrise – Kovalam",
        route: "Kanyakumari -> Kovalam (90 km / 2–2.5 hrs)",
        description:
          "Early morning, marvel at the sunrise at the confluence of the Indian Ocean, Arabian Sea, and Bay of Bengal. Breakfast at the hotel. Take the ferry to Vivekananda Rock Memorial and the monumental 133-ft Thiruvalluvar Statue. Visit the 3,000-year-old Kumari Amman Temple. Afterward, cross into Kerala and drive to Kovalam Beach. Check into your beach resort and unwind.",
        places: ["Kanyakumari Sunrise", "Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Kumari Amman Temple", "Kovalam Beach"],
        overnight: "Kovalam (4-Star Beach Resort)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 09",
        title: "Kovalam – Trivandrum Heritage Sightseeing",
        route: "Kovalam <-> Trivandrum (20 km / 30–45 mins)",
        description:
          "Breakfast at the hotel. Proceed to Trivandrum for sightseeing. Visit the sacred and opulent Padmanabhaswamy Temple (strict traditional dress code). Explore the Indo-Saracenic Napier Museum, Sri Chitra Art Gallery, and the horse-motif Kuthiramalika Palace Museum. Enjoy shopping for Kerala spices, sandalwood, and handlooms before returning to Kovalam.",
        places: ["Padmanabhaswamy Temple", "Napier Museum", "Sri Chitra Art Gallery", "Kuthiramalika Palace", "Lighthouse Beach"],
        overnight: "Kovalam (4-Star Beach Resort)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 10",
        title: "Departure from Trivandrum",
        route: "Hotel -> Trivandrum Airport / Station (15–20 km / 30–45 mins)",
        description:
          "Breakfast at the hotel. Check out and transfer comfortably to Trivandrum Airport or Railway Station for your onward journey. Tour concludes with memorable experiences of South India's heritage, temples, beaches, and culture.",
        places: ["Trivandrum Airport / Railway Station Drop"],
        overnight: "Tour Ends",
        meals: "Daily Breakfast at Hotel",
      },
    ],
    packageInclusions: [
      "Accommodation: 9 nights in 3-star/4-star hotels on a double-sharing basis for 2 adults.",
      "Meals: Daily breakfast at all hotels.",
      "Transportation: Private air-conditioned Sedan for transfers and sightseeing as per the itinerary.",
      "Pickup: Chennai Airport / Railway Station.",
      "Drop: Trivandrum Airport / Railway Station.",
      "All applicable vehicle-related charges, including fuel, driver allowance, tolls, and parking.",
      "All applicable hotel taxes.",
    ],
    packageExclusions: [
      "Airfare and train tickets.",
      "Lunch, dinner, and meals other than breakfast.",
      "Entry tickets to monuments, museums, palaces, and other attractions.",
      "Ferry tickets for Vivekananda Rock Memorial and Thiruvalluvar Statue.",
      "Special darshan, pooja charges, and temple donations.",
      "Boating, water sports, and other optional activities.",
      "Personal expenses such as laundry, shopping, tips, and beverages.",
      "Early check-in and late check-out charges.",
      "Additional sightseeing, route changes, or vehicle usage beyond agreed itinerary.",
    ],
    importantNotes: [
      "The itinerary is suggested for 2 adults travelling in a private Sedan.",
      "Distances and travel times are approximate and may vary depending on traffic and road conditions.",
      "Temple visits are subject to local regulations, opening hours, and dress codes (traditional dhoti/saree required at Padmanabhaswamy Temple).",
      "Auroville, Dhanushkodi, and ferry-based attractions are subject to access restrictions and local operating conditions.",
    ],
  },

  // KERALA HOLIDAY PACKAGE – 10 DAYS / 9 NIGHTS
  {
    id: "pkg-kerala-grand-10d",
    slug: "grand-kerala-explorer-hills-backwaters-cliffs",
    title: "Grand Kerala Explorer: Hills, Backwaters & Cliffs",
    destination: "Cochin, Munnar, Thekkady, Alleppey, Kovalam, Jatayu & Varkala",
    state: "Kerala",
    duration: "9 Nights / 10 Days",
    price: "₹43,950",
    rating: 4.9,
    reviewsCount: 136,
    image: "/dest-kerala-grand.jpg",
    highlights: [
      "Fort Kochi Heritage & Chinese Fishing Nets",
      "Cheeyappara & Valara Waterfalls & Munnar Tea Terraces",
      "Mattupetty Dam, Echo Point, Kundala Lake & Tea Museum",
      "Thekkady Spice Plantations & Periyar Lake Reserve",
      "Alleppey Backwaters & Shimmering Palm Lagoons",
      "Kovalam Crescent Beaches & Iconic Lighthouse",
      "Jatayu Earth's Center (World's Largest Bird Sculpture)",
      "Varkala Red Sandstone Cliffs & Papanasam Beach Sunset",
    ],
    theme: "Nature",
    bestTimeToVisit: "Nov to Mar (Promotional Season)",
    inclusions: [
      "9 Nights Accommodation in Selected 4-Star Stays",
      "Daily Breakfast at All Hotels",
      "Dedicated Private AC Sedan with Chauffeur",
      "Cochin Pickup & Drop Included",
      "All Driver Charges, Fuel, Applicable Tolls & Parking",
    ],
    overview:
      "The definitive 10-day grand holiday across God's Own Country. Explore colonial Fort Kochi, ascend through misty hills to Munnar's sprawling tea estates, discover aromatic spice gardens in Thekkady, cruise the serene canals of Alleppey, bask on Kovalam's golden beaches, marvel at the epic sculpture at Jatayu Earth's Center, and watch unforgettable sunsets over the Arabian Sea from the dramatic cliff tops of Varkala.",
    guests: "2 Adults (Double Sharing)",
    hotelCategory: "4-Star Hotels & Beach Resorts",
    mealPlan: "Daily Breakfast",
    transportation: "Private AC Sedan with Dedicated Chauffeur",
    pickupDrop: "Cochin Airport (COK) / Railway Station In & Out",
    validity: "Nov to March (Promotional Package Price)",
    pricingTiers: [
      {
        tierName: "Promotional 4-Star Hotel Stay Plan",
        pricePerPerson: "₹43,950/- per person",
        note: "Promotional rates applicable for non-peak travel dates (Nov to Mar), subject to hotel availability.",
        hotels: [
          { destination: "Cochin", stay: "1 Night (Day 1)", hotel: "4-Star Hotel in Cochin (Casino / Avenue Center / Similar)", roomCategory: "Deluxe AC Room", mealPlan: "Breakfast" },
          { destination: "Munnar", stay: "2 Nights (Days 2–3)", hotel: "4-Star Tea Valley Resort (Amber Dale / Blanket / Similar)", roomCategory: "Mountain View Room", mealPlan: "Breakfast" },
          { destination: "Thekkady", stay: "1 Night (Day 4)", hotel: "4-Star Spice Haven Resort (Greenwoods / Elephant Court / Similar)", roomCategory: "Deluxe Cottage", mealPlan: "Breakfast" },
          { destination: "Alleppey", stay: "1 Night (Day 5)", hotel: "4-Star Lake Resort / Deluxe Houseboat", roomCategory: "Lakeview Room", mealPlan: "Breakfast" },
          { destination: "Kovalam", stay: "2 Nights (Days 6–7)", hotel: "4-Star Beach Resort in Kovalam (Uday Samudra / Turtle on the Beach)", roomCategory: "Sea View / Garden Room", mealPlan: "Breakfast" },
          { destination: "Varkala", stay: "1 Night (Day 8)", hotel: "4-Star Cliffside Resort (Clafouti / Gateway Varkala)", roomCategory: "Cliffside Deluxe", mealPlan: "Breakfast" },
          { destination: "Cochin", stay: "1 Night (Day 9)", hotel: "4-Star Hotel in Cochin (Near Airport / Marine Drive)", roomCategory: "Executive Room", mealPlan: "Breakfast" },
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Cochin",
        description:
          "Pickup from Cochin Airport / Railway Station. Check into your hotel. Depending on arrival time, visit historical Fort Kochi, the iconic Chinese Fishing Nets, and Santa Cruz Basilica. Evening at leisure. Overnight stay in Cochin.",
        places: ["Fort Kochi", "Chinese Fishing Nets", "Santa Cruz Basilica"],
        overnight: "Cochin (4-Star Hotel)",
        meals: "Breakfast on subsequent days",
      },
      {
        day: "Day 02",
        title: "Cochin – Munnar Scenic Drive",
        route: "Cochin -> Munnar (125–130 km / 4–5 hrs)",
        description:
          "After breakfast, proceed to Munnar. En route, visit Cheeyappara and Valara Waterfalls (subject to accessibility). Ascend through the Western Ghats enjoying breathtaking mountain views and rolling tea plantations. Check in to your resort and relax. Overnight stay in Munnar.",
        places: ["Cheeyappara Waterfalls", "Valara Waterfalls", "Tea Garden Viewpoints"],
        overnight: "Munnar (4-Star Mountain Resort)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 03",
        title: "Munnar Full-Day Tea Hills Sightseeing",
        route: "Munnar Sightseeing",
        description:
          "After breakfast, explore Munnar's top sights: visit Mattupetty Dam, Echo Point, and picturesque Kundala Lake. Enjoy panoramic tea garden views, visit the Tata Tea Museum (subject to opening hours), and spot exotic blooms at the Blossom Hydel Park. Overnight stay in Munnar.",
        places: ["Mattupetty Dam", "Echo Point", "Kundala Lake", "Tea Museum", "Blossom Park"],
        overnight: "Munnar (4-Star Mountain Resort)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 04",
        title: "Munnar – Thekkady (Periyar Wildlife)",
        route: "Munnar -> Thekkady (90–100 km / 3–4 hrs)",
        description:
          "Proceed to Thekkady after breakfast. Explore fragrant spice plantations (cardamom, pepper, cinnamon, vanilla) and the vibrant local market. Optional boat safari on Periyar Lake inside the Periyar Wildlife Sanctuary and traditional Kalaripayattu cultural martial arts show (at additional cost). Overnight stay in Thekkady.",
        places: ["Spice Plantation Tour", "Thekkady Bazaar", "Periyar Lake (Optional)", "Kalaripayattu Show (Optional)"],
        overnight: "Thekkady (4-Star Resort)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 05",
        title: "Thekkady – Alleppey Backwaters",
        route: "Thekkady -> Alleppey (140–150 km / 4–5 hrs)",
        description:
          "Proceed to Alleppey after breakfast. Arrive in the Venice of the East and enjoy the beautiful backwater surroundings. Enjoy an optional traditional houseboat day cruise or peaceful wooden Shikara ride gliding past coconut groves, paddy fields, and duck farms. Overnight stay in Alleppey.",
        places: ["Alleppey Backwaters", "Vembanad Lake", "Paddy Field Canals"],
        overnight: "Alleppey (4-Star Lake Resort / Houseboat)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 06",
        title: "Alleppey – Kovalam Beach",
        route: "Alleppey -> Kovalam (160–180 km / 4–5 hrs)",
        description:
          "Proceed to Kovalam after breakfast along the coastal highway. Check into your beachside resort. Visit world-famous Kovalam Beach and Lighthouse Beach with its striped beacon. Spend a relaxed evening walking along the shore promenade. Overnight stay in Kovalam.",
        places: ["Kovalam Beach", "Lighthouse Beach", "Coastline Promenade"],
        overnight: "Kovalam (4-Star Beach Resort)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 07",
        title: "Kovalam & Trivandrum Sightseeing",
        route: "Kovalam <-> Trivandrum Sightseeing",
        description:
          "Explore Kovalam's Hawa Beach and Samudra Beach in the morning. Later, visit selected Trivandrum attractions including the Padmanabhaswamy Temple viewpoint and Napier Museum grounds (subject to time and opening hours). Evening sunset by the beach. Overnight stay in Kovalam.",
        places: ["Hawa Beach", "Samudra Beach", "Trivandrum City Viewpoints"],
        overnight: "Kovalam (4-Star Beach Resort)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 08",
        title: "Kovalam – Jatayu Earth's Center – Varkala",
        route: "Kovalam -> Jatayu -> Varkala (80–110 km)",
        description:
          "After breakfast, check out and proceed towards Varkala. En route, visit Jatayu Earth's Center to witness the world's largest bird sculpture perched atop a rocky hill (entry & cable car tickets extra). Continue to Varkala and explore the dramatic red sandstone Varkala Cliff and sacred Papanasam Beach. Enjoy sunset dining at cliff-top cafes. Overnight stay in Varkala.",
        places: ["Jatayu Earth's Center", "Varkala Cliff", "Papanasam Beach", "Cliff Sunset Cafes"],
        overnight: "Varkala (4-Star Cliffside Resort)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 09",
        title: "Varkala – Cochin",
        route: "Varkala -> Cochin (170–190 km / 4–5 hrs)",
        description:
          "After breakfast, proceed to Cochin. Enjoy a picturesque drive through central Kerala. Check into your hotel. Spend your evening at leisure for last-minute Kerala spice shopping, handloom souvenirs, or exploring Marine Drive. Overnight stay in Cochin.",
        places: ["Scenic Kerala Drive", "Marine Drive Cochin", "Lulu Mall / Spice Markets"],
        overnight: "Cochin (4-Star Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 10",
        title: "Cochin Departure",
        route: "Hotel -> Cochin Airport / Railway Station",
        description:
          "After breakfast, check out and transfer to Cochin Airport or Railway Station for your onward journey. Tour concludes with wonderful memories of Kerala.",
        places: ["Cochin Airport / Railway Station Drop"],
        overnight: "Tour Ends",
        meals: "Daily Breakfast at Hotel",
      },
    ],
    packageInclusions: [
      "9 nights' accommodation in selected 4-star hotels.",
      "Daily breakfast at all hotels.",
      "Private Sedan for transfers and sightseeing as per the itinerary.",
      "Cochin pickup and drop.",
      "Driver charges and fuel for the agreed itinerary.",
      "Sightseeing as mentioned in the itinerary.",
      "Applicable tolls and parking charges as agreed in the quotation.",
    ],
    packageExclusions: [
      "Airfare and train tickets.",
      "Lunch, dinner, snacks, and beverages.",
      "Entry tickets to sightseeing attractions.",
      "Jatayu Earth's Center entry and cable car charges.",
      "Boating, houseboat rides, and adventure activities.",
      "Personal expenses, laundry, and tips.",
      "Travel insurance.",
    ],
    importantNotes: [
      "Promotional rates are applicable for non-peak travel dates (Nov to Mar), subject to hotel availability.",
      "Rates may vary during peak seasons, long weekends, public holidays, festivals, and special events.",
      "Hotel confirmation is subject to availability at the time of booking.",
      "Final rates will be confirmed based on travel date, number of guests, and room requirements.",
    ],
  },

  // HERITAGE OF INDIA: ROYAL PALACES, TIMELESS WONDERS & LIVING TRADITIONS
  {
    id: "pkg-heritage-of-india-11d",
    slug: "heritage-of-india-palaces-traditions",
    title: "Heritage of India: Royal Palaces, Timeless Wonders & Living Traditions",
    destination: "Delhi, Agra, Jaipur, Udaipur & Varanasi (Optional Extensions)",
    state: "Delhi, Uttar Pradesh & Rajasthan",
    duration: "10 Nights / 11 Days",
    price: "₹68,950",
    rating: 5.0,
    reviewsCount: 152,
    image: "/dest-heritage-india.jpg",
    highlights: [
      "Old Delhi Heritage Walk, Humayun’s Tomb & Qutub Minar",
      "Sunrise at the Taj Mahal & Historic Agra Fort",
      "Amber Fort, City Palace & Block-Printing Workshop in Jaipur",
      "Udaipur City Palace overlooking Lake Pichola & Private Boat Cruise",
      "Evening Ganga Aarti & Dawn Boat Ride in Eternal Varanasi",
      "Buddhist Heritage at Sarnath & Master Silk Weavers",
    ],
    theme: "Heritage",
    bestTimeToVisit: "Oct to Apr",
    inclusions: [
      "10 Nights in Handpicked Premium/Luxury Stays (Delhi, Agra, Jaipur, Udaipur, Varanasi)",
      "Daily Buffet Breakfasts & Curated Heritage Dinners",
      "Private Chauffeur-Driven AC Sedan / SUV for All Transfers",
      "Licensed Monument Historians & Local Guides in Key Cities",
      "Private Boat Cruises on Lake Pichola & the Sacred Ganges",
    ],
    overview:
      "A grand tribute to India's eternal heritage. Spanning 11 days across the golden triangle of Delhi, Agra, and Jaipur, the romantic lake havelis of Udaipur, and the sacred ghats of 3,000-year-old Varanasi. Tailored across three exquisite stay collections (Premium 4-Star, 5-Star Luxury, and the Palace Collection), with modular extensions covering Khajuraho temples, Jaisalmer dunes, Amritsar, and Kerala.",
    guests: "2 Adults (Double Sharing)",
    hotelCategory: "Premium 4-Star, Luxury 5-Star, or Palace Collection",
    mealPlan: "Daily Buffet Breakfast + Select Royal Dining Experiences",
    transportation: "Dedicated Chauffeur-driven AC Sedan / SUV",
    pickupDrop: "Delhi International Airport (DEL) In / Out (or Varanasi Exit)",
    validity: "All Season (Best: October through April)",
    pricingTiers: [
      {
        tierName: "Premium Collection (Selected 4-Star & Heritage Havelis)",
        pricePerPerson: "INR 68,950/- per person",
        note: "Selected 4-star hotels with authentic heritage haveli stays.",
        hotels: [
          { destination: "Delhi", stay: "2 Nights", hotel: "4-Star Deluxe Hotel (Sarovar Portico / The Suryaa / Similar)", roomCategory: "Deluxe Room", mealPlan: "Breakfast" },
          { destination: "Agra", stay: "1 Night", hotel: "4-Star Hotel near Taj Mahal (Radisson / Crystal Sarovar / Similar)", roomCategory: "Taj View / Deluxe Room", mealPlan: "Breakfast" },
          { destination: "Jaipur", stay: "3 Nights", hotel: "Heritage Haveli (WelcomHeritage Kurki Palace / Mandawa Haveli)", roomCategory: "Rawla Deluxe", mealPlan: "Breakfast & Royal Dinner" },
          { destination: "Udaipur", stay: "2 Nights", hotel: "Lakeside Boutique Heritage (The Sierra / Karohi Haveli)", roomCategory: "Lakeview Room", mealPlan: "Breakfast" },
          { destination: "Varanasi", stay: "2 Nights", hotel: "Heritage Boutique by Ghats (Rivatas / Surya Heritage)", roomCategory: "Deluxe Heritage Room", mealPlan: "Breakfast" },
        ],
      },
      {
        tierName: "Luxury Collection (5-Star Stays & Private Concierge)",
        pricePerPerson: "INR 98,500/- per person",
        note: "5-star luxury hotels with curated private monument experiences and licensed historians.",
        hotels: [
          { destination: "Delhi", stay: "2 Nights", hotel: "Radisson Blu Plaza Delhi Airport / The Imperial", roomCategory: "Luxury Suite", mealPlan: "Breakfast" },
          { destination: "Agra", stay: "1 Night", hotel: "ITC Mughal, A Luxury Collection Hotel / Similar", roomCategory: "Mughal Chamber", mealPlan: "Breakfast" },
          { destination: "Jaipur", stay: "3 Nights", hotel: "Radisson Jaipur City Center / ITC Rajputana", roomCategory: "Business Class / Rajputana Suite", mealPlan: "Breakfast & Royal Dining" },
          { destination: "Udaipur", stay: "2 Nights", hotel: "The Ananta Udaipur / Trident Udaipur", roomCategory: "Luxury Cottage with Balcony", mealPlan: "Breakfast" },
          { destination: "Varanasi", stay: "2 Nights", hotel: "Taj Ganges / BrijRama Palace (Ghat Heritage)", roomCategory: "Luxury Room", mealPlan: "Breakfast" },
        ],
      },
      {
        tierName: "Palace Collection (Living Royal Palaces & Chauffeur Fleet)",
        pricePerPerson: "INR 1,45,000/- per person",
        note: "Palace and grand luxury heritage hotels, with personalized VIP darshans, private royal dinners, and dedicated escort.",
        hotels: [
          { destination: "Delhi", stay: "2 Nights", hotel: "The Leela Palace New Delhi / The Taj Mahal Hotel", roomCategory: "Grand Heritage Room", mealPlan: "Breakfast & High Tea" },
          { destination: "Agra", stay: "1 Night", hotel: "The Oberoi Amarvilas (Premier Taj View)", roomCategory: "Premier Taj View Room", mealPlan: "Breakfast" },
          { destination: "Jaipur", stay: "3 Nights", hotel: "Rambagh Palace / Jai Mahal Palace", roomCategory: "Palace Room", mealPlan: "Royal Dining Experiences" },
          { destination: "Udaipur", stay: "2 Nights", hotel: "Taj Lake Palace / The Oberoi Udaivilas", roomCategory: "Luxury Lake Palace Suite", mealPlan: "Breakfast & Pichola Cruise" },
          { destination: "Varanasi", stay: "2 Nights", hotel: "BrijRama Palace (Direct Ghat View)", roomCategory: "Maharaja Suite", mealPlan: "Full Board & VIP Ganga Aarti" },
        ],
      },
    ],
    optionalExtensions: [
      {
        title: "Temples & Kingdoms",
        stay: "3 Nights",
        experiences: "Orchha's riverside cenotaphs and palaces, followed by Khajuraho's sculpted UNESCO temples.",
      },
      {
        title: "Royal Rajasthan",
        stay: "4 Nights",
        experiences: "Jodhpur's mighty Mehrangarh Fort and blue alleys, followed by Jaisalmer's golden desert sands.",
      },
      {
        title: "South India Temple Trail",
        stay: "5 Nights",
        experiences: "Chennai, Mahabalipuram, Puducherry and Thanjavur—temples, Dravidian architecture and coastal traditions.",
      },
      {
        title: "Kerala: Heritage & Backwaters",
        stay: "5 Nights",
        experiences: "Fort Kochi colonial lanes, Kumarakom spice sanctuaries, and an overnight Alappuzha luxury houseboat cruise.",
      },
      {
        title: "Sacred Amritsar",
        stay: "2 Nights",
        experiences: "The Golden Temple, 24-hour community-kitchen langar traditions, Wagah Border ceremony, and Punjabi cuisine.",
      },
      {
        title: "Mumbai & Ancient Caves",
        stay: "3 Nights",
        experiences: "Mumbai's Victorian Gothic architectural heritage, Marine Drive sunset, and the ancient Elephanta rock caves.",
      },
      {
        title: "Goa: Heritage & Coast",
        stay: "3 Nights",
        experiences: "Old Goa's historic Portuguese churches, Fontainhas Latin Quarter heritage walks, Goan cuisine, and beach leisure.",
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Delhi & Heritage Welcome",
        description:
          "Arrive at Delhi International Airport. Meet your private chauffeur and transfer to your hotel. Later, embark on an Old Delhi heritage tour: explore Jama Masjid, take a cycle-rickshaw ride through the bustling spice lanes of Chandni Chowk, and enjoy an evening introduction to authentic Indian culinary traditions.",
        places: ["Jama Masjid", "Chandni Chowk", "Khari Baoli Spice Market", "Red Fort Exterior"],
        overnight: "Delhi (Selected Collection Hotel)",
        meals: "Breakfast on subsequent days",
      },
      {
        day: "Day 02",
        title: "Delhi Architectural Wonders",
        description:
          "After breakfast, explore Delhi's UNESCO landmarks: the red sandstone garden tomb of Humayun, the towering 12th-century Qutub Minar, and a scenic drive through Lutyens' Delhi past India Gate, Rashtrapati Bhavan, and the Parliament House.",
        places: ["Humayun’s Tomb", "Qutub Minar", "India Gate", "Lutyens' Delhi"],
        overnight: "Delhi (Selected Collection Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 03",
        title: "Delhi to Agra & Agra Fort Sunset",
        route: "Delhi -> Agra (210 km / 3.5 hrs via Yamuna Expressway)",
        description:
          "Drive to Agra. Check into your hotel. In the afternoon, visit the monumental red sandstone Agra Fort, home to the Mughal emperors. Later, enjoy a breathtaking sunset view of the Taj Mahal from across the Yamuna River at Mehtab Bagh.",
        places: ["Agra Fort", "Mehtab Bagh Sunset Vantage", "Marble Inlay Workshop"],
        overnight: "Agra (Selected Collection Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 04",
        title: "Sunrise at Taj Mahal & Transfer to Jaipur via Fatehpur Sikri",
        route: "Agra -> Fatehpur Sikri -> Jaipur (240 km / 4.5 hrs)",
        description:
          "Witness the sunrise over the Taj Mahal as the white marble shifts into shades of soft pink and gold. Return for breakfast, then proceed towards Jaipur. En route, visit the ghost city of Fatehpur Sikri, built by Emperor Akbar and preserved as a UNESCO World Heritage Site. Arrive in Jaipur, check in, and relax.",
        places: ["Taj Mahal Sunrise", "Fatehpur Sikri (UNESCO)", "Jaipur Drive"],
        overnight: "Jaipur (Selected Collection Haveli/Palace)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 05",
        title: "Jaipur Amber Fort & Artisan Heritage",
        description:
          "Ascend to the hilltop Amber Fort to explore the Sheesh Mahal (Mirror Palace) and royal courtyards. In the afternoon, visit a traditional textile block-printing and blue-pottery artisan workshop in Sanganer. In the evening, savor a royal-style Rajputana dinner.",
        places: ["Amber Fort", "Sheesh Mahal", "Block-Printing Workshop", "Royal Heritage Dinner"],
        overnight: "Jaipur (Selected Collection Haveli/Palace)",
        meals: "Breakfast & Royal Dinner",
      },
      {
        day: "Day 06",
        title: "Jaipur Palaces & Observatories",
        description:
          "Explore the royal City Palace complex, still home to the Maharaja's family, the UNESCO astronomical observatory Jantar Mantar, and photograph the ornate façade of Hawa Mahal (Palace of Winds). Afternoon at leisure for gem and jewelry shopping in Johari Bazaar.",
        places: ["City Palace", "Hawa Mahal", "Jantar Mantar", "Johari Bazaar"],
        overnight: "Jaipur (Selected Collection Haveli/Palace)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 07",
        title: "Jaipur to Udaipur (The City of Lakes)",
        route: "Jaipur -> Udaipur (400 km / 6.5 hrs or Short Flight)",
        description:
          "Travel south across Rajasthan to romantic Udaipur. On arrival, check in to your lakeside haveli or palace hotel. Spend a peaceful evening on the waterfront ghats of Lake Pichola watching reflections of glowing lamps across the water.",
        places: ["Scenic Aravalli Hills Drive", "Lake Pichola Waterfront", "Gangaur Ghat"],
        overnight: "Udaipur (Selected Collection Lakeside Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 08",
        title: "Udaipur City Palace & Sunset Pichola Cruise",
        description:
          "Explore the sprawling City Palace complex overlooking Lake Pichola, the crystal gallery, the fountains of Saheliyon-ki-Bari, and the 17th-century Jagdish Temple. In the late afternoon, embark on an exclusive private boat cruise on Lake Pichola past Jag Mandir Island palace at sunset.",
        places: ["City Palace Udaipur", "Saheliyon-ki-Bari", "Jagdish Temple", "Lake Pichola Sunset Boat Cruise"],
        overnight: "Udaipur (Selected Collection Lakeside Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 09",
        title: "Udaipur to Varanasi (Flight Transition)",
        route: "Udaipur -> Delhi -> Varanasi (Flight)",
        description:
          "Transfer to Udaipur Airport and fly to sacred Varanasi. Arrive in the world's oldest living city and check into your boutique heritage hotel by the ghats. At dusk, take a private boat to Dashashwamedh Ghat to witness the mesmerizing Ganga Aarti ceremony with priests holding flaming brass lamps to Vedic chants.",
        places: ["Flight to Varanasi", "Private Boat at Dashashwamedh Ghat", "Evening Ganga Aarti Ceremony"],
        overnight: "Varanasi (Selected Collection Heritage Stay)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 10",
        title: "Varanasi Dawn Boat, Silk Weavers & Sarnath",
        description:
          "At sunrise, glide along the Ganges on a wooden boat to witness the Subah-e-Banaras rituals, bathers, and temple bells along the riverfront. Explore the Kashi Vishwanath Golden Temple corridor and walk through the weaver colonies famous for Banarasi silk sarees. In the afternoon, visit Sarnath, the deer park where Lord Buddha gave his first sermon, and view the Ashoka Pillar capital.",
        places: ["Sunrise Ganges Boat Ride", "Kashi Vishwanath Corridor", "Banarasi Silk Weavers Colony", "Sarnath & Dhamek Stupa"],
        overnight: "Varanasi (Selected Collection Heritage Stay)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 11",
        title: "Departure from Varanasi / Delhi",
        route: "Hotel -> Varanasi Airport (VNS)",
        description:
          "After breakfast, complete check-out. Your chauffeur will transfer you to Varanasi Airport for your return flight connecting through Delhi with unforgettable memories of India's royal palaces and sacred wonders.",
        places: ["Varanasi Airport Drop"],
        overnight: "Tour Ends",
        meals: "Daily Breakfast at Hotel",
      },
    ],
    packageInclusions: [
      "10 Nights handpicked accommodation across Delhi, Agra, Jaipur, Udaipur, and Varanasi.",
      "Daily buffet breakfasts and select royal-style dinner in Jaipur.",
      "Private dedicated air-conditioned vehicle with chauffeur for all intercity transfers and sightseeing.",
      "Licensed local monument historians and guides in Delhi, Agra, Jaipur, Udaipur, and Varanasi.",
      "Private boat cruise on Lake Pichola (Udaipur) and dawn/evening boat rides on the Ganges (Varanasi).",
      "All driver allowances, toll charges, interstate taxes, and parking fees.",
    ],
    packageExclusions: [
      "Domestic air tickets for transition sectors (Udaipur-Varanasi and Varanasi-Delhi) quoted separately or bundled on request.",
      "Monument and palace entrance tickets (payable directly or pre-arranged via VIP pass).",
      "Lunches, personal beverages, snacks, laundry, and tips.",
      "Optional extensions, camera permits, and travel insurance.",
    ],
    importantNotes: [
      "Accommodation collections: Choose from Premium 4-Star, Luxury 5-Star, or Living Palace Collection.",
      "Modular extensions (Amritsar, Khajuraho, Jaisalmer, Kerala, Mumbai, Goa) can be added seamlessly.",
      "Domestic flights can be booked through the Indivoya Holidays desk.",
    ],
  },

  // 1. HYDERABAD TOUR PACKAGE
  {
    id: "pkg-hyderabad-3n4d",
    slug: "hyderabad-city-of-pearls-ramoji",
    title: "Hyderabad Royal Heritage & Ramoji Film City",
    destination: "Hyderabad, Telangana",
    state: "Telangana",
    duration: "3 Nights / 4 Days",
    price: "₹19,950",
    rating: 4.8,
    reviewsCount: 94,
    image: "/dest-hyderabad.jpg",
    highlights: [
      "Charminar, Mecca Masjid & Chowmahalla Palace",
      "Golconda Fort, Sound & Light & Qutb Shahi Tombs",
      "Full-Day Ramoji Film City Themed Entertainment",
      "Hussain Sagar Lake, Buddha Statue & Birla Mandir",
    ],
    theme: "Heritage",
    bestTimeToVisit: "Oct to Mar",
    inclusions: [
      "3 Nights in 4-Star Hotel in Hyderabad (Double Sharing)",
      "Daily Breakfast (CPAI Plan)",
      "Private AC Sedan with Dedicated Chauffeur",
      "Ramoji Film City Entry Tickets Included",
      "Hyderabad Airport / Railway Station Transfers",
    ],
    overview:
      "Explore the imperial City of Pearls with our comprehensive 4-day tour. From the architectural grandeur of Golconda Fort and Chowmahalla Palace to an exhilarating full-day cinematic adventure inside Ramoji Film City, enjoy private AC chauffeured transfers, 4-star stays, and royal Hyderabadi hospitality.",
    guests: "2 Adults (Double Sharing)",
    hotelCategory: "4-Star Hotel",
    mealPlan: "Breakfast (CPAI)",
    transportation: "Private AC Sedan",
    pickupDrop: "Hyderabad Airport (HYD) / Railway Station",
    validity: "Year-Round (Rates subject to peak dates)",
    pricingTiers: [
      {
        tierName: "4-Star Hotel Package",
        pricePerPerson: "₹19,950/- per person",
        note: "Minimum 2 persons required. Double sharing basis in 4-Star hotel.",
        hotels: [
          {
            destination: "Hyderabad",
            stay: "3 Nights",
            hotel: "4-Star Deluxe City Hotel (Mercure / Lemon Tree Premier or Similar)",
            roomCategory: "Deluxe AC Room",
            mealPlan: "Daily Breakfast (CPAI)",
          },
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Hyderabad & City Sightseeing",
        route: "Airport / Station -> Old City Sightseeing",
        description:
          "Upon arrival at Hyderabad Airport or Railway Station, meet your private driver and proceed for iconic city sightseeing. Explore the magnificent Charminar, ancient Mecca Masjid, the regal Chowmahalla Palace, and the vibrant bangle lanes of Laad Bazaar. Visit the treasure trove of Salar Jung Museum, one of the world's largest single-person art collections, before enjoying evening lakeside views at Hussain Sagar Lake and Lumbini Park along Necklace Road. Proceed to the hotel for check-in.",
        places: [
          "Charminar",
          "Mecca Masjid",
          "Chowmahalla Palace",
          "Laad Bazaar",
          "Salar Jung Museum",
          "Hussain Sagar Lake",
          "Lumbini Park / Necklace Road",
        ],
        overnight: "Hyderabad (4-Star Hotel)",
        meals: "Breakfast on subsequent days",
      },
      {
        day: "Day 02",
        title: "Golconda Fort & Hyderabad Heritage Exploration",
        route: "Full Day City & Fort Tour",
        description:
          "After breakfast at the hotel, embark on a full day of Hyderabad sightseeing. Marvel at the acoustical engineering and imposing battlements of Golconda Fort. Stroll through the tranquil landscaped gardens of the royal Qutb Shahi Tombs. Later, visit the serene white-marble Birla Mandir atop the hill, walk through NTR Gardens, view the monolithic Buddha Statue in Hussain Sagar, and take a relaxed drive along Necklace Road before returning to your hotel.",
        places: [
          "Golconda Fort",
          "Qutb Shahi Tombs",
          "Birla Mandir",
          "NTR Gardens",
          "Buddha Statue",
          "Hussain Sagar Lake",
          "Necklace Road",
        ],
        overnight: "Hyderabad (4-Star Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 03",
        title: "Full-Day Ramoji Film City Tour",
        route: "Hyderabad -> Ramoji Film City (Full-Day Excursion)",
        description:
          "After an early breakfast, proceed for a full-day excursion to Ramoji Film City, certified by the Guinness World Records as the world's largest film studio complex. Explore grand cinematic sets, thematic zones, live stunt and dance shows, amusement rides, and rolling gardens as per the operating schedule (Approximate Timings: 08:00 AM to 06:00–07:00 PM). Return to Hyderabad in the evening.",
        places: [
          "Ramoji Film City Entry",
          "Film Sets & Themed Attractions",
          "Live Entertainment Shows",
          "Thematic Gardens & Stunt Show",
        ],
        overnight: "Hyderabad (4-Star Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 04",
        title: "Departure from Hyderabad",
        route: "Hotel -> Hyderabad Airport / Station",
        description:
          "After breakfast, check out from the hotel. Depending on your flight or train schedule, your private chauffeur will transfer you comfortably to Hyderabad Airport or Railway Station for your onward journey. Tour ends with wonderful memories of Hyderabad!",
        places: ["Hyderabad Airport / Railway Station Drop"],
        overnight: "Tour Ends",
        meals: "Daily Breakfast at Hotel",
      },
    ],
    packageInclusions: [
      "Accommodation: 3 nights in a 4-star hotel in Hyderabad on a double-sharing basis for 2 adults.",
      "Meals: Daily breakfast at the hotel (CPAI Plan).",
      "Transportation: Private, air-conditioned sedan for airport/railway station transfers and all sightseeing as per the itinerary.",
      "Pickup & Drop: Hyderabad Airport or Railway Station.",
      "Sightseeing: Hyderabad local sightseeing as per the itinerary.",
      "Ramoji Film City: Entry tickets included for the selected ticket category.",
      "Driver Charges: Driver allowance, parking charges, and applicable vehicle expenses as per the agreed package.",
      "All Applicable Taxes: Included if specifically mentioned in the confirmation.",
    ],
    packageExclusions: [
      "Airfare or train tickets.",
      "Lunch, dinner, snacks, and beverages other than the included breakfast.",
      "Entry tickets to monuments, museums, palaces, parks, and other sightseeing attractions, except Ramoji Film City.",
      "Special shows, rides, activities, or attractions at Ramoji Film City not covered by the selected entry ticket.",
      "Guide services and personal tour escorts.",
      "Boating charges at Hussain Sagar Lake.",
      "Personal expenses such as shopping, laundry, telephone calls, and room service.",
      "Early check-in or late check-out charges.",
      "Expenses arising from flight or train delays, cancellations, or changes to the itinerary.",
      "Travel insurance and medical expenses.",
    ],
    importantNotes: [
      "Minimum 2 persons required for booking.",
      "Total Package Cost: ₹19,950/- per person on twin-sharing basis.",
      "Ramoji Film City opening hours and show timings are subject to management operations.",
    ],
  },

  // 2. GRAND INDIA EXPLORER: 50-DAY ITINERARY
  {
    id: "pkg-grand-india-50d",
    slug: "grand-india-explorer-50-days",
    title: "Grand India Explorer: 50-Day Pan-India Epic Odyssey",
    destination: "Pan-India: 14 States & Union Territories",
    state: "All India Multi-State",
    duration: "49 Nights / 50 Days",
    price: "₹4,85,000",
    rating: 5.0,
    reviewsCount: 48,
    image: "/hero-grand-india.jpg",
    highlights: [
      "6 Geographic Legs: Himalayas to Kerala Backwaters & Wild North East",
      "Dal Lake Heritage Houseboat & High-Altitude Pangong Lake Glamping",
      "Private Alleppey Houseboat Backwater Cruise with On-Board Chef",
      "Kaziranga Rhino Wildlife Safaris & Living Root Bridges Trek",
      "UNESCO Forts of Rajasthan, Brihadeeswarar Temple & Tawang Monastery",
    ],
    theme: "Grand Tour",
    bestTimeToVisit: "Oct to Apr",
    inclusions: [
      "49 Nights in Premium 4-Star/Heritage Hotels, Houseboats & Swiss Camps",
      "Daily Buffet Breakfasts & All Meals on Houseboats",
      "Dedicated Private AC SUV/Sedan with Chauffeur for All Intercity Drives",
      "All Wildlife, Ladakh PAP & Northeast ILP Permits Included",
      "Kaziranga Jeep & Elephant Safaris + Shikara, Pichola & Brahmaputra Cruises",
    ],
    overview:
      "The ultimate voyage across the Indian subcontinent: a seamless 50-day master itinerary spanning 6 distinct geographic legs. From the royal desert fortresses of Rajasthan and the snow-crested high passes of Ladakh to the tropical backwaters of Kerala, ancient Tamil temple towns, tea-carpeted Himalayan ridges in Darjeeling, and the mystical living root bridges of Meghalaya.",
    guests: "Bespoke Private Group (Min 2 Adults)",
    hotelCategory: "4-Star Deluxe, Heritage Palaces & Luxury Swiss Camps",
    mealPlan: "Daily Buffet Breakfast + Full Board on Houseboats",
    transportation: "Private AC SUV/Sedan + High-Altitude Union Cabs",
    pickupDrop: "Delhi International Airport (DEL) In / Out",
    validity: "Seasonal (Best: October through April)",
    pricingTiers: [
      {
        tierName: "Bespoke 50-Day Luxury Master Tour",
        pricePerPerson: "₹4,85,000/- per person",
        note: "All-inclusive ground package for 2 adults (twin sharing). Domestic transition flights can be bundled upon request.",
        hotels: [
          { destination: "Delhi & Rajasthan", stay: "5 Nights", hotel: "Heritage Havelis & 4-Star Hotels (Jaipur, Udaipur)", roomCategory: "Heritage Royal Room", mealPlan: "Breakfast" },
          { destination: "Kashmir & Ladakh", stay: "10 Nights", hotel: "Deluxe Dal Lake Houseboat, 4-Star Leh & Luxury Swiss Camps (Nubra & Pangong)", roomCategory: "Deluxe / Heated Camps", mealPlan: "Breakfast & Dinner" },
          { destination: "Himachal Pradesh", stay: "6 Nights", hotel: "4-Star Mountain Resorts (Dharamshala, Manali, Shimla)", roomCategory: "Valley View Room", mealPlan: "Breakfast" },
          { destination: "West Coast & South", stay: "12 Nights", hotel: "Luxury Alleppey Houseboat & 4-Star Heritage Stays (Cochin, Munnar, Madurai, Pondicherry)", roomCategory: "Deluxe Houseboat & Heritage", mealPlan: "Breakfast (Full Board on Houseboat)" },
          { destination: "Eastern Himalayas", stay: "5 Nights", hotel: "4-Star Himalayan View Stays (Darjeeling, Gangtok)", roomCategory: "Kanchenjunga View Deluxe", mealPlan: "Breakfast" },
          { destination: "Wild North East", stay: "11 Nights", hotel: "Kaziranga Jungle Eco-Resort, Tawang Himalayan Lodges & Shillong Stays", roomCategory: "Eco Cottage / Deluxe", mealPlan: "Breakfast & Selected Dinners" },
        ],
      },
    ],
    legs: [
      {
        legNumber: 1,
        title: "North Heritage & Lakes",
        daysRange: "Days 1–6",
        route: "Delhi ➔ Rajasthan (Jaipur & Udaipur)",
        days: [
          { day: "Day 1", title: "Arrival in Delhi", description: "Meet your private driver at Delhi airport. Take an introductory tour of Old Delhi (Jama Masjid and a rickshaw ride through Chandni Chowk). Overnight in Delhi." },
          { day: "Day 2", title: "Delhi to Jaipur (270 km / 5 hrs)", description: "Visit the towering Qutub Minar in the morning, then drive to Jaipur. Check into your heritage hotel. Overnight in Jaipur." },
          { day: "Day 3", title: "Jaipur Palaces & Hill Forts", description: "Spend the day touring the Amber Fort, Hawa Mahal (Palace of Winds), City Palace, and the Jantar Mantar observatory. Overnight in Jaipur." },
          { day: "Day 4", title: "Jaipur to Udaipur (400 km / 6.5 hrs)", description: "Travel across desert plains to Udaipur, the 'City of Lakes'. Spend your evening at the lakeside ghats. Overnight in Udaipur." },
          { day: "Day 5", title: "Udaipur Lake Magic", description: "Explore the City Palace complex along Lake Pichola, Jagdish Temple, and Saheliyon-ki-Bari. Sunset boat cruise on Lake Pichola. Overnight in Udaipur." },
          { day: "Day 6", title: "Udaipur to Delhi to Srinagar (Flight Transition)", description: "Transfer to Udaipur Airport. Fly to Delhi and connect directly to Srinagar, Kashmir to begin Leg 2." },
        ],
      },
      {
        legNumber: 2,
        title: "The Trans-Himalayan & Alpine Peaks",
        daysRange: "Days 6–16",
        route: "Kashmir (Srinagar ➔ Gulmarg ➔ Pahalgam) ➔ Kargil ➔ Leh-Ladakh (Leh ➔ Nubra Valley ➔ Pangong Lake)",
        days: [
          { day: "Day 6 (Cont.)", title: "Arrival in Srinagar & Dal Lake", description: "Land in Srinagar. Check into a luxury wooden Houseboat on Dal Lake and enjoy an evening Shikara ride. Overnight on Dal Lake." },
          { day: "Day 7", title: "Srinagar Sightseeing", description: "Tour the Nishat Bagh and Shalimar Bagh Mughal Gardens. Visit the historic Shankaracharya Temple. Overnight on a Houseboat." },
          { day: "Day 8", title: "Srinagar to Gulmarg Day Trip (50 km / 2 hrs)", description: "Travel to the 'Meadow of Flowers'. Ride the famous Kongdoori Gondola up to the snowline. Return to Srinagar for overnight." },
          { day: "Day 9", title: "Srinagar to Pahalgam (90 km / 3 hrs)", description: "Drive to Pahalgam, passing saffron fields. Explore Betaab Valley and Aru Valley using local union cabs. Overnight in Pahalgam." },
          { day: "Day 10", title: "Pahalgam to Kargil via Zojila Pass (200 km / 7 hrs)", description: "Drive past Sonamarg and cross dramatic Zojila Pass (11,575 ft). Visit the Kargil War Memorial at Drass. Overnight in Kargil." },
          { day: "Day 11", title: "Kargil to Leh (215 km / 6 hrs)", description: "Drive to Leh. Stop at Lamayuru Monastery (Lunar landscape), Magnetic Hill, and the confluence of Indus and Zanskar rivers. Overnight in Leh." },
          { day: "Day 12", title: "Leh Acclimatization & Local Sightseeing", description: "Mandatory rest day to adapt to high altitude (11,500 ft). In the evening, visit Leh Palace and Shanti Stupa for sunset views. Overnight in Leh." },
          { day: "Day 13", title: "Leh to Nubra Valley via Khardung La (130 km / 5 hrs)", description: "Cross Khardung La Pass (17,582 ft). Arrive in Nubra Valley and ride double-humped Bactrian camels among Hunder sand dunes. Overnight in Nubra." },
          { day: "Day 14", title: "Nubra Valley to Pangong Lake via Shyok (165 km / 6 hrs)", description: "Drive along the rugged Shyok River route to high-altitude Pangong Tso Lake (13,940 ft). Overnight in a luxury lakeside camp." },
          { day: "Day 15", title: "Pangong Lake back to Leh via Chang La (220 km / 7 hrs)", description: "Sunrise over the lake, then drive back to Leh crossing Chang La Pass (17,585 ft). Stop at Thiksey Monastery. Overnight in Leh." },
          { day: "Day 16", title: "Leh to Delhi to Dharamshala (Flight Transition)", description: "Board early morning flight from Leh to Delhi, connect to Kangra Airport to enter Himachal Pradesh. Overnight in Dharamshala." },
        ],
      },
      {
        legNumber: 3,
        title: "The Himalayan Foothills & Valleys",
        daysRange: "Days 17–22",
        route: "Himachal Pradesh (Dharamshala ➔ Manali ➔ Shimla)",
        days: [
          { day: "Day 17", title: "Dharamshala & McLeodganj", description: "Visit the Dalai Lama's Temple complex, Bhagsunag Waterfall, and peaceful St. John in the Wilderness Church. Overnight in Dharamshala." },
          { day: "Day 18", title: "Dharamshala to Manali (215 km / 7 hrs)", description: "Take a scenic mountain drive winding past the Beas River to the adventure hub of Manali. Overnight in Manali." },
          { day: "Day 19", title: "Manali Snow Valleys", description: "Explore Solang Valley or travel through Atal Tunnel to Sissu village in Lahaul Valley. Visit Hadimba Temple. Overnight in Manali." },
          { day: "Day 20", title: "Manali to Shimla (240 km / 8 hrs)", description: "Drive south through Kullu Valley along roaring rivers to the historic British colonial summer capital, Shimla. Overnight in Shimla." },
          { day: "Day 21", title: "Shimla Heritage Walk", description: "Stroll along pedestrian Mall Road, visit The Ridge, Christ Church, and take the lift up to Jakhoo Temple. Overnight in Shimla." },
          { day: "Day 22", title: "Shimla to Chandigarh to Mumbai (Flight Transition)", description: "Drive down the hills to Chandigarh Airport (3.5 hrs). Board flight to Mumbai/Cochin." },
        ],
      },
      {
        legNumber: 4,
        title: "The West Coast, Kerala & Tamil Nadu",
        daysRange: "Days 23–34",
        route: "Mumbai ➔ Kerala (Cochin ➔ Munnar ➔ Thekkady ➔ Alleppey ➔ Kovalam) ➔ Tamil Nadu Heritage",
        days: [
          { day: "Day 23", title: "Mumbai City Exploration & Flight to Cochin", description: "Morning tour of South Mumbai (Gateway of India, Marine Drive). Fly to Cochin, Kerala in the evening. Overnight in Cochin." },
          { day: "Day 24", title: "Cochin to Munnar (130 km / 4 hrs)", description: "View Chinese Fishing Nets in Fort Kochi. Wind up through Western Ghats lined with spice plantations to Munnar. Overnight in Munnar." },
          { day: "Day 25", title: "Munnar Tea Gardens", description: "Explore Eravikulam National Park (Nilgiri Tahr), visit Tea Museum, and stop by Mattupetty Dam. Overnight in Munnar." },
          { day: "Day 26", title: "Munnar to Thekkady (90 km / 3 hrs)", description: "Drive to Thekkady. Take a guided spice plantation walk and watch a traditional Kalaripayattu performance. Overnight in Thekkady." },
          { day: "Day 27", title: "Thekkady to Alleppey Houseboat (140 km / 4 hrs)", description: "Drive to Alleppey. Board your private Kettuvallam (houseboat) and cruise palm-fringed backwaters. Overnight on Houseboat." },
          { day: "Day 28", title: "Alleppey to Kovalam Beach (160 km / 4 hrs)", description: "Disembark and drive south along the Malabar coast to Kovalam beach. Evening relaxation. Overnight in Kovalam." },
          { day: "Day 29", title: "Kovalam to Kanyakumari (Southern Tip) (85 km / 2.5 hrs)", description: "Cross into Tamil Nadu. Visit Vivekananda Rock Memorial, Thiruvalluvar Statue, and the ocean confluence. Overnight in Kanyakumari." },
          { day: "Day 30", title: "Kanyakumari to Madurai (245 km / 4.5 hrs)", description: "Drive inland to cultural heart of Tamil Nadu. Visit majestic Meenakshi Amman Temple during evening prayer ceremony. Overnight in Madurai." },
          { day: "Day 31", title: "Madurai to Tanjore (190 km / 4 hrs)", description: "Tour Tirumalai Nayakkar Palace, then drive to Tanjore. Visit UNESCO Brihadeeswarar Temple. Overnight in Tanjore." },
          { day: "Day 32", title: "Tanjore to Pondicherry via Chidambaram (210 km / 5 hrs)", description: "Drive toward the French Quarter, stopping at Nataraja Temple in Chidambaram. Stroll heritage streets of Pondicherry. Overnight in Pondicherry." },
          { day: "Day 33", title: "Pondicherry to Mahabalipuram to Chennai (160 km / 3.5 hrs)", description: "Visit Matrimandir in Auroville, drive scenic East Coast Road to Mahabalipuram (Shore Temple, Pancha Rathas). Continue to Chennai." },
          { day: "Day 34", title: "Chennai to Bagdogra (Flight Link)", description: "Transfer to Chennai International Airport and fly to Bagdogra Airport, West Bengal. Overnight in Bagdogra or Siliguri." },
        ],
      },
      {
        legNumber: 5,
        title: "The Eastern Himalayas",
        daysRange: "Days 35–39",
        route: "Bagdogra ➔ Darjeeling ➔ Gangtok",
        days: [
          { day: "Day 35", title: "Bagdogra to Darjeeling (70 km / 3 hrs)", description: "Drive up through sweeping green tea estates to the hill station of Darjeeling (6,700 ft). Overnight in Darjeeling." },
          { day: "Day 36", title: "Darjeeling Himalayan Peaks", description: "Early morning trip to Tiger Hill for sunrise over Mt. Kanchenjunga. Visit Ghoom Monastery, Batasia Loop, and Himalayan Mountaineering Institute. Overnight in Darjeeling." },
          { day: "Day 37", title: "Darjeeling to Gangtok, Sikkim (100 km / 4 hrs)", description: "Drive into the Teesta River valley and climb to Gangtok. Stroll along pedestrian MG Marg. Overnight in Gangtok." },
          { day: "Day 38", title: "Gangtok Glacial Lakes", description: "Excursion to sacred Tsomgo Lake (12,400 ft) and Baba Harbhajan Singh Mandir near the border. Overnight in Gangtok." },
          { day: "Day 39", title: "Gangtok Monasteries & Fly to Guwahati", description: "Explore Rumtek Monastery and Namgyal Institute of Tibetology. Drive to airport and fly to Guwahati, Assam. Overnight in Guwahati." },
        ],
      },
      {
        legNumber: 6,
        title: "The Wild & Mystical North East",
        daysRange: "Days 40–50",
        route: "Assam (Kaziranga) ➔ Arunachal (Tawang) ➔ Meghalaya (Cherrapunji & Dawki) ➔ Delhi Departure",
        days: [
          { day: "Day 40", title: "Guwahati to Kaziranga National Park (190 km / 4.5 hrs)", description: "Visit Kamakhya Temple, then drive to Kaziranga, home of the Great One-Horned Rhinoceros. Overnight in Kaziranga." },
          { day: "Day 41", title: "Kaziranga Wildlife Safaris", description: "Early morning elephant safari followed by afternoon 4x4 open jeep safari deeper into the national park. Overnight in Kaziranga." },
          { day: "Day 42", title: "Kaziranga to Dirang (Arunachal Pradesh) (200 km / 6.5 hrs)", description: "Enter Arunachal Pradesh and drive up to scenic Dirang Valley. Visit historic Dirang Dzong. Overnight in Dirang." },
          { day: "Day 43", title: "Dirang to Tawang via Sela Pass (140 km / 6 hrs)", description: "Cross snow-covered Sela Pass (13,700 ft). Stop by Paradise Lake before arriving in Tawang. Overnight in Tawang." },
          { day: "Day 44", title: "Tawang Spiritual Exploration", description: "Explore the 400-year-old Tawang Monastery (second-largest in the world), Tawang War Memorial, and Urgelling Monastery. Overnight in Tawang." },
          { day: "Day 45", title: "Tawang to Bomdila / Dirang (140 km / 6 hrs)", description: "Retrace mountain drive back down, stopping by thundering Nuranang (Jung) Waterfalls. Overnight in Bomdila." },
          { day: "Day 46", title: "Bomdila to Shillong, Meghalaya (320 km / 9 hrs)", description: "Drive south out of Arunachal, past Guwahati, into misty hills of Meghalaya. Stop by Umiam Lake. Overnight in Shillong." },
          { day: "Day 47", title: "Shillong to Cherrapunji (60 km / 2 hrs)", description: "Visit Elephant Falls, then drive to Cherrapunji. Explore Mawsmai Caves and Nohkalikai Falls. Overnight in Cherrapunji." },
          { day: "Day 48", title: "Living Root Bridges & Dawki Border", description: "Hike to witness indigenous Living Root Bridges. Drive to Dawki for a crystal-clear boat ride on Umngot River. Return to Shillong. Overnight in Shillong." },
          { day: "Day 49", title: "Shillong to Guwahati (100 km / 3 hrs)", description: "Drive back to Guwahati. Enjoy a relaxing sunset cruise on the Brahmaputra River. Overnight in Guwahati." },
          { day: "Day 50", title: "Guwahati to Delhi Departure", description: "Transfer to Guwahati Airport. Board flight to Delhi to connect with international flight home, concluding your grand tour of India." },
        ],
      },
    ],
    packageInclusions: [
      "All Accommodations: 49 Nights stay in premium 4-Star/Heritage hotels, Swiss camps, and luxury houseboats (including Dal Lake Houseboat, Alleppey Houseboat, and Nubra/Pangong Luxury Camps).",
      "Meals: Daily buffet breakfasts at all hotels; All meals (Breakfast, Lunch, High Tea, Dinner) included during the Alleppey Houseboat stay.",
      "All Ground Logistics: Private dedicated AC vehicle (SUV/Sedan) for all airport transfers, long-distance intercity drives, and local sightseeing as per the itinerary.",
      "Safaris & Excursions: Kaziranga Jeep and Elephant safaris; Periyar lake boat safari; boat rides on Lake Pichola, Dal Lake, Umngot River, and Brahmaputra River.",
      "All Wildlife & Border Permits: Processing and fees for Ladakh Protected Area Permits (PAP), Arunachal Inner Line Permits (ILP), and Sikkim Tsomgo Permits.",
    ],
    packageExclusions: [
      "International Flights: Flights from your country of origin to India and back are excluded.",
      "Internal Flights: Air tickets for domestic transition sectors quoted separately.",
      "High Altitude Cabs: Mandatory local non-AC Ladakh-union vehicles (Nubra/Pangong) and Pahalgam-union vehicles.",
      "Monument & Ride Tickets: Entrance tickets for forts, palaces, museums, Gulmarg Gondola ride, and camera permissions.",
      "Personal Expenses: Laundry, telephone bills, alcoholic beverages, tips for drivers/guides, and mandatory travel insurance coverages.",
    ],
    importantNotes: [
      "This is a bespoke 50-day signature luxury itinerary curated by senior Indivoya destination experts.",
      "Every leg can be customized or extended based on traveler preferences.",
      "Comprehensive visa, flight, and permit assistance provided.",
    ],
  },

  // 3. DARJEELING & GANGTOK EASTERN HIMALAYAS TOUR PACKAGE
  {
    id: "pkg-darjeeling-gangtok-4n5d",
    slug: "darjeeling-gangtok-eastern-himalayas",
    title: "Darjeeling & Gangtok Eastern Himalayas Tour",
    destination: "Darjeeling & Gangtok, Sikkim",
    state: "West Bengal & Sikkim",
    duration: "4 Nights / 5 Days",
    price: "₹32,950",
    rating: 4.9,
    reviewsCount: 87,
    image: "/dest-sikkim.jpg",
    highlights: [
      "Tiger Hill Sunrise over Mount Kanchenjunga & Everest",
      "Historic Ghoom Monastery & Batasia Loop War Memorial",
      "Gangtok MG Marg Vehicle-Free Promenade Strolls",
      "Enchey Monastery, Dro-dul Chorten & Gangtok Ropeway",
    ],
    theme: "Nature",
    bestTimeToVisit: "Mar to Jun & Oct to Dec",
    inclusions: [
      "4 Nights Stay in 4-Star Hotels (2N Darjeeling + 2N Gangtok)",
      "Daily Hotel Breakfast for 2 Adults",
      "Exclusive Private SUV (Innova / Xylo / Marazzo)",
      "Driver Allowance, Toll Taxes, Parking & Interstate Permits",
    ],
    overview:
      "Immerse yourself in the serene high-altitude beauty of the Eastern Himalayas. Marvel at the golden dawn over Mount Kanchenjunga from Tiger Hill, ride through rolling green tea valleys, visit centuries-old Tibetan monasteries in Sikkim, and experience the vehicle-free charm of Gangtok's MG Marg with private SUV comfort.",
    guests: "2 Adults (Double Sharing)",
    hotelCategory: "4-Star Hotels",
    mealPlan: "Breakfast",
    transportation: "Exclusive Private SUV (Innova / Xylo / Marazzo)",
    pickupDrop: "Bagdogra Airport (IXB) / NJP Railway Station",
    validity: "All Season (Subject to availability and seasonality)",
    pricingTiers: [
      {
        tierName: "4-Star Mountain View Stays",
        pricePerPerson: "INR 32,950/- Approx. All Inclusive",
        note: "Minimum 2 people required. Rates subject to hotel availability, seasonality, and final confirmation.",
        hotels: [
          { destination: "Darjeeling", stay: "2 Nights", hotel: "4-Star Resort / Premium Heritage Stay", roomCategory: "Deluxe Valley View", mealPlan: "Daily Breakfast" },
          { destination: "Gangtok", stay: "2 Nights", hotel: "4-Star Hotel near MG Marg", roomCategory: "Deluxe City View", mealPlan: "Daily Breakfast" },
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival at Bagdogra Airport & Scenic Transfer to Darjeeling",
        route: "Bagdogra Airport (IXB) -> Darjeeling (70 km / 3.5–4 hrs)",
        description:
          "Upon your arrival at Bagdogra Airport, your private chauffeur will greet you with an SUV and begin the scenic uphill drive toward the 'Queen of Hills'. Enjoy winding mountain roads flanked by tea gardens and mountain streams. Arrive in Darjeeling, check into your 4-star hotel, and unwind. Spend a relaxed evening taking a stroll around Chowrasta Mall Road to soak in the mountain weather.",
        places: ["Scenic Tea Gardens Drive", "Chowrasta Mall Road", "Darjeeling Town"],
        overnight: "Darjeeling (4-Star Hotel with Breakfast)",
        meals: "Breakfast on subsequent days",
      },
      {
        day: "Day 2",
        title: "Tiger Hill Sunrise, Local Sightseeing & Leisure",
        route: "Darjeeling Sightseeing",
        description:
          "Wake up early (around 4:00 AM) for a drive up to Tiger Hill to witness the sunrise over Mount Kanchenjunga, turning snow-capped peaks into shades of gold and orange. On your way back, stop at historic Ghoom Monastery and the iconic Batasia Loop war memorial. Return for a hearty breakfast, then explore Himalayan Mountaineering Institute (HMI), Padmaja Naidu Himalayan Zoological Park (home to Red Pandas and Snow Leopards), and a local tea estate.",
        places: ["Tiger Hill", "Ghoom Monastery", "Batasia Loop", "HMI", "Padmaja Naidu Himalayan Zoo", "Tea Estate"],
        overnight: "Darjeeling (4-Star Hotel with Breakfast)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 3",
        title: "Transfer from Darjeeling to Gangtok via Teesta River Valleys",
        route: "Darjeeling -> Gangtok (100 km / 4–5 hrs)",
        description:
          "After breakfast and checking out, your private SUV will drive you down into the valley and up toward Gangtok, the capital of Sikkim. Stop along the way at the Teesta River Viewpoint for photos of the turquoise river cutting through steep gorges. Arrive in Gangtok, check into your 4-star hotel, and spend your evening exploring MG Marg—a vehicle-free pedestrian boulevard lined with top-tier restaurants and cafes.",
        places: ["Teesta River Viewpoint", "MG Marg Boulevard", "Gangtok Main Bazaar"],
        overnight: "Gangtok (4-Star Hotel with Breakfast)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 4",
        title: "Gangtok City Exploration & Monasteries",
        route: "Gangtok Local Sightseeing",
        description:
          "After breakfast, embark on a day tour of Gangtok's spiritual and cultural landmarks. Visit the Directorate of Handicrafts and Handlooms to witness traditional Sikkimese arts, Enchey Monastery, Dro-dul Chorten Stupa, and take in panoramic views from Ganesh Tok and Hanuman Tok. Enjoy an optional ride on the Gangtok Ropeway for an aerial perspective.",
        places: ["Directorate of Handicrafts", "Enchey Monastery", "Dro-dul Chorten", "Ganesh Tok", "Hanuman Tok", "Gangtok Ropeway"],
        overnight: "Gangtok (4-Star Hotel with Breakfast)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 5",
        title: "Check-out & Return Transfer to Bagdogra Airport",
        route: "Gangtok -> Bagdogra Airport (125 km / 4.5–5 hrs)",
        description:
          "Enjoy your final breakfast at the hotel, complete your check-out formalities, and meet your driver for the return journey. Relax in your private SUV for the scenic drive back to Bagdogra Airport (IXB) or NJP Railway Station in time for your return flight home.",
        places: ["Scenic Return Drive", "Bagdogra Airport (IXB) Drop"],
        overnight: "Tour Ends",
        meals: "Daily Breakfast at Hotel",
      },
    ],
    packageInclusions: [
      "4 Nights' accommodation in 4-star hotels on a double-sharing basis (2N Darjeeling + 2N Gangtok).",
      "Daily hotel breakfast for 2 adults.",
      "Exclusive private SUV (Innova / Xylo / Marazzo) for all airport transfers, inter-city travel, and sightseeing as per itinerary.",
      "Driver allowance, toll taxes, parking fees, and interstate permits.",
    ],
    packageExclusions: [
      "Airfare / Train Fare: Flight tickets to/from Bagdogra Airport (IXB) or train tickets to/from New Jalpaiguri (NJP).",
      "Additional Meals: Lunch, dinner, snacks, beverages, or room service.",
      "Entry Fees & Permits: Entrance tickets for monuments, zoos, parks, ropeway rides, or optional high-altitude trips (such as Tsomgo Lake, Baba Mandir, or Nathula Pass).",
      "Extra Vehicle Usage: Any additional detours or night usage beyond specified itinerary.",
      "Personal Expenses: Room heater charges, laundry, phone calls, drinks, and tips for driver or hotel staff.",
      "Taxes: 5% GST on the final package price.",
      "Unforeseen Expenses: Costs arising from weather delays, landslides, road blockages, or flight cancellations.",
    ],
    importantNotes: [
      "Minimum 2 people required for booking.",
      "Rates subject to hotel availability, seasonality, and final confirmation.",
      "Carry valid government-issued photo ID (Passport / Voter ID / Aadhaar) for Sikkim interstate checkpoint verifications.",
    ],
  },

  // 4. RAJASTHAN & DELHI TOUR PACKAGE
  {
    id: "pkg-rajasthan-delhi-5n6d",
    slug: "rajasthan-delhi-royal-heritage",
    title: "Rajasthan & Delhi Royal Heritage Tour",
    destination: "Delhi, Jaipur & Udaipur",
    state: "Delhi & Rajasthan",
    duration: "5 Nights / 6 Days",
    price: "₹52,950",
    rating: 4.9,
    reviewsCount: 124,
    image: "/hero-rajasthan.jpg",
    highlights: [
      "Special Included Tour Guides in Delhi, Jaipur & Udaipur",
      "UNESCO Qutub Minar, Amer Fort & Jantar Mantar Observatory",
      "Panna Meena Kund Stepwell, Jal Mahal & Hawa Mahal",
      "Udaipur City Palace overlooking Lake Pichola & Saheliyon-ki-Bari",
    ],
    theme: "Heritage",
    bestTimeToVisit: "Valid till March except peak dates (Oct to Mar)",
    inclusions: [
      "5 Nights Luxury Stays (1N Delhi, 2N Jaipur, 2N Udaipur)",
      "Daily Breakfast at All Proposed Hotels",
      "Dedicated Private Toyota Innova Crysta for All Days",
      "Licensed Tour Guides in Delhi (Day 1), Jaipur (Day 3), Udaipur (Day 5)",
    ],
    overview:
      "Journey through northern India's grandest royal corridor. Discover Delhi's ancient Mughal minarets and Old Delhi lanes, Jaipur's magnificent pink sandstone hill-forts, and Udaipur's serene white palaces on Lake Pichola. Includes a private Innova Crysta and licensed local guides in all three royal cities.",
    guests: "2 Adults (Double Sharing)",
    hotelCategory: "4-Star & 5-Star Options Available",
    mealPlan: "Breakfast",
    transportation: "Private Innova Crysta throughout with dedicated chauffeur",
    pickupDrop: "Delhi Airport / Station In ➔ Udaipur Airport / Station Out",
    validity: "Valid till March (Except peak dates)",
    specialInclusions: [
      "Dedicated tour guide in Delhi on Day 1",
      "Dedicated tour guide in Jaipur on Day 3",
      "Dedicated tour guide in Udaipur on Day 5",
    ],
    pricingTiers: [
      {
        tierName: "4-Star Hotel Option",
        pricePerPerson: "INR 52,950/- All Inclusive",
        note: "Minimum 2 people required. Valid till March except peak dates.",
        hotels: [
          { destination: "Delhi", stay: "1 Night", hotel: "Deventure Sarovar Portico, Kapashera / Similar", roomCategory: "Superior Room", mealPlan: "Breakfast" },
          { destination: "Jaipur", stay: "2 Nights", hotel: "WelcomHeritage Kurki Palace / Similar", roomCategory: "Rawla Deluxe", mealPlan: "Breakfast" },
          { destination: "Udaipur", stay: "2 Nights", hotel: "The Sierra – By The Lake / Similar", roomCategory: "Premium Suite with Balcony", mealPlan: "Breakfast" },
        ],
      },
      {
        tierName: "5-Star Luxury Option",
        pricePerPerson: "INR 76,950/- All Inclusive",
        note: "Minimum 2 people required. Luxury properties with premium rooms.",
        hotels: [
          { destination: "Delhi", stay: "1 Night", hotel: "Radisson Blu Plaza Delhi Airport / Similar", roomCategory: "Deluxe Room", mealPlan: "Breakfast" },
          { destination: "Jaipur", stay: "2 Nights", hotel: "Radisson Jaipur City Center / Similar", roomCategory: "Business Class Room", mealPlan: "Breakfast" },
          { destination: "Udaipur", stay: "2 Nights", hotel: "The Ananta / Similar", roomCategory: "Luxury Cottage with Private Balcony", mealPlan: "Breakfast" },
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi Arrival & Guided Sightseeing",
        description:
          "Arrive at Delhi International Airport or Railway Station, where your private driver will meet you with an Innova Crysta. Transfer to the hotel and complete check-in. Proceed for guided sightseeing: visit Jama Masjid, one of Delhi's most prominent historical landmarks, take an exhilarating cycle-rickshaw ride through lively Chandni Chowk lanes, and enjoy an outside view of the iconic Red Fort.",
        places: ["Jama Masjid", "Chandni Chowk Rickshaw Ride", "Red Fort Exterior"],
        overnight: "Delhi (4-Star / 5-Star Hotel)",
        meals: "Breakfast on subsequent days",
      },
      {
        day: "Day 2",
        title: "Delhi Sightseeing & Transfer to Jaipur",
        route: "Delhi -> Jaipur (270 km / 5 hrs)",
        description:
          "After breakfast, check out and visit Qutub Minar, a UNESCO World Heritage Site. After sightseeing, drive comfortably to Jaipur, the Pink City capital of Rajasthan. On arrival, check in to your heritage hotel and relax.",
        places: ["Qutub Minar", "Pink City Drive", "Jaipur Check-in"],
        overnight: "Jaipur (4-Star / 5-Star Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 3",
        title: "Jaipur Full-Day Guided Sightseeing",
        description:
          "After breakfast, proceed for a guided sightseeing tour of Jaipur with your dedicated guide: explore the magnificent hilltop Amber Fort with its mirror palace, photograph the historic symmetrical staircases of Panna Meena Kund stepwell, admire Jal Mahal on Man Sagar Lake, gaze at the 953 jharokhas of Hawa Mahal, and tour the City Palace and UNESCO Jantar Mantar observatory.",
        places: ["Amber Fort", "Panna Meena Kund", "Jal Mahal", "Hawa Mahal", "City Palace", "Jantar Mantar"],
        overnight: "Jaipur (4-Star / 5-Star Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 4",
        title: "Jaipur to Udaipur (City of Lakes)",
        route: "Jaipur -> Udaipur (400 km / 6.5 hrs)",
        description:
          "After breakfast, check out from the hotel and proceed to Udaipur by private Innova Crysta. Enjoy the scenic drive through rural Rajasthan. Arrive in Udaipur and check in to your hotel. If time permits, enjoy a stroll around Fateh Sagar Lake or opt for a boat ride on Lake Pichola.",
        places: ["Scenic Rajasthan Drive", "Fateh Sagar Lake", "Lake Pichola Waterfront"],
        overnight: "Udaipur (4-Star / 5-Star Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 5",
        title: "Udaipur Guided City Tour",
        description:
          "After breakfast, proceed for a guided sightseeing tour of Udaipur: explore the magnificent City Palace complex overlooking Lake Pichola, visit the fountains and landscaped gardens of Saheliyon-ki-Bari, the historic 17th-century Jagdish Temple, scenic Gangaur Ghat waterfront, and historic Bagore Ki Haveli.",
        places: ["City Palace Udaipur", "Saheliyon-ki-Bari", "Jagdish Temple", "Gangaur Ghat", "Bagore Ki Haveli"],
        overnight: "Udaipur (4-Star / 5-Star Hotel)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 6",
        title: "Departure from Udaipur",
        route: "Hotel -> Udaipur Airport / Station",
        description:
          "After breakfast, check out from the hotel. Transfer comfortably to Udaipur Airport or Railway Station for your onward journey. Tour ends with beautiful memories of Delhi, Jaipur, and Udaipur.",
        places: ["Udaipur Airport / Railway Station Drop"],
        overnight: "Tour Ends",
        meals: "Daily Breakfast at Hotel",
      },
    ],
    packageInclusions: [
      "Accommodation for 5 nights: 1 night in Delhi, 2 nights in Jaipur, and 2 nights in Udaipur.",
      "Daily breakfast included at all proposed hotels.",
      "Dedicated Private Toyota Innova Crysta for all airport transfers and city sightseeing.",
      "Dedicated local tour guide in Delhi (Day 1), Jaipur (Day 3), and Udaipur (Day 5).",
      "Vehicle expenses including fuel, toll charges, interstate taxes, driver allowances, and parking.",
    ],
    packageExclusions: [
      "Airfare or train tickets.",
      "Monument entrance fees, audio guides, and camera permits.",
      "Boating charges on Lake Pichola / Fateh Sagar Lake.",
      "Lunch, dinner, snacks, and beverages other than breakfast.",
      "Personal expenses, laundry, tips, and room service.",
      "GST at 5%.",
    ],
    importantNotes: [
      "Minimum 2 people required for booking.",
      "Valid till March except peak dates.",
      "All hotel bookings are subject to availability at confirmation.",
    ],
  },

  // 5. HIMACHAL TOUR PACKAGE
  {
    id: "pkg-himachal-5n6d",
    slug: "himachal-dharamshala-manali-shimla",
    title: "Himachal Serenade: Dharamshala, Manali & Shimla",
    destination: "Dharamshala, Manali & Shimla",
    state: "Himachal Pradesh",
    duration: "5 Nights / 6 Days",
    price: "₹42,950",
    rating: 4.8,
    reviewsCount: 118,
    image: "/dest-manali.jpg",
    highlights: [
      "Dalai Lama Temple Complex & McLeodganj Tibetan Culture",
      "Solang Valley Snow Point & Adventure Excursion",
      "Scenic Kullu Valley Riverbanks & Apple Orchards",
      "Shimla Ridge, British Heritage Walk & Christ Church",
    ],
    theme: "Family",
    bestTimeToVisit: "Valid till March (Snow: Dec-Feb; Pleasant: Mar-Jun)",
    inclusions: [
      "5 Nights Stay in 4-Star Mountain Resorts (1N Dharamshala, 2N Manali, 2N Shimla)",
      "Daily Breakfast for All 5 Mornings",
      "Private Transportation with Experienced Hill Chauffeur",
      "Pickup from Dharamshala and Drop at Chandigarh",
    ],
    overview:
      "Experience the crown jewels of Himachal Pradesh. Begin in the spiritual haven of Dharamshala and McLeodganj, travel past roaring rivers to the snow valleys of Manali and Solang, and wander the historic colonial Ridge and Mall Road in Shimla. All in private chauffeur-driven comfort.",
    guests: "2 Adults (Double Sharing)",
    hotelCategory: "4-Star Mountain Resorts",
    mealPlan: "Breakfast",
    transportation: "Private Dedicated Vehicle with Hill Specialist Chauffeur",
    pickupDrop: "Pickup: Dharamshala | Drop: Chandigarh Airport / Station",
    validity: "Valid till March (Except peak dates)",
    pricingTiers: [
      {
        tierName: "4-Star Mountain Hotel Package",
        pricePerPerson: "INR 42,950/- All Inclusive",
        note: "Minimum 2 people required. Valid till March except peak dates.",
        hotels: [
          { destination: "Dharamshala", stay: "1 Night", hotel: "Katson Castle or similar", roomCategory: "Deluxe Mountain View", mealPlan: "Breakfast" },
          { destination: "Manali", stay: "2 Nights", hotel: "Katson Grand View or similar", roomCategory: "Valley View Room", mealPlan: "Breakfast" },
          { destination: "Shimla", stay: "2 Nights", hotel: "Katson Courtyard or similar", roomCategory: "Heritage Deluxe", mealPlan: "Breakfast" },
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dharamshala – Local Sightseeing",
        route: "Dharamshala Arrival & Sightseeing",
        description:
          "Upon arrival in Dharamshala, meet our driver and transfer to your hotel. Later, proceed for local sightseeing in Dharamshala and McLeodganj, covering Bhagsunag Temple and Bhagsu Waterfall, the Dalai Lama Temple Complex, St. John in the Wilderness Church, and the vibrant local markets of McLeodganj.",
        places: ["Dalai Lama Temple", "Bhagsunag Temple & Waterfall", "St. John in the Wilderness", "McLeodganj Market"],
        overnight: "Dharamshala (Katson Castle or similar)",
        meals: "Breakfast on subsequent days",
      },
      {
        day: "Day 2",
        title: "Dharamshala to Manali Scenic Drive",
        route: "Dharamshala -> Manali (215 km / 7 hrs)",
        description:
          "After breakfast, check out from the hotel and proceed towards Manali by road. Enjoy a picturesque journey winding through the mountains, passing beautiful valleys and stretches along the Beas River. On arrival in Manali, check in to your hotel and relax.",
        places: ["Scenic Mountain Passes", "Beas River Valley", "Manali Town"],
        overnight: "Manali (Katson Grand View or similar)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 3",
        title: "Manali – Solang Valley & Snow Viewpoints",
        route: "Solang Valley Excursion",
        description:
          "After breakfast, proceed for an excursion to Solang Valley, known for its mountain views and adventure activities (snow activities, zorbing, cable car rides, skiing at additional cost). Optional visit to Atal Tunnel toward Lahaul Valley subject to road conditions and permissions.",
        places: ["Solang Valley", "Snow Viewpoints", "Atal Tunnel Viewpoint", "Hadimba Temple"],
        overnight: "Manali (Katson Grand View or similar)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 4",
        title: "Manali – Kullu Valley – Shimla",
        route: "Manali -> Shimla (240 km / 8 hrs)",
        description:
          "After breakfast, check out and drive towards Shimla. Pass through the scenic Kullu Valley along the Beas River with views of apple orchards and pine woods. Continue your journey climbing to Shimla. On arrival, check in to your hotel and relax.",
        places: ["Kullu Valley", "Beas River Views", "Shimla Hills"],
        overnight: "Shimla (Katson Courtyard or similar)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 5",
        title: "Shimla Local Heritage Sightseeing",
        route: "Shimla Town & Ridge",
        description:
          "After breakfast, proceed for local sightseeing in Shimla. Stroll along The Ridge, explore bustling Mall Road, visit Christ Church, Scandal Point, Lakkar Bazaar famous for wooden handicrafts, and Jakhoo Temple atop the ridge.",
        places: ["The Ridge", "Mall Road", "Christ Church", "Scandal Point", "Lakkar Bazaar", "Jakhoo Temple"],
        overnight: "Shimla (Katson Courtyard or similar)",
        meals: "Daily Breakfast at Hotel",
      },
      {
        day: "Day 6",
        title: "Shimla – Chandigarh Drop",
        route: "Shimla -> Chandigarh (115 km / 3.5 hrs)",
        description:
          "After breakfast, check out from the hotel and descend towards Chandigarh. You will be dropped at Chandigarh Railway Station or Chandigarh Airport for your onward journey with unforgettable memories.",
        places: ["Chandigarh Railway Station / Airport Drop"],
        overnight: "Tour Ends",
        meals: "Daily Breakfast at Hotel",
      },
    ],
    packageInclusions: [
      "Accommodation for 5 nights in proposed 4-star hotels or similar properties.",
      "Daily breakfast for 5 mornings.",
      "Private transportation by the selected vehicle with mountain-experienced chauffeur.",
      "Pickup from Dharamshala and drop at Chandigarh Railway Station or Airport.",
      "Vehicle expenses including fuel, toll charges, parking fees, and driver allowances.",
    ],
    packageExclusions: [
      "Airfare, train tickets, and other transportation not specifically mentioned.",
      "Lunch, dinner, snacks, and beverages.",
      "GST at 5%.",
      "Entry fees to monuments, temples, attractions, and sightseeing points.",
      "Adventure activities (skiing, paragliding, river rafting, cable car rides).",
      "Rohtang Pass permits or special Atal Tunnel taxi permits where applicable.",
      "Medical and travel insurance.",
    ],
    importantNotes: [
      "Minimum 2 people required for booking.",
      "Valid till March except peak dates.",
      "Sightseeing is subject to weather, snowfall, and road conditions in high-altitude zones.",
    ],
  },

  // 6. KASHMIR & LADAKH TOUR PACKAGE
  {
    id: "pkg-kashmir-ladakh-9n10d",
    slug: "kashmir-ladakh-high-passes-odyssey",
    title: "Kashmir & Ladakh Odyssey: Houseboat, Zoji La & Pangong",
    destination: "Srinagar, Gulmarg, Kargil, Leh, Nubra & Pangong",
    state: "Kashmir & Ladakh",
    duration: "9 Nights / 10 Days",
    price: "₹1,50,950",
    rating: 5.0,
    reviewsCount: 62,
    image: "/hero-ladakh.jpg",
    highlights: [
      "Deluxe Dal Lake Heritage Houseboat & Private Shikara Ride",
      "Gulmarg Gondola Excursion & Snowfield Panoramas",
      "Scenic Zoji La Pass (11,575 ft) & Kargil Drass War Memorial",
      "Khardung La Pass (17,582 ft) & Bactrian Camel Safari in Nubra",
      "Camp Under Starlit Skies at Changing-Color Pangong Lake",
    ],
    theme: "Adventure",
    bestTimeToVisit: "May to Oct (Non-peak dates)",
    inclusions: [
      "9 Nights Handpicked Stays (Houseboat, 4-Star Hotels & Luxury Lake Camps)",
      "Daily Breakfast & Dinner Included throughout (MAP Meal Plan)",
      "Dedicated Private SUV (Toyota Innova Crysta) with Mountain Specialist Chauffeur",
      "All Ladakh Restricted Area Inner Line Permits (PAP) & Environmental Fees",
      "Emergency Medical Oxygen Cylinder Equipped In Vehicle",
    ],
    overview:
      "The ultimate trans-Himalayan overland adventure connecting Kashmir's lush meadows to Ladakh's high-altitude moonscapes. Glide across Dal Lake in a wooden Shikara, ride the Gulmarg Gondola, cross the legendary Zoji La pass into Kargil and Leh, conquer Khardung La at 17,582 ft, and stargaze by the turquoise shores of Pangong Tso.",
    guests: "2 Adults (Double Sharing)",
    hotelCategory: "4-Star Hotels, Deluxe Houseboat & Premium Glamping",
    mealPlan: "MAP (Daily Breakfast & Dinner)",
    transportation: "Dedicated Private SUV (Innova Crysta) + Mountain Chauffeur",
    pickupDrop: "Pickup: Srinagar Airport (SXR) | Drop: Leh Airport (IXL)",
    validity: "May to October (Non-peak dates)",
    pricingTiers: [
      {
        tierName: "4-Star & Luxury Camp Package",
        pricePerPerson: "INR 1,50,950/- Approx. All Inclusive",
        note: "Minimum 2 people required. Non-peak dates quote. Subject to availability and confirmation.",
        hotels: [
          { destination: "Srinagar (Dal Lake)", stay: "1 Night", hotel: "Deluxe Heritage Houseboat", roomCategory: "Carved Cedar Suite", mealPlan: "Breakfast & Dinner" },
          { destination: "Srinagar City", stay: "2 Nights", hotel: "4-Star Hotel in Srinagar", roomCategory: "Deluxe Room", mealPlan: "Breakfast & Dinner" },
          { destination: "Kargil", stay: "1 Night", hotel: "4-Star / Best Available Property in Kargil", roomCategory: "Standard Mountain Room", mealPlan: "Breakfast & Dinner" },
          { destination: "Leh", stay: "3 Nights", hotel: "4-Star Hotel in Leh (Acclimatization)", roomCategory: "Premium Room", mealPlan: "Breakfast & Dinner" },
          { destination: "Nubra Valley", stay: "1 Night", hotel: "Premium Luxury Camp / 4-Star Resort in Nubra", roomCategory: "Swiss Cottage Tent", mealPlan: "Breakfast & Dinner" },
          { destination: "Pangong Tso", stay: "1 Night", hotel: "Premium Lakeview Camps / Cottages at Pangong", roomCategory: "Lakeview Heated Tent", mealPlan: "Breakfast & Dinner" },
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Srinagar – Houseboat Check-in & Evening Shikara Ride",
        route: "Srinagar Airport (SXR) -> Dal Lake",
        description:
          "Arrive at Srinagar Airport where your private guide and chauffeur greet you with a traditional welcome. Transfer directly to Dal Lake to check into a luxury heritage houseboat. In the evening, unwind with a peaceful 1-hour private Shikara ride navigating through floating gardens, lotus fields, and local artisan shops.",
        places: ["Dal Lake", "Private Shikara Ride", "Floating Flower Markets"],
        overnight: "Deluxe Heritage Houseboat, Srinagar",
        meals: "Dinner Included",
      },
      {
        day: "Day 2",
        title: "Srinagar Sightseeing – Mughal Gardens",
        route: "Srinagar Sightseeing",
        description:
          "Enjoy breakfast on the houseboat. Set out to explore the historic Mughal Gardens, including Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Garden of Love), overlooking crystal-clear Dal Lake waters. Afternoon visit to a local Kashmiri handicraft showroom for silk carpets and Pashmina shawls.",
        places: ["Nishat Bagh", "Shalimar Bagh", "Kashmiri Handicraft Showroom"],
        overnight: "4-Star Hotel in Srinagar",
        meals: "Breakfast & Dinner Included",
      },
      {
        day: "Day 3",
        title: "Day Excursion to Gulmarg (Meadow of Flowers)",
        route: "Srinagar -> Gulmarg (50 km / 2 hrs)",
        description:
          "Drive through scenic willow trees and mustard fields to Gulmarg. Experience the world-famous Gulmarg Gondola (Cable Car)—one of the highest operating cable cars globally—taking you up to Phase 1 and Phase 2 for sweeping views of snow-clad Himalayan peaks. Return to Srinagar for dinner.",
        places: ["Gulmarg Gondola", "Kongdoori Peak", "Snow Meadows"],
        overnight: "4-Star Hotel in Srinagar",
        meals: "Breakfast & Dinner Included",
      },
      {
        day: "Day 4",
        title: "Srinagar to Kargil via Sonamarg & Zoji La Pass",
        route: "Srinagar -> Kargil (200 km / 7 hrs)",
        description:
          "Check out and journey towards Kargil, driving through Sonamarg (The Meadow of Gold). Cross rugged Zoji La Pass (11,575 ft) into the dramatic landscapes of Ladakh. Stop at the Kargil War Memorial in Drass (the second-coldest inhabited place in the world) to pay respects. Arrive in Kargil and check in.",
        places: ["Sonamarg", "Zoji La Pass", "Drass Kargil War Memorial"],
        overnight: "4-Star / Best Available Property in Kargil",
        meals: "Breakfast & Dinner Included",
      },
      {
        day: "Day 5",
        title: "Kargil to Leh via Lamayuru Monastery & Magnetic Hill",
        route: "Kargil -> Leh (215 km / 6 hrs)",
        description:
          "Depart towards Leh. Marvel at the surreal moon-like lunar landscape and ancient monastery at Lamayuru. Stop at the confluence of Indus and Zanskar rivers at Sangam, experience Magnetic Hill where vehicles appear to roll uphill, and visit Gurudwara Pathar Sahib before arriving in Leh.",
        places: ["Lamayuru Monastery", "Magnetic Hill", "Indus-Zanskar Sangam", "Gurudwara Pathar Sahib"],
        overnight: "4-Star Hotel in Leh",
        meals: "Breakfast & Dinner Included",
      },
      {
        day: "Day 6",
        title: "Leh Local Cultural Tour (Acclimatization Day)",
        route: "Leh City",
        description:
          "Mandatory rest and acclimatization to high altitude (~3,500m). In the late afternoon, visit the 17th-century Leh Palace and the iconic white-domed Shanti Stupa offering panoramic sunset views. Stroll through bustling Leh Bazaar for Tibetan handicrafts.",
        places: ["Leh Palace", "Shanti Stupa", "Leh Bazaar"],
        overnight: "4-Star Hotel in Leh",
        meals: "Breakfast & Dinner Included",
      },
      {
        day: "Day 7",
        title: "Leh to Nubra Valley via Khardung La Pass",
        route: "Leh -> Nubra Valley (130 km / 5 hrs)",
        description:
          "Drive across Khardung La Pass (17,582 ft), one of the world's highest motorable passes with breathtaking views of the Karakoram range. Descend into lush Nubra Valley. Visit historic Diskit Monastery with its 100-foot Maitreya Buddha, and head to Hunder for Bactrian camel rides among sand dunes.",
        places: ["Khardung La Pass", "Diskit Monastery", "Hunder Sand Dunes", "Bactrian Camels"],
        overnight: "Premium Luxury Camp / 4-Star Resort in Nubra Valley",
        meals: "Breakfast & Dinner Included",
      },
      {
        day: "Day 8",
        title: "Nubra Valley to Pangong Tso Lake via Shyok River",
        route: "Nubra -> Pangong Tso (165 km / 6 hrs)",
        description:
          "Drive along the scenic Shyok River route towards legendary high-altitude saltwater Pangong Tso Lake (13,940 ft). Arrive in time to witness its mesmerizing shifting hues of turquoise and deep blue. Enjoy stargazing under clear Himalayan skies.",
        places: ["Shyok River Route", "Pangong Tso Lake", "Lakeside Sunset"],
        overnight: "Premium Lakeview Camps / Cottages at Pangong Tso",
        meals: "Breakfast & Dinner Included",
      },
      {
        day: "Day 9",
        title: "Pangong Tso to Leh via Chang La Pass",
        route: "Pangong -> Leh (220 km / 7 hrs)",
        description:
          "Wake up to sunrise over Pangong Lake. After breakfast, drive back toward Leh crossing Chang La Pass (17,585 ft). Stop to explore the architectural marvels of Thiksey Monastery and Hemis Monastery before arriving back in Leh for your final evening.",
        places: ["Chang La Pass", "Thiksey Monastery", "Hemis Monastery"],
        overnight: "4-Star Hotel in Leh",
        meals: "Breakfast & Dinner Included",
      },
      {
        day: "Day 10",
        title: "Departure from Leh Airport",
        route: "Hotel -> Leh Airport (IXL)",
        description:
          "Enjoy a final Himalayan breakfast, check out, and receive a timely private transfer to Kushok Bakula Rimpochee Airport in Leh for your return flight.",
        places: ["Leh Airport Drop"],
        overnight: "Tour Ends",
        meals: "Breakfast at Hotel",
      },
    ],
    packageInclusions: [
      "Accommodation: 9 Nights handpicked stays (1N Dal Lake Houseboat, 4N 4-Star Hotels in Srinagar, Kargil & Leh, 2N Luxury Swiss Camps in Nubra & Pangong).",
      "Meals: Daily Breakfast and Dinner (MAP Meal Plan) served at all hotels and camps.",
      "Transportation: Dedicated private SUV (Toyota Innova Crysta) with high-altitude mountain driver for 10 days.",
      "Special Permits: All restricted area permits (PAP) and environmental fees for Ladakh and Nubra/Pangong sectors.",
      "Activities: 1-hour private Shikara ride on Dal Lake in Srinagar.",
      "Medical Support: Emergency oxygen cylinder kept inside the vehicle throughout the Ladakh leg.",
    ],
    packageExclusions: [
      "International or domestic flights to Srinagar and out of Leh.",
      "Gulmarg Gondola tickets (Phase 1 & Phase 2 must be pre-booked online).",
      "Monument, museum, and monastery entrance fees.",
      "Optional activities such as Bactrian camel rides in Hunder or pony rides.",
      "Lunches, personal beverages, snacks, laundry, and tips.",
      "Travel insurance and medical evacuation costs.",
    ],
    importantNotes: [
      "Minimum 2 people required. Non-peak dates quote.",
      "Acclimatization rest in Leh is strictly advised to avoid Acute Mountain Sickness (AMS).",
      "Carry valid photo ID (Passport / Voter ID / Aadhaar) for checkpoint verification.",
    ],
  },

  // 7. KERALA BACKWATERS & MUNNAR (EXISTING ENHANCED)
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
    image: "/dest-kerala-munnar-alleppey.jpg",
    highlights: ["Overnight Luxury Houseboat", "Tea Garden Walks in Munnar", "Periyar Spice & Wildlife Cruise", "Kathakali Cultural Evening"],
    theme: "Honeymoon",
    bestTimeToVisit: "Sep to Mar",
    inclusions: ["4-Star Resorts & Houseboat", "Breakfast & Dinners", "Private AC Cab", "Sightseeing Passes"],
    overview:
      "Drift along the emerald lagoons of Alleppey in a private luxury houseboat and breathe the crisp mountain air among Munnar's rolling tea estates. Complete with aromatic spice walks in Thekkady and Kathakali cultural performances.",
    guests: "2 Adults",
    hotelCategory: "4-Star Resorts & Gold-Palm Houseboat",
    mealPlan: "Breakfast & Dinners (Full Board on Houseboat)",
    transportation: "Private AC Sedan / SUV",
    pickupDrop: "Cochin Airport (COK) In / Out",
    itinerary: [
      { day: "Day 1", title: "Cochin Arrival & Scenic Drive to Munnar", description: "Arrive at Cochin Airport or Ernakulam Station. Drive through the Western Ghats past Cheeyappara Waterfalls to Munnar. Check in to your resort." },
      { day: "Day 2", title: "Munnar Tea Hills & Eravikulam National Park", description: "Visit Eravikulam National Park to spot Nilgiri Tahr, tour the Tata Tea Museum, and take a photo stop at Mattupetty Dam and Echo Point." },
      { day: "Day 3", title: "Munnar to Thekkady Spice Sanctuary", description: "Scenic drive to Thekkady. Take a guided spice plantation tour and watch an authentic Kalaripayattu martial arts show in the evening." },
      { day: "Day 4", title: "Thekkady to Alleppey Houseboat Cruise", description: "Drive to Alleppey and board your private traditional Kettuvallam houseboat. Cruise emerald backwaters with all meals prepared on-board by your private chef." },
      { day: "Day 5", title: "Alleppey Backwaters & Marari Beach Sunset", description: "Disembark and visit picturesque Marari Beach for a serene coastal sunset. Overnight in a heritage beach resort." },
      { day: "Day 6", title: "Fort Kochi Heritage & Departure", description: "Visit the iconic Chinese Fishing Nets and St. Francis Church in Fort Kochi before transfer to Cochin Airport." },
    ],
    packageInclusions: [
      "5 Nights accommodation in 4-Star resorts and private luxury Alleppey houseboat.",
      "Daily breakfast and dinner; all meals included on the houseboat.",
      "Dedicated AC private car for all transfers and sightseeing.",
      "Spice plantation entry voucher and Kathakali show tickets.",
    ],
    packageExclusions: ["Airfare/train fare", "Lunches outside houseboat", "Personal expenses and tips", "GST 5%"],
  },

  // 8. ROYAL RAJASTHAN (EXISTING ENHANCED)
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
    image: "/dest-udaipur.jpg",
    highlights: ["Amer Fort Elephant View", "Sunset Boat Ride on Lake Pichola", "Mehrangarh Fort Tour", "Chokhi Dhani Heritage Dinner"],
    theme: "Heritage",
    bestTimeToVisit: "Oct to Mar",
    inclusions: ["Heritage Havelis & 4-Star Stays", "Breakfast Buffet", "Chauffeur Driven AC Sedan", "Expert Monument Guides"],
    overview:
      "A grand royal loop through Rajasthan's fabled kingdoms: the Pink City of Jaipur, the Blue City of Jodhpur, and the romantic lake palaces of Udaipur.",
    guests: "2 Adults",
    hotelCategory: "Heritage Havelis & 4-Star Hotels",
    mealPlan: "Daily Breakfast Buffet",
    transportation: "Private Chauffeur-driven AC Sedan",
    pickupDrop: "Jaipur Airport In / Udaipur Airport Out",
    itinerary: [
      { day: "Day 1", title: "Jaipur Arrival & Pink City Markets", description: "Meet your chauffeur in Jaipur. Evening visit to Birla Temple and colorful local bazaars." },
      { day: "Day 2", title: "Jaipur Forts & Palaces", description: "Explore Amer Fort, Jal Mahal, City Palace, Hawa Mahal, and Jantar Mantar observatory." },
      { day: "Day 3", title: "Jaipur to Jodhpur via Pushkar", description: "Drive to Jodhpur with a stop at sacred Brahma Temple and holy Lake in Pushkar. Check in to Jodhpur haveli." },
      { day: "Day 4", title: "Mehrangarh Fort & Jaswant Thada", description: "Visit the impregnable Mehrangarh Fort overlooking the blue houses, and Jaswant Thada cenotaphs." },
      { day: "Day 5", title: "Jodhpur to Udaipur via Ranakpur", description: "Drive to Udaipur, stopping to marvel at the 1,444 intricately carved pillars of Ranakpur Jain Temple." },
      { day: "Day 6", title: "Udaipur City Palace & Lake Pichola Cruise", description: "Tour City Palace, Saheliyon-ki-Bari, Jagdish Temple, and take a sunset boat ride on Lake Pichola." },
      { day: "Day 7", title: "Departure from Udaipur", description: "Check out and transfer to Udaipur Airport for your onward flight." },
    ],
    packageInclusions: ["6 Nights heritage accommodation", "Daily breakfast buffet", "Dedicated AC vehicle with chauffeur", "Interstate tolls and parking"],
    packageExclusions: ["Flights/trains", "Monument entry tickets", "Personal expenses", "GST 5%"],
  },

  // 9. MYSTIC LADAKH (EXISTING ENHANCED)
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
    image: "/dest-ladakh-pangong-nubra.jpg",
    highlights: ["Khardung La Top Drive", "Bactrian Camel Safari at Hunder", "Camp Under Milky Way at Pangong", "Ancient Diskit & Thiksey Gompas"],
    theme: "Adventure",
    bestTimeToVisit: "May to Sep",
    inclusions: ["Deluxe Hotel + Swiss Tents", "All Meals (Breakfast & Dinner)", "Oxygen Fitted SUV", "Inner Line Permits"],
    overview:
      "A thrilling 7-day high-altitude expedition across Ladakh's iconic sights: Khardung La Pass, the sand dunes of Nubra, Turtuk Balti village, and starry nights by Pangong Tso.",
    guests: "2 Adults",
    hotelCategory: "Deluxe Hotels & Swiss Camps",
    mealPlan: "MAP (Breakfast & Dinner)",
    transportation: "Dedicated SUV with mountain driver",
    pickupDrop: "Leh Airport (IXL) In / Out",
    itinerary: [
      { day: "Day 1", title: "Leh Arrival & Mandatory Acclimatization", description: "Land at Leh Airport. Check in and rest all day to adjust to 11,500 ft altitude. Evening visit to Shanti Stupa." },
      { day: "Day 2", title: "Sham Valley & Monasteries", description: "Visit Hall of Fame, Magnetic Hill, confluence of Indus and Zanskar rivers, and Spituk Gompa." },
      { day: "Day 3", title: "Leh to Nubra Valley via Khardung La", description: "Cross Khardung La at 17,582 ft. Visit Diskit Monastery and ride camels at Hunder sand dunes." },
      { day: "Day 4", title: "Day Trip to Turtuk Village", description: "Excursion to Turtuk, one of the northernmost villages in India, known for apricot orchards and Balti culture." },
      { day: "Day 5", title: "Nubra to Pangong Tso Lake via Shyok", description: "Scenic drive along Shyok River to Pangong Tso. Stargazing overnight at luxury lakeside camp." },
      { day: "Day 6", title: "Pangong to Leh via Chang La", description: "Sunrise at the lake, cross Chang La Pass (17,585 ft), stop at Thiksey Monastery, return to Leh." },
      { day: "Day 7", title: "Departure from Leh", description: "Transfer to Leh Airport for your return flight." },
    ],
    packageInclusions: ["6 Nights stays (hotel + luxury Swiss tents)", "Daily breakfast and dinner", "SUV transportation", "Inner Line Permits and environmental fees"],
    packageExclusions: ["Flights to/from Leh", "Camel ride / personal expenses", "GST 5%"],
  },

  // 10. KASHMIR PARADISE (EXISTING ENHANCED)
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
    overview:
      "Immerse yourself in Kashmir's legendary charm: staying on a heritage Dal Lake houseboat, riding the Gulmarg cable car up to the snowline, and walking through Pahalgam's pine valleys.",
    guests: "2 Adults",
    hotelCategory: "4-Star Hotels & Deluxe Houseboat",
    mealPlan: "MAP (Breakfast & Dinner)",
    transportation: "Dedicated Tourist Cab with Chauffeur",
    pickupDrop: "Srinagar Airport (SXR) In / Out",
    itinerary: [
      { day: "Day 1", title: "Srinagar Arrival & Dal Lake Shikara", description: "Traditional welcome at Srinagar Airport, check into a heritage houseboat, evening sunset Shikara cruise." },
      { day: "Day 2", title: "Mughal Gardens & Shankaracharya Temple", description: "Explore Nishat Bagh, Shalimar Bagh, Chashme Shahi, and historic Shankaracharya Temple overlooking the valley." },
      { day: "Day 3", title: "Day Excursion to Gulmarg", description: "Drive to Gulmarg, ride the famous Gondola cable car up to snow peaks, return to Srinagar in evening." },
      { day: "Day 4", title: "Srinagar to Pahalgam (Valley of Shepherds)", description: "Drive to Pahalgam passing saffron fields. Explore Betaab Valley, Aru Valley, and Chandanwari." },
      { day: "Day 5", title: "Pahalgam Pine Walks & Return to Srinagar", description: "Enjoy nature walks along the Lidder River before driving back to Srinagar for shopping." },
      { day: "Day 6", title: "Departure from Srinagar", description: "Transfer to Srinagar Airport for your flight home." },
    ],
    packageInclusions: ["1N Houseboat + 4N Hotel stays", "Breakfast and dinner daily", "Private tourist cab", "Shikara ride voucher"],
    packageExclusions: ["Flights", "Gondola tickets", "Pahalgam union cab", "GST 5%"],
  },

  // 11. ANDAMAN EXOTIC (EXISTING ENHANCED)
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
    overview:
      "Turquoise seas, powder-white sands, and vibrant coral gardens. Island-hop across Port Blair, Havelock, and Neil with luxury catamaran ferry bookings and beachfront stays.",
    guests: "2 Adults",
    hotelCategory: "4-Star Beachfront Resorts",
    mealPlan: "Daily Breakfast",
    transportation: "Private AC Vehicle + High-Speed Catamaran Ferries",
    pickupDrop: "Port Blair Airport (IXZ) In / Out",
    itinerary: [
      { day: "Day 1", title: "Port Blair Arrival & Cellular Jail Light & Sound", description: "Arrive at Port Blair. Check in to your resort, visit historic Cellular Jail and witness its poignant Light & Sound show." },
      { day: "Day 2", title: "Ferry to Havelock & Radhanagar Beach Sunset", description: "Board high-speed Makruzz ferry to Havelock Island. Spend the evening at world-renowned Radhanagar Beach." },
      { day: "Day 3", title: "Elephant Beach Coral Snorkeling & Water Sports", description: "Speedboat excursion to Elephant Beach for snorkeling, sea walks, and coral watching." },
      { day: "Day 4", title: "Havelock to Neil Island & Bharatpur Beach", description: "Ferry to Neil Island. Visit Bharatpur Beach for shallow waters and Laxmanpur Beach for sunset." },
      { day: "Day 5", title: "Natural Rock Bridge & Return to Port Blair", description: "Visit the iconic Natural Rock Formation at Neil, then take the ferry back to Port Blair." },
      { day: "Day 6", title: "Departure from Port Blair", description: "Transfer to Veer Savarkar Airport for your return flight." },
    ],
    packageInclusions: ["5 Nights in beach resorts", "Daily breakfast", "Catamaran ferry tickets (Makruzz/Nautika)", "Private cab for island transfers"],
    packageExclusions: ["Flights to Port Blair", "Water sports (Scuba/Sea walk)", "Personal expenses", "GST 5%"],
  },

  // 12. VARANASI SPIRITUAL (EXISTING ENHANCED)
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
    overview:
      "Experience the world's oldest living city. From the evening Ganga Aarti and dawn boat cruises on the sacred river to the Kashi Vishwanath temple corridor and the deer park at Sarnath.",
    guests: "2 Adults",
    hotelCategory: "Heritage Boutique Hotel",
    mealPlan: "Breakfast & Food Walk",
    transportation: "Private AC Cab & Private Boat",
    pickupDrop: "Varanasi Airport (VNS) / Cantt Station In / Out",
    itinerary: [
      { day: "Day 1", title: "Varanasi Arrival & Evening Dashashwamedh Aarti", description: "Arrive in Varanasi. Evening private boat ride to witness the grand Ganga Aarti ceremony from the water." },
      { day: "Day 2", title: "Dawn Subah-e-Banaras Boat & Kashi Vishwanath", description: "Sunrise boat cruise along sacred ghats. Visit Kashi Vishwanath Golden Temple, Annapurna, and Vishalakshi temples." },
      { day: "Day 3", title: "Sarnath Buddhist Trail & Silk Weaving Walk", description: "Excursion to Sarnath where Buddha gave his first sermon. Tour Dhamek Stupa, Archaeological Museum, and Banarasi silk weavers." },
      { day: "Day 4", title: "Departure from Varanasi", description: "After breakfast, transfer to Varanasi Airport for onward journey." },
    ],
    packageInclusions: ["3 Nights boutique heritage stay", "Daily breakfast", "Private morning and evening boat cruises", "All transfers"],
    packageExclusions: ["Flights/trains", "Temple donation fees", "Personal expenses", "GST 5%"],
  },

  // 13. HIMACHAL SHIMLA & MANALI (EXISTING ENHANCED)
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
    image: "/dest-himachal-escapade.jpg",
    highlights: ["Solang Valley Adventure Sports", "Atal Tunnel & Sissu Day Trip", "Mall Road & Jakhu Temple in Shimla", "River Rafting at Kullu"],
    theme: "Family",
    bestTimeToVisit: "Mar to Jun & Dec to Feb",
    inclusions: ["Cozy Mountain View Resorts", "Daily Breakfast & Dinner", "Dedicated Sedan/SUV", "All State Tolls & Taxes"],
    overview:
      "The classic Himachal getaway combining the pine ridges of colonial Shimla with the adventure thrills of Manali, Solang Valley, and the Atal Tunnel.",
    guests: "2 Adults",
    hotelCategory: "4-Star Mountain Resorts",
    mealPlan: "MAP (Breakfast & Dinner)",
    transportation: "Dedicated AC Sedan/SUV with Driver",
    pickupDrop: "Delhi / Chandigarh In / Out",
    itinerary: [
      { day: "Day 1", title: "Delhi/Chandigarh to Shimla Drive", description: "Scenic mountain drive up the Shivalik foothills to Shimla. Evening stroll on Mall Road." },
      { day: "Day 2", title: "Shimla & Kufri Sightseeing", description: "Explore the Himalayan Nature Park at Kufri, Christ Church, and The Ridge." },
      { day: "Day 3", title: "Shimla to Manali via Kullu Valley", description: "Drive through Kullu Valley along the Beas River. Visit apple orchards and Kullu shawl workshops." },
      { day: "Day 4", title: "Solang Valley & Atal Tunnel Adventure", description: "Excursion to Solang Valley for ropeway, paragliding, and optional drive through Atal Tunnel." },
      { day: "Day 5", title: "Manali Local Sightseeing", description: "Visit Hadimba Temple, Vashisht Hot Springs, Tibetan Monastery, and Old Manali cafes." },
      { day: "Day 6", title: "Manali to Chandigarh/Delhi Drop", description: "Return drive descending the hills to Chandigarh or Delhi for your onward trip." },
    ],
    packageInclusions: ["5 Nights hotel stays", "Breakfast and dinner daily", "Dedicated vehicle", "Tolls and driver allowance"],
    packageExclusions: ["Adventure sports fees", "Monument tickets", "GST 5%"],
  },

  // 14. MEGHALAYA (EXISTING ENHANCED)
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
    overview:
      "Journey into the abode of clouds. Walk on ancient bio-engineered living root bridges, gaze upon India's tallest plunge waterfalls at Nohkalikai, and boat on the mirror-clear waters of the Umngot River in Dawki.",
    guests: "2 Adults",
    hotelCategory: "Eco-Luxury Cottages & 4-Star Stays",
    mealPlan: "Daily Breakfast",
    transportation: "Private SUV with Local Hill Driver",
    pickupDrop: "Guwahati Airport (GAU) In / Out",
    itinerary: [
      { day: "Day 1", title: "Guwahati to Shillong via Umiam Lake", description: "Meet driver at Guwahati Airport. Stop at picturesque Umiam Lake before reaching Shillong." },
      { day: "Day 2", title: "Shillong to Cherrapunji Waterfalls", description: "Drive to Cherrapunji. Visit Elephant Falls, roaring Nohkalikai Falls, and Mawsmai limestone cave." },
      { day: "Day 3", title: "Double Decker Living Root Bridge Trek", description: "Guided trek into the rainforest to witness the marvel of living bio-engineered root bridges." },
      { day: "Day 4", title: "Mawlynnong Clean Village & Dawki Clear Waters", description: "Visit Mawlynnong (Asia's cleanest village) and enjoy boating on crystal-clear Umngot River in Dawki." },
      { day: "Day 5", title: "Shillong to Guwahati Departure", description: "Visit Kamakhya Temple in Guwahati before transfer to Guwahati Airport." },
    ],
    packageInclusions: ["4 Nights in eco-luxury cottages", "Daily breakfast", "Private SUV throughout", "Guide fees for Root Bridge"],
    packageExclusions: ["Flights", "Boating fees at Dawki", "Personal expenses", "GST 5%"],
  },
];
