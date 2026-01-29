import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Comanda ANIVA Brasov | Spalatorie Covoare',
  description: 'Comanda servicii de spalare covoare in Brasov. Formular simplu si rapid. Ridicare si livrare gratuita. Completeaza formularul si te vom contacta pentru confirmare.',
  path: '/comanda',
});

export default function ComandaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
