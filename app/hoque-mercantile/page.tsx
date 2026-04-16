import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/hoque-mercantile/Hero";
import { QuickStats } from "@/components/hoque-mercantile/QuickStats";
import { About } from "@/components/hoque-mercantile/About";
import { DirectorsNote } from "@/components/hoque-mercantile/DirectorsNote";
import { Products } from "@/components/hoque-mercantile/Products";
import { WhyChooseUs } from "@/components/hoque-mercantile/WhyChooseUs";
import { Credentials } from "@/components/hoque-mercantile/Credentials";
import { AccordionSection } from "@/components/hoque-mercantile/AccordionSection";
import { CSR } from "@/components/hoque-mercantile/CSR";
import { Contact } from "@/components/hoque-mercantile/Contact";
import { RelatedCompanies } from "@/components/hoque-mercantile/RelatedCompanies";

export default function HoqueMercantilePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <QuickStats />
      <About />
      <DirectorsNote />
      <Products />
      <WhyChooseUs />
      <Credentials />
      <AccordionSection />
      <CSR />
      <Contact />
      <RelatedCompanies />
      <Footer />
    </main>
  );
}
