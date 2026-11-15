import "./globals.css";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateStructuredData } from "@/lib/seo";
import Script from "next/script";

export const metadata = genMeta({
  title: "Spălătorie Covoare Brașov | 13 lei/mp, Ridicare Gratuită | ANIVA",
  description:
    "Spălătorie de covoare în Brașov cu ridicare și livrare gratuită. 13 lei/mp, gata în 3 zile lucrătoare. Programează online sau sună la 0759 158 914.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();

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
