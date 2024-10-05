import { IFilterItem, IRecruitInfo } from "@/type/recruit";

export const filterList: Array<IFilterItem> = [
  {
    label: "Location",
    defaultValue: "Location All",
    options: [
      "Location All",
      "Nam-gu",
      "Buk-gu",
      "Dong-gu",
      "Seo-gu",
      "Busanjin-gu",
      "Jung-gu",
    ],
  },
  {
    label: "Language",
    defaultValue: "Language All",
    options: [
      "Language All",
      "English",
      "Korean",
      "Japanese",
      "Chinese",
      "Vietnamese",
      "Indian",
    ],
  },
  {
    label: "Theme",
    defaultValue: "Theme All",
    options: [
      "Theme All",
      "IT",
      "Design",
      "Marketing",
      "Business",
      "Law",
      "Engineering",
      "Society",
    ],
  },
] as const;

export const mockRecruitInfoList: Array<IRecruitInfo> = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Innovators",
    location: "Seoul, South Korea",
    description:
      "Develop user-facing web applications using modern frontend frameworks.",
    posted_date: "2024-10-01",
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "Code Masters",
    location: "Busan, South Korea",
    description: "Build and maintain server-side logic, APIs, and databases.",
    posted_date: "2024-10-02",
  },
  {
    id: "3",
    title: "Data Analyst",
    company: "Insight Analytics",
    location: "Incheon, South Korea",
    description: "Analyze complex datasets and provide actionable insights.",
    posted_date: "2024-09-29",
  },
  {
    id: "4",
    title: "UX/UI Designer",
    company: "Creative Studios",
    location: "Seoul, South Korea",
    description:
      "Design user-friendly interfaces for mobile and web applications.",
    posted_date: "2024-09-30",
  },
  {
    id: "5",
    title: "Mobile Developer",
    company: "Appify",
    location: "Daegu, South Korea",
    description: "Develop and maintain cross-platform mobile applications.",
    posted_date: "2024-10-03",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "Cloud Systems",
    location: "Gwangju, South Korea",
    description: "Implement CI/CD pipelines and manage cloud infrastructure.",
    posted_date: "2024-09-28",
  },
  {
    id: "7",
    title: "Project Manager",
    company: "NextGen Solutions",
    location: "Seoul, South Korea",
    description: "Oversee and coordinate software development projects.",
    posted_date: "2024-10-01",
  },
  {
    id: "8",
    title: "Cybersecurity Specialist",
    company: "SecureNet",
    location: "Busan, South Korea",
    description: "Monitor and secure IT infrastructure from potential threats.",
    posted_date: "2024-09-27",
  },
  {
    id: "9",
    title: "Marketing Manager",
    company: "BrandBoost",
    location: "Seoul, South Korea",
    description:
      "Plan and execute marketing strategies to drive brand awareness.",
    posted_date: "2024-10-02",
  },
  {
    id: "10",
    title: "AI Researcher",
    company: "Future AI Labs",
    location: "Daejeon, South Korea",
    description: "Research and develop innovative AI technologies and models.",
    posted_date: "2024-09-25",
  },
];
