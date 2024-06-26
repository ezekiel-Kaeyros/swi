'use client';
import Image from 'next/image';
import React from 'react';
import contactIconGreen from '../../../../../public/icons/contactIconGreen.svg';
import userIconGreen from '../../../../../public/icons/userIconGreen.svg';
import VictoryGardenImage from '../../../../../public/images/victoryGardenImage.jpg';
import { PhoneIcon, ContactInfoIcon } from '../svgs/SvgsIcons';
import { Button } from '../button/Button';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { addPointOfSalesToRoute } from '@/redux/features/route-planning-slice';
import { IPointOfSalesType } from '@/utils/types';

type InfoViewProps = {
  shopDetails: IPointOfSalesType;
};

const InfoView: React.FC<InfoViewProps> = ({ shopDetails }) => {
  const { selectedRouteId, dispatch } = useRoutePlanning();
  console.log('Shop Details: ', shopDetails);

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
      <div className="bg-white max-w-[20rem] text-[#2C353A] rounded-xl">
        <Image
          className="rounded-xl w-full h-[100px] object-cover"
          src={VictoryGardenImage}
          alt="Image of the shop"
        />
        <div className="w-full mt-2">
          <h1 className="font-semibold text-xl">{shopDetails?.name}</h1>
          <h3
            className="opacity-80 pr-4 pb-2 text-xs"
            style={{
              color: '#BABABA',
            }}
          >
            {shopDetails?.shopLocation}
          </h3>

          <div className="flex items-center   gap-2 w-full justify-start flex-wrap">
            <div className="flex items-center pr-2 h-8 px-3 py-1 rounded-full">
              <PhoneIcon height="12" width="12" color="none" />
              <h1 className="text-xs text-[#585757] ml-1.5">
                {shopDetails?.contact}{' '}
              </h1>
              {shopDetails?.tradeChannel}
            </div>

            <div className="flex items-center pr-2 h-8 px-3 py-1 rounded-full">
              <ContactInfoIcon height="12" width="12" color="none" />
              <h1 className="text-xs text-[#585757] ml-1.5">
                {shopDetails?.shopOwner}{' '}
              </h1>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-1.5">
            {Array.isArray(shopDetails?.channelCluster) &&
              shopDetails?.channelCluster.map((channel) => (
                <div
                  className="bg-red-300 text-white rounded px-3 py-1.5"
                  key={channel.id}
                >
                  {channel.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoView;
