import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SpeakersSection from "@/components/sections/SpeakersSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OverviewSection />
      <TimelineSection />
      <SpeakersSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
}
