"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRightIcon, SearchIcon, StarIcon } from "@/components/icons";
import { SLIDES } from "@/data/hero";
import MenuDrawer from "./MenuDrawer";
import SearchPanel from "./SearchPanel";
import SiteHeader from "./SiteHeader";
import { EMPTY_TRIP, guestLabel, type Tab, type Trip } from "./types";
import styles from "./HomeHero.module.css";

type MenuState = "closed" | "open" | "closing";

export default function HomeHero() {
  /* ---------- Slideshow ---------- */
  const [current, setCurrent] = useState(0);
  const [videoDuration, setVideoDuration] = useState<number>(6500);
  const [cycle, setCycle] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
    setCycle((k) => k + 1);
  }, []);

  const handleVideoLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const durSec = e.currentTarget.duration;
    if (durSec && !isNaN(durSec) && durSec > 1) {
      setVideoDuration(Math.min(durSec * 1000, 10000));
    }
  };

  useEffect(() => {
    const t = setTimeout(() => {
      goToNextSlide();
    }, videoDuration);
    return () => clearTimeout(t);
  }, [current, cycle, videoDuration, goToNextSlide]);

  /* ---------- Trip search ---------- */
  const [trip, setTripState] = useState<Trip>(EMPTY_TRIP);
  const [searchOpen, setSearchOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("dest");
  const [today, setToday] = useState({ month: 0, year: 2026 });

  const setTrip = useCallback((updater: (t: Trip) => Trip) => setTripState(updater), []);

  const openSearch = (nextTab: Tab) => {
    const d = new Date();
    setToday({ month: d.getMonth(), year: d.getFullYear() });
    setTab(nextTab);
    setSearchOpen(true);
  };

  /* ---------- Menu ---------- */
  const [menu, setMenu] = useState<MenuState>("closed");
  const closeMenu = useCallback(() => setMenu((m) => (m === "open" ? "closing" : m)), []);

  /* ---------- Toast ---------- */
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3800);
  };

  const submitSearch = () => {
    setSearchOpen(false);
    const where = trip.dest.trim() || "India";
    showToast(`✨ Finding handpicked ${where} journeys${trip.month ? ` for ${trip.month}` : ""}…`);
  };

  /* ---------- Global: scroll lock + Escape ---------- */
  const overlayOpen = searchOpen || menu === "open";

  useEffect(() => {
    document.body.classList.toggle("is-locked", overlayOpen);
    return () => document.body.classList.remove("is-locked");
  }, [overlayOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setSearchOpen(false);
      closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  const slide = SLIDES[current];

  return (
    <>
      <SiteHeader
        trip={trip}
        searchOpen={searchOpen}
        menuOpen={menu === "open"}
        onOpenSearch={openSearch}
        onOpenMenu={() => setMenu("open")}
      />

      {overlayOpen && (
        <div
          className={styles.scrim}
          aria-hidden
          onClick={() => {
            setSearchOpen(false);
            closeMenu();
          }}
        />
      )}

      {searchOpen && (
        <SearchPanel trip={trip} setTrip={setTrip} tab={tab} setTab={setTab} today={today} onSubmit={submitSearch} />
      )}

      {menu !== "closed" && (
        <MenuDrawer closing={menu === "closing"} onClose={closeMenu} onClosed={() => setMenu("closed")} />
      )}

      <div>
        <section
          className={styles.hero}
          aria-label="Indivoya Holidays introduction"
          style={{ "--slide-ms": `${videoDuration}ms` } as CSSProperties}
        >
          <div className={styles.media}>
            <video
              key={slide.src}
              autoPlay
              muted
              playsInline
              preload="auto"
              className={styles.slideVideo}
              onLoadedMetadata={handleVideoLoadedMetadata}
              onEnded={goToNextSlide}
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          </div>
          <div className={styles.shade} aria-hidden />

          <div className={`container ${styles.content}`}>
            {/* Mobile search trigger */}
            <button
              type="button"
              className={`${styles.mobileSearch} ${styles.reveal}`}
              style={{ "--d": ".1s" } as CSSProperties}
              onClick={() => openSearch("dest")}
              id="mobile-search"
            >
              <SearchIcon width={20} height={20} strokeWidth={1.6} />
              <span className={styles.msText}>
                <strong>{trip.dest || "Where in India?"}</strong>
                <small>
                  {trip.month || "Any month"} • {guestLabel(trip)}
                </small>
              </span>
            </button>

            <h1 key={`title-${current}`} className={styles.display}>
              {slide.titlePrimary}<span data-slot="italic">{slide.titleItalic}</span>
              <span className={styles.line}>{slide.titleLine2}</span>
            </h1>

            <div className={styles.bottom}>
              <div className={styles.intro}>
                <div className={styles.bars} role="tablist" aria-label="Featured destinations">
                  {SLIDES.map((s, i) => (
                    <button
                      key={s.src}
                      type="button"
                      role="tab"
                      aria-selected={i === current}
                      aria-label={s.label}
                      className={`${styles.bar} ${i < current ? styles.barDone : ""} ${i === current ? styles.barActive : ""}`}
                      onClick={() => i !== current && setCurrent(i)}
                    >
                      <i key={`${i}-${cycle}`} />
                    </button>
                  ))}
                </div>

                <p key={`desc-${current}`} className={styles.copy}>
                  {slide.desc}
                </p>

                <a href="#destinations" className={styles.cta} id="discover-btn">
                  Discover more
                  <ArrowRightIcon />
                </a>
              </div>

              <div className={styles.sign}>
                <div key={`place-${current}`} className={styles.rating}>
                  <StarIcon />
                  <span>{slide.place}</span>
                </div>
                <h2 key={`end-${current}`} className={`${styles.display} ${styles.displayEnd}`}>
                  {slide.endPrimary}<span data-slot="italic">{slide.endItalic}</span>
                  <span className={styles.line}>{slide.endLine2}</span>
                </h2>
              </div>
            </div>
          </div>

          <a href="#destinations" className={styles.scrollCue} aria-label="Scroll to explore" id="scroll-cue">
            <span />
          </a>
        </section>
      </div>

      <div className={`${styles.toast} ${toast ? styles.toastVisible : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
