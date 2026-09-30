import type { ExperienceItem } from "@/lib/site";

export default function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] sm:gap-x-2">
      <span className="mono tabular pt-[0.2rem] text-faint">{item.year}</span>
      <div>
        <p>{item.role}, {item.org}</p>
        <p className="mono text-faint">{item.place}</p>
        {item.note ? <p className="mt-1 max-w-[60ch] text-[0.9375rem] leading-normal text-muted">{item.note}</p> : null}
      </div>
    </div>
  );
}
