interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({
  faqs,
  title = 'Întrebări frecvente',
}: FAQSectionProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="mt-10 md:mt-14">
        <div className="container-app">
          <h2 className="section-title text-2xl md:text-3xl text-center mb-8">{title}</h2>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <details key={i} className="faq-item" open={i === 0}>
                <summary className="faq-q">
                  <span>{f.question}</span>
                  <span className="faq-chevron" aria-hidden />
                </summary>
                <div className="faq-a">{f.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
