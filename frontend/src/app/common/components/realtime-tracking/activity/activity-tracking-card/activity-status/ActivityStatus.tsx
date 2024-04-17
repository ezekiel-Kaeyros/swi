'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';

import ActivityIcon from '../../../../../../../../public/icons/statusIconActivity.svg';
import { ActivityStatusProps } from './activityStatus';
import { Button } from '@/app/common/components/button/Button';
import { usePathname } from 'next/navigation';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { updateActivityStatus } from '@/redux/features/route-planning-slice';

const ActivityStatus: React.FC<ActivityStatusProps> = ({
  activityName,
  duration,
  idActivity,
  status,
  shopId,
}) => {
  const { selectedRouteId, routes, dispatch } = useRoutePlanning();

  const handleClickCompeleted = (id: string | number) => {
    dispatch(
      updateActivityStatus({
        routeId: selectedRouteId,
        posId: shopId,
        activityId: id,
      })
    );
  };

  useEffect(() => {}, [status]);

  console.log('status', status);

  const pathname = usePathname();

  return (
    <div className="flex my-4 space-x-4">
      <div
        className={`w-8 h-8 p-1 rounded-full ${
          !status ? 'bg-orange-500' : 'bg-green-900'
        }`}
      >
        <Image src={ActivityIcon} alt="ActivityIcon" />
      </div>
      <div>
        <h1 className="text-sm font-bold">{activityName}</h1>
        {/* Clickable for sales rep only */}

        {pathname?.includes('sales-rep-view') ? (
          !status ? (
            <Button
              className="py-1 mt-4 px-2 w-fit text-xs"
              onClick={() => handleClickCompeleted(idActivity)}
            >
              <h1>{(!status && 'completed') || 'Mark completed'}</h1>
            </Button>
          ) : (
            <div
              className={`mt-2  w-fit text-xs px-2 py-1 rounded-full ${'bg-green-900'}`}
            >
              {!status ? 'Pending' : 'Completed'}
            </div>
          )
        ) : (
          <div
            className={`mt-2  w-fit text-xs px-2 py-1 rounded-full ${
              !status ? 'bg-orange-500' : 'bg-green-900'
            }`}
          >
            {!status ? 'Pending' : 'Completed'}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityStatus;
