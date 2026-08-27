import SectionLabel from "@/components/SectionLabel";
import ExperienceRow from "@/components/ExperienceRow";
import { profile, experience, now } from "@/lib/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="pt-20 pb-10">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">About</h1>
      <div className="prose text-lg">
        <p>
          I'm a Computer Engineering student at Thapar Institute working where ML research meets
          systems engineering. I like the parts of a language model most people treat as a black box —
          how it caches attention, how it ingests data, and how it's taught a new language.
        </p>
        <p>
          Right now I'm a research intern building Punjabi instruction datasets and fine-tuning open
          models, and an AI engineering intern red-teaming and evaluating LLM agents. I care about
          evaluation done honestly, retrieval that's actually grounded, and models that ship.
        </p>
      </div>

      <div className="mt-20"><SectionLabel>Experience</SectionLabel>
        <div>{experience.map((e) => <ExperienceRow key={e.org} item={e} />)}</div>
      </div>

      <div className="mt-20"><SectionLabel>Now</SectionLabel>
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-2xl">
          {now.map((n) => (
            <div key={n.label} className="flex gap-4 border-t border-border pt-4">
              <dt className="mono text-[0.72rem] uppercase tracking-[0.14em] text-muted w-28 shrink-0 pt-0.5">{n.label}</dt>
              <dd className="font-medium">{n.href ? <a href={n.href} target="_blank" rel="noopener" className="hover:text-accent">{n.value} ↗</a> : n.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-20"><SectionLabel>Contact</SectionLabel>
        <div className="flex flex-wrap gap-6 mono text-sm">
          <a href={`mailto:${profile.email}`} className="text-accent hover:underline underline-offset-4">{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener" className="text-muted hover:text-fg">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noopener" className="text-muted hover:text-fg">LinkedIn ↗</a>
          <a href={profile.resume} target="_blank" rel="noopener" className="text-muted hover:text-fg">Résumé ↗</a>
        </div>
      </div>
    </section>
  );
}
