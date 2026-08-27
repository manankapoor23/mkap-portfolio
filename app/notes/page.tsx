import SectionLabel from "@/components/SectionLabel";
import NoteRow from "@/components/NoteRow";
import { getNotes } from "@/lib/content";

export const metadata = { title: "Notes" };

export default function NotesPage() {
  const notes = getNotes();
  return (
    <section className="pt-20 pb-10">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">Notes</h1>
      <p className="text-muted max-w-[52ch] mb-14">
        Working notes on LLM evaluation, retrieval, and fine-tuning — thinking out loud, not polished essays.
      </p>
      <SectionLabel>Writing</SectionLabel>
      <div>{notes.map((n) => <NoteRow key={n.slug} note={n} />)}</div>
    </section>
  );
}
