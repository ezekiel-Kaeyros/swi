'use client';
import React, { useEffect, useState } from 'react';
import { RouteCardProps } from './routeCard';
import Image from 'next/image';

import eyeIcon from '../../../../../../public/icons/eyeIcon.svg';
import ShopIcon from '../../../../../../public/icons/pointOfSale.svg';
import TimeIcon from '../../../../../../public/icons/timeIcon.svg';
import closedEyeIcon from '../../../../../../public/icons/eyeClosedIcon.svg';
import arrowRightIcon from '../../../../../../public/icons/rightIcon.svg';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import {
  displayAllRoutes,
  selectedRoute,
  toggleMaps,
} from '@/redux/features/route-planning-slice';
import AnimateClick from '../../animate-click/AnimateClick';
import { useRouter } from 'next/navigation';
import { calculateTotalTimeFormated } from '../utils/utils';

const RouteCard: React.FC<RouteCardProps> = ({
  id,
  numberOfPos,
  routeName,
  salesName,
  activitiesDuration,
  profilePicture,
}) => {
  const [toggleEye, setToggleEye] = useState<boolean>(false);

  const { dispatch, routes } = useRoutePlanning();

  const { push } = useRouter();

  useEffect(() => {
    dispatch(selectedRoute({ selectedRouteId: id }));
  }, [dispatch, id]);

  const handleViewRoute = (id: number | string): void => {
    setToggleEye((prev) => !prev);
  };

  const handleEditRoute = (id: number | string): void => {
    dispatch(displayAllRoutes({ showAllRoutes: false }));
    dispatch(toggleMaps({ toggle: true }));
    push(`/route-preparation/${id}`);
  };

  // find Current route

  const currentRoute = routes?.filter(
    (route) => route?.id.toString() === id?.toString()
  );
  let totalTime = calculateTotalTimeFormated(currentRoute);

  console.log('salesName', salesName);

  return (
    <div className="bg-cardDark  justify-between w-full  rounded-xl p-4">
      <div className="flex items-center w-full">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="mb-2">{routeName && routeName}</h1>
            <div>
              {profilePicture ? (
                <Image src={profilePicture} alt="Sales rep profile picture" />
              ) : (
                salesName && (
                  <div className="flex items-center">
                    <div className="w-7 h-7 flex items-center justify-center bg-slate-400 rounded-full">
                      {salesName &&
                        salesName?.length !== 0 &&
                        salesName[0]?.charAt(0)}
                    </div>
                    <h1 className=" text-sm ml-2 text-slate-300">
                      {(salesName && salesName?.length !== 0 && salesName[0]) ||
                        'No sales rep assigned'}
                    </h1>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-bgColorDark rounded-full flex items-center w-fit py-2 h-fit px-3">
            <Image src={ShopIcon} alt="Shop icon" />
            <h1 className="text-sm ml-1">
              {numberOfPos
                ? `${numberOfPos} Shop${parseInt(numberOfPos) >= 1 && 's'}`
                : ``}
            </h1>
          </div>
        </div>
      </div>

      {/* Duration and toggle buttons */}
      <div className="flex mt-6 items-center justify-between">
        <div className="flex items-center">
          <Image src={TimeIcon} alt="Timer icon" />
          <h1 className="font-bold ml-1">{totalTime}</h1>
        </div>

        <div className="flex">
          <AnimateClick>
            <div
              onClick={() => handleViewRoute(id)}
              className=" bg-bgColorDark w-10 h-10 flex items-center justify-center p-1 rounded-full"
            >
              <Image
                className="w-8"
                src={!toggleEye ? eyeIcon : closedEyeIcon}
                alt="Show and hide route"
              />
            </div>
          </AnimateClick>

          <AnimateClick>
            <div
              onClick={() => handleEditRoute(id)}
              className=" bg-bgColorDark flex justify-center items-center w-10 h-10  p-1 rounded-full ml-2"
            >
              <Image
                className="w-8"
                src={arrowRightIcon}
                alt="Show and hide route"
              />
            </div>
          </AnimateClick>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
