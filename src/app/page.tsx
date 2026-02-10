import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TrainingGallery } from "@/components/sections/TrainingGallery";
import { WhyMeSection } from "@/components/sections/WhyMeSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { BooksPreview } from "@/components/sections/BooksPreview";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TrainingGallery />
      <WhyMeSection />
      <ClientsSection />
      <BooksPreview />
      <ContactSection />
    </main>
  );
}
