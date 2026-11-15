// Functii: robots.
// Permite CSS, JS si imaginile din /_next/. Blocheaza doar API-ul.

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://www.spalatoriaaniva.ro/sitemap.xml',
  };
}
