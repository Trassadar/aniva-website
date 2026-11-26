// Functii: generateMetadata, generateStructuredData.
// Schema DryCleaningOrLaundry (subtip de LocalBusiness), cu NAP real, fara aggregateRating.
// Coordonate pentru Sos. Cristianului nr. 11 (punct publicat pentru aceasta adresa).
// Cod postal 500052: segmentul strazii din Bartolomeu, OpenStreetMap.
// Nu exista URL de profil Google sau retele sociale in repo, deci nu punem sameAs.
// TODO: nu exista in repo o fotografie reala 1200x630. Logo-ul are 1536x1024.
// Inlocuieste defaultImage cu public/images/og-aniva.jpg cand exista o poza reala de atelier.

import { Metadata } from 'next';

const baseUrl = 'https://www.spalatoriaaniva.ro';
const siteName = 'ANIVA - Spălătorie Covoare Brașov';
const defaultDescription =
  'Spălătorie de covoare în Brașov, cu ridicare de la domiciliu. 13 lei/mp, minim 6 mp, gata în 3 zile lucrătoare.';
const defaultImage = '/images/logo-aniva.webp';
const defaultImageWidth = 1536;
const defaultImageHeight = 1024;

export interface SEOConfig {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const { title, description, path = '', image = defaultImage, noIndex = false } = config;
  const url = `${baseUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: imageUrl,
          width: defaultImageWidth,
          height: defaultImageHeight,
          alt: title,
        },
      ],
      locale: 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DryCleaningOrLaundry',
    '@id': `${baseUrl}/#business`,
    name: 'ANIVA – Spălătorie Covoare Brașov',
    description: defaultDescription,
    url: baseUrl,
    logo: `${baseUrl}/images/logo-aniva.webp`,
    image: `${baseUrl}/images/logo-aniva.webp`,
    telephone: '+40759158914',
    email: 'spalatoriaaniva@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Șos. Cristianului nr. 11',
      addressLocality: 'Brașov',
      addressRegion: 'Brașov',
      postalCode: '500052',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.65579,
      longitude: 25.557312,
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Soseaua+Cristianului+11,+Brasov',
    priceRange: '13 lei/mp',
    openingHours: ['Mo-Fr 08:00-17:00', 'Sa 08:00-13:00'],
    areaServed: [
      'Brașov',
      'Săcele',
      'Ghimbav',
      'Codlea',
      'Râșnov',
      'Hărman',
      'Sânpetru',
      'Cristian',
      'Prejmer',
      'Poiana Brașov',
      'Bran',
      'Predeal',
      'Sinaia',
      'Bușteni',
    ].map((name) => ({
      '@type': name === 'Poiana Brașov' ? 'Place' : 'City',
      name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicii spălătorie covoare',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Spălare covoare',
            description: 'Spălare profesională de covoare, tarifată la metru pătrat (mp).',
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '13',
            priceCurrency: 'RON',
            unitCode: 'MTK',
            unitText: 'mp',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Festonat covoare',
            description: 'Festonare tarifată la metru liniar (ml), nu la metru pătrat.',
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '13',
            priceCurrency: 'RON',
            unitCode: 'MTR',
            unitText: 'ml',
          },
        },
      ],
    },
  };
}
