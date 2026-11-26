// Articol de blog. Functii: generateStaticParams, generateMetadata, ArticlePage, RichText.

import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata as genMeta } from '@/lib/seo';
import { getAllArticles, getArticle } from '@/lib/articles';

const baseUrl = 'https://www.spalatoriaaniva.ro';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return genMeta({
    title: `${article.title} | ANIVA Brașov`,
    description: article.description,
    path: `/blog/${article.slug}`,
  });
}

function RichText({ text }: { text: string }) {
  const re = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push(
      <Link key={key} href={match[2]} className="underline underline-offset-4 text-text font-semibold">
        {match[1]}
      </Link>
    );
    key += 1;
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${baseUrl}/blog/${article.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    inLanguage: 'ro-RO',
    datePublished: article.published,
    dateModified: article.published,
    mainEntityOfPage: url,
    image: `${baseUrl}/images/logo-aniva.webp`,
    author: {
      '@type': 'Organization',
      name: 'ANIVA – Spălătorie Covoare Brașov',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ANIVA – Spălătorie Covoare Brașov',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo-aniva.webp`,
      },
    },
  };

  const others = getAllArticles().filter((item) => item.slug !== article.slug);

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <article className="pt-10 pb-16 md:pt-14">
          <div className="container-app max-w-3xl">
            <p className="text-sm text-muted">
              <Link href="/blog" className="underline underline-offset-4">
                Blog
              </Link>
              <span> · {article.published}</span>
            </p>
            <h1 className="section-title text-3xl md:text-5xl mt-3">{article.title}</h1>
            <p className="section-subtitle mt-4 text-base md:text-lg">{article.description}</p>

            <div className="mt-8 space-y-4 text-muted leading-relaxed">
              {article.blocks.map((block, index) => {
                if (block.type === 'h2') {
                  return (
                    <h2 key={index} className="font-extrabold text-text text-2xl pt-4">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'ul') {
                  return (
                    <ul key={index} className="list-disc pl-5 space-y-2">
                      {(block.items ?? []).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index}>
                    <RichText text={block.text ?? ''} />
                  </p>
                );
              })}
            </div>

            <div className="mt-10 border border-white/40 bg-white/35 backdrop-blur-xl rounded-[28px] p-6 shadow-xl">
              <h2 className="font-extrabold text-text text-xl">Vrei să ridicăm covorul?</h2>
              <p className="mt-2 text-muted leading-relaxed">
                Spălare 13 lei/mp, minim 6 mp în Brașov. Venim la adresă și aducem covorul înapoi, de obicei în 3 zile lucrătoare.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link href="/comanda-online" className="btn-primary btn-cta">
                  Comandă online
                </Link>
                <Link href="/" className="btn-ghost btn-cta">
                  Pagina principală
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-extrabold text-text text-lg">Alte ghiduri</h2>
              <ul className="mt-3 space-y-2">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/blog/${item.slug}`} className="underline underline-offset-4 text-text font-semibold">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
