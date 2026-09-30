import { profile } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mono mt-18 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-rule py-12 text-muted">
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <a href={`mailto:${profile.email}`} className="hover:text-fg">email</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">github</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">linkedin</a>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hover:text-fg">résumé</a>
      </div>
      <span className="text-faint">{profile.location}</span>
    </footer>
  );
}
