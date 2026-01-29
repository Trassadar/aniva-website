import "./globals.css";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateStructuredData } from "@/lib/seo";

export const metadata = genMeta({
  title: "ANIVA - Spalatorie Covoare Brasov | Ridicare si Livrare Gratuita",
  description:
    "Spalatorie profesionala de covoare in Brasov - ridicare si livrare gratuita. Servicii de calitate cu peste 4 ani de experienta. Preturi transparente: 11 lei/mp.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData('LocalBusiness');

  return (
    <html lang="ro">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="bg-glow" />
        <div className="mobile-shell">
          {children}
          <FloatingContactButtons />
        </div>
      </body>
    </html>
  );
}
