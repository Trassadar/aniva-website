// Indexul blogului. Functii: BlogIndex.

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata } from '@/lib/seo';
import { getAllArticles } from '@/lib/articles';

export const metadata = generateMetadata({
  title: 'Blog | Spălătorie covoare Brașov | ANIVA',
  description:
    'Ghiduri scurte: pete de vin pe covor, cât de des se spală covoarele și diferența dintre lână și sintetic. Ridicare de acasă în Brașov, 13 lei/mp.',
  path: '/blog',
});

function formatDate(iso: string) {
  const [year, month, day] = iso.split('-');
  const months = [
    'ianuarie',
    'februarie',
    'martie',
    'aprilie',
    'mai',
    'iunie',
    'iulie',
    'august',
    'septembrie',
    'octombrie',
    'noiembrie',
    'decembrie',
  ];
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

export default function BlogIndex() {
  const articles = getAllArticles();
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://www.spalatoriaaniva.ro/blog/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
        <section className="pt-10 pb-6 md:pt-14">
          <div className="container-app">
            <h1 className="section-title text-3xl md:text-5xl max-w-3xl">
              Ghiduri pentru covoare, de la spălătoria din Brașov
            </h1>
            <p className="section-subtitle mt-4 max-w-2xl text-base md:text-lg">
              Sfaturi practice, fără rețete minune. Când covorul are nevoie de atelier,{' '}
              <Link href="/" className="underline underline-offset-4 text-text font-semibold">
                spălarea este 13 lei/mp
              </Link>
              , cu ridicare de la domiciliu.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-app grid grid-cols-1 gap-5">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-[28px] p-6 md:p-8 shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {formatDate(article.published)}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-text">
                  <Link href={`/blog/${article.slug}`} className="hover:underline underline-offset-4">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 text-muted leading-relaxed max-w-3xl">{article.description}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex mt-4 text-sm font-bold text-text underline underline-offset-4"
                >
                  Citește ghidul
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
