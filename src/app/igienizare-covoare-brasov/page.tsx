import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Igienizare Covoare Brasov – Eliminare Bacterii, Acari si Alergeni | ANIVA',
  description:
    'Igienizare profesionala covoare in Brasov. Eliminam bacteriile, acarii si alergenii din profunzimea fibrelor. Detergenti certificati, siguri pentru intreaga familie. 13 lei/mp.',
  path: '/igienizare-covoare-brasov',
});

const benefits = [
  {
    icon: '🦠',
    title: 'Eliminare bacterii si acari',
    desc: 'Procesul nostru elimina bacteriile, acarii de praf si alergenii care se acumuleaza in fibra covoarelor si afecteaza sanatatea.',
  },
  {
    icon: '🌿',
    title: 'Detergenti anti-acar certificati',
    desc: 'Folosim produse specializate anti-acar si anti-bacteriene, certificate si testate, sigure pentru copii si animale.',
  },
  {
    icon: '💨',
    title: 'Calitate aer imbunatatita',
    desc: 'Un covor igienizat profesional contribuie la reducerea alergenilor din aerul incaperii, benefic pentru persoanele cu alergii.',
  },
  {
    icon: '👶',
    title: 'Sigur pentru copii',
    desc: 'Copiii petrec mult timp pe covoare. Igienizarea regulata creeaza un mediu mai sigur si mai sanatos pentru cei mici.',
  },
  {
    icon: '🚫',
    title: 'Eliminare mirosuri',
    desc: 'Bacteriile sunt principala cauza a mirosurilor neplacute din covoare. Igienizarea elimina mirosul din radacina, nu il mascheaza.',
  },
  {
    icon: '✅',
    title: 'Inclus in procesul standard',
    desc: 'Igienizarea anti-acar si anti-bacteriana este inclusa in serviciul nostru standard de spalare covoare, fara cost suplimentar.',
  },
];

const faqs = [
  {
    question: 'Ce inseamna igienizarea unui covor si cum difera de simpla spalare?',
    answer:
      'Spalarea curata murdaria vizibila – petele, praful, mirosurile de suprafata. Igienizarea merge mai departe: tratam fibra cu produse anti-acar, anti-bacteriene si anti-fungice care elimina microorganismele invizibile cu ochiul liber. La ANIVA, igienizarea este inclusa in fiecare spalare standard – nu este un serviciu separat.',
  },
  {
    question: 'Ce microorganisme elimina igienizarea profesionala?',
    answer:
      'Igienizarea profesionala elimina sau reduce semnificativ: acarii de praf (Dermatophagoides pteronyssinus), bacterii comune (E. coli, Staphylococcus), sporii de mucegai si alte substante alergenice. Rezultatele depind de gradul de infestare initial si de tipul de material al covorului.',
  },
  {
    question: 'Cat de des trebuie igienizate covoarele?',
    answer:
      'Pentru o casa cu copii sau animale de companie, recomandam igienizarea de 1-2 ori pe an. Pentru un apartament fara copii si fara animale, o data la 1-2 ani este suficient. Covoarele din holuri si intrari, care aduna murdaria de afara, beneficiaza de igienizare mai frecventa.',
  },
  {
    question: 'Sunt produsele de igienizare sigure pentru copii si animale?',
    answer:
      'Da, folosim exclusiv produse certificate, biodegradabile, fara clor si fara substante toxice. Dupa uscare completa (3-4 ore), covorul este complet sigur pentru copii si animale. Nu lasam reziduuri chimice active in fibra.',
  },
  {
    question: 'Igienizarea ajuta cu alergiile la acari?',
    answer:
      'Da, in mod direct. Acarii de praf sunt o cauza frecventa de rinita alergica, astm si eczeme. Reducerea drastica a populatiei de acari din covoare – prin igienizarea profesionala – duce la mai putini alergeni in aerul respirat zilnic. Multi clienti cu alergii ne spun ca observa o imbunatatire dupa curatarea covoarelor.',
  },
];

export default function IgienizareCovoreBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Igienizare Covoare Brasov – Eliminare Bacterii, Acari si Alergeni"
          subtitle="Nu toate problemele unui covor se vad. La ANIVA, igienizam covoarele in profunzime, eliminand bacteriile, acarii si alergenii care afecteaza sanatatea familiei tale – inclus in orice spalare."
          badge="13 lei/mp · Igienizare inclusa"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Intr-un covor care arata curat pot trai zeci de mii de acari de praf, sute de
                  tipuri de bacterii si milioane de spori de mucegai – complet invizibili cu ochiul
                  liber. Acestia sunt principalii vinovati pentru alergiile la praf, stranutul
                  frecvent, ochii iriati si problemele respiratorii care apar mai ales inainte
                  de culcare, cand stai aproape de covor.
                </p>
                <p>
                  La <strong className="text-text">ANIVA Brasov</strong>, igienizarea nu este un
                  extra optional – este parte integranta din procesul nostru standard de spalare.
                  Fiecare covor primit primeste un tratament cu produse anti-acar si anti-bacteriene
                  certificate, aplicate in etapa de spalare controlata. Nu mascam mirosurile cu
                  parfumuri, ci eliminam sursa lor.
                </p>
                <p>
                  Efectele igienizarii sunt vizibile: culori mai vii (fara praful care le
                  stinge), miros proaspat natural si un mediu mai sanatos pentru intreaga familie.
                  Pretul este acelasi: <strong className="text-text">13 lei/mp</strong> cu
                  ridicare si livrare gratuita in Brasov.
                </p>

                {/* Alergeni list */}
                <div className="mt-6 border border-white/50 bg-white/50 rounded-2xl p-6">
                  <h2 className="font-extrabold text-text text-lg mb-3">Ce eliminam prin igienizare?</h2>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      'Acari de praf (Dermatophagoides)',
                      'Dejectii ale acarilor (alergen principal)',
                      'Bacterii comune (E. coli, Staph)',
                      'Spori de mucegai',
                      'Praf fin si particule PM2.5',
                      'Polen si alergeni sezonieri',
                      'Fire de par ale animalelor de companie',
                      'Mirosuri de origine bacteriana',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-muted">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="Beneficiile igienizarii profesionale ANIVA" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
