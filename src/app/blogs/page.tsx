import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubNav from "@/components/layout/SubNav";
import Footer from "@/components/sections/Footer";
import { BLOG_POSTS } from "@/data/pagesData";
import styles from "./blogs.module.css";

export const metadata: Metadata = {
  title: "India Travel Blog & Guides | Indivoya Holidays - SEO Travel Insights",
  description:
    "Expert travel guides, seasonal packing tips, itinerary planning, and hidden gem insights across India. Written by local destination specialists at Indivoya Holidays.",
  keywords: [
    "India travel blog",
    "best time to visit Kerala",
    "Ladakh travel tips",
    "Rajasthan itinerary",
    "Andaman island guide",
    "India holiday advice",
  ],
};

export default function BlogsPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <>
      <SubNav currentPath="/blogs" />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>Travel Inspiration &amp; Insights</span>
            <h1 className={styles.title}>
              The Indivoya <span data-slot="italic">India Journal</span>
            </h1>
            <p className={styles.lead}>
              In-depth travel guides, weather forecasts, high-altitude advice, and local culture secrets to help you
              explore India like an insider.
            </p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            {/* Featured Hero Article */}
            <article className={styles.featuredPost}>
              <div className={styles.featuredImageWrap}>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  className={styles.featuredImg}
                  priority
                />
                <span className={styles.featuredBadge}>Editor’s Pick</span>
              </div>

              <div className={styles.featuredBody}>
                <div className={styles.metaRow}>
                  <span className={styles.category}>{featured.category}</span>
                  <span className={styles.readTime}>• {featured.readTime}</span>
                  <span className={styles.date}>• {featured.date}</span>
                </div>

                <h2 className={styles.featuredTitle}>
                  <Link href={`/blogs/${featured.slug}`}>{featured.title}</Link>
                </h2>

                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>

                <div className={styles.authorRow}>
                  <div className={styles.authorAvatar}>
                    {featured.author.name.charAt(0)}
                  </div>
                  <div>
                    <strong className={styles.authorName}>{featured.author.name}</strong>
                    <span className={styles.authorRole}>{featured.author.role}</span>
                  </div>
                  <Link href={`/blogs/${featured.slug}`} className={styles.readMoreBtn}>
                    Read Full Guide →
                  </Link>
                </div>
              </div>
            </article>

            {/* Articles Grid */}
            <div className={styles.sectionHeader}>
              <h2>Latest Travel Guides &amp; Tips</h2>
              <p>Essential advice curated for curious explorers across India.</p>
            </div>

            <div className={styles.grid}>
              {rest.map((post) => (
                <article key={post.id} className={styles.card}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.cardImg}
                    />
                    <span className={styles.categoryBadge}>{post.category}</span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className={styles.cardTitle}>
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className={styles.cardExcerpt}>{post.excerpt}</p>

                    <div className={styles.cardFooter}>
                      <span className={styles.cardAuthor}>By {post.author.name}</span>
                      <Link href={`/blogs/${post.slug}`} className={styles.cardLink}>
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
