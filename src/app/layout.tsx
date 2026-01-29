import "./globals.css";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateStructuredData } from "@/lib/seo";
import Script from "next/script";

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16827353580"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16827353580');
          `}
        </Script>
      </head>
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
