'use client';
import React from 'react';
import { NavigationItemType } from '../../types/NavigationItemType';
import Link from 'next/link';

function iconComponent({
  isCurrent,
  type,
}: {
  isCurrent: boolean;
  type: 'home' | 'settings' | 'statistic' | 'maps';
}) {
  if (type === 'home') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        opacity={`${isCurrent ? '1' : '0.4'}`}
      >
        <path
          d="M17.3583 6.67501L11.9 2.30834C10.8333 1.45834 9.16667 1.45001 8.10834 2.30001L2.65 6.67501C1.86667 7.30001 1.39167 8.55 1.55834 9.53334L2.60834 15.8167C2.85 17.225 4.15834 18.3333 5.58334 18.3333H14.4167C15.825 18.3333 17.1583 17.2 17.4 15.8083L18.45 9.52501C18.6 8.55001 18.125 7.30001 17.3583 6.67501ZM10.625 15C10.625 15.3417 10.3417 15.625 10 15.625C9.65834 15.625 9.375 15.3417 9.375 15V12.5C9.375 12.1583 9.65834 11.875 10 11.875C10.3417 11.875 10.625 12.1583 10.625 12.5V15Z"
          fill={`${isCurrent ? '#FFFFFF' : '#BABABA'}`}
        />
      </svg>
    );
  }
  if (type === 'maps') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          opacity={`${isCurrent ? '1' : '0.4'}`}
          clipPath="url(#clip0_3163_9096)"
        >
          <path
            d="M6.35833 2.975C6.50782 2.89347 6.66667 3.01891 6.66667 3.18918V14.4666C6.66667 14.6639 6.53158 14.8305 6.35833 14.925L4.4 16.0417C3.03333 16.825 1.90833 16.175 1.90833 14.5917V6.48334C1.90833 5.95834 2.28333 5.30834 2.75 5.04167L6.35833 2.975Z"
            fill={`${isCurrent ? '#FFFFFF' : '#BABABA'}`}
          />
          <path
            d="M12.2219 5.06227C12.3922 5.14662 12.5 5.32026 12.5 5.51033V16.2869C12.5 16.6554 12.115 16.8973 11.783 16.7374L8.40798 15.1113C8.23498 15.028 8.125 14.8529 8.125 14.6609V3.8389C8.125 3.46804 8.51456 3.22625 8.8469 3.39084L12.2219 5.06227Z"
            fill={`${isCurrent ? '#FFFFFF' : '#BABABA'}`}
          />
          <path
            d="M18.3333 5.40834V13.5167C18.3333 14.0417 17.9583 14.6917 17.4917 14.9583L14.707 16.5543C14.3736 16.7453 13.9583 16.5047 13.9583 16.1205V5.32366C13.9583 5.14414 14.0546 4.97841 14.2105 4.88942L15.8417 3.95834C17.2083 3.175 18.3333 3.825 18.3333 5.40834Z"
            fill={`${isCurrent ? '#FFFFFF' : '#BABABA'}`}
          />
        </g>
        <defs>
          <clipPath id="clip0_3163_9096">
            <rect width="20" height="20" fill="#FFFFFF" />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (type === 'settings') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity={`${isCurrent ? '1' : '0.4'}`}>
          <path
            d="M16.75 7.68333C15.2417 7.68333 14.625 6.61666 15.375 5.30833C15.8083 4.55 15.55 3.58333 14.7917 3.15L13.35 2.325C12.6917 1.93333 11.8417 2.16666 11.45 2.825L11.3583 2.98333C10.6083 4.29166 9.37501 4.29166 8.61667 2.98333L8.525 2.825C8.15 2.16666 7.30001 1.93333 6.64167 2.325L5.20001 3.15C4.44167 3.58333 4.18334 4.55833 4.61667 5.31666C5.37501 6.61666 4.75834 7.68333 3.25001 7.68333C2.38334 7.68333 1.66667 8.39166 1.66667 9.26666V10.7333C1.66667 11.6 2.37501 12.3167 3.25001 12.3167C4.75834 12.3167 5.37501 13.3833 4.61667 14.6917C4.18334 15.45 4.44167 16.4167 5.20001 16.85L6.64167 17.675C7.30001 18.0667 8.15001 17.8333 8.54167 17.175L8.63334 17.0167C9.38334 15.7083 10.6167 15.7083 11.375 17.0167L11.4667 17.175C11.8583 17.8333 12.7083 18.0667 13.3667 17.675L14.8083 16.85C15.5667 16.4167 15.825 15.4417 15.3917 14.6917C14.6333 13.3833 15.25 12.3167 16.7583 12.3167C17.625 12.3167 18.3417 11.6083 18.3417 10.7333V9.26666C18.3333 8.4 17.625 7.68333 16.75 7.68333ZM10 12.7083C8.50834 12.7083 7.29167 11.4917 7.29167 10C7.29167 8.50833 8.50834 7.29167 10 7.29167C11.4917 7.29167 12.7083 8.50833 12.7083 10C12.7083 11.4917 11.4917 12.7083 10 12.7083Z"
            fill={`${isCurrent ? 'white' : '#BABABA'}`}
          />
        </g>
      </svg>
    );
  }
  if (type === 'statistic') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4917 1.66666H6.50833C3.475 1.66666 1.66667 3.47499 1.66667 6.50832V13.4833C1.66667 16.525 3.475 18.3333 6.50833 18.3333H13.4833C16.5167 18.3333 18.325 16.525 18.325 13.4917V6.50832C18.3333 3.47499 16.525 1.66666 13.4917 1.66666ZM14.3833 8.29999L12.4583 10.7833C12.2167 11.0917 11.875 11.2917 11.4833 11.3333C11.0917 11.3833 10.7083 11.275 10.4 11.0333L8.875 9.83332C8.81667 9.78332 8.75 9.78332 8.71667 9.79166C8.68333 9.79166 8.625 9.80832 8.575 9.87499L6.59167 12.45C6.46667 12.6083 6.28333 12.6917 6.1 12.6917C5.96667 12.6917 5.83333 12.65 5.71667 12.5583C5.44167 12.35 5.39167 11.9583 5.6 11.6833L7.58333 9.10832C7.825 8.79999 8.16667 8.59999 8.55833 8.54999C8.94167 8.49999 9.33333 8.60832 9.64167 8.84999L11.1667 10.05C11.225 10.1 11.2833 10.1 11.325 10.0917C11.3583 10.0917 11.4167 10.075 11.4667 10.0083L13.3917 7.52499C13.6 7.24999 14 7.19999 14.2667 7.41666C14.5417 7.64166 14.5917 8.03332 14.3833 8.29999Z"
          fill={`${isCurrent ? 'white' : '#BABABA'}`}
        />
      </svg>
    );
  }
}
interface NavigationItem extends NavigationItemType {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  notifications?: {
    mapsNotification: number;
    settingsNotfication: number;
  };
}
export default function NavigationsItem({
  type,
  isCurrent,
  title,
  link,
  setCurrentTab,
  notifications,
}: NavigationItem) {
  console.log(isCurrent);
  return (
    <div onClick={() => setCurrentTab(title)}>
      <Link
        href={`${link}`}
        className="w-full h-full flex flex-col items-center mt-4 mb-2 justify-center  gap-2 py-[8px3] px-[12px] relative "
      >
        {notifications?.mapsNotification &&
          notifications?.mapsNotification > 0 &&
          type === 'maps' && (
            <span className="bg-[#0094D9]/60 -top-2 right-2 absolute items-center flex justify-center w-[14px] h[4px] p-[3px] text-[6px] rounded-full">
              {notifications?.mapsNotification}
            </span>
          )}

        {notifications?.settingsNotfication &&
          notifications?.settingsNotfication > 0 &&
          type === 'statistic' && (
            <span className="bg-[#0094D9]/60 -top-2 right-2 absolute items-center flex justify-center w-[14px] h[4px] p-[3px] text-[6px] rounded-full">
              {notifications?.settingsNotfication}
            </span>
          )}

        {iconComponent({ isCurrent: isCurrent, type: type })}
        <span
          className={`font-bold text-[12px] leading-[16px] font-articulat ${
            isCurrent ? '!dark:text-white text-white' : '!dark:text-white'
          }`}
        >
          {title}
        </span>
      </Link>
    </div>
  );
}
