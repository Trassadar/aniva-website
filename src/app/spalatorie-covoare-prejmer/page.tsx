import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Prejmer – Curatare Profesionala cu Ridicare | ANIVA',
  description:
    'Spalatorie covoare Prejmer. Ridicare si livrare la domiciliu. 13 lei/mp, comanda minima 25 mp. Curatare profesionala in 6 pasi, rezultate garantate.',
  path: '/spalatorie-covoare-prejmer',
});

const benefits = [
  {
    icon: '📍',
    title: 'Servim zona Prejmer',
    desc: 'Acoperim Prejmerul si zonele adiacente cu serviciul nostru de curatare covoare. Ridicare si livrare direct de la adresa ta.',
  },
  {
    icon: '🚚',
    title: 'Ridicare si livrare la domiciliu',
    desc: 'Venim la adresa ta din Prejmer, ridicam covoarele si le aducem inapoi curate dupa finalizare.',
  },
  {
    icon: '⏱️',
    title: '3 zile lucratoare',
    desc: 'Termenul standard de finalizare este de 3 zile lucratoare de la ridicare. Rapid si profesional.',
  },
  {
    icon: '💰',
    title: 'Pret transparent',
    desc: '13 lei/mp, fara costuri ascunse. Comanda minima 25 mp pentru zona Prejmer. Pretul calculat este pretul final.',
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
    question: 'Veniti sa ridicati covoare din Prejmer?',
    answer:
      'Da, acoperim zona Prejmer. Venim la adresa ta, ridicam covoarele si le aducem inapoi dupa curatare. Comanda minima pentru Prejmer este de 25 mp.',
  },
  {
    question: 'De ce comanda minima este mai mare pentru Prejmer?',
    answer:
      'Prejmerul se afla la cativa kilometri de Brasov. Comanda minima de 25 mp ne permite sa acoperim costurile de transport si sa mentinem pretul de 13 lei/mp.',
  },
  {
    question: 'Cat timp dureaza pana primesc covorul inapoi?',
    answer:
      'Termenul standard este de 3 zile lucratoare de la data ridicarii. Dupa curatare si uscare completa, iti aducem covorul la adresa din Prejmer.',
  },
  {
    question: 'Cat costa spalarea covoarelor din Prejmer?',
    answer:
      'Pretul este 13 lei/mp. Comanda minima este de 25 mp (325 lei). Ideal daca ai mai multe covoare de spalat.',
  },
  {
    question: 'Pot comanda online daca locuiesc in Prejmer?',
    answer:
      'Absolut. Poti folosi formularul de comanda online sau ne poti suna la 0759 158 914 pentru a discuta detaliile comenzii din Prejmer.',
  },
];

export default function SpalatorieCovoarPrejmer() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Prejmer – Curatare Profesionala cu Ridicare la Domiciliu"
          subtitle="Locuiesti in Prejmer si vrei covoare curate fara sa le transporti singur? ANIVA vine la tine, ridica covoarele, le curata profesional si le aduce inapoi."
          badge="Prejmer · 13 lei/mp · Min. 25 mp"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Prejmerul este o comuna importanta in zona metropolitana a Brasovului, cu o
                  populatie in continua crestere si case noi. La{' '}
                  <strong className="text-text">ANIVA</strong>, acoperim zona Prejmer cu
                  serviciul nostru de curatare covoare cu ridicare si livrare la domiciliu.
                </p>
                <p>
                  Procesul nostru profesional in 6 etape garanteaza curatarea in profunzime a
                  fibrelor, eliminarea petelor, bacteriilor si acarienilor. Folosim detergenti
                  biodegradabili, siguri pentru copii si animale de companie.
                </p>
                <div className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-4">
                  <p className="text-sm font-medium text-amber-800">
                    📦 Comanda minima pentru Prejmer: <strong>25 mp</strong> (325 lei) —{' '}
                    pretul ramane <strong>13 lei/mp</strong>, ridicare si livrare incluse.
                    Ideal daca ai mai multe covoare de spalat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce sa alegi ANIVA pentru Prejmer?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
