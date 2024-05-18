'use client';
import React, { useEffect, useState } from 'react';

import Card from '@/app/common/components/card/Card';
import PointOfSalesList from '@/app/common/components/point-of-sales/point-of-sales-list/PointOfSalesList';
import TabNavigation from '@/app/common/components/point-of-sales/tab-navigation/TabNavigation';
import SearchBar from '@/app/common/components/searchbar/SearchBar';
import { Button } from '@/app/common/components/button/Button';

import AddPOSIcon from '../../../../public/icons/addPOSIcon.svg';
import GenericNavigation from '@/app/[lang]/(pages)/components/settings-navigation/GenericNavigation';
// import { POSDisplayNavigationList } from '@/services/simulationData';
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import { AddPOSSvgIcon } from '@/app/common/components/svgs/SvgsIcons';
import Link from 'next/link';
import Tabs, { Tab } from '@/components/tabs';
import Search from '@/app/common/components/point-of-sales/search-places/SearchPlaces';
import SearchAndFilterPosForRTT from '@/app/common/components/realtime-tracking/new/SearchAndFilterPosForRTT';
import { ScrollArea } from '@/components/ui/scroll-area';
import ActivePOS from './tabs/activePos';
import InactivePOS from './tabs/inactivePos';
import { useHeaderTitle } from '@/app/hooks/useHeaderTitle';
import { setTitle } from '@/app/common/components/header/slice/header-title-slice';
import { usePathname } from 'next/navigation';

const PointOfSales = () => {
  /** Set Header Title Depending on the Module you are */
  const { dispatch, headerTitleState } = useHeaderTitle();
  useEffect(() => {
    dispatch(setTitle('Point of Sales'));

    return () => {
      dispatch(
        setTitle('')
      ); /** Just set the name of header to empty to remote if went changing page  */
    };
  }, [dispatch]);

  /** Just set the name header you want to */

  const PostList: Tab[] = [
    {
      title: 'Active POS',
      content: <ActivePOS />,
    },
    {
      title: 'Pending POS',
      content: <InactivePOS />,
    },
  ];

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className=" overflow-y-hidden  w-full ">
      {/* Display details */}

      {/* Tab Navigator */}
      <div className=" flex flex-col w-full h-screen overflow-y-auto  ">
        <div className="h-[300px] p-4">
          <ul className="flex mb-4 w-[50%] ">
            {PostList.map((tab, index) => (
              <li
                key={index}
                className={`p-[16px]  cursor-pointer flex items-center justify-center gap-2 border-b-3 text-white transition-all duration-200 ${
                  index === selectedTabIndex
                    ? 'border-b-3 border-b-settingViewBottomBorderColor  text-gray-700 font-bold '
                    : 'text-gray-500 gap-2 hover:text-gray-700'
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab?.icon && (
                  <div className="font-medium w-[20px] h-[20px]">
                    {tab?.icon}
                  </div>
                )}

                <span className="font-semibold text-[14px] font-articulat leading-[14px]  text-[#E8E8E8]">
                  {tab.title}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col  ">
            <SearchAndFilterPosForRTT />
            <TabNavigation />
            <div className="w-fit ">
              <Link
                className="bg-settingViewBottomBorderColor cursor-pointer h-[40px] px-3 py-1 flex flex-row gap-[4px] justify-center items-center rounded-3xl"
                href={`/point-of-sales/create`}
              >
                <AddPOSSvgIcon />
                Create Point of Sales
              </Link>
              {/* <Button href={`/point-of-sales/create`} >
    
              </Button> */}
            </div>
          </div>
        </div>
        <ScrollArea className="no-scrollbar overflow-y-auto  px-2 py-4 mt-2 ">
          {PostList[selectedTabIndex].content}
        </ScrollArea>
      </div>
    </div>
  );
};

export default PointOfSales;
