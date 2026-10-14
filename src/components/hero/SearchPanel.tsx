"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  SearchIcon,
  PalmIcon,
  MountainIcon,
  CastleIcon,
  BoatIcon,
  WaveIcon,
  TreeIcon,
  CompassIcon,
  SunIcon,
  SparklesIcon,
  CloudRainIcon,
  TempleIcon,
} from "@/components/icons";
import { DESTINATIONS, MONTH_HINTS, type Destination } from "@/data/hero";
import { guestLabel, type Tab, type Trip } from "./types";
import styles from "./SearchPanel.module.css";

function renderDestIcon(icon: Destination["icon"]) {
  switch (icon) {
    case "palm":
      return <PalmIcon width={22} height={22} />;
    case "mountain":
      return <MountainIcon width={22} height={22} />;
    case "castle":
      return <CastleIcon width={22} height={22} />;
    case "boat":
      return <BoatIcon width={22} height={22} />;
    case "wave":
      return <WaveIcon width={22} height={22} />;
    case "tree":
      return <TreeIcon width={22} height={22} />;
    case "compass":
      return <CompassIcon width={22} height={22} />;
    case "sun":
      return <SunIcon width={22} height={22} />;
    case "sparkles":
      return <SparklesIcon width={22} height={22} />;
    case "cloud":
      return <CloudRainIcon width={22} height={22} />;
    case "temple":
      return <TempleIcon width={22} height={22} />;
    default:
      return <CompassIcon width={22} height={22} />;
  }
}

type Props = {
  trip: Trip;
  setTrip: (updater: (t: Trip) => Trip) => void;
  tab: Tab;
  setTab: (tab: Tab) => void;
  /** Current month (0-11) and year, captured when the panel was opened. */
  today: { month: number; year: number };
  onSubmit: () => void;
};

type GuestKey = "adults" | "children" | "infants";

const GUEST_ROWS: { key: GuestKey; label: string; hint: string }[] = [
  { key: "adults", label: "Adults", hint: "Age 13+" },
  { key: "children", label: "Children", hint: "Age 2–12" },
  { key: "infants", label: "Infants", hint: "Under 2" },
];

const MAX_GUESTS = 16;

export default function SearchPanel({ trip, setTrip, tab, setTab, today, onSubmit }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (tab === "dest") inputRef.current?.focus({ preventScroll: true });
  }, [tab]);

  const months = useMemo(
    () =>
      MONTH_HINTS.map(([m, hint], i) => {
        const year = i < today.month ? today.year + 1 : today.year;
        return { value: `${m} ${year}`, short: `${m} ${String(year).slice(2)}`, hint };
      }),
    [today]
  );

  const q = query.trim().toLowerCase();
  const visibleDestinations = DESTINATIONS.filter(
    (d) => !q || `${d.name} ${d.label} ${d.hint}`.toLowerCase().includes(q)
  );

  const step = (key: GuestKey, delta: number) =>
    setTrip((t) => {
      const next = { ...t, [key]: Math.max(0, Math.min(MAX_GUESTS, t[key] + delta)) };
      // children & infants need at least one adult
      if (key !== "adults" && next[key] > 0 && next.adults === 0) next.adults = 1;
      return next;
    });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const guests = guestLabel(trip);

  return (
    <form className={styles.panel} role="dialog" aria-modal="true" aria-label="Plan your India trip" onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <label className={`${styles.field} ${tab === "dest" ? styles.active : ""}`} htmlFor="dest-input">
          <span className={styles.label}>Where in India</span>
          <input
            ref={inputRef}
            id="dest-input"
            name="destination"
            type="text"
            placeholder="Search states, cities, hills…"
            autoComplete="off"
            value={trip.dest}
            onFocus={() => setTab("dest")}
            onChange={(e) => {
              const v = e.target.value;
              setQuery(v);
              setTrip((t) => ({ ...t, dest: v }));
            }}
          />
        </label>

        <button
          type="button"
          id="when-field"
          className={`${styles.field} ${tab === "when" ? styles.active : ""}`}
          onClick={() => setTab("when")}
        >
          <span className={styles.label}>When</span>
          <span className={`${styles.value} ${trip.month ? styles.hasValue : ""}`}>{trip.month || "Any month"}</span>
        </button>

        <button
          type="button"
          id="guests-field"
          className={`${styles.field} ${tab === "guests" ? styles.active : ""}`}
          onClick={() => setTab("guests")}
        >
          <span className={styles.label}>Travellers</span>
          <span className={`${styles.value} ${guests !== "Add travellers" ? styles.hasValue : ""}`}>{guests}</span>
        </button>

        <button type="submit" className={styles.submit} id="search-submit">
          <SearchIcon width={18} height={18} strokeWidth={2} />
          <span>Search</span>
        </button>
      </div>

      <div className={styles.body}>
        {tab === "dest" && (
          <section className={styles.pane} aria-label="Popular destinations">
            <p className={styles.heading}>Popular across India</p>
            <div className={styles.destGrid}>
              {visibleDestinations.map((d) => (
                <button
                  key={d.name}
                  type="button"
                  className={`${styles.destChip} ${trip.dest === d.name ? styles.selected : ""}`}
                  onClick={() => {
                    setTrip((t) => ({ ...t, dest: d.name }));
                    setQuery("");
                    setTab("when");
                  }}
                >
                  <span className={styles.iconWrap} aria-hidden>
                    {renderDestIcon(d.icon)}
                  </span>
                  {d.label}
                  <small>{d.hint}</small>
                </button>
              ))}
              {visibleDestinations.length === 0 && (
                <p className={styles.empty}>
                  We’ll craft a custom trip to <strong>{query}</strong> — hit Search.
                </p>
              )}
            </div>
          </section>
        )}

        {tab === "when" && (
          <section className={styles.pane} aria-label="Choose travel month">
            <p className={styles.heading}>When are you travelling?</p>
            <div className={styles.monthGrid}>
              {months.map((m) => (
                <button
                  key={m.value}
                  type="button"
                  className={`${styles.monthChip} ${trip.month === m.value ? styles.selected : ""}`}
                  onClick={() => {
                    setTrip((t) => ({ ...t, month: m.value }));
                    setTab("guests");
                  }}
                >
                  <strong>{m.short}</strong>
                  <small>{m.hint}</small>
                </button>
              ))}
            </div>
          </section>
        )}

        {tab === "guests" && (
          <section className={styles.pane} aria-label="Travellers">
            <p className={styles.heading}>Who’s coming along?</p>
            <div className={styles.stepperList}>
              {GUEST_ROWS.map((row) => (
                <div className={styles.stepperRow} key={row.key}>
                  <div>
                    <strong>{row.label}</strong>
                    <small>{row.hint}</small>
                  </div>
                  <div className={styles.stepper}>
                    <button
                      type="button"
                      aria-label={`Fewer ${row.label.toLowerCase()}`}
                      disabled={trip[row.key] <= 0}
                      onClick={() => step(row.key, -1)}
                    >
                      −
                    </button>
                    <output aria-live="polite">{trip[row.key]}</output>
                    <button
                      type="button"
                      aria-label={`More ${row.label.toLowerCase()}`}
                      disabled={trip[row.key] >= MAX_GUESTS}
                      onClick={() => step(row.key, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </form>
  );
}
