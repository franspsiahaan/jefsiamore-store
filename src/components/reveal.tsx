"use client";

import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";

/**
 * Membungkus konten supaya naik-memudar masuk saat masuk viewport.
 * Menghormati prefers-reduced-motion (langsung tampil).
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: "div" | "li" | "section" | "figure";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Untuk prefers-reduced-motion, CSS di globals.css yang memaksa .reveal
    // tetap tampil, jadi di sini cukup observer biasa.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref as unknown as Ref<HTMLDivElement>}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Comp>
  );
}
