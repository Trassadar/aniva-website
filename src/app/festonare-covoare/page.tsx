// Pagina festonare covoare. Functii: FestonareCovoare.
// Pret afisat ca tarif obisnuit: 13 lei/ml, separat de spalarea la mp.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Festonare covoare Brașov | 13 lei/ml | ANIVA',
  description:
    'Festonare covoare în Brașov, 13 lei pe metru liniar. Se măsoară conturul, nu suprafața. Ridicare de la domiciliu, împreună cu spălarea.',
  path: '/festonare-covoare',
});

const faqs = [
  {
    question: 'Festonarea se plătește la metru pătrat?',
    answer:
      'Nu. Festonarea este 13 lei pe metru liniar (ml), adică lungimea marginii lucrate. Spălarea este 13 lei pe metru pătrat (mp). Sunt unități diferite și apar separat, nu ca un pachet.',
  },
  {
    question: 'Trebuie festonat fiecare covor?',
    answer:
      'Nu. Se festonează marginea care se desface: firul de pe contur este rupt, franjurii se scutură sau colțul s-a mâncat. Dacă marginea este întreagă, spălarea rămâne doar la metri pătrați. La inspecție spunem dacă are sens, înainte să o facem.',
  },
  {
    question: 'Cum măsor acasă ca să estimez?',
    answer:
      'Aduni laturile care trebuie lucrate. Un covor de 2×3 m are contur de 10 ml (2+3+2+3). Dacă se festonează tot conturul: 10 × 13 lei = 130 lei, pe lângă spălare. Dacă este desfăcută o singură latură de 3 m, estimarea este 3 × 13 lei = 39 lei. Măsura finală se confirmă la atelier.',
  },
  {
    question: 'Pot doar să festonez, fără spălare?',
    answer:
      'De cele mai multe ori festonarea se face odată cu spălarea, pentru că marginea se vede clar după ce covorul este curat. Dacă vrei doar marginea, sună la 0759 158 914 și spunem dacă deplasarea are sens pentru comanda ta. Nu publicăm un minim separat pentru festonare, diferit de grila de spălare.',
  },
  {
    question: 'În cât timp este gata?',
    answer:
      'Termenul obișnuit, împreună cu spălarea, este de 3 zile lucrătoare de la ridicare. Nu promitem un termen mai scurt. Te anunțăm înainte de livrare.',
  },
  {
    question: 'Trebuie să aduc covorul la atelier?',
    answer:
      'Nu. Nu primim covoare la sediu. Ridicăm de la domiciliu și îl aducem înapoi, în Brașov și în localitățile deservite, dacă este atinsă comanda minimă a zonei. Atelierul este pe Șos. Cristianului nr. 11.',
  },
];

export default function FestonareCovoare() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Festonare covoare în Brașov, 13 lei pe metru liniar"
          subtitle="Festonarea reface marginea care se desface. Se măsoară în metri liniari, nu în metri pătrați, și se plătește separat de spălare."
          badge="Festonare: 13 lei/ml"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Festonul este cusătura de pe conturul covorului, firul care ține urzeala să nu se
                  scuture. Când se rupe, marginea se destramă la fiecare aspirare: întâi o ață, apoi
                  un colț, apoi o dungă întreagă. Festonarea pune la loc acea margine. Nu este o
                  spălare și nu schimbă prețul pe metru pătrat.
                </p>
                <p>
                  Tariful este <strong className="text-text">13 lei/ml</strong>. Un metru liniar
                  înseamnă un metru de margine, măsurat cu ruleta pe contur. Un covor de 2×3 m are
                  6 mp de spălat, deci <strong className="text-text">78 lei</strong> la spălare, și
                  10 ml de contur. Dacă se festonează tot conturul, festonarea este 10 × 13 lei ={' '}
                  <strong className="text-text">130 lei</strong>. Totalul celor două linii este 208
                  lei. Nu este o reducere și nu este un pachet: sunt două servicii, fiecare cu
                  unitatea lui.
                </p>
                <h2 className="font-extrabold text-text text-2xl pt-2">Când merită și când nu</h2>
                <p>
                  Merită când, pe margine, vezi fire ieșite, când franjurii se subțiază sau când un
                  colț s-a ros de la ușă. La covoarele din lână, marginea cedează mai des decât la
                  cele sintetice, pentru că firul natural se rupe dacă este agățat. Nu merită pe o
                  margine întreagă, doar „ca să fie”. La inspecție spunem ce latură este de lucru.
                  Dacă nu este nevoie, nu o punem pe comandă.
                </p>
                <p>
                  Poți estima acasă înainte să suni. Măsori doar laturile desfăcute. O latură de 4 m
                  înseamnă 4 ml × 13 lei = 52 lei, nu toată suprafața covorului. Dacă nu ești sigur
                  unde se desface, lasă măsura pe comandă și o verificăm noi. Măsura de acasă este
                  o estimare; cea de la atelier este cea care se facturează, și o confirmăm înainte
                  să începem.
                </p>
                <h2 className="font-extrabold text-text text-2xl pt-2">Cum se face, odată cu spălarea</h2>
                <p>
                  Covorul se ridică de la domiciliu, la fel ca pentru spălare. Nu primim covoare
                  aduse la sediu. În atelier trece prin inspecție: material, pete, margine. Dacă
                  festonarea are sens, o măsurăm și îți spunem suma, separat de cei 13 lei/mp.
                  Spălarea urmează pașii obișnuiți: desprăfuire, aspirare, spălare controlată,
                  stoarcere, uscare. Termenul obișnuit este de 3 zile lucrătoare.
                </p>
                <p>
                  Nu ținem un catalog de culori de fir pe site. La inspecție alegem un fir apropiat
                  de marginea existentă, atât cât permite materialul. Nu promitem o copie invizibilă
                  a unui feston vechi de zece ani. Marginea trebuie să țină, nu să pară neatinsă
                  din fabrică.
                </p>
                <p>
                  Prețul de spălare, exemplele și minimele pe zone sunt pe pagina de{' '}
                  <Link href="/tarife" className="underline underline-offset-4 text-text">
                    tarife
                  </Link>
                  . Aceeași diferență dintre mp și ml este explicată și pe pagina despre{' '}
                  <Link href="/spalatorie-covoare-10-lei-mp-brasov" className="underline underline-offset-4 text-text">
                    spălarea la 13 lei/mp
                  </Link>
                  . Ridicarea din Săcele, Codlea, Ghimbav sau Râșnov este pe paginile de localitate,
                  iar pașii de spălare sunt pe{' '}
                  <Link href="/" className="underline underline-offset-4 text-text">
                    pagina principală
                  </Link>
                  . Pentru programare:{' '}
                  <Link href="/comanda-online" className="underline underline-offset-4 text-text">
                    comandă online
                  </Link>{' '}
                  sau 0759 158 914.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title="Întrebări despre festonare" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
