// Pagina principala pentru cautarea „spalatorie covoare brasov”.
// Contine: ProcessWithImages, ProcessExplained, ServicesGrid, WhyAniva, ZonesServed, QuickPricing, HomeFaq, CTA, Home.

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/aniva";
import Header from "@/components/Header";
import FAQSection from "@/components/seo/FAQSection";
import { generateMetadata as genMeta } from "@/lib/seo";
import { BadgeCheck, Clock, Shield, Truck, Sparkles, Droplets } from "lucide-react";

export const metadata = genMeta({
  title: "Spălătorie Covoare Brașov | 13 lei/mp, Ridicare Gratuită | ANIVA",
  description:
    "Spălătorie de covoare în Brașov cu ridicare și livrare gratuită. 13 lei/mp, gata în 3 zile lucrătoare. Programează online sau sună la 0759 158 914.",
  path: "",
});

const homeFaqs = [
  {
    question: "Cât costă spălatul covoarelor în Brașov?",
    answer:
      "Spălarea costă 13 lei pe metru pătrat, redus de la 15 lei/mp. Un covor de 3×4 m are 12 mp și costă 156 lei. Orice covor sub 1 mp se tarifează ca 1 mp. Festonatul este un serviciu separat: 13 lei pe metru liniar, redus de la 15 lei/ml. Lista completă și exemplele sunt pe pagina de tarife.",
  },
  {
    question: "Ridicarea și livrarea sunt gratuite?",
    answer:
      "Da, în Brașov și în localitățile din lista de zone, dacă este atinsă comanda minimă a zonei. În Brașov minimul este 6 mp, adică 78 lei. La Predeal, Bran sau Poiana Brașov minimul este 25 mp, adică 325 lei. Nu se adaugă taxă de deplasare peste prețul pe metru pătrat.",
  },
  {
    question: "În cât timp primesc covorul înapoi?",
    answer:
      "Termenul obișnuit este de 3 zile lucrătoare de la ridicare. Te anunțăm înainte de livrare, ca să fii acasă. Programul atelierului este luni–vineri 08:00–18:00 și sâmbătă 09:00–13:00. Duminica este închis.",
  },
  {
    question: "Mai există prețul de 10 lei/mp?",
    answer:
      "Nu. Oferta de 10 lei/mp nu mai este valabilă. Prețul actual, pe tot site-ul, este 13 lei/mp. Pagina despre prețul accesibil explică tariful de acum și diferența dintre metru pătrat și metru liniar.",
  },
  {
    question: "Cum se măsoară covorul?",
    answer:
      "Suprafața este lungimea înmulțită cu lățimea, în metri. Un covor de 2×3 m are 6 mp. Mai multe covoare din aceeași comandă se adună. Dacă totalul este sub minimul zonei, se taxează minimul, nu suprafața reală.",
  },
  {
    question: "Ce presupune spălarea și ce produse folosiți?",
    answer:
      "Fiecare covor trece prin inspecție, desprăfuire, aspirare, spălare controlată, stoarcere și uscare. Detergenții sunt aleși după material, fără substanțe agresive. Uscarea se face în spațiu controlat, cu dezumidificatoare și ventilatoare, ca să nu rămână umezeală sau miros. Procedeul este potrivit și pentru case cu copii sau animale.",
  },
  {
    question: "Unde este spălătoria și cum comand?",
    answer:
      "Atelierul este pe Șos. Cristianului nr. 11, Brașov. Poți completa formularul de comandă online sau suna la 0759 158 914. Email: spalatoriaaniva@gmail.com. La bloc, scrie scara și apartamentul; etajul îl poți pune la observații.",
  },
  {
    question: "Curățați și canapele, saltele sau mochetă?",
    answer:
      "Spălarea covoarelor are preț fix, 13 lei/mp. Curățarea canapelelor, a saltelelor și a mochetei se face la cerere, cu ofertă după material, pentru că nu se tarifează la metru pătrat ca un covor. Paginile dedicate explică fiecare serviciu.",
  },
];

