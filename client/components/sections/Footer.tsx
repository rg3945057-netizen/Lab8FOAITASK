import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  onRegisterClick?: () => void;
  onScheduleClick?: () => void;
}

export default function Footer({ onRegisterClick, onScheduleClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href === "#register" && onRegisterClick) {
      onRegisterClick();
    } else if (href === "#schedule" && onScheduleClick) {
      onScheduleClick();
    }
  };

  return (
    <footer className="footer bg-foreground text-white">
      <div className="footer-content px-4 sm:px-6 lg:px-8 py-16">
        <div className="footer-container max-w-6xl mx-auto">
          {/* Footer Top Section */}
          <div className="footer-top grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="footer-brand">
              <h3 className="footer-logo text-2xl font-bold mb-2">FestSphere</h3>
              <p className="footer-tagline text-white/70 text-sm">
                Your ultimate college fest experience platform
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-section-title font-semibold mb-4">Quick Links</h4>
              <ul className="footer-link-list space-y-2">
                <li>
                  <a href="#home" className="footer-link text-white/70 hover:text-white transition-colors cursor-pointer">
                    Home
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#schedule")}
                    className="footer-link text-white/70 hover:text-white transition-colors cursor-pointer bg-none border-none text-left"
                  >
                    Schedule
                  </button>
                </li>
                <li>
                  <a href="#speakers" className="footer-link text-white/70 hover:text-white transition-colors cursor-pointer">
                    Speakers
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#register")}
                    className="footer-link text-white/70 hover:text-white transition-colors cursor-pointer bg-none border-none text-left"
                  >
                    Register
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4 className="footer-section-title font-semibold mb-4">Contact</h4>
              <ul className="footer-contact-list space-y-3">
                <li className="footer-contact-item flex items-start gap-2">
                  <Mail size={18} className="flex-shrink-0 mt-0.5 text-accent" />
                  <a href="mailto:info@festsphere.com" className="text-white/70 hover:text-white transition-colors">
                    info@festsphere.com
                  </a>
                </li>
                <li className="footer-contact-item flex items-start gap-2">
                  <Phone size={18} className="flex-shrink-0 mt-0.5 text-accent" />
                  <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="footer-contact-item flex items-start gap-2">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-white/70">Campus Grounds, City</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              <h4 className="footer-section-title font-semibold mb-4">Follow Us</h4>
              <div className="footer-social-links flex gap-4">
                <a href="#" className="footer-social-link p-2 rounded-lg bg-white/10 hover:bg-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="footer-social-link p-2 rounded-lg bg-white/10 hover:bg-accent transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="footer-social-link p-2 rounded-lg bg-white/10 hover:bg-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="footer-social-link p-2 rounded-lg bg-white/10 hover:bg-accent transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider h-px bg-white/10 mb-8" />

          {/* Footer Bottom */}
          <div className="footer-bottom flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="footer-copyright text-white/60 text-sm">
              © {currentYear} FestSphere. All rights reserved.
            </p>
            <div className="footer-bottom-links flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
