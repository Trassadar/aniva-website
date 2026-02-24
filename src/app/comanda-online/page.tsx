'use client';

import { useRef, useState } from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container, Card, CardHeader, CardBody, Input, Textarea, Button } from '@/components/ui/aniva';
import { CheckCircle } from 'lucide-react';

export default function ComandaOnline() {
  const startedAtRef = useRef(Date.now());
  const initialFormData = {
    customerName: '',
    phone: '',
    email: '',
    address: {
      street: '',
      number: '',
      bloc: '',
      scara: '',
      ap: '',
      city: 'Brasov',
      county: 'Brasov',
    },
    serviceType: 'spalare_covoare',
    preferredDate: '',
    notes: '',
    gdpr: false,
    website: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else if (name === 'gdpr') {
      setFormData(prev => ({
        ...prev,
        gdpr: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      newErrors.customerName = 'Numele trebuie sa aiba minim 2 caractere';
    }

    if (!formData.phone) {
      newErrors.phone = 'Telefonul este obligatoriu';
    } else {
      const phoneRegex = /^(07\d{8}|\+407\d{8})$/;
      const cleanPhone = formData.phone.replace(/\s/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phone = 'Telefonul trebuie sa fie valid (format: 07xxxxxxxx sau +407xxxxxxxx)';
      }
    }

    if (!formData.address.street) {
      newErrors['address.street'] = 'Strada este obligatorie';
    }

    if (!formData.address.city) {
      newErrors['address.city'] = 'Orasul este obligatoriu';
    }

    if (!formData.gdpr) {
      newErrors.gdpr = 'Trebuie sa fiti de acord cu prelucrarea datelor';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors(prev => ({
      ...prev,
      submit: '',
    }));

    try {
      const orderData = {
        ownerUid: 'z9pKgJiIQZM4XRewdKvdeGRz5ij1',
        source: 'aniva-web',
        nume: formData.customerName.trim(),
        telefon: formData.phone.replace(/\s/g, ''),
        email: formData.email.trim() || '',
        oras: formData.address.city.trim(),
        strada: formData.address.street.trim(),
        numar: formData.address.number.trim() || '0',
        bloc: formData.address.bloc.trim() || '',
        scara: formData.address.scara.trim() || '',
        ap: formData.address.ap.trim() || '',
        dataPreferata: formData.preferredDate || '',
        interval: '',
        nrCovoare: '1',
        observatii: formData.notes.trim() || '',
        gdpr: formData.gdpr,
        website: formData.website,
        ttsMs: Date.now() - startedAtRef.current,
      };

      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const text = await response.text();
      let result: any;
      try {
        result = JSON.parse(text);
      } catch {
        setErrors({ submit: 'API a raspuns non-JSON. Verifica consola pentru detalii.' });
        return;
      }

      if (response.ok && result.ok) {
        setOrderId(result.orderId || result.id || '');
        setIsSuccess(true);
        setFormData(initialFormData);

        // Google Ads conversion event
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag('event', 'ads_conversion_Contacta_ne_1');
        }
      } else {
        setErrors({ submit: result.error || 'Eroare la trimiterea comenzii' });
      }
    } catch (error) {
      console.error('Eroare:', error);
      setErrors({ submit: 'Eroare de conexiune. Te rugam sa incerci din nou.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
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
        <main className="page-pad">
          <Container>
            <Card className="rounded-[32px] p-6 md:p-10 border border-white/40 bg-white/35 backdrop-blur-xl shadow-2xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="section-title mb-4">
                  Comanda trimisa cu succes!
                </h1>
                <p className="section-subtitle text-base mb-6">
                  Multumim pentru comanda! Te vom contacta in cel mai scurt timp pentru confirmarea detaliilor.
                </p>
                {orderId && (
                  <div className="p-4 bg-surface2 rounded-2xl mb-6 ring-1 ring-border/70">
                    <p className="text-sm mb-1 text-muted">Numar comanda:</p>
                    <p className="text-xl font-extrabold font-mono text-text">{orderId}</p>
                  </div>
                )}
                <div className="space-y-3 text-sm text-left text-muted">
                  <p className="font-extrabold mb-2 text-text">Ce se intampla acum?</p>
                  <p>• Vei primi un telefon de confirmare in maxim 2 ore</p>
                  <p>• Stabilim impreuna data si ora potrivita pentru ridicare</p>
                  <p>• Echipa noastra vine la adresa indicata</p>
                  <p>• Covoarele sunt returnate curate in ~3 zile lucratoare</p>
                </div>
              </CardBody>
            </Card>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
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

      <main className="page-pad">
        <Container>
          <div className="max-w-4xl mx-auto">
            <section className="mb-8 text-center">
              <h1 className="section-title mb-4">
                Comanda online
              </h1>
              <p className="section-subtitle text-base">
                Completeaza formularul de mai jos si te vom contacta pentru confirmarea programarii
              </p>
            </section>

            <section>
              <Card className="rounded-[32px] p-6 md:p-10 border border-white/40 bg-white/35 backdrop-blur-xl shadow-2xl">
                <CardBody>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="card-title mb-4">Date personale</h2>
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-text">Nume complet *</label>
                          <Input
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            placeholder="Ion Popescu"
                          />
                          {errors.customerName && <p className="mt-1 text-sm text-red-600">{errors.customerName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-text">Telefon *</label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0759123456"
                          />
                          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-text">Email (optional)</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@exemplu.ro"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="divider" />

                    <div>
                      <h2 className="card-title mb-4">Adresa ridicare</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-text">Strada *</label>
                          <Input
                            name="address.street"
                            value={formData.address.street}
                            onChange={handleChange}
                            placeholder="Str. Exemplu"
                          />
                          {errors['address.street'] && <p className="mt-1 text-sm text-red-600">{errors['address.street']}</p>}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-text">Numar</label>
                            <Input
                              name="address.number"
                              value={formData.address.number}
                              onChange={handleChange}
                              placeholder="1"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-text">Bloc</label>
                            <Input
                              name="address.bloc"
                              value={formData.address.bloc}
                              onChange={handleChange}
                              placeholder="A3"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-text">Scara</label>
                            <Input
                              name="address.scara"
                              value={formData.address.scara}
                              onChange={handleChange}
                              placeholder="2"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-text">Apartament</label>
                            <Input
                              name="address.ap"
                              value={formData.address.ap}
                              onChange={handleChange}
                              placeholder="14"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-text">Oras *</label>
                            <Input
                              name="address.city"
                              value={formData.address.city}
                              onChange={handleChange}
                            />
                            {errors['address.city'] && <p className="mt-1 text-sm text-red-600">{errors['address.city']}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-text">Judet</label>
                            <Input
                              name="address.county"
                              value={formData.address.county}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="divider" />

                    <div>
                      <h2 className="card-title mb-4">Detalii comanda</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-text">Tip serviciu</label>
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="input"
                          >
                            <option value="spalare_covoare">Spalare covoare</option>
                            <option value="curatare_tapiterii">Curatare tapiterii</option>
                            <option value="reparatii_festonare">Reparatii & festonare</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-text">Data preferata (optional)</label>
                          <Input
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-text">Observatii (optional)</label>
                          <Textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Detalii suplimentare despre covoare, pete dificile, etc."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="divider" />

                    <div className="flex items-start gap-3">
                      <input
                        id="gdpr"
                        name="gdpr"
                        type="checkbox"
                        checked={formData.gdpr}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <label htmlFor="gdpr" className="text-sm text-text">
                        Sunt de acord cu prelucrarea datelor si cu termenii de contact.
                      </label>
                    </div>
                    {errors.gdpr && <p className="text-sm text-red-600">{errors.gdpr}</p>}

                    {errors.submit && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                        <p className="text-sm text-red-600">{errors.submit}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="btn-cta"
                    >
                      {isSubmitting ? 'Se trimite...' : 'Trimite comanda'}
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
