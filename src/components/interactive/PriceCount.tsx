// Numara o valoare intreaga, o singura data, la deschiderea paginii.
// Functii: PriceCount

"use client";

import { useLayoutEffect, useState } from "react";

type Props = { value?: number };

export default function PriceCount({ value = 13 }: Props) {
  const [n, setN] = useState(value);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const duration = 700;
    let start = 0;
    let frame = 0;

    const tick = (now: number) => {
      if (start === 0) start = now;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span className="hero-count">{n}</span>;
}
