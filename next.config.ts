import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirects comune WordPress
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/acasa',
        destination: '/',
        permanent: true,
      },
      // Redirects pentru pagini de servicii (doar pentru sub-pagini, nu pentru /servicii)
      {
        source: '/servicii/:slug+',
        destination: '/servicii',
        permanent: true,
      },
      // Redirects pentru pagini de preturi/tarife
      {
        source: '/preturi',
        destination: '/tarife',
        permanent: true,
      },
      {
        source: '/prices',
        destination: '/tarife',
        permanent: true,
      },
      // Redirects pentru comenzi
      {
        source: '/order',
        destination: '/comanda-online',
        permanent: true,
      },
      {
        source: '/comanda-rapida',
        destination: '/comanda-online',
        permanent: true,
      },
      // Redirects pentru contact
      {
        source: '/contacteaza-ne',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      // Redirects pentru blog/articole (daca existau)
      {
        source: '/blog/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/articole/:slug*',
        destination: '/',
        permanent: true,
      },
      // Redirects pentru categorii WordPress
      {
        source: '/category/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/categorie/:slug*',
        destination: '/',
        permanent: true,
      },
      // Redirects pentru tag-uri
      {
        source: '/tag/:slug*',
        destination: '/',
        permanent: true,
      },
      // Redirects pentru author
      {
        source: '/author/:slug*',
        destination: '/',
        permanent: true,
      },
      // Redirects pentru feed-uri
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/rss',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-feed.php',
        destination: '/',
        permanent: true,
      },
      // Redirects pentru wp-admin/wp-content (securitate)
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
