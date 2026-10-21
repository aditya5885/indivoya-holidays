import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubNav from "@/components/layout/SubNav";
import Footer from "@/components/sections/Footer";
import { TOUR_PACKAGES } from "@/data/packagesData";
import PackageDetailClient from "./PackageDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return TOUR_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = TOUR_PACKAGES.find((p) => p.slug === slug);
  if (!pkg) {
    return { title: "Package Not Found | Indivoya Holidays" };
  }

  const metaTitle = `${pkg.title} (${pkg.duration}) | Indivoya Holidays`;
  const metaDescription =
    pkg.overview ||
    `Book ${pkg.title} across ${pkg.destination}. Handcrafted itinerary with 4-star stays, private AC vehicle, daily breakfast, and local sightseeing. Starting from ${pkg.price}.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      pkg.title,
      `${pkg.destination} tour package`,
      `${pkg.state} holiday itinerary`,
      "India tour packages",
      "Indivoya Holidays",
    ],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [pkg.image],
    },
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = TOUR_PACKAGES.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  // Related packages in the same theme or destination
  const relatedPackages = TOUR_PACKAGES.filter(
    (p) => p.slug !== pkg.slug && (p.theme === pkg.theme || p.state === pkg.state)
  ).slice(0, 3);

  // Fallback if not enough related
  if (relatedPackages.length < 3) {
    const extra = TOUR_PACKAGES.filter(
      (p) => p.slug !== pkg.slug && !relatedPackages.some((r) => r.id === p.id)
    ).slice(0, 3 - relatedPackages.length);
    relatedPackages.push(...extra);
  }

  return (
    <>
      <SubNav currentPath="/packages" />
      <main>
        <PackageDetailClient pkg={pkg} relatedPackages={relatedPackages} />
      </main>
      <Footer />
    </>
  );
}
