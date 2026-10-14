"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, PhoneIcon, StayIcon } from "@/components/icons";
import { CONTACT_TEL, NAV_LINKS } from "@/data/hero";
import MenuDrawer from "@/components/hero/MenuDrawer";
import styles from "./SubNav.module.css";

type Props = {
  currentPath?: string;
};

export default function SubNav({ currentPath = "" }: Props) {
  const [menu, setMenu] = useState<"closed" | "open" | "closing">("closed");

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.brand} aria-label="Indivoya Holidays — Home">
            <Image src="/logo-light.png" alt="Indivoya Holidays" width={640} height={527} className={styles.logo} priority />
          </Link>

          <nav className={styles.links} aria-label="Site Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${currentPath === link.href ? styles.activeLink : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href={CONTACT_TEL} className={styles.ctaBtn}>
              <PhoneIcon />
              <span>Contact Expert</span>
            </a>
            <button
              type="button"
              className={styles.menuBtn}
              aria-label="Open menu"
              onClick={() => setMenu("open")}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {menu !== "closed" && (
        <MenuDrawer
          closing={menu === "closing"}
          onClose={() => setMenu("closing")}
          onClosed={() => setMenu("closed")}
        />
      )}
    </>
  );
}
