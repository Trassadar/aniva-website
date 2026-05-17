import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Racadau Brasov – Ridicare si Livrare Gratuita | ANIVA',
  description:
    'Spalatorie covoare cartier Racadau, Brasov. Venim la tine, ridicam covorul, il curatam profesional si il aducem inapoi gratuit. 13 lei/mp, 3 zile lucratoare.',
  path: '/spalatorie-covoare-racadau',
});

const benefits = [
  {
    icon: '📍',
    title: 'Acoperim Racadaul complet',
    desc: 'De la blocurile vechi pana la constructiile noi din Racadau, acoperim orice adresa cu ridicare gratuita.',
  },
  {
    icon: '🚚',
    title: 'Fara cost de deplasare',
    desc: 'Ridicarea si livrarea sunt incluse in pretul de 13 lei/mp. Nu platesti niciun leu in plus pentru ca stai in Racadau.',
  },
  {
    icon: '🏆',
    title: 'Experienta de peste 4 ani',
    desc: 'Am curatat sute de covoare din toate cartierele Brasovului. Stim sa tratam orice tip de covor si orice nivel de murdarie.',
  },
  {
    icon: '👶',
    title: 'Sigur pentru copii si animale',
    desc: 'Detergenti certificati, biodegradabili, fara clor. Covorul revine acasa complet sigur pentru intreaga familie.',
  },
  {
    icon: '⏱️',
    title: 'Termen de 3 zile',
    desc: 'Rapid si eficient. Covorul este gata in 3 zile lucratoare – te anuntam inainte de livrare.',
  },
  {
    icon: '📱',
    title: 'Comanda rapida',
    desc: 'Online sau telefon. Procesul de comanda dureaza 2 minute, restul il rezolvam noi.',
  },
];

const faqs = [
  {
    question: 'Veniti sa ridicati covoare din Racadau?',
    answer:
      'Da, cartierul Racadau este inclus in zona noastra de deservire gratuita. Ridicam covoare de la orice adresa din Racadau, fara costuri suplimentare de transport.',
  },
  {
    question: 'Care este pretul pentru spalarea covoarelor din Racadau?',
    answer:
      'Pretul standard este de 13 lei/mp, cu ridicare si livrare gratuita. Comanda minima este de 6 mp (78 lei). Pretul este identic cu cel din restul Brasovului.',
  },
  {
    question: 'Curatati si covoare din lana sau covoare persane?',
    answer:
      'Da, curatam orice tip de covor. Covoarele din lana naturala si covoarele persane primesc un tratament special cu produse cu pH neutru, pentru a pastra intacta fibra delicata.',
  },
  {
    question: 'Cum stabilim data pentru ridicare?',
    answer:
      'Dupa ce plasezi comanda online sau suni, iti propunem cateva date disponibile. Alegi ce ti se potriveste si la ora stabilita un coleg ANIVA vine la adresa ta din Racadau.',
  },
  {
    question: 'Pot trimite mai multe covoare deodata?',
    answer:
      'Da, poti include mai multe covoare intr-o singura comanda. Pretul se calculeaza per mp total, iar comanda minima este de 6 mp per comanda, nu per covor.',
  },
];

export default function SpelatorieCovorRacadau() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Racadau Brasov – Curatare Profesionala cu Ridicare Gratuita"
          subtitle="Locuiesti in Racadau si vrei covoare curate? ANIVA vine la tine, ridica covoarele, le curata in atelier si le aduce inapoi proaspete. Gratuit, fara deplasari din partea ta."
          badge="Racadau · 13 lei/mp · Ridicare gratuita"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Cartierul Racadau este una dintre zonele rezidentiale active ale Brasovului,
                  cu blocuri de diferite generatii si o comunitate diversa. Locatarii din Racadau
                  care aleg <strong className="text-text">ANIVA</strong> pentru curatarea
                  covoarelor beneficiaza de acelasi serviciu complet ca si restul Brasovului:
                  ridicare gratuita, curatare profesionala si livrare gratuita.
                </p>
                <p>
                  Procesul nostru in 6 pasi garanteaza curatarea in profunzime a oricarui tip
                  de covor. Folosim detergenti specializati selectati in functie de material,
                  stoarcere centrifuga si uscare in spatiu controlat cu dezumidificatoare. Nicio
                  etapa nu este sarita.
                </p>
                <p>
                  Pretul pentru covoarele din Racadau este{' '}
                  <strong className="text-text">13 lei/mp</strong>, cu comanda minima de 6 mp
                  si transport inclus gratuit. Comanda online sau suna la 0759 158 914.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce ne aleg locatarii din Racadau?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
