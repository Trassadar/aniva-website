// Configurare Next.js. Functii: redirects.
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
      // Pagini care tintesc aceeasi cautare ca homepage-ul
      { source: '/spalatorie-covoare-brasov', destination: '/', statusCode: 301 },
      { source: '/spalat-covoare-brasov', destination: '/', statusCode: 301 },
      { source: '/curatare-covoare-brasov', destination: '/', statusCode: 301 },
      { source: '/spalatorie-covoare-cu-ridicare-brasov', destination: '/', statusCode: 301 },
      { source: '/igienizare-covoare-brasov', destination: '/', statusCode: 301 },
      // Pagina de pret mai slaba decat /tarife
      { source: '/pret-spalat-covoare-brasov', destination: '/tarife', statusCode: 301 },
      // Cartiere si localitati cu continut de sablon
      { source: '/spalatorie-covoare-tractorul', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-racadau', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-avantgarden', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-schei', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-steagu', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-strada-carpatilor', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-noua', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-gemenii', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-centru-brasov', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-grivitei', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-dupa-deal', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-timis', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-florilor', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-sacele', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-predeal', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-prejmer', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-lunca-calnicului', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-cristian', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-codlea', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-rasnov', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-harman', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-stupini', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-sanpetru', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-ghimbav', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-poiana-brasov', destination: '/zone-deservite', statusCode: 301 },
      { source: '/spalatorie-covoare-bran', destination: '/zone-deservite', statusCode: 301 },
    ];
  },
};

export default nextConfig;
