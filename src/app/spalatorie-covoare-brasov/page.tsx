import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Brasov – Ridicare si Livrare Gratuita | ANIVA',
  description:
    'Spalatorie profesionala de covoare in Brasov. Ridicare si livrare gratuita, 13 lei/mp, proces in 6 pasi. Curatam orice tip de covor. Suna sau comanda online.',
  path: '/spalatorie-covoare-brasov',
});

const benefits = [
  {
    icon: '🚚',
    title: 'Ridicare si livrare gratuita',
    desc: 'Venim la adresa ta din Brasov, ridicam covorul si il aducem inapoi curat si uscat. Nu trebuie sa te deplasezi nicaieri.',
  },
  {
    icon: '🌬️',
    title: 'Uscare controlata',
    desc: 'Uscam covoarele in spatiu dedicat cu dezumidificatoare si ventilatoare industriale, prevenind mirosurile neplacute si mucegaiul.',
  },
  {
    icon: '🧴',
    title: 'Detergenti testati si siguri',
    desc: 'Folosim exclusiv detergenti specializati, testati si siguri pentru copii, animale de companie si persoane alergice.',
  },
  {
    icon: '✅',
    title: 'Rezultate garantate',
    desc: 'Tratam petele si murdaria in profunzime. Daca nu esti multumit, discutam si gasim impreuna cea mai buna solutie.',
  },
  {
    icon: '⏱️',
    title: 'Termen de 3 zile lucratoare',
    desc: 'In general, covorul este gata in 3 zile lucratoare de la ridicare. Timp rapid fara sa compromitem calitatea curatarii.',
  },
  {
    icon: '🏆',
    title: 'Peste 4 ani de experienta',
    desc: 'Am curatat sute de covoare din Brasov si zona. Stim sa tratam orice tip de material, de la covoare persane la sintetice.',
  },
];

const faqs = [
  {
    question: 'Cat costa spalarea unui covor la ANIVA Brasov?',
    answer:
      'Pretul standard este de 13 lei/mp (redus de la 15 lei/mp). Comanda minima este de 6 mp pentru Brasov si localitati apropiate (Stupini, Sanpetru). Ridicarea si livrarea sunt incluse gratuit in pret.',
  },
  {
    question: 'Cum functioneaza serviciul de ridicare si livrare?',
    answer:
      'Dupa ce plasezi comanda online sau suni, stabilim impreuna o zi si un interval orar convenabil. Veniti la adresa ta, ridicam covorul, il curatam in atelier si il aducem inapoi la aceeasi adresa – fara costuri suplimentare.',
  },
  {
    question: 'In cat timp imi primesc covorul inapoi?',
    answer:
      'Termenul standard de finalizare este de 3 zile lucratoare de la data ridicarii. In functie de incarcarea atelierului, uneori putem finaliza mai repede. Te anuntam inainte de livrare.',
  },
  {
    question: 'Ce tipuri de covoare curatati?',
    answer:
      'Curatam covoare din toate tipurile de material: lana, matase, bumbac, sintetice (polipropilena, poliester, viscoza), covoare persane si orientale, covoare shaggy, covoare de exterior si covorase de baie.',
  },
  {
    question: 'Detergentii folositi sunt siguri pentru copii si animale?',
    answer:
      'Da, folosim exclusiv detergenti biodegradabili, testati dermatologic si certificati pentru medii cu copii si animale de companie. Nu lasam reziduuri chimice in fibra covorului.',
  },
  {
    question: 'Ce zone din Brasov acoperiti cu serviciul de ridicare?',
    answer:
      'Acoperim tot orasul Brasov: centru, Tractorul, Bartolomeu, Racadau, Avantgarden, Schei, Astra, Noua, Grivitei, Stupini si alte cartiere. Acoperim si localitati din jur: Sanpetru, Codlea, Sacele, Ghimbav, Cristian, Harman.',
  },
  {
    question: 'Pot comanda online sau trebuie sa sun?',
    answer:
      'Poti plasa comanda direct pe site prin formularul de comanda online – dureaza 2 minute. Alternativ, poti suna la 0759 158 914 sau ne poti scrie pe WhatsApp. Alegem impreuna data convenabila pentru ridicare.',
  },
];

