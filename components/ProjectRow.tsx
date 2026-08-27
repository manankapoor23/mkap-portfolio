"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { ProjectMeta } from "@/lib/content";

export default function ProjectRow({ project, index }: { project: ProjectMeta; index: number }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const fine = useRef(true);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-t border-border py-8 md:py-10 transition-colors hover:bg-panel"
      onMouseEnter={() => { fine.current = matchMedia("(pointer: fine)").matches; }}
      onMouseMove={(e) => { if (fine.current) setPos({ x: e.clientX, y: e.clientY }); }}
      onMouseLeave={() => setPos(null)}
    >
      <div className="flex gap-6 md:gap-10 px-1">
        <span className="mono text-sm text-faint tabular pt-1">{String(index + 1).padStart(2, "0")}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
              {project.title}
            </h3>
            <span className="mono text-xs text-muted shrink-0 hidden sm:block">{project.year} · {project.type}</span>
          </div>
          <p className="mt-1 text-muted">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 mono text-xs text-fg">
            {project.stats?.map((s) => (
              <span key={s.label}><b className="tabular">{s.value}</b> <span className="text-muted">{s.label}</span></span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <span className="mono text-[0.72rem] text-faint">{project.stack?.join(" · ")}</span>
            <span className="mono text-xs text-accent shrink-0 inline-flex items-center gap-1">
              VIEW <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>

      {/* signature: cursor-following stat card */}
      {pos && project.stats?.length ? (
        <div
          className="pointer-events-none fixed z-50 hidden md:block"
          style={{ left: pos.x + 22, top: pos.y - 20 }}
        >
          <div className="rounded-md border border-border bg-panel px-4 py-3 shadow-sm">
            <div className="mono text-[0.6rem] uppercase tracking-[0.2em] text-faint mb-2">{project.title}</div>
            <div className="flex flex-col gap-1">
              {project.stats.map((s) => (
                <div key={s.label} className="mono text-sm">
                  <span className="text-accent tabular">{s.value}</span>{" "}
                  <span className="text-muted text-xs uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </Link>
  );
}
