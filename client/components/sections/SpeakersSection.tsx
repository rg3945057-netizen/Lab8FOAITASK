const speakers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Tech Entrepreneur & AI Expert",
    bio: "Founder of TechVision AI, helping startups scale with machine learning",
    image: "👨‍💼",
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 2,
    name: "DJ Cosmic",
    role: "International Music Producer",
    bio: "Grammy-nominated producer bringing electrifying performances worldwide",
    image: "🎤",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "UX Designer & Design Thinking Coach",
    bio: "Building human-centered digital experiences and leading design workshops",
    image: "👩‍🎨",
    color: "from-orange-600 to-red-600",
  },
  {
    id: 4,
    name: "Marcus Johnson",
    role: "Professional Esports Coach",
    bio: "World-class esports strategist coaching championship-winning teams",
    image: "🎮",
    color: "from-green-600 to-emerald-600",
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Startup Mentor & Investor",
    bio: "Early-stage investor focused on empowering student entrepreneurs",
    image: "💼",
    color: "from-yellow-600 to-orange-600",
  },
  {
    id: 6,
    name: "James Weber",
    role: "Innovation Speaker & Author",
    bio: "Bestselling author inspiring the next generation of innovators",
    image: "📚",
    color: "from-indigo-600 to-purple-600",
  },
];

export default function SpeakersSection() {
  return (
    <section className="speakers-section py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="speakers-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="speakers-header text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <p className="text-accent font-semibold text-sm">FEATURED GUESTS</p>
          </div>
          <h2 className="speakers-title text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Speakers & Performers
          </h2>
          <p className="speakers-description text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders, innovators, and creative minds shaping the future. Network with world-class speakers and performers.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="speakers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="speaker-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-4 cursor-pointer border border-white/80"
            >
              {/* Speaker Avatar */}
              <div className={`speaker-avatar-wrapper bg-gradient-to-br ${speaker.color} h-48 flex items-center justify-center text-9xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                {speaker.image}
              </div>

              {/* Speaker Info */}
              <div className="speaker-info p-8">
                <h3 className="speaker-name text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {speaker.name}
                </h3>
                <p className={`speaker-role text-sm font-bold bg-gradient-to-r ${speaker.color} bg-clip-text text-transparent mb-4`}>
                  {speaker.role}
                </p>
                <p className="speaker-bio text-sm text-muted-foreground leading-relaxed mb-6">
                  {speaker.bio}
                </p>
                <div className="speaker-link flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="speakers-cta-wrapper bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">More Speakers Coming Soon</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're continuously adding more speakers and performers. Want to know the complete list? Stay tuned for announcements!
            </p>
            <button 
              onClick={() => alert("Full speaker list and announcements coming soon! More exciting guests will be revealed closer to the fest date.")}
              className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              View Full Speaker List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
