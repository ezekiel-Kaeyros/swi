'use client';
import React, { useEffect, useState } from 'react';
import { RouteCardProps } from './routeCard';
import Image from 'next/image';

import route from '../../../../../../public/images/routing.svg';
import profil from '../../../../../../public/images/Image.svg';
import timer from '../../../../../../public/images/timer.svg';
import shop from '../../../../../../public/images/shop.svg';
import detail from '../../../../../../public/images/Frame 477.svg';
import distance from '../../../../../../public/images/Frame 474.svg';

import eyeIcon from '../../../../../../public/icons/eyeIcon.svg';
import eyeShow from '../../../../../../public/images/eye.svg';
import eyeHidde from '../../../../../../public/images/eye-slash.svg';

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
import { frame } from 'framer-motion';
import FilterModal from '../modals/FilterModal';
import EditRoute from '../modals/EditRoute';
import UserAssignModalCard from '../user-assign-modal-card/UserAssignModalCard';

const RouteCard: React.FC<RouteCardProps> = ({
  id,
  numberOfPos,
  routeName,
  salesName,
  activitiesDuration,
  profilePicture,
}) => {
  const [toggleEye, setToggleEye] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  const { dispatch, routes, selectedRouteId } = useRoutePlanning();

  const { push } = useRouter();

  // useEffect(() => {
  //   // dispatch(selectedRoute({ selectedRouteId: id }));
  //   // if (selectedRouteId==id) {
  //   //   alert('ok')
  //   // }
  // }, [dispatch, id, selectedRouteId]);

  const handleViewRoute = (id: number | string): void => {
    setToggleEye((prev) => !prev);
  };

  const handleEditRoute = (id: number | string): void => {
    // dispatch(displayAllRoutes({ showAllRoutes: false }));
    // dispatch(toggleMaps({ toggle: true }));
    push(`/route-preparation/${id}`);
  };

  // find Current route

  const currentRoute = routes?.filter(
    (route) => route?.id.toString() === id?.toString()
  );
  let totalTime = calculateTotalTimeFormated(currentRoute);

  console.log('salesName', salesName);

  return (
    <>
      <FilterModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    
      <div
        className={`bg-cardDark  justify-between w-full  rounded-xl p-4 ${
          selectedRouteId == id ? 'border-3 border-[#3772FF]' : ''
        }`}
      >
        <div className="w-full justify-between flex items-center">
          <div className="flex gap-2">
            <Image src={route} alt="" />
            <span>{routeName && routeName}</span>
          </div>
          <EditRoute
           
            id={id}
            edit={() => {
              handleEditRoute(id);
            }}
          />
        
        </div>
        <div className="flex gap-2">
          <div className="px-2 py-1 flex bg-[#05522B] text-[#6DE2A6] rounded-lg gap-1">
            {' '}
            <Image src={timer} alt="" />
            <span className="text-xs">{activitiesDuration}</span>
          </div>
          <div className="px-2 py-1 flex bg-[#F3F3F3] text-[#585757] rounded-lg gap-1">
            {' '}
            <Image src={shop} alt="" />
            <span className="text-xs">
              {numberOfPos
                ? `${numberOfPos} Shop${parseInt(numberOfPos) >= 1 && 's'}`
                : ``}
            </span>
          </div>
        </div>

        <div className="my-6 flex items-center  gap-2">
          <Image src={distance} alt="" className="h-full" />
          <div className=" text-xs ">
            <div className="mb-8">
              <span className="text-[#BABABA]">Start point</span>
              <br />
              <span>Santa lucia bonaberi</span>
            </div>

            <div>
              <span className="text-[#BABABA]">End point</span>
              <br />
              <span>Boutique japoma</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <div
            className="px-4 py-2 flex bg-[#3772FF] text-[#F7F9FF] rounded-xl gap-1 cursor-pointer"
            onClick={() => handleViewRoute(id)}
          >
            {' '}
            <Image src={!toggleEye ? eyeShow : eyeHidde} alt="" />
            <span className="text-xs">Hide route</span>
          </div>

          <div className=" flex  text-[#BABABA] gap-1 items-center ">
            {' '}
            <Image src={profil} alt="" />
            <span className="text-xs"> Abriel Mboma</span>
          </div>
        </div>
        {/* <div className="flex items-center w-full">
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
      </div> */}

        {/* Duration and toggle buttons */}
        {/* <div className="flex mt-6 items-center justify-between">
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
      </div> */}
      </div>
    </>
  );
};

export default RouteCard;
