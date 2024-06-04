import React from 'react';
import NotificationAction from './NotificationActions/NotificationAction';
import DataActions from '../maps/bottomsSheets/bottomsheetDataActions/dataAction';
import { HomepageLink, prefixNavLink } from '../../const/constante';
import Link from 'next/link';

const LeftIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4917 1.66669H6.50841C3.47508 1.66669 1.66675 3.47502 1.66675 6.50835V13.4834C1.66675 16.525 3.47508 18.3334 6.50841 18.3334H13.4834C16.5167 18.3334 18.3251 16.525 18.3251 13.4917V6.50835C18.3334 3.47502 16.5251 1.66669 13.4917 1.66669ZM15.0001 10.625H6.50841L9.01675 13.1334C9.25841 13.375 9.25841 13.775 9.01675 14.0167C8.89175 14.1417 8.73341 14.2 8.57508 14.2C8.41675 14.2 8.25841 14.1417 8.13341 14.0167L4.55841 10.4417C4.44175 10.325 4.37508 10.1667 4.37508 10C4.37508 9.83335 4.44175 9.67502 4.55841 9.55835L8.13341 5.98335C8.37508 5.74169 8.77508 5.74169 9.01675 5.98335C9.25841 6.22502 9.25841 6.62502 9.01675 6.86669L6.50841 9.37502H15.0001C15.3417 9.37502 15.6251 9.65835 15.6251 10C15.6251 10.3417 15.3417 10.625 15.0001 10.625Z"
        fill="#BABABA"
      />
    </svg>
  );
};
function Notification() {
  return (
    <>
      <div className="w-full h-full  gap-[12px] px-[16px] pt-[10px] pb-[8px] bg-primaryDark  text-white">
        <div className="h-[55px] items-center flex gap-8 justify-start mb-[28px]">
          <span className="py-[14px] ml-[12px] h-[48px] w-[48px]">
            {' '}
            <Link
              href={`/`}
              className=" flex  w-[44px] h-[48px] items-center justify-center"
            >
              <span className="w-[44px] h-[48px] p-[14px] gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4917 1.66669H6.50841C3.47508 1.66669 1.66675 3.47502 1.66675 6.50835V13.4834C1.66675 16.525 3.47508 18.3334 6.50841 18.3334H13.4834C16.5167 18.3334 18.3251 16.525 18.3251 13.4917V6.50835C18.3334 3.47502 16.5251 1.66669 13.4917 1.66669ZM15.0001 10.625H6.50841L9.01675 13.1334C9.25841 13.375 9.25841 13.775 9.01675 14.0167C8.89175 14.1417 8.73341 14.2 8.57508 14.2C8.41675 14.2 8.25841 14.1417 8.13341 14.0167L4.55841 10.4417C4.44175 10.325 4.37508 10.1667 4.37508 10C4.37508 9.83335 4.44175 9.67502 4.55841 9.55835L8.13341 5.98335C8.37508 5.74169 8.77508 5.74169 9.01675 5.98335C9.25841 6.22502 9.25841 6.62502 9.01675 6.86669L6.50841 9.37502H15.0001C15.3417 9.37502 15.6251 9.65835 15.6251 10C15.6251 10.3417 15.3417 10.625 15.0001 10.625Z"
                    fill="#BABABA"
                  />
                </svg>
              </span>
              <span className="font-medium text-[18px] leading-[24px] ">
                {' '}
                Home
              </span>
            </Link>
          </span>
        </div>
        <span className="leading-[40px]  font-extrabold text-[32px] font-articulat">
          Notifications
        </span>
        <div className="flex flex-col h-[70vh] overflow-hidden">
          <NotificationAction />
        </div>
      </div>
    </>
  );
}

export default Notification;
