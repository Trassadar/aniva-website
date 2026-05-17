import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Cristian Brasov – Ridicare si Livrare Gratuita | ANIVA',
  description:
    'Spalatorie covoare Cristian, Brasov. Ridicare si livrare gratuita la domiciliu. 13 lei/mp, curatare profesionala in 6 pasi, 3 zile lucratoare.',
  path: '/spalatorie-covoare-cristian',
});

const benefits = [
  {
    icon: '📍',
    title: 'Acoperim comuna Cristian',
    desc: 'Ridicam covoare din Cristian – localitate aflata chiar in vecinatatea spalatoriei noastre de covoare de pe Soseaua Cristianului.',
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
    question: 'Veniti sa ridicati covoare din Cristian?',
    answer:
      'Da, acoperim comuna Cristian – aflata chiar langa spalatoria noastra de covoare de pe Soseaua Cristianului Nr. 11. Ridicarea si livrarea sunt complet gratuite.',
  },
  {
    question: 'Cat timp dureaza pana primesc covorul inapoi?',
    answer:
      'Termenul standard este de 3 zile lucratoare de la data ridicarii. Dupa curatare si uscare completa, iti aducem covorul la adresa din Cristian.',
  },
  {
    question: 'Cat costa spalarea unui covor din Cristian?',
    answer:
      'Pretul este 13 lei/mp, ridicare si livrare incluse gratuit. Comanda minima este de 6 mp (78 lei). Fara taxa suplimentara.',
  },
  {
    question: 'Unde se afla spalatoria de covoare ANIVA?',
    answer:
      'Spalatoria noastra de covoare se afla pe Soseaua Cristianului Nr. 11, Brasov – chiar la intrarea spre comuna Cristian. Poti si sa aduci personal covoarele daca preferi.',
  },
  {
    question: 'Curatati si covoare mari, de living?',
    answer:
      'Da, curatam covoare de orice dimensiune. Un covor de 3×4 m (12 mp) la 13 lei/mp inseamna 156 lei – ridicare si livrare incluse.',
  },
];

export default function SpalatorieCovoarCristian() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Cristian Brasov – Ridicare si Livrare Gratuita"
          subtitle="Locuiesti in Cristian si ai nevoie de covoare curate? ANIVA vine la tine – spalatoria noastra de covoare este chiar pe Soseaua Cristianului. Ridicam covoarele, le curatam profesional si le aducem inapoi."
          badge="Cristian · 13 lei/mp · Ridicare gratuita"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Spalatoria de covoare <strong className="text-text">ANIVA</strong> se afla pe{' '}
                  <strong className="text-text">Soseaua Cristianului Nr. 11, Brasov</strong> –
                  chiar la intrarea spre comuna Cristian. Suntem practic vecinii tai, ceea ce
                  inseamna ca acoperim Cristianul cu cea mai rapida ridicare posibila.
                </p>
                <p>
                  Oferim serviciu complet de spalatorie covoare cu ridicare si livrare gratuita
                  direct de la adresa ta din Cristian. Procesul nostru profesional in 6 etape
                  garanteaza curatarea in profunzime a fibrelor, eliminarea petelor, bacteriilor
                  si acarienilor.
                </p>
                <p>
                  Pretul este simplu: <strong className="text-text">13 lei/mp</strong>, ridicare
                  si livrare incluse. Poti si sa aduci personal covoarele la spalatoria noastra, daca esti
                  in zona. Fara taxe suplimentare.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce ne aleg locuitorii din Cristian?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
