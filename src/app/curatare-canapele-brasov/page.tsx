import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Curatare Canapele Brasov – Tapiterie Profesionala la Tine Acasa | ANIVA',
  description:
    'Curatare profesionala canapele, fotolii si tapiterie in Brasov. Tratamente specializate pentru stofa, piele si microfibra. La cerere – contacteaza-ne pentru oferta.',
  path: '/curatare-canapele-brasov',
});

const benefits = [
  {
    icon: '🛋️',
    title: 'Orice tip de tapiterie',
    desc: 'Tratam canapele din stofa, microfibra, piele naturala si piele ecologica. Selectam produsele in functie de material.',
  },
  {
    icon: '🌿',
    title: 'Produse sigure pentru familie',
    desc: 'Folosim detergenti biodegradabili, fara clor si fara substante agresive. Siguri pentru copii si animale de companie.',
  },
  {
    icon: '🔍',
    title: 'Inspectie prealabila',
    desc: 'Evaluam starea tapiteriei, tipul de material si petele existente inainte de a stabili tratamentul potrivit.',
  },
  {
    icon: '💧',
    title: 'Curatare umeda sau uscata',
    desc: 'In functie de materialul si starea tapiteriei, alegem metoda optima: curatare umeda, injectie-extractie sau curatare uscata.',
  },
  {
    icon: '✅',
    title: 'Rezultate vizibile',
    desc: 'Petele de cafea, mancare, murdaria acumulata si mirosurile sunt eliminate sau reduse semnificativ dupa curatare.',
  },
  {
    icon: '📞',
    title: 'Oferta personalizata',
    desc: 'Pretul depinde de dimensiunea, numarul de piese si starea tapiteriei. Contacteaza-ne pentru o oferta adaptata situatiei tale.',
  },
];

const faqs = [
  {
    question: 'Curatati canapele la domiciliu sau trebuie sa le aduc la atelier?',
    answer:
      'Curatarea canapelelor se face in general la domiciliul clientului, deoarece transportul mobilierului este dificil. Contacteaza-ne pentru a discuta detaliile si a stabili o programare.',
  },
  {
    question: 'Cat costa curatarea unei canapele in Brasov?',
    answer:
      'Pretul pentru curatarea tapiteriei este la cerere si depinde de dimensiunea canapeei, numarul de locuri, tipul de material si gradul de murdarie. Contacteaza-ne la 0759 158 914 sau pe WhatsApp pentru o oferta personalizata.',
  },
  {
    question: 'Curatati si canapele din piele?',
    answer:
      'Da, curatam tapiterie din piele naturala si piele ecologica, folosind produse speciale care nu deterioreaza sau decoloreaza materialul. Pielea necesita un tratament diferit fata de stofa sau microfibra.',
  },
  {
    question: 'Puteti indeparta petele vechi de pe canapea?',
    answer:
      'In functie de tipul petei si de cat timp s-a fixat, da. Petele proaspete sunt mult mai usor de tratat. Petele vechi pot necesita tratamente mai intensive, dar in mare parte obtinem rezultate vizibil mai bune.',
  },
  {
    question: 'Cat dureaza curatarea si in cat timp pot folosi canapea dupa?',
    answer:
      'Curatarea propriu-zisa dureaza 1-3 ore in functie de dimensiune. Uscarea dupa curatarea umeda poate dura 4-8 ore. Recomandam sa nu folositi canapea pana nu s-a uscat complet.',
  },
];

export default function CuratareCanapeleBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Curatare Canapele Brasov – Tapiterie si Mobilier Tratat Profesional"
          subtitle="Canapeau ta merita o curatare profunda. La ANIVA, tratam tapiteria cu produse specializate si metode adaptate fiecarui tip de material – stofa, microfibra, piele naturala sau eco."
          badge="Serviciu la cerere · Oferta personalizata"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Canapelele si fotoliile acumuleaza in timp o cantitate impresionanta de murdarie
                  invizibila: praf, acari, bacterii, celule moarte ale pielii, firele de par ale
                  animalelor de companie si petele de mancare sau bautura. O aspirare obisnuita
                  curata suprafata, dar nu atinge in profunzime fibra sau spuma din interior.
                </p>
                <p>
                  La <strong className="text-text">ANIVA</strong>, curatam tapiteria canapelelor
                  din Brasov cu echipamente profesionale si produse selectate special pentru
                  fiecare tip de material. Stofa, microfibra, piele naturala, piele ecologica –
                  fiecare necesita un tratament diferit pe care il cunoastem si il aplicam corect.
                </p>
                <p>
                  Curatarea canapelelor este disponibila{' '}
                  <strong className="text-text">la cerere</strong>. Pretul se stabileste dupa
                  evaluarea dimensiunilor, materialului si starii initiale a tapiteriei.
                  Contacteaza-ne pentru o oferta personalizata – fara obligatii.
                </p>

                {/* Process for upholstery */}
                <div className="mt-6 border border-white/50 bg-white/50 rounded-2xl p-6">
                  <h2 className="font-extrabold text-text text-lg mb-4">Cum curatam o canapea?</h2>
                  <div className="space-y-3">
                    {[
                      { n: '1', step: 'Inspectie', desc: 'Evaluam tipul de material, petele existente si selectam produsele potrivite.' },
                      { n: '2', step: 'Pre-tratament', desc: 'Aplicam produse specifice pentru pete si zone cu murdarie intensă.' },
                      { n: '3', step: 'Curatare', desc: 'Curatam tapiteria cu echipamente de injectie-extractie sau curatare uscata.' },
                      { n: '4', step: 'Finisare', desc: 'Lasam tapiteria sa se usuce si verificam rezultatul final impreuna cu tine.' },
                    ].map((item) => (
                      <div key={item.n} className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-white/70 border border-white/70 flex items-center justify-center font-bold text-text text-sm flex-shrink-0">
                          {item.n}
                        </div>
                        <div>
                          <span className="font-bold text-text">{item.step}: </span>
                          <span className="text-sm">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BenefitsSection benefits={benefits} title="De ce sa alegi ANIVA pentru tapiterie?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
