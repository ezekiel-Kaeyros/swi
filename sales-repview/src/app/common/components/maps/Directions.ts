'use client';
import React, { useEffect, useState } from 'react';
import { Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
import { calculateAndDisplayRoute } from './map-utils/calculatRoute';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';

const Directions = ({ color, route }: { color?: string; route?: any }) => {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const { dispatch, selectedRouteId, routes } = useRoutePlanning();

  const currentRoute = routes.find(
    (route) => route?.id?.toString() === selectedRouteId?.toString()
  );

  console.log('selected route id', selectedRouteId);

  console.log('curret ', currentRoute);

  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();

  useEffect(() => {
    if (!routesLibrary || !map) return;

    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(
      new routesLibrary.DirectionsRenderer({
        map: map,
        polylineOptions: {
          strokeColor: color,
          strokeWeight: 4,
        },
      })
    );
  }, [map, routesLibrary, color]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    currentRoute
      ? calculateAndDisplayRoute(
          directionsService,
          directionsRenderer,
          currentRoute
        )
      : calculateAndDisplayRoute(directionsService, directionsRenderer, route);
  }, [
    directionsService,
    directionsRenderer,
    currentRoute,
    selectedRouteId,
    route,
  ]);

  return null;
};

export default Directions;
