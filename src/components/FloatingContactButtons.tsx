'use client';

import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <Link
        href="tel:0759158914"
        className="flex items-center justify-center gap-2 rounded-full bg-[#1c1410] text-white px-5 py-3 shadow-lg hover:opacity-90 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#1c1410] focus:ring-offset-2"
        aria-label="Suna acum la 0759158914"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">Suna</span>
      </Link>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/40759158914?text=Salut%20ANIVA%2C%20vreau%20sa%20fac%20o%20comanda"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 shadow-lg hover:opacity-90 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Trimite mesaj pe WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </Link>
    </div>
  );
}
