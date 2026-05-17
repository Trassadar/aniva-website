import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalat Covoare Brasov – Proces Profesional in 6 Pasi | ANIVA 13 Lei/mp',
  description:
    'Serviciu complet de spalat covoare in Brasov. Inspectie, desprafuire, aspirare, spalare, stoarcere si uscare controlata. 13 lei/mp, 3 zile lucratoare, ridicare gratuita.',
  path: '/spalat-covoare-brasov',
});

const benefits = [
  {
    icon: '🔍',
    title: 'Inspectie personalizata',
    desc: 'Fiecare covor este evaluat individual. Identificam tipul de material, petele existente si cel mai potrivit tratament.',
  },
  {
    icon: '💧',
    title: 'Spalare cu presiune controlata',
    desc: 'Folosim echipamente cu presiune ajustabila pentru a curata fibra in profunzime fara a o deteriora.',
  },
  {
    icon: '🌿',
    title: 'Detergenti biodegradabili',
    desc: 'Produsele noastre sunt biodegradabile si nu lasa reziduuri chimice. Sigure pentru copii, animale si persoane cu alergii.',
  },
  {
    icon: '⚡',
    title: 'Stoarcere centrifuga',
    desc: 'Eliminam apa in exces cu o centrifuga profesionala – covorul iese aproape uscat, gata pentru faza de uscare finala.',
  },
  {
    icon: '🏠',
    title: 'Uscare in spatiu controlat',
    desc: 'Spatiu de uscare dedicat cu temperatura si umiditate reglate – fara mirosuri, fara mucegai, fara deformare.',
  },
  {
    icon: '📦',
    title: 'Ambalare si livrare ingrijita',
    desc: 'Covorul este ambalat cu grija si livrat direct la usa ta, in aceeasi stare in care a plecat – dar curat.',
  },
];

const faqs = [
  {
    question: 'Spalatul covorului la ANIVA este diferit de curatarea la domiciliu?',
    answer:
      'Da, complet diferit. Spalatul profesional in atelier implica imersarea covorului in apa cu detergenti specializati, centrifugare si uscare controlata. Curatarea la domiciliu (cu aspiratorul sau cu produse spray) curata doar suprafata. In atelier, curatam fibra din radacina, eliminand murdaria, alergenii si bacteriile depuse in profunzime.',
  },
  {
    question: 'Cat dureaza procesul de spalare?',
    answer:
      'Procesul complet – de la ridicare la livrare – dureaza in medie 3 zile lucratoare. In acest timp, covorul trece prin toate cele 6 etape: inspectie, desprafuire, aspirare, spalare, stoarcere si uscare controlata.',
  },
  {
    question: 'Ce se intampla daca covorul meu are pete vechi sau inglobate?',
    answer:
      'Petele vechi necesita un pre-tratament cu produse specializate aplicat inainte de spalarea propriu-zisa. Nu garantam indepartarea 100% a tuturor petelor (mai ales daca au fost tratate anterior cu produse nepotrivite), dar in marea majoritate a cazurilor obtinem rezultate vizibil mai bune decat alte metode.',
  },
  {
    question: 'Pot spala covoare de orice dimensiune?',
    answer:
      'Da. Lucram cu covoare de orice dimensiune, de la covorase de baie si intrare pana la covoare mari de 20-30 mp. Comanda minima este de 6 mp in Brasov si localitati apropiate.',
  },
  {
    question: 'Spalati covoare persane sau cu fir lung (shaggy)?',
    answer:
      'Da, cu multa atentie. Covoarele persane si orientale sunt tratate cu detergenti speciali pentru lana naturala si pH neutru. Covoarele shaggy sunt tratate cu grija pentru a nu deteriora firul lung. In ambele cazuri, facem o inspectie prealabila pentru a stabili tratamentul corect.',
  },
  {
    question: 'Cum stiu ca covorul meu a fost spalat corect?',
    answer:
      'Vei observa imediat diferenta dupa livrare: culori mai vii, miros proaspat, fibra moale si fara particule de praf la atingere. Daca nu esti multumit de rezultat, ne anunti si gasim impreuna o solutie.',
  },
];

export default function SpalatCovoreBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalat Covoare Brasov – Proces Complet in 6 Pasi la 13 Lei/mp"
          subtitle="La ANIVA, spalatul unui covor nu inseamna doar a-l uda si a-l usca. Inseamna un proces complet, pas cu pas, care curata fibra din profunzime si reda covorul tau ca nou."
          badge="13 lei/mp · 3 zile lucratoare"
        />

        {/* Intro content */}
        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Multa lume crede ca un covor este curat daca arata bine la suprafata. In
                  realitate, in fibra unui covor se acumuleaza luni sau ani de praf fin, acari de
                  praf, bacterii, alergeni si resturi organice care nu pot fi eliminate decat printr-un
                  proces de spalare profesionala. Aspirarea regulata ajuta, dar nu rezolva
                  problema in profunzime.
                </p>
                <p>
                  La <strong className="text-text">ANIVA Brasov</strong>, fiecare covor primit
                  trece printr-un protocol strict de curatare in 6 etape, conceput pentru a asigura
                  rezultate optime fara a deteriora materialul. De la covoare persane delicate si
                  covoare de lana naturala, pana la modele sintetice moderne sau shaggy cu fir
                  lung, stim sa tratam fiecare tip de fibra in mod corespunzator.
                </p>
                <p>
                  Procesul include obligatoriu: inspectia vizuala, desprafuirea mecanica,
                  aspirarea profunda pe ambele fete, spalarea propriu-zisa cu detergenti
                  selectati in functie de material, stoarcerea centrifuga si uscarea controlata in
                  spatiu dedicat. Nicio etapa nu este sarita, indiferent de dimensiunea sau starea
                  initiala a covorului.
                </p>
                <p>
                  Pretul pentru spalatul unui covor in Brasov la ANIVA este de{' '}
                  <strong className="text-text">13 lei/mp</strong> (redus de la 15 lei/mp). In
                  pret includem ridicarea si livrarea gratuita, igienizarea completa si uscarea
                  controlata. Comanda minima este de 6 mp pentru Brasov si localitatile imediat
                  apropiate.
                </p>
                <p>
                  Un covor de 3×4 m (12 mp) este gata curatat pentru{' '}
                  <strong className="text-text">156 lei</strong> – ridicare, spalare, uscare si
                  livrare incluse. Fara costuri ascunse.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />

        {/* Types of rugs */}
        <section className="mt-10 md:mt-14">
          <div className="container-app">
            <h2 className="section-title text-2xl md:text-3xl text-center mb-8">
              Ce tipuri de covoare spalati?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { tip: 'Covoare de lana', detail: 'Tratament special cu pH neutru' },
                { tip: 'Covoare persane si orientale', detail: 'Spalare delicata, uscare lenta' },
                { tip: 'Covoare sintetice', detail: 'Polipropilena, poliester, viscoza' },
                { tip: 'Covoare shaggy', detail: 'Fir lung – ingrijire speciala' },
                { tip: 'Covoare de exterior', detail: 'Curatare profunda, rezistenta' },
                { tip: 'Covorase de baie si hol', detail: 'Minute de spalat, aspect nou' },
              ].map((item) => (
                <div
                  key={item.tip}
                  className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-2xl p-4"
                >
                  <div className="font-bold text-text text-sm mb-1">{item.tip}</div>
                  <div className="text-xs text-muted">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsSection benefits={benefits} title="Ce include spalatul la ANIVA?" />

        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
