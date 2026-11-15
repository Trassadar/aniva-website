import Link from 'next/link';

export default function CTASectionSEO() {
  return (
    <section className="mt-10 md:mt-14 mb-16">
      <div className="container-app">
        <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-8 md:p-12 text-center shadow-2xl">
          <h2 className="section-title text-2xl md:text-3xl mb-4">
            Gata să trimiți covorul la spălat?
          </h2>
          <p className="section-subtitle mb-8 max-w-xl mx-auto">
            Comandă online sau sună-ne direct. Ridicăm covorul și îl
            aducem înapoi uscat, gratuit în Brașov și în zonele deservite.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/comanda-online" className="btn-primary btn-cta">
              Comandă online
            </Link>
            <a href="tel:0759158914" className="btn-secondary btn-cta">
              Sună – 0759 158 914
            </a>
            <a
              href="https://wa.me/40759158914?text=Salut%20ANIVA%2C%20vreau%20sa%20fac%20o%20comanda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-cta"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-6 text-xs text-muted">
            Program: luni–vineri 08:00–18:00 · sâmbătă 09:00–13:00
          </p>
        </div>
      </div>
    </section>
  );
}
