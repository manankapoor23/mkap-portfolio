export const profile = {
  name: "Manan Kapoor",
  role: "ML engineer, mostly language models",
  intro:
    "I work on the parts of language models that decide whether they're useful: evaluating them honestly, retrieving the right context, and fine-tuning them for languages they handle badly. Lately I'm learning backend and system design so the models actually ship.",
  sub: "Computer Engineering student and research intern at Thapar Institute (TIET).",
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
    note: "Published PRISM-Punjabi (16.43M tokens, 91K+ samples); full fine-tuned LLaMA 3.1 8B via Unsloth, evaluated against 4 baselines.",
  },
  {
    year: "Jun–Jul 2026",
    org: "Colab91",
    role: "AI Engineering Intern",
    place: "Gurugram, India",
    note: "Red-teamed a production LLM analytics agent across 50+ probes; specified a factual-state store fix for context drift; owned full-stack QA.",
  },
];

export const now = [
  { label: "Building", value: "claudget", href: "https://github.com/manankapoor23/claudget" },
  { label: "Researching", value: "LLM evaluation, retrieval and NLP, at TIET and on my own" },
  { label: "Learning", value: "backend and system design" },
];

export const skills = [
  { label: "Languages", items: ["Python", "C++", "JavaScript", "SQL", "R"] },
  { label: "ML & NLP", items: ["LLM fine-tuning (full & QLoRA)", "instruction tuning", "RAG", "transformers", "benchmarking", "prompt engineering"] },
  { label: "Frameworks", items: ["PyTorch", "HuggingFace Transformers", "Unsloth", "LangChain", "OpenAI SDK", "sentence-transformers", "scikit-learn"] },
  { label: "Backend & Systems", items: ["FastAPI", "system design", "Docker", "model serving", "inference pipelines", "PostgreSQL", "FAISS", "Chroma", "Linux"] },
];

export type LabItem = { title: string; status: string };
export const lab: LabItem[] = [
  { title: "KV cache visualizer", status: "prototype" },
  { title: "RAG retrieval benchmarks", status: "exploring" },
  { title: "Gemini Embedding experiments", status: "active" },
  { title: "Paged-attention visualization", status: "experimenting" },
];
