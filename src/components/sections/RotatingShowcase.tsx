"use client";

import { useState } from "react";
import {
  PalmIcon,
  MountainIcon,
  CastleIcon,
  BoatIcon,
  WaveIcon,
  TreeIcon,
  SunIcon,
  CompassIcon,
  CloudRainIcon,
  SparklesIcon,
} from "@/components/icons";
import styles from "./RotatingShowcase.module.css";

type DestinationNode = {
  id: string;
  name: string;
  state: string;
  tagline: string;
  icon: typeof PalmIcon;
  badge: string;
  highlight: string;
  accent: string;
  image: string;
  toursCount: number;
};

const DESTINATIONS: DestinationNode[] = [
  {
    id: "kerala",
    name: "Kerala Backwaters",
    state: "God's Own Country",
    tagline: "Glide past palm canopies on private kettuvallams & aroma-filled spice ridges.",
    icon: PalmIcon,
    badge: "Houseboats & Wellness",
    highlight: "Alleppey Houseboat · Munnar Tea Gardens",
    accent: "#059669",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop&q=80",
    toursCount: 14,
  },
  {
    id: "ladakh",
    name: "Ladakh High Passes",
    state: "Land of High Passes",
    tagline: "Cross Khardung La at 17,982 ft and stargaze over turquoise Pangong Tso.",
    icon: MountainIcon,
    badge: "High Altitude Safari",
    highlight: "Nubra Valley · Khardung La · Pangong Lake",
    accent: "#0284c7",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=600&auto=format&fit=crop&q=80",
    toursCount: 9,
  },
  {
    id: "rajasthan",
    name: "Royal Rajasthan",
    state: "Land of Kings",
    tagline: "Amber sandstone palaces, desert stargazing camps and Rajputana hospitality.",
    icon: CastleIcon,
    badge: "Heritage Havelis",
    highlight: "Amer Fort · Udaipur Lake Palace · Thar Dunes",
    accent: "#ea580c",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&auto=format&fit=crop&q=80",
    toursCount: 18,
  },
  {
    id: "kashmir",
    name: "Kashmir Valley",
    state: "Paradise on Earth",
    tagline: "Glide through Dal Lake on carved pine shikaras amidst snow-capped Pir Panjal.",
    icon: BoatIcon,
    badge: "Alpine Romance",
    highlight: "Dal Lake Shikara · Gulmarg Gondola · Pahalgam",
    accent: "#0d9488",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&auto=format&fit=crop&q=80",
    toursCount: 11,
  },
  {
    id: "goa",
    name: "Goa Coastlines",
    state: "Sunny Coast & Heritage",
    tagline: "Portuguese architecture, private sunset catamarans and hidden spice plantations.",
    icon: WaveIcon,
    badge: "Coastal Serenity",
    highlight: "Fontainhas Latin Quarter · Palolem Bay",
    accent: "#f59e0b",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&auto=format&fit=crop&q=80",
    toursCount: 8,
  },
  {
    id: "himachal",
    name: "Himachal Pine Trails",
    state: "Himachal Pradesh",
    tagline: "Crisp cedar forests, colonial wooden chalets and rugged Spiti moonscapes.",
    icon: TreeIcon,
    badge: "Mountain Hideaways",
    highlight: "Spiti Monastery · Manali Solang · Shimla Mall",
    accent: "#16a34a",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop&q=80",
    toursCount: 15,
  },
  {
    id: "varanasi",
    name: "Varanasi Ghats",
    state: "The Eternal City",
    tagline: "Evening Ganga Aarti bells, boat rides at dawn and centuries of living traditions.",
    icon: SunIcon,
    badge: "Spiritual Heart",
    highlight: "Dashashwamedh Aarti · Sarnath Stupa",
    accent: "#dc2626",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&auto=format&fit=crop&q=80",
    toursCount: 7,
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    state: "Bay of Bengal",
    tagline: "Pristine Radhanagar white sands, scuba coral gardens and bioluminescent bays.",
    icon: CompassIcon,
    badge: "Island Escapes",
    highlight: "Havelock Island · Elephant Beach Reef",
    accent: "#06b6d4",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&auto=format&fit=crop&q=80",
    toursCount: 6,
  },
  {
    id: "meghalaya",
    name: "Meghalaya Clouds",
    state: "Abode of Clouds",
    tagline: "Walk ancient double-decker living root bridges and swim in transparent Dawki waters.",
    icon: CloudRainIcon,
    badge: "Untouched Nature",
    highlight: "Living Root Bridges · Dawki River · Nohkalikai",
    accent: "#6366f1",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
    toursCount: 8,
  },
  {
    id: "sikkim",
    name: "Sikkim & Darjeeling",
    state: "Eastern Himalayas",
    tagline: "Golden dawn over Kanchenjunga, mist-kissed tea estates and ancient gompas.",
    icon: SparklesIcon,
    badge: "Himalayan Vistas",
    highlight: "Kanchenjunga Dawn · Glenburn Tea Trails",
    accent: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
    toursCount: 10,
  },
];

