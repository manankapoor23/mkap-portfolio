import Link from "next/link";
import type { ProjectMeta } from "@/lib/content";

export default function ProjectRow({ project, showStats = false }: { project: ProjectMeta; showStats?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] sm:gap-x-2">
      <span className="mono tabular pt-[0.2rem] text-faint">{project.year}</span>
      <div>
        <Link href={`/work/${project.slug}`} className="link text-[1.0625rem] font-medium">{project.title}</Link>
        <p className="text-[0.9375rem] leading-normal text-muted">{project.tagline}</p>
        {showStats && project.stats?.length ? (
          <p className="mono tabular mt-1 text-muted">
            {project.stats.map((s) => `${s.value} ${s.label.toLowerCase()}`).join(" · ")}
          </p>
        ) : null}
        {project.stack?.length ? <p className="mono mt-1 text-faint">{project.stack.join(" / ")}</p> : null}
      </div>
    </div>
  );
}
