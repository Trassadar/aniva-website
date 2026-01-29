"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/aniva";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const openedAtRef = useRef<number>(0);
  const openedScrollYRef = useRef<number>(0);

  useEffect(() => {
    const handlePointerDownOutside = (event: PointerEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      // On mobile, opening the menu can trigger a small scroll event (browser UI / layout),
      // especially when you are not at the top. Avoid closing instantly.
      if (!isMenuOpen) return;

      const now = Date.now();
      if (now - openedAtRef.current < 200) return;

      const delta = Math.abs(window.scrollY - openedScrollYRef.current);
      if (delta > 8) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      openedAtRef.current = Date.now();
      openedScrollYRef.current = window.scrollY;

      document.addEventListener('pointerdown', handlePointerDownOutside);
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('touchmove', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('pointerdown', handlePointerDownOutside);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchmove', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="ANIVA"
              width={400}
              height={120}
              priority
              className="h-20 w-auto select-none"
              sizes="(max-width: 640px) 260px, 400px"
            />
            <span className="sr-only">ANIVA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/servicii"
              className="text-sm font-semibold text-[rgba(27,20,16,0.8)] hover:text-[rgba(27,20,16,1)] transition"
            >
              Servicii
            </Link>
            <Link
              href="/tarife"
              className="text-sm font-semibold text-[rgba(27,20,16,0.8)] hover:text-[rgba(27,20,16,1)] transition"
            >
              Tarife
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-[rgba(27,20,16,0.8)] hover:text-[rgba(27,20,16,1)] transition"
            >
              Contact
            </Link>
            <Button variant="primary" href="/comanda-online">
              Comanda online
            </Button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-black/5 bg-white/80 text-[rgba(27,20,16,0.9)] shadow-sm"
            aria-label="Deschide meniul"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/20 z-50 md:hidden" onClick={() => setIsMenuOpen(false)} />
            <div ref={menuRef} className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur relative z-60">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
                <Link
                  href="/"
                  className="py-2 text-sm font-semibold text-[rgba(27,20,16,0.8)] hover:text-[rgba(27,20,16,1)] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Acasa
                </Link>
                <Link
                  href="/servicii"
                  className="py-2 text-sm font-semibold text-[rgba(27,20,16,0.8)] hover:text-[rgba(27,20,16,1)] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicii
                </Link>
              <Link
                href="/tarife"
                className="py-2 text-sm font-semibold text-[rgba(27,20,16,0.8)] hover:text-[rgba(27,20,16,1)] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarife
              </Link>
              <Link
                href="/contact"
                className="py-2 text-sm font-semibold text-[rgba(27,20,16,0.8)] hover:text-[rgba(27,20,16,1)] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="primary"
                href="/comanda-online"
                className="w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Comanda online
              </Button>
                </div>
              </div>
          </div>
          </>
        )}
      </header>
    </>
  );
}
