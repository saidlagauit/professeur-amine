import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <About />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
