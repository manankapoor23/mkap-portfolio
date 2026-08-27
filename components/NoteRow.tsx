import Link from "next/link";
import type { NoteMeta } from "@/lib/content";

export default function NoteRow({ note }: { note: NoteMeta }) {
  return (
    <Link href={`/notes/${note.slug}`} className="group flex items-baseline justify-between gap-6 border-t border-border py-5">
      <div className="min-w-0">
        <h3 className="font-medium transition-transform duration-300 group-hover:translate-x-1">{note.title}</h3>
        {note.summary ? <p className="text-muted text-sm mt-0.5">{note.summary}</p> : null}
      </div>
      <span className="mono text-xs text-faint shrink-0">{note.date}</span>
    </Link>
  );
}
