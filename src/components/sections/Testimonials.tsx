import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    theme: "green",
    quote: (
      <>
        Before Indivoya our family vacations across India were chaotic and spent negotiating with multiple agents. Now we get <mark className={styles.highlightGreen}>100% custom day-by-day itineraries</mark> with verified stays and dedicated chauffeur guides on call.
      </>
    ),
    secondary: "In my 10 years of domestic travel, I have never experienced such transparent and attentive care.",
    name: "Ramakrishnan & Family",
    role: "Kerala Backwaters & Munnar Circuit",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    initial: "R",
  },
  {
    theme: "purple",
    quote: (
      <>
        Most tour operators just push cookie-cutter packages. Indivoya’s <mark className={styles.highlightPurple}>local ground experts in Leh &amp; Meghalaya</mark> actually tailored every single altitude stop to our pace and secured permits seamlessly.
      </>
    ),
    secondary: "It is the only travel companion worth booking with when heading off the beaten track.",
    name: "Devika Shenoy",
    role: "Ladakh High Passes & Pangong Expedition",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    initial: "D",
  },
  {
    theme: "slate",
    quote: (
      <>
        Indivoya cut our honeymoon planning stress by <mark className={styles.highlightSlate}>up to 95%</mark>. Within 2 hours of sharing our budget, we had a bespoke royal haveli stay, private lake boat and vintage desert safari ready to go.
      </>
    ),
    secondary: "Every transfer and dinner reservation felt bespoke and hyper-personalized.",
    name: "Rahul & Haripriya",
    role: "Royal Rajasthan Heritage Tour",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
    initial: "H",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials" aria-labelledby="testi-title">
      <div className="container">
        <header className={`${styles.head} rise`}>
          <span className={styles.eyebrow}>Traveler Stories</span>
          <h2 id="testi-title" className={styles.title}>
            Loved by <span data-slot="italic">Curious Explorers</span>
          </h2>
          <p className={styles.sub}>
            Real experiences from travelers who discovered the authentic colors of India with us.
          </p>
        </header>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, idx) => (
            <article key={idx} className={`${styles.card} ${styles[`theme_${t.theme}`]}`}>
              <div className={styles.quoteIcon} aria-hidden>
                “
              </div>
              <p className={styles.quote}>{t.quote}</p>
              {t.secondary && <p className={styles.secondary}>{t.secondary}</p>}
              <footer className={styles.author}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorHeader}>
                    <strong className={styles.name}>{t.name}</strong>
                    <span className={styles.verifiedBadge}>Verified Guest</span>
                  </div>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
