// Pagina de ridicare Sacele. Functii: SpalatorieSacele.
// Minim 6 mp, acelasi tarif ca in Brasov. Continut propriu, nu sablon de oras.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spălătorie covoare Săcele | Ridicare, 13 lei/mp | ANIVA',
  description:
    'Ridicare covoare din Săcele, inclusiv Satulung, Baciu, Turcheș și Cernatu. 13 lei/mp, minim 6 mp (78 lei). Nu aduci covorul în Brașov.',
  path: '/spalatorie-covoare-sacele',
});

const faqs = [
  {
    question: 'Săcele are alt preț decât Brașovul?',
    answer:
      'Nu. Spălarea este 13 lei/mp și în Săcele. Comanda minimă este 6 mp, adică 78 lei, aceeași grupă de tarife cu Brașov, Codlea, Hărman, Ghimbav și Cristian. Nu se adaugă drumul peste prețul pe metru pătrat.',
  },
  {
    question: 'Ridicați din Satulung, Baciu, Turcheș și Cernatu?',
    answer:
      'Da. Sunt părți ale orașului Săcele, nu localități cu alt tarif. Scrii adresa completă în comandă. Minimul rămâne 6 mp pentru tot orașul.',
  },
  {
    question: 'Stau la limită cu Astra. Se schimbă ceva?',
    answer:
      'Nu. Astra este cartier al Brașovului, imediat la nord, și are tot minim 6 mp. Dacă nu ești sigur de graniță, prețul pe metru pătrat nu depinde de ea. Pagina de Astra descrie ridicarea din blocurile de la sudul Brașovului.',
  },
  {
    question: 'Trebuie să duc covorul în Brașov?',
    answer:
      'Nu. Nu primim covoare la sediu. Ridicăm din Săcele și îl aducem înapoi spălat. Atelierul este pe Șos. Cristianului nr. 11, în Brașov, iar termenul obișnuit este de 3 zile lucrătoare.',
  },
];

export default function SpalatorieSacele() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spălătorie covoare Săcele – ridicare de acasă, 13 lei/mp"
          subtitle="Săcele este imediat la sud de Brașov. Ridicăm covorul de la adresă, îl spălăm în atelier și îl aducem uscat. Minimul este 6 mp."
          badge="Săcele · 13 lei/mp · minim 6 mp"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Săcele nu este un cartier al Brașovului, dar drumul este scurt: orașul începe
                  unde se termină Astra. De aceea grila de tarife îl ține la aceeași comandă minimă
                  ca orașul, <strong className="text-text">6 mp (78 lei)</strong>, nu la minimul de
                  25 mp folosit spre Predeal sau Bran. Spălarea rămâne{' '}
                  <strong className="text-text">13 lei/mp</strong>.
                </p>
                <p>
                  Ridicăm din tot orașul: Satulung, Baciu, Turcheș și Cernatu. Nu ținem un preț
                  diferit pe cartier și nu avem un punct de predare în Săcele. Mașina pleacă din
                  atelierul de pe Șos. Cristianului nr. 11 și oprește la adresa din comandă. La
                  casă, un reper ajută (număr, poartă, intersecție). La bloc, scara și apartamentul
                  sunt obligatorii; etajul poate sta la observații.
                </p>
                <p>
                  Casele din Săcele aduc adesea mai multe covoare deodată, nu un singur preș.
                  Exemplu: living 2,5×3,5 m = 8,75 mp, dormitor 1,6×2,3 m = 3,68 mp. Împreună fac
                  12,43 mp × 13 lei = <strong className="text-text">161,59 lei</strong>. Ești peste
                  minim, deci se plătește suprafața reală, nu 78 lei. Un singur covor de 1,5×2,5 m
                  are 3,75 mp, sub 6 mp, și comanda se taxează cu minimul: 78 lei.
                </p>
                <p>
                  Mocheta lipită într-o casă nouă nu intră la acest tarif. Dacă nu se poate rula,
                  este serviciul de{' '}
                  <Link href="/curatare-mocheta-brasov" className="underline underline-offset-4 text-text">
                    curățare mochetă
                  </Link>
                  , cu preț la cerere. Covorul care se rulează, inclusiv shaggy sau lână, rămâne
                  13 lei/mp. Marginea desfăcută se poate{' '}
                  <Link href="/festonare-covoare" className="underline underline-offset-4 text-text">
                    festona la 13 lei/ml
                  </Link>
                  , separat, după inspecție.
                </p>
                <p>
                  Astra, cartierul de blocuri de dinainte de Săcele, are pagină proprie:{' '}
                  <Link href="/spalatorie-covoare-astra" className="underline underline-offset-4 text-text">
                    spălătorie covoare Astra
                  </Link>
                  . Codlea și Ghimbav sunt pe partea cealaltă a Brașovului și au și ele pagini,
                  pentru că drumul nu este același. Toate zonele și minimele sunt pe{' '}
                  <Link href="/zone-deservite" className="underline underline-offset-4 text-text">
                    Zone deservite
                  </Link>
                  , iar exemplele de calcul pe{' '}
                  <Link href="/tarife" className="underline underline-offset-4 text-text">tarife</Link>.
                  Spălarea pas cu pas este pe{' '}
                  <Link href="/" className="underline underline-offset-4 text-text">pagina principală</Link>.
                </p>
                <p>
                  Comanzi din Săcele la fel ca din Brașov: formularul de{' '}
                  <Link href="/comanda-online" className="underline underline-offset-4 text-text">
                    comandă online
                  </Link>{' '}
                  sau telefon 0759 158 914. Termenul obișnuit este de 3 zile lucrătoare. Nu este
                  nevoie să cari covorul până în Brașov.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title="Întrebări despre ridicarea din Săcele" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
