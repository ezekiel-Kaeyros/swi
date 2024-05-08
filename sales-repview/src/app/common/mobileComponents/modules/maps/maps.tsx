'use client';
import HeaderBellSvgIcon from '@/app/common/components/SvgCustomIcons/ringSvgIcon';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Tabs, { Tab } from './components/tabs';
import ActivitiesMaps from './bottomSheetshop/activities-maps';
import PosMap from '@/app/common/components/maps/PosMap';
import BottomSheet from '../../components/bottomSheet';
import { Filtertype } from '../../types/filter';
import Filter from '../../components/filter';
import AllActivites from './bottomsheet-taks-and-activities/AllActivites';
import DailyActivityTasks from './bottomsheet-taks-and-activities/dailyActivityTasks';
import DailyTasks from './bottomsheet-taks-and-activities/dailyTasks';
import DataActions from './bottomsheetDataActions/dataAction';
import AllDirections from '@/app/common/components/maps/AllDirections';

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
      {type === 'settings' && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4917 1.66666H6.50835C3.47502 1.66666 1.66669 3.47499 1.66669 6.50832V13.4917C1.66669 16.525 3.47502 18.3333 6.50835 18.3333H13.4917C16.525 18.3333 18.3334 16.525 18.3334 13.4917V6.50832C18.3334 3.47499 16.525 1.66666 13.4917 1.66666ZM8.30835 12.4167L6.43335 14.2917C6.30835 14.4167 6.15002 14.475 5.99169 14.475C5.83335 14.475 5.66669 14.4167 5.55002 14.2917L4.92502 13.6667C4.67502 13.425 4.67502 13.025 4.92502 12.7833C5.16669 12.5417 5.55835 12.5417 5.80835 12.7833L5.99169 12.9667L7.42502 11.5333C7.66669 11.2917 8.05835 11.2917 8.30835 11.5333C8.55002 11.775 8.55002 12.175 8.30835 12.4167ZM8.30835 6.58332L6.43335 8.45832C6.30835 8.58332 6.15002 8.64166 5.99169 8.64166C5.83335 8.64166 5.66669 8.58332 5.55002 8.45832L4.92502 7.83332C4.67502 7.59166 4.67502 7.19166 4.92502 6.94999C5.16669 6.70832 5.55835 6.70832 5.80835 6.94999L5.99169 7.13332L7.42502 5.69999C7.66669 5.45832 8.05835 5.45832 8.30835 5.69999C8.55002 5.94166 8.55002 6.34166 8.30835 6.58332ZM14.6334 13.85H10.2584C9.91669 13.85 9.63335 13.5667 9.63335 13.225C9.63335 12.8833 9.91669 12.6 10.2584 12.6H14.6334C14.9834 12.6 15.2584 12.8833 15.2584 13.225C15.2584 13.5667 14.9834 13.85 14.6334 13.85ZM14.6334 8.01666H10.2584C9.91669 8.01666 9.63335 7.73332 9.63335 7.39166C9.63335 7.04999 9.91669 6.76666 10.2584 6.76666H14.6334C14.9834 6.76666 15.2584 7.04999 15.2584 7.39166C15.2584 7.73332 14.9834 8.01666 14.6334 8.01666Z"
            fill={tabs === 'settings' ? `white` : '#BABABA'}
          />
        </svg>
      )}
      {type === 'add' && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1.66666C5.40835 1.66666 1.66669 5.40832 1.66669 9.99999C1.66669 14.5917 5.40835 18.3333 10 18.3333C14.5917 18.3333 18.3334 14.5917 18.3334 9.99999C18.3334 5.40832 14.5917 1.66666 10 1.66666ZM13.3334 10.625H10.625V13.3333C10.625 13.675 10.3417 13.9583 10 13.9583C9.65835 13.9583 9.37502 13.675 9.37502 13.3333V10.625H6.66669C6.32502 10.625 6.04169 10.3417 6.04169 9.99999C6.04169 9.65832 6.32502 9.37499 6.66669 9.37499H9.37502V6.66666C9.37502 6.32499 9.65835 6.04166 10 6.04166C10.3417 6.04166 10.625 6.32499 10.625 6.66666V9.37499H13.3334C13.675 9.37499 13.9584 9.65832 13.9584 9.99999C13.9584 10.3417 13.675 10.625 13.3334 10.625Z"
            fill={tabs === 'settings' ? `white` : '#BABABA'}
          />
        </svg>
      )}
    </motion.div>
  );
};

