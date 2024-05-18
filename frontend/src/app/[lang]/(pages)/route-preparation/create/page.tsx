'use client';
import PointOfSalesList from '@/app/common/components/route-planning/point-of-sales-list/PointOfSalesList';
import HeaderRoutePreparation from '@/app/common/components/route-planning/header/HeaderRoutePreparation';
import HeaderRouteCreation from '@/app/common/components/route-planning/header/HeaderRouteCreation';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import BackButton from '@/app/common/components/back-button/BackButton';
import {
  displayAllRoutes,
  displayPOSMap,
  toggleMaps,
} from '@/redux/features/route-planning-slice';
import { useEffect } from 'react';
import InputField from '@/app/common/components/forms/text-field/InputField';
import search from '../../../../../../public/images/search-normal (1).svg';
import filter from '../../../../../../public/images/Button (1).svg';
import Image from 'next/image';
import {
  FilterIcon,
  GridViewIcon,
  SearchIcon,
} from '@/app/common/components/svgs/SvgsIcons';
import { ScrollArea } from '@/components/ui/scroll-area';
import { setTitle } from '@/app/common/components/header/slice/header-title-slice';
import { useHeaderTitle } from '@/app/hooks/useHeaderTitle';

export default function PointOfSale({}) {
  /** Set Header Title Depending on the Module you are */
  const { dispatch, headerTitleState } = useHeaderTitle();
  useEffect(() => {
    dispatch(setTitle('Route Creation')); 

    return () => {
      dispatch(
        setTitle('')
      ); /** Just set the name of header to empty to remote if went changing page  */
    };
  }, [dispatch]);

  const { toggleMapsValue, showAllRoutes, showPOSMap } = useRoutePlanning();

  console.log(
    'toggleMapsValue, showAllRoutes, showPOSMap in create page',
    toggleMapsValue, 
    showAllRoutes, 
    showPOSMap
  );

  /** for search input compoenents */
  function onSearch(e: any) {
    console.log(e);
  }  
 
  // useEffect(() => {
  //   dispatch(displayAllRoutes({ showAllRoutes: false }));
  //   dispatch(toggleMaps({ toggle: false }));
  //   dispatch(displayPOSMap({ posMapDisplayState: true }));
  // }, [showPOSMap]);

  return (
    <div className=" overflow-y-hidden h-[calc(100vh-80px)] w-full  ">
      {/* Display details */}

      {/* Tab Navigator */}
      <div className=" flex flex-col w-full h-screen overflow-y-auto p-3 ">
        <div className="h-[200px] p-4">
          <div className="flex items-center ">
            {/* <div
          onClick={() => {
            // dispatch(displayAllRoutes({ showAllRoutes: true })); 
            // dispatch(displayPOSMap({ posMapDisplayState: false }));
          }}
        >
          <BackButton href="route-preparation" />
        </div>
        <h1 className="ml-16 font-bold">Edit a route</h1> */}
            <div className="flex flex-row w-full items-center gap-3 my-3">
              <InputField
                onChange={(e) => onSearch(e)}
                svg={<SearchIcon height="30" width="30" color="none" />}
                name="name"
                placeholder="Search Point of Sales"
              />
              <div className="bg-bgColorDark cursor-pointer p-4 flex justify-center items-center rounded-xl h-[50px]">
                <FilterIcon height="25" width="25" color="none" />
              </div>
              <div className="bg-bgColorDark cursor-pointer p-4 flex justify-center items-center rounded-xl h-[50px]">
                <GridViewIcon height="25" width="25" color="none" />
              </div>
            </div>
          </div>

          <HeaderRoutePreparation />
        </div>

        {/* Add point of sales form */}
        <ScrollArea className="no-scrollbar overflow-y-auto gap-3 h-screen  items-center justify-center flex flex-col  p-4 mt-2 ">
          <PointOfSalesList />
        </ScrollArea>
      </div>
    </div>
  );
}
