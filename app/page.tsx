import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { About } from "@/components/About";
import { CtaBanner } from "@/components/CtaBanner";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Portfolio } from "@/components/Portfolio";
import { StatsCounter } from "@/components/StatsCounter";
import { EnquiryForm } from "@/components/EnquiryForm";
import { GroupCompanies } from "@/components/GroupCompanies";
import { FAQ } from "@/components/FAQ";
import { BottomCta } from "@/components/BottomCta";
import { LatestNews } from "@/components/LatestNews";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <WhatWeOffer />
      <About />
      <CtaBanner />
      <HowItWorks />
      <Testimonials />
      <Portfolio />
      <StatsCounter />
      <EnquiryForm />
      <GroupCompanies />
      <FAQ />
      <BottomCta />
      <LatestNews />
      <Footer />
    </main>
  );
}
