import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import ProcessSection from '@/components/seo/ProcessSection';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Spalatorie Covoare Brasov de la 10 Lei/mp – Oferta ANIVA',
  description:
    'ANIVA ofera promotii de la 10 lei/mp pentru spalarea covoarelor in Brasov. Pret standard 13 lei/mp. Calitate profesionala completa, fara compromisuri. Suna pentru oferta actuala.',
  path: '/spalatorie-covoare-10-lei-mp-brasov',
});

const benefits = [
  {
    icon: '💎',
    title: 'Calitate profesionala completa',
    desc: 'Indiferent de pretul platit, procesul ANIVA ramane identic: 6 etape complete, detergenti certificati, uscare controlata.',
  },
  {
    icon: '🔍',
    title: 'Evaluare personalizata',
    desc: 'Fiecare covor este evaluat individual. Pretul final depinde de suprafata, tipul de material si gradul de murdarie.',
  },
  {
    icon: '📢',
    title: 'Promotii periodice',
    desc: 'Urmareste ofertele noastre sezoniere si promotiile speciale pentru comenzi mari sau clienti fideli.',
  },
  {
    icon: '🚚',
    title: 'Ridicare si livrare incluse',
    desc: 'Chiar si in perioadele cu oferte speciale, ridicarea si livrarea sunt gratuite in Brasov.',
  },
  {
    icon: '⏱️',
    title: 'Acelasi termen de livrare',
    desc: '3 zile lucratoare indiferent de pret. Nu reducem calitatea sau viteza pentru a reduce costul.',
  },
  {
    icon: '🤝',
    title: 'Transparenta totala',
    desc: 'Inainte de orice curatare, confirmi pretul final. Fara surprize, fara costuri nediscutate.',
  },
];

const faqs = [
  {
    question: 'ANIVA ofera intr-adevar preturi de la 10 lei/mp?',
    answer:
      'Da, ANIVA are periodic promotii si oferte speciale in care pretul poate incepe de la 10 lei/mp. Pretul standard este de 13 lei/mp. Ofertele speciale pot depinde de perioada, volumul comenzii sau alte conditii specifice. Suna-ne sau scrie-ne pe WhatsApp pentru a afla ofertele disponibile in momentul de fata.',
  },
  {
    question: 'De ce variaza pretul? Ce influenteaza costul final?',
    answer:
      'Pretul poate varia in functie de mai multi factori: suprafata totala a comenzii (comenzile mai mari beneficiaza uneori de tarife mai avantajoase), tipul de material al covorului, gradul de murdarie si daca sunt necesare tratamente suplimentare pentru pete dificile. Pretul standard de referinta este 13 lei/mp.',
  },
  {
    question: 'Calitatea curatarii este aceeasi indiferent de pret?',
    answer:
      'Absolut. Procesul ANIVA nu se schimba in functie de pret: toate cele 6 etape (inspectie, desprafuire, aspirare, spalare, stoarcere, uscare) sunt parcurse pentru fiecare covor. Detergentii utilizati sunt aceiasi, echipamentele sunt aceleasi, timpul de uscare este acelasi. Nu facem compromisuri la calitate.',
  },
  {
    question: 'Cum pot afla daca exista o oferta disponibila acum?',
    answer:
      'Cel mai rapid este sa ne suni la 0759 158 914 sau sa ne scrii pe WhatsApp. Iti spunem imediat care sunt tarifele curente si daca exista promotii active. Poti si sa plasezi o comanda online – te contactam inainte de ridicare pentru a confirma pretul exact.',
  },
  {
    question: 'Pretul de 10 lei/mp este disponibil pentru orice covor?',
    answer:
      'Pretul de la 10 lei/mp se aplica in anumite conditii promotionale. Pentru covoarele din materiale foarte delicate sau cu grade extreme de murdarie care necesita tratamente suplimentare, pretul poate fi diferit. In orice caz, confirman pretul inainte de a incepe curatarea.',
  },
  {
    question: 'Ridicarea si livrarea sunt gratuite si cand este o oferta?',
    answer:
      'Da, ridicarea si livrarea sunt gratuite in Brasov si localitatile apropiate, indiferent de pretul per mp. Acesta este un beneficiu constant al serviciului ANIVA, nu un extra optional.',
  },
  {
    question: 'Cum pot fi sigur ca nu platesc mai mult decat am inteles initial?',
    answer:
      'Inainte de ridicarea covorului, iti comunicam pretul total estimat bazat pe dimensiunile declarate. Dupa inspectia covorului in atelier, daca pretul difera semnificativ (de exemplu din cauza unor tratamente suplimentare necesare), te contactam pentru confirmare. Nu incepem curatarea fara acordul tau.',
  },
];

