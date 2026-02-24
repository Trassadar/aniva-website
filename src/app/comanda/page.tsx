'use client';

import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, MapPin, Calendar, Package } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Comanda() {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    oras: 'Brasov',
    strada: '',
    numar: '',
    bloc: '',
    scara: '',
    ap: '',
    dataPreferata: '',
    interval: '',
    nrCovoare: '',
    observatii: '',
    gdpr: false,
    website: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [orderId, setOrderId] = useState<string>('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.website) {
      return false;
    }

    if (!formData.nume.trim()) {
      newErrors.nume = 'Numele este obligatoriu';
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefonul este obligatoriu';
    } else if (!/^07[0-9]{8}$/.test(formData.telefon.replace(/\s/g, ''))) {
      newErrors.telefon = 'Telefonul trebuie sa fie valid (format: 07xxxxxxxx)';
    }

    if (!formData.strada.trim()) {
      newErrors.strada = 'Strada este obligatorie';
    }

    if (!formData.numar.trim()) {
      newErrors.numar = 'Numarul este obligatoriu';
    }

    if (!formData.gdpr) {
      newErrors.gdpr = 'Trebuie sa fiti de acord cu prelucrarea datelor';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const orderData = {
        ownerUid: 'z9pKgJiIQZM4XRewdKvdeGRz5ij1',
        source: 'aniva-web',
        nume: formData.nume,
        telefon: formData.telefon,
        oras: formData.oras,
        strada: formData.strada,
        numar: formData.numar,
        bloc: formData.bloc,
        scara: formData.scara,
        apartament: formData.ap,
        dataPreferata: formData.dataPreferata,
        interval: formData.interval,
        nrCovoare: formData.nrCovoare,
        observatii: formData.observatii,
        gdpr: formData.gdpr,
        website: formData.website
      };

      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      const text = await response.text();
      let result: any;

      try {
        result = JSON.parse(text);
      } catch {
        setSubmitError('API a raspuns non-JSON. Verificati consola pentru detalii.');
        return;
      }

      if (response.ok && result.ok) {
        setOrderId(result.orderId || result.id || '');
        setIsSubmitted(true);

        // Google Ads conversion event
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag('event', 'ads_conversion_Contacta_ne_1');
        }
      } else {
        setSubmitError(result.error || 'Eroare la trimiterea comenzii');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError('Eroare de conexiune. Va rugam verificati conexiunea la internet si incercati din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16827353580" />
        <Script id="google-ads-gtag-aw-16827353580">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16827353580');
          `}
        </Script>

        <Header />
        <main>
          <section className="pt-32 pb-20 bg-emerald section-spacing">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                className="glass-strong rounded-3xl p-12 border border-custom"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-20 h-20 mx-auto mb-6 text-gold" />
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gold">
                  Comanda ta a fost trimisa!
                </h1>
                <p className="text-xl text-secondary mb-6 leading-relaxed">
                  Multumim pentru comanda! Vei fi contactat in cel mai scurt timp
                  pentru confirmarea detaliilor de ridicare.
                </p>
                {orderId && (
                  <p className="text-base text-secondary mb-8">
                    Numar comanda: <span className="font-mono bg-card px-4 py-2 rounded-lg text-gold">{orderId}</span>
                  </p>
                )}
                <div className="glass rounded-2xl p-8 mb-10 border border-custom text-left">
                  <h3 className="font-serif font-bold text-gold mb-4 text-xl">Ce se intampla acum?</h3>
                  <ul className="text-secondary space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-1" />
                      <span>Vei primi un telefon de confirmare in maxim 2 ore</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-1" />
                      <span>Stabilim impreuna data si ora potrivita pentru ridicare</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-1" />
                      <span>Echipa noastra vine la adresa indicata</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-1" />
                      <span>Covoarele sunt returnate curate in 24-48 ore</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="bg-gold hover:bg-gold/90 text-emerald font-bold py-4 px-10 rounded-2xl transition-all duration-300 inline-block font-serif text-lg hover:scale-105"
                  >
                    Pagina Principala
                  </Link>
                  <Link
                    href="/servicii"
                    className="glass hover:glass-strong text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 inline-block border border-custom text-lg hover:scale-105"
                  >
                    Servicii
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16827353580" />
      <Script id="google-ads-gtag-aw-16827353580">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16827353580');
        `}
      </Script>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white pt-32 pb-24 section-spacing relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-gold">
                Comanda Online
              </h1>
              <p className="text-2xl mb-8 text-secondary max-w-3xl mx-auto leading-relaxed">
                Completeaza formularul de mai jos si te vom contacta pentru
                confirmarea programarii. Transport inclus!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-emerald section-spacing">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="glass-strong rounded-3xl p-10 border border-custom"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Date Personale */}
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-gold flex items-center gap-3">
                    <FileText className="w-6 h-6" />
                    Date Personale
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        name="nume"
                        value={formData.nume}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 bg-card border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary ${
                          errors.nume ? 'border-red-500' : 'border-custom'
                        }`}
                        placeholder="Ion Popescu"
                      />
                      {errors.nume && (
                        <p className="text-red-400 text-sm mt-2">{errors.nume}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 bg-card border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary ${
                          errors.telefon ? 'border-red-500' : 'border-custom'
                        }`}
                        placeholder="07xxxxxxxx"
                      />
                      {errors.telefon && (
                        <p className="text-red-400 text-sm mt-2">{errors.telefon}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Adresa */}
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-gold flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    Adresa Ridicare
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Oras *
                      </label>
                      <select
                        name="oras"
                        value={formData.oras}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-card border border-custom rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary"
                      >
                        <option value="Brasov">Brasov</option>
                        <option value="Sacele">Sacele</option>
                        <option value="Predeal">Predeal</option>
                        <option value="Rasnov">Rasnov</option>
                        <option value="Altul">Altul</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Strada *
                      </label>
                      <input
                        type="text"
                        name="strada"
                        value={formData.strada}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 bg-card border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary ${
                          errors.strada ? 'border-red-500' : 'border-custom'
                        }`}
                        placeholder="Strada Republicii"
                      />
                      {errors.strada && (
                        <p className="text-red-400 text-sm mt-2">{errors.strada}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Numar *
                      </label>
                      <input
                        type="text"
                        name="numar"
                        value={formData.numar}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 bg-card border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary ${
                          errors.numar ? 'border-red-500' : 'border-custom'
                        }`}
                        placeholder="1"
                      />
                      {errors.numar && (
                        <p className="text-red-400 text-sm mt-2">{errors.numar}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Bloc
                      </label>
                      <input
                        type="text"
                        name="bloc"
                        value={formData.bloc}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-card border border-custom rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary"
                        placeholder="A3"
                      />
                    </div>

                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Scara
                      </label>
                      <input
                        type="text"
                        name="scara"
                        value={formData.scara}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-card border border-custom rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary"
                        placeholder="2"
                      />
                    </div>

                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Apartament
                      </label>
                      <input
                        type="text"
                        name="ap"
                        value={formData.ap}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-card border border-custom rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary"
                        placeholder="14"
                      />
                    </div>
                  </div>
                </div>

                {/* Detalii Comanda */}
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-gold flex items-center gap-3">
                    <Package className="w-6 h-6" />
                    Detalii Comanda
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Data preferata
                      </label>
                      <input
                        type="date"
                        name="dataPreferata"
                        value={formData.dataPreferata}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-card border border-custom rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Interval orar preferat
                      </label>
                      <select
                        name="interval"
                        value={formData.interval}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-card border border-custom rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary"
                      >
                        <option value="">Alege interval</option>
                        <option value="09:00-12:00">09:00 - 12:00</option>
                        <option value="12:00-15:00">12:00 - 15:00</option>
                        <option value="15:00-18:00">15:00 - 18:00</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-base font-medium text-secondary mb-3">
                        Numar covoare
                      </label>
                      <input
                        type="number"
                        name="nrCovoare"
                        value={formData.nrCovoare}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-card border border-custom rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary"
                        placeholder="ex: 3"
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-base font-medium text-secondary mb-3">
                      Observatii
                    </label>
                    <textarea
                      name="observatii"
                      value={formData.observatii}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-5 py-3 bg-card border border-custom rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold text-primary"
                      placeholder="Detalii suplimentare despre covoare (pete dificile, materiale speciale, etc.)"
                    />
                  </div>
                </div>

                {/* GDPR */}
                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="gdpr"
                      checked={formData.gdpr}
                      onChange={handleChange}
                      className={`mt-1 mr-3 w-5 h-5 rounded border-custom bg-card text-gold focus:ring-2 focus:ring-gold ${
                        errors.gdpr ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="text-base text-secondary">
                      Sunt de acord cu prelucrarea datelor personale in conformitate cu
                      GDPR. Datele mele vor fi folosite doar pentru procesarea acestei comenzi. *
                    </span>
                  </label>
                  {errors.gdpr && (
                    <p className="text-red-400 text-sm mt-2">{errors.gdpr}</p>
                  )}
                </div>

                {submitError && (
                  <div className="glass rounded-2xl p-6 border-2 border-red-500">
                    <p className="text-red-400 text-base">{submitError}</p>
                  </div>
                )}

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold hover:bg-gold/90 disabled:bg-muted disabled:cursor-not-allowed text-emerald font-bold py-5 px-12 rounded-2xl transition-all duration-300 font-serif text-lg shadow-2xl hover:shadow-gold/50 hover:scale-105 disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Se trimite...' : 'Trimite Comanda'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
