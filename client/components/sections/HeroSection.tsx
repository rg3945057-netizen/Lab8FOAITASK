import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onRegisterClick: () => void;
  onScheduleClick: () => void;
}

export default function HeroSection({
  onRegisterClick,
  onScheduleClick,
}: HeroSectionProps) {
  return (
    <section className="hero-section relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center pt-20 pb-20">
      {/* Animated Background Elements */}
      <div className="hero-bg-wrapper absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="hero-orb hero-orb-1 absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="hero-orb hero-orb-2 absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s" }}
        />
        <div
          className="hero-orb hero-orb-3 absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-secondary/15 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="hero-badge inline-block mb-6 animate-fade-in">
          <span className="badge-text inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-semibold text-white backdrop-blur-sm hover:border-primary/50 transition-all">
            ✨ Mark Your Calendar for the Biggest Fest of the Year
          </span>
        </div>

        {/* Main Title with Letter Spacing */}
        <h1
          className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight tracking-tight animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-accent">
            FestSphere
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-tagline text-xl sm:text-2xl lg:text-3xl font-light mb-4 text-white/90 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Your Ultimate College Fest Experience
        </p>

        {/* Animated Divider */}
        <div
          className="hero-divider flex items-center justify-center gap-4 mb-6 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <span className="text-white/70 font-light">
            3 Days of Celebration
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
        </div>

        {/* Date & Venue Info */}
        <div
          className="hero-meta mb-8 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-white/80">
            <div className="meta-item flex items-center justify-center gap-2">
              <span className="text-2xl">📅</span>
              <div className="text-left">
                <p className="text-xs text-white/60">Dates</p>
                <p className="font-semibold text-white">March 15-17, 2024</p>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/20" />
            <div className="meta-item flex items-center justify-center gap-2">
              <span className="text-2xl">📍</span>
              <div className="text-left">
                <p className="text-xs text-white/60">Venue</p>
                <p className="font-semibold text-white">Campus Grounds</p>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/20" />
            <div className="meta-item flex items-center justify-center gap-2">
              <span className="text-2xl">🎪</span>
              <div className="text-left">
                <p className="text-xs text-white/60">Events</p>
                <p className="font-semibold text-white">10+ Categories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="hero-description text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-white/80 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Join thousands of students for an unforgettable celebration of music,
          culture, technology, and innovation. Three days of extraordinary
          performances, competitions, workshops, and memories that will last a
          lifetime.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            onClick={onRegisterClick}
            className="button-primary bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-white font-bold py-6 px-10 text-lg rounded-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            🎫 Register Now
          </Button>
          <Button
            size="lg"
            onClick={onScheduleClick}
            variant="outline"
            className="button-secondary border-2 border-white text-white hover:bg-white/10 hover:shadow-lg font-bold py-6 px-10 text-lg rounded-lg transition-all duration-300 cursor-pointer"
          >
            📅 View Schedule
          </Button>
        </div>

        {/* Trust Indicators */}
        <div
          className="hero-trust mt-12 text-white/60 text-sm animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="mb-4">Trusted by 5,000+ students</p>
          <div className="flex justify-center gap-4">
            <div className="trust-item">⭐ 4.9 Stars (200+ reviews)</div>
            <div className="trust-item">✓ Verified Registration</div>
            <div className="trust-item">🔒 Secure & Safe</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>

      {/* Featured Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="stat">
              <div className="stat-number text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                10+
              </div>
              <div className="stat-label text-white/60 text-sm">
                Event Categories
              </div>
            </div>
            <div className="stat">
              <div className="stat-number text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                5000+
              </div>
              <div className="stat-label text-white/60 text-sm">
                Participants
              </div>
            </div>
            <div className="stat">
              <div className="stat-number text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                ₹10L+
              </div>
              <div className="stat-label text-white/60 text-sm">Prize Pool</div>
            </div>
            <div className="stat">
              <div className="stat-number text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                3
              </div>
              <div className="stat-label text-white/60 text-sm">
                Days of Fun
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
