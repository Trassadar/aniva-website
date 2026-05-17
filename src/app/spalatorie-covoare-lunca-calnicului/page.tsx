import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Lunca Calnicului – Ridicare si Livrare | ANIVA Brasov',
  description:
    'Spalatorie covoare Lunca Calnicului. Ridicare si livrare gratuita la domiciliu. 13 lei/mp, curatare profesionala in 6 pasi, 3 zile lucratoare.',
  path: '/spalatorie-covoare-lunca-calnicului',
});

const benefits = [
  {
    icon: '📍',
    title: 'Acoperim Lunca Calnicului',
    desc: 'Ridicam covoare din Lunca Calnicului – comuna aflata in apropierea Brasovului, pe drumul spre Cristian.',
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
    desc: '13 lei/mp, fara costuri ascunse. Ridicare si livrare incluse. Pretul calculat este pretul final.',
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
    question: 'Veniti sa ridicati covoare din Lunca Calnicului?',
    answer:
      'Da, acoperim Lunca Calnicului cu serviciul nostru de ridicare si livrare. Venim la adresa ta si ridicam covoarele. Ridicarea si livrarea sunt gratuite.',
  },
  {
    question: 'Cat timp dureaza pana primesc covorul inapoi?',
    answer:
      'Termenul standard este de 3 zile lucratoare de la data ridicarii. Dupa curatare si uscare completa, iti aducem covorul la adresa din Lunca Calnicului.',
  },
  {
    question: 'Cat costa spalarea unui covor?',
    answer:
      'Pretul este 13 lei/mp, ridicare si livrare incluse gratuit. Comanda minima este de 6 mp (78 lei). Fara taxa suplimentara pentru Lunca Calnicului.',
  },
  {
    question: 'Pot comanda online?',
    answer:
      'Absolut. Poti folosi formularul de comanda online de pe site – dureaza 2 minute. Specifici adresa din Lunca Calnicului si stabilim impreuna data ridicarii.',
  },
  {
    question: 'Curatati si covoare mari, de living?',
    answer:
      'Da, curatam covoare de orice dimensiune. Un covor de 3×4 m (12 mp) la 13 lei/mp inseamna 156 lei – ridicare si livrare incluse.',
  },
];

export default function SpalatorieCovoarLuncaCalnicului() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Lunca Calnicului – Ridicare si Livrare Gratuita"
          subtitle="Locuiesti in Lunca Calnicului si ai nevoie de covoare curate? ANIVA vine la tine, ridica covoarele, le curata profesional si le aduce inapoi. Gratuit, rapid, fara batai de cap."
          badge="Lunca Calnicului · 13 lei/mp · Ridicare gratuita"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Lunca Calnicului este o comuna situata in apropierea Brasovului, cu o
                  comunitate rurala activa si case individuale. La{' '}
                  <strong className="text-text">ANIVA</strong>, acoperim aceasta zona cu
                  serviciul nostru de spalatorie covoare cu ridicare si livrare gratuita direct
                  de la adresa ta.
                </p>
                <p>
                  Procesul nostru profesional in 6 etape garanteaza curatarea in profunzime a
                  fibrelor, eliminarea petelor, bacteriilor si acarienilor. Folosim detergenti
                  biodegradabili, siguri pentru copii si animale de companie.
                </p>
                <p>
                  Pretul este simplu: <strong className="text-text">13 lei/mp</strong>, ridicare
                  si livrare incluse. Pentru un covor de 2×3 m (6 mp), platesti{' '}
                  <strong className="text-text">78 lei total</strong>. Fara taxe de deplasare,
                  fara surprize.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce sa alegi ANIVA pentru Lunca Calnicului?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
