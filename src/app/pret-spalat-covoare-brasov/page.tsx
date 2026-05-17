import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Pret Spalat Covoare Brasov – 13 Lei/mp | Tarife Transparente ANIVA',
  description:
    'Afla pretul exact pentru spalatul covoarelor in Brasov. Tarif standard 13 lei/mp, minimum 6 mp. Ridicare si livrare gratuite incluse. Fara costuri ascunse.',
  path: '/pret-spalat-covoare-brasov',
});

const faqs = [
  {
    question: 'Care este pretul pentru spalat un covor in Brasov?',
    answer:
      'Pretul standard la ANIVA este de 13 lei/mp (redus de la 15 lei/mp). Acest pret include intregul proces: inspectie, desprafuire, aspirare, spalare, stoarcere, uscare controlata, plus ridicarea si livrarea gratuita in Brasov.',
  },
  {
    question: 'Exista o comanda minima?',
    answer:
      'Da. Comanda minima este de 6 mp pentru Brasov, Stupini si Sanpetru (echivalentul a minim 78 lei). Pentru localitati mai indepartate (Codlea, Sacele, Harman, Ghimbav, Cristian), comanda minima este tot 6 mp. Pentru zone distante (Prejmer, Poiana Brasov, Bran, Sinaia, Busteni, Predeal), comanda minima este de 25 mp.',
  },
  {
    question: 'Ridicarea si livrarea sunt incluse in pret?',
    answer:
      'Da, complet gratuit. Nu exista niciun cost suplimentar pentru ridicare sau livrare in Brasov si localitatile apropiate. Pretul pe care il calculezi este pretul final.',
  },
  {
    question: 'Cum calculez pretul exact pentru covorul meu?',
    answer:
      'Masori lungimea si latimea covorului in metri si inmultesti cele doua dimensiuni pentru a obtine suprafata in mp. Inmultesti cu 13 lei si ai pretul total. Exemplu: covor de 2m x 3m = 6 mp x 13 lei = 78 lei total.',
  },
  {
    question: 'Pretul difera in functie de gradul de murdarie?',
    answer:
      'Pretul de baza ramane 13 lei/mp indiferent de gradul de murdarie. Daca covorul necesita pre-tratamente speciale pentru pete dificile (ulei, cerneala, vopsea, mucegai), te informam in prealabil si discutam costurile suplimentare, daca este cazul.',
  },
  {
    question: 'Oferiti reduceri pentru comenzi mai mari?',
    answer:
      'In anumite perioade avem promotii sau oferte speciale pentru comenzi mari. Te incurajam sa ne suni sau sa verifici site-ul pentru ofertele curente. Oricum, pretul de 13 lei/mp (fata de 15 lei/mp cat era anterior) reprezinta deja o reducere aplicata tuturor comenzilor.',
  },
  {
    question: 'Cat costa festonatul sau reparatiile de margini?',
    answer:
      'Serviciul de festonat (protectia si repararea marginilor covorului) costa 13 lei/ml. Daca covorul tau are marginile desfacute sau deteriorate, poti adauga acest serviciu la comanda de spalare.',
  },
];

