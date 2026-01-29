'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingActions() {
  return (
    <>
      {/* Desktop: Call and WhatsApp Buttons (bottom right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col space-y-3">
        <motion.a
        href="tel:0759158914"
        aria-label="Suna acum"
          className="bg-emerald hover:bg-emerald/90 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          title="Suna Acum"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-7 h-7" />
        </motion.a>

        <motion.a
          href="https://wa.me/40759158914?text=Salut%20Aniva%2C%20vreau%20sa%20fac%20o%20comanda"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trimite mesaj pe WhatsApp"
          className="bg-whatsapp hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          title="WhatsApp"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
      </div>

      {/* Mobile: Call Button (bottom center) */}
      <motion.a
        href="tel:0759158914"
        aria-label="Suna acum"
        className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-emerald text-white px-8 py-4 rounded-full shadow-2xl flex items-center justify-center gap-3 transition-all duration-300 font-bold text-lg"
        title="Sunati Acum"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="w-6 h-6" />
        <span>Sunati Acum</span>
      </motion.a>

      {/* Mobile: WhatsApp Button (bottom right) */}
      <motion.a
        href="https://wa.me/40759158914?text=Salut%20Aniva%2C%20vreau%20sa%20fac%20o%20comanda"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Trimite mesaj pe WhatsApp"
        className="md:hidden fixed bottom-4 right-4 z-50 bg-whatsapp hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
        title="WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </>
  );
}
