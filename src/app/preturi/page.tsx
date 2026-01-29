'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calculator, Ruler, CheckCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Preturi() {
  const [area, setArea] = useState(10);
  
  const pricePerMp = 11;
  const minOrder = 7;
  const minPrice = minOrder * pricePerMp;
  const maxArea = 50;

  const calculatePrice = () => {
    const finalArea = Math.max(area, minOrder);
    const price = finalArea * pricePerMp;
    return {
      area: finalArea.toFixed(1),
      price: price.toFixed(2),
      meetsMinimum: area >= minOrder,
      originalArea: area
    };
  };

  const result = calculatePrice();

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white pt-32 pb-24 section-spacing relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-gold">
                Preturi Transparente
              </h1>
              <p className="text-2xl mb-8 text-secondary max-w-3xl mx-auto leading-relaxed">
                Preturi clare si competitive pentru servicii de calitate
              </p>
            </motion.div>
          </div>
        </section>

        {/* Preturi Section */}
        <section className="py-20 bg-emerald section-spacing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator with Slider */}
              <motion.div 
                className="glass-strong rounded-3xl p-10 border border-custom"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <Calculator className="w-10 h-10 text-gold" />
                  <h2 className="text-3xl font-serif font-bold text-gold">Calculator Preturi</h2>
                </div>
                
                <p className="text-lg text-secondary mb-8 leading-relaxed">
                  Glisati pentru a selecta suprafata covorului:
                </p>

                <div className="mb-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-secondary font-medium">Suprafata (mp)</span>
                    <motion.span 
                      className="text-3xl font-serif font-bold text-gold"
                      key={area}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {area.toFixed(1)} mp
                    </motion.span>
                  </div>
                  
                  <input
                    type="range"
                    min="1"
                    max={maxArea}
                    step="0.5"
                    value={area}
                    onChange={(e) => setArea(parseFloat(e.target.value))}
                    className="range-slider w-full"
                    style={{
                      background: `linear-gradient(to right, #fef3c7 0%, #fef3c7 ${((area - 1) / (maxArea - 1)) * 100}%, rgba(254, 243, 199, 0.2) ${((area - 1) / (maxArea - 1)) * 100}%, rgba(254, 243, 199, 0.2) 100%)`
                    }}
                  />
                  
                  <div className="flex justify-between text-sm text-muted mt-2">
                    <span>1 mp</span>
                    <span>{maxArea} mp</span>
                  </div>
                </div>

                <motion.div 
                  className="glass rounded-3xl p-8 border-2 border-gold"
                  key={result.price}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <p className="text-base text-secondary mb-3">Suprafata calculata</p>
                    <motion.p 
                      className="text-4xl font-serif font-bold text-gold mb-6"
                      key={result.area}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {result.area} mp
                    </motion.p>
                    <div className="border-t border-custom my-6"></div>
                    <p className="text-base text-secondary mb-3">Pret total</p>
                    <motion.p 
                      className="text-5xl font-serif font-bold text-gold mb-4"
                      key={result.price}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {result.price} RON
                    </motion.p>
                    {!result.meetsMinimum && (
                      <p className="text-sm text-muted mt-3">
                        * Pret minim: {minPrice} RON (7 mp)
                      </p>
                    )}
                    {result.meetsMinimum && (
                      <motion.div 
                        className="flex items-center justify-center gap-2 mt-4 text-gold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-semibold">Comanda minima indeplinita</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>

              {/* Tabel Preturi */}
              <motion.div 
                className="glass-strong rounded-3xl p-10 border border-custom"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-10">
                  <motion.div 
                    className="text-6xl font-serif font-bold text-gold mb-4"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-bold text-3xl">11 RON/mp</span>
                      <span className="text-lg line-through opacity-60">13 RON/mp</span>
                    </div>
                  </motion.div>
                  <p className="text-xl text-secondary">Pret standard pentru spalare covoare</p>
                </div>
                
                <div className="glass rounded-2xl p-6 mb-8 border border-custom">
                  <h3 className="font-serif font-bold text-gold mb-2 text-xl">Comanda Minima</h3>
                  <p className="text-secondary text-lg">7 mp ({minPrice} RON)</p>
                </div>

                <div className="space-y-5">
                  <div className="flex justify-between items-center py-4 border-b border-custom">
                    <span className="text-primary font-medium text-lg">Spalare standard covoare</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm line-through opacity-60 text-secondary">13 RON/mp</span>
                      <span className="text-gold font-bold text-xl">11 RON/mp</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-custom">
                    <span className="text-primary font-medium text-lg">Transport si ridicare</span>
                    <span className="text-gold font-bold text-xl">GRATUIT</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-custom">
                    <span className="text-primary font-medium text-lg">Livrare</span>
                    <span className="text-gold font-bold text-xl">GRATUIT</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-primary font-medium text-lg">Timp livrare</span>
                    <span className="text-secondary text-lg">24-48 ore</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Servicii Suplimentare */}
            <motion.div 
              className="mt-12 glass-strong rounded-3xl p-10 border border-custom"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Sparkles className="w-10 h-10 text-gold" />
                <h2 className="text-3xl font-serif font-bold text-gold">Servicii Suplimentare</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-2xl p-6 border border-custom">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium">Tratament pete dificile</span>
                    <span className="text-secondary">La cerere</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 border border-custom">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium">Dezinfectare cu ozon</span>
                    <span className="text-secondary">La cerere</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 border border-custom">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium">Tratament anti-mucegai</span>
                    <span className="text-secondary">La cerere</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link 
                href="/comanda" 
                className="bg-gold hover:bg-gold/90 text-emerald font-bold py-5 px-12 rounded-2xl transition-all duration-300 inline-block font-serif text-lg shadow-2xl hover:shadow-gold/50 hover:scale-105"
              >
                Comanda Acum
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
