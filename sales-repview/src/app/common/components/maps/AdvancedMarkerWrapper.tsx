'use client';
import React, { useState, ReactNode } from 'react';
import {
  AdvancedMarker,
  useAdvancedMarkerRef,
  InfoWindow,
  Pin,
} from '@vis.gl/react-google-maps';
import InfoWindowWrapper from './InfoWindowWrapper';
import DefaultPOSMarker from '../../../../../public/icons/marker.svg';
import Image from 'next/image';
import Marker from '../markers/AddShopMarker';
import { useToggleShopBarState } from '@/app/hooks/commons/useToggleShopData';
import { toogleShopBottomSheet } from '@/redux/features/saleRep-slice';
import Road from '@/core/models/Roads';
import { setShopData } from '@/redux/features/roard-management-slice';
import PointOfSales from '@/core/models/Pos';
import { activities } from '@/core/utils/activities';
import ActivitiesItem from '@/core/models/ActivitiItem';
import { set } from 'mongoose';

interface AdvancedMarkerProps {
  position: {
    lat: number;
    lng: number;
  };
  type?: 'BOTTOMSHEET' | 'SHOP';
  children: ReactNode;
  active: boolean;
  roadsData?: Road[];
  pos?: PointOfSales;
  markerColor?: string;
}

const AdvancedMarkerWrapper: React.FC<AdvancedMarkerProps> = ({
  position,
  children,
  active,
  roadsData,
  type,
  pos,
  markerColor,
}) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowShown, setInfowindowShown] = useState(false);
  const { dispatch, toggleShopDataState } = useToggleShopBarState();
  // console.log('Hello I am executing');

  // console.log('position of lat and long', position);
  function getActivitiesListByPos(roadsData: Road[], pos: PointOfSales) {
    let actitivtiesItem: ActivitiesItem[] = [];
    roadsData?.map((c, i) => {
      return c.pos.map((activity) => {
        const activitiesItemsList = c.activities_items.filter(
          (c) => c.channelClusters[i]._id === pos.channelCluster
        );
        if (activitiesItemsList) {
          activitiesItemsList.forEach((x, i) => {
            const filterData = actitivtiesItem.filter((v) => v._id === x._id);
            if (filterData.length === 0) {
              actitivtiesItem.push(x);
            }
          });
        }
      });
    });
    return actitivtiesItem;
  }
  const toggleInfoWindow = () => {
    if (type !== undefined && type === 'BOTTOMSHEET') {
      if (roadsData && pos) {
        let actitivtiesItem: ActivitiesItem[] = getActivitiesListByPos(
          roadsData,
          pos
        );
        dispatch(toogleShopBottomSheet(true));
        if (actitivtiesItem.length >= 0) {
          dispatch(
            setShopData({
              activities: actitivtiesItem,
              shopData: pos,
            })
          );
        }
      }
    } else {
      setInfowindowShown((previousState) => !previousState);
    }
  };

  const closeInfoWindow = () => setInfowindowShown(false);

  return (
    <AdvancedMarker
      ref={markerRef}
      onClick={toggleInfoWindow}
      position={position}
    >
      {/* <Image src={DefaultPOSMarker} alt='pos marker' style={{fill: '#FF0000'}}/> */}
      <Marker color={markerColor} />
      {/* <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} /> */}
      {infowindowShown && (
        <InfoWindow anchor={marker} onCloseClick={closeInfoWindow}>
          {children}
        </InfoWindow>
      )}
    </AdvancedMarker>
  );
};

export default AdvancedMarkerWrapper;
