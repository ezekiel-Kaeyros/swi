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
import {
  setDailyRoads,
  setShopData,
} from '@/redux/features/roard-management-slice';
import PointOfSales from '@/core/models/Pos';
import { activities } from '@/core/utils/activities';
import ActivitiesItem from '@/core/models/ActivitiItem';
import { set } from 'mongoose';
import MarkerCustom from './maps-management/subComponent/MarkerCustom';
import RoadsItem from '@/core/models/RoadsItem';
import { usePathname } from 'next/navigation';

interface AdvancedMarkerProps {
  position: {
    lat: number;
    lng: number;
  };
  type?: 'BOTTOMSHEET' | 'SHOP';
  markerType?: 'START' | 'END' | 'IDLE';
  children: ReactNode;
  active: boolean;
  roadsData?: RoadsItem;
  pos?: PointOfSales;
  markerColor: string;
}

const AdvancedMarkerWrapper: React.FC<AdvancedMarkerProps> = ({
  position,
  children,
  active,
  roadsData,
  type,
  markerType = 'IDLE',
  pos,
  markerColor,
}) => {
  const getId = usePathname();
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowShown, setInfowindowShown] = useState(false);
  const { dispatch, toggleShopDataState } = useToggleShopBarState();
  // console.log('Hello I am executing');

  // console.log('position of lat and long', position);
  function getActivitieOfOnePosListByPos(roadsData: Road[], pos: PointOfSales) {
    let activitieOfOnePos: RoadsItem[] = [];
    let roadUrl = getId.split('/').at(-1);
    console.log(roadsData);
    console.log(pos);
    roadsData?.map((c, i) => {
      // return c.roadItems.map((activitiesItemsList) => {
      //   if (activitiesItemsList) {
      //     activitiesItemsList.taskIds.forEach((x, i) => {
      //       const filterData = actitivtiesItem.filter((v) => v._id === x._id);
      //       if (filterData.length === 0) {
      //         actitivtiesItem.push(x);
      //       }
      //     });
      //   }
      // });
      // console.log(c);
      return c.roadItems.map((roads) => {
        if (c._id === roadUrl) {
          console.log(roads.posId._id === pos._id);
          if (roads.posId._id === pos._id) {
            activitieOfOnePos.push(roads);
          }
        }
      });
    });
    console.log(activitieOfOnePos);
    return activitieOfOnePos;
  }
  const toggleInfoWindow = () => {
    if (type !== undefined && type === 'BOTTOMSHEET') {
      if (roadsData && pos) {
        // let actitivtiesItem: RoadsItem[] = getActivitieOfOnePosListByPos(
        //   roadsData,
        //   pos
        // );
        // console.log(actitivtiesItem);
        // console.log(pos);
        // console.log(roadsData);
        // console.log(pos);
        dispatch(toogleShopBottomSheet(true));
        // if (actitivtiesItem.length >= 0) {
        dispatch(
          setShopData({
            activities: roadsData,
            shopData: pos,
          })
        );
        // }
      }
    } else {
      setInfowindowShown((previousState) => !previousState);
    }
  };

  const closeInfoWindow = () => setInfowindowShown(false);
  // console.log(markerColor, '+++++++++++++-----------------------');
  return (
    <AdvancedMarker
      ref={markerRef}
      onClick={toggleInfoWindow}
      position={position}
    >
      <MarkerCustom color={markerColor} type={markerType} />
      {/* <Marker color={markerColor} /> */}
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
