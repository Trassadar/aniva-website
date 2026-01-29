import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container, Card, CardHeader, CardBody, Badge, Button } from '@/components/ui/aniva';
import { Droplets, Wind, Package, Shield, CheckCircle } from 'lucide-react';

import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Servicii Spalatorie Covoare ANIVA Brasov | Curatare Profesionala',
  description: 'Servicii complete de spalare si curatare covoare in Brasov. Proces profesional in 6 pasi. Preturi accesibile si rezultate garantate.',
  path: '/servicii',
});

export default function Servicii() {
  return (
    <>
      <Header />
      
      <main className="page-pad">
        <Container>
          <section className="section-gap">
            <div className="text-center mb-8">
              <h1 className="section-title mb-4">Serviciile noastre</h1>
              <p className="section-subtitle text-base">
                Oferim servicii complete de spalare si curatare pentru covoare si tapiterii
              </p>
            </div>
          </section>

          <section className="section-gap">
            <div className="space-y-6">
              {/* Spalare Covoare */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-surface2 flex items-center justify-center flex-shrink-0 ring-1 ring-border/70">
                      <Droplets className="w-8 h-8 text-brand" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="card-title">Spalare covoare</h2>
                        <Badge variant="soft" className="flex flex-col items-center">
                          <span className="font-bold">11 lei/mp</span>
                          <span className="text-xs line-through opacity-60">13 lei/mp</span>
                        </Badge>
                      </div>
                      <p className="card-muted">
                        Proces complet de spalare si curatare pentru toate tipurile de covoare. Folosim echipamente profesionale si detergenti specializati pentru fiecare tip de material.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-extrabold mb-3 text-text">Proces:</h3>
                      <ul className="space-y-2 text-sm text-muted">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Inspectie initiala pentru identificarea tipului de material</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Desprafuire si aspirare profunda</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Spalare controlata cu detergenti specializati</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Stoarcere profesionala pentru eliminarea apei</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Uscare controlata cu dezumidificatoare si ventilatoare</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Inspectie finala si finisare</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-extrabold mb-3 text-text">Beneficii:</h3>
                      <ul className="space-y-2 text-sm text-muted">
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Rezultate impecabile garantate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Detergenti siguri pentru sanatate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Procesare in ~3 zile lucratoare</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                          <span>Ridicare si livrare gratuita</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button variant="primary" href="/comanda-online" className="btn-cta">
                    Comanda acum
                  </Button>
                </CardBody>
              </Card>

              {/* Curatare Tapiterii */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-surface2 flex items-center justify-center flex-shrink-0 ring-1 ring-border/70">
                      <Package className="w-8 h-8 text-brand" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="card-title">Curatare tapiterii</h2>
                        <Badge variant="soft">La cerere</Badge>
                      </div>
                      <p className="card-muted">
                        Servicii profesionale de curatare pentru canapele, scaune, saltele si alte tapiterii. Folosim tehnici specializate pentru fiecare tip de material.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="mb-6">
                    <p className="text-sm text-muted">
                      Oferim servicii complete de curatare pentru toate tipurile de tapiterii. Procesul include aspirare profunda, tratament cu solutii specializate si uscare controlata pentru rezultate optime.
                    </p>
                  </div>
                  <Button variant="primary" href="/contact" className="btn-cta">
                    Contacteaza-ne pentru oferta
                  </Button>
                </CardBody>
              </Card>

              {/* Reparatii & Festonare */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-surface2 flex items-center justify-center flex-shrink-0 ring-1 ring-border/70">
                      <Wind className="w-8 h-8 text-brand" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="card-title">Reparatii & festonare</h2>
                        <Badge variant="soft">15 lei/ml</Badge>
                      </div>
                      <p className="card-muted">
                        Servicii de reparatii si festonare pentru covoare. Restauram si protejam covoarele tale cu atentie, prelungind durata de viata a acestora.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="mb-6">
                    <p className="text-sm mb-3 text-muted">
                      Oferim servicii de:
                    </p>
                    <ul className="space-y-2 text-sm text-muted">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                        <span>Festonare pentru protectie si aspect estetic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                        <span>Reparatii pentru pete si deteriorari</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" />
                        <span>Restaurare pentru covoare vechi</span>
                      </li>
                    </ul>
                  </div>
                  <Button variant="primary" href="/contact" className="btn-cta">
                    Contacteaza-ne pentru oferta
                  </Button>
                </CardBody>
              </Card>
            </div>
          </section>

          <section className="section-gap">
            <Card>
              <CardBody className="text-center">
                <h2 className="card-title mb-4">Ai nevoie de ajutor?</h2>
                <p className="card-muted mb-6">
                  Contacteaza-ne pentru mai multe informatii sau pentru o oferta personalizata
                </p>
                <div className="flex flex-col gap-4">
                  <Button variant="primary" href="/comanda-online" className="btn-cta">
                    Comanda online
                  </Button>
                  <Button variant="ghost" href="/contact">
                    Contact
                  </Button>
                </div>
              </CardBody>
            </Card>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
