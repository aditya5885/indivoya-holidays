import Image from "next/image";
import { COLLAGE } from "@/data/home";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.section} id="about" aria-labelledby="intro-title">
      <div className={`container ${styles.grid}`}>
        {COLLAGE.map((c, i) => (
          <figure key={c.src} className={`${styles.photo} ${styles[`p${i + 1}`]}`}>
            <Image src={c.src} alt={c.alt} fill sizes="(max-width: 900px) 45vw, 22vw" className={styles.img} />
          </figure>
        ))}

        <div className={`${styles.copy} rise`}>
          <Image
            src="/logo-color.png"
            alt=""
            width={640}
            height={527}
            className={styles.mark}
            aria-hidden
          />
          <p className={styles.eyebrow}>Most Popular Tours</p>
          <h2 id="intro-title" className={styles.title}>
            Let&rsquo;s Discover India With Our <span data-slot="italic">Excellent Eyes</span>
          </h2>
          <p className={styles.text}>
            Whether you dream of a romantic backwater escape, a family-friendly heritage trail or a solo Himalayan
            journey, our local experts craft tailored itineraries across all of India that exceed every expectation.
          </p>
          <a href="#destinations" className={styles.btn}>
            Take a tour
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
