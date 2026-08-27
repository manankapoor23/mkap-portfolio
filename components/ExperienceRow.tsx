import type { ExperienceItem } from "@/lib/site";

export default function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <div className="flex gap-6 md:gap-10 border-t border-border py-6">
      <span className="mono text-sm text-muted tabular pt-0.5 w-12 shrink-0">{item.year}</span>
      <div>
        <h3 className="font-semibold">{item.org}</h3>
        <p className="text-muted text-sm">{item.role} · {item.place}</p>
        {item.note ? <p className="text-muted text-sm mt-1 max-w-[52ch]">{item.note}</p> : null}
      </div>
    </div>
  );
}
