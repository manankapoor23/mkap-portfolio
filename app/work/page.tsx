import SectionLabel from "@/components/SectionLabel";
import ProjectRow from "@/components/ProjectRow";
import { getProjects } from "@/lib/content";

export const metadata = { title: "Work" };

export default function WorkPage() {
  const projects = getProjects();
  return (
    <section className="pt-20 pb-10">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">Work</h1>
      <p className="text-muted max-w-[52ch] mb-14">
        Selected projects in LLM systems, retrieval, and NLP. Each is a short technical write-up, not a card.
      </p>
      <SectionLabel>Projects</SectionLabel>
      <div>{projects.map((p, i) => <ProjectRow key={p.slug} project={p} index={i} />)}</div>
    </section>
  );
}