export default function SpelatorieCovoarBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Brasov – Curatare Profesionala la Domiciliul Tau"
          subtitle="Curatam covoarele tale profesional in atelierul ANIVA si le aducem inapoi proaspete, igienizate si perfect uscate. Ridicare si livrare gratuita in tot Brasovul."
          badge="13 lei/mp · Ridicare si livrare gratuita"
        />

        {/* Intro content */}
        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Un covor curat nu inseamna doar un interior mai placut – inseamna un mediu mai
                  sanatos pentru intreaga familie. Covoarele aduna zilnic praf, acari, bacterii si
                  alergeni care nu pot fi indepartati prin aspirare obisnuita. La{' '}
                  <strong className="text-text">ANIVA</strong>, spalatoria de covoare din Brasov,
                  folosim un proces profesional in 6 pasi care elimina murdaria din profunzimea
                  fibrelor, nu doar de la suprafata.
                </p>
                <p>
                  Stim cat de greu este sa transporti un covor mare la o spalatorie. De aceea, am
                  eliminat aceasta problema complet: venim noi la tine, ridicam covorul direct din
                  apartament sau casa si il aducem inapoi dupa curatare – gratuit, indiferent de
                  zona din Brasov.
                </p>
                <p>
                  De la covoare persane si de lana, la covoare sintetice si shaggy moderne,
                  tratam fiecare covor in functie de materialul sau specific. Echipa ANIVA are
                  peste 4 ani de experienta in curatarea covoarelor din Brasov si stie sa identifice
                  cel mai potrivit tratament pentru fiecare tip de fibra si nivel de murdarie.
                </p>

                {/* Services mini-overview */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-white/50 bg-white/50 rounded-2xl p-5">
                    <div className="font-extrabold text-text mb-1">Spalare covoare</div>
                    <div className="text-sm text-muted mb-2">Proces complet in 6 pasi</div>
                    <div className="font-bold text-text">13 lei/mp</div>
                    <div className="text-xs text-muted line-through">15 lei/mp</div>
                  </div>
                  <div className="border border-white/50 bg-white/50 rounded-2xl p-5">
                    <div className="font-extrabold text-text mb-1">Igienizare inclusa</div>
                    <div className="text-sm text-muted mb-2">Eliminare acari si alergeni</div>
                    <div className="font-bold text-text">Inclus</div>
                  </div>
                  <div className="border border-white/50 bg-white/50 rounded-2xl p-5">
                    <div className="font-extrabold text-text mb-1">Ridicare si livrare</div>
                    <div className="text-sm text-muted mb-2">In tot Brasovul</div>
                    <div className="font-bold text-text">Gratuit</div>
                  </div>
                </div>

                <p className="mt-4">
                  In plus fata de spalarea standard, includem in orice comanda o igienizare
                  completa cu produse anti-acar si anti-bacteriene, fara costuri suplimentare.
                  Covorul tau va fi nu doar curat vizual, ci si igienizat in profunzime – ideal
                  pentru familiile cu copii mici sau animale de companie.
                </p>
                <p>
                  Zona noastra de deservire acopera tot Brasovul – cartierele Tractorul,
                  Bartolomeu, Racadau, Avantgarden, Schei, Astra, Noua, Grivitei, centrul
                  vechi – plus localitatile din jur: Stupini, Sanpetru, Codlea, Sacele, Ghimbav,
                  Cristian si Harman. Pentru localitati mai indepartate (Prejmer, Poiana Brasov,
                  Bran, Sinaia, Busteni, Predeal), comanda minima este de 25 mp.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />

        <BenefitsSection benefits={benefits} />

        {/* Pricing section */}
        <section className="mt-10 md:mt-14">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <h2 className="section-title text-2xl md:text-3xl mb-6">Tarife spalatorie covoare Brasov</h2>
              <div className="space-y-4 max-w-2xl">
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Spalare covoare – pret standard</div>
                    <div className="text-sm text-muted">Per metru patrat, minimum 6 mp in Brasov</div>
                  </div>
                  <div className="price-pill">
                    <span className="line-through text-muted mr-2 text-xs">15 lei/mp</span>
                    <span className="font-bold">13 lei/mp</span>
                  </div>
                </div>
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Festonat / reparatii marginale</div>
                    <div className="text-sm text-muted">Per metru liniar</div>
                  </div>
                  <div className="price-pill">
                    <span className="font-bold">13 lei/ml</span>
                  </div>
                </div>
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Ridicare si livrare Brasov</div>
                    <div className="text-sm text-muted">Inclus in orice comanda</div>
                  </div>
                  <div className="price-pill">
                    <span className="font-bold">Gratuit</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/tarife" className="text-sm font-semibold text-text underline underline-offset-4">
                  Vezi toate tarifele si calculatorul de pret →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
