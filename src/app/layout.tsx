import type { Viewport } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';
import { siteMetadata } from '@/lib/metadata';
import { Analytics } from '@vercel/analytics/react';
import { site, socials } from '@/lib/site';

export const metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: '#11100E',
};

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: 'Full-Stack Web Developer',
      email: `mailto:${site.email}`,
      image: `${site.url}/about/muheeb.jpeg`,
      sameAs: [socials.github.href, socials.linkedin.href, socials.x.href],
      knowsAbout: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'PHP', 'Laravel', 'SQL', 'MongoDB'],
      mainEntityOfPage: { '@id': `${site.url}/#website` },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      name: `${site.name} Portfolio`,
      url: site.url,
      description: site.tagline,
      publisher: { '@id': `${site.url}/#person` },
    },
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `<!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJMB6XT7');
<!-- End Google Tag Manager -->`,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html:
              "(function(d){d.classList.add('js');try{var r=matchMedia('(prefers-reduced-motion: reduce)').matches;var a=+localStorage.getItem('preloader-seen-at')||0;if(!r&&!(a&&Date.now()-a<43200000))d.classList.add('pl')}catch(e){}})(document.documentElement)", }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body
        className="antialiased bg-cream"
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<!-- Google Tag Manager (noscript) -->
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJMB6XT7" height="0" width="0" style="display:none;visibility:hidden"></iframe>
<!-- End Google Tag Manager (noscript) -->`,
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}

