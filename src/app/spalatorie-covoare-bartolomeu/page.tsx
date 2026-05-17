import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Bartolomeu Brasov – Ridicare si Livrare Gratuita | ANIVA',
  description:
    'Spalatorie covoare cartier Bartolomeu, Brasov. Ridicare si livrare gratuita direct de la adresa ta. 13 lei/mp, 3 zile lucratoare, curatare profesionala.',
  path: '/spalatorie-covoare-bartolomeu',
});

const benefits = [
  {
    icon: '📍',
    title: 'Acoperim cartierul Bartolomeu',
    desc: 'Ridicam covoare de la orice adresa din Bartolomeu. Zone rezidentiale, cartiere noi, blocuri si case – acoperim tot.',
  },
  {
    icon: '🚚',
    title: 'Transport gratuit',
    desc: 'Ridicarea si livrarea sunt complet gratuite pentru toate comenzile din Bartolomeu. Fara surprize la final.',
  },
  {
    icon: '💧',
    title: 'Curatare profesionala',
    desc: 'Proces complet in 6 etape: inspectie, desprafuire, aspirare, spalare, stoarcere si uscare controlata.',
  },
  {
    icon: '⏱️',
    title: 'Termen rapid',
    desc: '3 zile lucratoare de la ridicare. Covorul tau ajunge inapoi curat si proaspat in cel mai scurt timp.',
  },
  {
    icon: '🌿',
    title: 'Produse sigure',
    desc: 'Detergenti biodegradabili, fara clor, cu igienizare anti-acar inclusa. Siguri pentru toata familia.',
  },
  {
    icon: '💰',
    title: '13 lei/mp transparent',
    desc: 'Pret clar, fara taxe ascunse. Comanda minima 6 mp pentru Bartolomeu si zona Brasov.',
  },
];

const faqs = [
  {
    question: 'Acoperiti cartierul Bartolomeu cu ridicarea gratuita?',
    answer:
      'Da, cartierul Bartolomeu este inclus in zona noastra standard de deservire. Ridicarea si livrarea sunt complet gratuite, fara conditii suplimentare.',
  },
  {
    question: 'Care este pretul pentru covoare ridicate din Bartolomeu?',
    answer:
      'Pretul este identic cu cel din Brasov: 13 lei/mp, cu ridicare si livrare gratuita. Comanda minima este de 6 mp (78 lei total).',
  },
  {
    question: 'In cat timp primesc covorul inapoi?',
    answer:
      'In medie 3 zile lucratoare de la ridicare. Te anuntam inainte de livrare pentru a te asigura ca esti acasa.',
  },
  {
    question: 'Pot comanda spalarea covoarelor online daca stau in Bartolomeu?',
    answer:
      'Da, formularul de comanda online este disponibil pe site. Completezi adresa din Bartolomeu si stabilim impreuna data ridicarii. Alternativ, suna la 0759 158 914.',
  },
  {
    question: 'Curatati si covorase mici sau doar covoare mari?',
    answer:
      'Curatam orice tip de covor, indiferent de dimensiune. Comanda minima este de 6 mp total – poti include mai multe covorase mici intr-o singura comanda pentru a atinge minimul.',
  },
];

export default function SpelatorieCovoreBartolomeu() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Bartolomeu Brasov – Serviciu Complet cu Ridicare Gratuita"
          subtitle="Din cartierul Bartolomeu, covoarele tale ajung la ANIVA si se intorc curate, igienizate si uscate perfect. Ridicare si livrare gratuita, 13 lei/mp, 3 zile lucratoare."
          badge="Bartolomeu · 13 lei/mp · Ridicare gratuita"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Cartierul Bartolomeu din Brasov se bucura de un serviciu complet de spalatorie
                  covoare la domiciliu oferit de <strong className="text-text">ANIVA</strong>.
                  Nu trebuie sa te deplasezi cu covorul greu la o spalatorie – noi venim la
                  adresa ta din Bartolomeu, ridicam covorul si il aducem inapoi dupa curatare.
                </p>
                <p>
                  Procesul de curatare este identic pentru toate covoarele, indiferent de zona:
                  6 etape complete in atelierul nostru, detergenti specializati selectati in
                  functie de material, stoarcere centrifuga si uscare controlata in spatiu
                  dedicat. Termenul standard este de 3 zile lucratoare.
                </p>
                <p>
                  Pretul pentru covoarele ridicate din Bartolomeu este{' '}
                  <strong className="text-text">13 lei/mp</strong>, cu ridicare si livrare
                  gratuite. Comanda minima este de 6 mp pentru zona Brasov.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce ne aleg locatarii din Bartolomeu?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
