// Pagina de ridicare Rasnov. Functii: SpalatorieRasnov.
// Rasnov este in aria de ridicare. Minimul nu este publicat separat: se confirma la comanda.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spălătorie covoare Râșnov | 13 lei/mp | ANIVA',
  description:
    'Ridicare covoare din Râșnov, la 13 lei/mp. Minimul nu este publicat separat: îl confirmăm la comandă, înainte să pornim. Nu este tariful din Bran.',
  path: '/spalatorie-covoare-rasnov',
});

const faqs = [
  {
    question: 'Care este comanda minimă în Râșnov?',
    answer:
      'Râșnov este în aria de ridicare, dar minimul nu este scris separat pe pagina de tarife. Îl confirmăm la telefon sau în comandă, înainte de ridicare. Nu publicăm aici o cifră pe care grila nu o are.',
  },
  {
    question: 'Râșnov este la fel ca Bran sau Predeal?',
    answer:
      'Nu. Bran, Predeal, Poiana Brașov, Sinaia, Bușteni și Prejmer au minim publicat de 25 mp (325 lei). Râșnov nu este în acea listă. Este pe drumul spre Bran, dar tariful de drum nu se copiază automat. Prețul pe metru pătrat rămâne 13 lei.',
  },
  {
    question: 'Cât costă spălarea, dacă minimul se confirmă separat?',
    answer:
      'Spălarea este 13 lei/mp peste tot. Un covor de 3×4 m are 12 mp × 13 lei = 156 lei, dacă suprafața este peste minimul confirmat pentru adresă. Sub minim se taxează minimul pe care ți l-am spus înainte să plecăm, nu o sumă ghicită.',
  },
  {
    question: 'Trebuie să cobor cu covorul în Brașov?',
    answer:
      'Nu. Nu primim covoare la sediu. Ridicăm din Râșnov și îl aducem înapoi. Atelierul este pe Șos. Cristianului nr. 11, în Brașov. Termenul obișnuit este de 3 zile lucrătoare.',
  },
];

export default function SpalatorieRasnov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spălătorie covoare Râșnov – ridicare de acasă, 13 lei/mp"
          subtitle="Ridicăm din Râșnov și spălăm în atelierul din Brașov. Prețul pe metru pătrat este 13 lei. Minimul pentru Râșnov se confirmă la comandă."
          badge="Râșnov · 13 lei/mp · minim confirmat la comandă"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Râșnov este pe șoseaua dinspre Brașov spre Bran, la sud-vest, nu în oraș și nu în
                  stațiune. Îl deservim. Ce nu facem pe această pagină este să inventăm o comandă
                  minimă. Pe{' '}
                  <Link href="/tarife" className="underline underline-offset-4 text-text">
                    pagina de tarife
                  </Link>{' '}
                  Râșnov nu apare nici la grupa de 6 mp, nici la grupa de 25 mp. De aceea minimul
                  se confirmă când lași comanda, înainte să pornim.
                </p>
                <p>
                  Prețul de spălare nu depinde de această confirmare:{' '}
                  <strong className="text-text">13 lei/mp</strong>. Un covor de 2×4 m are 8 mp ×
                  13 lei = <strong className="text-text">104 lei</strong>, dacă cei 8 mp sunt peste
                  minimul stabilit pentru adresa ta. Dacă sunt sub minim, plătești minimul pe care
                  ți l-am spus, nu 104 lei și nu o cifră copiată din Bran.
                </p>
                <p>
                  Bran, mai departe pe aceeași vale, are minim publicat:{' '}
                  <strong className="text-text">25 mp, adică 325 lei</strong>. La fel Poiana
                  Brașov, Predeal, Sinaia și Bușteni. Dacă adresa este în Bran, nu în Râșnov, se
                  aplică acea grilă, nu cea discutată pentru orașul Râșnov. Cetatea și străzile din
                  Râșnov țin de Râșnov. Nu le amestecăm cu Bran ca să iasă un drum mai scump sau
                  mai ieftin decât este.
                </p>
                <p>
                  Ridicarea se face de la domiciliu. Nu există un punct în care să lași covorul și
                  nu primim covoare la atelierul de pe Șos. Cristianului nr. 11. Scrii strada și
                  numărul; dacă ești pe o uliță îngustă spre cetate, un reper în observații scutește
                  o tură în plus. La bloc, scară și apartament. Telefonul trebuie să răspundă în
                  ziua ridicării.
                </p>
                <p>
                  Spălarea este în atelier: inspecție, desprăfuire, aspirare, spălare controlată,
                  stoarcere, uscare. Lâna și sinteticele nu se tratează la fel, dar lei/mp este
                  același. Festonarea marginii, dacă este nevoie, este{' '}
                  <Link href="/festonare-covoare" className="underline underline-offset-4 text-text">
                    13 lei/ml
                  </Link>{' '}
                  și se confirmă separat. Termenul obișnuit este de 3 zile lucrătoare.
                </p>
                <p>
                  Săcele, Codlea și Ghimbav au minimul de 6 mp scris în grilă și pagini proprii,
                  pentru că acolo cifra este publicată. Râșnov rămâne cu confirmare la comandă.
                  Toate zonele sunt adunate pe{' '}
                  <Link href="/zone-deservite" className="underline underline-offset-4 text-text">
                    Zone deservite
                  </Link>
                  . Ca să afli minimul pentru adresa ta, sună la 0759 158 914 sau lasă datele în{' '}
                  <Link href="/comanda-online" className="underline underline-offset-4 text-text">
                    comanda online
                  </Link>
                  . Descrierea serviciului este pe{' '}
                  <Link href="/" className="underline underline-offset-4 text-text">pagina principală</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title="Întrebări despre ridicarea din Râșnov" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
