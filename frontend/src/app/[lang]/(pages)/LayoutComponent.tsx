"use client";
import Header from '@/app/common/components/header/header'
import { ThemeProvider } from '@/app/common/dark-mode/theme-provider/theme-provider'
import { Providers } from '@/app/common/nextui/providers'
import Sidebar from '@/app/modules/sidebar/Sidebar'
import ReduxProvider from '@/redux/provider'
import { APIProvider } from '@vis.gl/react-google-maps'
import React from 'react'
import AgentModal from './components/agents-creation/AgentModal';

const LayoutComponent = ({ children, lang }: any) => {
    // const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const apiKey = "AIzaSyDgt80ssZkZSllaUnnyf0wqoTGPHdsxC24";
    console.log(apiKey, "AAAAAAAAAA")

    if (!apiKey) {
        throw new Error('Missing Google Maps API key');
    }

  return (
    <ReduxProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <APIProvider apiKey={apiKey}>
                <Providers>
                    <Header lang={lang} />
                    <div className="flex relative">
                        {/* <div className='flex justify-center items-center fixed w-full h-screen z-10 top-0 left-0'>
                            <div className='backdrop-blur-lg h-screen w-full absolute'>
                            </div>
                            <AgentModal />
                        </div> */}
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
  )
}

export default LayoutComponent