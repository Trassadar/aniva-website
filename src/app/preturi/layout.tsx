import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Preturi Spalatorie Covoare ANIVA Brasov | Calculator Online',
  description: 'Calculator preturi pentru spalare covoare in Brasov. Pret 11 lei/mp. Calculeaza rapid pretul pentru covoarele tale. Comanda minima 7 mp.',
  path: '/preturi',
});

export default function PreturiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
