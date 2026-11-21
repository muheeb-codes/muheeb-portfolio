import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Muheeb Ahmed | Full-Stack Web Developer',
    template: '%s | Muheeb Ahmed',
  },
  description:
    'Muheeb Ahmed is a full-stack web developer from Karachi building modern web applications with React, TypeScript, Node.js, Express, PHP and SQL.',
  keywords: [
    'Muheeb Ahmed',
    'Full Stack Web Developer',
    'React Developer',
    'TypeScript Developer',
    'Next.js',
    'Node.js',
    'Express',
    'PHP',
    'Laravel',
    'SQL',
    'MongoDB',
    'Karachi',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Muheeb Ahmed',
    },
  ],
  creator: 'Muheeb Ahmed',
  metadataBase: new URL('https://muheeb.is-a.dev'),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Muheeb Ahmed | Full-Stack Web Developer',
    description:
      'Full-stack web developer from Karachi. React, TypeScript, Node.js, Express, PHP and SQL projects, from the interface to the database.',
    url: 'https://muheeb.is-a.dev',
    siteName: 'Muheeb Ahmed Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muheeb Ahmed | Full-Stack Web Developer',
    description:
      'Full-stack web developer from Karachi. React, TypeScript, Node.js, Express, PHP and SQL projects, from the interface to the database.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
