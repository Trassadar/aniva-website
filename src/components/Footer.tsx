import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/aniva';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border/70 mt-20">
      <Container>
        <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
              <div className="mb-4">
                <Image
                  src="/images/logo.png"
                  alt="ANIVA"
                  width={280}
                  height={84}
                  className="h-14 w-auto"
                  sizes="280px"
                />
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Spalatorie profesionala de covoare in Brasov. Servicii de calitate cu peste 4 ani de experienta.
            </p>
          </div>

          <div>
              <h3 className="text-lg font-extrabold mb-4 text-text">Contact</h3>
              <div className="space-y-3 text-sm text-muted">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand" />
                  <a href="tel:0759158914" className="hover:opacity-80">0759158914</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand" />
                  <a href="mailto:spalatoriaaniva@gmail.com" className="hover:opacity-80">spalatoriaaniva@gmail.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand" />
                  <span>Str. Soseaua Cristianului Nr.11 Brasov</span>
                </p>
              </div>
          </div>

          <div>
              <h3 className="text-lg font-extrabold mb-4 text-text">Linkuri</h3>
              <ul className="space-y-2 text-sm text-muted">
              <li>
                  <Link href="/servicii" className="hover:opacity-80">Servicii</Link>
              </li>
              <li>
                  <Link href="/tarife" className="hover:opacity-80">Tarife</Link>
              </li>
              <li>
                  <Link href="/comanda-online" className="hover:opacity-80">Comanda online</Link>
              </li>
              <li>
                  <Link href="/contact" className="hover:opacity-80">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

          <div className="mt-8 pt-8 border-t border-border/70">
            <div className="text-center text-sm text-muted mb-4">
              <p>&copy; {new Date().getFullYear()} ANIVA. Toate drepturile rezervate.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted">
              <a 
                href="https://anpc.ro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 underline"
              >
                ANPC - Autoritatea Nationala pentru Protectia Consumatorilor
              </a>
              <span className="hidden sm:inline">|</span>
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 underline"
              >
                Platforma Europeana pentru Solutionarea Online a Litigiilor
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
