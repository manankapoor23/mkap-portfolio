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
    <article className="pt-16 pb-10">
      <Link href="/notes" className="mono text-xs text-muted hover:text-accent">← Notes</Link>
      <header className="mt-8 pb-6 border-b border-border">
        <div className="mono text-xs text-faint mb-3">{meta.date}</div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-[24ch]">{meta.title}</h1>
      </header>
      <div className="prose mt-10">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
