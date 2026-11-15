// Pagina unica pentru zonele de ridicare.
// Contine: ZoneDeservite.
// Inlocuieste paginile subtiri de cartier, cu exceptia Bartolomeu si Astra.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Zone deservite | Spălătorie covoare Brașov și împrejurimi | ANIVA',
  description:
    'Ridicare gratuită de covoare în Brașov și în localitățile din jur. 13 lei/mp. Minim 6 mp în oraș, 25 mp spre Predeal, Bran și Poiana Brașov.',
  path: '/zone-deservite',
});

const brasovSix = [
  'Astra',
  'Avantgarden',
  'Bartolomeu',
  'Centru',
  'După Deal',
  'Florilor',
  'Gemenii',
  'Griviței',
  'Lunca Câlnicului',
  'Noua',
  'Răcădău',
  'Schei',
  'Steagu',
  'Strada Carpaților',
  'Stupini',
  'Timiș',
  'Tractorul',
];

const nearbySix = ['Codlea', 'Cristian', 'Ghimbav', 'Hărman', 'Săcele', 'Sânpetru'];

const farTwentyFive = ['Bran', 'Bușteni', 'Poiana Brașov', 'Predeal', 'Prejmer', 'Sinaia'];

const faqs = [
  {
    question: 'Prețul pe metru pătrat se schimbă după cartier?',
    answer:
      'Nu. Spălarea covoarelor este 13 lei/mp peste tot. Se schimbă doar comanda minimă: 6 mp (78 lei) în Brașov și în localitățile apropiate, 25 mp (325 lei) pe rutele mai lungi.',
  },
  {
    question: 'De ce Bartolomeu și Astra au pagină separată?',
    answer:
      'Sunt două cartiere din care primim comenzi în mod constant și unde ridicarea arată diferit: Bartolomeu este în nord-vest, spre Ghimbav, cu blocuri și case; Astra este în sud, spre Săcele, mai ales blocuri. Celelalte cartiere sunt acoperite de pe această pagină, la același preț și același minim de 6 mp.',
  },
  {
    question: 'Care este minimul pentru Râșnov?',
    answer:
      'Râșnov este în aria de ridicare. Minimul nu este publicat separat în grila de tarife, așa că îl confirmăm la telefon sau în comandă, înainte de ridicare. Nu aplicăm un minim ghicit.',
  },
  {
    question: 'Cum se adună mai multe covoare?',
    answer:
      'Se măsoară fiecare covor (lungime × lățime) și se adună metrii pătrați. Dacă totalul trece de minimul zonei, plătești suprafața reală × 13 lei. Dacă este sub minim, plătești minimul.',
  },
  {
    question: 'Trebuie să aduc eu covorul la atelier?',
    answer:
      'Nu. Ridicăm de la adresă și îl aducem înapoi, gratuit, dacă este atins minimul. Atelierul este pe Șos. Cristianului nr. 11, Brașov. Poți și să îl aduci tu, în program: luni–vineri 08:00–17:00, sâmbătă 08:00–13:00. Duminica este închis.',
  },
];

export default function ZoneDeservite() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Zone deservite: spălătorie covoare în Brașov și împrejurimi"
          subtitle="Același preț, 13 lei/mp, cu ridicare și livrare gratuită. Comanda minimă depinde de distanță, nu de cartierul din interiorul Brașovului."
          badge="13 lei/mp · ridicare gratuită · minim pe zone"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app space-y-6">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
                <p>
                  ANIVA ridică covoarele de la adresă și le spală în atelierul de pe{' '}
                  <strong className="text-text">Șos. Cristianului nr. 11, Brașov</strong>.
                  Prețul de spălare este <strong className="text-text">13 lei/mp</strong>, indiferent de cartier. Termenul obișnuit este de 3 zile lucrătoare.
                </p>
                <p>
                  Nu ținem un calendar public de „ziua cartierului”. Comanda se programează online
                  sau la telefon, <strong className="text-text">0759 158 914</strong>, și stabilim
                  ridicarea. La bloc, scrie în formular scara și apartamentul; etajul poate sta la observații.
                </p>
              </div>
            </div>

            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <h2 className="font-extrabold text-text text-2xl">Brașov, minim 6 mp (78 lei)</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Include cartierele de mai jos. Două dintre ele au pagină
                proprie, cu detalii de ridicare:{' '}
                <Link href="/spalatorie-covoare-bartolomeu" className="underline underline-offset-4 text-text font-semibold">
                  Bartolomeu
                </Link>{' '}
                și{' '}
                <Link href="/spalatorie-covoare-astra" className="underline underline-offset-4 text-text font-semibold">
                  Astra
                </Link>
                .
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {brasovSix.map((name) => (
                  <li
                    key={name}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white/55 border border-white/65 text-sm font-semibold text-text"
                  >
                    {name === 'Bartolomeu' || name === 'Astra' ? (
                      <Link
                        href={name === 'Bartolomeu' ? '/spalatorie-covoare-bartolomeu' : '/spalatorie-covoare-astra'}
                        className="underline underline-offset-4"
                      >
                        {name}
                      </Link>
                    ) : (
                      name
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <h2 className="font-extrabold text-text text-2xl">Localități apropiate, tot 6 mp (78 lei)</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Aceeași grilă ca în Brașov. Sânpetru este grupat la tarife
                împreună cu Brașov și Stupini; Codlea, Săcele, Hărman, Ghimbav și Cristian au același minim.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {nearbySix.map((name) => (
                  <li
                    key={name}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white/55 border border-white/65 text-sm font-semibold text-text"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <h2 className="font-extrabold text-text text-2xl">Rute mai lungi, minim 25 mp (325 lei)</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Prețul pe metru pătrat este 13 lei. Minimul acoperă drumul.
                25 mp × 13 lei = 325 lei.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {farTwentyFive.map((name) => (
                  <li
                    key={name}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white/55 border border-white/65 text-sm font-semibold text-text"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <h2 className="font-extrabold text-text text-2xl">Râșnov</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Ridicăm și din Râșnov. Minimul pentru Râșnov nu este scris separat pe{' '}
                <Link href="/tarife" className="underline underline-offset-4 text-text">pagina de tarife</Link>,
                așa că îl confirmăm când lași comanda, înainte să pornim. Nu publicăm aici o cifră pe care grila oficială nu o are.
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                Exemplele de calcul pentru 6 mp, 12 mp și pentru un covor sub minim sunt pe pagina de tarife.
                Diferența dintre metru pătrat și metru liniar, la festonat, este explicată și pe pagina de{' '}
                <Link href="/spalatorie-covoare-10-lei-mp-brasov" className="underline underline-offset-4 text-text">
                  preț de 13 lei/mp
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title="Întrebări despre zone" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
