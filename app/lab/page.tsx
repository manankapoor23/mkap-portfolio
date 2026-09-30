import { lab } from "@/lib/site";

export const metadata = { title: "Lab" };

export default function LabPage() {
  return (
    <section>
      <h1 className="text-[2.25rem] font-medium leading-[1.15] tracking-[-0.015em]">Lab</h1>
      <p className="mt-3 text-muted">Experiments not yet polished enough to be projects, mostly around LLM internals and infrastructure.</p>
      <ul className="mt-12 space-y-2">
        {lab.map((x) => (
          <li key={x.title} className="flex items-baseline justify-between gap-6">
            <span>{x.title}</span>
            <span className="mono shrink-0 text-faint">{x.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
