import { designs } from "@/lib/site";

export const metadata = { title: "System design" };

export default function DesignPage() {
  return (
    <section>
      <h1 className="text-[2.25rem] font-medium leading-[1.15] tracking-[-0.015em]">System design</h1>
      <div className="mt-12 space-y-16">
        {designs.map((d) => (
          <figure key={d.title}>
            <figcaption className="mb-4">{d.title}</figcaption>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={d.image} alt={`${d.title} system design diagram`} className="w-full rounded border border-rule" />
          </figure>
        ))}
      </div>
    </section>
  );
}
