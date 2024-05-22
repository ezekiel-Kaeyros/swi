'use client';
import React, { useEffect, useRef } from 'react';
import { Map } from '@vis.gl/react-google-maps';
import Directions from './maps-management/Directions';
import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';
import InfoView from '../infoView/InfoView';

const ReactDirectionsMap = () => {
  const { dispatch, routes, selectedRouteId } = useRoutePlanning();
  const currentRoute = routes.find((route) => route?.id === 1);
  console.log('CURRENT ROUTE', currentRoute);

  const position = { lat: 61.2176, lng: -149.8997 };
  return (
    <Map center={position} zoom={18} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
      <Directions color={'blue'} />

      {currentRoute?.pointOfSales.map((pos: any) => (
        <AdvancedMarkerWrapper
          position={pos.position}
          active={true}
          key={pos.id}
          markerColor="red"
        >
          <InfoView shopDetails={pos} />
        </AdvancedMarkerWrapper>
      ))}
    </Map>
  );
};

export default ReactDirectionsMap;
