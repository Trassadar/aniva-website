import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare cu Ridicare si Livrare Brasov – Gratuit | ANIVA',
  description:
    'Spalatorie covoare cu ridicare si livrare gratuita in Brasov. Nu trebuie sa te deplasezi – venim la tine, ridicam covorul, il curatam profesional si il aducem inapoi.',
  path: '/spalatorie-covoare-cu-ridicare-brasov',
});

const benefits = [
  {
    icon: '📱',
    title: 'Comanda in 2 minute',
    desc: 'Completezi formularul online sau suni, stabilim data si gata. Noi ne ocupam de tot restul fara sa te deranjam mai mult.',
  },
  {
    icon: '🏠',
    title: 'Ridicam de la usa ta',
    desc: 'Venim la adresa ta din Brasov la ora stabilita. Nu trebuie sa scoti covorul din apartament – ne ocupam noi.',
  },
  {
    icon: '🧹',
    title: 'Curatare in atelier',
    desc: 'Covorul este transportat in atelierul nostru unde parcurge procesul complet de curatare in 6 etape.',
  },
  {
    icon: '✅',
    title: 'Livrare la aceeasi adresa',
    desc: 'Dupa curatare si uscare, aducem covorul inapoi la tine – curat, proaspat si ambalat corespunzator.',
  },
  {
    icon: '🆓',
    title: 'Zero cost transport',
    desc: 'Ridicarea si livrarea sunt complet gratuite pentru orice comanda in Brasov si localitatile apropiate. Fara surprize.',
  },
  {
    icon: '🗓️',
    title: 'Program flexibil',
    desc: 'Lucram Luni-Vineri 08:00-18:00 si Sambata 09:00-13:00. Stabilim impreuna un orar convenabil pentru tine.',
  },
];

const faqs = [
  {
    question: 'Cum functioneaza exact serviciul de ridicare si livrare?',
    answer:
      'Dupa ce plasezi comanda online sau suni la 0759 158 914, stabilim impreuna ziua si intervalul orar pentru ridicare. La ora stabilita, un coleg ANIVA vine la adresa ta, ridica covorul (sau covoarelor) si il transporta in atelierul nostru. Dupa curatare si uscare (in medie 3 zile lucratoare), iti aducem covorul inapoi, la aceeasi adresa, fara costuri suplimentare.',
  },
  {
    question: 'Ce zone din Brasov acoperiti cu serviciul de ridicare?',
    answer:
      'Acoperim tot Brasovul: centru, Tractorul, Bartolomeu, Racadau, Avantgarden, Schei, Astra, Noua, Grivitei, Harmanului si alte cartiere. Acoperim si localitatile apropiate: Stupini, Sanpetru, Codlea, Sacele, Ghimbav, Cristian, Harman. Pentru zone mai indepartate (Prejmer, Poiana Brasov, Bran, Sinaia, Predeal), comanda minima este de 25 mp.',
  },
  {
    question: 'Trebuie sa fiu acasa cand veniti sa ridicati covorul?',
    answer:
      'Da, cineva trebuie sa fie prezent la ridicare pentru a preda covorul si a semna documentul de primire. La livrare, de asemenea, cineva trebuie sa fie acasa. Daca ai un program incorect, discutam impreuna o solutie – de exemplu, un vecin sau un interval de week-end.',
  },
  {
    question: 'Covorul meu este greu si greu de rulat – il puteti ridica voi?',
    answer:
      'Da, ne ocupam de tot. Colegii nostri au experienta in manipularea covoarelor de orice dimensiune si greutate. Nu trebuie sa faci niciun efort suplimentar.',
  },
  {
    question: 'Pot comanda mai multe covoare deodata?',
    answer:
      'Absolut. Poti preda oricati covoare la o singura ridicare. Pretul se calculeaza per metru patrat, indiferent de numarul de covoare. Comanda minima ramane de 6 mp total pentru Brasov.',
  },
];

export default function SpelatorieRidicareBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare cu Ridicare si Livrare Gratuita in Brasov"
          subtitle="Nu mai cauta cum sa transporti covorul la spalatorie. La ANIVA, venim noi la tine, ridicam covorul direct din apartament si il aducem inapoi curat. Tot procesul, gratuit."
          badge="Ridicare si livrare gratuita in Brasov"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Transportul unui covor mare la o spalatorie este, pentru multi oameni, motivul
                  pentru care aleg sa amane curatarea. Un covor de 3x4 m inseamna 12 kilograme
                  de rulat, dus pana la masina, transportat si dus inapoi – un efort considerabil,
                  mai ales daca locuiesti la etaj sau nu ai masina potrivita.
                </p>
                <p>
                  <strong className="text-text">ANIVA</strong> a eliminat complet aceasta
                  problema. Serviciul nostru de ridicare si livrare gratuita functioneaza simplu:
                  tu comanzi online sau suni, noi venim la adresa ta, ridicam covorul si il aducem
                  inapoi curat. Fara deplasari, fara efort suplimentar, fara costuri de transport.
                </p>
                <p>
                  Acoperim tot Brasovul – de la centrul vechi pana in cartierele periferice –
                  si localitatile din jur: Stupini, Sanpetru, Codlea, Sacele, Ghimbav, Cristian,
                  Harman. Daca locuiesti in una dintre aceste zone, ridici telefonul sau deschizi
                  site-ul si procesul incepe de acolo.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/comanda-online" className="btn-primary btn-cta">
                    Comanda ridicarea acum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works steps */}
        <section className="mt-10 md:mt-14">
          <div className="container-app">
            <h2 className="section-title text-2xl md:text-3xl text-center mb-8">
              Cum functioneaza ridicarea gratuita?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {[
                { n: '1', step: 'Comanda', desc: 'Completezi formularul online sau suni la 0759 158 914. Dureza 2 minute.' },
                { n: '2', step: 'Stabilim data', desc: 'Alegem impreuna o zi si un interval orar convenabil pentru ridicare.' },
                { n: '3', step: 'Ridicam', desc: 'Venim la adresa ta, ridicam covorul si il transportam in atelier.' },
                { n: '4', step: 'Livram', desc: 'Dupa 3 zile lucratoare, aducem covorul curat direct la usa ta.' },
              ].map((item) => (
                <div
                  key={item.n}
                  className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-2xl p-6 text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-white/70 border border-white/70 shadow-sm flex items-center justify-center font-bold text-text text-lg mx-auto mb-3">
                    {item.n}
                  </div>
                  <div className="font-extrabold text-text mb-2">{item.step}</div>
                  <div className="text-sm text-muted">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsSection benefits={benefits} title="De ce sa alegi ridicarea gratuita ANIVA?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
