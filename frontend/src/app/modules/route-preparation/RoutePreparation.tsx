'use client';
import React from 'react';

import EmptyStateRoute from '@/app/common/components/route-planning/empty-state-route/EmptyStateRoute';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import RouteCard from '@/app/common/components/route-planning/route-card/RouteCard';
import AddRouteIcon from '../../../../public/icons/addRouteIcon.svg';
import { Button } from '@/app/common/components/button/Button';
import { useRouter } from 'next/navigation';
import {
  createRoute,
  displayAllRoutes,
  selectedRoute,
  toggleMaps,
} from '@/redux/features/route-planning-slice';

const RoutePreparation = () => {
  const { routes, dispatch } = useRoutePlanning();

  const { push } = useRouter();

  const handleCreateRoute = () => {
    dispatch(createRoute({}));

    dispatch(displayAllRoutes({ showAllRoutes: false }));
    dispatch(toggleMaps({ toggle: false }));
    push('/route-preparation/create');
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">Route planning</h1>

      {routes?.length !== 0 && (
        <Button
          icon={AddRouteIcon}
          onClick={() => handleCreateRoute()}
          className="mb-8  w-full py-3 ml-auto"
        >
          Add new route
        </Button>
      )}

      {/* Displaying all routes */}
      <div className="space-y-6 flex flex-col">
        {routes?.length !== 0 ? (
          routes?.map((route: any) => (
            <div
              key={route?.id}
              onClick={() => {
                dispatch(selectedRoute({ selectedRouteId: route?.id }));
              }}
            >
              <RouteCard
                activitiesDuration={route?.activitiesDuration}
                key={route?.id}
                id={route?.id}
                numberOfPos={route?.pointOfSales?.length}
                numberOfTasksCompleted=""
                profilePicture=""
                routeName={route?.routeName}
                salesName={route?.salesRepresentative}
              />
            </div>
          ))
        ) : (
          <EmptyStateRoute />
        )}
      </div>
    </div>
  );
};

export default RoutePreparation;
