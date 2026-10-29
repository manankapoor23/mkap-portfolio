import Link from "next/link";
import { Suspense } from "react";
import Weather from "./Weather";
import LocalTime from "./LocalTime";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-6">
      <div>
        <Link href="/" className="font-medium hover:text-muted">{profile.name}</Link>
        <p className="mono mt-1 text-muted">
          Chandigarh · <LocalTime />
          <Suspense fallback={null}><Weather /></Suspense>
        </p>
      </div>
      <nav className="mono flex items-baseline gap-4">
        <NavLinks />
        <ThemeToggle />
      </nav>
    </header>
  );
}
