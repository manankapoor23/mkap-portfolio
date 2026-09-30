import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Linkedin, RefreshCw } from "lucide-react";
import { profile, experience, now } from "@/lib/site";
import { getProjects, getNotes } from "@/lib/content";
import type { ProjectMeta, NoteMeta } from "@/lib/content";

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-0.5">
      <span className="border-b border-border-soft leading-tight group-hover:border-border-strong">{children}</span>
      <svg className="relative h-4 w-4 text-faint transition-all group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  );
}

function article(word: string) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function SummaryList() {
  const current = experience[0];
  const previous = experience[1];
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium uppercase text-faint">Summary</h2>
      <ul className="list-disc space-y-2 pl-4 text-muted marker:text-border-strong">
        <li>
          Currently building <ArrowLink href="/work">systems</ArrowLink> across LLM evaluation, retrieval and fine-tuning.
        </li>
        {current ? (
          <li>
            Currently {article(current.role)} <span className="text-fg font-medium">{current.role}</span> at{" "}
            <span className="text-fg font-medium">{current.org}</span>, {current.place}.
          </li>
        ) : null}
        {previous ? (
          <li>
            Previously {article(previous.role)} <span className="text-fg font-medium">{previous.role}</span> at{" "}
            <span className="text-fg font-medium">{previous.org}</span>, {previous.place}.
          </li>
        ) : null}
        <li>Based in {profile.location} &mdash; {profile.status.toLowerCase()}.</li>
      </ul>
    </div>
  );
}

function SocialRow() {
  const shipping = now.find((n) => n.href);
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-4">
        <a href={`mailto:${profile.email}`} className="text-faint hover:text-muted" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-muted" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-muted" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>

      {shipping ? (
        <>
          <div className="h-4 w-px bg-border" />
          <div className="group flex items-center gap-2 text-muted">
            <div className="overflow-hidden rounded-full flex-shrink-0 text-faint">
              <RefreshCw className="h-4 w-4 animate-none group-hover:animate-spin" />
            </div>
            <span className="text-sm whitespace-nowrap">
              Shipping <ArrowLink href={shipping.href!}>{shipping.value}</ArrowLink>
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
}

function initials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function ProjectsList({ projects }: { projects: ProjectMeta[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium uppercase text-faint">Projects</h2>
      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.slug} className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-panel flex-shrink-0">
              <span className="text-xs font-medium text-muted">{initials(p.title)}</span>
            </div>
            <div className="space-y-1">
              <Link href={`/work/${p.slug}`} className="group inline-flex items-center gap-0.5">
                <span className="border-b border-border-soft leading-tight group-hover:border-border-strong">{p.title}</span>
                <svg className="relative h-4 w-4 text-faint transition-all group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
              <p className="text-base text-muted">{p.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WritingList({ notes }: { notes: NoteMeta[] }) {
  return (
    <div className="space-y-4 pb-8 md:pb-0">
      <h2 className="text-sm font-medium uppercase text-faint">Writing</h2>
      <div className="space-y-4">
        {notes.map((n) => (
          <div key={n.slug} className="group">
            <Link href={`/notes/${n.slug}`} className="grid grid-cols-[80px_1fr] items-baseline">
              <span className="text-sm text-faint">{n.date}</span>
              <div>
                <span className="inline border-b border-border-soft text-base text-muted group-hover:text-fg">{n.title}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const projects = getProjects();
  const notes = getNotes();

  return (
    <>
      {/* INTRO + SUMMARY */}
      <section className="py-8 md:py-16">
        {/* mobile */}
        <div className="flex flex-col md:hidden gap-8">
          <div className="flex flex-row gap-4 items-start">
            <div className="w-3/4">
              <p className="text-base text-muted">
                Hi, I&rsquo;m {profile.name.split(" ")[0]} and you&rsquo;re currently exploring my little corner of the internet. {profile.intro}
              </p>
            </div>
            <div className="w-1/4 aspect-square relative">
              <Image src="/portrait.jpg" alt={profile.name} fill sizes="25vw" className="rounded-lg object-cover" priority />
            </div>
          </div>
          <div className="space-y-8">
            <SummaryList />
            <SocialRow />
          </div>
        </div>

        {/* desktop */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-5 items-start">
          <div className="md:col-span-1" />
          <div className="md:col-span-6 space-y-12">
            <p className="text-base text-muted max-w-[46ch]">
              Hi, I&rsquo;m {profile.name.split(" ")[0]} and you&rsquo;re currently exploring my little corner of the internet. {profile.intro} {profile.sub}
            </p>
            <SummaryList />
            <SocialRow />
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full aspect-square">
              <Image src="/portrait.jpg" alt={profile.name} fill sizes="(max-width: 768px) 0px, 25vw" className="rounded-lg object-cover" priority />
            </div>
          </div>
          <div className="md:col-span-1" />
        </div>
      </section>

      {/* PROJECTS + WRITING */}
      <section className="pb-16">
        <div className="flex flex-col gap-12 md:hidden">
          <ProjectsList projects={projects} />
          <WritingList notes={notes} />
        </div>

        <div className="hidden md:grid md:grid-cols-12 md:gap-5">
          <div className="md:col-span-1" />
          <div className="md:col-span-7">
            <ProjectsList projects={projects} />
          </div>
          <div className="md:col-span-3 -ml-28">
            <WritingList notes={notes} />
          </div>
          <div className="md:col-span-1" />
        </div>
      </section>
    </>
  );
}
