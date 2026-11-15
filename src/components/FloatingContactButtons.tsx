import { Phone, MessageCircle } from "lucide-react";

const WA = "https://wa.me/40759158914?text=Salut%20ANIVA%2C%20vreau%20sa%20fac%20o%20comanda";

export default function FloatingContactButtons() {
  return (
    <>
      {/* Mobil: bară fixă jos, mereu la îndemână */}
      <div className="mobile-callbar md:hidden" role="region" aria-label="Contact rapid">
        <a href="tel:0759158914" className="mobile-callbar-call" aria-label="Sună acum la 0759 158 914">
          <Phone className="h-5 w-5 call-ring" aria-hidden />
          <span>Sună acum</span>
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-callbar-wa"
          aria-label="Trimite mesaj pe WhatsApp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop: butoane plutitoare */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href="tel:0759158914"
          className="float-btn bg-[#1c1410] focus-visible:ring-[#1c1410]"
          aria-label="Sună acum la 0759 158 914"
        >
          <Phone className="w-5 h-5 call-ring" aria-hidden />
          <span className="text-sm font-semibold">Sună: 0759 158 914</span>
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn bg-[#25D366] focus-visible:ring-[#25D366]"
          aria-label="Trimite mesaj pe WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>
      </div>
    </>
  );
}