export default function Spalatorie10LeiMpBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Spalatorie Covoare Brasov de la 10 Lei/mp – Calitate Profesionala la Preturi Accesibile"
          subtitle="ANIVA ofera periodic promotii de la 10 lei/mp pentru spalarea covoarelor in Brasov. Pretul standard este 13 lei/mp. Calitate si proces profesional complet, indiferent de oferta."
          badge="Oferta de la 10 lei/mp · Standard 13 lei/mp"
        />

        {/* Main content */}
        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Calitatea nu trebuie sa fie sinonima cu pretul exorbitant. La{' '}
                  <strong className="text-text">ANIVA Brasov</strong>, credem ca orice familie
                  din Brasov merita sa aiba covoarele curate, igienizate si proaspete – la preturi
                  accesibile, fara compromisuri la calitatea serviciului.
                </p>
                <p>
                  Pretul nostru standard este de <strong className="text-text">13 lei/mp</strong>{' '}
                  (redus deja de la 15 lei/mp). Periodic, organizam promotii in care pretul poate
                  incepe <strong className="text-text">de la 10 lei/mp</strong> – pentru comenzi
                  mai mari, in perioadele sezoniere sau pentru clientii fideli care revin cu
                  covoare.
                </p>
                <p>
                  Este important sa intelegem ca un pret mai mic nu inseamna niciodata un serviciu
                  mai slab la ANIVA. Procesul de curatare are aceleasi 6 etape complete, aceiasi
                  detergenti certificati si acelasi timp de uscare controlata in spatiul nostru
                  dedicat. Ceea ce se schimba este marja comerciala, nu calitatea muncii.
                </p>

                {/* Price transparency box */}
                <div className="mt-6 border border-white/50 bg-white/50 rounded-2xl p-6">
                  <h2 className="font-extrabold text-text text-lg mb-4">Cum functioneaza pretul la ANIVA?</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <div>
                        <span className="font-bold text-text">Pret standard: 13 lei/mp</span>
                        <p className="text-sm text-muted mt-0.5">Valabil permanent, pentru orice comanda in Brasov.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <div>
                        <span className="font-bold text-text">Oferte promotionale: de la 10 lei/mp</span>
                        <p className="text-sm text-muted mt-0.5">Disponibile periodic – suna sau scrie-ne pe WhatsApp pentru oferta actuala.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <div>
                        <span className="font-bold text-text">Pretul variaza in functie de:</span>
                        <p className="text-sm text-muted mt-0.5">Suprafata totala, tipul de material, gradul de murdarie si serviciile optionale alese.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <div>
                        <span className="font-bold text-text">Calitatea ramane aceeasi</span>
                        <p className="text-sm text-muted mt-0.5">Indiferent de pret, procesul ANIVA in 6 pasi nu se schimba.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  Pretul final este intotdeauna confirmat inainte de inceperea curatarii. Nu
                  incepem niciun serviciu fara acordul tau explicit. Daca dimensiunile reale ale
                  covorului sau starea sa necesita o ajustare a pretului estimat, te contactam
                  inainte – nu dupa.
                </p>
                <p>
                  Vrei sa stii daca o oferta de la 10 lei/mp este disponibila in aceasta perioada?
                  Suna-ne direct la <strong className="text-text">0759 158 914</strong> sau
                  scrie-ne pe WhatsApp – iti raspundem in cateva minute cu tariful curent si
                  disponibilitatea.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <BenefitsSection benefits={benefits} title="De ce sa alegi ANIVA chiar si la pret standard?" />
        <FAQSection faqs={faqs} title="Intrebari despre preturi si oferte" />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
