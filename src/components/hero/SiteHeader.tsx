"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon, PhoneIcon, SearchIcon, StayIcon, UserIcon } from "@/components/icons";
import { CONTACT_TEL } from "@/data/hero";
import { guestLabel, type Tab, type Trip } from "./types";
import styles from "./SiteHeader.module.css";

type Props = {
  trip: Trip;
  searchOpen: boolean;
  menuOpen: boolean;
  onOpenSearch: (tab: Tab) => void;
  onOpenMenu: () => void;
};

export default function SiteHeader({ trip, searchOpen, menuOpen, onOpenSearch, onOpenMenu }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Indivoya Holidays — home" id="brand-link">
          <Image
            src="/logo-light.png"
            alt="Indivoya Holidays"
            width={640}
            height={527}
            className={styles.logo}
            loading="eager"
          />
        </Link>

        <div
          className={`${styles.pill} ${searchOpen ? styles.pillHidden : ""}`}
          role="group"
          aria-label="Plan your trip"
        >
          <StayIcon className={styles.pillIcon} />
          <button type="button" className={styles.seg} onClick={() => onOpenSearch("dest")} id="pill-dest">
            {trip.dest || "Anywhere"}
          </button>
          <span className={styles.div} />
          <button type="button" className={styles.seg} onClick={() => onOpenSearch("when")} id="pill-when">
            {trip.month ? `${trip.month}` : "Any week"}
          </button>
          <span className={styles.div} />
          <button type="button" className={styles.seg} onClick={() => onOpenSearch("guests")} id="pill-guests">
            {trip.adults > 0 ? guestLabel(trip) : "Add guests"}
          </button>
          <button
            type="button"
            className={styles.go}
            onClick={() => onOpenSearch("dest")}
            aria-label="Open search"
            id="pill-search"
          >
            <SearchIcon />
          </button>
        </div>

        <div className={styles.actions}>
          <nav className={styles.navLinks} aria-label="Quick Navigation">
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/packages" className={styles.navLink}>Packages</Link>
            <Link href="/blogs" className={styles.navLink}>Blogs</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>
          <a href={CONTACT_TEL} className={styles.iconBtn} aria-label="Call us" id="call-btn">
            <PhoneIcon />
          </a>
          <button type="button" className={`${styles.iconBtn} ${styles.account}`} aria-label="My account" id="account-btn">
            <UserIcon />
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Open main menu"
            aria-expanded={menuOpen}
            aria-controls="menu-drawer"
            onClick={onOpenMenu}
            id="menu-btn"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
