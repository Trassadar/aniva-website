import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Tractorul Brasov – Ridicare si Livrare Gratuita | ANIVA',
  description:
    'Spalatorie covoare in cartierul Tractorul, Brasov. Ridicare si livrare gratuita direct de la tine. 13 lei/mp, proces profesional in 6 pasi, 3 zile lucratoare.',
  path: '/spalatorie-covoare-tractorul',
});

const benefits = [
  {
    icon: '📍',
    title: 'Acoperim tot Tractorul',
    desc: 'Ridicam covoare de la orice adresa din cartierul Tractorul – inclusiv blocuri cu acces limitat sau etaje superioare.',
  },
  {
    icon: '🚚',
    title: 'Ridicare si livrare gratuita',
    desc: 'Nicio taxa de transport. Venim la tine, ridicam covorul si il aducem inapoi curat – gratuit pentru toate comenzile.',
  },
  {
    icon: '⏱️',
    title: '3 zile lucratoare',
    desc: 'Termenul standard de finalizare este de 3 zile lucratoare. Rapid si fara sa compromitem calitatea curatarii.',
  },
  {
    icon: '💰',
    title: 'Pret transparent',
    desc: '13 lei/mp, fara costuri ascunse. Pretul pe care il calculezi este pretul final – ridicare si livrare incluse.',
  },
  {
    icon: '🧴',
    title: 'Detergenti siguri',
    desc: 'Produse biodegradabile, fara clor, sigure pentru copii si animale de companie. Igienizare anti-acar inclusa.',
  },
  {
    icon: '📱',
    title: 'Comanda simpla',
    desc: 'Comanda online in 2 minute sau suna la 0759 158 914. Stabilim data si ne ocupam de tot.',
  },
];

const faqs = [
  {
    question: 'Veniti sa ridicati covoare din cartierul Tractorul?',
    answer:
      'Da, acoperim cartierul Tractorul in intregime. Indiferent de strada sau numarul blocului, venim la adresa ta si ridicam covorul. Ridicarea si livrarea sunt complet gratuite.',
  },
  {
    question: 'Cat timp dureaza pana primesc covorul inapoi?',
    answer:
      'Termenul standard este de 3 zile lucratoare de la data ridicarii. Dupa curatare si uscare completa, iti aducem covorul la adresa din Tractorul, la o ora stabilita impreuna.',
  },
  {
    question: 'Cat costa spalarea unui covor daca locuiesc in Tractorul?',
    answer:
      'Pretul este 13 lei/mp, ridicare si livrare incluse gratuit. Comanda minima este de 6 mp (78 lei). Nicio taxa suplimentara pentru zona Tractorul.',
  },
  {
    question: 'Pot comanda online daca locuiesc in Tractorul?',
    answer:
      'Absolut. Poti folosi formularul de comanda online de pe site – dureaza 2 minute. Specifici adresa din Tractorul si stabilim impreuna data si ora ridicarii.',
  },
  {
    question: 'Curatati si covoare mari, de living?',
    answer:
      'Da, curatam covoare de orice dimensiune. Un covor de 3×4 m (12 mp) la 13 lei/mp inseamna 156 lei – ridicare si livrare incluse, indiferent de etaj sau acces.',
  },
];

export default function SpelatorieCovoreTractorul() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Tractorul Brasov – Ridica si Livram Gratuit in Cartierul Tau"
          subtitle="Locuiesti in cartierul Tractorul si ai nevoie de covoare curate? ANIVA vine la tine, ridica covoarele, le curata profesional si le aduce inapoi. Gratuit, rapid, fara batai de cap."
          badge="Tractorul · 13 lei/mp · Ridicare gratuita"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Cartierul Tractorul este unul dintre cele mai populate cartiere din Brasov,
                  cu blocuri mari si o comunitate numeroasa. Multi locatari ai cartierului ne-au
                  ales ca spalatorie de covoare in ultimii ani, apreciind in special
                  comoditatea serviciului de ridicare si livrare gratuita si calitatea constanta
                  a curatarii.
                </p>
                <p>
                  La <strong className="text-text">ANIVA</strong>, acoperim tot cartierul
                  Tractorul cu serviciul nostru complet. Venim la adresa ta, indiferent de bloc,
                  scara sau etaj. Ridicam covorul, il transportam la atelierul nostru din Brasov,
                  il curatam profesional in 6 etape si il aducem inapoi curat si uscat in
                  aproximativ 3 zile lucratoare.
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
        <BenefitsSection benefits={benefits} title="De ce ne aleg locatarii din Tractorul?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
