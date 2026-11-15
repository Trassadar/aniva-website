import { Phone, Truck, Sparkles, Home } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: Phone,
    title: "Ne suni",
    text: "Suni la 0759 158 914 sau completezi formularul online și stabilim ziua ridicării.",
  },
  {
    icon: Truck,
    title: "Ridicăm",
    text: "Venim la adresa ta și luăm covoarele. Ridicarea este gratuită.",
  },
  {
    icon: Sparkles,
    title: "Spălăm",
    text: "Desprăfuire, spălare controlată și uscare în spațiu dedicat, fără substanțe agresive.",
  },
  {
    icon: Home,
    title: "Livrăm",
    text: "De obicei în 3 zile lucrătoare îți aducem covoarele curate acasă, tot gratuit.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-10 md:mt-16" aria-labelledby="cum-functioneaza">
      <div className="container-app">
        <Reveal className="text-center">
          <h2 id="cum-functioneaza" className="section-title text-3xl md:text-4xl">
            Cum funcționează
          </h2>
          <p className="section-subtitle mt-3 max-w-2xl mx-auto">
            Nu trebuie să cari covoarele nicăieri. Preluăm doar de la domiciliu și le aducem înapoi curate.
          </p>
        </Reveal>

        <ol className="steps mt-10">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="step">
              <div className="step-ic">
                <s.icon className="h-6 w-6" aria-hidden />
                <span className="step-n">{i + 1}</span>
              </div>
              <h3 className="mt-4 font-extrabold text-text text-lg">{s.title}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
