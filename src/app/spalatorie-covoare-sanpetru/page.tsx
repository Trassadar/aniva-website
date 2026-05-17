import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Sanpetru Brasov – Ridicare si Livrare Gratuita | ANIVA',
  description:
    'Spalatorie covoare Sanpetru, Brasov. Ridicare si livrare gratuita la domiciliu. 13 lei/mp, comanda minima 6 mp, curatare profesionala in 6 pasi.',
  path: '/spalatorie-covoare-sanpetru',
});

const benefits = [
  {
    icon: '📍',
    title: 'Acoperim Sanpetru',
    desc: 'Ridicam covoare din Sanpetru – localitate aflata in zona metropolitana a Brasovului, cu ridicare gratuita.',
  },
  {
    icon: '🚚',
    title: 'Ridicare si livrare gratuita',
    desc: 'Nicio taxa de transport. Venim la tine, ridicam covorul si il aducem inapoi curat – complet gratuit.',
  },
  {
    icon: '⏱️',
    title: '3 zile lucratoare',
    desc: 'Termenul standard de finalizare este de 3 zile lucratoare de la ridicare. Rapid, fara sa compromitem calitatea.',
  },
  {
    icon: '💰',
    title: 'Pret transparent',
    desc: '13 lei/mp, fara costuri ascunse. Comanda minima 6 mp. Ridicare si livrare incluse.',
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
    question: 'Veniti sa ridicati covoare din Sanpetru?',
    answer:
      'Da, Sanpetru face parte din zona noastra standard de ridicare gratuita. Venim la adresa ta si ridicam covoarele. Comanda minima este de 6 mp.',
  },
  {
    question: 'Cat timp dureaza pana primesc covorul inapoi?',
    answer:
      'Termenul standard este de 3 zile lucratoare de la data ridicarii. Dupa curatare si uscare completa, iti aducem covorul la adresa din Sanpetru.',
  },
  {
    question: 'Cat costa spalarea unui covor din Sanpetru?',
    answer:
      'Pretul este 13 lei/mp, ridicare si livrare incluse gratuit. Comanda minima este de 6 mp (78 lei).',
  },
  {
    question: 'Pot comanda online din Sanpetru?',
    answer:
      'Absolut. Poti folosi formularul de comanda online de pe site – dureaza 2 minute. Specifici adresa din Sanpetru si stabilim impreuna data ridicarii.',
  },
  {
    question: 'Curatati si covoare mari, de living?',
    answer:
      'Da, curatam covoare de orice dimensiune. Un covor de 3×4 m (12 mp) la 13 lei/mp inseamna 156 lei – ridicare si livrare incluse.',
  },
];

export default function SpalatorieCovoarSanpetru() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Sanpetru Brasov – Ridicare si Livrare Gratuita"
          subtitle="Locuiesti in Sanpetru si ai nevoie de covoare curate? ANIVA vine la tine, ridica covoarele, le curata profesional si le aduce inapoi. Gratuit, rapid, fara batai de cap."
          badge="Sanpetru · 13 lei/mp · Ridicare gratuita"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Sanpetru este o localitate din zona metropolitana a Brasovului, in imediata
                  apropiere a orasului. La <strong className="text-text">ANIVA</strong>, Sanpetru
                  face parte din zona noastra standard de deservire cu ridicare si livrare
                  gratuita – la fel ca si Brasovul.
                </p>
                <p>
                  Procesul nostru profesional in 6 etape garanteaza curatarea in profunzime a
                  fibrelor, eliminarea petelor, bacteriilor si acarienilor. Folosim detergenti
                  biodegradabili, siguri pentru copii si animale de companie.
                </p>
                <p>
                  Pretul este simplu: <strong className="text-text">13 lei/mp</strong>, ridicare
                  si livrare incluse. Comanda minima: 6 mp (78 lei). Fara taxe suplimentare.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce ne aleg locuitorii din Sanpetru?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
