"use client";

import { useEffect } from "react";

// Progressive enhancement: reveal-on-scroll. Content is visible without JS
// (the .fade hidden state is gated behind the .js class set here).
export default function Enhance() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const els = document.querySelectorAll(".fade");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const t = setTimeout(() => els.forEach((el) => el.classList.add("in")), 1500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return null;
}
