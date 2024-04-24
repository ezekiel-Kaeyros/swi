'use client';
import { ThemeProvider } from '@/app/common/dark-mode/theme-provider/theme-provider';
import { Providers } from '@/providers/nextui/providers';
import ReduxProvider from '@/redux/provider';
import { APIProvider } from '@vis.gl/react-google-maps';
import React from 'react';
import { ReactQueryProvider } from '@/providers/reactQueryProvider/ReactQueryProvider';
import LayoutDashboard from '@/app/modules/Layout/layoutDashboard';

// import Header from '@/app/common/components/header/header';
// import Sidebar from '@/app/modules/sidebar/Sidebar';
// import AgentModal from './components/agents-creation/AgentModal';
// import LayoutChildrenComp from './testPage/LayoutChildrenComp';
// import { QueryClient, QueryClientProvider } from 'react-query';

const LayoutComponent = ({ children, lang }: any) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error('Missing Google Maps API key');
  }

  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <APIProvider apiKey={apiKey}>
            <Providers>
              <LayoutDashboard lang={lang}>{children}</LayoutDashboard>
            </Providers>
          </APIProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
};

export default LayoutComponent;
