"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SubNav from "@/components/layout/SubNav";
import Footer from "@/components/sections/Footer";
import { TOUR_PACKAGES } from "@/data/pagesData";
import styles from "./packages.module.css";

const THEMES = [
  "All",
  "Heritage",
  "Grand Tour",
  "Adventure",
  "Nature",
  "Family",
  "Honeymoon",
  "Spiritual",
] as const;

export default function PackagesPage() {
  const [selectedTheme, setSelectedTheme] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = TOUR_PACKAGES.filter((pkg) => {
    const matchesTheme = selectedTheme === "All" || pkg.theme === selectedTheme;
    const matchesQuery =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTheme && matchesQuery;
  });

  return (
    <>
      <SubNav currentPath="/packages" />
      <main className={styles.main}>
        {/* Header */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>Curated Holiday Collections</span>
            <h1 className={styles.title}>
              Explore Handcrafted <span data-slot="italic">India Tour Packages</span>
            </h1>
            <p className={styles.lead}>
              Private cars, handpicked luxury boutique stays, and dedicated trip experts. Choose your dream holiday or
              customize any plan to your preferences.
            </p>

            {/* Filter & Search Bar */}
            <div className={styles.filterBar}>
              <div className={styles.searchBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search destination (Hyderabad, Rajasthan, Kashmir, Ladakh, Sikkim...)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.themePills} role="tablist" aria-label="Filter packages by theme">
                {THEMES.map((theme) => (
                  <button
                    key={theme}
                    type="button"
                    className={`${styles.themeBtn} ${selectedTheme === theme ? styles.activeTheme : ""}`}
                    onClick={() => setSelectedTheme(theme)}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className={styles.gridSection}>
          <div className="container">
            <div className={styles.resultsCount}>
              Showing <strong>{filtered.length}</strong> handcrafted holiday packages
            </div>

            <div className={styles.grid}>
              {filtered.map((pkg) => (
                <article key={pkg.id} className={styles.card}>
                  <Link href={`/packages/${pkg.slug}`} className={styles.imageWrap}>
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.img}
                    />
                    <span className={styles.themeTag}>{pkg.theme}</span>
                    <span className={styles.durationTag}>{pkg.duration}</span>
                  </Link>

                  <div className={styles.cardBody}>
                    <div className={styles.location}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                      </svg>
                      {pkg.destination} · {pkg.state}
                    </div>

                    <Link href={`/packages/${pkg.slug}`} className={styles.titleLink}>
                      <h3 className={styles.pkgTitle}>{pkg.title}</h3>
                    </Link>

                    <div className={styles.ratingBar}>
                      <span className={styles.star}>★ {pkg.rating}</span>
                      <span className={styles.reviews}>({pkg.reviewsCount} verified reviews)</span>
                      <span className={styles.season}>Best: {pkg.bestTimeToVisit}</span>
                    </div>

                    <ul className={styles.highlights}>
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>

                    <div className={styles.cardFooter}>
                      <div className={styles.priceCol}>
                        <span className={styles.priceLabel}>Starting from</span>
                        <div className={styles.priceVal}>
                          {pkg.price} <small>/ person</small>
                        </div>
                      </div>
                      <div className={styles.actionsGroup}>
                        <Link href={`/packages/${pkg.slug}`} className={styles.viewBtn}>
                          Itinerary →
                        </Link>
                        <Link href={`/contact?package=${encodeURIComponent(pkg.title)}`} className={styles.bookBtn}>
                          Inquire
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

