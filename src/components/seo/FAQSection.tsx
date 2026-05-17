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
  title = 'Intrebari frecvente',
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
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
              >
                <div className="font-extrabold text-text mb-2">{f.question}</div>
                <div className="text-sm text-muted leading-relaxed">{f.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
