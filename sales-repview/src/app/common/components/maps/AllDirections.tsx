'use client';
import React, { useEffect, useRef } from 'react';
import { Map } from '@vis.gl/react-google-maps';
import Directions from './Directions';
import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';
import { usePointOfSales } from '@/app/hooks/commons/usePointOfSales';
import { generateRandomBrightColor } from './map-utils/generateRandomColors';
import InfoView from '../infoView/InfoView';
import { toogleShopBottomSheet } from '@/redux/features/saleRep-slice';
import { useToggleShopBarState } from '@/app/hooks/commons/useToggleShopData';

const AllDirections = ({}) => {
  const { dispatch, routes, selectedRouteId } = useRoutePlanning();
  const { pointOfSales } = usePointOfSales();
  console.log('ALL ROUTES', routes);
  const { toggleShopDataState } = useToggleShopBarState();

  const position = { lat: 61.2176, lng: -149.8997 };
  return (
    <>
      <Map center={position} zoom={18} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
        {routes.map((route) => {
          let color = generateRandomBrightColor();
          return <Directions route={route} color={color} key={route.id} />;
        })}

        {pointOfSales.map((pos: any) => (
          <AdvancedMarkerWrapper
            position={pos.position}
            active={true}
            key={pos.id}
            markerColor="red"
            type="BOTTOMSHEET"
          >
            <InfoView shopDetails={pos} />
          </AdvancedMarkerWrapper>
        ))}
      </Map>
      {toggleShopDataState}
    </>
  );
};

export default AllDirections;
