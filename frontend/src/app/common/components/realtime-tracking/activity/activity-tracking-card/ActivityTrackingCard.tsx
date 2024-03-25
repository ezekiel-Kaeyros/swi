'use client';
import React from 'react';
import Image from 'next/image';

import { ActivityTrackingCardProps } from './activityTrackingCard';

import ShopIcon from '../../../../../../../public/icons/pointOfSale.svg';
import ActivityStatus from './activity-status/ActivityStatus';

const ActivityTrackingCard: React.FC<ActivityTrackingCardProps> = ({
  shopLocation,
  shopName,
  tasks,
  shopId,
}) => {
  return (
    <div className="bg-cardDark p-4 rounded-xl">
      <div className="flex space-x-4">
        <Image className="w-10" src={ShopIcon} alt="Shop image" />

        <div>
          <h1 className="font-bold">{shopName}</h1>
          <h3 className="text-sm italic text-slate-400 mt-1">{shopLocation}</h3>
        </div>
      </div>
      <div className="my-6">
        {tasks?.map((task) => (
          <ActivityStatus
            shopId={shopId}
            key={task?.id}
            status={task?.status}
            idActivity={task?.id}
            activityName={task?.name}
            duration={task?.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityTrackingCard;
