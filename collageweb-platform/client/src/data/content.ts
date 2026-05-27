export const siteConfig = {
  name: "Dev Campus",
  tagline: "Your Gateway to Smarter Education Decisions",
  established: "Est. 2005",
};

export const images = {
  // Campus & buildings
  hero: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600",
  campus1: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1600",
  campus2: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1600",
  collegeOutdoor: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=1600",
  collegeClassroom: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600",

  // Students
  students: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600",
  moreStudents: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600",

  // Fests
  fest: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600",
  universityFest: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600",

  // Recruiters
  recruter1: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600",
  recruter2: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600",

  // Technology
  tech1: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600",
  tech2: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600",
  tech3: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600",
  tech4: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1600",

  // Teachers
  teacher1: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800",
  teacher2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
  teacher3: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=800",
  teacher4: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=800",
};

// ---- NAV LINKS ----
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Mentors", href: "#mentors" },
  { label: "Campus", href: "#campus" },
  { label: "Placements", href: "#placements" },
];

// ---- ABOUT ----
export const aboutContent = {
  title: "About Dev Campus",
  subtitle: "Empowering Futures Since 2005",
  description:
    "Dev Campus is a premier engineering and technology institution established in 2005, located in Hyderabad, Telangana. Affiliated with JNTU Hyderabad and approved by AICTE, New Delhi, our 25-acre campus features smart classrooms, advanced laboratories, and a central library with 50,000+ books.",
  highlights: [
    { value: "150+", label: "Experienced Professors" },
    { value: "15:1", label: "Student-Faculty Ratio" },
    { value: "Top 50", label: "In Telangana" },
    { value: "10,000+", label: "Alumni Worldwide" },
  ],
};

// ---- ACHIEVEMENTS ----
export const achievementsContent = {
  stats: [
    { value: "92%", label: "Placement Rate" },
    { value: "₹42 LPA", label: "Highest Package" },
    { value: "150+", label: "Companies Visit" },
    { value: "850+", label: "Total Offers" },
  ],
};

// ---- COURSES ----
export const coursesContent = {
  btech: [
    { name: "Computer Science & Engineering", seats: 180, avg: "₹10.2 LPA" },
    { name: "Electronics & Communication", seats: 120, avg: "₹7.2 LPA" },
    { name: "AI & Data Science", seats: 60, avg: "₹11.5 LPA" },
    { name: "Information Technology", seats: 120, avg: "₹8.8 LPA" },
    { name: "Mechanical Engineering", seats: 60, avg: "₹5.5 LPA" },
    { name: "Civil Engineering", seats: 60, avg: "₹5.0 LPA" },
  ],
  mtech: [
    { name: "Computer Science", seats: 30 },
    { name: "VLSI Design", seats: 18 },
    { name: "Structural Engineering", seats: 18 },
  ],
  mba: { name: "MBA (Finance, Marketing, HR, IT)", seats: 60, avg: "₹8.0 LPA" },
};

// ---- QUOTES ----
export const quotesContent = [
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
];

// ---- MENTORS ----
export const mentorsContent = [
  {
    name: "Revanth Kumar",
    role: "Head of CSE Department",
    image: images.teacher1,
    bio: "PhD IIT Bombay · 20+ years · 50+ research papers",
    teaches: "AI, ML, Data Science",
  },
  {
    name: "Prof. Swapna Sharma",
    role: "Associate Professor, ECE",
    image: images.teacher2,
    bio: "M.Tech IIT Hyderabad · 15 yrs academia + 5 yrs Texas Instruments",
    teaches: "VLSI, Embedded Systems, IoT",
  },
  {
    name: "Dr. Abhinav Patel",
    role: "Professor, AI & DS",
    image: images.teacher3,
    bio: "PhD Stanford · Former Google Research · 30+ NeurIPS papers",
    teaches: "NLP, Deep Learning, Computer Vision",
  },
  {
    name: "Prof. Harshith Reddy",
    role: "Head of MBA Department",
    image: images.teacher4,
    bio: "MBA IIM Ahmedabad · PhD ISB · 18 yrs + 7 yrs Deloitte",
    teaches: "Startup Incubator Lead",
  },
];

// ---- CAMPUS ----
export const campusFeatures = [
  { title: "Smart Campus", desc: "25-acre green campus, full Wi-Fi, smart classrooms, 500+ computers.", image: images.campus1 },
  { title: "Central Library", desc: "50,000+ books, digital library, 24/7 reading room.", image: images.collegeClassroom },
  { title: "Hostels & Dining", desc: "Separate hostels, AC/Non-AC rooms, veg & non-veg mess, gym.", image: images.campus2 },
  { title: "Fests & Events", desc: "TechNova (Oct), Aarohan (Mar), EduSports (Feb), hackathons.", image: images.fest },
  { title: "Clubs & Societies", desc: "Coding, Robotics, AI, Literary, Photography, Music, NSS, NCC.", image: images.universityFest },
  { title: "Sports Complex", desc: "Cricket, football, basketball, tennis, volleyball, badminton.", image: images.collegeOutdoor },
];

// ---- PLACEMENTS ----
export const topRecruiters = [
  "TCS","Infosys","Wipro","Google","Microsoft","Amazon",
  "Flipkart","Deloitte","Accenture","Razorpay","Zerodha",
  "CRED","PhonePe","HCL","L&T","Bosch","Siemens","EY","KPMG",
];

export const deptPlacements = [
  { dept: "AI & DS", avg: "₹11.5 LPA", pct: 100 },
  { dept: "CSE", avg: "₹10.2 LPA", pct: 89 },
  { dept: "IT", avg: "₹8.8 LPA", pct: 77 },
  { dept: "MBA", avg: "₹8.0 LPA", pct: 70 },
  { dept: "ECE", avg: "₹7.2 LPA", pct: 63 },
  { dept: "ME", avg: "₹5.5 LPA", pct: 48 },
  { dept: "CE", avg: "₹5.0 LPA", pct: 43 },
];

// ---- CONTACT ----
export const contactInfo = {
  email: "abhishekmathangi05@gmail.com",
  phone: "+91-9988558288",
  general: "info@devcampus.edu.in",
  address: "Hyderabad, Telangana, India",
};

// ---- EVENTS ----
export const eventsGallery = [
  { title: "TechNova Hackathon", image: images.recruter1 },
  { title: "Annual Cultural Fest", image: images.recruter2 },
  { title: "Campus Placement Drive", image: images.students },
  { title: "Workshop Series", image: images.tech4 },
  { title: "University Fest", image: images.universityFest },
  { title: "Sports Meet", image: images.collegeOutdoor },
];
export const vapiFormContent = {
  courses: [
    "B.Tech Computer Science (CSE)",
    "B.Tech Electronics (ECE)",
    "B.Tech AI & Data Science",
    "B.Tech Mechanical (ME)",
    "B.Tech Civil (CE)",
    "B.Tech Information Technology (IT)",
    "M.Tech Computer Science",
    "M.Tech VLSI Design",
    "M.Tech Structural Engineering",
    "MBA Finance",
    "MBA Marketing",
    "MBA HR",
    "MBA IT",
  ],
  topics: [
    "Course Details",
    "Fee Structure",
    "Admission Process",
    "Placement Statistics",
    "Campus Life",
    "Scholarships",
    "Hostel Facilities",
    "Other",
  ],
};