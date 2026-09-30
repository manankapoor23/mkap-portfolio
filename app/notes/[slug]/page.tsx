import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getNotes, getNote } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getNote(slug);
    return { title: meta.title, description: meta.summary };
  } catch { return { title: "Note" }; }
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let data;
  try { data = getNote(slug); } catch { notFound(); }
  const { meta, content } = data!;

  return (
    <article>
      <Link href="/notes" className="mono text-muted hover:text-fg">← notes</Link>
      <header className="mt-8 border-b border-rule pb-8">
        <p className="mono text-faint">{meta.date}</p>
        <h1 className="mt-2 text-[2.25rem] font-medium leading-[1.15] tracking-[-0.015em]">{meta.title}</h1>
      </header>
      <div className="prose mt-10">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
