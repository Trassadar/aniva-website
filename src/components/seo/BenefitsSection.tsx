interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
  title?: string;
}

export default function BenefitsSection({
  benefits,
  title = 'De ce sa alegi ANIVA?',
}: BenefitsSectionProps) {
  return (
    <section className="mt-10 md:mt-14">
      <div className="container-app">
        <h2 className="section-title text-2xl md:text-3xl text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="border border-white/40 bg-white/35 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
            >
              <div className="text-3xl mb-3">{b.icon}</div>
              <div className="font-extrabold text-text text-base mb-2">{b.title}</div>
              <div className="text-sm text-muted leading-relaxed">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