function ProcessWithImages() {
  return (
    <section>
      <div className="container-app">
        <div className="card rounded-[32px] p-6 md:p-10 shadow-2xl border border-white/40 bg-white/35 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-text">
                    Proces în 6 pași
                  </h2>
                  <p className="mt-1 text-sm md:text-base text-muted">
                    De la inspecție până la uscarea controlată, în atelier
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-muted">
                    Fără substanțe agresive • Uscare controlată • Potrivit pentru case cu copii și animale
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-white/60 px-3 py-2 text-xs md:text-sm text-text shadow-sm">
                  <Clock className="h-4 w-4" />
                  <span>3 zile lucrătoare</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
                {[
                  { n: 1, label: "Inspecție" },
                  { n: 2, label: "Desprăfuire" },
                  { n: 3, label: "Aspirare" },
                  { n: 4, label: "Spălare controlată" },
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

            <div className="grid grid-cols-1 gap-4">
              <div className="relative overflow-hidden rounded-[24px] border border-white/40 shadow-xl">
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent z-10" />
                <Image
                  src="/images/Transport-aniva.png"
                  alt="Ridicare și livrare gratuită în Brașov"
                  width={1200}
                  height={800}
                  className="h-[220px] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs md:text-sm text-white">
                    <Truck className="h-4 w-4" />
                    Ridicare și livrare gratuită în Brașov
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-white/40 shadow-xl">
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent z-10" />
                <Image
                  src="/images/curatare-sigura-copii.jpg.png"
                  alt="Spălare fără substanțe agresive, potrivită pentru case cu copii și animale"
                  width={1200}
                  height={800}
                  className="h-[220px] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs md:text-sm text-white">
                    <Shield className="h-4 w-4" />
                    Fără substanțe agresive, pentru toată casa
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}

function ProcessExplained() {
  const steps = [
    {
      title: "1. Inspecție",
      text: "Verificăm materialul, petele și marginile. Dacă firul de pe contur este desfăcut, festonatul se discută separat: se măsoară în metri liniari, nu se amestecă cu metrii pătrați ai spălării.",
    },
    {
      title: "2. Desprăfuire",
      text: "Scoatem praful grosier înainte de apă. Altfel, murdăria rămâne în fibră și spală mai greu, mai ales la covoarele ținute peste iarnă.",
    },
    {
      title: "3. Aspirare",
      text: "Aspirăm ambele fețe, ca să plece nisipul, părul și praful fin pe care aspiratorul de acasă nu îl scoate din dosul covorului.",
    },
    {
      title: "4. Spălare controlată",
      text: "Detergentul este ales după material. Nu folosim substanțe agresive. Covoarele din lână și cele sintetice nu se tratează la fel.",
    },
    {
      title: "5. Stoarcere",
      text: "Scoatem apa în exces înainte de uscare, ca să nu stea covorul ud și să nu prindă miros.",
    },
    {
      title: "6. Uscare controlată",
      text: "Uscarea se face în spațiu cu dezumidificatoare și ventilatoare. Covorul pleacă uscat, nu doar clătit. Termenul obișnuit este de 3 zile lucrătoare.",
    },
  ];

  return (
    <section className="mt-10 md:mt-16">
      <div className="container-app">
        <div className="text-center">
          <h2 className="section-title text-3xl md:text-4xl">Cum spălăm covorul</h2>
          <p className="section-subtitle mt-3 max-w-3xl mx-auto">
            Covorul pleacă de la tine, se spală în atelierul de pe Șos. Cristianului nr. 11 și se întoarce uscat. Nu îl spălăm pe loc, în casă.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step) => (
            <div
              key={step.title}
              className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
            >
              <h3 className="font-extrabold text-text text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const items = [
    {
      icon: Sparkles,
      title: "Spălare covoare",
      badge: "13 lei/mp",
      text: "Curățare în profunzime, la metru pătrat. Prețul actual este 13 lei/mp, redus de la 15 lei/mp.",
      href: "/tarife",
      link: "Vezi tarifele",
    },
    {
      icon: Droplets,
      title: "Igienizare și aspirare",
      badge: "Inclus",
      text: "Desprăfuirea și aspirarea fac parte din spălare, nu sunt o linie separată pe factură.",
      href: "/servicii",
      link: "Vezi serviciile",
    },
    {
      icon: BadgeCheck,
      title: "Uscare controlată",
      badge: "Inclus",
      text: "Uscare în spațiu controlat, ca să nu rămână umezeală. Este inclusă în cei 13 lei/mp.",
      href: "/servicii",
      link: "Vezi serviciile",
    },
  ];

  return (
    <section className="mt-10 md:mt-16">
      <div className="container-app">
        <div className="text-center">
          <h2 className="section-title text-3xl md:text-4xl">Serviciile noastre</h2>
          <p className="section-subtitle mt-3">
            Spălarea covoarelor are preț fix. Canapelele, saltelele și mocheta se fac la cerere, cu ofertă după material.
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

function WhyAniva() {
  const reasons = [
    {
      title: "Preț scris, nu estimare vagă",
      text: "13 lei/mp pentru spălare, redus de la 15 lei/mp. Festonatul, dacă este nevoie, este 13 lei/ml. Îți spunem totalul înainte să începem.",
    },
    {
      title: "Ridicare gratuită, cu minim clar",
      text: "În Brașov minimul este 6 mp (78 lei). În stațiuni și în localitățile mai depărtate, minimul este 25 mp (325 lei). Lista este pe pagina de zone.",
    },
    {
      title: "Atelier în Brașov, nu doar un număr de telefon",
      text: "Covoarele se spală pe Șos. Cristianului nr. 11. Poți suna la 0759 158 914 sau scrie la spalatoriaaniva@gmail.com.",
    },
    {
      title: "Același procedeu pentru fiecare covor",
      text: "Nu scurtăm pașii ca să iasă un preț mai mic. Uscare controlată și detergenți fără substanțe agresive, inclusiv pentru case cu copii sau animale.",
    },
  ];

  return (
    <section className="mt-10 md:mt-16">
      <div className="container-app">
        <div className="text-center">
          <h2 className="section-title text-3xl md:text-4xl">De ce să alegi ANIVA</h2>
          <p className="section-subtitle mt-3 max-w-3xl mx-auto">
            Spălătorie de covoare în Brașov, cu ridicare de la adresă și aducere înapoi. Prețul pe metru pătrat este același în tot orașul.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
            >
              <h3 className="font-extrabold text-text text-lg">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZonesServed() {
  const links = [
    { href: "/zone-deservite", label: "Toate zonele deservite" },
    { href: "/spalatorie-covoare-bartolomeu", label: "Bartolomeu" },
    { href: "/spalatorie-covoare-astra", label: "Astra" },
    { href: "/spalatorie-covoare-10-lei-mp-brasov", label: "Preț accesibil, 13 lei/mp" },
    { href: "/tarife", label: "Listă de tarife" },
    { href: "/curatare-canapele-brasov", label: "Curățare canapele" },
    { href: "/curatare-saltele-brasov", label: "Curățare saltele" },
    { href: "/curatare-mocheta-brasov", label: "Curățare mochetă" },
  ];

  return (
    <section className="mt-10 md:mt-16">
      <div className="container-app">
        <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
          <h2 className="section-title text-2xl md:text-3xl">Unde ridicăm covoarele</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm md:text-base text-muted leading-relaxed">
            <p>
              Ridicăm din Brașov și din localitățile din jur. În oraș, inclusiv în Bartolomeu, Astra, Tractorul, Schei, Noua, Centru și celelalte cartiere, comanda minimă este 6 mp. Același minim de 6 mp este valabil în Săcele, Codlea, Ghimbav, Hărman, Cristian, Stupini și Sânpetru.
            </p>
            <p>
              Pentru Prejmer, Poiana Brașov, Bran, Sinaia, Bușteni și Predeal, minimul este 25 mp, pentru că drumul este mai lung. Prețul pe metru pătrat rămâne 13 lei. Râșnov este în aria de ridicare; minimul pentru Râșnov se confirmă la comandă, pentru că nu este publicat separat în grila de tarife.
            </p>
            <p>
              Două cartiere au pagină proprie, pentru că de acolo avem cereri în mod constant:{" "}
              <Link href="/spalatorie-covoare-bartolomeu" className="underline underline-offset-4 text-text font-semibold">
                Bartolomeu
              </Link>
              , în nord-vest, spre Ghimbav, și{" "}
              <Link href="/spalatorie-covoare-astra" className="underline underline-offset-4 text-text font-semibold">
                Astra
              </Link>
              , în sud, spre Săcele. Restul zonelor sunt adunate pe pagina{" "}
              <Link href="/zone-deservite" className="underline underline-offset-4 text-text font-semibold">
                Zone deservite
              </Link>
              .
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/55 border border-white/65 text-sm font-semibold text-text hover:bg-white/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
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
              <h2 className="section-title text-3xl md:text-4xl text-left">Tarife, pe scurt</h2>
              <p className="section-subtitle mt-3 text-left">
                Spălarea este la metru pătrat. Festonatul este la metru liniar. Sunt unități diferite.
              </p>

              <div className="mt-6 space-y-4">
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Spălare covoare</div>
                    <div className="text-sm text-muted">Metru pătrat (mp)</div>
                  </div>
                  <div className="text-right">
                    <div className="price-pill">
                      <span className="font-bold text-brand">13 lei/mp</span>
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      redus de la <del>15 lei/mp</del>
                    </div>
                  </div>
                </div>

                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Festonat covoare</div>
                    <div className="text-sm text-muted">Metru liniar (ml), conturul</div>
                  </div>
                  <div className="text-right">
                    <div className="price-pill">
                      <span className="font-bold text-brand">13 lei/ml</span>
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      redus de la <del>15 lei/ml</del>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted leading-relaxed">
                Un covor de 2×3 m are 6 mp de spălat, deci 78 lei. Dacă se festonează tot conturul, același covor are 10 ml (2+3+2+3), adică 130 lei pentru festonat, separat de spălare. Sub 1 mp, spălarea se tarifează ca 1 mp.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link href="/tarife" className="text-sm font-semibold text-text underline underline-offset-4">
                  Vezi toate tarifele
                </Link>
                <Button variant="ghost" href="/comanda-online">
                  Comandă online
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/40 shadow-xl">
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent z-10" />
              <Image
                src="/images/extra-ambient.jpg.png"
                alt="Covoare rulate în atelierul ANIVA"
                width={1200}
                height={900}
                className="h-[320px] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <div className="text-lg font-extrabold">Din atelierul nostru</div>
                <div className="text-sm opacity-90">Fiecare covor este tratat cu atenție</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  return <FAQSection faqs={homeFaqs} title="Întrebări frecvente" />;
}

function CTA() {
  return (
    <section className="mt-10 md:mt-16 mb-14">
      <div className="container-app">
        <div className="card rounded-[32px] p-6 md:p-10 border border-white/40 bg-white/35 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="text-center lg:text-left">
              <h2 className="section-title text-3xl md:text-4xl">Vrei o programare rapidă?</h2>
              <p className="section-subtitle mt-3">
                Comandă online sau sună la 0759 158 914. Ridicăm covorul și îl aducem înapoi.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button variant="primary" href="/comanda-online" className="btn-cta">
                  Comandă online
                </Button>
                <Button variant="ghost" href="tel:0759158914">
                  Sună acum
                </Button>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/60 border border-white/60 px-3 py-2 text-xs md:text-sm text-text shadow-sm">
                <Clock className="h-4 w-4" />
                <span>Luni–vineri 08:00–18:00, sâmbătă 09:00–13:00</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/40 shadow-xl">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/ridicare.png"
                  alt="Ridicare și livrare ANIVA"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <div className="text-lg font-extrabold">Ridicare și livrare gratuită</div>
                <div className="text-sm opacity-90">În Brașov și în localitățile din jur</div>
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

      <section className="hero">
        <div className="container-app hero-content">
          <div className="max-w-[640px] text-left">
            <h1 className="section-title hero-title">
              Spălătorie covoare Brașov – spălare profesională cu ridicare și livrare gratuită
            </h1>

            <p className="section-subtitle hero-subtitle">
              Spălăm covoare în Brașov la 13 lei/mp, redus de la 15 lei/mp. Ridicarea și livrarea sunt gratuite, iar covorul este gata în 3 zile lucrătoare.
            </p>

            <p className="mt-4 text-sm md:text-base text-muted leading-relaxed max-w-xl">
              Atelierul este pe Șos. Cristianului nr. 11. Comanzi online sau suni la 0759 158 914. Igienizarea și uscarea sunt incluse în prețul pe metru pătrat.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-start gap-4">
              <Button variant="primary" href="/comanda-online" className="btn-cta">
                Comandă online
              </Button>

              <div className="flex flex-col gap-1">
                <Button variant="ghost" href="tel:0759158914">
                  Sună acum
                </Button>
                <p className="text-xs text-muted">Spălătorie covoare Brașov</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 mt-6 md:mt-10 lg:-mt-20">
        <ProcessWithImages />
      </div>

      <ProcessExplained />
      <ServicesGrid />
      <WhyAniva />
      <ZonesServed />
      <QuickPricing />
      <HomeFaq />
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
                  Spălătorie de covoare în Brașov. Ridicare și livrare gratuită, 13 lei/mp.
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
                    <span>Șos. Cristianului nr. 11, Brașov</span>
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
                  <Link className="footer-link" href="/zone-deservite">
                    Zone deservite
                  </Link>
                  <Link className="footer-link" href="/spalatorie-covoare-bartolomeu">
                    Bartolomeu
                  </Link>
                  <Link className="footer-link" href="/spalatorie-covoare-astra">
                    Astra
                  </Link>
                  <Link className="footer-link" href="/comanda-online">
                    Comandă online
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
                title="ANPC - Autoritatea Națională pentru Protecția Consumatorilor"
              >
                ANPC
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 whitespace-nowrap"
                title="Platforma europeană pentru soluționarea online a litigiilor"
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
