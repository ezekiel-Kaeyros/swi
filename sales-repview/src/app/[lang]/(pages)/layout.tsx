'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import LayoutComponent from './LayoutComponent';
import { ReactQueryProvider } from '@/core/providers/reactQueryProvider/ReactQueryProvider';
import ReduxProvider from '@/redux/provider';
import { APIProvider } from '@vis.gl/react-google-maps';
import { ThemeProvider } from 'next-themes';
import { Providers } from '@/core/providers/nextui/providers';
import { OnlineStatusProvider } from '@/core/providers/OnLineStatusProvider';
import { Toaster } from 'react-hot-toast';

// import AgentForm from '@/app/common/components/agents-creation/agents-form/AgentForm';
// import AgentModal from '@/app/common/components/agents-creation/agents-form/AgentModal';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  //const apiKey = 'AIzaSyDgt80ssZkZSllaUnnyf0wqoTGPHdsxC24';
  console.log(apiKey, 'AAAAAAAAAA');

  if (!apiKey) {
    throw new Error('Missing Google Maps API key');
  }

  return (
    <html lang={lang}>
      <Head>
        <meta name="description">{'SWIVY APP'}</meta>
      </Head>
      <body className={`font-articulat  dark:bg-bgColorDark`}>
        {/* ${inter.className}  */}
        <OnlineStatusProvider>
          <ReduxProvider>
            <ReactQueryProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                <APIProvider apiKey={apiKey}>
                  <Providers>
                    <LayoutComponent lang={lang}>{children}</LayoutComponent>
                    <Toaster />
                  </Providers>
                </APIProvider>
              </ThemeProvider>
            </ReactQueryProvider>
          </ReduxProvider>
        </OnlineStatusProvider>
      </body>
    </html>
  );
}
