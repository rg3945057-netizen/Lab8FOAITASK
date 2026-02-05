const speakers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Tech Entrepreneur & AI Expert",
    bio: "Founder of TechVision AI, helping startups scale with machine learning",
    image: "👨‍💼",
  },
  {
    id: 2,
    name: "DJ Cosmic",
    role: "International Music Producer",
    bio: "Grammy-nominated producer bringing electrifying performances worldwide",
    image: "🎤",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "UX Designer & Design Thinking Coach",
    bio: "Building human-centered digital experiences and leading design workshops",
    image: "👩‍🎨",
  },
  {
    id: 4,
    name: "Marcus Johnson",
    role: "Professional Esports Coach",
    bio: "World-class esports strategist coaching championship-winning teams",
    image: "🎮",
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Startup Mentor & Investor",
    bio: "Early-stage investor focused on empowering student entrepreneurs",
    image: "💼",
  },
  {
    id: 6,
    name: "James Weber",
    role: "Innovation Speaker & Author",
    bio: "Bestselling author inspiring the next generation of innovators",
    image: "📚",
  },
];

export default function SpeakersSection() {
  return (
    <section className="speakers-section py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="speakers-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="speakers-header text-center mb-12">
          <h2 className="speakers-title text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Speakers & Performers
          </h2>
          <p className="speakers-description text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders, innovators, and creative minds shaping the future
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="speakers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="speaker-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Speaker Avatar */}
              <div className="speaker-avatar-wrapper bg-gradient-to-br from-primary to-accent h-40 flex items-center justify-center text-7xl">
                {speaker.image}
              </div>

              {/* Speaker Info */}
              <div className="speaker-info p-6">
                <h3 className="speaker-name text-xl font-bold text-foreground mb-1">
                  {speaker.name}
                </h3>
                <p className="speaker-role text-sm font-semibold text-accent mb-3">
                  {speaker.role}
                </p>
                <p className="speaker-bio text-sm text-muted-foreground leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="speakers-cta text-center mt-12">
          <p className="text-lg text-foreground mb-4">
            Want to know more about our speakers?
          </p>
          <button
            onClick={() => alert("Full speaker list coming soon! These are our featured speakers for FestSphere 2024.")}
            className="cta-button inline-block px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
          >
            View Full Speaker List
          </button>
        </div>
      </div>
    </section>
  );
}
