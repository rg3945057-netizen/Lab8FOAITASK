import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onRegisterClick: () => void;
  onScheduleClick: () => void;
}

export default function HeroSection({ onRegisterClick, onScheduleClick }: HeroSectionProps) {
  return (
    <section className="hero-section relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-accent flex items-center justify-center">
      {/* Background gradient overlay */}
      <div className="hero-background-overlay absolute inset-0 bg-black/20" />

      {/* Animated background elements */}
      <div className="hero-blob-1 absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="hero-blob-2 absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="hero-content relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 animate-fade-in">
          FestSphere
        </h1>
        <p className="hero-tagline text-lg sm:text-xl lg:text-2xl mb-3 font-light opacity-95">
          Your College Fest Experience Awaits
        </p>
        <p className="hero-meta text-sm sm:text-base lg:text-lg mb-8 opacity-90">
          <span className="hero-date">March 15-17, 2024</span> • <span className="hero-venue">Campus Grounds</span>
        </p>
        <p className="hero-description text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-85">
          Join us for an unforgettable celebration of music, culture, technology, and innovation. Three days of extraordinary performances, workshops, and gaming tournaments.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={onRegisterClick}
            className="button-primary bg-white text-primary hover:bg-white/90 font-semibold cursor-pointer"
          >
            Register Now
          </Button>
          <Button
            size="lg"
            onClick={onScheduleClick}
            variant="outline"
            className="button-secondary border-2 border-white text-white hover:bg-white/10 font-semibold cursor-pointer"
          >
            View Schedule
          </Button>
        </div>
      </div>
    </section>
  );
}
