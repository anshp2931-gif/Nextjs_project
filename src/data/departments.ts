export interface Department {
  slug: string;
  name: string;
  iconType: "code" | "pen" | "chart";
  description: string;
  specializationsCount: number;
  enrolledStudentsCount: number;
}

export interface SpecializationTrack {
  slug: string;
  name: string;
  trackCode: string;
  departmentName: string;
  departmentSlug: string;
  description: string;
  academicLead: string;
  primaryCoreLab: string;
  totalEnrollment: string;
  curriculumCycle: string;
}

export const departments: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    iconType: "code",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializationsCount: 4,
    enrolledStudentsCount: 320,
  },
  {
    slug: "design",
    name: "Design",
    iconType: "pen",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializationsCount: 3,
    enrolledStudentsCount: 185,
  },
  {
    slug: "business",
    name: "Business",
    iconType: "chart",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializationsCount: 3,
    enrolledStudentsCount: 240,
  },
];

export const webDevSpecialization: SpecializationTrack = {
  slug: "web-development",
  name: "Web Development",
  trackCode: "CS-SPEC-04",
  departmentName: "Computer Science",
  departmentSlug: "computer-science",
  description:
    "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
  academicLead: "Prof. Elena Vance",
  primaryCoreLab: "Turing Hall 408",
  totalEnrollment: "4 Active Enrollees",
  curriculumCycle: "2024–2025 Revised",
};

export function getAllDepartments(): Department[] {
  return departments;
}

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}
