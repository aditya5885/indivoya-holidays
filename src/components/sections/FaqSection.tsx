"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FaqSection.module.css";

type TabKey = "general" | "how" | "custom";

const FAQS: Record<TabKey, { q: string; a: string }[]> = {
  general: [
    {
      q: "What is Indivoya Holidays?",
      a: "Indivoya Holidays is a premier boutique travel company curating authentic, handpicked domestic tour packages across India — from royal desert stays in Rajasthan to high Himalayan passes in Ladakh and backwater cruises in Kerala.",
    },
    {
      q: "How are your domestic tour packages different from standard templates?",
      a: "Unlike generic booking portals, every Indivoya itinerary is 100% personalized. We personally inspect hotels, allocate dedicated verified chauffeur guides, and time your visits around local festivals and golden sunrise hours.",
    },
    {
      q: "Are domestic flights and train tickets included?",
      a: "Yes. We can incorporate seamless domestic flights, luxury Vande Bharat train bookings, airport pick-ups, and luxury SUVs into one consolidated transparent quote.",
    },
    {
      q: "Is there a dedicated concierge during our trip?",
      a: "Absolutely. You receive a 24/7 dedicated trip concierge via WhatsApp and direct call who coordinates real-time ground logistics, permit updates, and dinner reservations from arrival to departure.",
    },
    {
      q: "Can I customize the hotels to 4-star, 5-star or heritage havelis?",
      a: "Yes. Every itinerary can be tailored to your choice of boutique treehouses, eco-resorts, colonial tea bungalows, or royal 5-star palaces.",
    },
  ],
  how: [
    {
      q: "How does the trip planning process work?",
      a: "1. Tell us your destination, travel month, and group size. 2. A destination specialist curates a draft itinerary within 2 hours. 3. Fine-tune hotels and activities until it is perfect. 4. Confirm with a partial advance and receive instant vouchers.",
    },
    {
      q: "How do permits work for Ladakh, Sikkim, or Andaman?",
      a: "Our local ground teams arrange all inner-line permits, tribal pass clearances, and national park passes in advance so you face zero delays upon arrival.",
    },
    {
      q: "What payment methods are supported?",
      a: "We support UPI, Net Banking, credit/debit cards, and corporate bank transfers with GST invoicing.",
    },
  ],
  custom: [
    {
      q: "Do you cater to corporate offsites and group retreats?",
      a: "Yes. We organize executive leadership offsites, luxury dealer meets, and outbound team retreats in Goa, Coorg, Jaipur, and Rishikesh with end-to-end conference and transport management.",
    },
    {
      q: "Can you plan family trips with elderly parents or toddlers?",
      a: "Yes, our family-first packages include minimal transit stress, accessible rooms, oxygen-assisted vehicles for high altitudes, and kid-friendly meal arrangements.",
    },
    {
      q: "What is your cancellation and reschedule policy?",
      a: "We offer traveler-friendly policies. Date changes can often be accommodated with minimal or zero penalty depending on hotel partner lead times.",
    },
  ],
};

export default function FaqSection() {
  const [tab, setTab] = useState<TabKey>("general");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-heading">
      <div className={`container ${styles.grid}`}>
        {/* Left Interactive Device / Demo Preview Frame matching image 4 */}
        <div className={styles.deviceCol}>
          <div className={styles.deviceFrame}>
            <div className={styles.cameraNotch}>
              <span className={styles.cameraLens} />
              <span className={styles.cameraSensor} />
            </div>

            {/* Video / Demo Screen Mockup */}
            <div className={styles.screenInner}>
              <div className={styles.screenHeader}>
                <span className={styles.screenBadge}>Indivoya · Live Planner</span>
                <span className={styles.screenTime}>15:07 IST</span>
              </div>
              <div className={styles.screenContent}>
                <div className={styles.plannerPreview}>
                  <div className={styles.plannerRow}>
                    <span className={styles.checkDot} />
                    <div>
                      <strong>Day 1: Kochi to Munnar</strong>
                      <small>Private Chauffeur · Cheeyappara Waterfalls · Tea Estate Check-in</small>
                    </div>
                  </div>
                  <div className={styles.plannerRow}>
                    <span className={styles.checkDot} />
                    <div>
                      <strong>Day 2: Eravikulam &amp; Spice Trails</strong>
                      <small>Nilgiri Tahr spotting · Organic spice plantation walk</small>
                    </div>
                  </div>
                  <div className={styles.plannerRow}>
                    <span className={styles.checkDot} />
                    <div>
                      <strong>Day 3: Alleppey Houseboat</strong>
                      <small>Traditional Kettuvallam cruise · Fresh Karimeen lunch</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button inside device */}
              <div className={styles.screenFoot}>
                <span className={styles.liveIndicator}>
                  <span className={styles.liveDot} />
                  Verified Experts Online
                </span>
                <a href="#contact" className={styles.demoBtn}>
                  Request Itinerary
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Tabbed Accordion list matching image 4 */}
        <div className={styles.faqCol}>
          {/* Top Pill / Tab Switcher */}
          <div className={styles.tabNav} role="tablist" aria-label="FAQ categories">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "general"}
              className={`${styles.tabBtn} ${tab === "general" ? styles.tabBtnActive : ""}`}
              onClick={() => {
                setTab("general");
                setOpenIdx(0);
              }}
            >
              General questions
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "how"}
              className={`${styles.tabBtn} ${tab === "how" ? styles.tabBtnActive : ""}`}
              onClick={() => {
                setTab("how");
                setOpenIdx(0);
              }}
            >
              How it works
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "custom"}
              className={`${styles.tabBtn} ${tab === "custom" ? styles.tabBtnActive : ""}`}
              onClick={() => {
                setTab("custom");
                setOpenIdx(0);
              }}
            >
              Custom &amp; Groups
            </button>
          </div>

          {/* Accordion Questions */}
          <div className={styles.faqList}>
            {FAQS[tab].map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ""}`}>
                  <button
                    type="button"
                    className={styles.questionBtn}
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className={styles.plusIcon} aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className={styles.answer}>
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
