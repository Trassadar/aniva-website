import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Poiana Brasov – Curatare Profesionala cu Ridicare | ANIVA',
  description:
    'Spalatorie covoare Poiana Brasov. Ridicare si livrare la domiciliu. 13 lei/mp, comanda minima 25 mp. Curatare profesionala in 6 pasi, rezultate garantate.',
  path: '/spalatorie-covoare-poiana-brasov',
});

const benefits = [
  {
    icon: '🏔️',
    title: 'Servim Poiana Brasov',
    desc: 'Acoperim Poiana Brasov si zonele de cazare/rezidentiale adiacente cu serviciul nostru de curatare covoare.',
  },
  {
    icon: '🚚',
    title: 'Ridicare si livrare la domiciliu',
    desc: 'Venim la adresa ta din Poiana Brasov, ridicam covoarele si le aducem inapoi curate dupa finalizare.',
  },
  {
    icon: '⏱️',
    title: '3 zile lucratoare',
    desc: 'Termenul standard de finalizare este de 3 zile lucratoare de la ridicare. Rapid si profesional.',
  },
  {
    icon: '💰',
    title: 'Pret transparent',
    desc: '13 lei/mp, fara costuri ascunse. Comanda minima 25 mp pentru Poiana Brasov.',
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
    question: 'Veniti sa ridicati covoare din Poiana Brasov?',
    answer:
      'Da, acoperim Poiana Brasov. Venim la adresa ta, ridicam covoarele si le aducem inapoi dupa curatare. Comanda minima pentru Poiana Brasov este de 25 mp.',
  },
  {
    question: 'De ce comanda minima este mai mare pentru Poiana Brasov?',
    answer:
      'Poiana Brasov se afla la altitudine, cu acces mai dificil. Comanda minima de 25 mp ne permite sa acoperim costurile de transport si sa mentinem pretul de 13 lei/mp.',
  },
  {
    question: 'Cat timp dureaza pana primesc covorul inapoi?',
    answer:
      'Termenul standard este de 3 zile lucratoare de la data ridicarii. Dupa curatare si uscare completa, iti aducem covorul la adresa din Poiana Brasov.',
  },
  {
    question: 'Cat costa spalarea covoarelor din Poiana Brasov?',
    answer:
      'Pretul este 13 lei/mp. Comanda minima este de 25 mp (325 lei). Ideal pentru proprietari de apartamente de vacanta sau pensiuni cu mai multe covoare.',
  },
  {
    question: 'Curatati covoare din pensiuni si apartamente de vacanta?',
    answer:
      'Da, suntem o alegere ideala pentru pensiuni, hoteluri si apartamente de vacanta din Poiana Brasov care doresc curatenie profesionala a covoarelor.',
  },
];

export default function SpalatorieCovoarPoianaBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Poiana Brasov – Curatare Profesionala cu Ridicare la Domiciliu"
          subtitle="Ai covoare in Poiana Brasov care au nevoie de curatare? ANIVA vine la tine, ridica covoarele, le curata profesional si le aduce inapoi – ideal pentru case de vacanta si pensiuni."
          badge="Poiana Brasov · 13 lei/mp · Min. 25 mp"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Poiana Brasov este una dintre cele mai cunoscute statiuni montane din Romania,
                  cu numerosi proprietari de apartamente de vacanta, cabane si pensiuni care au
                  nevoie de curatare periodica a covoarelor. La{' '}
                  <strong className="text-text">ANIVA</strong>, acoperim Poiana Brasov cu
                  serviciul nostru de curatare covoare cu ridicare si livrare la domiciliu.
                </p>
                <p>
                  Procesul nostru profesional in 6 etape garanteaza curatarea in profunzime a
                  fibrelor, eliminarea petelor, bacteriilor si acarienilor – esential pentru
                  spatii utilizate de multi oaspeti.
                </p>
                <div className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-4">
                  <p className="text-sm font-medium text-amber-800">
                    📦 Comanda minima pentru Poiana Brasov: <strong>25 mp</strong> (325 lei) —{' '}
                    pretul ramane <strong>13 lei/mp</strong>, ridicare si livrare incluse.
                    Ideal pentru pensiuni si proprietari cu mai multe covoare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce sa alegi ANIVA pentru Poiana Brasov?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
