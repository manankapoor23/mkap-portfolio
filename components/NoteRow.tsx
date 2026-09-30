import Link from "next/link";
import type { NoteMeta } from "@/lib/content";

export default function NoteRow({ note, showSummary = false }: { note: NoteMeta; showSummary?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] sm:gap-x-2">
      <span className="mono tabular pt-[0.2rem] text-faint">{note.date}</span>
      <div>
        <Link href={`/notes/${note.slug}`} className="link">{note.title}</Link>
        {showSummary && note.summary ? <p className="text-[0.9375rem] leading-normal text-muted">{note.summary}</p> : null}
      </div>
    </div>
  );
}
