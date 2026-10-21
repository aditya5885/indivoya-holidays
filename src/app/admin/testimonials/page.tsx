"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./admin-testimonials.module.css";

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  company?: string;
  location?: string;
  category?: string;
  rating: number;
  tourName: string;
  review: string;
  date: string;
  verified: boolean;
  avatarColor?: string;
  createdAt: string;
};

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<string>("connecting...");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    role: "Family Vacationer",
    company: "",
    location: "Mumbai, Maharashtra",
    tourName: "Kerala Backwaters & Munnar Circuit",
    rating: 5,
    category: "traveler",
    review: "",
    verified: true,
  });

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/testimonials", { cache: "no-store" });
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setItems(json.data);
        setSource(json.source === "php_backend" ? "PHP SQLite API (Port 8085 Connected)" : "Local Storage Synced");
      }
    } catch (err) {
      console.error("Failed to load testimonials:", err);
      setSource("Offline Mode");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const showToast = (msg: string) => {
    setStatusMsg(msg);
    setTimeout(() => setStatusMsg(null), 3500);
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.review.trim()) {
      alert("Please provide reviewer name and review text.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (json.success && json.data) {
        setItems((prev) => [json.data, ...prev]);
        setIsModalOpen(false);
        setFormData({
          name: "",
          role: "Family Vacationer",
          company: "",
          location: "Bengaluru, Karnataka",
          tourName: "Curated India Tour Package",
          rating: 5,
          category: "traveler",
          review: "",
          verified: true,
        });
        showToast("Testimonial successfully created and published!");
      } else {
        alert(json.message || "Failed to create testimonial.");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding testimonial.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete the testimonial by "${name}"?`)) return;

    try {
      const res = await fetch(`/api/testimonials?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (json.success) {
        setItems((prev) => prev.filter((item) => item.id !== id));
        showToast(`Testimonial by ${name} deleted.`);
      } else {
        alert(json.message || "Deletion failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting testimonial.");
    }
  };

  // Filtered Testimonials
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCat = categoryFilter === "all" || (item.category || "traveler") === categoryFilter;
      const q = search.toLowerCase();
      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(q) ||
        (item.location && item.location.toLowerCase().includes(q)) ||
        (item.tourName && item.tourName.toLowerCase().includes(q)) ||
        (item.review && item.review.toLowerCase().includes(q)) ||
        (item.company && item.company.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [items, search, categoryFilter]);

  // Statistics
  const stats = useMemo(() => {
    const total = items.length;
    const avg = total > 0 ? (items.reduce((acc, t) => acc + (t.rating || 5), 0) / total).toFixed(1) : "5.0";
    const verified = items.filter((t) => t.verified).length;
    const partners = items.filter((t) => t.category === "agent" || t.category === "corporate").length;
    return { total, avg, verified, partners };
  }, [items]);

  return (
    <div className={styles.adminWrap}>
      <div className="container">
        {/* Top Header Bar */}
        <header className={styles.topBar}>
          <div className={styles.titleArea}>
            <span className={styles.badge}>
              <span className={styles.badgeDot} />
              {source}
            </span>
            <h1 className={styles.pageTitle}>Testimonials Management Desk</h1>
            <p className={styles.pageDesc}>
              Publish, review, and organize traveler &amp; trade partner reviews in real time with PHP &amp; SQLite synchronization.
            </p>
          </div>

          <div className={styles.actionsArea}>
            <button type="button" onClick={loadTestimonials} className={styles.btnSecondary} title="Reload Reviews">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 21h5v-5" />
              </svg>
              <span>Refresh</span>
            </button>

            <Link href="/#testimonials" className={styles.btnSecondary} target="_blank">
              <span>View On Website</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>

            <button type="button" onClick={() => setIsModalOpen(true)} className={styles.btnPrimary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>Add Testimonial</span>
            </button>
          </div>
        </header>

        {/* Live Notification Banner */}
        {statusMsg && (
          <div
            style={{
              padding: "0.85rem 1.25rem",
              background: "#ecfdf5",
              color: "#065f46",
              borderRadius: "12px",
              border: "1px solid #a7f3d0",
              fontWeight: 600,
              fontSize: "0.88rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>✓</span> {statusMsg}
          </div>
        )}

        {/* Stats Grid */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statInfo}>
              <span>Total Reviews</span>
              <strong>{stats.total}</strong>
            </div>
            <div className={`${styles.statIcon} ${styles.statIconGold}`}>★</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statInfo}>
              <span>Average Rating</span>
              <strong>{stats.avg} / 5</strong>
            </div>
            <div className={`${styles.statIcon} ${styles.statIconGreen}`}>★</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statInfo}>
              <span>Verified Travelers</span>
              <strong>{stats.verified}</strong>
            </div>
            <div className={`${styles.statIcon} ${styles.statIconBlue}`}>✓</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statInfo}>
              <span>B2B / Partner Reviews</span>
              <strong>{stats.partners}</strong>
            </div>
            <div className={`${styles.statIcon} ${styles.statIconOrange}`}>🤝</div>
          </div>
        </section>

        {/* Filter Controls */}
        <div className={styles.controlsRow}>
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by reviewer, tour circuit, location, or words..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.categoryPills}>
            {[
              { id: "all", label: "All Categories" },
              { id: "traveler", label: "Travelers" },
              { id: "agent", label: "Trade Partners" },
              { id: "corporate", label: "Corporate" },
              { id: "pilgrim", label: "Pilgrimage" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.catBtn} ${categoryFilter === cat.id ? styles.catBtnActive : ""}`}
                onClick={() => setCategoryFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Table */}
        <section className={styles.tableCard}>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Reviewer</th>
                  <th>Location</th>
                  <th>Tour Circuit</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: "center", padding: "3rem", color: "#6b7280" }}>
                      Loading testimonials from database...
                    </td>
                  </tr>
                ) : filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: "center", padding: "3rem", color: "#6b7280" }}>
                      No testimonials match your filter. Click &ldquo;Add Testimonial&rdquo; to create one.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((t) => (
                    <tr key={t.id}>
                      <td>
                        <div className={styles.reviewerCol}>
                          <div className={styles.avatarInitial}>{t.name.charAt(0)}</div>
                          <div className={styles.reviewerMeta}>
                            <strong>{t.name}</strong>
                            <small>{t.role || "Guest"}{t.company ? ` • ${t.company}` : ""}</small>
                            <p className={styles.reviewTextSnippet}>&ldquo;{t.review}&rdquo;</p>
                          </div>
                        </div>
                      </td>
                      <td style={{ color: "#4b5563" }}>{t.location || "India"}</td>
                      <td style={{ color: "var(--green-950)", fontWeight: 600 }}>{t.tourName}</td>
                      <td>
                        <div className={styles.starsRow}>
                          {"★".repeat(t.rating)}
                          <span style={{ fontSize: "0.82rem", fontWeight: 700, marginLeft: "4px", color: "#111827" }}>
                            {t.rating}.0
                          </span>
                        </div>
                      </td>
                      <td style={{ color: "#6b7280", fontSize: "0.82rem", whiteSpace: "nowrap" }}>{t.date}</td>
                      <td>
                        {t.verified ? (
                          <span className={styles.verifiedPill}>✓ Verified</span>
                        ) : (
                          <span style={{ color: "#9ca3af", fontSize: "0.75rem" }}>Pending</span>
                        )}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <button
                          type="button"
                          onClick={() => handleDelete(t.id, t.name)}
                          className={styles.deleteBtn}
                          title="Delete this testimonial"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Modal: Add Testimonial */}
      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHead}>
              <h2 className={styles.modalTitle}>Publish New Testimonial</h2>
              <button type="button" onClick={() => setIsModalOpen(false)} className={styles.closeBtn}>
                &times;
              </button>
            </div>

            <form onSubmit={handleAddSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Reviewer Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Varma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Designation / Role</label>
                  <input
                    type="text"
                    placeholder="e.g. Family Vacationer, Trade Partner"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Company / Agency (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Skylink Tours or Self"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Location (City, State)</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Maharashtra"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Tour / Package Circuit *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kerala Backwaters & Munnar Circuit"
                    value={formData.tourName}
                    onChange={(e) => setFormData({ ...formData, tourName: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="traveler">Guest Traveler / Family</option>
                    <option value="agent">Trade Partner / DMC Client</option>
                    <option value="corporate">Corporate / Offsite Delegate</option>
                    <option value="pilgrim">Pilgrim / Senior Citizen</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Star Rating (1 - 5)</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  >
                    <option value={5}>★★★★★ (5 Stars - Exceptional)</option>
                    <option value={4}>★★★★☆ (4 Stars - Very Good)</option>
                    <option value={3}>★★★☆☆ (3 Stars - Good)</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Review Verification</label>
                  <label className={styles.checkboxRow}>
                    <input
                      type="checkbox"
                      checked={formData.verified}
                      onChange={(e) => setFormData({ ...formData, verified: e.target.checked })}
                    />
                    <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>Mark as Verified Guest</span>
                  </label>
                </div>

                <div className={`${styles.formGroup} ${styles.fullCol}`}>
                  <label>Testimonial Story / Review *</label>
                  <textarea
                    required
                    placeholder="Write the guest's authentic experience, itinerary feedback, driver quality, hotel stays, etc."
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.modalFoot}>
                <button type="button" onClick={() => setIsModalOpen(false)} className={styles.btnSecondary}>
                  Cancel
                </button>
                <button type="submit" disabled={submitting} className={styles.btnPrimary}>
                  {submitting ? "Publishing..." : "Publish Testimonial"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
