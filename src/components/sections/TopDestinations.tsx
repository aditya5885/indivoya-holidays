"use client";

import Image from "next/image";
import { useRef } from "react";
import { PLACES, TOP_PLACES } from "@/data/home";
import styles from "./TopDestinations.module.css";

export default function TopDestinations() {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 420), behavior: "smooth" });
  };

  return (
    <section className={styles.section} id="packages" aria-labelledby="top-title">
      <div className="container">
        <header className={`${styles.head} rise`}>
          <div>
            <span className={styles.pill}>Best Places Near You</span>
            <h2 id="top-title" className={styles.title}>
              Explore Top <span data-slot="italic">Destinations</span>
            </h2>
          </div>
          <div className={styles.arrows}>
            <button type="button" aria-label="Previous destinations" onClick={() => scroll(-1)} className={styles.arrow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M10.5 4.5 3 12l7.5 7.5M3 12h18" />
              </svg>
            </button>
            <button type="button" aria-label="Next destinations" onClick={() => scroll(1)} className={styles.arrow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </header>
      </div>

      <div ref={track} className={styles.track} tabIndex={0} aria-label="Top destinations carousel">
        <div className={styles.spacer} aria-hidden />
        {TOP_PLACES.map((key) => {
          const p = PLACES[key];
          return (
            <a href="#adventure" key={key} className={styles.card}>
              <Image src={p.src} alt={`${p.name}, ${p.state}`} fill sizes="(max-width: 700px) 80vw, 30vw" className={styles.img} />
              <div className={styles.shade} aria-hidden />
              <div className={styles.label}>
                <div>
                  <strong>{p.name}</strong>
                  <small>
                    {p.state} · from {p.from}
                  </small>
                </div>
                <span className={styles.go} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </span>
              </div>
            </a>
          );
        })}
        <div className={styles.spacer} aria-hidden />
      </div>
    </section>
  );
}
