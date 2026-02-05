const timelineEvents = [
  {
    id: 1,
    day: "Day 1: March 15",
    events: [
      { time: "10:00 AM", title: "Opening Ceremony", location: "Main Stage", type: "ceremony" },
      { time: "12:00 PM", title: "Tech Talks: AI & ML Future", location: "Auditorium", type: "talk" },
      { time: "2:00 PM", title: "Gaming Tournament Qualifiers", location: "Gaming Zone", type: "gaming" },
      { time: "6:00 PM", title: "Cultural Night", location: "Main Stage", type: "cultural" },
    ],
  },
  {
    id: 2,
    day: "Day 2: March 16",
    events: [
      { time: "9:00 AM", title: "Hackathon Begins", location: "Tech Lab", type: "tech" },
      { time: "11:00 AM", title: "Dance Battle Finals", location: "Arena", type: "cultural" },
      { time: "3:00 PM", title: "Startup Pitching Competition", location: "Conference Hall", type: "tech" },
      { time: "8:00 PM", title: "Live Music Performance", location: "Main Stage", type: "cultural" },
    ],
  },
  {
    id: 3,
    day: "Day 3: March 17",
    events: [
      { time: "10:00 AM", title: "Hackathon Judging", location: "Tech Lab", type: "tech" },
      { time: "1:00 PM", title: "E-Sports Grand Finals", location: "Gaming Zone", type: "gaming" },
      { time: "5:00 PM", title: "Awards Ceremony", location: "Main Stage", type: "ceremony" },
      { time: "7:00 PM", title: "Closing Night Celebration", location: "Main Ground", type: "cultural" },
    ],
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "ceremony":
      return "bg-purple-100 border-purple-300 text-purple-700";
    case "talk":
      return "bg-blue-100 border-blue-300 text-blue-700";
    case "gaming":
      return "bg-green-100 border-green-300 text-green-700";
    case "cultural":
      return "bg-red-100 border-red-300 text-red-700";
    case "tech":
      return "bg-yellow-100 border-yellow-300 text-yellow-700";
    default:
      return "bg-gray-100 border-gray-300 text-gray-700";
  }
};

export default function TimelineSection() {
  return (
    <section className="timeline-section py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="timeline-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="timeline-header text-center mb-12">
          <h2 className="timeline-title text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Event Schedule
          </h2>
          <p className="timeline-description text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your FestSphere experience with our comprehensive day-wise schedule
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper space-y-12">
          {timelineEvents.map((day, dayIndex) => (
            <div key={day.id} className="timeline-day">
              {/* Day Header */}
              <div className="day-header mb-8">
                <h3 className="day-title text-2xl font-bold text-primary">
                  {day.day}
                </h3>
              </div>

              {/* Events for the day */}
              <div className="events-list space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={`${day.id}-${eventIndex}`} className="event-item flex gap-4">
                    {/* Timeline connector */}
                    <div className="timeline-connector flex flex-col items-center">
                      <div className="timeline-dot w-4 h-4 rounded-full bg-primary" />
                      {eventIndex < day.events.length - 1 && (
                        <div className="timeline-line w-1 h-16 bg-primary/30 my-2" />
                      )}
                    </div>

                    {/* Event Card */}
                    <div className="event-card flex-1 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <div className="event-header flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                        <h4 className="event-title text-lg font-semibold text-foreground">
                          {event.title}
                        </h4>
                        <span className={`event-type inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                      <div className="event-details flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <span className="event-time flex items-center gap-2">
                          <span className="font-semibold text-primary">{event.time}</span>
                        </span>
                        <span className="event-location">📍 {event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
