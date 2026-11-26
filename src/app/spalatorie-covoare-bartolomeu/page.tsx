// Pagina pentru cartierul Bartolomeu. Continut propriu, nu sablonul de cartier.
// Contine: SpalatorieBartolomeu.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spălătorie covoare Bartolomeu, Brașov | 13 lei/mp | ANIVA',
  description:
    'Ridicare gratuită de covoare din Bartolomeu, nord-vestul Brașovului. 13 lei/mp, minim 6 mp (78 lei). Atelierul este pe Șos. Cristianului nr. 11.',
  path: '/spalatorie-covoare-bartolomeu',
});

const faqs = [
  {
    question: 'Ridicați din tot Bartolomeul?',
    answer:
      'Da. Bartolomeu este în Brașov, deci intră la comanda minimă de 6 mp (78 lei), cu ridicare și livrare gratuite. Acoperim blocurile și casele de pe Calea Făgărașului și din zona gării Bartolomeu.',
  },
  {
    question: 'Prețul este altul decât în restul Brașovului?',
    answer:
      'Nu. Spălarea covoarelor este 13 lei/mp, la fel ca în Centru sau în Astra. Un covor de 2×3 m dintr-un living de bloc costă 6 mp × 13 lei = 78 lei, exact minimul.',
  },
  {
    question: 'Unde este atelierul față de Bartolomeu?',
    answer:
      'Atelierul este pe Șos. Cristianului nr. 11, spre ieșirea către Cristian, în partea de sud-vest a orașului. Bartolomeu este în nord-vest, spre Ghimbav. Ridicarea traversează orașul și rămâne gratuită, pentru că adresa este în Brașov.',
  },
  {
    question: 'Ce scriu în comandă dacă stau la bloc?',
    answer:
      'Strada, numărul, blocul, scara și apartamentul. Etajul nu are câmp separat: îl pui la observații, împreună cu un telefon la care răspunzi. Covoarele din Bartolomeu sunt adesea din blocuri, iar adresa incompletă întârzie ridicarea.',
  },
  {
    question: 'Stau între Bartolomeu și Ghimbav. Se schimbă minimul?',
    answer:
      'Ghimbav are tot minim 6 mp (78 lei), la fel ca Bartolomeu. Dacă ești deja în Codlea, minimul rămâne 6 mp. Lista este pe pagina Zone deservite. Prețul pe metru pătrat nu se schimbă.',
  },
  {
    question: 'Prin ce diferă de ridicarea din Astra?',
    answer:
      'Astra este în sud, pe direcția Săcele, mai ales blocuri. Bartolomeu este pe axa de nord-vest, cu blocuri pe Calea Făgărașului și case spre margine. Drumul din atelier este altul. Tariful și minimul sunt aceleași, pentru că ambele cartiere sunt în Brașov.',
  },
];

export default function SpalatorieBartolomeu() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spălătorie covoare Bartolomeu, Brașov – ridicare gratuită din nord-vest"
          subtitle="Bartolomeu este pe ieșirea spre Ghimbav. Ridicăm de la bloc și de la casă, spălăm pe Șos. Cristianului nr. 11 și aducem covorul înapoi. 13 lei/mp."
          badge="Bartolomeu · 13 lei/mp · minim 6 mp"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  <strong className="text-text">Bartolomeu</strong> stă în nord-vestul Brașovului,
                  de-a lungul Căii Făgărașului, către gara Bartolomeu și către drumul spre Ghimbav.
                  Sunt blocuri pe artera principală și case mai spre margine. Covoarele de aici ajung
                  la ANIVA fără să le cari tu până în partea cealaltă a orașului.
                </p>
                <p>
                  Atelierul nu este în Bartolomeu. Este pe{' '}
                  <strong className="text-text">Șos. Cristianului nr. 11</strong>, pe șoseaua către
                  Cristian. Ridicarea din Bartolomeu traversează Brașovul. Pentru că adresa este în
                  municipiu, comanda minimă rămâne cea de Brașov: <strong className="text-text">6 mp, adică 78 lei</strong>.
                  Nu plătești drumul peste cei{' '}
                  <strong className="text-text">13 lei/mp</strong>.
                </p>
                <p>
                  Exemplu tipic pentru un apartament de pe Calea Făgărașului: covor de living 2×3 m = 6 mp × 13 lei ={' '}
                  <strong className="text-text">78 lei</strong>. Dacă mai ai un covor de hol de 0,7×2 m (1,4 mp),
                  totalul devine 7,4 mp × 13 lei = <strong className="text-text">96,2 lei</strong>.
                  Două carpete mici, care împreună nu fac 6 mp, se taxează tot la minimul de 78 lei.
                  Sub 1 mp, bucata se tarifează ca 1 mp.
                </p>
                <p>
                  La bloc, formularul are câmpuri pentru bloc, scară și apartament. Etajul se scrie
                  la observații. La casă, un reper (intersecție sau număr vizibil) ajută mașina să
                  oprească corect. Telefonul din comandă trebuie să răspundă în ziua ridicării.
                </p>
                <p>
                  <Link href="/festonare-covoare" className="underline underline-offset-4 text-text">Festonatul</Link>, dacă marginea este desfăcută, nu intră în cei 13 lei/mp. Se măsoară
                  pe contur, la <strong className="text-text">13 lei/ml</strong>. Îl confirmăm
                  separat, înainte să îl facem. Pașii de spălare — inspecție, desprăfuire, aspirare,
                  spălare, stoarcere, uscare controlată — sunt aceiași ca pentru restul Brașovului
                  și sunt descriși pe <Link href="/" className="underline underline-offset-4 text-text">pagina principală</Link>.
                </p>
                <p>
                  Dacă ești la limita cu{' '}
                  <Link href="/spalatorie-covoare-ghimbav" className="underline underline-offset-4 text-text">Ghimbav</Link>,
                  minimul rămâne 6 mp. Toate localitățile și
                  cartierele, inclusiv cele fără pagină proprie, sunt pe{' '}
                  <Link href="/zone-deservite" className="underline underline-offset-4 text-text">Zone deservite</Link>.
                  Pentru sudul orașului, spre Săcele, vezi pagina de{' '}
                  <Link href="/spalatorie-covoare-astra" className="underline underline-offset-4 text-text">Astra</Link>.
                  Calculele sunt pe <Link href="/tarife" className="underline underline-offset-4 text-text">tarife</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title="Întrebări despre ridicarea din Bartolomeu" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
