"use client";

export default function ThemeToggle() {
  return (
    <button
      aria-label="Toggle theme"
      className="mono text-sm text-muted hover:text-fg transition-colors"
      onClick={() => {
        const el = document.documentElement;
        const cur =
          el.getAttribute("data-theme") ||
          (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        const next = cur === "dark" ? "light" : "dark";
        el.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch {}
      }}
    >
      ◐
    </button>
  );
}
