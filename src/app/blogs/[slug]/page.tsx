import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubNav from "@/components/layout/SubNav";
import Footer from "@/components/sections/Footer";
import { BLOG_POSTS } from "@/data/pagesData";
import styles from "./singleBlog.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Not Found | Indivoya Holidays" };

  return {
    title: `${post.metaTitle} | Indivoya Holidays`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SubNav currentPath="/blogs" />
      <main className={styles.main}>
        {/* Article Header */}
        <header className={styles.header}>
          <div className="container">
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blogs">Blogs</Link>
              <span>/</span>
              <span>{post.category}</span>
            </div>

            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.authorBar}>
              <div className={styles.avatar}>{post.author.name.charAt(0)}</div>
              <div>
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
              </div>
              <div className={styles.metaInfo}>
                <span>Published: {post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container">
          <div className={styles.imageWrap}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className={styles.bannerImg}
              priority
            />
          </div>
        </div>

        {/* Article Body */}
        <section className={styles.contentWrap}>
          <div className={`container ${styles.grid}`}>
            <article className={styles.article}>
              <p className={styles.lead}>{post.excerpt}</p>

              {post.content.map((sec, i) => (
                <div key={i} className={styles.sectionBlock}>
                  <h2>{sec.heading}</h2>
                  {sec.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              ))}

              <div className={styles.tagList}>
                <strong>Keywords:</strong>
                {post.keywords.map((k) => (
                  <span key={k} className={styles.tag}>
                    #{k}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar CTA */}
            <aside className={styles.sidebar}>
              <div className={styles.stickyCard}>
                <span className={styles.sidebarBadge}>Plan Your Journey</span>
                <h3>Want to experience this in person?</h3>
                <p>
                  Speak with our certified tour experts to create a personalized, private holiday plan.
                </p>
                <Link href="/packages" className={styles.sidebarBtn}>
                  View Related Packages
                </Link>
                <Link href="/contact" className={styles.sidebarContactLink}>
                  Contact Travel Desk →
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
