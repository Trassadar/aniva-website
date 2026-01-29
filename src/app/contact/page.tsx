import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container, Card, CardHeader, CardBody, Button } from '@/components/ui/aniva';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Contact ANIVA Brasov | Spalatorie Covoare',
  description: 'Contacteaza-ne pentru servicii de spalare covoare in Brasov. Telefon: 0759158914. Email: spalatoriaaniva@gmail.com. Adresa: Str. Soseaua Cristianului Nr.11 Brasov.',
  path: '/contact',
});

export default function Contact() {
  return (
    <>
      <Header />
      
      <main className="page-pad">
        <Container>
          <section className="section-gap">
            <div className="text-center mb-8">
              <h1 className="section-title mb-4">Contact</h1>
              <p className="section-subtitle text-base">
                Suntem aici sa te ajutam cu servicii profesionale de spalare covoare
              </p>
            </div>
          </section>

          <section className="section-gap">
            <Card>
              <CardHeader>
                <h2 className="card-title">Date de contact</h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <a href="tel:0759158914" className="flex items-center gap-4 p-4 bg-surface2 rounded-2xl ring-1 ring-border/70 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1 text-muted">Telefon</p>
                      <p className="text-lg font-extrabold text-text">0759158914</p>
                    </div>
                  </a>

                  <a href="https://wa.me/40759158914?text=Salut%20ANIVA%2C%20vreau%20sa%20fac%20o%20comanda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-surface2 rounded-2xl ring-1 ring-border/70 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1 text-muted">WhatsApp</p>
                      <p className="text-lg font-extrabold text-text">Trimite mesaj</p>
                    </div>
                  </a>

                  <a href="mailto:spalatoriaaniva@gmail.com" className="flex items-center gap-4 p-4 bg-surface2 rounded-2xl ring-1 ring-border/70 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1 text-muted">Email</p>
                      <p className="text-lg font-extrabold text-text">spalatoriaaniva@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-surface2 rounded-2xl ring-1 ring-border/70">
                    <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1 text-muted">Adresa</p>
                      <p className="text-lg font-extrabold text-text">Str. Soseaua Cristianului Nr.11 Brasov, Romania</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          <section className="section-gap">
            <Card>
              <CardHeader>
                <h2 className="card-title">Program</h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-surface2 rounded-2xl ring-1 ring-border/70">
                    <p className="font-extrabold text-text">Luni - Vineri</p>
                    <p className="text-muted">08:00 - 18:00</p>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-surface2 rounded-2xl ring-1 ring-border/70">
                    <p className="font-extrabold text-text">Sambata</p>
                    <p className="text-muted">09:00 - 13:00</p>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-surface2 rounded-2xl ring-1 ring-border/70">
                    <p className="font-extrabold text-text">Duminica</p>
                    <p className="text-muted">Inchis</p>
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
                    Suna acum
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
