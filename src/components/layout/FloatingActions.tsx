"use client";

import { CONTACT_PHONE, CONTACT_TEL, WHATSAPP_LINK } from "@/data/hero";
import styles from "./FloatingActions.module.css";

export default function FloatingActions() {
  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatLeft}
        aria-label="Chat with Indivoya Holidays on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <span className={styles.pulseRing} aria-hidden />
        <span className={styles.iconCircleWhatsapp}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.41 8.74 7.7C8.47 7.99 7.72 8.69 7.72 10.13C7.72 11.57 8.77 12.96 8.91 13.16C9.06 13.35 10.96 16.28 13.88 17.54C14.57 17.84 15.11 18.02 15.53 18.15C16.23 18.38 16.86 18.34 17.37 18.27C17.93 18.18 19.11 17.56 19.35 16.87C19.6 16.18 19.6 15.6 19.53 15.47C19.45 15.35 19.26 15.28 18.96 15.13C18.67 14.99 17.22 14.27 16.95 14.17C16.68 14.07 16.48 14.03 16.29 14.32C16.09 14.61 15.53 15.28 15.36 15.47C15.19 15.67 15.02 15.7 14.72 15.55C14.43 15.41 13.49 15.1 12.38 14.11C11.51 13.33 10.93 12.37 10.76 12.08C10.59 11.78 10.74 11.63 10.89 11.48C11.02 11.35 11.18 11.14 11.33 10.97C11.47 10.8 11.52 10.68 11.62 10.48C11.72 10.29 11.67 10.11 11.6 9.97C11.52 9.82 10.93 8.37 10.69 7.78C10.45 7.21 10.2 7.29 10.03 7.28C9.87 7.27 9.7 7.34 9.53 7.34Z" />
          </svg>
        </span>
        <span className={styles.badgeLeft}>Chat on WhatsApp</span>
      </a>

      {/* Call Button - Bottom Right */}
      <a
        href={CONTACT_TEL}
        className={styles.floatRight}
        aria-label={`Call Indivoya Holidays at ${CONTACT_PHONE}`}
        title={`Call ${CONTACT_PHONE}`}
      >
        <span className={styles.pulseRingCall} aria-hidden />
        <span className={styles.iconCircleCall}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <span className={styles.badgeRight}>Call Us</span>
      </a>
    </>
  );
}
