import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import SEOPageHero from '@/components/seo/SEOPageHero';
import BenefitsSection from '@/components/seo/BenefitsSection';
import FAQSection from '@/components/seo/FAQSection';
import CTASectionSEO from '@/components/seo/CTASectionSEO';

export const metadata = generateMetadata({
  title: 'Curatare Saltele Brasov – Igienizare Profesionala pentru un Somn Sanatos | ANIVA',
  description:
    'Curatare si igienizare saltele in Brasov. Eliminam acarii, bacteriile si petele. Serviciu la cerere – contacteaza-ne pentru oferta si disponibilitate.',
  path: '/curatare-saltele-brasov',
});

const benefits = [
  {
    icon: '🛏️',
    title: 'Eliminare acari si bacterii',
    desc: 'Salteaua ta gazduieste milioane de acari de praf invizibili. Curatarea profesionala ii elimina, reducand alergiile si problemele respiratorii.',
  },
  {
    icon: '🌿',
    title: 'Produse certificate',
    desc: 'Folosim produse anti-acar si anti-bacteriene certificate, sigure pentru adulti, copii si animale. Fara parfumuri agresive.',
  },
  {
    icon: '💧',
    title: 'Curatare fara a uda excesiv',
    desc: 'Metoda noastra curata in profunzime fara a satura salteaua cu apa, evitand riscul de mucegai interior.',
  },
  {
    icon: '😴',
    title: 'Somn mai sanatos',
    desc: 'O saltea curata si igienizata inseamna mai putini alergeni in aer pe timp de noapte si un somn mai odihnitor.',
  },
  {
    icon: '🔍',
    title: 'Tratament pete',
    desc: 'Tratam petele specifice salteleor: transpiratia, urina, ketchup, cafea – cu produse specializate pentru fiecare tip.',
  },
  {
    icon: '📞',
    title: 'Oferta la cerere',
    desc: 'Pretul se stabileste in functie de dimensiunea saltelei si gradul de curatare necesar. Suna pentru o oferta personalizata.',
  },
];

const faqs = [
  {
    question: 'Cat de des trebuie curatata o saltea profesional?',
    answer:
      'Specialistii recomanda curatarea profesionala a saltelei cel putin o data la 1-2 ani. Daca ai copii mici, animale de companie sau suferi de alergii, curatarea anuala este recomandata. O saltea de 8 ani poate contine pana la 10 milioane de acari de praf.',
  },
  {
    question: 'Curatati saltele la domiciliu?',
    answer:
      'Da, curatarea saltelelor se face la domiciliu, deoarece transportul este dificil. Contacteaza-ne pentru a discuta detaliile si a stabili o programare.',
  },
  {
    question: 'Cat costa curatarea unei saltele in Brasov?',
    answer:
      'Pretul depinde de dimensiunea saltelei (single, double, king) si de tratamentele necesare. Curatarea este disponibila la cerere – contacteaza-ne la 0759 158 914 pentru o oferta personalizata.',
  },
  {
    question: 'Curatarea saltelei este sigura? Nu se va deteriora?',
    answer:
      'Da, complet sigura. Folosim metode si produse special concepute pentru saltele, care curata in profunzime fara a deteriora materialele interioare (spuma, arcuri, latex). Nu vom uda excesiv salteaua pentru a evita mucegaiul interior.',
  },
  {
    question: 'In cat timp pot folosi salteaua dupa curatare?',
    answer:
      'In general, salteaua este uscata si gata de utilizare in 2-4 ore dupa curatare. Recomandam sa ventilati camera in aceasta perioada pentru o uscare mai rapida.',
  },
];

export default function CuratareSalteleBrasov() {
  return (
    <>
      <Header />
      <main>
        <SEOPageHero
          h1="Curatare Saltele Brasov – Igienizare in Profunzime pentru un Somn Sanatos"
          subtitle="Petrecem o treime din viata pe saltea. La ANIVA, igienizam saltelele cu echipamente profesionale si produse certificate, eliminand acarii, bacteriile si petele."
          badge="Serviciu la cerere · Oferta personalizata"
        />

        <section className="mt-4 md:mt-6">
          <div className="container-app">
            <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-6 md:p-10 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-5 text-muted leading-relaxed">
                <p>
                  Salteaua este unul dintre cele mai utilizate obiecte din casa, dar si unul
                  dintre cele mai neglijate in ceea ce priveste curatarea. In timp, o saltea
                  acumuleaza transpiratie, celule moarte ale pielii, acari de praf, bacterii si
                  uneori pete din accidente – toate invizibile la suprafata, dar cu impact real
                  asupra calitatii somnului si sanatatii.
                </p>
                <p>
                  La <strong className="text-text">ANIVA Brasov</strong>, curatam si igienizam
                  saltelele la domiciliu cu echipamente profesionale si produse certificate anti-acar,
                  anti-bacteriene. Procesul nu uzeaza materialele saltelei si nu creeaza risc de
                  mucegai interior – deoarece nu saturarem salteaua cu apa.
                </p>
                <p>
                  Curatarea saltelelor este disponibila{' '}
                  <strong className="text-text">la cerere</strong>. Contacteaza-ne pentru o
                  programare si o oferta adaptata dimensiunii si starii saltelei tale.
                </p>

                {/* Health info box */}
                <div className="mt-6 border border-white/50 bg-white/50 rounded-2xl p-6">
                  <h2 className="font-extrabold text-text text-lg mb-3">De ce conteaza curatarea saltelei?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {[
                      { fact: 'Acari invizibili', detail: 'O saltea de 2 ani poate adaposti pana la 2 milioane de acari de praf.' },
                      { fact: 'Alergeni nocturni', detail: 'Dejectiile acarilor sunt printre cei mai puternici alergeni din spatiile interioare.' },
                      { fact: 'Probleme respiratorii', detail: 'Acarii si bacteriile pot agrava astmul, rinita alergica si alte afectiuni respiratorii.' },
                      { fact: 'Calitate somn', detail: 'Un mediu de somn curat si lipsit de alergeni imbunatateste calitatea odihnei.' },
                    ].map((item) => (
                      <div key={item.fact}>
                        <div className="font-bold text-text mb-1">{item.fact}</div>
                        <div className="text-muted">{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BenefitsSection benefits={benefits} title="De ce sa alegi ANIVA pentru curatarea saltelei?" />
        <FAQSection faqs={faqs} />
        <CTASectionSEO />
      </main>
      <Footer />
    </>
  );
}
