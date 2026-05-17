import Link from 'next/link';

export default function CTASectionSEO() {
  return (
    <section className="mt-10 md:mt-14 mb-16">
      <div className="container-app">
        <div className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[32px] p-8 md:p-12 text-center shadow-2xl">
          <h2 className="section-title text-2xl md:text-3xl mb-4">
            Gata sa trimiti covorul la curatat?
          </h2>
          <p className="section-subtitle mb-8 max-w-xl mx-auto">
            Comanda online in 2 minute sau suna-ne direct. Ridicam covorul de la tine si il
            aducem inapoi curat, proaspat si uscat – gratuit in Brasov.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/comanda-online" className="btn-primary btn-cta">
              Comanda online
            </Link>
            <a href="tel:0759158914" className="btn-secondary btn-cta">
              Suna – 0759 158 914
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
            Program: Luni – Vineri 08:00–18:00 · Sambata 09:00–13:00
          </p>
        </div>
      </div>
    </section>
  );
}
