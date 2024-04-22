import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from '../../common/dark-mode/theme-provider/theme-provider';
import Sidebar from '../../modules/sidebar/Sidebar';
import ReduxProvider from '@/redux/provider';

import Header from '../../common/components/header/header';
import { Providers } from '../../common/nextui/providers';
import { APIProvider } from '@vis.gl/react-google-maps';
import AgentModal from '@/app/[lang]/(pages)/components/agents-creation/AgentModal';
import LayoutComponent from './LayoutComponent';
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
      <body className={`font-articulat dark:bg-[#192428]`}>
        {/* ${inter.className}  */}
        <LayoutComponent lang={ lang }>
          { children }
        </LayoutComponent>
      </body>
    </html>
  );
}
