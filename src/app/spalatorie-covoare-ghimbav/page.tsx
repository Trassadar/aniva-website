// Pagina de ridicare Ghimbav. Functii: SpalatorieGhimbav.
// Ghimbav este intre Brasov si Codlea, langa Bartolomeu. Minim 6 mp.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spălătorie covoare Ghimbav | Ridicare gratuită | ANIVA',
  description:
    'Ridicare covoare din Ghimbav, între Brașov și Codlea. 13 lei/mp, minim 6 mp (78 lei). Preluare de la domiciliu, nu de la aeroport.',
  path: '/spalatorie-covoare-ghimbav',
});

const faqs = [
  {
    question: 'Locuiesc lângă aeroport. Minimul este altul?',
    answer:
      'Nu. Ghimbav are minim 6 mp (78 lei), ca Bartolomeu și ca Codlea. Aeroportul este un reper pe hartă, nu un punct de predare. Ridicăm de la adresa de acasă, nu din terminal.',
  },
  {
    question: 'Sunt între Bartolomeu și Ghimbav. Ce pagină citesc?',
    answer:
      'Dacă adresa este în Brașov, în Bartolomeu, minimul este 6 mp. Dacă este deja în Ghimbav, minimul este tot 6 mp. Prețul pe metru pătrat este 13 lei în ambele. Paginile sunt separate pentru că una este cartier, cealaltă localitate.',
  },
  {
    question: 'Un covor de 2×3 m cât costă în Ghimbav?',
    answer:
      '2×3 m = 6 mp × 13 lei = 78 lei. Este exact minimul. Ridicarea și livrarea nu se adaugă. Un covor mai mic de 6 mp se taxează tot cu 78 lei. Două covoare care împreună trec de 6 mp se taxează la suprafața reală.',
  },
  {
    question: 'Pot aduce eu covorul?',
    answer:
      'Nu. Nu primim covoare la sediu. Sună la 0759 158 914 sau lasă comanda online. Termenul obișnuit este de 3 zile lucrătoare, cu uscare în atelier înainte de retur.',
  },
];

export default function SpalatorieGhimbav() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spălătorie covoare Ghimbav – ridicare de la domiciliu"
          subtitle="Ghimbav este între Brașov și Codlea. Spălăm la 13 lei/mp, cu minim 6 mp, și aducem covorul înapoi uscat."
          badge="Ghimbav · 13 lei/mp · minim 6 mp"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Ghimbav stă la ieșirea de nord-vest a Brașovului, între cartierul Bartolomeu și
                  Codlea. Pe grila ANIVA este în grupa cu minim{' '}
                  <strong className="text-text">6 mp (78 lei)</strong>, nu în grupa de 25 mp.
                  Spălarea costă <strong className="text-text">13 lei/mp</strong>. Drumul nu se
                  plătește separat.
                </p>
                <p>
                  Aeroportul Brașov-Ghimbav este în aceeași localitate și ajută ca reper, dar nu
                  ridicăm din terminal și nu avem un ghișeu acolo. Comanda se face pe adresa de
                  acasă: stradă, număr, iar la bloc scară și apartament. Casele noi de la margine
                  au nevoie de un reper în observații, dacă numărul nu se vede din drum.
                </p>
                <p>
                  Un covor de living, 2×3 m, are exact 6 mp × 13 lei ={' '}
                  <strong className="text-text">78 lei</strong>. Dacă mai pui un hol de 0,8×2 m
                  (1,6 mp), totalul devine 7,6 mp × 13 lei ={' '}
                  <strong className="text-text">98,8 lei</strong>. Sub 6 mp se taxează minimul,
                  nu suprafața mai mică. Un covor sub 1 mp, luat singur, se tarifează ca 1 mp, iar
                  apoi se aplică și minimul zonei: în Ghimbav tot 78 lei dacă nu mai adaugi alte
                  covoare.
                </p>
                <p>
                  Bartolomeu, cartierul brașovean de pe aceeași axă, are pagina lui:{' '}
                  <Link href="/spalatorie-covoare-bartolomeu" className="underline underline-offset-4 text-text">
                    spălătorie covoare Bartolomeu
                  </Link>
                  . Codlea, orașul următor spre vest, este aici:{' '}
                  <Link href="/spalatorie-covoare-codlea" className="underline underline-offset-4 text-text">
                    spălătorie covoare Codlea
                  </Link>
                  . În toate trei, lei/mp este același. Diferența pe care o descriem este drumul
                  și tipul de adrese, nu un preț de cartier.
                </p>
                <p>
                  Covorul se spală în atelierul din Brașov, pe Șos. Cristianului nr. 11. Lâna,
                  mătasea și shaggy-ul se tratează după fibră, la același tarif pe metru pătrat.
                  Marginea care se desface se poate{' '}
                  <Link href="/festonare-covoare" className="underline underline-offset-4 text-text">
                    festona la 13 lei/ml
                  </Link>
                  . Nu primim covoare la sediu. Programarea se face prin{' '}
                  <Link href="/comanda-online" className="underline underline-offset-4 text-text">
                    comanda online
                  </Link>{' '}
                  sau la 0759 158 914. Termenul obișnuit este de 3 zile lucrătoare.
                </p>
                <p>
                  Minimele oficiale sunt pe{' '}
                  <Link href="/tarife" className="underline underline-offset-4 text-text">tarife</Link>,
                  harta zonelor pe{' '}
                  <Link href="/zone-deservite" className="underline underline-offset-4 text-text">
                    Zone deservite
                  </Link>
                  , iar spălarea explicată pas cu pas pe{' '}
                  <Link href="/" className="underline underline-offset-4 text-text">pagina principală</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title="Întrebări despre ridicarea din Ghimbav" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
