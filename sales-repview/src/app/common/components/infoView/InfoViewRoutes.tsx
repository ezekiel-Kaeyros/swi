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
import PointOfSales from '@/core/models/Pos';

type InfoViewProps = {
  shopDetails: PointOfSales;
};

const InfoViewRoutes: React.FC<InfoViewProps> = ({ shopDetails }) => {
  const { selectedRouteId, dispatch } = useRoutePlanning();

  const handleAddToRoute = () => {
    dispatch(
      addPointOfSalesToRoute({
        routeId: selectedRouteId,
        posId: shopDetails?._id,
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
            {shopDetails?.location}
          </h3>

          <div className="flex items-center   gap-2 w-full justify-start flex-wrap">
            <div className="flex items-center pr-2 h-8 bg-[#CCEAF7] px-3 py-1 rounded-full">
              <Image src={contactIconGreen} alt="Contact icon" />
              <h1 className="text-sm ml-1.5">{shopDetails?.name} </h1>
            </div>

            <div className="flex items-center pr-2 h-8 bg-[#CCEAF7] px-3 py-1 rounded-full">
              <Image src={userIconGreen} alt="User icon" />
              <h1 className="text-sm ml-1.5">{shopDetails?.owner} </h1>
            </div>
          </div>
          <h1 className="font-bold my-2">Tasks</h1>
        </div>
      </div>
    </div>
  );
};

export default InfoViewRoutes;
