import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

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
    <footer className="footer bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />

      <div className="footer-content px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="footer-container max-w-6xl mx-auto">
          {/* Footer Top Section */}
          <div className="footer-top grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
            {/* Brand */}
            <div className="footer-brand">
              <h3 className="footer-logo text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                FestSphere
              </h3>
              <p className="footer-tagline text-white/70 text-sm leading-relaxed mb-6">
                Your ultimate college fest experience platform. Celebrating talent, creativity, and innovation since day one.
              </p>
              <div className="footer-social-preview flex gap-3">
                <a href="#" className="social-icon-mini p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="social-icon-mini p-2 rounded-lg bg-white/10 hover:bg-accent transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-section-title font-bold mb-6 text-lg">Navigation</h4>
              <ul className="footer-link-list space-y-3">
                <li>
                  <a href="#home" className="footer-link text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                    <span>→</span> Home
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("#schedule")}
                    className="footer-link text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 bg-none border-none cursor-pointer"
                  >
                    <span>→</span> Schedule
                  </button>
                </li>
                <li>
                  <a href="#speakers" className="footer-link text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                    <span>→</span> Speakers
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("#register")}
                    className="footer-link text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 bg-none border-none cursor-pointer"
                  >
                    <span>→</span> Register
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4 className="footer-section-title font-bold mb-6 text-lg">Get in Touch</h4>
              <ul className="footer-contact-list space-y-4">
                <li className="footer-contact-item flex items-start gap-3">
                  <Mail size={20} className="flex-shrink-0 mt-0.5 text-accent" />
                  <div>
                    <p className="text-xs text-white/60 mb-1">Email</p>
                    <a href="mailto:info@festsphere.com" className="text-white/70 hover:text-white transition-colors text-sm">
                      info@festsphere.com
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item flex items-start gap-3">
                  <Phone size={20} className="flex-shrink-0 mt-0.5 text-primary" />
                  <div>
                    <p className="text-xs text-white/60 mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors text-sm">
                      +1 (234) 567-890
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item flex items-start gap-3">
                  <MapPin size={20} className="flex-shrink-0 mt-0.5 text-secondary" />
                  <div>
                    <p className="text-xs text-white/60 mb-1">Location</p>
                    <span className="text-white/70 text-sm">Campus Grounds, City</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              <h4 className="footer-section-title font-bold mb-6 text-lg">Follow Us</h4>
              <div className="footer-social-links flex flex-col gap-3">
                <a href="#" className="footer-social-link flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-primary/20 transition-colors border border-white/10 hover:border-primary/50">
                  <Facebook size={20} />
                  <span className="text-sm">Facebook</span>
                </a>
                <a href="#" className="footer-social-link flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-accent/20 transition-colors border border-white/10 hover:border-accent/50">
                  <Twitter size={20} />
                  <span className="text-sm">Twitter</span>
                </a>
                <a href="#" className="footer-social-link flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-pink-500/20 transition-colors border border-white/10 hover:border-pink-500/50">
                  <Instagram size={20} />
                  <span className="text-sm">Instagram</span>
                </a>
                <a href="#" className="footer-social-link flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-blue-500/20 transition-colors border border-white/10 hover:border-blue-500/50">
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom flex flex-col sm:flex-row justify-between items-center gap-6 pt-8">
            <p className="footer-copyright text-white/60 text-sm flex items-center gap-2">
              © {currentYear} FestSphere. Made with <Heart size={16} className="text-accent fill-current" /> by the events team.
            </p>
            <div className="footer-bottom-links flex flex-wrap gap-6 text-sm justify-center sm:justify-end">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
