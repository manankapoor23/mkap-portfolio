import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();

export type Stat = { label: string; value: string };
export type ProjectMeta = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: number;
  type: string;
  status: string;
  order: number;
  stats: Stat[];
  stack: string[];
  links: { github?: string; huggingface?: string; demo?: string };
};
export type NoteMeta = { slug: string; title: string; date: string; summary: string };

function readDir(dir: string) {
  const full = path.join(ROOT, "content", dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith(".mdx"));
}

export function getProjects(): ProjectMeta[] {
  return readDir("projects")
    .map((file) => {
      const raw = fs.readFileSync(path.join(ROOT, "content/projects", file), "utf8");
      const { data } = matter(raw);
      return { slug: file.replace(/\.mdx$/, ""), ...(data as Omit<ProjectMeta, "slug">) };
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProject(slug: string) {
  const raw = fs.readFileSync(path.join(ROOT, "content/projects", `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...(data as Omit<ProjectMeta, "slug">) }, content };
}

export function getNotes(): NoteMeta[] {
  return readDir("notes")
    .map((file) => {
      const raw = fs.readFileSync(path.join(ROOT, "content/notes", file), "utf8");
      const { data } = matter(raw);
      return { slug: file.replace(/\.mdx$/, ""), ...(data as Omit<NoteMeta, "slug">) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNote(slug: string) {
  const raw = fs.readFileSync(path.join(ROOT, "content/notes", `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...(data as Omit<NoteMeta, "slug">) }, content };
}
