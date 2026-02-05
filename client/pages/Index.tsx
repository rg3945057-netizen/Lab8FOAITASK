import { useRef, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SpeakersSection from "@/components/sections/SpeakersSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import Footer from "@/components/sections/Footer";
import RegistrationModal from "@/components/RegistrationModal";

export default function Index() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const timelineRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openRegistration = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistration = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        onRegisterClick={openRegistration}
        onScheduleClick={() => scrollToSection(timelineRef)}
      />
      <div ref={overviewRef}>
        <OverviewSection />
      </div>
      <div ref={timelineRef}>
        <TimelineSection />
      </div>
      <SpeakersSection />
      <RegistrationSection onRegisterClick={openRegistration} />
      <Footer />

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={closeRegistration}
      />
    </div>
  );
}
