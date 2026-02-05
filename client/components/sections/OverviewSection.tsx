import { Music, Zap, Gamepad2, BookOpen } from "lucide-react";

const eventCategories = [
  {
    id: 1,
    name: "Cultural",
    description: "Music performances, dance competitions, and cultural showcases",
    icon: Music,
    color: "from-red-500 to-orange-500",
    bgColor: "from-red-50 to-orange-50",
    iconBg: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    name: "Tech & Innovation",
    description: "Hackathon, tech talks, and innovation challenges",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    iconBg: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    name: "Gaming",
    description: "E-sports tournaments, gaming competitions, and streaming",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    name: "Workshops",
    description: "Skill development sessions and interactive learning experiences",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100 text-blue-600",
  },
];

export default function OverviewSection() {
  return (
    <section className="overview-section py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="overview-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="overview-header text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-primary font-semibold text-sm">EXPLORE EVENTS</p>
          </div>
          <h2 className="overview-title text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What to Expect
          </h2>
          <p className="overview-description text-lg text-muted-foreground max-w-2xl mx-auto">
            FestSphere brings together students from across campus for an incredible celebration of talent, creativity, and innovation. Explore the diverse events and activities.
          </p>
        </div>

        {/* Event Categories Grid */}
        <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`category-card bg-gradient-to-br ${category.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center transform hover:-translate-y-3 hover:scale-105 group cursor-pointer border border-white/40`}
              >
                <div className={`${category.iconBg} icon-wrapper w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent size={40} />
                </div>
                <h3 className="category-name text-xl font-bold text-foreground mb-3">
                  {category.name}
                </h3>
                <p className="category-description text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlights Section */}
        <div className="highlights bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="highlights-title text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">🎊</span>
              Festival Highlights
            </h3>
            <div className="highlights-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="highlight-item flex items-start gap-4 group">
                <div className="highlight-check text-accent font-bold text-2xl flex-shrink-0 group-hover:scale-125 transition-transform">✓</div>
                <div>
                  <p className="highlight-text text-white font-semibold mb-1">3 Days of Celebration</p>
                  <p className="text-white/60 text-sm">Non-stop entertainment from morning to midnight</p>
                </div>
              </div>
              <div className="highlight-item flex items-start gap-4 group">
                <div className="highlight-check text-accent font-bold text-2xl flex-shrink-0 group-hover:scale-125 transition-transform">✓</div>
                <div>
                  <p className="highlight-text text-white font-semibold mb-1">50+ Events & Activities</p>
                  <p className="text-white/60 text-sm">Something for every interest and skill level</p>
                </div>
              </div>
              <div className="highlight-item flex items-start gap-4 group">
                <div className="highlight-check text-secondary font-bold text-2xl flex-shrink-0 group-hover:scale-125 transition-transform">✓</div>
                <div>
                  <p className="highlight-text text-white font-semibold mb-1">International Performers</p>
                  <p className="text-white/60 text-sm">World-class speakers, artists, and performers</p>
                </div>
              </div>
              <div className="highlight-item flex items-start gap-4 group">
                <div className="highlight-check text-secondary font-bold text-2xl flex-shrink-0 group-hover:scale-125 transition-transform">✓</div>
                <div>
                  <p className="highlight-text text-white font-semibold mb-1">Exclusive Prizes</p>
                  <p className="text-white/60 text-sm">₹10+ Lakhs in prizes and giveaways</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
