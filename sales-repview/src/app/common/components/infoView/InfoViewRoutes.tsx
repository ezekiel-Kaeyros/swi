'use client';
import Image from 'next/image';
import React from 'react';
import contactIconGreen from '../../../../../public/icons/contactIconGreen.svg';
import userIconGreen from '../../../../../public/icons/userIconGreen.svg';
import VictoryGardenImage from '../../../../../public/images/victoryGardenImage.jpg';
import { Button } from '../button/Button';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';
import { addPointOfSalesToRoute } from '@/redux/features/route-planning-slice';
import { IPointOfSalesType } from '@/core/utils/types';

type InfoViewProps = {
  shopDetails: IPointOfSalesType;
};

const InfoViewRoutes: React.FC<InfoViewProps> = ({ shopDetails }) => {
  const { selectedRouteId, dispatch } = useRoutePlanning();

  const handleAddToRoute = () => {
    dispatch(
      addPointOfSalesToRoute({
        routeId: selectedRouteId,
        posId: shopDetails?.id,
      })
    );
  };

  return (
    <div>
      <div className="bg-white max-w-[20rem] text-[#2C353A] p-4 rounded-xl">
        <Image
          className="rounded-xl w-full h-16 object-cover"
          src={VictoryGardenImage}
          alt="Image of the shop"
        />
        <div className="w-full mt-2">
          <h1 className="font-bold">{shopDetails?.name}</h1>
          <h3 className="opacity-80 text-sm pr-4 pb-2">
            {shopDetails?.shopLocation}
          </h3>

          <div className="flex items-center   gap-2 w-full justify-start flex-wrap">
            <div className="flex items-center pr-2 h-8 bg-[#CCEAF7] px-3 py-1 rounded-full">
              <Image src={contactIconGreen} alt="Contact icon" />
              <h1 className="text-sm ml-1.5">{shopDetails?.contact} </h1>
            </div>

            <div className="flex items-center pr-2 h-8 bg-[#CCEAF7] px-3 py-1 rounded-full">
              <Image src={userIconGreen} alt="User icon" />
              <h1 className="text-sm ml-1.5">{shopDetails?.shopOwner} </h1>
            </div>
          </div>
          <h1 className="font-bold my-2">Tasks</h1>
          <ul className="flex space-x-4 flex-wrap">
            {shopDetails?.tasks?.map((value: any) => (
              <li
                className="px-2 py-1 rounded-full  text-sm bg-[#CCEAF7]"
                key={value?.id}
              >
                {value?.name}
              </li>
            ))}
          </ul>

          <div className="mt-8 mb-2">
            {shopDetails?.tasks?.length !== 0 && (
              <Button onClick={() => handleAddToRoute()} className="w-fit py-1">
                Add to route
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoViewRoutes;
