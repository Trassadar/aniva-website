// Functii: sitemap.
// Doar URL-uri canonice, indexabile, care raspund 200. lastModified este fix, nu data build-ului.

import { MetadataRoute } from 'next';

const baseUrl = 'https://www.spalatoriaaniva.ro';
const lastModified = new Date('2026-11-15T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{ path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }> = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/spalatorie-covoare-10-lei-mp-brasov', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/tarife', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/zone-deservite', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicii', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/spalatorie-covoare-bartolomeu', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/spalatorie-covoare-astra', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/comanda-online', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/curatare-canapele-brasov', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/curatare-saltele-brasov', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/curatare-mocheta-brasov', priority: 0.5, changeFrequency: 'monthly' },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
