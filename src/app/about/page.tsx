import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubNav from "@/components/layout/SubNav";
import Footer from "@/components/sections/Footer";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us | Indivoya Holidays - Handcrafted Domestic India Tours",
  description:
    "Learn about Indivoya Holidays, India's boutique domestic travel specialists. Our story, values, certified local guides, and passion for curating authentic journeys across 28 states.",
  keywords: ["about indivoya holidays", "India travel company", "domestic tour operators", "custom India holidays"],
};

export default function AboutPage() {
  return (
    <>
      <SubNav currentPath="/about" />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>Our Heritage &amp; Passion</span>
            <h1 className={styles.heroTitle}>
              We Craft Journeys That Touch <span data-slot="italic">The Soul of India</span>
            </h1>
            <p className={styles.heroLead}>
              Indivoya Holidays was born out of a simple belief: India cannot be experienced through ordinary itineraries.
              Every corner holds ancient stories, vibrant cultures, flavors, and landscapes that deserve to be uncovered with
              local warmth, genuine depth, and luxurious comfort.
            </p>
          </div>
        </section>

        {/* Launch Highlights */}
        <section className={styles.statsSection}>
          <div className={`container ${styles.statsGrid}`}>
            <div className={styles.statCard}>
              <span className={styles.statNum}>28+</span>
              <span className={styles.statLabel}>States &amp; UTs Available</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Direct Local Pricing</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>Zero</span>
              <span className={styles.statLabel}>Middleman Markups</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>24/7</span>
              <span className={styles.statLabel}>On-Trip Guest Support</span>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.storySection}>
          <div className={`container ${styles.storyGrid}`}>
            <div className={styles.storyMedia}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/hero-kerala.jpg"
                  alt="Indivoya travel experience in Kerala"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.storyImg}
                />
              </div>
              <div className={styles.experienceBadge}>
                <strong>Fresh Launch</strong>
                <span>Direct Operator Tours</span>
              </div>
            </div>

            <div className={styles.storyContent}>
              <span className={styles.subHeading}>Why Travel With Indivoya?</span>
              <h2>Boutique Care With Ground-Level Expertise</h2>
              <p>
                From the misty green tea slopes of Munnar and the sacred dawn chants in Varanasi to the serene high-altitude
                passes of Ladakh, our itineraries are hand-stitched by travel experts who actually live and breathe these
                destinations.
              </p>
              <p>
                We do not sell mass-market tours. Instead, we pair you with verified boutique resorts, private chauffeurs,
                and regional storytellers who unlock genuine cultural encounters that travelers remember for a lifetime.
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>✓</div>
                  <div>
                    <h4>Hand-Picked Accommodations</h4>
                    <p>Heritage havelis, luxury houseboats, and eco-villas with verified quality standards.</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>✓</div>
                  <div>
                    <h4>24/7 Dedicated Concierge</h4>
                    <p>Round-the-clock support from your trip advisor while you explore on the road.</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>✓</div>
                  <div>
                    <h4>100% Transparent Pricing</h4>
                    <p>No hidden extras, clear inclusions, and fully insured travel arrangements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className="container">
            <div className={styles.testiHead}>
              <span className={styles.subHeading}>Guest Stories</span>
              <h2>What Travelers Say About Our Journeys</h2>
              <p>Hear from families, couples, and adventurers who explored India with our team.</p>
            </div>

            <div className={styles.testimonialsGrid}>
              <div className={styles.testiCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.testiQuote}>
                  &ldquo;Indivoya planned our Kerala trip seamlessly. From the private houseboat in Alleppey to the spice plantation walk in Thekkady, everything was well organized with great chauffeur service.&rdquo;
                </p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>R</div>
                  <div>
                    <strong>Ram &amp; Family</strong>
                    <span>Kochi &amp; Munnar Tour</span>
                  </div>
                </div>
              </div>

              <div className={styles.testiCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.testiQuote}>
                  &ldquo;Our Ladakh trip was beyond words! The oxygen assistance and personalized SUV made Nubra Valley and Pangong Lake effortless. Huge thanks to Devika for checking on us daily.&rdquo;
                </p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>D</div>
                  <div>
                    <strong>Devika S.</strong>
                    <span>Leh &amp; Nubra Explorer</span>
                  </div>
                </div>
              </div>

              <div className={styles.testiCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.testiQuote}>
                  &ldquo;Rajasthan felt like a royal fairytale. The heritage haveli in Udaipur and desert camp in Jaisalmer were top-notch. Truly genuine, transparent pricing without hidden catches.&rdquo;
                </p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>H</div>
                  <div>
                    <strong>Haripriya &amp; Rahul</strong>
                    <span>Royal Rajasthan Circuit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2>Ready to Design Your Dream Holiday?</h2>
              <p>Speak with our senior India holiday designers to customize your private itinerary.</p>
              <div className={styles.ctaActions}>
                <Link href="/packages" className={styles.primaryBtn}>
                  Browse Tour Packages
                </Link>
                <Link href="/contact" className={styles.outlineBtn}>
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
