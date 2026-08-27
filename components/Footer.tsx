import { profile } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-lg font-medium">Let's build something.</p>
          <a href={`mailto:${profile.email}`} className="mono text-sm text-accent hover:underline underline-offset-4">
            {profile.email}
          </a>
        </div>
        <div className="mono text-[0.72rem] uppercase tracking-[0.12em] text-muted flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener" className="hover:text-fg">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener" className="hover:text-fg">LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noopener" className="hover:text-fg">Résumé</a>
        </div>
      </div>
    </footer>
  );
}
