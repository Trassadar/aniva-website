const steps = [
  {
    n: 1,
    label: 'Inspectie initiala',
    desc: 'Verificam tipul de material, structura firului si eventualele pete sau zone deteriorate inainte de a incepe procesul.',
  },
  {
    n: 2,
    label: 'Desprafuire mecanica',
    desc: 'Eliminam praful si impuritatile grosiere cu echipamente profesionale de batere, pregatind covorul pentru spalare.',
  },
  {
    n: 3,
    label: 'Aspirare in profunzime',
    desc: 'Aspiram ambele fete ale covorului pentru a elimina alergenii, acarii si particulele fine inainte de tratamentul umed.',
  },
  {
    n: 4,
    label: 'Spalare controlata',
    desc: 'Aplicam detergenti specializati, selectati in functie de tipul de material si gradul de murdarie, pentru rezultate optime.',
  },
  {
    n: 5,
    label: 'Stoarcere profesionala',
    desc: 'Eliminam apa in exces cu centrifuga profesionala pentru a reduce timpul de uscare si a preveni deformarea covorului.',
  },
  {
    n: 6,
    label: 'Uscare controlata',
    desc: 'Uscam covorul in spatiu dedicat cu dezumidificatoare si ventilatoare. Fara mirosuri neplacute, fara mucegai.',
  },
];

export default function ProcessSection() {
  return (
    <section className="mt-10 md:mt-14">
      <div className="container-app">
        <div className="card rounded-[32px] p-6 md:p-10 border border-white/40 bg-white/35 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="section-title text-2xl md:text-3xl">Procesul nostru in 6 pasi</h2>
            <p className="section-subtitle mt-2">
              Fiecare covor parcurge acelasi process complet – fara scurtaturi, fara compromisuri
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-white/70 border border-white/70 shadow-sm flex items-center justify-center font-bold text-text text-xl flex-shrink-0">
                  {s.n}
                </div>
                <div className="mt-3 text-sm font-extrabold text-text">{s.label}</div>
                <div className="mt-1 text-xs text-muted leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
