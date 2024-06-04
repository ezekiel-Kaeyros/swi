'use client';
import BottomSheet from '@/app/common/mobileComponents/components/bottomSheet';
import ActivitiesMaps from '@/app/common/mobileComponents/modules/maps/bottomsSheets/bottomSheetshop/activities-maps';
import ActivitiesTasks from '@/app/common/mobileComponents/modules/maps/bottomsSheets/bottomSheetshop/activities-tasks';
import DataActionshop from '@/app/common/mobileComponents/modules/maps/bottomsSheets/bottomSheetshop/dataActions/dataActionshop';
import Tabs, {
  Tab,
} from '@/app/common/mobileComponents/modules/maps/components/tabs';
import Maps from '@/app/common/mobileComponents/modules/maps/maps';
import { useGetRoads, useManagePosInStore } from '@/app/hooks/API/usePos';
import { useToggleShopBarState } from '@/app/hooks/commons/useToggleShopData';
import { getUserCookies } from '@/core/cookies/cookies';
import Road from '@/core/models/Roads';
import { toogleShopBottomSheet } from '@/redux/features/saleRep-slice';
import { Button } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function Page({}) {
  const [tabs] = useState('shop');
  const { dispatch, toggleShopDataState } = useToggleShopBarState();
  const { road, shopData, pos } = useManagePosInStore();
  const [currentRoad, setCurrentRoad] = useState<Road | null>(null);

  const getId = usePathname();
  const idOfRoadInUrl = getId.split('/').at(-1);

  const user = getUserCookies();
  const roads = useGetRoads(user?._id || '');

  useEffect(() => {
    if (idOfRoadInUrl !== undefined && roads.data?.data) {
      roads.data.data.map((currentRoad) => {
        if (currentRoad._id === idOfRoadInUrl) {
          setCurrentRoad(currentRoad);
        }
      });
    }

    return () => {};
  }, [roads.data?.data, getId]);

  // console.log(
  //   currentRoad,
  //   '***************************************************'
  // );

  const shopTasks: Tab[] = [
    {
      title: `Activities `,
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
      title: `Tasks `,
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
      content: <ActivitiesTasks />,
    },

    {
      title: 'Action',
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1667 4.42498L10.4584 1.89165C9.9584 1.62498 9.36673 1.62498 8.86673 1.89165L4.16673 4.42498C3.82507 4.61665 3.6084 4.98332 3.6084 5.38332C3.6084 5.79165 3.81673 6.15832 4.16673 6.34165L8.87507 8.87498C9.12507 9.00832 9.40006 9.07498 9.66673 9.07498C9.9334 9.07498 10.2167 9.00832 10.4584 8.87498L15.1667 6.34165C15.5084 6.15832 15.7251 5.79165 15.7251 5.38332C15.7251 4.98332 15.5084 4.61665 15.1667 4.42498Z"
            fill="#E8E8E8"
          />
          <path
            d="M8.10008 9.75829L3.72508 7.57495C3.38341 7.39995 3.00008 7.42495 2.67508 7.61662C2.35841 7.81662 2.16675 8.15829 2.16675 8.53329V12.6666C2.16675 13.3833 2.56675 14.025 3.20841 14.35L7.58341 16.5333C7.73341 16.6083 7.90008 16.65 8.06675 16.65C8.25841 16.65 8.45841 16.5916 8.63341 16.4916C8.95008 16.2916 9.14175 15.95 9.14175 15.575V11.4416C9.13341 10.725 8.73341 10.0833 8.10008 9.75829Z"
            fill="#E8E8E8"
          />
          <path
            d="M17.1669 8.53329V10.5833C16.7669 10.4666 16.3419 10.4166 15.9169 10.4166C14.7835 10.4166 13.6752 10.8083 12.8002 11.5083C11.6002 12.45 10.9169 13.875 10.9169 15.4166C10.9169 15.825 10.9669 16.2333 11.0752 16.625C10.9502 16.6083 10.8252 16.5583 10.7085 16.4833C10.3919 16.2916 10.2002 15.95 10.2002 15.575V11.4416C10.2002 10.725 10.6002 10.0833 11.2335 9.75829L15.6085 7.57495C15.9502 7.39995 16.3335 7.42495 16.6585 7.61662C16.9752 7.81662 17.1669 8.15829 17.1669 8.53329Z"
            fill="#E8E8E8"
          />
          <path
            d="M18.8167 13.0583C18.1334 12.2167 17.0917 11.6833 15.9167 11.6833C15.0334 11.6833 14.2167 11.9917 13.5751 12.5083C12.7084 13.1917 12.1667 14.25 12.1667 15.4334C12.1667 16.1333 12.3667 16.8 12.7084 17.3667C12.9334 17.7417 13.2167 18.0667 13.5501 18.3334H13.5584C14.2001 18.8667 15.0251 19.1834 15.9167 19.1834C16.8667 19.1834 17.7251 18.8333 18.3834 18.25C18.6751 18 18.9251 17.7 19.1251 17.3667C19.4667 16.8 19.6667 16.1333 19.6667 15.4334C19.6667 14.5333 19.3501 13.7 18.8167 13.0583ZM17.8001 14.9667L15.8001 16.8167C15.6834 16.925 15.5251 16.9833 15.3751 16.9833C15.2167 16.9833 15.0584 16.925 14.9334 16.8L14.0084 15.875C13.7667 15.6333 13.7667 15.2333 14.0084 14.9917C14.2501 14.75 14.6501 14.75 14.8917 14.9917L15.3917 15.4917L16.9501 14.05C17.2001 13.8167 17.6001 13.8333 17.8334 14.0833C18.0751 14.3417 18.0584 14.7333 17.8001 14.9667Z"
            fill="#E8E8E8"
          />
        </svg>
      ),
      content: <DataActionshop />,
    },
  ];

  console.log(toggleShopDataState);
  return (
    <div className="h-full">
      <Maps currentRoad={currentRoad} />

      {/** This bottomshet is use to display shop data when click on marker */}
      <BottomSheet
        type="Simple"
        isOpen={toggleShopDataState}
        close={() => {
          dispatch(toogleShopBottomSheet(false));
        }}
        title={shopData ? shopData.shopData.name : 'Shop'}
        className={`h-[103%] !z-50 ${
          toggleShopDataState ? 'animate-sheet-up' : 'animate-sheet-down'
        } `}
      >
        <Tabs tabs={shopTasks} />
      </BottomSheet>
    </div>
  );
}
