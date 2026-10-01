import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import ProjectRow from "@/components/ProjectRow";
import ExperienceRow from "@/components/ExperienceRow";
import NoteRow from "@/components/NoteRow";
import GitHubSection from "@/components/GitHubSection";
import { profile, experience, now } from "@/lib/site";
import { getProjects, getNotes } from "@/lib/content";

export default function Home() {
  const projects = getProjects();
  const notes = getNotes();

  return (
    <>
      <section>
        <div className="flex items-center gap-4">
          <Image src="/portrait.jpg" alt="" width={64} height={64} className="h-16 w-16 rounded-[4px] object-cover" priority />
          <div>
            <h1 className="text-[2.25rem] font-medium leading-[1.15] tracking-[-0.015em]">{profile.name}</h1>
            <p className="mono text-muted">{profile.role}</p>
          </div>
        </div>
        <p className="mt-6">{profile.intro}</p>
        <p className="mt-3 text-muted">{profile.sub} {profile.status}.</p>
      </section>

      <section className="mt-18">
        <SectionLabel>now</SectionLabel>
        <dl className="space-y-1">
          {now.map((n) => (
            <div key={n.label} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] sm:gap-x-2">
              <dt className="mono pt-[0.2rem] text-faint">{n.label.toLowerCase()}</dt>
              <dd>
                {n.href ? (
                  <a href={n.href} target="_blank" rel="noopener noreferrer" className="link ext">{n.value}</a>
                ) : (
                  n.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-18">
        <SectionLabel>work</SectionLabel>
        <div className="space-y-5">
          {projects.map((p) => <ProjectRow key={p.slug} project={p} />)}
        </div>
      </section>

      <section className="mt-18">
        <SectionLabel>experience</SectionLabel>
        <div className="space-y-5">
          {experience.map((e) => <ExperienceRow key={e.org} item={e} />)}
        </div>
      </section>

      <section className="mt-18">
        <SectionLabel>notes</SectionLabel>
        <div className="space-y-2">
          {notes.map((n) => <NoteRow key={n.slug} note={n} />)}
        </div>
      </section>

      <GitHubSection />
    </>
  );
}
