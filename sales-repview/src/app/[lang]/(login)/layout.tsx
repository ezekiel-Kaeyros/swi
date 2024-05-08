'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from '../../common/dark-mode/theme-provider/theme-provider';
import ReduxProvider from '@/redux/provider';

import Header from '../../common/components/header/header';
import { Providers } from '../../../providers/nextui/providers';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'SWIVY APP',
//   description: 'SWIVY APP',
// };

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error('Missing Google Maps API key');
  }
  return (
    <html lang={lang}>
      <Head>
        <meta name="description">{'Swivy'}</meta>
      </Head>
      <ReduxProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <APIProvider apiKey={apiKey}>
              <body className={`${inter.className}  dark:bg-[#192428]`}>
                <Header lang={lang} />
                <div className="flex">
                  <div className="w-full ">{children}</div>
                </div>
              </body>
            </APIProvider>
          </Providers>
        </ThemeProvider>
      </ReduxProvider>
    </html>
  );
}
