import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import LayoutComponent from './LayoutComponent';
import NextTopLoader from 'nextjs-toploader';
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

  //
  // if (!apiKey) {
  //   throw new Error('Missing Google Maps API key');
  // }
  return (
    <html lang={lang}>
      <Head>
        <meta name="description">{'SWIVY APP'}</meta>
      </Head>
      <body className={`font-articulat bg-white dark:bg-[#192428]`}>
        {/* ${inter.className}  */}
        <LayoutComponent lang={lang}>
          {/* <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          /> */}

          {/* <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          /> */}

          {/* <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
            <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          /> */}
          {children}
        </LayoutComponent>
      </body>
    </html>
  );
}
