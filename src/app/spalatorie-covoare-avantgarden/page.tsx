import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Avantgarden Brasov – Ridicare si Livrare Gratuita | ANIVA',
  description:
    'Spalatorie covoare in Avantgarden, Brasov. Ridicare si livrare gratuita din ansamblul rezidential. 13 lei/mp, curatare profesionala in atelier, 3 zile lucratoare.',
  path: '/spalatorie-covoare-avantgarden',
});

const benefits = [
  {
    icon: '🏘️',
    title: 'Acoperim Avantgarden',
    desc: 'Ridicam covoare din toate blocurile si apartamentele din ansamblul rezidential Avantgarden, gratuit.',
  },
  {
    icon: '✨',
    title: 'Calitate pentru locuintele noi',
    desc: 'Covoarele si mochetele din apartamentele noi merita ingrijire speciala. Tratam fiecare covor cu aceeasi atentie.',
  },
  {
    icon: '🚚',
    title: 'Ridicare si livrare gratuita',
    desc: 'Nicio taxa de transport. Totul este inclus in pretul de 13 lei/mp, inclusiv deplasarea in Avantgarden.',
  },
  {
    icon: '⏱️',
    title: '3 zile lucratoare',
    desc: 'Termen rapid, fara compromisuri la calitate. Te anuntam inainte de livrare pentru a te asigura ca esti acasa.',
  },
  {
    icon: '🌿',
    title: 'Detergenti premium',
    desc: 'Produse biodegradabile, certificate, sigure pentru copii si animale. Igienizare anti-acar inclusa in standard.',
  },
  {
    icon: '📱',
    title: 'Comanda online',
    desc: 'Comanda in 2 minute prin formularul de pe site sau suna direct. Ne ocupam de tot fara sa te deranjam suplimentar.',
  },
];

const faqs = [
  {
    question: 'Acoperiti ansamblul rezidential Avantgarden cu ridicarea gratuita?',
    answer:
      'Da, Avantgarden este inclus in zona noastra de deservire gratuita. Ridicam covoare de la orice bloc sau apartament din Avantgarden, fara costuri suplimentare de transport.',
  },
  {
    question: 'Care este pretul pentru covoare din Avantgarden?',
    answer:
      'Pretul este identic cu cel din restul Brasovului: 13 lei/mp, cu ridicare si livrare gratuita. Comanda minima este de 6 mp (78 lei total). Nu exista suprataxe pentru zona Avantgarden.',
  },
  {
    question: 'Curatati covoarele din apartamentele noi, care nu au mai fost curatate?',
    answer:
      'Da, curatam orice covor, indiferent de starea initiala. Chiar si covoarele noi sau cele curatate rar beneficiaza de procesul nostru complet. Vom face inspectia la primire si stabilim tratamentul potrivit.',
  },
  {
    question: 'Pot comanda online daca stau in Avantgarden?',
    answer:
      'Absolut. Formularul de comanda online este disponibil pe site, la pagina Comanda online. Specifici adresa din Avantgarden si stabilim impreuna data si ora ridicarii.',
  },
  {
    question: 'Curatati si covoare orientale sau din lana?',
    answer:
      'Da. Covoarele din lana naturala, covoarele persane si cele orientale necesita un tratament special pe care il oferim. Inspectia initiala determina produsele si metoda potrivita pentru fiecare covor.',
  },
];

export default function SpelatorieCovoarAvantgarden() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Avantgarden Brasov – Curatare Profesionala pentru Locuintele Tale"
          subtitle="In Avantgarden sau in apropiere? ANIVA vine la tine, ridica covoarele, le curata profesional in atelier si le aduce inapoi curate si uscate. Gratuit, in 3 zile lucratoare."
          badge="Avantgarden · 13 lei/mp · Ridicare gratuita"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Ansamblul rezidential Avantgarden din Brasov a crescut semnificativ in ultimii
                  ani, aducand in oras o comunitate noua de familii tinere si profesionisti.
                  Pentru locatarii din Avantgarden care cauta o spalatorie de covoare de
                  incredere, <strong className="text-text">ANIVA</strong> ofera servicii complete
                  cu ridicare si livrare gratuita.
                </p>
                <p>
                  Nu trebuie sa te deplasezi cu covorul greu la o spalatorie. Venim noi la
                  blocul tau din Avantgarden, ridicam covoarele, le transportam in atelierul
                  nostru si le curatam profesional in 6 etape. Dupa 3 zile lucratoare, le
                  aducem inapoi la aceeasi adresa.
                </p>
                <p>
                  Pretul este simplu: <strong className="text-text">13 lei/mp</strong>, ridicare
                  si livrare incluse gratuit. Comanda minima este 6 mp pentru zona Avantgarden,
                  considerata zona Brasov standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce ne aleg locatarii din Avantgarden?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
