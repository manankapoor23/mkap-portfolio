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
    <article>
      <Link href="/work" className="mono text-muted hover:text-fg">← work</Link>

      <header className="mt-8 border-b border-rule pb-8">
        <p className="mono text-faint">{meta.year} · {meta.type.toLowerCase()} · {meta.status.toLowerCase()}</p>
        <h1 className="mt-2 text-[2.25rem] font-medium leading-[1.15] tracking-[-0.015em]">{meta.title}</h1>
        <p className="mt-2 text-muted">{meta.tagline}</p>

        {meta.stats?.length ? (
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {meta.stats.map((s) => (
              <div key={s.label}>
                <dd className="tabular text-[1.375rem] font-medium leading-tight">{s.value}</dd>
                <dt className="mono text-faint">{s.label.toLowerCase()}</dt>
              </div>
            ))}
          </dl>
        ) : null}

        <p className="mono mt-6 text-faint">{meta.stack?.join(" / ")}</p>
        {meta.links?.github || meta.links?.huggingface ? (
          <p className="mono mt-2 flex gap-4">
            {meta.links?.github ? <a href={meta.links.github} target="_blank" rel="noopener noreferrer" className="link ext">github</a> : null}
            {meta.links?.huggingface ? <a href={meta.links.huggingface} target="_blank" rel="noopener noreferrer" className="link ext">hugging face</a> : null}
          </p>
        ) : null}
      </header>

      <div className="prose mt-10">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
