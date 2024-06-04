'use client';
import PosMap from '@/app/common/components/maps/maps-management/PosMap';
import IconsHeaders from '@/app/common/mobileComponents/components/IconsHeaders';
import BottomSheet from '@/app/common/mobileComponents/components/bottomSheet';
import DataActions from '@/app/common/mobileComponents/modules/maps/bottomsSheets/bottomsheetDataActions/dataAction';
import { useGetRoads, useManagePosInStore } from '@/app/hooks/API/usePos';
import { getUserCookies } from '@/core/cookies/cookies';
import PointOfSales from '@/core/models/Pos';
import Road from '@/core/models/Roads';
import { setPosList, setRoards } from '@/redux/features/roard-management-slice';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { road, shopData, pos, dispatch } = useManagePosInStore();
  const user = getUserCookies();
  const roads = useGetRoads(user?._id || '');
  const [myRoutes, setMyRoutes] = useState<Road[]>([]);

  /** this function save all :
   * - the Point of sales in reducer
   * - the list of ROADS*/
  function setPostOfAllRoad(roads: Road[]) {
    let pointOfSalesList: PointOfSales[] = [];

    if (roads !== undefined) {
      dispatch(setRoards(roads));
      /**
       * Get the list of point of sales into roads
       * to create a  list of POS
       */
      roads.map((road) => {
        road.roadItems.map((roadItem) => {
          pointOfSalesList.push(roadItem.posId);
        });
      });
    }
    // console.log(pointOfSalesList.length);
    // Save the list of POS into reducer
    dispatch(setPosList(pointOfSalesList));
  }

  useEffect(() => {
    if (roads.data?.data !== undefined) {
      setMyRoutes(roads.data?.data);
      /** saving Post int redux to use it into Maps  */
      setPostOfAllRoad(roads.data?.data);
      // console.log(road);
    }

    return () => {};
  }, [roads.data?.data]);

  //   console.log(myRoutes);
  //   console.log(pos, 'dui²²²²²²²²²²²²²²²²²²²');
  //   console.log(road);

  const [tabs, setTabs] = useState('settings');
  const [bottomSheet, setBottomSheet] = useState<
    'settings' | 'add' | 'shop' | null
  >(null);

  return (
    <div className="flex">
      <div className="absolute z-20 right-0 top-0 h-[55px] items-center m-3 flex gap-4 justify-end">
        {' '}
        <IconsHeaders
          currentModal={tabs}
          setTabs={setTabs}
          type="settings"
          value="settings"
          openModal={() => setBottomSheet('settings')}
        />
        <IconsHeaders
          currentModal={tabs}
          setTabs={setTabs}
          type="add"
          value="add"
          openModal={() => setBottomSheet('add')}
        />
      </div>

      <div className="mt-[80px] w-full">{children}</div>

      {tabs === 'add' && bottomSheet === 'add' && (
        <BottomSheet
          type="withDataActions"
          isOpen={bottomSheet === 'add'}
          close={() => setBottomSheet(null)}
          title="Actions"
          description="Access to your custom map options"
          className={` h-[75%] ${
            bottomSheet === 'add' ? 'animate-sheet-up' : 'animate-sheet-down'
          } `}
        >
          <DataActions />
        </BottomSheet>
      )}

      {/** Bottomsheet Modal for settings */}
      {tabs === 'settings' && bottomSheet === 'settings' && (
        <BottomSheet
          type="empty"
          isOpen={bottomSheet === 'settings'}
          close={() => setBottomSheet(null)}
          title="Daily Tasks"
          className={`h-[102%]  ${
            bottomSheet === 'settings'
              ? 'animate-sheet-up'
              : 'animate-sheet-down'
          } `}
        >
          <PosMap roads={roads.data?.data} />
        </BottomSheet>
      )}
    </div>
  );
}
