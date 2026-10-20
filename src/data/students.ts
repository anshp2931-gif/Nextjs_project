export interface Subject {
  code: string;
  title: string;
  credits: number;
}

export interface Student {
  id: string;
  studentCode: string;
  name: string;
  initials: string;
  avatarColor: string;
  department: string;
  departmentSlug: string;
  studyYear: string;
  studyYearFull: string;
  status: string;
  email: string;
  enrolled: string;
  about: string;
  currentStanding: string;
  specializationTrack?: string;
  specializationTopic?: string;
  systemRecordId: string;
  lastValidated: string;
  subjects: Subject[];
}

export const students: Student[] = [
  {
    id: "stu-1042",
    studentCode: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    avatarColor: "bg-blue-100 text-blue-700",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "3rd Year",
    studyYearFull: "3rd Year (Junior)",
    status: "Active Student",
    email: "aarav.mehta@campus.edu",
    enrolled: "Fall 2022",
    about:
      "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    currentStanding: "3rd Year Undergraduate",
    specializationTrack: "Web Development",
    specializationTopic: "Full-Stack Architecture",
    systemRecordId: "0948-CS-AM",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-301", title: "Distributed Systems & Microservices", credits: 4.0 },
      { code: "CS-340", title: "Web Application Architecture", credits: 4.0 },
      { code: "CS-280", title: "Algorithms & Complexity", credits: 3.5 },
    ],
  },
  {
    id: "stu-1089",
    studentCode: "STU-1089",
    name: "Elena Rostova",
    initials: "ER",
    avatarColor: "bg-purple-100 text-purple-700",
    department: "Design",
    departmentSlug: "design",
    studyYear: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    status: "Active Student",
    email: "elena.rostova@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Elena is passionate about typography, accessible design systems, and user interaction mechanics. She designs intuitive interfaces for student productivity applications.",
    currentStanding: "2nd Year Undergraduate",
    systemRecordId: "1089-DS-ER",
    lastValidated: "Oct 19, 2024",
    subjects: [
      { code: "DS-210", title: "Human-Computer Interaction", credits: 4.0 },
      { code: "DS-225", title: "Visual Communication & Hierarchy", credits: 3.5 },
      { code: "DS-190", title: "Digital Prototyping Workshop", credits: 3.0 },
    ],
  },
  {
    id: "stu-1120",
    studentCode: "STU-1120",
    name: "Marcus Chen",
    initials: "MC",
    avatarColor: "bg-orange-100 text-orange-700",
    department: "Business",
    departmentSlug: "business",
    studyYear: "4th Year",
    studyYearFull: "4th Year (Senior)",
    status: "Active Student",
    email: "marcus.chen@campus.edu",
    enrolled: "Fall 2021",
    about:
      "Marcus studies strategic fintech management and venture capital modeling. He manages the student investment portfolio and conducts research on microfinance markets.",
    currentStanding: "4th Year Undergraduate",
    systemRecordId: "1120-BS-MC",
    lastValidated: "Oct 22, 2024",
    subjects: [
      { code: "BS-410", title: "Corporate Financial Strategy", credits: 4.0 },
      { code: "BS-425", title: "Fintech & Algorithmic Markets", credits: 4.0 },
      { code: "BS-390", title: "Applied Business Analytics", credits: 3.0 },
    ],
  },
  {
    id: "stu-1155",
    studentCode: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    avatarColor: "bg-blue-100 text-blue-700",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "1st Year",
    studyYearFull: "1st Year (Freshman)",
    status: "Active Student",
    email: "priya.sharma@campus.edu",
    enrolled: "Fall 2024",
    about:
      "Priya is exploring computer systems, discrete mathematics, and modern web interfaces. She is an active member of the open-source engineering club.",
    currentStanding: "1st Year Undergraduate",
    specializationTrack: "Web Development",
    specializationTopic: "Reactive UI Design",
    systemRecordId: "1155-CS-PS",
    lastValidated: "Oct 23, 2024",
    subjects: [
      { code: "CS-110", title: "Introduction to Computer Science", credits: 4.0 },
      { code: "MATH-150", title: "Discrete Structures & Logic", credits: 4.0 },
      { code: "CS-120", title: "Programming Laboratory I", credits: 3.0 },
    ],
  },
  {
    id: "stu-1201",
    studentCode: "STU-1201",
    name: "Lucas Dubois",
    initials: "LD",
    avatarColor: "bg-rose-100 text-rose-700",
    department: "Design",
    departmentSlug: "design",
    studyYear: "3rd Year",
    studyYearFull: "3rd Year (Junior)",
    status: "Active Student",
    email: "lucas.dubois@campus.edu",
    enrolled: "Fall 2022",
    about:
      "Lucas focuses on product design ergonomics, spatial computing interfaces, and 3D digital experiences. He works part-time at the campus media design lab.",
    currentStanding: "3rd Year Undergraduate",
    systemRecordId: "1201-DS-LD",
    lastValidated: "Oct 21, 2024",
    subjects: [
      { code: "DS-315", title: "3D Modeling & Spatial Design", credits: 4.0 },
      { code: "DS-330", title: "Usability Testing & Field Research", credits: 3.5 },
      { code: "DS-305", title: "Design Systems at Scale", credits: 3.5 },
    ],
  },
  {
    id: "stu-1244",
    studentCode: "STU-1244",
    name: "Maya Lin",
    initials: "ML",
    avatarColor: "bg-indigo-100 text-indigo-700",
    department: "Business",
    departmentSlug: "business",
    studyYear: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    status: "Active Student",
    email: "maya.lin@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Maya is specializing in international entrepreneurship and sustainable operations. She conducts case studies on logistics optimization across global supply chains.",
    currentStanding: "2nd Year Undergraduate",
    systemRecordId: "1244-BS-ML",
    lastValidated: "Oct 20, 2024",
    subjects: [
      { code: "BS-210", title: "Principles of Global Commerce", credits: 4.0 },
      { code: "BS-240", title: "Managerial Economics", credits: 3.5 },
      { code: "BS-205", title: "Sustainable Supply Chains", credits: 3.0 },
    ],
  },
  {
    id: "stu-1310",
    studentCode: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    avatarColor: "bg-blue-100 text-blue-700",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "4th Year",
    studyYearFull: "4th Year (Senior)",
    status: "Active Student",
    email: "tariq.mansoor@campus.edu",
    enrolled: "Fall 2021",
    about:
      "Tariq is an honors student completing his capstone thesis on high-concurrency event brokers and distributed state machines in web environments.",
    currentStanding: "4th Year Undergraduate",
    specializationTrack: "Web Development",
    specializationTopic: "Distributed Web Systems",
    systemRecordId: "1310-CS-TA",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-450", title: "Advanced Distributed Systems", credits: 4.0 },
      { code: "CS-470", title: "Cloud Architecture & Scalability", credits: 4.0 },
      { code: "CS-499", title: "Senior Capstone Project", credits: 4.0 },
    ],
  },
  {
    id: "stu-1388",
    studentCode: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    avatarColor: "bg-blue-100 text-blue-700",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    status: "Active Student",
    email: "sophia.mueller@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Sophia explores reactive frontends, browser runtime security, and progressive offline caching techniques. She frequently writes technical articles for campus engineering journals.",
    currentStanding: "2nd Year Undergraduate",
    specializationTrack: "Web Development",
    specializationTopic: "Progressive Web Apps",
    systemRecordId: "1388-CS-SM",
    lastValidated: "Oct 23, 2024",
    subjects: [
      { code: "CS-240", title: "Client-Side Engineering & Web APIs", credits: 4.0 },
      { code: "CS-220", title: "Data Structures & File Systems", credits: 4.0 },
      { code: "CS-215", title: "Computer Architecture", credits: 3.5 },
    ],
  },
];

export function getAllStudents(): Student[] {
  return students;
}

export function getStudentById(id: string): Student | undefined {
  return students.find((s) => s.id === id);
}

export function getStudentsBySpecialization(track: string): Student[] {
  return students.filter((s) => s.specializationTrack === track);
}
