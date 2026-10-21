"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { TourPackage } from "@/data/packagesData";
import { CONTACT_PHONE, CONTACT_TEL } from "@/data/hero";
import styles from "./package-detail.module.css";

type Props = {
  pkg: TourPackage;
  relatedPackages: TourPackage[];
};

export default function PackageDetailClient({ pkg, relatedPackages }: Props) {
  // If the package has legs (e.g. 50-day tour), track active leg
  const [activeLegIndex, setActiveLegIndex] = useState(0);

  // Accordion state for days: set of open day identifiers
  const [openDays, setOpenDays] = useState<Record<string, boolean>>(() => {
    // Open the first 3 days by default
    const initial: Record<string, boolean> = {};
    if (pkg.itinerary) {
      pkg.itinerary.slice(0, 3).forEach((d) => {
        initial[d.day] = true;
      });
    }
    return initial;
  });

  const toggleDay = (dayKey: string) => {
    setOpenDays((prev) => ({
      ...prev,
      [dayKey]: !prev[dayKey],
    }));
  };

  const toggleAllDays = (expand: boolean) => {
    const nextState: Record<string, boolean> = {};
    if (pkg.legs && pkg.legs.length > 0) {
      pkg.legs[activeLegIndex].days.forEach((d) => {
        nextState[d.day] = expand;
      });
    } else if (pkg.itinerary) {
      pkg.itinerary.forEach((d) => {
        nextState[d.day] = expand;
      });
    }
    setOpenDays(nextState);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Indivoya Holidays, I am interested in booking the "${pkg.title}" (${pkg.duration}, ${pkg.price}/person). Please share complete itinerary and customized quotation.`
  );
  const whatsappUrl = `https://wa.me/919633512049?text=${whatsappMessage}`;

  return (
    <>
      {/* Breadcrumb Strip */}
      <div className={styles.breadcrumbWrap}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href="/packages" className={styles.breadcrumbLink}>
              Tour Packages
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{pkg.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackdrop}>
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            priority
            sizes="100vw"
            className={styles.heroBackdropImg}
          />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.badgeRow}>
            <span className={styles.themeBadge}>{pkg.theme}</span>
            <span className={styles.destinationBadge}>
              📍 {pkg.destination} · {pkg.state}
            </span>
          </div>

          <h1 className={styles.heroTitle}>{pkg.title}</h1>

          <div className={styles.heroRatingRow}>
            <span className={styles.starRating}>★ {pkg.rating} Rating</span>
            <span className={styles.reviewsCount}>({pkg.reviewsCount} Verified Traveler Reviews)</span>
            <span className={styles.seasonHint}>Optimal Season: {pkg.bestTimeToVisit}</span>
          </div>

          {/* Quick Specifications Ribbon */}
          <div className={styles.specsRibbon}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Duration</span>
              <span className={styles.specVal}>{pkg.duration}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Hotel Category</span>
              <span className={styles.specVal}>{pkg.hotelCategory || "4-Star Deluxe"}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Meal Plan</span>
              <span className={styles.specVal}>{pkg.mealPlan || "Daily Breakfast"}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Ground Logistics</span>
              <span className={styles.specVal}>{pkg.transportation || "Private AC Car & Chauffeur"}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Pickup & Drop</span>
              <span className={styles.specVal}>{pkg.pickupDrop || "Airport / Station Transfers"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className={styles.contentWrap}>
        <div className="container">
          <div className={styles.layoutGrid}>
            {/* Left Main Column */}
            <div className={styles.leftCol}>
              {/* Feature Image Showcase */}
              <div className={styles.imageShowcase}>
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  priority
                  sizes="(max-width: 1050px) 100vw, 750px"
                  className={styles.mainImg}
                />
                <div className={styles.imageOverlayBadge}>
                  {pkg.duration} · Handcrafted by Indivoya Holidays
                </div>
              </div>

              {/* Package Overview */}
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionEyebrow}>Signature Experience</span>
                  <h2 className={styles.sectionTitle}>Journey Overview</h2>
                </div>
                <p className={styles.leadText}>
                  {pkg.overview ||
                    `${pkg.title} is a bespoke private holiday meticulously designed for travelers seeking comfort, authentic cultural immersion, and seamless logistics across ${pkg.destination}.`}
                </p>

                {/* Highlights Grid */}
                <div className={styles.highlightsGrid}>
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className={styles.highlightItem}>
                      <span className={styles.checkIcon}>★</span>
                      <span className={styles.highlightText}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Hotel Options Table (if provided) */}
              {pkg.pricingTiers && pkg.pricingTiers.length > 0 && (
                <div className={styles.sectionCard}>
                  <div className={styles.sectionHeader}>
                    <span className={styles.sectionEyebrow}>Transparent Tariffs</span>
                    <h2 className={styles.sectionTitle}>Hotel Options & Package Cost</h2>
                  </div>

                  {pkg.pricingTiers.map((tier, idx) => (
                    <div key={idx} className={styles.tierCard}>
                      <div className={styles.tierHeader}>
                        <h3 className={styles.tierName}>{tier.tierName}</h3>
                        <span className={styles.tierPrice}>{tier.pricePerPerson}</span>
                      </div>
                      {tier.note && <p className={styles.tierNote}>{tier.note}</p>}

                      <div style={{ overflowX: "auto" }}>
                        <table className={styles.hotelTable}>
                          <thead>
                            <tr>
                              <th>Destination</th>
                              <th>Duration</th>
                              <th>Hotel Property</th>
                              <th>Room Type</th>
                              <th>Meal Plan</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tier.hotels.map((h, hIdx) => (
                              <tr key={hIdx}>
                                <td><strong>{h.destination}</strong></td>
                                <td>{h.stay}</td>
                                <td>{h.hotel}</td>
                                <td>{h.roomCategory || "Deluxe AC"}</td>
                                <td>{h.mealPlan || "Breakfast"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Special Inclusions (if any, like local guides) */}
              {pkg.specialInclusions && pkg.specialInclusions.length > 0 && (
                <div className={styles.sectionCard} style={{ background: "#fbf7ee", borderColor: "#fed7aa" }}>
                  <div className={styles.sectionHeader}>
                    <span className={styles.sectionEyebrow}>Exclusive Value-Add</span>
                    <h2 className={styles.sectionTitle} style={{ color: "#92400e" }}>
                      Special Inclusions On This Tour
                    </h2>
                  </div>
                  <ul className={styles.boxList}>
                    {pkg.specialInclusions.map((item, idx) => (
                      <li key={idx} className={styles.incItem} style={{ color: "#78350f" }}>
                        <strong>{item}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Day-by-Day Itinerary Section */}
              <div className={styles.sectionCard}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
                  <div>
                    <span className={styles.sectionEyebrow}>Step-by-Step Blueprint</span>
                    <h2 className={styles.sectionTitle}>Day-Wise Detailed Itinerary</h2>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      type="button"
                      onClick={() => toggleAllDays(true)}
                      style={{ background: "#f3f4f6", border: "1px solid #e5e7eb", padding: "0.4rem 0.8rem", borderRadius: "8px", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}
                    >
                      Expand All
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleAllDays(false)}
                      style={{ background: "#f3f4f6", border: "1px solid #e5e7eb", padding: "0.4rem 0.8rem", borderRadius: "8px", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                {/* If multi-leg tour (e.g. 50-day tour), show Leg Tabs */}
                {pkg.legs && pkg.legs.length > 0 ? (
                  <div>
                    <div className={styles.legsTabContainer} role="tablist">
                      {pkg.legs.map((leg, lIdx) => (
                        <button
                          key={lIdx}
                          type="button"
                          className={`${styles.legTabBtn} ${activeLegIndex === lIdx ? styles.activeLegTab : ""}`}
                          onClick={() => {
                            setActiveLegIndex(lIdx);
                            // Open first day of this leg
                            if (leg.days.length > 0) {
                              setOpenDays({ [leg.days[0].day]: true });
                            }
                          }}
                        >
                          Leg {leg.legNumber}: {leg.title} ({leg.daysRange})
                        </button>
                      ))}
                    </div>

                    <div className={styles.activeLegDetails}>
                      <h3 className={styles.legRouteTitle}>
                        Leg {pkg.legs[activeLegIndex].legNumber}: {pkg.legs[activeLegIndex].title}
                      </h3>
                      <div className={styles.legRouteSub}>
                        Route: {pkg.legs[activeLegIndex].route} · {pkg.legs[activeLegIndex].daysRange}
                      </div>
                    </div>

                    <div className={styles.timeline}>
                      {pkg.legs[activeLegIndex].days.map((dayItem, dIdx) => {
                        const isOpen = !!openDays[dayItem.day];
                        return (
                          <div key={dIdx} className={styles.dayCard}>
                            <div className={styles.dayHeader} onClick={() => toggleDay(dayItem.day)}>
                              <div className={styles.dayHeaderLeft}>
                                <span className={styles.dayBadge}>{dayItem.day}</span>
                                <h4 className={styles.dayTitle}>{dayItem.title}</h4>
                              </div>
                              <span className={styles.dayToggleIcon} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>
                                ▼
                              </span>
                            </div>

                            {isOpen && (
                              <div className={styles.dayBody}>
                                {dayItem.route && (
                                  <div className={styles.dayRouteBadge}>
                                    🛣️ {dayItem.route}
                                  </div>
                                )}
                                <p className={styles.dayDesc}>{dayItem.description}</p>

                                {dayItem.places && dayItem.places.length > 0 && (
                                  <div className={styles.placesList}>
                                    {dayItem.places.map((place, pIdx) => (
                                      <span key={pIdx} className={styles.placeTag}>
                                        📍 {place}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {(dayItem.overnight || dayItem.meals) && (
                                  <div className={styles.dayMetaFooter}>
                                    {dayItem.overnight && (
                                      <span className={styles.dayMetaItem}>
                                        🏨 <strong>Overnight:</strong> {dayItem.overnight}
                                      </span>
                                    )}
                                    {dayItem.meals && (
                                      <span className={styles.dayMetaItem}>
                                        🍽️ <strong>Meals:</strong> {dayItem.meals}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : pkg.itinerary && pkg.itinerary.length > 0 ? (
                  /* Standard Day-wise Timeline */
                  <div className={styles.timeline}>
                    {pkg.itinerary.map((dayItem, dIdx) => {
                      const isOpen = !!openDays[dayItem.day];
                      return (
                        <div key={dIdx} className={styles.dayCard}>
                          <div className={styles.dayHeader} onClick={() => toggleDay(dayItem.day)}>
                            <div className={styles.dayHeaderLeft}>
                              <span className={styles.dayBadge}>{dayItem.day}</span>
                              <h4 className={styles.dayTitle}>{dayItem.title}</h4>
                            </div>
                            <span className={styles.dayToggleIcon} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>
                              ▼
                            </span>
                          </div>

                          {isOpen && (
                            <div className={styles.dayBody}>
                              {dayItem.route && (
                                <div className={styles.dayRouteBadge}>
                                  🛣️ {dayItem.route}
                                </div>
                              )}
                              <p className={styles.dayDesc}>{dayItem.description}</p>

                              {dayItem.places && dayItem.places.length > 0 && (
                                <div className={styles.placesList}>
                                  {dayItem.places.map((place, pIdx) => (
                                    <span key={pIdx} className={styles.placeTag}>
                                      📍 {place}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {(dayItem.overnight || dayItem.meals) && (
                                <div className={styles.dayMetaFooter}>
                                  {dayItem.overnight && (
                                    <span className={styles.dayMetaItem}>
                                      🏨 <strong>Overnight:</strong> {dayItem.overnight}
                                    </span>
                                  )}
                                  {dayItem.meals && (
                                    <span className={styles.dayMetaItem}>
                                      🍽️ <strong>Meals:</strong> {dayItem.meals}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className={styles.leadText}>
                    Full custom day-by-day itinerary tailored to your exact travel dates. Contact our specialist curator to receive a day-by-day flight and transfer schedule.
                  </p>
                )}
              </div>

              {/* Inclusions & Exclusions Side-by-Side */}
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionEyebrow}>What to Expect</span>
                  <h2 className={styles.sectionTitle}>Inclusions & Exclusions</h2>
                </div>

                <div className={styles.incExcGrid}>
                  {/* Inclusions */}
                  <div className={styles.incBox}>
                    <div className={styles.boxHeader}>
                      <h3 className={styles.incTitle}>Package Inclusions</h3>
                    </div>
                    <ul className={styles.boxList}>
                      {(pkg.packageInclusions || pkg.inclusions).map((inc, iIdx) => (
                        <li key={iIdx} className={styles.incItem}>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className={styles.excBox}>
                    <div className={styles.boxHeader}>
                      <h3 className={styles.excTitle}>Package Exclusions</h3>
                    </div>
                    <ul className={styles.boxList}>
                      {(pkg.packageExclusions || [
                        "Airfare or train tickets to and from destination (can be booked on request)",
                        "Lunches, dinners, and alcoholic/non-alcoholic drinks unless specified",
                        "Monument entry tickets, safari permits, and camera fees",
                        "Personal expenses (laundry, room service, telephone calls, tips)",
                        "Travel and medical insurance",
                        "5% GST on the final invoice amount",
                      ]).map((exc, eIdx) => (
                        <li key={eIdx} className={styles.excItem}>
                          {exc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Optional Extensions Showcase (if present) */}
              {pkg.optionalExtensions && pkg.optionalExtensions.length > 0 && (
                <div className={styles.sectionCard}>
                  <div className={styles.sectionHeader}>
                    <span className={styles.sectionEyebrow}>Tailor Your Journey</span>
                    <h2 className={styles.sectionTitle}>Curated Modular Extensions</h2>
                    <p className={styles.leadText} style={{ marginTop: "0.5rem", marginBottom: 0 }}>
                      Customise and lengthen your itinerary seamlessly with any of our private regional extension modules:
                    </p>
                  </div>

                  <div className={styles.extensionsGrid}>
                    {pkg.optionalExtensions.map((ext, idx) => (
                      <div key={idx} className={styles.extensionCard}>
                        <div className={styles.extHeader}>
                          <h4 className={styles.extTitle}>{ext.title}</h4>
                          <span className={styles.extStayBadge}>{ext.stay}</span>
                        </div>
                        <p className={styles.extExp}>{ext.experiences}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Notes & Guidelines */}
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionEyebrow}>Important Guidelines</span>
                  <h2 className={styles.sectionTitle}>Travel Notes & Booking Terms</h2>
                </div>

                <ul className={styles.notesList}>
                  {(pkg.importantNotes || [
                    "All hotel bookings are subject to availability at the time of final confirmation.",
                    "Rates are dynamic and may vary during peak holiday dates (Diwali, Christmas, New Year, Long Weekends).",
                    "Guests must carry valid government photo identification (Aadhaar / Voter ID / Passport) for hotel check-ins and state border checkposts.",
                    "Sightseeing schedules are subject to local traffic, opening hours, and weather conditions in mountainous regions.",
                    "Dedicated 24x7 trip support will be assigned to you prior to departure.",
                  ]).map((note, nIdx) => (
                    <li key={nIdx}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sticky Booking Column */}
            <aside className={styles.rightCol}>
              <div className={styles.bookingCard}>
                <div className={styles.bookingPriceHeader}>
                  <span className={styles.priceSub}>Starting from</span>
                  <div className={styles.priceMain}>
                    {pkg.price} <small>/ person</small>
                  </div>
                  <span className={styles.priceTerms}>
                    {pkg.guests || "Twin sharing basis (Min 2 Persons)"}
                  </span>
                </div>

                <div className={styles.ctaActions}>
                  <Link
                    href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                    className={styles.primaryBookBtn}
                  >
                    Book / Inquire Now
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                  >
                    <span>💬</span>
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a href={CONTACT_TEL} className={styles.callExpertBtn}>
                    <span>📞</span>
                    <span>Call: {CONTACT_PHONE}</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className={styles.trustBadges}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>🛡️</span>
                    <div className={styles.trustText}>
                      <strong>100% Customized For You</strong>
                      Adjust hotel categories, days, routes, or car types anytime.
                    </div>
                  </div>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>🛎️</span>
                    <div className={styles.trustText}>
                      <strong>24x7 Dedicated Concierge</strong>
                      Direct WhatsApp manager on-duty throughout your trip.
                    </div>
                  </div>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>⭐</span>
                    <div className={styles.trustText}>
                      <strong>Verified Luxury Stays</strong>
                      Handpicked hygiene, scenic locations, and top hospitality.
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Tours Section */}
          {relatedPackages.length > 0 && (
            <div className={styles.relatedSection}>
              <span className={styles.sectionEyebrow}>More Journeys</span>
              <h2 className={styles.sectionTitle}>Similar India Holiday Packages</h2>

              <div className={styles.relatedGrid}>
                {relatedPackages.map((rel) => (
                  <Link key={rel.id} href={`/packages/${rel.slug}`} className={styles.relatedCard}>
                    <div className={styles.relatedImgWrap}>
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.mainImg}
                      />
                    </div>
                    <div className={styles.relatedBody}>
                      <div style={{ fontSize: "0.78rem", color: "var(--saffron)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                        {rel.destination}
                      </div>
                      <h3 className={styles.relatedTitle}>{rel.title}</h3>
                      <div className={styles.relatedPrice}>
                        {rel.price} <small style={{ fontSize: "0.75rem", color: "var(--muted)", fontWeight: "normal" }}>/ person</small>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
