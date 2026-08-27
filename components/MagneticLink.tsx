"use client";

import { useRef } from "react";

export default function MagneticLink({
  href, children, className = "",
}: { href: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener"
      className={`inline-block transition-transform duration-200 will-change-transform ${className}`}
      onMouseMove={(e) => {
        if (!matchMedia("(pointer: fine)").matches) return;
        const r = ref.current!.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        ref.current!.style.transform = `translate(${dx * 0.25}px, ${dy * 0.25}px)`;
      }}
      onMouseLeave={() => { if (ref.current) ref.current.style.transform = ""; }}
    >
      {children}
    </a>
  );
}
