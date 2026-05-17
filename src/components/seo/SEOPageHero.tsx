import Link from 'next/link';

interface SEOPageHeroProps {
  h1: string;
  subtitle: string;
  badge?: string;
}

export default function SEOPageHero({ h1, subtitle, badge }: SEOPageHeroProps) {
  return (
    <section className="pt-10 pb-10 md:pt-14 md:pb-14">
      <div className="container-app">
        {badge && (
          <div className="mb-5">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 border border-white/65 text-sm font-bold text-text">
              {badge}
            </span>
          </div>
        )}
        <h1 className="section-title text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-tight">
          {h1}
        </h1>
        <p className="section-subtitle mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/comanda-online" className="btn-primary btn-cta">
            Comanda online
          </Link>
          <a href="tel:0759158914" className="btn-ghost btn-cta">
            Suna acum – 0759 158 914
          </a>
        </div>
      </div>
    </section>
  );
}
