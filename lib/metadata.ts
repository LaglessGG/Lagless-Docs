import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  const title = typeof override.title === 'string' ? override.title : 'Lagless.gg Docs';
  const description = typeof override.description === 'string' ? override.description : 'Your comprehensive guide to Lagless.gg services';
  
  // Create dynamic OG image URL
  const ogImageUrl = new URL('/api/og', baseUrl);
  ogImageUrl.searchParams.set('title', title);
  ogImageUrl.searchParams.set('description', description);

  return {
    ...override,
    openGraph: {
      title,
      description,
      url: 'https://docs.lagless.gg',
      images: [
        {
          url: ogImageUrl.toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'Lagless.gg Docs',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl.toString()],
      ...override.twitter,
    }
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL('https://docs.lagless.gg');
