"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CloseIcon } from "@/components/icons";
import { CONTACT_PHONE, CONTACT_PHONE_ALT, CONTACT_TEL, CONTACT_TEL_ALT, NAV_LINKS, REGIONS } from "@/data/hero";
import styles from "./MenuDrawer.module.css";

type Props = {
  closing: boolean;
  onClose: () => void;
  onClosed: () => void;
};

export default function MenuDrawer({ closing, onClose, onClosed }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <aside
      id="menu-drawer"
      className={`${styles.drawer} ${closing ? styles.closing : ""}`}
      aria-label="Main menu"
      onAnimationEnd={(e) => {
        if (closing && e.target === e.currentTarget) onClosed();
      }}
    >
      <div className={styles.top}>
        <Image src="/logo-color.png" alt="Indivoya Holidays" width={640} height={527} className={styles.logo} />
        <button ref={closeRef} type="button" className={styles.close} aria-label="Close menu" onClick={onClose} id="menu-close">
          <CloseIcon />
        </button>
      </div>

      <nav className={styles.nav}>
        {NAV_LINKS.map((l, i) => (
          <Link key={l.href} href={l.href} onClick={onClose} style={{ animationDelay: `${0.08 + i * 0.04}s` }}>
            {l.label}
          </Link>
        ))}
        <Link href="/admin/testimonials" onClick={onClose} style={{ animationDelay: `0.32s`, color: "var(--gold)" }}>
          Admin Testimonials Desk
        </Link>
      </nav>

      <div>
        <p className={styles.heading}>Explore by region</p>
        <div className={styles.regions}>
          {REGIONS.map((r) => (
            <a key={r} href={`#${r.toLowerCase()}`} onClick={onClose}>
              {r}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.foot}>
        <p>Talk to an India travel expert</p>
        <div className={styles.phoneList}>
          <a href={CONTACT_TEL} className={styles.phone}>
            {CONTACT_PHONE}
          </a>
          <a href={CONTACT_TEL_ALT} className={styles.phone}>
            {CONTACT_PHONE_ALT}
          </a>
        </div>
      </div>
    </aside>
  );
}