export default function RotatingShowcase() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = DESTINATIONS[selectedIdx];
  const CurrentIcon = current.icon;

  return (
    <section className={styles.section} aria-labelledby="showcase-title">
      <div className={`container ${styles.grid}`}>
        {/* Left Side: Dynamic Live Region Showcase Card */}
        <div className={styles.detailCol}>
          <span className={styles.eyebrow}>Interactive Destination Map</span>
          <h2 id="showcase-title" className={styles.title}>
            Live Circuit Explorer <span data-slot="italic">by Indivoya</span>
          </h2>
          <p className={styles.lead}>
            Click on any orbit node to preview hand-curated itineraries, verified chauffeur networks, and seasonal recommendations.
          </p>

          {/* Interactive Feature Card that reacts to the active node */}
          <div className={styles.activeCard} style={{ "--accent": current.accent } as React.CSSProperties}>
            <div className={styles.cardHeader}>
              <div className={styles.badgeRow}>
                <span className={styles.tag}>{current.badge}</span>
                <span className={styles.counter}>{current.toursCount} Available Packages</span>
              </div>
              <h3 className={styles.cardTitle}>{current.name}</h3>
              <p className={styles.cardState}>{current.state}</p>
            </div>

            <p className={styles.tagline}>{current.tagline}</p>

            <div className={styles.circuitHighlight}>
              <div className={styles.circuitDot} />
              <div>
                <strong>Key Highlights</strong>
                <span>{current.highlight}</span>
              </div>
            </div>

            <div className={styles.cardFoot}>
              <a href="#packages" className={styles.exploreBtn}>
                Explore {current.name.split(" ")[0]} Packages →
              </a>
              <span className={styles.instantQuote}>Customized in 2 hours</span>
            </div>
          </div>
        </div>

        {/* Right Side: High-Tech Orbit Dial with Vector Icons & Pulsing Ring */}
        <div className={styles.orbitCol}>
          <div className={styles.orbitContainer}>
            {/* Ambient Background Aura */}
            <div
              className={styles.ambientAura}
              style={{ background: `radial-gradient(circle, ${current.accent}25 0%, transparent 70%)` }}
            />

            {/* Orbit track ring with pulse animation */}
            <div className={styles.orbitRing} />
            <div className={styles.orbitRingOuter} />

            {/* Center Core Display with active icon and smooth feedback */}
            <div className={styles.centerBadge}>
              <div className={styles.centerIconWrap} style={{ color: current.accent, background: `${current.accent}14` }}>
                <CurrentIcon width={28} height={28} />
              </div>
              <span className={styles.centerSub}>ACTIVE REGION</span>
              <strong className={styles.centerName}>{current.name}</strong>
              <small className={styles.centerHint}>Click any node to switch</small>
            </div>

            {/* Rotating Orbit Wheel */}
            <div className={styles.wheel}>
              {DESTINATIONS.map((item, index) => {
                const total = DESTINATIONS.length;
                const angle = (index / total) * 360;
                const isSelected = index === selectedIdx;
                const IconComponent = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.satellite} ${isSelected ? styles.satelliteActive : ""}`}
                    style={{
                      transform: `rotate(${angle}deg) translate(var(--orbit-radius, 185px)) rotate(-${angle}deg)`,
                      "--node-color": item.accent,
                    } as React.CSSProperties}
                    onClick={() => setSelectedIdx(index)}
                    aria-label={`Select ${item.name}`}
                  >
                    <span className={styles.iconCircle}>
                      <IconComponent width={20} height={20} />
                    </span>
                    <span className={styles.tooltip}>{item.name.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
