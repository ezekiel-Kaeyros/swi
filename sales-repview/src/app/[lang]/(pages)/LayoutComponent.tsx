'use client';
import React, { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NavigationBar from '@/app/common/mobileComponents/bottomNavigationBar/navigationBar';

const LayoutComponent = ({ children, lang }: any) => {
  const currentRoute = usePathname();

  return (
    <div className="w-full flex flex-col  bg-primaryDark">
      <div className="w-full h-[100dvh] ">{children}</div>

      <NavigationBar
        tab={currentRoute.split('/').at(-1) || 'home'}
        lang={lang}
      />
    </div>
  );
};

export default LayoutComponent;
