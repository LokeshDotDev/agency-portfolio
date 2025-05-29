import HeroSection from "@/components/custom/HeroSection";
import ServicesSection from "@/components/custom/ServicesSection";
import VideoCard from "@/components/custom/VideoCard";
import CaseStudiesSection from "@/components/custom/CaseStudiesSection";
import TestimonialsSection from "@/components/custom/TestimonialsSection";
import AboutTeamSection from "@/components/custom/AboutTeamSection";
import TechStackSection from "@/components/custom/TechStackSection";
import ContactSection from "@/components/custom/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoCard />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <AboutTeamSection />
      <TechStackSection />
      <ContactSection />
    </>
  );
}
