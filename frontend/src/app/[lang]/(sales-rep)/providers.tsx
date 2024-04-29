'use client';
import Header from '@/app/common/components/header/header';
import { ThemeProvider } from '@/app/common/dark-mode/theme-provider/theme-provider';
import { Providers } from '@/providers/nextui/providers';
import Sidebar from '@/app/modules/sidebar/Sidebar';
import ReduxProvider from '@/redux/provider';
import { APIProvider } from '@vis.gl/react-google-maps';
import React from 'react';
import LayoutDashboard from '@/app/modules/Layout/layoutDashboard';
import { ReactQueryProvider } from '@/providers/reactQueryProvider/ReactQueryProvider';

const LayoutComponent = ({ children, lang }: any) => {
  // const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const apiKey = 'AIzaSyDgt80ssZkZSllaUnnyf0wqoTGPHdsxC24';
  console.log(apiKey, 'AAAAAAAAAA');

  if (!apiKey) {
    throw new Error('Missing Google Maps API key');
  }

  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <APIProvider apiKey={apiKey}>
            <Providers>{children}</Providers>
          </APIProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
};

export default LayoutComponent;
