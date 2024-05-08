'use client';
import React from 'react';
import Card from './Cards/Card';
import HeaderBellSvgIcon from '@/app/common/components/SvgCustomIcons/ringSvgIcon';
import Link from 'next/link';
import { HomepageLink, prefixNavLink } from '../../const/constante';

function Home() {
  return (
    <>
      <div className="absolute right-0 top-0 h-[55px] items-center m-3 flex gap-8 justify-end">
        <span className="p-[14px] gap-4 h-[48px] w-[48px]">
          {' '}
          <Link href={`/notifications`}>
            <HeaderBellSvgIcon
              style={{
                width: 45,
                height: 40,
              }}
              className="w-full"
            />
          </Link>
        </span>
      </div>
      <div className="w-full h-full  gap-[12px] px-[16px] pt-[16px] pb-[8px] bg-primaryDark mt-[60px] text-white">
        <span className="leading-[40px] font-extrabold text-[32px] font-articulat">
          Good Morning
        </span>
        <div className="flex flex-col h-100vh overflow-hidden">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
