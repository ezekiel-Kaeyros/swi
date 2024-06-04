'use client';
import HeaderBellSvgIcon from '@/app/common/components/SvgCustomIcons/ringSvgIcon';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Tabs, { Tab } from './components/tabs';
import ActivitiesMaps from './bottomsSheets/bottomSheetshop/activities-maps';
import PosMap from '@/app/common/components/maps/maps-management/PosMap';
import BottomSheet from '../../components/bottomSheet';
import { Filtertype } from '../../types/filter';
import Filter from '../../components/filter';
import AllActivites from './bottomsSheets/bottomsheet-taks-and-activities/AllActivites';
import DailyActivityTasks from './bottomsSheets/bottomsheet-taks-and-activities/dailyActivityTasks';
import DailyTasks from './bottomsSheets/bottomsheet-taks-and-activities/dailyTasks';
import DataActions from './bottomsSheets/bottomsheetDataActions/dataAction';
import AllDirections from '@/app/common/components/maps/AllDirections';
import { useGetRoads, useManagePosInStore } from '@/app/hooks/API/usePos';
import { useManageUserInStore } from '@/app/hooks/API/useAuth';
import {
  setDailyRoads,
  setPosList,
  setRoards,
  setShopData,
} from '@/redux/features/roard-management-slice';
import Road from '@/core/models/Roads';
import { getUserCookies } from '@/core/cookies/cookies';
import { IUser } from '@/core/models/User';
import {
  DailyTaskActitivitiesTabSvgIcon,
  DailyTaskActivitiesTabSvgIcon,
  DailyTaskAllActivitiesSvgIcon,
  MapSvgIcon,
} from '@/core/svg/SvgIcon';
import { usePathname } from 'next/navigation';
import PointOfSales from '@/core/models/Pos';
import ActivitiesItem from '@/core/models/ActivitiItem';
import RoadsItem from '@/core/models/RoadsItem';
import DailyRoute from './dailyRoute/dailyRoute';

const IconsHeaders = ({
  setTabs,
  value,
  openModal,
  type,
  currentModal,
}: {
  setTabs: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  openModal?: () => void;
  type: 'settings' | 'add';
  currentModal: string;
}) => {
  const tabs = currentModal;

  return (
    <motion.div
      onClick={() => {
        setTabs(value);
        if (openModal) {
          openModal();
        }
      }}
      className={`rounded-full p-[14px] ${
        tabs === value ? 'bg-[#3772FF]' : 'bg-bgColorDark'
      }   gap-4 h-[48px] w-[48px]`}
      key={tabs === value ? value : 'empty'}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {type === 'settings' && <MapSvgIcon type={tabs} />}
      {type === 'add' && <DailyTaskActitivitiesTabSvgIcon state={tabs} />}
    </motion.div>
  );
};

export default function Maps({ currentRoad }: { currentRoad: Road | null }) {
  const getId = usePathname();
  const idOfRoadInUrl = getId.split('/').at(-1);

  const user = getUserCookies();
  const roads = useGetRoads(user?._id || '');
  const [roadItemSelected, setRoadItemSelected] = useState<RoadsItem[]>([]);
  // const [currentRoad, setCurrentRoad] = useState<Road>();

  // const { road, dailyRoads, pos, dispatch } = useManagePosInStore();
  const [pointOfSale, setPointOfSale] = useState<PointOfSales[]>([]);

  const [tabs, setTabs] = useState('settings');
  const [currentSelectedSHop, setCurrentSelectedSHop] = useState('');

  // console.log(currentSelectedSHop);
  const [bottomSheet, setBottomSheet] = useState<
    'settings' | 'add' | 'shop' | null
  >(null);

  useEffect(() => {
    setRoadItemSelected([]);
    if (currentSelectedSHop !== '') {
      const filter = currentRoad?.roadItems.filter(
        (c) => c.posId._id === currentSelectedSHop
      );
      setRoadItemSelected(filter || []);
    }

    return () => {};
  }, [currentSelectedSHop]);

  const dailyTaskTabs: Tab[] = [
    {
      title: 'All (30)',
      icon: <DailyTaskAllActivitiesSvgIcon />,
      content: (
        <AllActivites
          dailyRoadItem={
            currentSelectedSHop === ''
              ? currentRoad?.roadItems
              : roadItemSelected
          }
          currentItemShop={currentSelectedSHop}
        />
      ),
    },
    {
      title: 'Activities (10)',
      icon: <DailyTaskActivitiesTabSvgIcon />,
      content: (
        <DailyActivityTasks
          dailyRoadItem={
            currentSelectedSHop === ''
              ? currentRoad?.roadItems
              : roadItemSelected
          }
          currentItemShop={currentSelectedSHop}
        />
      ),
    },
    {
      title: 'Tasks (20)',
      icon: <DailyTaskActitivitiesTabSvgIcon state={tabs} />,
      content: (
        <DailyTasks
          dailyRoadItem={
            currentSelectedSHop === ''
              ? currentRoad?.roadItems
              : roadItemSelected
          }
          currentItemShop={currentSelectedSHop}
        />
      ),
    },
  ];
  console.log(currentRoad);
  return (
    <>
      <div className="w-full h-full  text-white  ">
        <div className="p-4 w-full mx-auto flex  ">
          <div className="  w-full currentSelectedSHopflex text-start justify-start items-start">
            {' '}
            <span className="text-[32px] line-clamp-1   leading-[40px] text-white font-bold">
              {' '}
              {currentRoad?.name}
            </span>
          </div>
        </div>
        <div className=" w-full h-screen ">
          <Tabs
            tabs={dailyTaskTabs}
            filter={
              <Filter
                currentShopSeletected={currentSelectedSHop}
                selectCurrentShop={setCurrentSelectedSHop}
                filter={(currentRoad?.roadItems || []).map((pos) => {
                  return {
                    id: pos.posId._id,
                    title: pos.posId.name,
                  };
                })}
              />
            }
          />
        </div>
      </div>
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
    </>
  );
}
