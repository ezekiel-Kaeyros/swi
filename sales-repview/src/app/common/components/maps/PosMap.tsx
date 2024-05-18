'use client';
import { Map } from '@vis.gl/react-google-maps';
import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
import { usePointOfSales } from '@/app/hooks/commons/usePointOfSales';
import InfoView from '../infoView/InfoView';
import { updateSelectedPlace } from '@/redux/features/create-point-of-sale-slice';
import { usePathname } from 'next/navigation';
import InfoViewRoutes from '../infoView/InfoViewRoutes';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';

export default function PosMap() {
  const position = { lat: 3.8852761566538545, lng: 11.502079803888337 };

  const { pointOfSales, dispatch } = usePointOfSales();

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
        return (
          <AdvancedMarkerWrapper
            position={pos.position}
            active={true}
            key={pos.id}
            markerColor={pos.markerColor}
          >
            {/* {hasNumberInUrl(pathname) ? (
              <InfoViewRoutes shopDetails={pos} />
            ) : (
              <InfoView shopDetails={pos} />
            )} */}
            <div>fdsjfhsjkf</div>
          </AdvancedMarkerWrapper>
        );
      })}
    </Map>
  );
}
