import { Suspense } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LiveClock from "./LiveClock";
import Weather from "./Weather";
import { profile } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg">
      <div className="mx-auto w-full max-w-[1084px]">
        <div className="md:grid md:grid-cols-12 md:gap-5">
          <div className="hidden md:block md:col-span-1" />

          <div className="col-span-10 flex h-[42px] items-center justify-between px-4 md:px-0">
            <Link href="/" className="text-sm text-fg">{profile.name}</Link>

            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/work" className="text-sm text-muted hover:text-fg">work</Link>
                <Link href="/notes" className="text-sm text-muted hover:text-fg">notes</Link>
                <Link href="/lab" className="text-sm text-muted hover:text-fg">lab</Link>
                <Link href="/about" className="text-sm text-muted hover:text-fg">about</Link>
              </nav>
              <span className="hidden md:block text-border">|</span>
              <div className="hidden md:flex items-center gap-2 text-sm text-muted">
                <span>{profile.location}</span>
                <Suspense fallback={null}>
                  <Weather />
                </Suspense>
                <LiveClock />
              </div>
              <ThemeToggle />
            </div>
          </div>

          <div className="hidden md:block md:col-span-1" />
        </div>
      </div>
    </header>
  );
}
