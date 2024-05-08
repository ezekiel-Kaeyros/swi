'use client';
import React, { useState } from 'react';
import NavigationsItem from './NavigationItem/navigationsItem';
import { navbarMenuItems } from '../data';
import { prefixNavLink } from '../const/constante';

export default function NavigationBar({
  tab,
  lang,
}: {
  tab: string;
  lang: string;
}) {
  const [currentTab, setCurrentTab] = useState(tab);

  return (
    <div className="justify-between flex h-[64px] bg-primaryDark border-t-2 border-gray-600 ">
      {navbarMenuItems.map((item, key) => {
        return (
          <div
            key={`mobile-${item.title}`}
            className=" w-full justify-center items-center flex"
          >
            <NavigationsItem
              type={item.type}
              isCurrent={currentTab.toLowerCase() === item.link}
              title={item.title}
              link={`/${item.link}`}
              setCurrentTab={setCurrentTab}
              notifications={{
                mapsNotification: 1,
                settingsNotfication: 3,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
