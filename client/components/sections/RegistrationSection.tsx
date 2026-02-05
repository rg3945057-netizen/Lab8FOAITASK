import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles, Users } from "lucide-react";

interface RegistrationSectionProps {
  onRegisterClick: () => void;
}

export default function RegistrationSection({
  onRegisterClick,
}: RegistrationSectionProps) {
  return (
    <section className="registration-section py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>

      <div className="registration-container max-w-5xl mx-auto relative z-10">
        <div className="registration-content bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16">
          {/* Content */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-3 rounded-full bg-white/10 border border-white/20">
              <span className="text-white font-semibold text-sm">
                LIMITED TIME OFFER
              </span>
            </div>
            <h2 className="registration-title text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to Join the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Celebration?
              </span>
            </h2>
            <p className="registration-description text-lg sm:text-xl text-white/90 mb-4 max-w-3xl mx-auto">
              Secure your spot for FestSphere today and be part of an
              unforgettable experience with thousands of students, amazing
              performers, and incredible opportunities.
            </p>
            <p className="text-white/70 text-sm">
              ✨ Early registrations get exclusive perks and discounts
            </p>
          </div>

          {/* Registration Features */}
          <div className="registration-features grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="feature-card bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-primary/50 transition-all hover:bg-white/15 group cursor-pointer">
              <div className="feature-icon text-5xl mb-4 group-hover:scale-110 transition-transform">
                🎟️
              </div>
              <h3 className="feature-title text-white font-bold text-lg mb-2">
                Early Bird Pricing
              </h3>
              <p className="feature-text text-white/80 text-sm leading-relaxed">
                Register before March 10 and get 30% off your ticket price
              </p>
            </div>
            <div className="feature-card bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-accent/50 transition-all hover:bg-white/15 group cursor-pointer">
              <div className="feature-icon text-5xl mb-4 group-hover:scale-110 transition-transform">
                🎁
              </div>
              <h3 className="feature-title text-white font-bold text-lg mb-2">
                Exclusive Perks
              </h3>
              <p className="feature-text text-white/80 text-sm leading-relaxed">
                Priority access to workshops, meet-and-greets, and special
                events
              </p>
            </div>
            <div className="feature-card bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-secondary/50 transition-all hover:bg-white/15 group cursor-pointer">
              <div className="feature-icon text-5xl mb-4 group-hover:scale-110 transition-transform">
                👥
              </div>
              <h3 className="feature-title text-white font-bold text-lg mb-2">
                Group Discounts
              </h3>
              <p className="feature-text text-white/80 text-sm leading-relaxed">
                Register with friends and save even more on group packages
              </p>
            </div>
          </div>

          {/* Benefits List */}
          <div className="registration-benefits grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="benefit-item flex items-center gap-3 text-white">
              <Zap className="text-accent flex-shrink-0" size={24} />
              <span>Lifetime access to all fest content and recordings</span>
            </div>
            <div className="benefit-item flex items-center gap-3 text-white">
              <Sparkles className="text-primary flex-shrink-0" size={24} />
              <span>Exclusive merchandise and festival memorabilia</span>
            </div>
            <div className="benefit-item flex items-center gap-3 text-white">
              <Users className="text-secondary flex-shrink-0" size={24} />
              <span>Networking opportunities with 5000+ participants</span>
            </div>
            <div className="benefit-item flex items-center gap-3 text-white">
              <ArrowRight className="text-accent flex-shrink-0" size={24} />
              <span>Certificate of participation for your portfolio</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={onRegisterClick}
              className="registration-button bg-gradient-to-r from-white to-gray-100 text-primary hover:shadow-2xl hover:shadow-white/50 font-black inline-flex items-center gap-3 text-lg py-8 px-12 rounded-xl transform hover:-translate-y-1 transition-all cursor-pointer"
            >
              🚀 Register Now & Secure Your Spot
              <ArrowRight size={24} />
            </Button>
            <p className="registration-info text-white/60 text-sm mt-8">
              Have questions? Email us at{" "}
              <span className="font-semibold text-white">
                info@festsphere.com
              </span>{" "}
              or call{" "}
              <span className="font-semibold text-white">+1 (234) 567-890</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
