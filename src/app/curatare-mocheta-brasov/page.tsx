import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Curatare Mocheta Brasov – Aspirare si Spalare Profesionala | ANIVA',
  description:
    'Curatare profesionala mocheta in Brasov. Aspirare profunda, tratamente anti-pete, eliminare alergeni. Serviciu la cerere – contacteaza-ne pentru oferta personalizata.',
  path: '/curatare-mocheta-brasov',
});

const benefits = [
  {
    icon: '🧹',
    title: 'Aspirare in profunzime',
    desc: 'Mocheta retine cantitati uriase de praf, fire de par si alergeni. Echipamentele noastre aspira pana la nivelul firelor de baza.',
  },
  {
    icon: '🌊',
    title: 'Curatare cu extractie',
    desc: 'Injectam solutii de curatare in fibra mochetei si le extragem imediat impreuna cu murdaria, fara a lasa reziduuri.',
  },
  {
    icon: '🛡️',
    title: 'Eliminare acarieni si alergeni',
    desc: 'Mocheta este un mediu ideal pentru acari de praf. Curatarea profesionala reduce dramatic prezenta alergenilor.',
  },
  {
    icon: '🌿',
    title: 'Produse fara reziduri',
    desc: 'Produsele pe care le folosim sunt rinse complet in procesul de extractie. Nu raman reziduuri chimice in fibra.',
  },
  {
    icon: '⚡',
    title: 'Uscare rapida',
    desc: 'Metoda de extractie elimina cea mai mare parte din umiditate. Mocheta este utilizabila din nou in 4-6 ore.',
  },
  {
    icon: '📞',
    title: 'Oferta la cerere',
    desc: 'Pretul se calculeaza in functie de suprafata si tipul mochetei. Suna pentru o oferta personalizata pentru spatiul tau.',
  },
];

const faqs = [
  {
    question: 'Curatati mocheta la domiciliu sau in atelier?',
    answer:
      'Curatarea mochetei se face in general la domiciliu, deoarece mocheta este fixata sau greu de transportat. Contacteaza-ne pentru a discuta detaliile si a stabili o programare.',
  },
  {
    question: 'Cat costa curatarea mochetei in Brasov?',
    answer:
      'Pretul depinde de suprafata mochetei, tipul de material si gradul de murdarie. Curatarea mochetei este disponibila la cerere – contacteaza-ne la 0759 158 914 sau pe WhatsApp pentru o oferta personalizata.',
  },
  {
    question: 'Cat dureaza curatarea si cand pot folosi incaperea din nou?',
    answer:
      'Curatarea propriu-zisa dureaza 1-4 ore in functie de suprafata. Uscarea dureaza in jur de 4-6 ore, in functie de ventilatie si temperatura. Recomandam sa aerisiti incaperea dupa curatare.',
  },
  {
    question: 'Curatarea umeda deterioreaza mocheta?',
    answer:
      'Nu, daca este facuta corect. Metoda de injectie-extractie pe care o folosim introduce o cantitate controlata de solutie si o extrage imediat impreuna cu murdaria. Mocheta nu este saturata cu apa, deci riscul de deteriorare sau mucegai este minim.',
  },
  {
    question: 'Puteti trata mocheta cu agent de protectie impotriva petelor?',
    answer:
      'Da, la cerere, putem aplica un tratament de protectie (impermeabilizare) dupa curatare. Acesta formeaza o bariera invizibila care respinge lichidele si reduce absorbirea petelor in viitor. Intreaba-ne despre acest serviciu optional.',
  },
];

export default function CuratareMochetaBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Curatare Mocheta Brasov – Spalare si Igienizare Profesionala"
          subtitle="Mocheta colecteaza praf, alergeni si bacterii pe care aspiratorul obisnuit nu le poate elimina. La ANIVA, curatam mocheta cu echipamente profesionale de injectie-extractie."
          badge="Serviciu la cerere · Oferta personalizata"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Mocheta este una dintre cele mai eficiente suprafete la captarea prafului si
                  alergenilor din aer – ceea ce o face excelenta pentru calitatea aerului din
                  incapere, dar si o provocare in ceea ce priveste curatenia. Chiar si cu
                  aspiratul zilnic, in fibra mochetei se acumuleaza murdarie pe care echipamentele
                  de uz casnic nu o pot extrage.
                </p>
                <p>
                  La <strong className="text-text">ANIVA Brasov</strong>, curatam mocheta cu
                  echipamente profesionale de injectie-extractie: injectam o solutie de curatare
                  in fibra, agitam murdaria si o extragem imediat cu aspiratia de inalta putere.
                  Rezultatul este o mocheta curata in profunzime, fara reziduuri si cu timp de
                  uscare redus.
                </p>
                <p>
                  Curatarea mochetei este disponibila{' '}
                  <strong className="text-text">la cerere</strong>. Pretul se calculeaza in
                  functie de suprafata, tipul de material si gradul de murdarie. Contacteaza-ne
                  pentru o oferta personalizata.
                </p>

                {/* When to clean mocheta */}
                <div className="mt-6 border border-white/50 bg-white/50 rounded-2xl p-6">
                  <h2 className="font-extrabold text-text text-lg mb-3">Cand ai nevoie de curatare profesionala a mochetei?</h2>
                  <ul className="space-y-2 text-sm">
                    {[
                      'Mocheta are pete vizibile care nu dispar la aspirare',
                      'Simti un miros persistent in incapere, chiar si dupa aerisire',
                      'Un membru al familiei sufera de alergii sau astm',
                      'Au trecut mai mult de 12 luni de la ultima curatare profesionala',
                      'Ai animale de companie care stau in incapere',
                      'Mocheta arata mai inchisa la culoare decat era initial',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-text mt-0.5">→</span>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BenefitsSection benefits={benefits} title="De ce sa alegi ANIVA pentru mocheta ta?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
