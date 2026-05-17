import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Schei Brasov – Ridicare si Livrare Gratuita | ANIVA',
  description:
    'Spalatorie covoare cartier Schei, Brasov. Acoperim tot cartierul Schei cu ridicare gratuita. 13 lei/mp, curatare profesionala in atelier, 3 zile lucratoare.',
  path: '/spalatorie-covoare-schei',
});

const benefits = [
  {
    icon: '📍',
    title: 'Acoperim cartierul Schei',
    desc: 'Ridicam covoare de la orice adresa din Schei – case, vile, apartamente. Stradute inguste sau cladiri istorice, ne adaptam.',
  },
  {
    icon: '🚚',
    title: 'Transport gratuit',
    desc: 'Ridicarea si livrarea sunt incluse in pret. Nicio taxa suplimentara pentru zona Schei.',
  },
  {
    icon: '🏛️',
    title: 'Ingrijire pentru orice covor',
    desc: 'Schei are multe case vechi cu covoare persane sau traditionale. Le tratam cu aceeasi atentie ca pe orice alt covor.',
  },
  {
    icon: '⏱️',
    title: '3 zile lucratoare',
    desc: 'Termen rapid, sigur. Covorul tau se intoarce curat, uscat si proaspat in 3 zile lucratoare.',
  },
  {
    icon: '🌿',
    title: 'Produse certificate',
    desc: 'Detergenti biodegradabili, igienizare anti-acar inclusa. Siguri pentru toata familia, inclusiv copii si animale.',
  },
  {
    icon: '💰',
    title: 'Pret corect',
    desc: '13 lei/mp, fara taxe ascunse. Acelasi pret ca in restul Brasovului – corect si transparent.',
  },
];

const faqs = [
  {
    question: 'Acoperiti cartierul Schei cu serviciul de ridicare gratuita?',
    answer:
      'Da, cartierul Schei este inclus in zona noastra de deservire gratuita. Ridicam covoare de la orice adresa din Schei, indiferent de tipul de locuinta sau straduta.',
  },
  {
    question: 'In Schei sunt multe case vechi cu covoare traditionale – le curatati?',
    answer:
      'Absolut. Covoarele traditionale romanesti, covoarele persane si cele orientale primesc un tratament special adaptat materialului. Facem o inspectie inainte de spalare pentru a stabili produsele potrivite si a evita deteriorarea fibrei delicate.',
  },
  {
    question: 'Care este pretul pentru covoare ridicate din Schei?',
    answer:
      'Pretul standard este 13 lei/mp, cu ridicare si livrare gratuita. Comanda minima este de 6 mp (78 lei). Nicio suprataxare pentru zona Schei.',
  },
  {
    question: 'Cum fac comanda daca locuiesc in Schei?',
    answer:
      'Simplu – fie completezi formularul online de pe site (2 minute), fie suni la 0759 158 914. Stabilim data si intervalul orar pentru ridicare si ne ocupam de tot.',
  },
  {
    question: 'Cat timp dureaza curatarea?',
    answer:
      'Termenul standard este de 3 zile lucratoare de la data ridicarii. Dupa curatare si uscare completa in atelierul nostru, iti aducem covorul inapoi la adresa din Schei.',
  },
];

export default function SpelatorieCovoarSchei() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Schei Brasov – Serviciu Profesional cu Ridicare Gratuita"
          subtitle="Din cartierul Schei, covoarele tale ajung la ANIVA si se intorc curate, igienizate si uscate. Ridicare si livrare gratuita in tot Scheiul, 13 lei/mp, 3 zile lucratoare."
          badge="Schei · 13 lei/mp · Ridicare gratuita"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Cartierul Schei, cu istoria sa bogata si casele sale caracteristice, adaposteste
                  o comunitate care apreciaza calitatea si traditia. Multi locatari din Schei au
                  covoare vechi, traditionale sau persane care necesita ingrijire speciala –
                  si exact aceasta oferim la <strong className="text-text">ANIVA</strong>.
                </p>
                <p>
                  Serviciul nostru de spalatorie covoare acopera tot cartierul Schei cu ridicare
                  si livrare gratuita. Venim la adresa ta, indiferent de tipul de locuinta,
                  ridicam covorul si il curatam in atelierul nostru printr-un proces profesional
                  complet in 6 etape. Dupa 3 zile lucratoare, il aducem inapoi curat si uscat.
                </p>
                <p>
                  Pretul este <strong className="text-text">13 lei/mp</strong>, cu ridicare si
                  livrare incluse. Comanda minima pentru Schei si restul Brasovului este de 6 mp.
                  Comanda online sau suna direct la 0759 158 914.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce ne aleg locatarii din Schei?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
