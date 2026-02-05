import { useNavigate } from "react-router-dom";
import { events, getEventsByDay } from "@/data/events";
import { Clock, MapPin } from "lucide-react";

const days = ["Day 1: March 15", "Day 2: March 16", "Day 3: March 17"];

export default function TimelineSection() {
  const navigate = useNavigate();

  const getTypeColor = (category: string) => {
    switch (category) {
      case "ceremony":
        return "bg-purple-100 border-l-4 border-purple-600 text-purple-700";
      case "talk":
        return "bg-blue-100 border-l-4 border-blue-600 text-blue-700";
      case "gaming":
        return "bg-green-100 border-l-4 border-green-600 text-green-700";
      case "cultural":
        return "bg-red-100 border-l-4 border-red-600 text-red-700";
      case "tech":
        return "bg-yellow-100 border-l-4 border-yellow-600 text-yellow-700";
      case "workshop":
        return "bg-indigo-100 border-l-4 border-indigo-600 text-indigo-700";
      default:
        return "bg-gray-100 border-l-4 border-gray-600 text-gray-700";
    }
  };

  return (
    <section className="timeline-section py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="timeline-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="timeline-header text-center mb-16">
          <h2 className="timeline-title text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Event Schedule
          </h2>
          <p className="timeline-description text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your FestSphere experience with our comprehensive day-wise schedule. Click any event for full details and registration.
          </p>
        </div>

        {/* Timeline Tabs */}
        <div className="timeline-days-tabs flex flex-wrap justify-center gap-4 mb-12">
          {days.map((day) => (
            <div key={day} className="day-tab bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3 border-2 border-primary/20">
              <span className="text-sm font-semibold text-foreground">{day}</span>
            </div>
          ))}
        </div>

        {/* Timeline Events */}
        <div className="timeline-wrapper space-y-12">
          {days.map((day, dayIndex) => {
            const dayEvents = getEventsByDay(day);
            return (
              <div key={day} className="timeline-day">
                {/* Day Header with accent line */}
                <div className="day-header mb-8 flex items-center gap-4">
                  <div className={`day-number w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg`}>
                    {dayIndex + 1}
                  </div>
                  <div>
                    <h3 className="day-title text-3xl font-bold text-foreground">{day}</h3>
                    <p className="text-muted-foreground text-sm">{dayEvents.length} events scheduled</p>
                  </div>
                  <div className="ml-auto h-1 flex-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full" />
                </div>

                {/* Events Grid for the day */}
                <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {dayEvents.map((event) => (
                    <button
                      key={event.id}
                      onClick={() => navigate(`/event/${event.id}`)}
                      className={`event-card-button ${getTypeColor(event.category)} rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left cursor-pointer transform`}
                    >
                      {/* Event Header */}
                      <div className="event-header flex items-start justify-between mb-4">
                        <div className="event-icon text-4xl">{event.icon}</div>
                        <span className="event-category-badge inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/70 text-gray-700">
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h4 className="event-title text-lg font-bold mb-3 leading-tight">
                        {event.title}
                      </h4>

                      {/* Event Details */}
                      <div className="event-details space-y-2 mb-4">
                        <div className="detail-item flex items-center gap-2 text-sm font-semibold">
                          <Clock size={16} />
                          {event.time}
                        </div>
                        <div className="detail-item flex items-center gap-2 text-sm font-semibold">
                          <MapPin size={16} />
                          {event.location}
                        </div>
                      </div>

                      {/* Event Description */}
                      <p className="event-description text-sm font-medium leading-relaxed opacity-90 mb-4">
                        {event.description}
                      </p>

                      {/* View Details Button */}
                      <div className="view-details text-sm font-bold text-opacity-75 hover:text-opacity-100 transition-all">
                        View Details →
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Summary Stats */}
        <div className="timeline-stats mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-item text-center">
              <div className="stat-number text-4xl font-bold text-primary">{events.length}</div>
              <div className="stat-label text-muted-foreground">Total Events</div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number text-4xl font-bold text-accent">3</div>
              <div className="stat-label text-muted-foreground">Days</div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number text-4xl font-bold text-secondary">4</div>
              <div className="stat-label text-muted-foreground">Categories</div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number text-4xl font-bold text-purple-600">10+</div>
              <div className="stat-label text-muted-foreground">Prizes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
