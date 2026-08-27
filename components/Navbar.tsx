import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{ background: "color-mix(in srgb, var(--bg) 74%, transparent)", backdropFilter: "blur(10px)" }}
    >
      <div className="mx-auto max-w-[1180px] px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Manan Kapoor</Link>
        <nav className="flex items-center gap-5 sm:gap-7 mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">
          <Link href="/work" className="hover:text-fg transition-colors">Work</Link>
          <Link href="/notes" className="hover:text-fg transition-colors">Notes</Link>
          <Link href="/lab" className="hover:text-fg transition-colors">Lab</Link>
          <Link href="/about" className="hover:text-fg transition-colors">About</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
