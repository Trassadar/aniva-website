// Pagina de ridicare Codlea. Functii: SpalatorieCodlea.
// Codlea este la vest, dupa Ghimbav, cu minim 6 mp, nu 25 mp.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spălătorie covoare Codlea | 13 lei/mp, minim 6 mp | ANIVA',
  description:
    'Ridicare covoare din Codlea, la vest de Brașov. 13 lei/mp și minim 6 mp (78 lei), nu tariful de drum lung. Livrare înapoi la adresă.',
  path: '/spalatorie-covoare-codlea',
});

const faqs = [
  {
    question: 'Codlea este în afara Brașovului. Minimul este 25 mp?',
    answer:
      'Nu. Pe grila de tarife, Codlea este împreună cu Săcele, Hărman, Ghimbav și Cristian: minim 6 mp, adică 78 lei. Minimul de 25 mp este pentru Prejmer, Poiana Brașov, Bran, Sinaia, Bușteni și Predeal. Prețul pe metru pătrat este 13 lei peste tot.',
  },
  {
    question: 'Ghimbav și Codlea se calculează la fel?',
    answer:
      'Da, la tarif. Ambele au minim 6 mp. Drumul nu este același: Ghimbav este între Brașov și Codlea, Codlea este orașul următor, spre Făgăraș. De aceea au pagini separate. Suma pe metru pătrat nu se schimbă.',
  },
  {
    question: 'Am trei covoare mici. Se adună?',
    answer:
      'Da. Se măsoară fiecare (lungime × lățime) și se adună metrii pătrați. Trei covoare de 1,5×2 m fac 3 mp + 3 mp + 3 mp = 9 mp × 13 lei = 117 lei. Peste minim se plătește suprafața reală.',
  },
  {
    question: 'Unde las covorul?',
    answer:
      'La adresa ta. Nu primim covoare la sediu, în Brașov sau în Codlea. Suni la 0759 158 914 sau completezi comanda online și stabilim ridicarea. Termenul obișnuit este de 3 zile lucrătoare.',
  },
];

export default function SpalatorieCodlea() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spălătorie covoare Codlea – ridicare la 13 lei/mp"
          subtitle="Codlea este la vest de Brașov, după Ghimbav. Minimul rămâne 6 mp. Ridicăm de la casă sau de la bloc și aducem covorul uscat."
          badge="Codlea · 13 lei/mp · minim 6 mp"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Codlea stă pe drumul spre Făgăraș, dincolo de Ghimbav. Nu este o stațiune și nu
                  intră la rutele cu minim de 25 mp. În lista de prețuri este trecut explicit lângă
                  Săcele, Hărman, Ghimbav și Cristian:{' '}
                  <strong className="text-text">minim 6 mp, 78 lei</strong>. Spălarea este{' '}
                  <strong className="text-text">13 lei/mp</strong>, la fel ca în Brașov.
                </p>
                <p>
                  Comenzile din Codlea vin mai des de la case decât de la un singur bloc: un covor
                  în living, unul pe hol, unul în dormitor. Le ridicăm la aceeași adresă și le
                  adunăm. Exemplu de casă: hol 1×3,5 m = 3,5 mp, dormitor 2×2,5 m = 5 mp. Total
                  8,5 mp × 13 lei = <strong className="text-text">110,5 lei</strong>. Dacă ai doar
                  holul de 3,5 mp, se taxează minimul de 6 mp, adică 78 lei, nu 3,5 × 13.
                </p>
                <p>
                  Nu confundăm Codlea cu Ghimbav. Ghimbav este localitatea dintre Brașov și Codlea,
                  lângă aeroport, și are{' '}
                  <Link href="/spalatorie-covoare-ghimbav" className="underline underline-offset-4 text-text">
                    pagină proprie
                  </Link>
                  . Bartolomeu, cartierul brașovean de pe aceeași direcție, este și el separat:{' '}
                  <Link href="/spalatorie-covoare-bartolomeu" className="underline underline-offset-4 text-text">
                    spălătorie covoare Bartolomeu
                  </Link>
                  . Tariful pe metru nu se schimbă între ele. Se schimbă drumul pe care vine mașina.
                </p>
                <p>
                  Covorul se spală în atelier, pe Șos. Cristianului nr. 11, nu în curte la Codlea.
                  Pașii sunt aceiași: inspecție, desprăfuire, aspirare, spălare controlată,
                  stoarcere, uscare. Lâna nu se tratează ca un covor sintetic. Dacă marginea este
                  desfăcută,{' '}
                  <Link href="/festonare-covoare" className="underline underline-offset-4 text-text">
                    festonarea este 13 lei/ml
                  </Link>
                  , pe contur, și o confirmăm înainte. Mocheta fixă nu este 13 lei/mp.
                </p>
                <p>
                  Nu primim covoare aduse de tine. Lași adresa în{' '}
                  <Link href="/comanda-online" className="underline underline-offset-4 text-text">
                    comanda online
                  </Link>{' '}
                  sau suni la 0759 158 914. Telefonul din comandă trebuie să răspundă în ziua
                  ridicării. Termenul obișnuit este de 3 zile lucrătoare. Lista completă de zone
                  este pe{' '}
                  <Link href="/zone-deservite" className="underline underline-offset-4 text-text">
                    Zone deservite
                  </Link>
                  , calculele pe{' '}
                  <Link href="/tarife" className="underline underline-offset-4 text-text">tarife</Link>,
                  iar descrierea spălării pe{' '}
                  <Link href="/" className="underline underline-offset-4 text-text">pagina principală</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title="Întrebări despre ridicarea din Codlea" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
