export const profile = {
  name: "Manan Kapoor",
  role: "Computer Engineering student · ML & software",
  intro:
    "I'm Manan, a Computer Engineering student at Thapar exploring LLMs through research and building. I've worked on fine-tuning, inference, and chatbots, and I like digging into how these systems work. I also built claudget, an open-source Claude Code usage monitor with 186+ downloads.",
  sub: "Based in Chandigarh. Research intern at TIET.",
  location: "Chandigarh, India",
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
    year: "2025–Present",
    org: "Thapar Institute (TIET)",
    role: "Research Intern",
    place: "Patiala, India",
    note: "Built PRISM-Punjabi, a dataset of 91,000+ examples across six text-rewriting tasks. Prepared the data, fine-tuned LLaMA 3.1 8B, and compared it with four instruction-tuned models.",
  },
  {
    year: "Jun–Jul 2026",
    org: "Colab91",
    role: "AI Engineering Intern",
    place: "Gurugram, India",
    note: "Helped develop chatbots and applied my AI knowledge to a production analytics agent. Tested it with 50+ adversarial probes. Tracked down incorrect counts and context drift, proposed a change to how it stored facts, and tested the dashboard from frontend to backend.",
  },
];

export const now = [
  { label: "Building", value: "claudget, a desktop app for keeping track of Claude Code usage", href: "https://claudget.vercel.app" },
  { label: "Researching", value: "LLM fine-tuning, evaluation, and inference" },
  { label: "Learning", value: "backend and system design" },
];

export const skills = [
  { label: "Languages", items: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "R"] },
  { label: "ML & NLP", items: ["LLM fine-tuning (full & QLoRA)", "instruction tuning", "RAG", "transformers", "benchmarking", "prompt engineering"] },
  { label: "Frameworks", items: ["PyTorch", "HuggingFace Transformers", "Unsloth", "LangChain", "OpenAI SDK", "sentence-transformers", "scikit-learn"] },
  { label: "Apps", items: ["Electron", "React", "Node.js", "Vitest", "GitHub Actions"] },
  { label: "Backend & Systems", items: ["FastAPI", "system design", "Docker", "model serving", "inference pipelines", "PostgreSQL", "FAISS", "Chroma", "Linux"] },
];

export type LabItem = { title: string; status: string };
export const lab: LabItem[] = [
  { title: "KV cache visualizer", status: "prototype" },
  { title: "RAG retrieval benchmarks", status: "exploring" },
  { title: "Gemini Embedding experiments", status: "active" },
  { title: "Paged-attention visualization", status: "experimenting" },
];
