import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Registration submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", college: "", year: "" });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="registration-modal-overlay fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="registration-modal bg-white rounded-xl shadow-2xl max-w-md w-full animate-fade-in">
        {/* Modal Header */}
        <div className="modal-header flex items-center justify-between p-6 border-b border-border">
          <h2 className="modal-title text-2xl font-bold text-foreground">Register for FestSphere</h2>
          <button
            onClick={onClose}
            className="close-button p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-content p-6">
          {submitted ? (
            <div className="submission-success text-center py-8">
              <div className="success-icon text-5xl mb-4">✓</div>
              <h3 className="success-title text-xl font-bold text-foreground mb-2">
                Registration Successful!
              </h3>
              <p className="success-message text-muted-foreground">
                Thank you for registering. Check your email for confirmation details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="registration-form space-y-4">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@college.edu"
                />
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+1 (234) 567-8900"
                />
              </div>

              {/* College Field */}
              <div className="form-group">
                <label htmlFor="college" className="form-label block text-sm font-semibold text-foreground mb-2">
                  College Name
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your College Name"
                />
              </div>

              {/* Year Field */}
              <div className="form-group">
                <label htmlFor="year" className="form-label block text-sm font-semibold text-foreground mb-2">
                  Year of Study
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="form-select w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="form-submit-button w-full bg-primary text-white hover:bg-primary/90 font-semibold py-3 text-base"
              >
                Complete Registration
              </Button>

              {/* Terms */}
              <p className="form-terms text-xs text-muted-foreground text-center">
                By registering, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