export default function PretSpalatCovoreBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Pret Spalat Covoare Brasov – 13 Lei/mp, Tarife Clare si Fara Surprize"
          subtitle="La ANIVA nu ai surprize neplacute la final. Pretul este simplu: 13 lei per metru patrat, ridicare si livrare incluse gratuit. Calculeaza pretul pentru covorul tau in cateva secunde."
          badge="13 lei/mp · Fara costuri ascunse"
        />

        {/* Pricing detail section */}
        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Unul dintre cele mai frecvente motive de ingrijorare atunci cand alegi o
                  spalatorie de covoare este pretul final. Multi clienti ne contacteaza dupa ce au
                  primit facturi surprinzatoare la alte servicii – cu taxe de transport, taxe de
                  urgenta sau suprataxe pentru anumite materiale. La{' '}
                  <strong className="text-text">ANIVA</strong>, abordam transparenta total diferit.
                </p>
                <p>
                  Avem un singur pret standard: <strong className="text-text">13 lei/mp</strong>,
                  valabil pentru orice tip de covor si orice nivel de murdarie. In acest pret
                  sunt incluse toate etapele procesului de curatare (inspectie, desprafuire,
                  aspirare, spalare, stoarcere, uscare) plus ridicarea si livrarea gratuita in
                  Brasov si localitatile apropiate. Niciun cost ascuns.
                </p>
              </div>

              {/* Price table */}
              <div className="mt-8 max-w-2xl mx-auto space-y-4">
                <h2 className="section-title text-xl md:text-2xl mb-4">Tabel tarife complete</h2>
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Spalare covoare – standard</div>
                    <div className="text-sm text-muted">Per mp, orice tip de material</div>
                  </div>
                  <div className="price-pill">
                    <span className="line-through text-muted mr-2 text-xs">15 lei/mp</span>
                    <span className="font-bold">13 lei/mp</span>
                  </div>
                </div>
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Festonat / reparatii margini</div>
                    <div className="text-sm text-muted">Per metru liniar</div>
                  </div>
                  <div className="price-pill">
                    <span className="font-bold">13 lei/ml</span>
                  </div>
                </div>
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Ridicare si livrare – Brasov, Stupini, Sanpetru</div>
                    <div className="text-sm text-muted">Comanda minima: 6 mp (78 lei)</div>
                  </div>
                  <div className="price-pill">
                    <span className="font-bold text-green-700">Gratuit</span>
                  </div>
                </div>
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Ridicare si livrare – Codlea, Sacele, Harman, Ghimbav, Cristian</div>
                    <div className="text-sm text-muted">Comanda minima: 6 mp</div>
                  </div>
                  <div className="price-pill">
                    <span className="font-bold text-green-700">Gratuit</span>
                  </div>
                </div>
                <div className="price-row">
                  <div>
                    <div className="font-bold text-text">Ridicare si livrare – Prejmer, Poiana, Bran, Sinaia, Busteni, Predeal</div>
                    <div className="text-sm text-muted">Comanda minima: 25 mp</div>
                  </div>
                  <div className="price-pill">
                    <span className="font-bold text-green-700">Gratuit</span>
                  </div>
                </div>
              </div>

              {/* Calculation examples */}
              <div className="mt-10">
                <h2 className="section-title text-xl md:text-2xl mb-6">Exemple de calcul</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { dim: '2 × 3 m', mp: '6 mp', price: '78 lei', note: 'Comanda minima Brasov' },
                    { dim: '3 × 4 m', mp: '12 mp', price: '156 lei', note: 'Covor living mediu' },
                    { dim: '4 × 5 m', mp: '20 mp', price: '260 lei', note: 'Covor living mare' },
                  ].map((ex) => (
                    <div key={ex.dim} className="border border-white/50 bg-white/50 rounded-2xl p-5 text-center">
                      <div className="text-xl font-extrabold text-text mb-1">{ex.dim}</div>
                      <div className="text-sm text-muted mb-3">{ex.mp} × 13 lei/mp</div>
                      <div className="text-2xl font-black text-text">{ex.price}</div>
                      <div className="text-xs text-muted mt-1">{ex.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted mb-4">
                  Vrei sa calculezi pretul exact pentru covorul tau?
                </p>
                <Link href="/preturi" className="btn-ghost btn-cta">
                  Deschide calculatorul de pret →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="mt-10 md:mt-14">
          <div className="container-app">
            <h2 className="section-title text-2xl md:text-3xl text-center mb-8">
              Ce este inclus in pretul de 13 lei/mp?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Inspectie initiala', sublabel: 'Evaluare material si pete' },
                { label: 'Desprafuire si aspirare', sublabel: 'Pe ambele fete' },
                { label: 'Spalare si stoarcere', sublabel: 'Detergenti specializati' },
                { label: 'Uscare controlata', sublabel: 'Spatiu dedicat' },
                { label: 'Igienizare', sublabel: 'Anti-acar si anti-bacteriana' },
                { label: 'Ridicare gratuita', sublabel: 'De la adresa ta' },
                { label: 'Livrare gratuita', sublabel: 'La adresa ta' },
                { label: 'Fara costuri ascunse', sublabel: 'Pret final garantat' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-2xl p-4 text-center"
                >
                  <div className="text-xl mb-1">✓</div>
                  <div className="font-bold text-text text-sm">{item.label}</div>
                  <div className="text-xs text-muted mt-1">{item.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title="Intrebari despre pret si tarife" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
