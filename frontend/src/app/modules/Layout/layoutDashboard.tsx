'use client';
import Header from '@/app/common/components/header/header';
import React, { ReactNode, useContext, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useToggleSidebar } from '@/app/hooks/useToggleSidebar';

export const LayoutDashboard: React.FC<{
  lang: string;
  children: ReactNode;
}> = ({ lang, children }) => {
  const { toggleSideBarState } = useToggleSidebar();

  return (
    <>
      <div className="flex w-full dark:bg-secondaryDark">
        <div
          className={`${
            toggleSideBarState ? 'w-[85px]' : 'w-[290px] '
          } fixed z-10`}
        >
          <Sidebar />
        </div>
        <div
          className={`${
            toggleSideBarState ? 'w-[calc(100%-85px)]' : 'w-[calc(100%-290px)] '
          } ml-auto  overflow-y-auto relative`}
        >
          <Header lang={lang} />
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutDashboard;
