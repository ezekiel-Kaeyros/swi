'use client';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import React, { useEffect } from 'react';
import TrackingVehiculeCard from '../trackingVehicleCard/TrackingVehicleCard';
import { useForm } from 'react-hook-form';
import { selectedRoute } from '@/redux/features/route-planning-slice';

type FormValues = {
  activeRoute: string | number;
};

const RoutesList = () => {
  const { routes, dispatch } = useRoutePlanning();

  const { register, watch } = useForm<FormValues>();

  let activeRoute = watch('activeRoute');

  useEffect(() => {
    dispatch(selectedRoute({ selectedRouteId: activeRoute }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRoute]);

  return (
    <form className="mt-24 grid grid-cols-2 gap-4">
      {routes?.map((route) => (
        <TrackingVehiculeCard
          id={route?.id}
          name="activeRoute"
          props={register('activeRoute')}
          key={route?.id}
          progress={'4/10'}
          routeName={route?.routeName}
          currentRouteName={route?.pointOfSales[0]?.name}
          currentRouteLocalisation={route?.pointOfSales[0]?.shopLocation}
          nextRouteName={route?.pointOfSales[1]?.name}
          nextRouteLocalisation={route?.pointOfSales[1]?.shopLocation}
          SalesRepName={
            route?.salesRepresentative && route?.salesRepresentative[0]
          }
          SalesRepPicture={''}
          isActive={false}
        />
      ))}
    </form>
  );
};

export default RoutesList;
