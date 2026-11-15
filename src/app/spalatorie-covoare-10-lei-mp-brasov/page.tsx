// Pagina despre pretul de 13 lei/mp. Pastreaza URL-ul /spalatorie-covoare-10-lei-mp-brasov.
// Contine: SpalatoriePretAccesibil.
// Tariful de 10 lei/mp nu exista. Pretul de spalare este 13 lei/mp.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spălare covoare Brașov | 13 lei/mp, ridicare gratuită | ANIVA',
  description:
    'Cauți o spălare de covoare în Brașov? Prețul este 13 lei/mp, cu ridicare și livrare gratuită. Tariful de 10 lei/mp nu există.',
  path: '/spalatorie-covoare-10-lei-mp-brasov',
});

const benefits = [
  {
    icon: '13',
    title: 'Spălare covoare: 13 lei/mp',
    desc: 'Spălarea costă 13 lei pe metru pătrat în Brașov și în localitățile deservite. Nu există un tarif de 10 lei/mp.',
  },
  {
    icon: 'mp',
    title: 'Metru pătrat, nu metru liniar',
    desc: 'Spălarea se măsoară în mp (lungime × lățime). Festonatul, dacă marginea trebuie refăcută, se măsoară în ml, pe contur, la 13 lei/ml.',
  },
  {
    icon: '78',
    title: 'Exemplu la minimul din Brașov',
    desc: 'Un covor de 2×3 m are 6 mp × 13 lei = 78 lei. Este exact comanda minimă din Brașov. Sub acest total se taxează tot 78 lei.',
  },
  {
    icon: '0',
    title: 'Ridicarea nu se adaugă la preț',
    desc: 'Ridicarea și livrarea sunt gratuite dacă este atinsă comanda minimă a zonei. Nu plătești drumul peste cei 13 lei/mp.',
  },
  {
    icon: '3',
    title: 'Același termen',
    desc: '3 zile lucrătoare, cu uscare controlată. Prețul de 13 lei nu taie pași din spălare.',
  },
  {
    icon: '✓',
    title: 'Totalul se confirmă înainte',
    desc: 'După dimensiunile pe care le trimiți îți spunem suma. Dacă la atelier suprafața diferă, te sunăm înainte să spălăm.',
  },
];

const faqs = [
  {
    question: 'Mai există prețul de 10 lei/mp?',
    answer:
      'Nu. Prețul de 10 lei/mp nu există. Spălarea covoarelor costă 13 lei/mp, în Brașov și în localitățile deservite.',
  },
  {
    question: 'De ce adresa paginii încă conține „10 lei”?',
    answer:
      'Adresa a rămas pentru cine caută o spălare de covoare în Brașov la un preț mic. Textul de pe pagină spune prețul: 13 lei/mp, cu ridicare și livrare gratuită. Nu afișăm un tarif pe care nu îl mai practicăm.',
  },
  {
    question: 'Cum se calculează prețul?',
    answer:
      'Suprafața în metri pătrați (lungime × lățime) se înmulțește cu 13 lei. Exemplu: 3×4 m = 12 mp × 13 lei = 156 lei. Un covor sub 1 mp se tarifează ca 1 mp. Mai multe covoare din aceeași comandă se adună.',
  },
  {
    question: 'Care este comanda minimă?',
    answer:
      'În Brașov, Stupini și Sânpetru, și în Codlea, Săcele, Hărman, Ghimbav și Cristian, minimul este 6 mp, adică 78 lei. În Prejmer, Poiana Brașov, Bran, Sinaia, Bușteni și Predeal, minimul este 25 mp, adică 325 lei. Sub minim se taxează minimul.',
  },
  {
    question: 'Festonatul este tot 13 lei/mp?',
    answer:
      'Nu. Festonarea este 13 lei pe metru liniar (ml). Se măsoară conturul, nu suprafața. Un covor de 2×3 m are 6 mp de spălat și, dacă se festonează tot conturul, 10 ml.',
  },
  {
    question: 'Ridicarea este inclusă în cei 13 lei?',
    answer:
      'Da. Ridicarea și livrarea sunt gratuite în zonele deservite, dacă este atinsă comanda minimă. Nu se adaugă taxă de deplasare peste prețul pe metru pătrat.',
  },
  {
    question: 'Unde văd toată lista de prețuri?',
    answer:
      'Pe pagina de tarife sunt exemplele de calcul și minimele pe zone. Pentru programare folosești comanda online sau suni la 0759 158 914.',
  },
];

