// Pagina pentru cartierul Astra. Continut propriu, nu sablonul de cartier.
// Contine: SpalatorieAstra.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spălătorie covoare Astra, Brașov | 13 lei/mp | ANIVA',
  description:
    'Ridicare gratuită de covoare din cartierul Astra, sudul Brașovului, spre Săcele. 13 lei/mp, minim 6 mp. Mai multe covoare mici se adună la aceeași comandă.',
  path: '/spalatorie-covoare-astra',
});

const faqs = [
  {
    question: 'Astra este în Brașov sau în Săcele?',
    answer:
      'Astra este cartier al Brașovului, în sud, pe direcția Săcele. Comanda minimă este 6 mp (78 lei), ca în restul orașului. Săcele, imediat mai departe, are tot minim 6 mp. Prețul pe metru pătrat este 13 lei și de o parte, și de alta. Granița dintre Astra și Săcele nu schimbă lei/mp.',
  },
  {
    question: 'Cum adun covoarele din apartament ca să trec de minim?',
    answer:
      'Măsori fiecare covor: lungime × lățime, în metri, apoi aduni. Două covoare de 2×2 m fac 4 mp + 4 mp = 8 mp × 13 lei = 104 lei. Plătești suprafața reală, pentru că ești peste minimul de 6 mp. Un singur covor de 2×2,5 m are 5 mp, deci sub minim, și se taxează 6 mp = 78 lei.',
  },
  {
    question: 'De ce pagina de Astra nu este la fel cu cea de Bartolomeu?',
    answer:
      'Bartolomeu este în nord-vest, spre Ghimbav, cu blocuri pe Calea Făgărașului și case spre margine. Astra este în sud, cartier de blocuri pe drumul către Săcele, lângă fosta zonă industrială Astra. Drumul din atelier diferă. Tariful nu diferă.',
  },
  {
    question: 'Stau la etaj, într-un bloc din Astra. Ce trebuie să scriu?',
    answer:
      'În formular există bloc, scară și apartament. Etajul se pune la observații. Lasă un telefon la care răspunzi. Covoarele din Astra sunt de obicei din apartament, nu din casă cu curte, și adresa de scară contează la ridicare.',
  },
  {
    question: 'Covorul de hol intră la același preț?',
    answer:
      'Da, dacă este covor care se poate ridica. Se măsoară în metri pătrați și se adună la restul comenzii. Un hol de 1×3 m are 3 mp. Lângă un living de 2×3 m (6 mp), totalul este 9 mp × 13 lei = 117 lei.',
  },
  {
    question: 'Unde se spală covoarele ridicate din Astra?',
    answer:
      'În atelierul de pe Șos. Cristianului nr. 11, în vestul/sud-vestul Brașovului, nu într-un punct din Astra. Ridicarea din sudul orașului este gratuită. Termenul obișnuit este de 3 zile lucrătoare, cu uscare controlată înainte de retur.',
  },
];

export default function SpalatorieAstra() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spălătorie covoare Astra, Brașov – ridicare din cartierul de blocuri dinspre Săcele"
          subtitle="Astra este în sudul Brașovului. Ridicăm covoarele din apartament, le spălăm la 13 lei/mp și le aducem uscate. Minimul este 6 mp, ca în tot orașul."
          badge="Astra · 13 lei/mp · minim 6 mp · spre Săcele"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  <strong className="text-text">Astra</strong> este cartierul de blocuri din sudul
                  Brașovului, pe coridorul către Săcele, lângă fosta zonă industrială Astra.
                  Comenzile de aici arată altfel decât cele din nord-vest: de obicei mai multe
                  covoare mici din același apartament, nu un singur covor mare dintr-o casă.
                </p>
                <p>
                  Pentru că Astra este în Brașov, minimul este <strong className="text-text">6 mp (78 lei)</strong>.
                  <Link href="/spalatorie-covoare-sacele" className="underline underline-offset-4 text-text">Săcele</Link>, care începe imediat după cartier, are același
                  minim de 6 mp. Dacă nu ești sigur dacă adresa este în Astra sau deja în Săcele, prețul pe metru
                  pătrat nu se schimbă: spălarea este 13 lei/mp.
                </p>
                <p>
                  Cum se adună suprafața într-un apartament tipic. Covor de dormitor 1,5×2 m = 3 mp.
                  Covor de hol 0,8×3 m = 2,4 mp. Împreună fac 5,4 mp, sub minim, deci comanda din
                  Brașov se taxează <strong className="text-text">78 lei</strong>, nu 5,4 × 13.
                  Dacă mai pui și livingul de 2×2,5 m (5 mp), totalul devine 10,4 mp × 13 lei ={' '}
                  <strong className="text-text">135,2 lei</strong>. Peste minim se plătește suprafața reală.
                </p>
                <p>
                  Atelierul este pe <strong className="text-text">Șos. Cristianului nr. 11</strong>,
                  nu în Astra. Mașina pleacă de la atelier și ajunge în cartier, iar ridicarea
                  rămâne gratuită. La bloc, completează blocul, scara și apartamentul; etajul stă
                  la observații. Fără scară, timpul de ridicare se pierde între scări.
                </p>
                <p>
                  Mocheta lipită sau fixată nu este același serviciu cu covorul care se rulează.
                  Pentru mochetă există o{' '}
                  <Link href="/curatare-mocheta-brasov" className="underline underline-offset-4 text-text">
                    pagină separată
                  </Link>
                  , cu preț la cerere, nu tariful de 13 lei/mp. Festonarea marginii, dacă este
                  nevoie, este 13 lei pe metru liniar și se confirmă separat.
                </p>
                <p>
                  Bartolomeu, în nord-vest, are propria pagină pentru că drumul și tipul de
                  adrese diferă:{' '}
                  <Link href="/spalatorie-covoare-bartolomeu" className="underline underline-offset-4 text-text">
                    spălătorie covoare Bartolomeu
                  </Link>
                  . Celelalte cartiere, fără pagină separată, sunt listate la{' '}
                  <Link href="/zone-deservite" className="underline underline-offset-4 text-text">Zone deservite</Link>.
                  Exemplele oficiale de calcul sunt la{' '}
                  <Link href="/tarife" className="underline underline-offset-4 text-text">tarife</Link>,
                  iar spălarea pas cu pas este pe{' '}
                  <Link href="/" className="underline underline-offset-4 text-text">pagina principală</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title="Întrebări despre ridicarea din Astra" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
