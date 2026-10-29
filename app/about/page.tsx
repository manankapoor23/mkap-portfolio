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
          I'm Manan, a Computer Engineering student at Thapar Institute, graduating in 2028.
          I'm from Chandigarh. Most of my work so far has been around language models,
          but I also build desktop apps and small tools.
        </p>
        <p>
          My research at TIET is part of my broader exploration of LLMs. One project was
          PRISM, a Punjabi text-rewriting dataset and model. I collected and cleaned text, built
          a pipeline to generate rewriting examples, and fine-tuned LLaMA 3.1 8B on the
          resulting dataset. That meant working through the data as well as the model:
          checking generated samples, filtering malformed ones, and comparing results
          across six tasks.
        </p>
        <p>
          In summer 2026, I interned at Colab91, where I helped develop chatbots and
          applied what I knew about AI to their development and evaluation. I also tested an LLM analytics agent with
          questions designed to expose mistakes. Some answers had incorrect counts;
          others claimed to apply filters the system didn't support. I investigated
          how conversation history was causing context drift and proposed storing
          compact facts from tool results instead.
        </p>
        <p>
          My side projects often start with something I want to understand or use.
          Reading about attention and vLLM led me to build a paged KV cache in Python.
          Repeatedly checking my Claude Code usage led to claudget, a desktop app
          that keeps the numbers in view. It has reached 186+ downloads across its releases,
          with builds for macOS, Windows, and Linux. I like being able to follow an idea far
          enough to have something I can run, inspect, and improve.
        </p>
        <p>
          I'm currently learning more about backend development and system design,
          and looking for AI/ML internships.
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
