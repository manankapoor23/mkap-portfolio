import NoteRow from "@/components/NoteRow";
import { getNotes } from "@/lib/content";

export const metadata = { title: "Notes" };

export default function NotesPage() {
  const notes = getNotes();
  return (
    <section>
      <h1 className="text-[2.25rem] font-medium leading-[1.15] tracking-[-0.015em]">Notes</h1>
      <p className="mt-3 text-muted">Working notes on LLM evaluation, retrieval and fine-tuning. Thinking out loud, not polished essays.</p>
      <div className="mt-12 space-y-5">
        {notes.map((n) => <NoteRow key={n.slug} note={n} showSummary />)}
      </div>
    </section>
  );
}
