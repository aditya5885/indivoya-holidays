import HomeHero from "@/components/hero/HomeHero";
import Adventure from "@/components/sections/Adventure";
import Featured from "@/components/sections/Featured";
import Footer from "@/components/sections/Footer";
import Intro from "@/components/sections/Intro";
import TopDestinations from "@/components/sections/TopDestinations";
import Testimonials from "@/components/sections/Testimonials";
import RotatingShowcase from "@/components/sections/RotatingShowcase";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <main>
        <Intro />
        <Featured />
        <RotatingShowcase />
        <TopDestinations />
        <Adventure />
        <Testimonials />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
