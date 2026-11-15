const steps = [
  {
    n: 1,
    label: 'Inspecție inițială',
    desc: 'Verificăm tipul de material, structura firului și eventualele pete sau zone deteriorate înainte de a începe procesul.',
  },
  {
    n: 2,
    label: 'Desprăfuire mecanică',
    desc: 'Eliminăm praful și impuritățile grosiere, pregătind covorul pentru spălare.',
  },
  {
    n: 3,
    label: 'Aspirare în profunzime',
    desc: 'Aspirăm ambele fețe ale covorului pentru a elimina praful fin înainte de tratamentul umed.',
  },
  {
    n: 4,
    label: 'Spălare controlată',
    desc: 'Aplicăm detergenți aleși după material și după gradul de murdărie, fără substanțe agresive.',
  },
  {
    n: 5,
    label: 'Stoarcere',
    desc: 'Eliminăm apa în exces prin stoarcere, ca să scurtăm uscarea și să nu rămână covorul ud.',
  },
  {
    n: 6,
    label: 'Uscare controlată',
    desc: 'Uscăm covorul în spațiu dedicat, cu dezumidificatoare și ventilatoare, ca să nu rămână miros de umezeală.',
  },
];

export default function ProcessSection() {
  return (
    <section className="mt-10 md:mt-14">
      <div className="container-app">
        <div className="card rounded-[32px] p-6 md:p-10 border border-white/40 bg-white/35 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="section-title text-2xl md:text-3xl">Procesul în 6 pași</h2>
            <p className="section-subtitle mt-2">
              Fiecare covor parcurge aceiași pași. Prețul de 13 lei/mp nu taie etape.
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
