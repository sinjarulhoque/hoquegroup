import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/hoque-industries/Hero";
import { StatsStrip } from "@/components/hoque-industries/StatsStrip";
import { About } from "@/components/hoque-industries/About";
import { WhatWeOffer } from "@/components/hoque-industries/WhatWeOffer";
import { Products } from "@/components/hoque-industries/Products";
import { WhyChooseUs } from "@/components/hoque-industries/WhyChooseUs";
import { MakeInIndia } from "@/components/hoque-industries/MakeInIndia";
import { Credentials } from "@/components/hoque-industries/Credentials";
import { AccordionSection } from "@/components/hoque-industries/AccordionSection";
import { CSR } from "@/components/hoque-industries/CSR";
import { Contact } from "@/components/hoque-industries/Contact";
import { RelatedCompanies } from "@/components/hoque-industries/RelatedCompanies";
import { BottomCta } from "@/components/hoque-industries/BottomCta";

export default function HoqueIndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsStrip />
      <About />
      <WhatWeOffer />
      <Products />
      <WhyChooseUs />
      <MakeInIndia />
      <Credentials />
      <AccordionSection />
      <CSR />
      <Contact />
      <RelatedCompanies />
      <BottomCta />
      <Footer />
    </main>
  );
}
