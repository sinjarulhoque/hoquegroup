import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/kadbanu-trust/Hero";
import { StatsStrip } from "@/components/kadbanu-trust/StatsStrip";
import { About } from "@/components/kadbanu-trust/About";
import { Vision } from "@/components/kadbanu-trust/Vision";
import { MissionPrograms } from "@/components/kadbanu-trust/MissionPrograms";
import { FeaturedInitiative } from "@/components/kadbanu-trust/FeaturedInitiative";
import { PhotoGallery } from "@/components/kadbanu-trust/PhotoGallery";
import { FounderProfile } from "@/components/kadbanu-trust/FounderProfile";
import { GetInvolved } from "@/components/kadbanu-trust/GetInvolved";
import { Contact } from "@/components/kadbanu-trust/Contact";
import { RelatedCompanies } from "@/components/kadbanu-trust/RelatedCompanies";
import { BottomCta } from "@/components/kadbanu-trust/BottomCta";

export default function KadbanuTrustPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsStrip />
      <About />
      <Vision />
      <MissionPrograms />
      <FeaturedInitiative />
      <PhotoGallery />
      <FounderProfile />
      <GetInvolved />
      <Contact />
      <RelatedCompanies />
      <BottomCta />
      <Footer />
    </main>
  );
}
