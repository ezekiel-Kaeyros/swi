'use client';
import { Map } from '@vis.gl/react-google-maps';
import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
import { usePointOfSales } from '@/app/hooks/usePointOfSales';
import InfoView from '../infoView/InfoView';
import { updateSelectedPlace } from '@/redux/features/create-point-of-sale-slice';
import { usePathname } from 'next/navigation';
import InfoViewRoutes from '../infoView/InfoViewRoutes';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { useSettings } from '@/app/hooks/useSettings';
import { IChannelCluster } from '@/redux/features/types';
import POSFilter from '../pos-filter/POSFilter';
import { IPointOfSalesType } from '@/utils/types';
import Shop from '../../../../../public/icons/shop.svg';
import Box from '../../../../../public/icons/posBox.svg';
import { useState } from 'react';

export default function PosMap() {
  const position = { lat: 3.8852761566538545, lng: 11.502079803888337 };

  const { pointOfSales, dispatch } = usePointOfSales();
  const { channelClusters } = useSettings();

  console.log('pointOfSales___', pointOfSales, channelClusters);

  const [finalPOS, setFinalPOS] = useState(pointOfSales);

  const { selectedRouteId, routes } = useRoutePlanning();

  const currentRoute = routes?.find(
    (route) => route?.id.toString() === selectedRouteId?.toString()
  );

  const currentPos = console.log(
    'List of point of sales in state',
    pointOfSales
  );

  const handleMapClick = (event: any) => {
    const { latLng } = event.detail;
    //onMapClick(event.latLng.lat(), event.latLng.lng());
    console.log('Map got clicked');
    console.log('event', event);
    console.log('Coordinates clicked', latLng.lat, latLng.lng);

    dispatch(
      updateSelectedPlace({
        latitude: latLng.lat,
        longitude: latLng.lng,
      })
    );
  };

  const pathname = usePathname();

  function hasNumberInUrl(url: string): boolean {
    const regex = /\/(\d+)$/; // Matches a slash followed by one or more digits at the end of the string
    return regex.test(url);
  }

  console.log('path', pathname);

  const filterPosOnMap = (id: string) => {
    let result = pointOfSales.filter((pos: IPointOfSalesType) => {
      return pos?.channelCluster === id;
    });
    setFinalPOS(result);
    // return result
  };
  const getAllPosOnMap = (id: string) => {
    setFinalPOS(pointOfSales);
    // return pointOfSales
  };

  return (
    <>
      <Map
        center={position}
        zoom={15}
        mapId={'6fc7264e643ee8b1'}
        onClick={handleMapClick}
      >
        {finalPOS?.map((pos: any) => {
          console.log('position of poss', pos.position);

          const position = {
            lat: pos?.latitude,
            lng: pos?.longitude,
          };

          const foundChannelCluster = channelClusters?.find(
            (cc: IChannelCluster) => {
              console.log(cc, '||||');
              // if (cc._id === pos?.channelCluster) {
              //   return cc
              // }
              return cc._id === pos?.channelCluster;
            }
          );
          console.log(foundChannelCluster, '||||');
          return (
            <AdvancedMarkerWrapper
              // position={pos.position}
              position={position}
              active={true}
              // key={pos.id}
              key={pos._id}
              // markerColor={pos.markerColor}
              markerColor={foundChannelCluster?.color as any}
            >
              {/* {hasNumberInUrl(pathname) ? (
                <InfoViewRoutes shopDetails={pos} />
              ) : (
                <InfoView shopDetails={pos} />
              )} */}
              <InfoViewRoutes shopDetails={pos} />
            </AdvancedMarkerWrapper>
          );
        })}
      </Map>
      <div className="absolute bottom-[5%] left-[50%]  flex items-center  justify-between overflow-hidden w-100vh ">
        <div className="flex items-center rounded-full bg-[#242424] w-fit p-4 scale-85">
          <POSFilter
            filterPosOnMap={getAllPosOnMap}
            icon={Shop}
            bgColor="#323232"
            col={`#fff`}
            stat="All"
          />
          {channelClusters && channelClusters?.length > 0
            ? channelClusters?.map((cChan: IChannelCluster) => {
                return (
                  <div key={cChan?._id as string}>
                    <POSFilter
                      filterPosOnMap={filterPosOnMap}
                      icon={Box}
                      bgColor={cChan?.color as string}
                      col={`#DFCDF6`}
                      stat={cChan?.name}
                      id={cChan?._id as string}
                    />
                  </div>
                );
              })
            : null}
        </div>

        {/* <POSFilter
            icon={Box}
            bgColor="#5F05D1"
            col={`#DFCDF6`}
            stat="Wholesalling"
          />
          <POSFilter
            icon={FolderConnection}
            bgColor="#D99125"
            col={`#F7E9D3`}
            stat="Modern trade"
          />
          <POSFilter
            icon={Coffee}
            bgColor="#28666E"
            col={`#AED0D4`}
            stat="General trade"
          />
          <POSFilter
            icon={Coffee}
            bgColor="#BD2D87"
            col={`#F2D5E7`}
            stat="E-commerce"
          /> */}
      </div>
    </>
    // <div className='h-[90vh]'>
    // </div>
  );
}
