'use client';
import React from 'react';
import HeaderBellSvgIcon from '@/app/common/components/SvgCustomIcons/ringSvgIcon';
import { useSearchParams } from 'next/navigation';
import Home from '@/app/common/mobileComponents/modules/home/home';
import NavigationBar from '@/app/common/mobileComponents/bottomNavigationBar/navigationBar';
import Settings from '@/app/common/mobileComponents/modules/settings/settings';
import Maps from '@/app/common/mobileComponents/modules/maps/maps';
import Notification from '@/app/common/mobileComponents/modules/notifications/notifications';
import Statistic from '@/app/common/mobileComponents/modules/statistics/statistic';

const LayoutComponent = ({ children, lang }: any) => {
  // const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const apiKey = 'AIzaSyDgt80ssZkZSllaUnnyf0wqoTGPHdsxC24';
  console.log(apiKey, 'AAAAAAAAAA');

  if (!apiKey) {
    throw new Error('Missing Google Maps API key');
  }

  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab');
  console.log(currentTab);
  return (
    <div className="w-full flex flex-col h-[100dvh] bg-primaryDark">
      <div className="w-full h-[100vh]">
        {/* {currentTab === 'home' && <Home />}
        {currentTab === 'maps' && <Maps />}
        {currentTab === 'statistic' && <Statistic />}
        {currentTab === 'activity' && <div> activity</div>}
        {currentTab === 'settings' && <Settings />}
        {currentTab === 'notifications' && <Notification />} */}
        {children}
      </div>

      <NavigationBar tab={(currentTab as string) || 'home'} lang={lang} />
    </div>
  );
};

export default LayoutComponent;
