import { Metadata } from 'next';

const baseUrl = 'https://www.spalatoriaaniva.ro';
const siteName = 'ANIVA - Spalatorie Covoare Brasov';
const defaultDescription = 'Spalatorie profesionala de covoare in Brasov - ridicare si livrare gratuita. Servicii de calitate cu peste 4 ani de experienta.';

export interface SEOConfig {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const { title, description, path = '', image = '/images/logo-aniva.png', noIndex = false } = config;
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
          width: 1200,
          height: 630,
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

export function generateStructuredData(type: 'LocalBusiness' | 'Organization' = 'LocalBusiness') {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'ANIVA - Spalatorie Covoare Brasov',
    description: defaultDescription,
    url: baseUrl,
    logo: `${baseUrl}/images/logo-aniva.png`,
    image: `${baseUrl}/images/logo-aniva.png`,
    telephone: '+40759158914',
    email: 'spalatoriaaniva@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Str. Soseaua Cristianului Nr.11',
      addressLocality: 'Brasov',
      addressRegion: 'Brasov',
      addressCountry: 'RO',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Brasov',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };

  if (type === 'LocalBusiness') {
    return {
      ...baseData,
      '@type': 'LocalBusiness',
      serviceType: 'Spalatorie Covoare',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicii Spalatorie Covoare',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Spalare Covoare',
              description: 'Spalare si curatare profesionala de covoare',
              provider: {
                '@type': 'LocalBusiness',
                name: 'ANIVA',
              },
            },
            price: '11',
            priceCurrency: 'RON',
            unitCode: 'MTK',
          },
        ],
      },
    };
  }

  return baseData;
}
