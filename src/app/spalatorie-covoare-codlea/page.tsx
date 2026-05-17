import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Codlea – Ridicare si Livrare la Domiciliu | ANIVA',
  description:
    'Spalatorie covoare Codlea. Ridicare si livrare la domiciliu. 13 lei/mp, curatare profesionala in 6 pasi, 3 zile lucratoare. Comanda online.',
  path: '/spalatorie-covoare-codlea',
});

const benefits = [
  {
    icon: '📍',
    title: 'Acoperim Codlea',
    desc: 'Ridicam covoare din Codlea si zonele adiacente. Venim la adresa ta, indiferent de zona.',
  },
  {
    icon: '🚚',
    title: 'Ridicare si livrare la domiciliu',
    desc: 'Venim la adresa ta din Codlea, ridicam covoarele si le aducem inapoi curate dupa finalizare.',
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
    question: 'Veniti sa ridicati covoare din Codlea?',
    answer:
      'Da, acoperim Codlea cu serviciul nostru de ridicare si livrare. Venim la adresa ta si ridicam covoarele. Suna la 0759 158 914 pentru detalii despre programare.',
  },
  {
    question: 'Cat timp dureaza pana primesc covorul inapoi?',
    answer:
      'Termenul standard este de 3 zile lucratoare de la data ridicarii. Dupa curatare si uscare completa, iti aducem covorul la adresa din Codlea.',
  },
  {
    question: 'Cat costa spalarea covoarelor din Codlea?',
    answer:
      'Pretul este 13 lei/mp. Suna la 0759 158 914 sau comanda online pentru a discuta detaliile comenzii din Codlea, inclusiv comanda minima si termenele de ridicare.',
  },
  {
    question: 'Pot comanda online daca locuiesc in Codlea?',
    answer:
      'Absolut. Poti folosi formularul de comanda online sau ne poti suna la 0759 158 914 pentru a stabili detaliile comenzii.',
  },
  {
    question: 'Curatati covoare din toate materialele?',
    answer:
      'Da, curatam covoare din lana, vascoza, sintetica, covoare orientale, shaggy. Procesul nostru este adaptat fiecarui tip de fibra.',
  },
];

export default function SpalatorieCovoarCodlea() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Codlea – Curatare Profesionala cu Ridicare la Domiciliu"
          subtitle="Locuiesti in Codlea si vrei covoare curate fara sa le transporti singur? ANIVA vine la tine, ridica covoarele, le curata profesional in Brasov si le aduce inapoi."
          badge="Codlea · 13 lei/mp · Ridicare la domiciliu"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Codlea este un oras aflat la aproximativ 16 km de Brasov, cu o comunitate
                  numeroasa si o traditie industriala puternica. La{' '}
                  <strong className="text-text">ANIVA</strong>, acoperim Codlea cu serviciul
                  nostru de curatare covoare cu ridicare si livrare direct la adresa ta.
                </p>
                <p>
                  Procesul nostru profesional in 6 etape garanteaza curatarea in profunzime a
                  fibrelor, eliminarea petelor, bacteriilor si acarienilor. Folosim detergenti
                  biodegradabili, siguri pentru copii si animale de companie.
                </p>
                <p>
                  Pretul este <strong className="text-text">13 lei/mp</strong>. Contacteaza-ne
                  pentru a discuta detaliile comenzii din Codlea – comanda minima si programarea
                  ridicarii.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce sa alegi ANIVA pentru Codlea?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
