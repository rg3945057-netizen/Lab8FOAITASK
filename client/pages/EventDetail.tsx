import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getEventById, events } from "@/data/events";
import { ArrowLeft, MapPin, Clock, Users, Award, BookOpen } from "lucide-react";

export default function EventDetail() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = eventId ? getEventById(eventId) : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-xl text-gray-300 mb-6">
            The event you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary/90"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    cultural: "from-red-600 to-orange-600",
    tech: "from-blue-600 to-cyan-600",
    gaming: "from-green-600 to-emerald-600",
    workshop: "from-purple-600 to-pink-600",
    ceremony: "from-indigo-600 to-purple-600",
  };

  const relatedEvents = events
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Background */}
      <div
        className={`bg-gradient-to-r ${event.color} relative overflow-hidden py-12`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-white blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-20 w-32 h-32 rounded-full bg-white blur-2xl animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => navigate("/")}
            className="event-detail-back-button flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-8"
          >
            <ArrowLeft size={24} />
            Back to Home
          </button>

          <div className="event-hero-content">
            <div className="event-icon text-7xl mb-4">{event.icon}</div>
            <h1 className="event-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
              {event.title}
            </h1>
            <p className="event-description text-white/90 text-lg max-w-2xl">
              {event.description}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="quick-info-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-primary" size={24} />
              <span className="text-sm text-muted-foreground">Time</span>
            </div>
            <p className="font-semibold text-foreground">{event.time}</p>
          </div>
          <div className="quick-info-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="text-accent" size={24} />
              <span className="text-sm text-muted-foreground">Location</span>
            </div>
            <p className="font-semibold text-foreground">{event.location}</p>
          </div>
          {event.maxCapacity && (
            <div className="quick-info-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-secondary" size={24} />
                <span className="text-sm text-muted-foreground">Capacity</span>
              </div>
              <p className="font-semibold text-foreground">
                {event.maxCapacity} people
              </p>
            </div>
          )}
          {event.prizes && (
            <div className="quick-info-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-amber-600" size={24} />
                <span className="text-sm text-muted-foreground">Prize</span>
              </div>
              <p className="font-semibold text-foreground">Prizes Available</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Full Description */}
            <div className="event-full-description bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                About This Event
              </h2>
              <div className="prose prose-lg max-w-none text-foreground leading-relaxed whitespace-pre-line">
                {event.fullDescription}
              </div>
            </div>

            {/* Rules/Requirements */}
            {(event.rules || event.requirements) && (
              <div className="event-rules bg-white rounded-xl shadow-lg p-8 mb-8">
                {event.requirements && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="text-primary" />
                      Requirements
                    </h3>
                    <p className="text-foreground/80 bg-gray-50 rounded-lg p-4">
                      {event.requirements}
                    </p>
                  </div>
                )}
                {event.rules && (
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Rules & Guidelines
                    </h3>
                    <ul className="space-y-3">
                      {event.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span className="text-foreground/80">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Registration Card */}
            <div className="registration-card bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg p-8 text-white sticky top-8">
              <h3 className="text-2xl font-bold mb-4">Register Now</h3>
              <p className="text-white/90 mb-6">
                Don't miss out on this amazing event. Secure your spot today!
              </p>
              <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-3 text-base mb-4">
                Register for Event
              </Button>
              <p className="text-xs text-white/70 text-center">
                Confirmation will be sent to your email
              </p>
            </div>

            {/* Event Details Card */}
            <div className="event-details-card bg-white rounded-xl shadow-lg p-6 mt-6">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Event Details
              </h4>
              <div className="space-y-4">
                <div className="detail-item">
                  <span className="text-sm text-muted-foreground">
                    Organizer
                  </span>
                  <p className="font-semibold text-foreground">
                    {event.organizer}
                  </p>
                </div>
                <div className="detail-item">
                  <span className="text-sm text-muted-foreground">
                    Schedule
                  </span>
                  <p className="font-semibold text-foreground">
                    {event.schedule}
                  </p>
                </div>
                {event.participants && (
                  <div className="detail-item">
                    <span className="text-sm text-muted-foreground">
                      Expected Participants
                    </span>
                    <p className="font-semibold text-foreground">
                      {event.participants.toLocaleString()}
                    </p>
                  </div>
                )}
                {event.prizes && (
                  <div className="detail-item border-t pt-4">
                    <span className="text-sm text-muted-foreground">
                      Prizes
                    </span>
                    <p className="font-semibold text-accent">{event.prizes}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Share Card */}
            <div className="share-card bg-white rounded-xl shadow-lg p-6 mt-6">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Share Event
              </h4>
              <div className="flex gap-3">
                <button className="share-button flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                  Facebook
                </button>
                <button className="share-button flex-1 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg transition-colors">
                  Twitter
                </button>
                <button className="share-button flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-colors">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <div className="related-events mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Similar Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((relatedEvent) => (
                <button
                  key={relatedEvent.id}
                  onClick={() => navigate(`/event/${relatedEvent.id}`)}
                  className="related-event-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left cursor-pointer"
                >
                  <div
                    className={`bg-gradient-to-r ${relatedEvent.color} h-32 flex items-center justify-center text-5xl`}
                  >
                    {relatedEvent.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {relatedEvent.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedEvent.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                      View Details →
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
