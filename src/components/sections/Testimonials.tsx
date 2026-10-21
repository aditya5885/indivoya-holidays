"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Testimonials.module.css";

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  company?: string;
  location?: string;
  category?: string;
  rating: number;
  tourName: string;
  review: string;
  date: string;
  verified: boolean;
};

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Ramakrishnan & Family",
    role: "Family Vacationers",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    tourName: "Kerala Backwaters & Munnar Circuit",
    review:
      "Before Indivoya our family vacations across India were chaotic and spent negotiating with multiple agents. Now we get 100% custom day-by-day itineraries with verified stays and dedicated chauffeur guides on call. In my 10 years of domestic travel, I have never experienced such transparent and attentive care.",
    date: "October 2026",
    verified: true,
  },
  {
    id: "test-2",
    name: "Devika Shenoy",
    role: "Adventure Enthusiast",
    location: "Bengaluru, Karnataka",
    rating: 5,
    tourName: "Ladakh High Passes & Pangong Expedition",
    review:
      "Most tour operators just push cookie-cutter packages. Indivoya’s local ground experts in Leh & Meghalaya actually tailored every single altitude stop to our pace and secured permits seamlessly. It is the only travel companion worth booking with when heading off the beaten track.",
    date: "September 2026",
    verified: true,
  },
  {
    id: "test-3",
    name: "Rahul & Haripriya",
    role: "Honeymoon Couple",
    location: "Mumbai, Maharashtra",
    rating: 5,
    tourName: "Royal Rajasthan Heritage Tour",
    review:
      "Indivoya cut our honeymoon planning stress by up to 95%. Within 2 hours of sharing our budget, we had a bespoke royal haveli stay, private lake boat and vintage desert safari ready to go. Every transfer and dinner reservation felt bespoke and hyper-personalized.",
    date: "September 2026",
    verified: true,
  },
];

export default function Testimonials() {
  const [list, setList] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setList(data.data.slice(0, 6));
        }
      })
      .catch((err) => {
        console.error("Testimonials load error:", err);
      });
  }, []);

  const themeClasses = [styles.theme_green, styles.theme_purple, styles.theme_slate];

  return (
    <section className={styles.section} id="testimonials" aria-labelledby="testi-title">
      <div className="container">
        <header className={`${styles.head} rise`}>
          <span className={styles.eyebrow}>Traveler Stories</span>
          <h2 id="testi-title" className={styles.title}>
            Loved by <span data-slot="italic">Curious Explorers</span>
          </h2>
          <p className={styles.sub}>
            Real experiences from travelers and travel partners who discovered the authentic colors of India with us.
          </p>
        </header>

        <div className={styles.grid}>
          {list.map((t, idx) => {
            const themeClass = themeClasses[idx % themeClasses.length];
            return (
              <article key={t.id || idx} className={`${styles.card} ${themeClass}`}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <div className={styles.quoteIcon} aria-hidden>
                    “
                  </div>
                  <div style={{ color: "#f59e0b", fontSize: "0.95rem", letterSpacing: "2px" }} aria-label={`${t.rating} stars`}>
                    {"★".repeat(t.rating || 5)}
                  </div>
                </div>

                <p className={styles.quote}>
                  {t.review}
                </p>

                <footer className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorHeader}>
                      <strong className={styles.name}>{t.name}</strong>
                      {t.verified && <span className={styles.verifiedBadge}>Verified Guest</span>}
                    </div>
                    <span className={styles.role}>
                      {t.role || "Traveler"}{t.location ? ` · ${t.location}` : ""}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--green-950)", fontWeight: 600, marginTop: "2px" }}>
                      Circuit: {t.tourName}
                    </span>
                  </div>
                </footer>
              </article>
            );
          })}
        </div>

        {/* Admin Desk Link Button */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link
            href="/admin/testimonials"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "999px",
              background: "#ffffff",
              border: "1px solid rgba(18, 32, 26, 0.12)",
              color: "var(--green-950)",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
              transition: "all 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            <span>Testimonial Manager Desk (Admin)</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
