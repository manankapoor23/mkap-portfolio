import ProjectRow from "@/components/ProjectRow";
import { getProjects } from "@/lib/content";

export const metadata = { title: "Work" };

export default function WorkPage() {
  const projects = getProjects();
  return (
    <section>
      <h1 className="text-[2.25rem] font-medium leading-[1.15] tracking-[-0.015em]">Work</h1>
      <p className="mt-3 text-muted">Projects in LLM systems, retrieval and NLP, each with a short technical write-up.</p>
      <div className="mt-12 space-y-8">
        {projects.map((p) => <ProjectRow key={p.slug} project={p} showStats />)}
      </div>
    </section>
  );
}
