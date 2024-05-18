'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import EditIcon from '../../../../../../public/icons/editIcon.svg';
import TotalTimeIcon from '../../../../../../public/icons/timeIcon.svg';
import WarningIcon from '../../../../../../public/icons/warningIcon.svg';
import UserAssignModalCard from '../user-assign-modal-card/UserAssignModalCard';
import SearchBar from '../../searchbar/SearchBar';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { calculateTotalTime, calculateTotalTimeFormated } from '../utils/utils';
import AddRouteIcon2 from '../../../../../../public/images/truck.svg';
import { Button } from '../../button/Button';
import CreateRouteModal from '../modals/CreateRouteModal';

const HeaderRoutePreparation = () => {
  const { routes, selectedRouteId, travelTime } = useRoutePlanning();
  const [showModal, setShowModal] = useState<boolean>(false);

  let currentRoute = routes?.filter((route) => route?.id === selectedRouteId);

  let totalTime = calculateTotalTimeFormated(currentRoute);
  let totalTimeInMinutes = calculateTotalTime(currentRoute);

  return (
    <>
      <CreateRouteModal
        onClose={() => setShowModal(false)}
        isOpen={showModal}
      />
      <div className="w-full">
        {/* <div className="mt-6">
          <SearchBar />
        </div> */}
        <div className="w-full flex-col flex  mb-4 justify-between">
          <div className="flex items-center">
            {/* <h1 className="font-bold underline">
              {currentRoute &&
                currentRoute?.length !== 0 &&
                currentRoute[0]?.routeName?.slice(0, 8)}
            </h1>
            <Image className="ml-4" src={EditIcon} alt="Edit icon" />{' '} */}
          </div>
          <div className="flex mt-6 justify-between w-full items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Image className="w-10" src={TotalTimeIcon} alt="Total time" />
              <h1 className="font-bold text-xl">{totalTime}</h1>
              {totalTimeInMinutes > travelTime && (
                <div className="flex items-center">
                  <Image src={WarningIcon} alt="Warning icon" />
                  <h1 className="text-xs text-red-400 ml-4">
                    Working time exceeded
                  </h1>
                </div>
              )}
            </div>
            <div>
              <Button
                className="bg-stepsMarkerBlue"
                icon={AddRouteIcon2}
                onClick={() => setShowModal(true)}
              >
                Save and Assign
              </Button>
              {/* <UserAssignModalCard /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderRoutePreparation;
