import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Rasnov – Ridicare si Livrare la Domiciliu | ANIVA',
  description:
    'Spalatorie covoare Rasnov. Ridicare si livrare la domiciliu. 13 lei/mp, curatare profesionala in 6 pasi, 3 zile lucratoare. Comanda online.',
  path: '/spalatorie-covoare-rasnov',
});

const benefits = [
  {
    icon: '📍',
    title: 'Acoperim Rasnovul',
    desc: 'Ridicam covoare din Rasnov si zonele adiacente. Venim la adresa ta si ne ocupam de tot.',
  },
  {
    icon: '🚚',
    title: 'Ridicare si livrare la domiciliu',
    desc: 'Venim la adresa ta din Rasnov, ridicam covoarele si le aducem inapoi curate dupa finalizare.',
  },
  {
    icon: '⏱️',
    title: '3 zile lucratoare',
    desc: 'Termenul standard de finalizare este de 3 zile lucratoare de la ridicare. Rapid si profesional.',
  },
  {
    icon: '💰',
    title: 'Pret transparent',
    desc: '13 lei/mp, fara costuri ascunse. Pretul calculat este pretul final – fara surprize.',
  },
  {
    icon: '🧴',
    title: 'Detergenti siguri',
    desc: 'Produse biodegradabile, sigure pentru copii si animale de companie. Igienizare anti-acar inclusa.',
  },
  {
    icon: '📱',
    title: 'Comanda simpla',
    desc: 'Comanda online in 2 minute sau suna la 0759 158 914. Stabilim data si ne ocupam de tot.',
  },
];

const faqs = [
  {
    question: 'Veniti sa ridicati covoare din Rasnov?',
    answer:
      'Da, acoperim Rasnovul cu serviciul nostru. Venim la adresa ta, ridicam covoarele si le aducem inapoi dupa curatare. Suna la 0759 158 914 pentru detalii.',
  },
  {
    question: 'Cat timp dureaza pana primesc covorul inapoi?',
    answer:
      'Termenul standard este de 3 zile lucratoare de la data ridicarii. Dupa curatare si uscare completa, iti aducem covorul la adresa din Rasnov.',
  },
  {
    question: 'Cat costa spalarea covoarelor din Rasnov?',
    answer:
      'Pretul este 13 lei/mp. Contacteaza-ne pentru detalii despre comanda minima si costurile de transport pentru Rasnov.',
  },
  {
    question: 'Curatati covoare orientale sau din lana?',
    answer:
      'Da, curatam covoare din toate materialele: lana, vascoza, sintetica, orientale, shaggy. Procesul nostru este adaptat fiecarui tip de fibra.',
  },
  {
    question: 'Pot comanda online din Rasnov?',
    answer:
      'Absolut. Poti folosi formularul de comanda online sau ne poti suna la 0759 158 914 pentru a stabili detaliile comenzii din Rasnov.',
  },
];

export default function SpalatorieCovoarRasnov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Rasnov – Curatare Profesionala cu Ridicare la Domiciliu"
          subtitle="Locuiesti in Rasnov si vrei covoare curate fara sa le transporti singur? ANIVA vine la tine, ridica covoarele, le curata profesional in Brasov si le aduce inapoi."
          badge="Rasnov · 13 lei/mp · Ridicare la domiciliu"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Rasnovul, cu cetatea sa medievala si peisajul montan impresionant, este un
                  oras aflat la aproximativ 18 km de Brasov. La{' '}
                  <strong className="text-text">ANIVA</strong>, acoperim zona Rasnov cu
                  serviciul nostru de curatare covoare cu ridicare si livrare direct la adresa ta.
                </p>
                <p>
                  Procesul nostru profesional in 6 etape garanteaza curatarea in profunzime a
                  fibrelor, eliminarea petelor, bacteriilor si acarienilor. Folosim detergenti
                  biodegradabili, siguri pentru copii si animale de companie.
                </p>
                <p>
                  Pretul este <strong className="text-text">13 lei/mp</strong>. Contacteaza-ne
                  la <strong className="text-text">0759 158 914</strong> pentru a discuta
                  detaliile comenzii tale din Rasnov.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce sa alegi ANIVA pentru Rasnov?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
