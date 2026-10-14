"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS_TEXT,
  CONTACT_PHONE,
  CONTACT_PHONE_ALT,
  CONTACT_TEL,
  CONTACT_TEL_ALT,
  NAV_LINKS,
  WHATSAPP_LINK,
} from "@/data/hero";
import styles from "./Footer.module.css";

const SERVICES_LINKS = [
  { label: "Bespoke Family Itineraries", href: "/packages" },
  { label: "Honeymoon & Luxury Haveli Trails", href: "/packages" },
  { label: "Himalayan High Pass Expeditions", href: "/packages" },
  { label: "Kerala Houseboat & Wellness", href: "/packages" },
  { label: "Corporate Retreats & Offsites", href: "/contact" },
  { label: "Chauffeur & Guided Ground Tours", href: "/about" },
];

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.mainGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <Image
                src="/logo-light.png"
                alt="Indivoya Holidays"
                width={640}
                height={527}
                className={styles.logo}
              />
            </div>
            <p className={styles.brandTagline}>
              Curating authentic, handcrafted journeys across India that stay with you forever.
            </p>

            <div className={styles.socials} aria-label="Social media">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>QUICK LINKS</h4>
            <ul className={styles.linkList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>TOUR CIRCUITS</h4>
            <ul className={styles.linkList}>
              {SERVICES_LINKS.map((service, i) => (
                <li key={i}>
                  <Link href={service.href}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Studio Column */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>HEADQUARTERS &amp; CONTACT</h4>
            <span className={styles.companySub}>INDIVYA HOLIDAYS PRIVATE LIMITED</span>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={styles.contactIcon}>
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{ADDRESS_TEXT}</span>
              </div>

              <div className={styles.contactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={styles.contactIcon}>
                  <path d="M4.5 4.5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.8 3.2c.1.4 0 .8-.3 1.1L8 10.2a12 12 0 0 0 5.8 5.8l1.6-1.6c.3-.3.7-.4 1.1-.3l3.2.8c.5.1.8.5.8 1v2.6c0 .6-.4 1-1 1A15.5 15.5 0 0 1 4.5 4.5Z" />
                </svg>
                <div className={styles.phoneGroup}>
                  <a href={CONTACT_TEL}>{CONTACT_PHONE}</a>
                  <a href={CONTACT_TEL_ALT}>{CONTACT_PHONE_ALT}</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={styles.contactIcon}>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:info@indivoya.com">info@indivoya.com</a>
              </div>
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.quoteBtn}>
              GET QUOTE
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyText}>© 2026 Indivoya Holidays. All rights reserved.</p>
          <p className={styles.mottoText}>&ldquo;Curating India with empathy, craft, and purpose.&rdquo;</p>
          <div className={styles.legalLinks}>
            <Link href="/about">Privacy</Link>
            <Link href="/about">Terms</Link>
            <button type="button" onClick={() => alert("Cookie preferences saved")}>
              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
