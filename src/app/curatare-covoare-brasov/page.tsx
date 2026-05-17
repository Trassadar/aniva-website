import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Curatare Covoare Brasov – Curatare in Profunzime cu Rezultate Garantate | ANIVA',
  description:
    'Curatare profesionala covoare Brasov. Eliminam petele, alergenii si bacteriile din profunzimea fibrelor. Detergenti specializati, uscare controlata. 13 lei/mp, ridicare gratuita.',
  path: '/curatare-covoare-brasov',
});

const benefits = [
  {
    icon: '🔬',
    title: 'Curatare din profunzime',
    desc: 'Nu curatam doar suprafata. Procesul nostru patrunde in fibra covorului, eliminand murdaria, bacteriile si alergenii acumulati in timp.',
  },
  {
    icon: '🌿',
    title: 'Fara substante agresive',
    desc: 'Alegem produse cu pH neutru sau adaptat tipului de material. Nu utilizam substante care decoloreaza sau degradeaza fibra.',
  },
  {
    icon: '🛡️',
    title: 'Eliminare alergeni certificata',
    desc: 'Procesul nostru de curatare elimina acarii de praf, sporii de mucegai si alte substante alergenice care provoaca probleme respiratorii.',
  },
  {
    icon: '🌀',
    title: 'Stoarcere si uscare corecta',
    desc: 'Dupa curatare, eliminam apa in exces si uscam covorul in conditii controlate – fara risc de mucegai sau deformare.',
  },
  {
    icon: '🚚',
    title: 'Ridicare si livrare gratuita',
    desc: 'Ridicam covorul de la tine din Brasov, il curatam in atelier si il aducem inapoi – tot procesul fara deplasari suplimentare din partea ta.',
  },
  {
    icon: '💰',
    title: 'Pret accesibil, calitate premium',
    desc: 'Curatarea profesionala nu trebuie sa fie scumpa. La 13 lei/mp obtii un serviciu complet, fara costuri ascunse.',
  },
];

const faqs = [
  {
    question: 'Curatarea profesionala a covoarelor difera de simpla spalare?',
    answer:
      'Da. Curatarea profesionala include etape pe care spalarea simpla nu le acopera: pre-tratamentul petelor, desprafuirea mecanica, aspirarea profunda, spalarea cu detergenti selectati si uscarea controlata. Rezultatul este un covor nu doar curat vizual, ci si igienizat si lipsit de alergeni.',
  },
  {
    question: 'Cat de des trebuie curatat un covor profesional?',
    answer:
      'Pentru familiile cu copii sau animale de companie, recomandam curatarea o data la 6-12 luni. Pentru covoarele amplasate in zone mai putin circulate, o data la 1-2 ani este suficient. Covoarele din holuri si intrari, care acumuleaza murdaria de afara, beneficiaza de curatare mai frecventa.',
  },
  {
    question: 'Puteti indeparta petele vechi sau inglobate?',
    answer:
      'In cele mai multe cazuri, da. Aplicam pre-tratamente specifice in functie de tipul de pata (grease, tanin, proteina, cerneala etc.). Petele vechi sau cele tratate anterior cu produse nepotrivite pot fi mai dificil de eliminat complet, dar imbunatatim vizibil aspectul in orice situatie.',
  },
  {
    question: 'Ce se intampla cu covoarele din materiale delicate?',
    answer:
      'Inainte de curatare, inspectam fiecare covor si selectam produsele si metodele potrivite. Covoarele din lana, matase sau tesaturi delicate primesc un tratament adaptat: pH neutru, presiune scazuta si uscare lenta pentru a pastra fibra intacta.',
  },
  {
    question: 'Curatati si covoarele cu defecte – pete de vopsea, ars, deformat?',
    answer:
      'Curatam orice covor, indiferent de starea sa. Daca exista defecte suplimentare (margini desfacute, ars, deformat), le mentionam la inspectia initiala si, la cerere, putem oferi si servicii de festonat sau reparatii.',
  },
];

export default function CuratareCovoreBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Curatare Covoare Brasov – Curatare in Profunzime cu Rezultate Vizibile"
          subtitle="Covorul tau merita mai mult decat o stergere la suprafata. La ANIVA, curatam fibra din radacina – eliminam petele, alergenii si mirosurile cu un proces profesional complet."
          badge="13 lei/mp · Gratuit ridicare si livrare"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Un covor arata curat atunci cand nu are murdarie vizibila, dar aceasta nu
                  inseamna ca este curat in realitate. In fibra chiar si a celui mai ingrijit covor
                  se gasesc, dupa cateva luni de utilizare, milioane de acari de praf, bacterii,
                  alergeni si particule fine de murdarie care nu se vad cu ochiul liber.
                </p>
                <p>
                  <strong className="text-text">Curatarea profesionala</strong> la ANIVA Brasov
                  inseamna un proces complet care adreseaza exact aceasta problema: eliminam
                  murdaria din profunzimea fibrelor, nu doar de la suprafata. Folosim echipamente
                  profesionale si detergenti selectati in functie de tipul fiecarui covor.
                </p>
                <p>
                  Un avantaj important al curatarii in atelier fata de curatarea la domiciliu este
                  posibilitatea de uscare corecta. Dupa curatare, un covor are nevoie de uscare
                  uniforma in conditii controlate. In spatiul nostru dedicat, folosim
                  dezumidificatoare si ventilatoare industriale care usuca covorul complet, fara
                  risc de mucegai sau mirosuri neplacute.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="Avantajele curatarii profesionale ANIVA" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
