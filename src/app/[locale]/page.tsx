import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import Physician from "@/components/Physician";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <PromoBanner />
      <main>
        <Hero />
        <Physician />
        <Services />
        <Pricing />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
