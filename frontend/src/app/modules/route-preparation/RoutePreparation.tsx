'use client';
import React, { useState } from 'react';

import EmptyStateRoute from '@/app/common/components/route-planning/empty-state-route/EmptyStateRoute';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import RouteCard from '@/app/common/components/route-planning/route-card/RouteCard';
import AddRouteIcon from '../../../../public/icons/addRouteIcon.svg';
import AddRouteIcon2 from '../../../../public/images/truck.svg';
import filter from '../../../../public/images/Button (1).svg';
import displayAll from '../../../../public/images/Button.svg';
import route from '../../../../public/images/routing.svg';
import hiddeAll from '../../../../public/images/Button (2).svg';
import search from '../../../../public/images/search-normal (1).svg';

import { Button } from '@/app/common/components/button/Button';
import { useRouter } from 'next/navigation';
import {
  createRoute,
  displayAllRoutes,
  selectedRoute,
  toggleMaps,
} from '@/redux/features/route-planning-slice';
import Image from 'next/image';
import InputField from '@/app/common/components/forms/text-field/InputField';
import CreateRouteModal from '@/app/common/components/route-planning/modals/CreateRouteModal';

const RoutePreparation = () => {

  const { routes, dispatch } = useRoutePlanning();
  const { toggleMapsValue, showAllRoutes } = useRoutePlanning();

  const { push } = useRouter();

  const handleCreateRoute = () => {
    dispatch(createRoute({}));

    // dispatch(displayAllRoutes({ showAllRoutes: false }));
    //   dispatch(toggleMaps({ toggle: false }));
     push('/route-preparation/create');
  };

  return (
    <>
     
      <div className="pb-5">
        <h1 className="font-bold text-2xl mb-8">Route planning</h1>
        <div className="flex gap-5">
          <Image src={route} alt="" />
          <span>Routes</span>
        </div>

        <div className="w-full flex justify-between items-center gap-5">
          <div className="w-auto">
            <InputField placeholder="Search point of sales" icon={search} />
          </div>{' '}
          <div className="flex gap-2">
            <Image src={filter} alt="" />
            <Image
              src={showAllRoutes ? displayAll : hiddeAll}
              alt=""
              className="cursor-pointer"
              onClick={() => {
                dispatch(displayAllRoutes({ showAllRoutes: !showAllRoutes }));
                // toggleMaps({ toggle: true });
              }}
            />
          </div>
        </div>
        {routes?.length !== 0 && (
          <Button
            icon={AddRouteIcon2}
            onClick={() => handleCreateRoute()}
            className="mb-8  py-3 w-auto"
          >
            Add new route
          </Button>
        )}

        {/* Displaying all routes */}
        <div
          className={`${
            showAllRoutes
              ? 'space-y-6 flex flex-col '
              : 'grid grid-cols-3 gap-5'
          } `}
        >
          {routes?.length !== 0 && showAllRoutes ? (
            routes?.slice(0, 3).map((route: any, index) => (
              <div
                key={index}
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
          ) : routes?.length !== 0 && !showAllRoutes ? (
            routes?.map((route: any, index) => (
              <div
                key={index}
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
    </>
  );
};

export default RoutePreparation;
