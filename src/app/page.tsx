import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/aniva";
import Header from "@/components/Header";
import { BadgeCheck, Clock, Shield, Truck, Sparkles, Droplets } from "lucide-react";

function ProcessWithImages() {
  return (
    <section>
      <div className="container-app">
        <div className="card rounded-[32px] p-6 md:p-10 shadow-2xl border border-white/40 bg-white/35 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Left: steps */}
            <div>
              <div className="flex items-center justify-between gap-4">
              <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-text">
                    Proces in 6 pasi
                  </h2>
                  <p className="mt-1 text-sm md:text-base text-muted">
                    Proces complet de curatare profesionala
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-muted">
                    Fara substante agresive • Uscare controlata • Sigur pentru copii si animale
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-white/60 px-3 py-2 text-xs md:text-sm text-text shadow-sm">
                  <Clock className="h-4 w-4" />
                  <span>3 zile lucratoare</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
                {[
                  { n: 1, label: "Inspectie" },
                  { n: 2, label: "Desprafuire" },
                  { n: 3, label: "Aspirare" },
                  { n: 4, label: "Spalare controlata" },
                  { n: 5, label: "Stoarcere" },
                  { n: 6, label: "Uscare" },
                ].map((s) => (
                  <div key={s.n} className="flex flex-col items-center text-center">
                    <div className="h-14 w-14 rounded-full bg-white/70 border border-white/70 shadow-sm flex items-center justify-center font-bold text-text">
                      {s.n}
                    </div>
                    <div className="mt-2 text-xs md:text-sm text-text">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="relative overflow-hidden rounded-[24px] border border-white/40 shadow-xl">
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent z-10" />
                <Image
                  src="/images/Transport-aniva.png"
                  alt="Ridicare si livrare gratuita in Brasov"
                  width={1200}
                  height={800}
                  className="h-[220px] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs md:text-sm text-white">
                    <Truck className="h-4 w-4" />
                    Ridicare si livrare gratuita in Brasov
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-white/40 shadow-xl">
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent z-10" />
                <Image
                  src="/images/curatare-sigura-copii.jpg.png"
                  alt="Curatare sigura pentru copii si animale"
                  width={1200}
                  height={800}
                  className="h-[220px] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs md:text-sm text-white">
                    <Shield className="h-4 w-4" />
                    Curatare sigura si pentru copii si animale
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* subtle glow */}
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const items = [
    {
      icon: Sparkles,
      title: "Spalare covoare",
      badge: "11 lei/mp",
      text: "Curatare in profunzime, indepartare pete, spalare controlata cu detergenti specializati.",
      href: "/servicii",
      link: "Afla mai multe",
    },
    {
      icon: Droplets,
      title: "Igienizare si aspirare",
      badge: "Inclus",
      text: "Igienizare, indepartare praf si alergeni, parfumare optionala. Detergenti siguri.",
      href: "/servicii",
      link: "Afla mai multe",
    },
    {
      icon: BadgeCheck,
      title: "Uscare controlata",
      badge: "Inclus",
      text: "Uscare in spatiu controlat cu dezumidificatoare si ventilatoare pentru a preveni mirosuri si umezeala.",
      href: "/servicii",
      link: "Afla mai multe",
    },
  ];

  return (
    <section className="mt-10 md:mt-16">
      <div className="container-app">
        <div className="text-center">
          <h2 className="section-title text-3xl md:text-4xl">Serviciile noastre</h2>
          <p className="section-subtitle mt-3">
            Curatare profesionala pentru covoare, paturi si mochete.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((it) => (
            <div key={it.title} className="service-card">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="service-ic">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-text">{it.title}</div>
                    <div className="text-sm text-muted">{it.text}</div>
                  </div>
                </div>

                <div className="service-badge">{it.badge}</div>
              </div>

              <Link href={it.href} className="service-link">
                {it.link} <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
            </div>
          </div>
        </section>
  );
}

function QuickPricing() {
  return (
    <section className="mt-10 md:mt-16">
      <div className="container-app">
        <div className="card rounded-[32px] p-6 md:p-10 border border-white/40 bg-white/35 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <h2 className="section-title text-3xl md:text-4xl text-left">Tarife rapid</h2>
              <p className="section-subtitle mt-3 text-left">
                Preturi simple, transparente, fara surprize.
              </p>

              <div className="mt-6 space-y-4">
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Spalare covoare</div>
                    <div className="text-sm text-muted">Pret per metru patrat</div>
                  </div>
                  <div className="price-pill">
                    <span className="line-through text-muted mr-2 text-sm">13 lei/mp</span>
                    <span className="font-bold text-brand">11 lei/mp</span>
                  </div>
                </div>

                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Festonat covoare</div>
                    <div className="text-sm text-muted">Reparatii si protectie</div>
                  </div>
                  <div className="price-pill">15 lei/ml</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link href="/tarife" className="text-sm font-semibold text-text underline underline-offset-4">
                  Vezi toate tarifele
                </Link>
                <Button variant="ghost" href="/comanda-online">
                  Comanda online
                </Button>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-[24px] border border-white/40 shadow-xl">
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent z-10" />
              <Image
                src="/images/extra-ambient.jpg.png"
                alt="Din atelierul nostru"
                width={1200}
                height={900}
                className="h-[320px] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <div className="text-lg font-extrabold">Din atelierul nostru</div>
                <div className="text-sm opacity-90">Fiecare covor este tratat cu maxima atentie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mt-10 md:mt-16 mb-14">
      <div className="container-app">
        <div className="card rounded-[32px] p-6 md:p-10 border border-white/40 bg-white/35 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="text-center lg:text-left">
              <h2 className="section-title text-3xl md:text-4xl">Vrei o programare rapida?</h2>
              <p className="section-subtitle mt-3">
                Comanda online sau suna, iar noi ne ocupam de restul.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button variant="primary" href="/comanda-online" className="btn-cta">
                  Comanda online
                </Button>
                <Button variant="ghost" href="tel:0759158914">
                  Suna acum
                </Button>
              </div>
              
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/60 border border-white/60 px-3 py-2 text-xs md:text-sm text-text shadow-sm">
                <Clock className="h-4 w-4" />
                <span>Program: Luni - Sambata</span>
              </div>
              </div>
              
            <div className="relative overflow-hidden rounded-[24px] border border-white/40 shadow-xl">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/ridicare.png"
                  alt="Ridicare si Livrare ANIVA"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <div className="text-lg font-extrabold">Ridicare + livrare gratuita</div>
                <div className="text-sm opacity-90">In Brasov si imprejurimi</div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero (full-screen background + text peste) */}
      <section className="hero">
        <div className="container-app hero-content">
          <div className="max-w-[640px] text-left">
            <h1 className="section-title hero-title">
              Spalatorie profesionala de covoare in Brasov – ridicare si livrare gratuita
            </h1>

            <p className="section-subtitle hero-subtitle">
              Servicii profesionale pentru covoare, paturi si mochete. Ridicare si livrare gratuita in Brasov.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-start gap-4">
              <Button variant="primary" href="/comanda-online" className="btn-cta">
                Comanda online
              </Button>

              <div className="flex flex-col gap-1">
                <Button variant="ghost" href="tel:0759158914">
                  Suna acum
                </Button>
                <p className="text-xs text-muted">Spalatorie covoare Brasov</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proces in 6 pasi (overlap peste hero, ca in poza) */}
      <div className="relative z-10 mt-6 md:mt-10 lg:-mt-20">
        <ProcessWithImages />
              </div>
              
      <ServicesGrid />
      <QuickPricing />
      <CTA />

      <footer className="mt-16">
        <div className="container-app">
          <div className="footer-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div>
                <div>
                  <Image
                    src="/images/logo.png"
                    alt="ANIVA"
                    width={280}
                    height={84}
                    className="h-14 w-auto"
                    sizes="280px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted">
                  Spalatorie profesionala de covoare in Brasov. Servicii de calitate cu peste 4 ani de experienta.
                </p>
              </div>
              
              <div>
                <div className="text-lg font-extrabold text-text">Contact</div>
                <div className="mt-3 space-y-2 text-sm text-text">
                  <div className="flex items-center gap-2">
                    <span aria-hidden>📞</span>
                    <a href="tel:0759158914" className="underline underline-offset-4">
                      0759158914
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span aria-hidden>✉️</span>
                    <a href="mailto:spalatoriaaniva@gmail.com" className="underline underline-offset-4">
                      spalatoriaaniva@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span aria-hidden>📍</span>
                    <span>Str. Soseaua Cristianului Nr.11 Brasov</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-lg font-extrabold text-text">Linkuri</div>
                <div className="mt-3 space-y-2 text-sm">
                  <Link className="footer-link" href="/servicii">
                    Servicii
                  </Link>
                  <Link className="footer-link" href="/tarife">
                    Tarife
                  </Link>
                  <Link className="footer-link" href="/comanda-online">
                    Comanda online
                  </Link>
                  <Link className="footer-link" href="/contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-divider" />
            <div className="text-center text-xs text-muted">
              © 2026 ANIVA. Toate drepturile rezervate.
            </div>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted text-center">
              <a
                href="https://anpc.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 whitespace-nowrap"
                title="ANPC - Autoritatea Nationala pentru Protectia Consumatorilor"
              >
                ANPC
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 whitespace-nowrap"
                title="Platforma Europeana pentru Solutionarea Online a Litigiilor"
              >
                SOL (ODR)
              </a>
            </div>
          </div>
    </div>
      </footer>
    </>
  );
}
