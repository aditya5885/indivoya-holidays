"use client";

import Image from "next/image";
import { useState } from "react";
import { FEATURED_TABS, PLACES } from "@/data/home";
import styles from "./Featured.module.css";

export default function Featured() {
  const [active, setActive] = useState(FEATURED_TABS[0].id);
  const tab = FEATURED_TABS.find((t) => t.id === active) ?? FEATURED_TABS[0];

  return (
    <section className={styles.section} id="destinations" aria-labelledby="featured-title">
      <div className="container">
        <header className={`${styles.head} rise`}>
          <h2 id="featured-title" className={styles.title}>
            Featured <span data-slot="italic">Destinations</span>
          </h2>
          <p className={styles.sub}>Hand-picked journeys across every corner of incredible India.</p>

          <div className={styles.tabs} role="tablist" aria-label="Destination categories">
            {FEATURED_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={t.id === active}
                aria-controls="featured-panel"
                className={`${styles.tab} ${t.id === active ? styles.tabActive : ""}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </header>

        <div
          key={tab.id}
          id="featured-panel"
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          className={styles.grid}
        >
          {tab.places.map((key, i) => {
            const p = PLACES[key];
            return (
              <a href="#packages" key={key} className={styles.card} style={{ "--i": i } as React.CSSProperties}>
                <div className={styles.frame}>
                  <Image src={p.src} alt={`${p.name}, ${p.state}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" className={styles.img} />
                  <span className={styles.badge}>{p.tours} tours</span>
                </div>
                <h3 className={styles.name}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                  {p.name}, {p.state}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
