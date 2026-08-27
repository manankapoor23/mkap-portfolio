import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjects, getProject } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getProject(slug);
    return { title: meta.title, description: meta.description };
  } catch { return { title: "Project" }; }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let data;
  try { data = getProject(slug); } catch { notFound(); }
  const { meta, content } = data!;

  return (
    <article className="pt-16 pb-10">
      <Link href="/work" className="mono text-xs text-muted hover:text-accent">← Work</Link>

      <header className="mt-8 pb-8 border-b border-border">
        <div className="mono text-[0.72rem] uppercase tracking-[0.16em] text-muted mb-4">
          {meta.type} · {meta.year} · {meta.status}
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[0.98]">{meta.title}</h1>
        <p className="mt-4 text-xl text-muted max-w-[46ch]">{meta.tagline}</p>

        {meta.stats?.length ? (
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {meta.stats.map((s) => (
              <div key={s.label}>
                <div className="mono text-2xl md:text-3xl text-accent tabular">{s.value}</div>
                <div className="mono text-[0.68rem] uppercase tracking-[0.14em] text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <span className="mono text-xs text-faint">{meta.stack?.join(" · ")}</span>
          <div className="flex gap-4 mono text-xs">
            {meta.links?.github ? <a href={meta.links.github} target="_blank" rel="noopener" className="text-accent hover:underline underline-offset-4">GitHub ↗</a> : null}
            {meta.links?.huggingface ? <a href={meta.links.huggingface} target="_blank" rel="noopener" className="text-accent hover:underline underline-offset-4">HuggingFace ↗</a> : null}
          </div>
        </div>
      </header>

      <div className="prose mt-12">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
