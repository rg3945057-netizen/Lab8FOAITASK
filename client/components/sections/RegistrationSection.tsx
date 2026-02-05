import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function RegistrationSection() {
  return (
    <section className="registration-section py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-purple-500 to-accent">
      <div className="registration-container max-w-4xl mx-auto text-center">
        {/* Background decorative elements */}
        <div className="registration-decoration absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border-2 border-white" />
        </div>

        {/* Content */}
        <div className="registration-content relative z-10">
          <h2 className="registration-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Join the Celebration?
          </h2>
          <p className="registration-description text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Secure your spot for FestSphere today and be part of an unforgettable experience with thousands of students, amazing performers, and incredible opportunities.
          </p>

          {/* Registration Features */}
          <div className="registration-features grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 mt-10">
            <div className="feature-card">
              <div className="feature-icon text-3xl mb-2">🎟️</div>
              <h3 className="feature-title text-white font-semibold mb-1">Early Bird Pricing</h3>
              <p className="feature-text text-white/80 text-sm">Get 30% off if you register before March 10</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon text-3xl mb-2">🎁</div>
              <h3 className="feature-title text-white font-semibold mb-1">Exclusive Perks</h3>
              <p className="feature-text text-white/80 text-sm">Priority access to workshops and meet-and-greets</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon text-3xl mb-2">👥</div>
              <h3 className="feature-title text-white font-semibold mb-1">Group Discounts</h3>
              <p className="feature-text text-white/80 text-sm">Register with friends and save even more</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="registration-button bg-white text-primary hover:bg-white/90 font-semibold inline-flex items-center gap-2 text-base sm:text-lg"
          >
            Register Now <ArrowRight size={20} />
          </Button>

          {/* Additional info */}
          <p className="registration-info text-white/75 text-sm mt-6">
            Questions? Email us at <span className="font-semibold">info@festsphere.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
