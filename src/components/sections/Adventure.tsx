import styles from "./Adventure.module.css";

export default function Adventure() {
  return (
    <section className={styles.section} id="adventure" aria-labelledby="adventure-title">
      <video
        className={styles.video}
        src="/paraglide.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className={styles.shade} aria-hidden />

      <div className={`container ${styles.content}`}>
        <h2 id="adventure-title" className={styles.title}>
          Chase the Skies <span data-slot="italic">Paragliding &amp; Skydiving</span>
        </h2>
        <a href="#contact" className={styles.btn}>
          Book your adventure
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <div className={styles.watermark} aria-hidden>
        <span>EXPLORE</span>
        <em>INDIA</em>
      </div>
    </section>
  );
}
