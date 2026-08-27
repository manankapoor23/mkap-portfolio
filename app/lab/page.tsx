import SectionLabel from "@/components/SectionLabel";
import { lab } from "@/lib/site";

export const metadata = { title: "Lab" };

export default function LabPage() {
  return (
    <section className="pt-20 pb-10">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">Lab</h1>
      <p className="text-muted max-w-[52ch] mb-14">
        Experiments that aren't polished enough to be projects — mostly around LLM internals and infrastructure.
      </p>
      <SectionLabel>Experiments</SectionLabel>
      <div>
        {lab.map((x) => (
          <div key={x.title} className="flex items-baseline justify-between gap-6 border-t border-border py-5">
            <h3 className="font-medium">{x.title}</h3>
            <span className="mono text-[0.7rem] uppercase tracking-[0.14em] text-accent shrink-0">{x.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