export default function Maps() {
  const [tabs, setTabs] = useState('settings');
  const [currentSelectedSHop, setCurrentSelectedSHop] = useState(0);
  const [bottomSheet, setBottomSheet] = useState<
    'settings' | 'add' | 'shop' | null
  >(null);

  const shopTasks: Tab[] = [
    {
      title: 'Activities (10)',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4917 1.66666H6.50833C3.475 1.66666 1.66667 3.47499 1.66667 6.50832V13.4833C1.66667 16.525 3.475 18.3333 6.50833 18.3333H13.4833C16.5167 18.3333 18.325 16.525 18.325 13.4917V6.50832C18.3333 3.47499 16.525 1.66666 13.4917 1.66666ZM14.3833 8.29999L12.4583 10.7833C12.2167 11.0917 11.875 11.2917 11.4833 11.3333C11.0917 11.3833 10.7083 11.275 10.4 11.0333L8.875 9.83332C8.81667 9.78332 8.75 9.78332 8.71667 9.79166C8.68333 9.79166 8.625 9.80832 8.575 9.87499L6.59167 12.45C6.46667 12.6083 6.28333 12.6917 6.1 12.6917C5.96667 12.6917 5.83333 12.65 5.71667 12.5583C5.44167 12.35 5.39167 11.9583 5.6 11.6833L7.58333 9.10832C7.825 8.79999 8.16667 8.59999 8.55833 8.54999C8.94167 8.49999 9.33333 8.60832 9.64167 8.84999L11.1667 10.05C11.225 10.1 11.2833 10.1 11.325 10.0917C11.3583 10.0917 11.4167 10.075 11.4667 10.0083L13.3917 7.52499C13.6 7.24999 14 7.19999 14.2667 7.41666C14.5417 7.64166 14.5917 8.03332 14.3833 8.29999Z"
            fill="white"
          />
        </svg>
      ),
      content: <ActivitiesMaps />,
    },
    {
      title: 'Tasks (20)',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4917 1.66666H6.50835C3.47502 1.66666 1.66669 3.47499 1.66669 6.50832V13.4917C1.66669 16.525 3.47502 18.3333 6.50835 18.3333H13.4917C16.525 18.3333 18.3334 16.525 18.3334 13.4917V6.50832C18.3334 3.47499 16.525 1.66666 13.4917 1.66666ZM8.30835 12.4167L6.43335 14.2917C6.30835 14.4167 6.15002 14.475 5.99169 14.475C5.83335 14.475 5.66669 14.4167 5.55002 14.2917L4.92502 13.6667C4.67502 13.425 4.67502 13.025 4.92502 12.7833C5.16669 12.5417 5.55835 12.5417 5.80835 12.7833L5.99169 12.9667L7.42502 11.5333C7.66669 11.2917 8.05835 11.2917 8.30835 11.5333C8.55002 11.775 8.55002 12.175 8.30835 12.4167ZM8.30835 6.58332L6.43335 8.45832C6.30835 8.58332 6.15002 8.64166 5.99169 8.64166C5.83335 8.64166 5.66669 8.58332 5.55002 8.45832L4.92502 7.83332C4.67502 7.59166 4.67502 7.19166 4.92502 6.94999C5.16669 6.70832 5.55835 6.70832 5.80835 6.94999L5.99169 7.13332L7.42502 5.69999C7.66669 5.45832 8.05835 5.45832 8.30835 5.69999C8.55002 5.94166 8.55002 6.34166 8.30835 6.58332ZM14.6334 13.85H10.2584C9.91669 13.85 9.63335 13.5667 9.63335 13.225C9.63335 12.8833 9.91669 12.6 10.2584 12.6H14.6334C14.9834 12.6 15.2584 12.8833 15.2584 13.225C15.2584 13.5667 14.9834 13.85 14.6334 13.85ZM14.6334 8.01666H10.2584C9.91669 8.01666 9.63335 7.73332 9.63335 7.39166C9.63335 7.04999 9.91669 6.76666 10.2584 6.76666H14.6334C14.9834 6.76666 15.2584 7.04999 15.2584 7.39166C15.2584 7.73332 14.9834 8.01666 14.6334 8.01666Z"
            fill={tabs === 'settings' ? `white` : '#BABABA'}
          />
        </svg>
      ),
      content: <p>tasks COntent</p>,
    },
  ];

  const dailyTaskTabs: Tab[] = [
    {
      title: 'All (30)',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4917 13.0583L11.125 10H8.86669L5.50002 13.0583C4.55836 13.9083 4.25002 15.2167 4.70836 16.4C5.16669 17.575 6.28336 18.3333 7.54169 18.3333H12.45C13.7167 18.3333 14.825 17.575 15.2834 16.4C15.7417 15.2167 15.4334 13.9083 14.4917 13.0583ZM11.5167 15.1167H8.48336C8.16669 15.1167 7.91669 14.8583 7.91669 14.55C7.91669 14.2417 8.17502 13.9833 8.48336 13.9833H11.5167C11.8334 13.9833 12.0834 14.2417 12.0834 14.55C12.0834 14.8583 11.825 15.1167 11.5167 15.1167Z"
            fill="#F7F9FF"
          />
          <path
            d="M15.2916 3.59996C14.8333 2.42496 13.7166 1.66663 12.4583 1.66663H7.54164C6.2833 1.66663 5.16664 2.42496 4.7083 3.59996C4.2583 4.78329 4.56664 6.09163 5.5083 6.94163L8.87497 9.99996H11.1333L14.5 6.94163C15.4333 6.09163 15.7416 4.78329 15.2916 3.59996ZM11.5166 6.02496H8.4833C8.16664 6.02496 7.91664 5.76663 7.91664 5.45829C7.91664 5.14996 8.17497 4.89163 8.4833 4.89163H11.5166C11.8333 4.89163 12.0833 5.14996 12.0833 5.45829C12.0833 5.76663 11.825 6.02496 11.5166 6.02496Z"
            fill="#BABABA"
          />
        </svg>
      ),
      content: <AllActivites />,
    },
    {
      title: 'Activities (10)',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4917 1.66666H6.50833C3.475 1.66666 1.66667 3.47499 1.66667 6.50832V13.4833C1.66667 16.525 3.475 18.3333 6.50833 18.3333H13.4833C16.5167 18.3333 18.325 16.525 18.325 13.4917V6.50832C18.3333 3.47499 16.525 1.66666 13.4917 1.66666ZM14.3833 8.29999L12.4583 10.7833C12.2167 11.0917 11.875 11.2917 11.4833 11.3333C11.0917 11.3833 10.7083 11.275 10.4 11.0333L8.875 9.83332C8.81667 9.78332 8.75 9.78332 8.71667 9.79166C8.68333 9.79166 8.625 9.80832 8.575 9.87499L6.59167 12.45C6.46667 12.6083 6.28333 12.6917 6.1 12.6917C5.96667 12.6917 5.83333 12.65 5.71667 12.5583C5.44167 12.35 5.39167 11.9583 5.6 11.6833L7.58333 9.10832C7.825 8.79999 8.16667 8.59999 8.55833 8.54999C8.94167 8.49999 9.33333 8.60832 9.64167 8.84999L11.1667 10.05C11.225 10.1 11.2833 10.1 11.325 10.0917C11.3583 10.0917 11.4167 10.075 11.4667 10.0083L13.3917 7.52499C13.6 7.24999 14 7.19999 14.2667 7.41666C14.5417 7.64166 14.5917 8.03332 14.3833 8.29999Z"
            fill="white"
          />
        </svg>
      ),
      content: <DailyActivityTasks />,
    },
    {
      title: 'Tasks (20)',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4917 1.66666H6.50835C3.47502 1.66666 1.66669 3.47499 1.66669 6.50832V13.4917C1.66669 16.525 3.47502 18.3333 6.50835 18.3333H13.4917C16.525 18.3333 18.3334 16.525 18.3334 13.4917V6.50832C18.3334 3.47499 16.525 1.66666 13.4917 1.66666ZM8.30835 12.4167L6.43335 14.2917C6.30835 14.4167 6.15002 14.475 5.99169 14.475C5.83335 14.475 5.66669 14.4167 5.55002 14.2917L4.92502 13.6667C4.67502 13.425 4.67502 13.025 4.92502 12.7833C5.16669 12.5417 5.55835 12.5417 5.80835 12.7833L5.99169 12.9667L7.42502 11.5333C7.66669 11.2917 8.05835 11.2917 8.30835 11.5333C8.55002 11.775 8.55002 12.175 8.30835 12.4167ZM8.30835 6.58332L6.43335 8.45832C6.30835 8.58332 6.15002 8.64166 5.99169 8.64166C5.83335 8.64166 5.66669 8.58332 5.55002 8.45832L4.92502 7.83332C4.67502 7.59166 4.67502 7.19166 4.92502 6.94999C5.16669 6.70832 5.55835 6.70832 5.80835 6.94999L5.99169 7.13332L7.42502 5.69999C7.66669 5.45832 8.05835 5.45832 8.30835 5.69999C8.55002 5.94166 8.55002 6.34166 8.30835 6.58332ZM14.6334 13.85H10.2584C9.91669 13.85 9.63335 13.5667 9.63335 13.225C9.63335 12.8833 9.91669 12.6 10.2584 12.6H14.6334C14.9834 12.6 15.2584 12.8833 15.2584 13.225C15.2584 13.5667 14.9834 13.85 14.6334 13.85ZM14.6334 8.01666H10.2584C9.91669 8.01666 9.63335 7.73332 9.63335 7.39166C9.63335 7.04999 9.91669 6.76666 10.2584 6.76666H14.6334C14.9834 6.76666 15.2584 7.04999 15.2584 7.39166C15.2584 7.73332 14.9834 8.01666 14.6334 8.01666Z"
            fill={tabs === 'settings' ? `white` : '#BABABA'}
          />
        </svg>
      ),
      content: <DailyTasks />,
    },
  ];

  // Lit for filter data in tabs
  const filter: Filtertype[] = [
    {
      id: 1,
      title: ' Dovv Bonamoussadi',
    },
    {
      id: 2,
      title: 'Santa Lucia Bonaberi',
    },
    {
      id: 3,
      title: 'Dovv Mendong',
    },
    {
      id: 4,
      title: 'Dovv Olezoa',
    },
    {
      id: 5,
      title: 'Dovv Mokolo',
    },
    {
      id: 6,
      title: 'Dovv Mokolo',
    },
  ];

  return (
    <>
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
      <div className="w-full h-full  text-white">
        <AllDirections />
      </div>

      {/** Bottomsheet Modal for settings */}
      {tabs === 'settings' && bottomSheet === 'settings' && (
        <BottomSheet
          type="Simple"
          isOpen={bottomSheet === 'settings'}
          close={() => setBottomSheet(null)}
          title="Daily Tasks"
          className={`h-[102%]  ${
            bottomSheet === 'settings'
              ? 'animate-sheet-up'
              : 'animate-sheet-down'
          } `}
        >
          <Tabs
            tabs={dailyTaskTabs}
            filter={
              <Filter
                currentShopSeletected={currentSelectedSHop}
                selectCurrentShop={setCurrentSelectedSHop}
                filter={filter}
              />
            }
          />
        </BottomSheet>
      )}
      {/** Bottomsheet Modal Actions */}
      {tabs === 'shop' && bottomSheet === 'shop' && (
        <BottomSheet
          type="Simple"
          isOpen={bottomSheet === 'shop'}
          close={() => setBottomSheet(null)}
          title="Dov Bonamoussadi"
          className={' h-[95%]'}
        >
          <Tabs tabs={shopTasks} />
        </BottomSheet>
      )}

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
