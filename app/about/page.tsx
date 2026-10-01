import SectionLabel from "@/components/SectionLabel";
import ExperienceRow from "@/components/ExperienceRow";
import { profile, experience, skills } from "@/lib/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-[2.25rem] font-medium leading-[1.15] tracking-[-0.015em]">About</h1>
      <div className="prose mt-6">
        <p>
          I'm a Computer Engineering student at Thapar Institute working where ML research meets
          systems engineering. I like the parts of a language model most people treat as a black box:
          how it caches attention, how it ingests data, and how it's taught a new language.
        </p>
        <p>
          Right now I'm a research intern at TIET building Punjabi instruction datasets and fine-tuning
          open models, alongside independent research of my own. In summer 2026 I red-teamed and evaluated
          LLM agents as an AI engineering intern at Colab91. I'm increasingly drawn to backend and
          system design: evaluation done honestly, retrieval that's actually grounded, and models that ship.
        </p>
      </div>

      <div className="mt-18">
        <SectionLabel>experience</SectionLabel>
        <div className="space-y-5">{experience.map((e) => <ExperienceRow key={e.org} item={e} />)}</div>
      </div>

      <div className="mt-18">
        <SectionLabel>skills</SectionLabel>
        <dl className="space-y-3">
          {skills.map((s) => (
            <div key={s.label} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] sm:gap-x-2">
              <dt className="mono pt-[0.2rem] text-faint">{s.label.toLowerCase()}</dt>
              <dd className="text-[0.9375rem] leading-normal text-muted">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-18">
        <SectionLabel>contact</SectionLabel>
        <p>
          The fastest way to reach me is <a href={`mailto:${profile.email}`} className="link">{profile.email}</a>. I'm also on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link ext">GitHub</a> and{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link ext">LinkedIn</a>, and my{" "}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link ext">résumé</a> is a PDF.
        </p>
      </div>

      <div className="mt-18">
        <SectionLabel>colophon</SectionLabel>
        <p className="text-[0.9375rem] leading-normal text-muted">
          Set in Newsreader and IBM Plex Mono.
          Built with Next.js and MDX, hosted on Vercel. No analytics, no cookies. The weather is from Open-Meteo
          and the GitHub data comes straight from its API.{" "}
          <a href="https://github.com/manankapoor23/mkap-portfolio" target="_blank" rel="noopener noreferrer" className="link ext">Source</a>.
        </p>
      </div>
    </section>
  );
}
