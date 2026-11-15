"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** întârziere în ms, pentru apariții în cascadă */
  delay?: number;
  as?: "div" | "section" | "li";
};

/**
 * Animație ușoară la scroll (fade + slide), fără biblioteci.
 * Conținutul este randat pe server, deci rămâne vizibil pentru Google.
 * Cu prefers-reduced-motion, CSS-ul dezactivează animația.
 */
export default function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
