"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "work" },
  { href: "/notes", label: "notes" },
  { href: "/lab", label: "lab" },
  { href: "/about", label: "about" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return links.map((l) => {
    const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
    return (
      <Link
        key={l.href}
        href={l.href}
        aria-current={active ? "page" : undefined}
        className={active ? "text-fg underline decoration-rule underline-offset-4" : "text-muted hover:text-fg"}
      >
        {l.label}
      </Link>
    );
  });
}
