export interface Event {
  id: string;
  title: string;
  day: string;
  time: string;
  location: string;
  category: "cultural" | "tech" | "gaming" | "workshop" | "ceremony";
  description: string;
  fullDescription: string;
  organizer: string;
  participants?: number;
  maxCapacity?: number;
  requirements?: string;
  rules?: string[];
  prizes?: string;
  schedule?: string;
  image?: string;
  color: string;
  icon: string;
}

export const events: Event[] = [
  {
    id: "opening-ceremony",
    title: "Opening Ceremony",
    day: "Day 1: March 15",
    time: "10:00 AM",
    location: "Main Stage",
    category: "ceremony",
    description: "Kickstart FestSphere with a spectacular opening ceremony",
    fullDescription: `Join us for the grand opening ceremony of FestSphere 2024! This spectacular event will feature:

• Opening performance by renowned artists
• Welcome address from the principal and organizing committee
• Introduction to all events and activities
• Special performances and entertainment
• Exciting announcements of prizes and giveaways

Be part of the energy and excitement as thousands of students celebrate together. The ceremony sets the tone for three unforgettable days ahead. Don't miss the magic!`,
    organizer: "FestSphere Committee",
    participants: 5000,
    maxCapacity: 10000,
    schedule: "10:00 AM - 12:00 PM",
    color: "from-purple-600 to-pink-600",
    icon: "🎭",
  },
  {
    id: "tech-talks-ai-ml",
    title: "Tech Talks: AI & ML Future",
    day: "Day 1: March 15",
    time: "12:00 PM",
    location: "Auditorium",
    category: "tech",
    description:
      "Explore the future of AI and Machine Learning with industry experts",
    fullDescription: `Discover the cutting-edge world of Artificial Intelligence and Machine Learning from industry leaders.

Topics Covered:
• AI Applications in Real World
• Machine Learning Fundamentals
• Future of Autonomous Systems
• Career Opportunities in AI/ML
• Live Demo: AI-powered Applications
• Q&A with Industry Experts

Featuring renowned AI researcher and entrepreneur Alex Rivera, this session is perfect for:
- Computer Science students
- Tech enthusiasts
- Aspiring data scientists
- Anyone interested in AI future

Learn directly from someone building the future of technology!`,
    organizer: "Tech Club",
    participants: 800,
    maxCapacity: 1000,
    requirements: "Basic knowledge of programming preferred",
    schedule: "12:00 PM - 2:00 PM",
    color: "from-blue-600 to-cyan-600",
    icon: "⚡",
  },
  {
    id: "gaming-tournament",
    title: "Gaming Tournament Qualifiers",
    day: "Day 1: March 15",
    time: "2:00 PM",
    location: "Gaming Zone",
    category: "gaming",
    description: "High-octane gaming competition with amazing prizes",
    fullDescription: `Get ready for the most exciting gaming tournament of the year!

Tournament Format:
• Multiple game categories
• Team and individual competitions
• Elimination rounds leading to finals
• Live streaming and commentary
• Professional setup with high-end gaming rigs

Games Featured:
• VALORANT (5v5 competitive shooter)
• DOTA 2 (Strategy & team-based action)
• FIFA 24 (Sports simulation)
• Fighting Game Championship (1v1 battles)
• Mobile Gaming Category

Prize Pool: ₹2,00,000+
• 1st Place: ₹1,00,000 per team
• 2nd Place: ₹50,000 per team
• 3rd Place: ₹25,000 per team
• Special prizes for individual categories

Coaches and pro players will be present. Sign up in teams or find teammates at the venue!`,
    organizer: "Gaming Club",
    participants: 500,
    maxCapacity: 1000,
    requirements: "Gaming skills required. Teams of 3-5 players",
    rules: [
      "All games must be played on provided equipment",
      "No external assistance allowed",
      "Respect all opponents and judges",
      "All matches are recorded for streaming",
    ],
    prizes: "₹2,00,000+ prize pool across categories",
    schedule: "2:00 PM - 10:00 PM (Qualifiers), Finals on Day 3",
    color: "from-green-600 to-emerald-600",
    icon: "🎮",
  },
  {
    id: "cultural-night",
    title: "Cultural Night",
    day: "Day 1: March 15",
    time: "6:00 PM",
    location: "Main Stage",
    category: "cultural",
    description: "Vibrant cultural performances celebrating diversity",
    fullDescription: `Experience the rich cultural tapestry of India and beyond in this spectacular cultural night!

Line-up:
• Classical Dance Performances (Bharatanatyam, Kathak)
• Contemporary Dance Fusion
• Bollywood Dance Medley
• International Music Performances
• Fusion Jazz with Indian Classical
• Stand-up Comedy (30 mins)
• Special Guest Performance: DJ Cosmic

The evening celebrates:
✨ Indian classical arts and modern fusion
✨ Diverse cultural expressions
✨ Talented student performers
✨ Professional guest artists
✨ Amazing light and sound production

Duration: 4 hours of non-stop entertainment
Seating: First-come, first-served (bring cushions for comfort)
Entry: Free with FestSphere registration
Food & Beverages: Available at venue

This is the perfect blend of tradition and modernity, showcasing the cultural diversity of our campus!`,
    organizer: "Cultural Committee",
    participants: 3000,
    maxCapacity: 5000,
    schedule: "6:00 PM - 10:00 PM",
    color: "from-red-600 to-orange-600",
    icon: "🎤",
  },
  {
    id: "hackathon",
    title: "Hackathon: Code for Innovation",
    day: "Day 2: March 16",
    time: "9:00 AM",
    location: "Tech Lab",
    category: "tech",
    description: "24-hour coding marathon to build innovative solutions",
    fullDescription: `The ultimate coding challenge! Build groundbreaking solutions in 24 hours.

Format: 24-hour continuous coding hackathon
Team Size: 2-4 members per team
Entry Fee: ₹500 per team
Registration Deadline: Day 1, 8:00 PM

Tracks:
1. AI/ML Solutions - Build intelligent systems
2. Web Development - Create stunning web apps
3. Mobile Apps - Develop mobile solutions
4. IoT & Hardware - Smart device projects
5. Open Innovation - Any tech stack, any idea

What's Provided:
• Free meals and snacks (breakfast, lunch, dinner, night snacks)
• WiFi and electricity
• Mentorship from industry professionals
• Free APIs and cloud credits
• High-speed internet

Judging Criteria:
• Innovation & Creativity (40%)
• Technical Implementation (30%)
• User Experience (20%)
• Presentation (10%)

Prize Pool: ₹5,00,000
• Winner: ₹2,50,000 + Internship offer
• Runner-up: ₹1,50,000
• Third Place: ₹1,00,000
• Special Category Prizes: ₹25,000 each

Featured Speakers:
• Tech leads from Google, Microsoft
• Startup founders and venture capitalists
• Industry veterans and mentors

This is your chance to build something amazing and get noticed by tech companies!`,
    organizer: "Developer Community",
    participants: 300,
    maxCapacity: 400,
    requirements: "Programming skills required. Can form teams on spot.",
    rules: [
      "Teams must start from scratch during hackathon",
      "No pre-built solutions allowed",
      "Code must be original",
      "Submission includes code + presentation",
    ],
    prizes: "₹5,00,000 prize pool + Internship opportunities",
    schedule: "Day 2: 9:00 AM - Day 3: 9:00 AM (24 hours)",
    color: "from-indigo-600 to-purple-600",
    icon: "💻",
  },
  {
    id: "dance-battle",
    title: "Dance Battle Finals",
    day: "Day 2: March 16",
    time: "11:00 AM",
    location: "Arena",
    category: "cultural",
    description: "Intense dance competition with multiple categories",
    fullDescription: `Showcase your dance moves in the most energetic competition!

Categories:
1. Solo Dance (Individual)
2. Duo/Pair Dance
3. Group Dance (5-8 members)
4. Freestyle Dance
5. Bhangra & Folk Dance
6. K-Pop & International Dance

Formats:
• Auditions on Day 1
• Semi-finals on Day 2 afternoon
• Finals on Day 2 evening
• Rounds: 90 seconds per performance

Judging Panel:
• Professional choreographers
• Bollywood choreographer
• International dance expert
• Popular dance influencers

Prize Distribution:
Each Category:
• 1st: ₹25,000 + Trophy
• 2nd: ₹15,000 + Certificate
• 3rd: ₹10,000 + Certificate

Special Awards:
• Best Choreography: ₹15,000
• Most Entertaining: ₹10,000
• People's Choice: ₹10,000

Music: Your own track (pre-recorded, high quality)
Attire: Any costume (be creative!)
Entry Fee: ₹200 per person/group

This is your moment to shine and celebrate the power of dance!`,
    organizer: "Dance Club",
    participants: 200,
    maxCapacity: 300,
    requirements: "Dance skills required",
    schedule: "Auditions (Day 1), Semi-finals & Finals (Day 2)",
    color: "from-pink-600 to-rose-600",
    icon: "💃",
  },
  {
    id: "startup-pitch",
    title: "Startup Pitching Competition",
    day: "Day 2: March 16",
    time: "3:00 PM",
    location: "Conference Hall",
    category: "tech",
    description: "Pitch your startup idea to real investors",
    fullDescription: `Turn your ideas into reality! Pitch to real investors and industry experts.

Competition Format:
• Registration: Ideas in any field welcome
• Preliminary Round: Concept screening (Day 1 evening)
• Semi-finals: 5-minute pitches (Day 2, 2:00 PM)
• Finals: 10-minute pitches + Q&A (Day 2, 3:00 PM - 6:00 PM)

Judging Panel:
• Priya Sharma - Venture Capitalist & Startup Mentor
• Successful startup founders
• Corporate investors
• Angel investors

What You Need:
• Business idea (product/service/platform)
• 2-4 member team
• A killer pitch deck
• Problem-solution clarity

Evaluation Criteria:
• Market Potential (25%)
• Innovation & Uniqueness (25%)
• Business Model (20%)
• Team Competence (20%)
• Presentation Quality (10%)

Prize Pool: ₹3,00,000
• Winner: ₹1,50,000 + Mentorship
• Runner-up: ₹1,00,000 + Networking
• Third Place: ₹50,000 + Mentorship

Bonus Offers:
• Top ideas: Possible seed funding opportunities
• Networking with investors
• Incubation center mentorship
• Fast-track investment discussions

Eligibility:
• Open to all students
• Individual or team
• Any domain (tech, healthcare, agriculture, ed-tech, etc.)

This is your platform to launch the next big startup!`,
    organizer: "Entrepreneurship Club",
    participants: 50,
    maxCapacity: 80,
    requirements: "Business idea and pitch deck",
    rules: [
      "Ideas must be original",
      "Pitch time strictly enforced",
      "All team members must be present",
    ],
    prizes: "₹3,00,000 + Mentorship & Networking opportunities",
    schedule: "Day 2: 3:00 PM - 6:00 PM",
    color: "from-amber-600 to-yellow-600",
    icon: "🚀",
  },
  {
    id: "live-music",
    title: "Live Music Performance",
    day: "Day 2: March 16",
    time: "8:00 PM",
    location: "Main Stage",
    category: "cultural",
    description: "International music artists and live bands",
    fullDescription: `Experience unforgettable live music performances!

Featured Artists:
• International DJ Cosmic - Electronic & House Music
• The Acoustic Revolution - Indie & Alternative Rock
• Fusion Jazz Quartet - Jazz meets Indian Classical
• Local Indie Band - Original compositions
• Bhangra DJ - Dance & Bhangra Fusion

Stage Setup:
• State-of-the-art sound system
• Professional lighting and visual effects
• Large projection screens
• Multiple performances (4+ hours)

Atmosphere:
🎵 Professional concert-grade production
🎵 Amazing energy and crowd engagement
🎵 Food & beverage stalls available
🎵 Safe and secure venue
🎵 Great photo/video opportunities

Entry: Free with FestSphere pass
VIP Seating: Available for closer experience
Parking: Available on campus

Highlights:
• Live band collaborations
• Surprise guest appearances
• Interactive crowd participation
• Photo opportunities with artists

Bring your friends and experience an evening of great music under the stars!`,
    organizer: "Music Club",
    participants: 4000,
    maxCapacity: 8000,
    schedule: "Day 2: 8:00 PM - 12:00 AM (Midnight)",
    color: "from-violet-600 to-purple-600",
    icon: "🎸",
  },
  {
    id: "esports-finals",
    title: "E-Sports Grand Finals",
    day: "Day 3: March 17",
    time: "1:00 PM",
    location: "Gaming Zone",
    category: "gaming",
    description: "Ultimate battle for the championship titles",
    fullDescription: `The climax of FestSphere gaming championship!

Finals Schedule:
• 1:00 PM - VALORANT Grand Final
• 3:00 PM - DOTA 2 Championship
• 5:00 PM - FIFA 24 Finals
• 7:00 PM - Fighting Game Championship
• Closing Ceremony & Trophy Presentation

Format:
• Best of 3 matches (BO3) for team games
• Best of 5 (BO5) for critical finals
• Live commentary in English
• Professional esports setup

Prize Pool: ₹3,50,000 total
Each Game Category:
• 1st: ₹75,000
• 2nd: ₹40,000
• 3rd: ₹25,000

Special Recognition:
• MVP Award: Best individual player
• Most Entertaining Match
• Fair Play Award
• Rookie of the Tournament

Broadcast:
• Live streaming on YouTube & Instagram
• Professional commentary team
• Multiple camera angles
• Instant replays

Atmosphere:
• Cheering crowd section
• Food court open
• Merchandise stall
• Photo opportunities with champions

This is where legends are made! Witness the best gamers compete for glory!`,
    organizer: "Gaming Federation",
    participants: 500,
    maxCapacity: 2000,
    schedule: "Day 3: 1:00 PM - 11:00 PM",
    color: "from-lime-600 to-green-600",
    icon: "🏆",
  },
  {
    id: "awards-ceremony",
    title: "Awards Ceremony",
    day: "Day 3: March 17",
    time: "5:00 PM",
    location: "Main Stage",
    category: "ceremony",
    description: "Celebrate winners and memorable moments",
    fullDescription: `The grand celebration of achievement and talent!

Ceremony Highlights:
• Award distribution across all categories
• Recognition of exceptional performances
• Videos of fest highlights
• Memorable moments slideshow
• Appreciation speeches
• Group photos with winners

Awards Given:
✓ Event category winners (1st, 2nd, 3rd)
✓ Overall Fest Champion
✓ Best Event Organization
✓ Most Creative Participation
✓ Fan Favorite Award
✓ Judge's Special Recognition
✓ Participation certificates

Entertainment:
• Performances by top fest participants
• Special guest appreciation
• Live music and celebrations
• Emotional and fun moments

Prizes:
• Trophies and certificates
• Cash prizes (₹25,000+ total)
• Merchandise goodies
• Recognition on social media

Capacity: 5,000+ attendees
Duration: 2-3 hours
Broadcast: Live on all social media channels

This is the emotional high point where we celebrate everyone's hard work and amazing performances. Don't miss seeing your friends and fellow students celebrated!`,
    organizer: "FestSphere Committee",
    participants: 5000,
    maxCapacity: 10000,
    schedule: "Day 3: 5:00 PM - 8:00 PM",
    color: "from-blue-600 to-indigo-600",
    icon: "🎖️",
  },
  {
    id: "closing-celebration",
    title: "Closing Night Celebration",
    day: "Day 3: March 17",
    time: "7:00 PM",
    location: "Main Ground",
    category: "cultural",
    description: "Unforgettable finale with music, dance, and fireworks",
    fullDescription: `The perfect ending to an incredible three-day fest!

Grand Finale Elements:
• Professional fireworks display
• DJ and live music extravaganza
• Surprise celebrity guest performance
• Confetti cannons and special effects
• Group dance with all performers
• Emotional farewell moments
• Photo booth with instant prints

Entertainment Lineup:
🎆 Opening: Orchestral performance
🎆 DJ Cosmic: High-energy dance session
🎆 Guest Artist: International performer
🎆 All-fest Mashup: Best moments compilation
🎆 Dance Floor: Open for everyone
🎆 Midnight Countdown: Special celebration

Activities:
• Memory wall: Sign goodbyes
• Group dancing
• Food & beverage stalls
• Photography area
• Games and activities

What to Bring:
• Your friends and festive spirit!
• Phone for photos
• Casual comfortable clothes
• A light sweater (it gets cool at night)

Seating: General admission (standing room available)
Entry: Free with FestSphere pass
Duration: 7:00 PM - 1:00 AM

This is the emotional goodbye, celebration of memories, and start of new friendships. Make it memorable!`,
    organizer: "FestSphere Committee",
    participants: 8000,
    maxCapacity: 15000,
    schedule: "Day 3: 7:00 PM - 1:00 AM (Next day)",
    color: "from-cyan-600 to-blue-600",
    icon: "🎆",
  },
];

export const getEventById = (id: string): Event | undefined => {
  return events.find((event) => event.id === id);
};

export const getEventsByDay = (day: string): Event[] => {
  return events.filter((event) => event.day === day);
};

export const getEventsByCategory = (category: string): Event[] => {
  return events.filter((event) => event.category === category);
};
