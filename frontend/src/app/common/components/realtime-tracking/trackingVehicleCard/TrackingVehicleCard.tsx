'use client';
import ProgressIndicator from '../progress-indicator/ProgressIndicator';
import mapIcon from '../../../../../../public/icons/map-pin-fillIcon.svg';
import arrowDown from '../../../../../../public/icons/arrow-right-down-fill.svg';
import infoCircle from '../../../../../../public/icons/info-circle.svg';
import Image from 'next/image';
import { useState } from 'react';
import AnimateClick from '../../animate-click/AnimateClick';

interface TrackingVehiculeCardProps {
  id: string | number;
  props?: any;
  progress: string;
  name: string;
  routeName: string;
  currentRouteName: string;
  currentRouteLocalisation: string;
  nextRouteName: string;
  nextRouteLocalisation: string;
  SalesRepName: string;
  SalesRepPicture: string;
  isActive: boolean;
  viewInfo?: () => void;
}

const TrackingVehiculeCard: React.FC<TrackingVehiculeCardProps> = ({
  id,
  props,
  name,
  routeName,
  progress,
  currentRouteName,
  currentRouteLocalisation,
  nextRouteName,
  nextRouteLocalisation,
  SalesRepName,
  SalesRepPicture,
  isActive,
  viewInfo,
}) => {
  const [isActiveLocal, setIsActiveLocal] = useState<boolean>(isActive);

  console.log('sales rep', SalesRepName);
  return (
    <AnimateClick>
      <input
        {...props}
        id={`${id}`}
        type="radio"
        value={id}
        name={name}
        className="w-4 h-4 peer hidden text-buttonPrimary  focus:ring-buttonPrimary "
      />
      <label
        htmlFor={`${id}`}
        className="w-full  lg:text-xl text-sm block cursor-pointer select-none rounded-xl text-center bg-cardDark peer-checked:bg-buttonPrimary peer-checked:font-bold peer-checked:text-white font-medium text-gray-900 "
      >
        <div
          className={`w-full min-w-xl cursor-pointer px-5 py-6 rounded-xl flex-col justify-stretch items-start gap-5 inline-flex `}
        >
          <div className="w-full flex justify-between">
            <div className="flex flex-col">
              <span className="text-neutral-300 text-sm font-bold">
                {routeName}
              </span>
            </div>
            <ProgressIndicator progress={progress} isActive={isActiveLocal} />
          </div>

          <div className="location-container w-full flex flex-col gap-4">
            <div className="location flex gap-2 align-middle items-center">
              <div className=" bg-green-200 rounded-[100px] justify-center items-center p-2">
                <Image
                  src={mapIcon}
                  className="w-[24px] h-[24px]"
                  alt="Map icon"
                />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <span className="text-white text-[15px] font-medium">
                  {currentRouteName}
                </span>
                <span className="text-neutral-300 text-[10px]">
                  {currentRouteLocalisation}
                </span>
              </div>
            </div>

            <div className="location flex gap-2 align-middle items-center">
              <div className="bg-rose-200 rounded-[100px] justify-center items-center p-2">
                <Image
                  src={arrowDown}
                  className="w-[24px] h-[24px]"
                  alt="Arrow icon"
                />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <span className="text-white text-[15px] font-medium">
                  {nextRouteName}
                </span>
                <span className="text-neutral-300 text-[10px]">
                  {nextRouteLocalisation}
                </span>
              </div>
            </div>

            <div className="location flex  gap-2 align-middle items-center">
              {(SalesRepName && (
                <div className="flex">
                  <span className="text-buttonPrimary text-sm">
                    {SalesRepName}
                  </span>
                </div>
              )) ||
                'unassigned'}

              <div className="flex-col space-x-8 justify-between items-start inline-flex">
                <a
                  className="flex gap-1 items-center"
                  onClick={() => viewInfo && viewInfo()}
                >
                  <span className="text-neutral-300 text-[14px]">
                    View Info
                  </span>
                  <Image
                    src={infoCircle}
                    className="w-[16px] h-[16px]"
                    alt="Info Circle"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </label>
    </AnimateClick>
  );
};

export default TrackingVehiculeCard;
