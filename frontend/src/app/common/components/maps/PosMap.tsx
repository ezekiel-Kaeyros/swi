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

export default function PosMap() {
  const position = { lat: 3.8852761566538545, lng: 11.502079803888337 };

  const { pointOfSales, dispatch } = usePointOfSales(); 
  const { channelClusters } = useSettings();

  console.log("pointOfSales___", pointOfSales, channelClusters)

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

  return (
      <Map
        center={position}
        zoom={15}
        mapId={'6fc7264e643ee8b1'}
        onClick={handleMapClick}
      >
        {pointOfSales?.map((pos: any) => {
          console.log('position of poss', pos.position);

          const position = {
            lat: pos?.latitude, 
            lng: pos?.longitude, 
          }

          const foundChannelCluster = channelClusters?.find((cc: IChannelCluster) => {
            console.log (cc, "||||")
            // if (cc._id === pos?.channelCluster) {
            //   return cc
            // }
            return cc._id === pos?.channelCluster
          })
          console.log(foundChannelCluster, "||||")
          return (
            <AdvancedMarkerWrapper
              // position={pos.position}
              position={ position }
              active={true}
              // key={pos.id}
              key={pos._id}
              // markerColor={pos.markerColor}
              markerColor={ foundChannelCluster?.color as any }
            >
              {hasNumberInUrl(pathname) ? (
                <InfoViewRoutes shopDetails={pos} />
              ) : (
                <InfoView shopDetails={pos} />
              )}
            </AdvancedMarkerWrapper>
          );
        })}
      </Map>
    // <div className='h-[90vh]'>
    // </div>
  );
}
