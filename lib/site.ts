export const profile = {
  name: "Manan Kapoor",
  role: "AI / ML Engineer",
  intro:
    "I build LLM systems across evaluation, retrieval, fine-tuning and NLP.",
  sub: "Currently researching NLP and instruction tuning at Thapar.",
  location: "India",
  year: "2026",
  status: "Open to AI/ML internships",
  email: "23.kapoormanan@gmail.com",
  github: "https://github.com/manankapoor23",
  linkedin: "https://www.linkedin.com/in/manan-kapoor-8545002a0/",
  resume: "/resume.pdf",
};

export type ExperienceItem = {
  year: string;
  org: string;
  role: string;
  place: string;
  note?: string;
};

export const experience: ExperienceItem[] = [
  {
    year: "2026",
    org: "Colab91",
    role: "AI Engineering Intern",
    place: "Gurugram, India",
    note: "Red-teaming, LLM evaluation, agent memory, and full-stack QA.",
  },
  {
    year: "2025",
    org: "Thapar Institute",
    role: "Research Intern",
    place: "Patiala, India",
    note: "Punjabi instruction datasets, fine-tuning, and evaluation.",
  },
];

export const now = [
  { label: "Building", value: "claudget", href: "https://github.com/manankapoor23/claudget" },
  { label: "Researching", value: "LLM evaluation & NLP" },
  { label: "Learning", value: "distributed systems" },
  { label: "Based in", value: "India" },
];

export type LabItem = { title: string; status: string };
export const lab: LabItem[] = [
  { title: "KV cache visualizer", status: "prototype" },
  { title: "RAG retrieval benchmarks", status: "exploring" },
  { title: "Gemini Embedding experiments", status: "active" },
  { title: "Paged-attention visualization", status: "experimenting" },
];
