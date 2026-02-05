import { Music, Zap, Gamepad2, BookOpen } from "lucide-react";

const eventCategories = [
  {
    id: 1,
    name: "Cultural",
    description: "Music performances, dance competitions, and cultural showcases",
    icon: Music,
    color: "bg-accent",
  },
  {
    id: 2,
    name: "Tech & Innovation",
    description: "Hackathon, tech talks, and innovation challenges",
    icon: Zap,
    color: "bg-secondary",
  },
  {
    id: 3,
    name: "Gaming",
    description: "E-sports tournaments, gaming competitions, and streaming",
    icon: Gamepad2,
    color: "bg-primary",
  },
  {
    id: 4,
    name: "Workshops",
    description: "Skill development sessions and interactive learning experiences",
    icon: BookOpen,
    color: "bg-blue-500",
  },
];

export default function OverviewSection() {
  return (
    <section className="overview-section py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="overview-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="overview-header text-center mb-12">
          <h2 className="overview-title text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What to Expect
          </h2>
          <p className="overview-description text-lg text-muted-foreground max-w-2xl mx-auto">
            FestSphere brings together students from across campus for an incredible celebration of talent, creativity, and innovation. Explore the diverse events and activities.
          </p>
        </div>

        {/* Event Categories Grid */}
        <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="category-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center transform hover:-translate-y-2"
              >
                <div className={`${category.color} icon-wrapper w-16 h-16 rounded-full flex items-center justify-center text-white mb-4`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="category-name text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="category-description text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlights */}
        <div className="highlights mt-16 bg-white rounded-xl p-8 border border-border">
          <h3 className="highlights-title text-2xl font-bold text-foreground mb-6">
            Festival Highlights
          </h3>
          <ul className="highlights-list grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="highlight-item flex items-start gap-3">
              <span className="highlight-check text-accent font-bold text-xl">✓</span>
              <span className="highlight-text text-foreground">3 days of non-stop entertainment</span>
            </li>
            <li className="highlight-item flex items-start gap-3">
              <span className="highlight-check text-accent font-bold text-xl">✓</span>
              <span className="highlight-text text-foreground">50+ events and activities</span>
            </li>
            <li className="highlight-item flex items-start gap-3">
              <span className="highlight-check text-accent font-bold text-xl">✓</span>
              <span className="highlight-text text-foreground">International performers and speakers</span>
            </li>
            <li className="highlight-item flex items-start gap-3">
              <span className="highlight-check text-accent font-bold text-xl">✓</span>
              <span className="highlight-text text-foreground">Exclusive prizes and giveaways</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
