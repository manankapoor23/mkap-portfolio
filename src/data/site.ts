export const profile = {
  name: "Manan Kapoor",
  role: "AI / ML Engineer",
  tagline:
    "I work on the inside of language models — inference systems, fine-tuning, retrieval, and the data pipelines that feed them.",
  location: "Chandigarh, India",
  email: "23.kapoormanan@gmail.com",
  resume: "/resume.pdf",
  github: "https://github.com/manankapoor23",
  githubUser: "manankapoor23",
  linkedin: "https://www.linkedin.com/in/manan-kapoor-8545002a0/",
  leetcode: "https://leetcode.com/u/manankapoor23",
};

export const about = [
  "Computer Engineering at Thapar Institute, working where ML research meets systems engineering. I like the parts of a language model most people treat as a black box — how it caches attention, how it ingests data, how it's taught a new language.",
  "Currently a research intern building Punjabi instruction datasets and fine-tuning open models, and an AI engineering intern red-teaming and evaluating LLM agents.",
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  place: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Engineering Intern",
    org: "Colab91",
    period: "Jun 2026 — Jul 2026",
    place: "Gurugram, India",
    points: [
      "Red-teamed LLM agents with 50+ adversarial probes, surfacing and documenting failure modes.",
      "Diagnosed agent memory and context-drift issues across multi-turn interactions, driving memory-design and prompt-caching fixes.",
      "Owned full-stack QA across the LLM pipeline, from evaluation to end-to-end checks.",
    ],
    tags: ["LLM Evaluation", "Red-Teaming", "Agent Memory", "Prompt Caching"],
  },
  {
    role: "Research Intern",
    org: "Thapar Institute of Engineering & Technology",
    period: "Jan 2025 — Present",
    place: "Patiala, India",
    points: [
      "Built PRISM, the first multi-task Punjabi instruction dataset for controlled text rewriting — 16.43M tokens from 600+ sources, 91,000+ instruction-conditioned samples across 6 tasks.",
      "Full fine-tuned LLaMA 3.1 8B on A100 GPUs with Unsloth, producing consistent Gurmukhi output where the base model fails.",
      "Benchmarked the fine-tuned model against four baselines across five evaluation metrics.",
    ],
    tags: ["NLP", "Instruction Tuning", "Dataset Engineering", "Unsloth"],
  },
];

export type Project = {
  title: string;
  repo?: string; // github repo name under githubUser
  href: string;
  blurb: string;
  tags: string[];
};

// Curated + ordered. Stars/language are enriched from the GitHub API at build time.
export const featured: Project[] = [
  {
    title: "KV-Paged-Attention",
    repo: "KV-Paged-Attention",
    href: "https://github.com/manankapoor23/KV-Paged-Attention",
    blurb:
      "A paged KV-cache for transformer inference — logical tokens decoupled from physical memory for 40%+ savings in long-context decoding, with page tables, reference counting, prefix reuse and copy-on-write.",
    tags: ["Python", "PyTorch", "ML Systems"],
  },
  {
    title: "NL-SQL",
    repo: "NL-SQL",
    href: "https://github.com/manankapoor23/NL-SQL",
    blurb:
      "A Slack data assistant that turns plain-English questions into schema-aware SQL, runs it against a live database, and returns results in-channel.",
    tags: ["LangChain", "LLMs", "Slack"],
  },
  {
    title: "PRISM — Punjabi Instruction Dataset",
    href: "https://huggingface.co/datasets/manankap23/PRISM-Punjabi",
    blurb:
      "Published multi-task Punjabi instruction dataset and a LLaMA 3.1 8B model fine-tuned on it for controlled text rewriting across six tasks.",
    tags: ["Dataset", "Fine-tuning", "HuggingFace"],
  },
  {
    title: "RAG Support Triage Agent",
    repo: "rag-support-triage-agent",
    href: "https://github.com/manankapoor23/rag-support-triage-agent",
    blurb:
      "Support-triage agent over a 117-document corpus using hybrid dense + BM25 retrieval with hard grounding, guardrails, and deterministic escalation — a 16-module pipeline.",
    tags: ["RAG", "Agents", "Guardrails"],
  },
  {
    title: "makoto-watermark-LLM",
    repo: "makoto-watermark-LLM",
    href: "https://github.com/manankapoor23/makoto-watermark-LLM",
    blurb:
      "From-scratch reproduction of NS-Watermark and Soft-Watermark for LLM text watermarking.",
    tags: ["Python", "NLP", "Research"],
  },
  {
    title: "Server-Load-Prediction",
    repo: "Server-Load-Prediction",
    href: "https://github.com/manankapoor23/Server-Load-Prediction",
    blurb:
      "Forecasts datacenter server overload 10 minutes ahead, served through a FastAPI dashboard.",
    tags: ["XGBoost", "FastAPI"],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "C++", "JavaScript", "SQL", "R"] },
  { group: "ML / NLP", items: ["LLM fine-tuning (full & QLoRA)", "Instruction tuning", "RAG", "Transformers", "Benchmarking", "Prompt engineering"] },
  { group: "Frameworks", items: ["PyTorch", "HuggingFace", "Unsloth", "LangChain", "OpenAI SDK", "sentence-transformers", "scikit-learn"] },
  { group: "Backend & Data", items: ["FastAPI", "Docker", "PostgreSQL", "FAISS", "Chroma", "Git", "Linux"] },
];
