import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Comanda Online ANIVA Brasov | Spalatorie Covoare',
  description: 'Comanda online servicii de spalare covoare in Brasov. Formular simplu si rapid. Ridicare si livrare gratuita. Completeaza formularul si te vom contacta pentru confirmare.',
  path: '/comanda-online',
});

export default function ComandaOnlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