export default function SpalatoriePretAccesibil() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spălare covoare în Brașov: 13 lei/mp, cu ridicare gratuită"
          subtitle="Spălarea covoarelor costă 13 lei pe metru pătrat. Tariful de 10 lei/mp nu există. Ridicarea și livrarea sunt gratuite."
          badge="Spălare covoare: 13 lei/mp"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Dacă ai căutat o <strong className="text-text">spălare de covoare în Brașov</strong>,
                  tariful de spălare este{' '}
                  <strong className="text-text">13 lei/mp</strong>. Tariful de 10 lei/mp nu există.
                </p>
                <p>
                  La <strong className="text-text">ANIVA</strong> spălarea se face în atelier, pe{' '}
                  <strong className="text-text">Șos. Cristianului nr. 11</strong>, nu în casă.
                  Ridicăm covorul și îl aducem înapoi. Drumul nu se plătește separat, atât timp cât
                  comanda atinge minimul zonei. În Brașov, minimul este 6 mp, adică 78 lei.
                </p>
                <p>
                  Un covor de living de 3×4 m are 12 mp × 13 lei = <strong className="text-text">156 lei</strong>,
                  cu ridicare și livrare. Un covor de 2×3 m are 6 mp × 13 lei ={' '}
                  <strong className="text-text">78 lei</strong>. Două carpete mici, de exemplu 1×2 m
                  și 1,5×2 m, au împreună 5 mp. Pentru că sunt sub minimul de 6 mp din Brașov, comanda
                  se taxează 78 lei, nu 65 lei.
                </p>

                <div className="mt-6 border border-white/50 bg-white/50 rounded-2xl p-6">
                  <h2 className="font-extrabold text-text text-lg mb-4">Ce plătești, pe unități</h2>
                  <div className="space-y-3">
                    <div>
                      <span className="font-bold text-text">Spălare covoare: 13 lei/mp</span>
                      <p className="text-sm text-muted mt-0.5">
                        Metru pătrat. Inclusiv desprăfuire, aspirare și uscare controlată.
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-text">Festonare: 13 lei/ml</span>
                      <p className="text-sm text-muted mt-0.5">
                        Metru liniar, doar conturul. Nu se confundă cu mp. Un covor de 2×3 m are 10 ml de contur.
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-text">Ridicare și livrare: 0 lei</span>
                      <p className="text-sm text-muted mt-0.5">
                        Gratuite în zonele deservite, peste minimul de comandă. Minimele sunt pe{' '}
                        <Link href="/tarife" className="underline underline-offset-4 text-text">pagina de tarife</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Prețul pe metru pătrat este același în tot Brașovul. Ce se schimbă de la o localitate
                  la alta este doar comanda minimă, pentru că drumul până la Predeal sau Bran nu este
                  același cu drumul până în Astra sau Bartolomeu. Zonele și minimele sunt pe pagina{' '}
                  <Link href="/zone-deservite" className="underline underline-offset-4 text-text">
                    Zone deservite
                  </Link>
                  . Spălarea în sine, pașii și termenul de 3 zile lucrătoare sunt descrise pe{' '}
                  <Link href="/" className="underline underline-offset-4 text-text">pagina principală</Link>.
                </p>
                <p>
                  Ca să afli totalul pentru covoarele tale, sună la{' '}
                  <strong className="text-text">0759 158 914</strong> sau lasă dimensiunile în{' '}
                  <Link href="/comanda-online" className="underline underline-offset-4 text-text">
                    comanda online
                  </Link>
                  . Confirmăm suma înainte de spălare.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce 13 lei/mp este tariful de luat în calcul" />
        <FAQSection faqs={faqs} title="Întrebări despre preț" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
