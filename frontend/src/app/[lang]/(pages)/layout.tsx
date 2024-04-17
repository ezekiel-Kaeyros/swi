'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from '../../common/dark-mode/theme-provider/theme-provider';
import Sidebar from '../../modules/sidebar/Sidebar';
import ReduxProvider from '@/redux/provider';

import Header from '../../common/components/header/header';
import { Providers } from '../../common/nextui/providers';
import { APIProvider } from '@vis.gl/react-google-maps';

const inter = Inter({ subsets: ['latin'] });

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
        <meta name="description">{'SWIVY APP'}</meta>
      </Head>
      <body className={`${inter.className}   dark:bg-[#192428]`}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <APIProvider apiKey={apiKey}>
              <Providers>
                <Header lang={lang} />
                <div className="flex">
                  <div className="w-2/12 fixed">
                    <Sidebar />
                  </div>
                  <div className="w-10/12 ml-auto h-screen overflow-y-auto">
                    {children}
                  </div>
                </div>
              </Providers>
            </APIProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
