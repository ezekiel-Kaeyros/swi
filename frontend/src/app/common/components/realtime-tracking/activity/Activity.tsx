'use client';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import React from 'react';
import ActivityTrackingCard from './activity-tracking-card/ActivityTrackingCard';
import { IPointOfSalesType } from '@/utils/types';

const Activity = () => {
  const { selectedRouteId, routes } = useRoutePlanning();

  console.log('selected route id', selectedRouteId);

  const activeRoute = routes?.find(
    (route) => route?.id?.toString() === selectedRouteId?.toString()
  );

  console.log('activeRoute', activeRoute);
  return (
    <div>
      <h1 className="mb-8 font-bold text-xl">Activities </h1>

      <div className="grid grid-cols-2 gap-4">
        {activeRoute?.pointOfSales?.map((pos: IPointOfSalesType) => (
          <ActivityTrackingCard
            key={pos?.id}
            shopId={pos?.id}
            shopName={pos?.name}
            shopLocation={pos?.shopLocation}
            tasks={pos?.tasks}
          />
        ))}
      </div>
    </div>
  );
};

export default Activity;
