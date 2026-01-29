import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container, Card, CardHeader, CardBody, Badge, Button } from '@/components/ui/aniva';
import { Calculator, Info } from 'lucide-react';

import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Tarife Spalatorie Covoare ANIVA Brasov | Preturi Transparente',
  description: 'Tarife transparente pentru spalare covoare in Brasov. Pret 11 lei/mp (reducere de la 13 lei). Comanda minima pe zone. Festonat 15 lei/ml. Vezi toate detaliile.',
  path: '/tarife',
});

export default function Tarife() {
  return (
    <>
      <Header />
      
      <main className="page-pad">
        <Container>
          <section className="section-gap">
            <div className="text-center mb-8">
              <h1 className="section-title mb-4">
                Tarife transparente
              </h1>
              <p className="section-subtitle text-base">
                Preturi clare si accesibile pentru servicii de calitate
              </p>
            </div>
          </section>

          <section className="section-gap">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calculator className="w-8 h-8 text-brand" />
                  <h2 className="card-title">Pret standard</h2>
                </div>
              </CardHeader>
              <CardBody>
                <div className="text-center mb-6">
                  <Badge variant="soft" className="text-2xl px-6 py-3 flex flex-col items-center gap-1">
                    <span className="font-bold">11 lei/mp</span>
                    <span className="text-sm line-through opacity-60 font-normal">13 lei/mp</span>
                  </Badge>
                  <p className="card-muted mt-4">
                    Pret pentru spalare si curatare covoare
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-surface2 rounded-2xl ring-1 ring-border/70">
                    <div className="flex items-start gap-3 mb-2">
                      <Info className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand" />
                      <div>
                        <p className="font-extrabold mb-2 text-text">Comanda minima pe zone:</p>
                        <div className="space-y-2 text-sm text-muted">
                          <p>• <strong className="text-text">Brasov / Stupini / Sanpetru:</strong> 6 mp 
                            <span className="ml-2"><span className="line-through opacity-60">78 lei</span> <strong className="text-text font-bold">66 lei</strong></span>
                          </p>
                          <p>• <strong className="text-text">Codlea / Sacele / Harman / Ghimbav / Cristian:</strong> 6 mp 
                            <span className="ml-2"><span className="line-through opacity-60">78 lei</span> <strong className="text-text font-bold">66 lei</strong></span>
                          </p>
                          <p>• <strong className="text-text">Prejmer / Poiana Brasov / Bran / Sinaia / Busteni / Predeal:</strong> 25 mp 
                            <span className="ml-2"><span className="line-through opacity-60">325 lei</span> <strong className="text-text font-bold">275 lei</strong></span>
                          </p>
                        </div>
                        <p className="text-xs mt-3 italic text-muted">
                          Daca comanda este sub minim, se taxeaza minimul
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-surface2 rounded-2xl ring-1 ring-border/70">
                    <div>
                      <p className="font-extrabold mb-1 text-text">Festonat covoare</p>
                      <p className="text-sm text-muted">Reparatii si protectie</p>
                    </div>
                    <Badge variant="soft" className="text-lg px-4 py-2">15 lei/ml</Badge>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          <section className="section-gap">
            <Card>
              <CardHeader>
                <h2 className="card-title">Exemple de calcul</h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="p-4 bg-surface2 rounded-2xl ring-1 ring-border/70">
                    <p className="font-extrabold mb-2 text-text">Exemplu 1: Covor 3x4m</p>
                    <p className="text-sm text-muted mb-2">Suprafata: 3m x 4m = 12 mp</p>
                    <p className="text-sm text-muted mb-2">Pret: 12 mp x 11 lei = <strong className="text-text">132 lei</strong></p>
                  </div>
                  <div className="p-4 bg-surface2 rounded-2xl ring-1 ring-border/70">
                    <p className="font-extrabold mb-2 text-text">Exemplu 2: Covor 2x3m (Brasov)</p>
                    <p className="text-sm text-muted mb-2">Suprafata: 2m x 3m = 6 mp</p>
                    <p className="text-sm text-muted mb-2">Comanda minima: 6 mp</p>
                    <p className="text-sm text-muted">Pret: 6 mp x 11 lei = <strong className="text-text">66 lei</strong></p>
                  </div>
                  <div className="p-4 bg-surface2 rounded-2xl ring-1 ring-border/70">
                    <p className="font-extrabold mb-2 text-text">Exemplu 3: Covor 1.5x2m (Brasov)</p>
                    <p className="text-sm text-muted mb-2">Suprafata: 1.5m x 2m = 3 mp</p>
                    <p className="text-sm text-muted mb-2">Comanda minima: 6 mp (se aplica minimul)</p>
                    <p className="text-sm text-muted">Pret: 6 mp x 11 lei = <strong className="text-text">66 lei</strong></p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          <section className="section-gap">
            <Card>
              <CardBody className="text-center">
                <h2 className="card-title mb-4">Gata sa comenzi?</h2>
                <p className="card-muted mb-6">
                  Completeaza formularul online sau suna-ne direct
                </p>
                <div className="flex flex-col gap-4">
                  <Button variant="primary" href="/comanda-online" className="btn-cta">
                    Comanda online
                  </Button>
                  <Button variant="ghost" href="tel:0759158914">
                    Suna acum: 0759158914
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
