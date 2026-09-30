"use client";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      className="cursor-pointer text-muted hover:text-fg"
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
      <span className="theme-light">dark</span>
      <span className="theme-dark">light</span>
    </button>
  );
}
