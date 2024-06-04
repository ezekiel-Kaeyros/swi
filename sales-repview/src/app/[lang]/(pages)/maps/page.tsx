'use client';
import IconsHeaders from '@/app/common/mobileComponents/components/IconsHeaders';
import { useEffect, useState } from 'react';
import DailyRoute from '@/app/common/mobileComponents/modules/maps/dailyRoute/dailyRoute';
import RoadsItem from '@/core/models/RoadsItem';
import { usePathname } from 'next/navigation';
import { getUserCookies } from '@/core/cookies/cookies';
import { useGetRoads } from '@/app/hooks/API/usePos';

export default function Page({}) {
  return (
    <>
      <div className="w-full h-full  text-white ">
        <div className="px-4 w-full mx-auto flex  ">
          <div className="  w-full flex text-start justify-start items-start">
            {' '}
            <span className="text-[32px]  leading-[40px] text-white font-bold">
              {' '}
              Daily Routes
            </span>
          </div>
        </div>
        <div className="flex flex-col h-100vh overflow-hidden overflow-y-auto p-4 ">
          <DailyRoute />
        </div>
      </div>
    </>
  );
}
