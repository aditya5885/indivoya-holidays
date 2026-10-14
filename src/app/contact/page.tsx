"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import SubNav from "@/components/layout/SubNav";
import Footer from "@/components/sections/Footer";
import { LocationPinIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { ADDRESS_TEXT, CONTACT_PHONE, CONTACT_PHONE_ALT, CONTACT_TEL, CONTACT_TEL_ALT, WHATSAPP_LINK } from "@/data/hero";
import styles from "./contact.module.css";

function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledPackage = searchParams.get("package") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: prefilledPackage || "",
    month: "",
    travelers: "2 Adults",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.formCard}>
      {submitted ? (
        <div className={styles.successState}>
          <div className={styles.checkIcon}>✓</div>
          <h2>Thank You, {form.name || "Explorer"}!</h2>
          <p>
            Your inquiry for <strong>{form.destination || "an India Holiday"}</strong> has been received. Our senior travel
            curator will call or WhatsApp you within <strong>2 hours</strong> with a customized quote and itinerary plan.
          </p>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                phone: "",
                email: "",
                destination: "",
                month: "",
                travelers: "2 Adults",
                notes: "",
              });
            }}
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Plan Your Custom Itinerary</h2>
          <p className={styles.formDesc}>
            Fill in your preferences below. Our destination architects will craft a complimentary personalized proposal.
          </p>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                required
                type="text"
                placeholder="e.g. Rahul Verma"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone / WhatsApp Number *</label>
              <input
                id="phone"
                required
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="e.g. rahul@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="destination">Preferred Destination or Package</label>
              <input
                id="destination"
                type="text"
                placeholder="e.g. Kerala Backwaters / Ladakh / Kashmir"
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="month">Approximate Travel Month</label>
              <input
                id="month"
                type="text"
                placeholder="e.g. November 2026"
                value={form.month}
                onChange={(e) => setForm({ ...form, month: e.target.value })}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="travelers">Guests</label>
              <select
                id="travelers"
                value={form.travelers}
                onChange={(e) => setForm({ ...form, travelers: e.target.value })}
              >
                <option>2 Adults (Couple / Honeymoon)</option>
                <option>Family (2 Adults + Kids)</option>
                <option>Small Group (4-8 Travelers)</option>
                <option>Solo Traveler</option>
                <option>Corporate / Large Group (10+)</option>
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="notes">Special Requests / Preferences</label>
            <textarea
              id="notes"
              rows={4}
              placeholder="Tell us about your holiday style: 4-star vs 5-star stays, private vehicle preferences, dietary needs, or bucket list experiences..."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Request Customized Itinerary &amp; Quote →
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <SubNav currentPath="/contact" />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>Connect With Our Travel Architects</span>
            <h1 className={styles.title}>
              Let&rsquo;s Plan Your <span data-slot="italic">Next Indian Journey</span>
            </h1>
            <p className={styles.lead}>
              Whether you need customized honeymoon plans, a private family road-trip, or corporate retreat bookings, we
              are just a phone call or message away.
            </p>
          </div>
        </section>

        {/* Form and Info Section */}
        <section className={styles.section}>
          <div className={`container ${styles.grid}`}>
            {/* Info Cards */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <PhoneIcon width={24} height={24} />
                </div>
                <div>
                  <h3>Direct Phone &amp; WhatsApp</h3>
                  <p>Speak directly with our senior destination consultant.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <a href={CONTACT_TEL} className={styles.phoneLink}>
                      {CONTACT_PHONE}
                    </a>
                    <a href={CONTACT_TEL_ALT} className={styles.phoneLink}>
                      {CONTACT_PHONE_ALT}
                    </a>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "#16a34a",
                      fontWeight: 700,
                      marginTop: "0.4rem",
                      textDecoration: "none",
                      fontSize: "0.92rem",
                    }}
                  >
                    Chat on WhatsApp →
                  </a>
                  <span className={styles.timings}>Mon – Sat · 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <MailIcon width={24} height={24} />
                </div>
                <div>
                  <h3>Email Inquiries</h3>
                  <p>Send us your custom travel requirements or group queries.</p>
                  <a href="mailto:hello@indivoyaholidays.com" className={styles.emailLink}>
                    hello@indivoyaholidays.com
                  </a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <LocationPinIcon width={24} height={24} />
                </div>
                <div>
                  <h3>Office Address</h3>
                  <p>Indivoya Holidays</p>
                  <address className={styles.address}>
                    {ADDRESS_TEXT}
                  </address>
                </div>
              </div>

              <div className={styles.trustBadge}>
                <h4>Why Book Directly With Us?</h4>
                <ul>
                  <li>Direct local operator rates without middlemen</li>
                  <li>Free 1-on-1 itinerary consultation</li>
                  <li>Flexible payment milestones and cancellation options</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <Suspense fallback={<div className={styles.formCard}>Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
