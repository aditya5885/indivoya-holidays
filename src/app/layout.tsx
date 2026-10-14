import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans-main",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indivoya Holidays | Curated India Tour Packages – Kerala, Ladakh, Rajasthan & More",
  description:
    "Indivoya Holidays crafts unforgettable journeys across all of India — Kerala backwaters, Ladakh, Rajasthan, Varanasi, Goa, Kashmir and beyond. Handpicked domestic holiday packages.",
  applicationName: "Indivoya Holidays",
  keywords: ["India tour packages", "domestic holidays", "Kerala", "Ladakh", "Rajasthan", "Kashmir", "Goa", "Varanasi"],
  openGraph: {
    title: "Indivoya Holidays – Curating Unforgettable India",
    description: "Handcrafted holidays across 28 states and 8 union territories of India.",
    images: ["/hero-kerala.jpg"],
    type: "website",
    locale: "en_IN",
    siteName: "Indivoya Holidays",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E4A2F",
};

import FloatingActions from "@/components/layout/FloatingActions";
import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CustomCursor />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
