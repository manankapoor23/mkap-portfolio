import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import ProjectRow from "@/components/ProjectRow";
import ExperienceRow from "@/components/ExperienceRow";
import NoteRow from "@/components/NoteRow";
import MagneticLink from "@/components/MagneticLink";
import { profile, experience, now } from "@/lib/site";
import { getProjects, getNotes } from "@/lib/content";

export default function Home() {
  const projects = getProjects().slice(0, 3);
  const notes = getNotes().slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-20">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.045em] leading-[0.95]">{profile.name}</h1>
        <p className="mono text-sm text-accent mt-5 tracking-[0.12em] uppercase">{profile.role}</p>
        <p className="mt-6 text-xl md:text-2xl max-w-[30ch] leading-snug">{profile.intro}</p>
        <p className="mt-3 text-muted max-w-[38ch]">{profile.sub}</p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
          <span>{profile.location}</span>
          <span>{profile.year}</span>
          <span className="text-accent">{profile.status}</span>
        </div>
        <div className="mt-4 flex gap-6 mono text-sm">
          <MagneticLink href={profile.github} className="hover:text-accent">GitHub ↗</MagneticLink>
          <MagneticLink href={profile.linkedin} className="hover:text-accent">LinkedIn ↗</MagneticLink>
          <MagneticLink href={`mailto:${profile.email}`} className="hover:text-accent">Email ↗</MagneticLink>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="fade">
        <div className="flex items-center justify-between">
          <SectionLabel>Selected Work</SectionLabel>
        </div>
        <div>
          {projects.map((p, i) => <ProjectRow key={p.slug} project={p} index={i} />)}
        </div>
        <div className="border-t border-border pt-5">
          <Link href="/work" className="mono text-xs text-muted hover:text-accent">All work →</Link>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-24 fade">
        <SectionLabel>Experience</SectionLabel>
        <div>{experience.map((e) => <ExperienceRow key={e.org} item={e} />)}</div>
      </section>

      {/* NOTES */}
      <section className="mt-24 fade">
        <SectionLabel>Notes</SectionLabel>
        <div>{notes.map((n) => <NoteRow key={n.slug} note={n} />)}</div>
        <div className="border-t border-border pt-5">
          <Link href="/notes" className="mono text-xs text-muted hover:text-accent">All notes →</Link>
        </div>
      </section>

      {/* NOW */}
      <section className="mt-24 fade">
        <SectionLabel>Now</SectionLabel>
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-2xl">
          {now.map((n) => (
            <div key={n.label} className="flex gap-4 border-t border-border pt-4">
              <dt className="mono text-[0.72rem] uppercase tracking-[0.14em] text-muted w-28 shrink-0 pt-0.5">{n.label}</dt>
              <dd className="font-medium">
                {n.href ? <a href={n.href} target="_blank" rel="noopener" className="hover:text-accent">{n.value} ↗</a> : n.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
