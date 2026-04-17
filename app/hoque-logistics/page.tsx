import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/hoque-logistics/Hero";
import { StatsStrip } from "@/components/hoque-logistics/StatsStrip";
import { About } from "@/components/hoque-logistics/About";
import { WhyChooseUs } from "@/components/hoque-logistics/WhyChooseUs";
import { Services } from "@/components/hoque-logistics/Services";
import { HowItWorks } from "@/components/hoque-logistics/HowItWorks";
import { ServiceDetailsTable } from "@/components/hoque-logistics/ServiceDetailsTable";
import { PulsesSupply } from "@/components/hoque-logistics/PulsesSupply";
import { Credentials } from "@/components/hoque-logistics/Credentials";
import { Partners } from "@/components/hoque-logistics/Partners";
import { Contact } from "@/components/hoque-logistics/Contact";
import { CSR } from "@/components/hoque-logistics/CSR";
import { RelatedCompanies } from "@/components/hoque-logistics/RelatedCompanies";
import { BottomCta } from "@/components/hoque-logistics/BottomCta";

export default function HoqueLogisticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsStrip />
      <About />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <ServiceDetailsTable />
      <PulsesSupply />
      <Credentials />
      <Partners />
      <Contact />
      <CSR />
      <RelatedCompanies />
      <BottomCta />
      <Footer />
    </main>
  );
}
