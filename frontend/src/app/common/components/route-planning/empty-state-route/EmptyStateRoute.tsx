'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '../../button/Button';

import RouteIcon from '../../../../../../public/icons/routeIcon.svg';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';

import {
  createRoute,
  displayAllRoutes,
  displayPOSMap,
} from '@/redux/features/route-planning-slice';
import { useRouter } from 'next/navigation';

const EmptyStateRoute = () => {
  const { dispatch } = useRoutePlanning();
  const { push } = useRouter();

  const handleClick = () => {
    dispatch(createRoute({}));

    dispatch(displayAllRoutes({ showAllRoutes: false }));
    dispatch(displayPOSMap({ posMapDisplayState: true }));

    push('/route-preparation/create');
  };

  return (
    <div className="border flex flex-col items-center justify-center p-4 border-dashed rounded-xl">
      <Image src={RouteIcon} alt="Routing image" />
      <h1 className="my-4">No Active Route</h1>
      <Button onClick={() => handleClick()} className="w-fit mx-auto">
        Create Route
      </Button>
    </div>
  );
};

export default EmptyStateRoute;
