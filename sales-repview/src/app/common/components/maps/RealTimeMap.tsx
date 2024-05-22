'use client';
import React, { useEffect, useState, useRef } from 'react';
import {
  Map,
  AdvancedMarker,
  MapControl,
  ControlPosition,
} from '@vis.gl/react-google-maps';
import Directions from './maps-management/Directions';
import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';
import InfoView from '../infoView/InfoView';

import Pin from '../markers/Pin';

const RealTimeMap = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  const BACKEND_URL = 'https:............';

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      // Show a map centered at latitude / longitude.
      console.log('Latitude: ' + latitude + ' Longitude: ' + longitude);

      setPosition({ lat: latitude, lng: longitude });
    });

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [position]);

  const { dispatch, routes, selectedRouteId } = useRoutePlanning();
  const currentRoute = routes.find((route) => route?.id.toString() === '1');
  console.log('CURRENT ROUTE', currentRoute);

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

      {
        <AdvancedMarker position={position} key={1}>
          <Pin />
        </AdvancedMarker>
      }

      <MapControl position={ControlPosition.TOP_LEFT}>
        <p className="bg-black">Latitude: {position.lat}</p>
        <p className="bg-black">Longitude: {position.lng}</p>
      </MapControl>
    </Map>
  );
};

export default RealTimeMap;
