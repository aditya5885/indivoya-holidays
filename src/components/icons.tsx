import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const StayIcon = (p: P) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...p}>
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5Z" />
    <path d="M9 11h6" />
  </svg>
);

export const TempleIcon = (p: P) => (
  <svg width="26" height="26" viewBox="0 0 24 24" strokeWidth={1.3} {...base} {...p}>
    <path d="M12 2.5c.6 1.6 2 2.6 2 4.2H10c0-1.6 1.4-2.6 2-4.2Z" />
    <path d="M8.5 9.5c0-1.6 1.6-2.8 3.5-2.8s3.5 1.2 3.5 2.8" />
    <path d="M7 9.5h10M8 9.5V20M16 9.5V20M2.5 20.5h19" />
    <path d="M10.5 20v-4a1.5 1.5 0 0 1 3 0v4" />
    <path d="M4 20v-6.5l2-1.5M20 20v-6.5l-2-1.5" />
  </svg>
);

export const SearchIcon = (p: P) => (
  <svg width="16" height="16" viewBox="0 0 24 24" strokeWidth={1.8} {...base} {...p}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m17 17 4 4" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...p}>
    <path d="M4.5 4.5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.8 3.2c.1.4 0 .8-.3 1.1L8 10.2a12 12 0 0 0 5.8 5.8l1.6-1.6c.3-.3.7-.4 1.1-.3l3.2.8c.5.1.8.5.8 1v2.6c0 .6-.4 1-1 1A15.5 15.5 0 0 1 4.5 4.5Z" />
  </svg>
);

export const UserIcon = (p: P) => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...p}>
    <circle cx="12" cy="8.8" r="2.5" />
    <path d="M16.8 20.5c1-3.1-1.2-6.4-4.4-6.5h-.8c-3.2.1-5.4 3.4-4.4 6.5" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...p}>
    <path d="M4 5h12M4 12h16M4 19h8" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowRightIcon = (p: P) => (
  <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
  </svg>
);

export const StarIcon = (p: P) => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden {...p}>
    <path d="M10.87 2.88a.94.94 0 0 0-1.74 0L7.3 7.29l-4.75.38c-.83.06-1.17 1.1-.54 1.65l3.62 3.1-1.1 4.64c-.2.81.69 1.45 1.4 1.02L10 15.59l4.07 2.49c.71.43 1.6-.21 1.4-1.02l-1.1-4.64 3.62-3.1c.63-.55.3-1.59-.54-1.65l-4.75-.38-1.83-4.41Z" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const LocationPinIcon = (p: P) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...p}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* Clean Destination Vector Icons */
export const PalmIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="M13 8c0-2.76-2.24-5-5-5-1.5 0-3 .8-3.7 2 2 .5 3.7 2.2 3.7 4" />
    <path d="M11 9c0-3.3 2.7-6 6-6 1.8 0 3.3 1 4 2.5-2.2.3-4 2-4 4.5" />
    <path d="M12 21c.5-4 1-8-1-12" />
    <path d="M7 13c1.5-.5 3.5-.5 5-2" />
    <path d="M17 12c-1.5 0-3-.5-4-2" />
  </svg>
);

export const MountainIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    <path d="m4.14 15 .86-1.5 3 2 4.5-5 3.5 4.5" />
  </svg>
);

export const CastleIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="M3 21h18M5 21V9l2-2 2 2v12M15 21V9l2-2 2 2v12M9 21V13h6v8M9 9h6M12 4v5" />
  </svg>
);

export const BoatIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="M2 17l2 4h16l2-4H2z" />
    <path d="M12 3v11M12 5l7 6h-7M6 14l6-9" />
  </svg>
);

export const WaveIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </svg>
);

export const TreeIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="M12 3 5 12h3l-3 6h14l-3-6h3L12 3z" />
    <path d="M12 18v4" />
  </svg>
);

export const CompassIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity={0.15} />
  </svg>
);

export const SunIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const SparklesIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
  </svg>
);

export const CloudRainIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...p}>
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M16 14v6M8 14v6M12 16v6" />
  </svg>
);
