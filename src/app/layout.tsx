import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { SITE_DESCRIPTION, SITE_NAME } from '@/shared/constants/seo.constants';
import { APP_URL } from '@/shared/routes';

import './globals.scss';
import Providers from './providers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    emails: ['shamexsx@gmail.com']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased bg-Main  `}>
        <Providers>
          {children}
          <div id="modal"></div>
        </Providers>
      </body>
    </html>
  );
}
