'use client';
import { Map } from '@vis.gl/react-google-maps';
import AdvancedMarkerWrapper from '../AdvancedMarkerWrapper';
import { usePointOfSales } from '@/app/hooks/commons/usePointOfSales';
import InfoView from '../../infoView/InfoView';
import { updateSelectedPlace } from '@/redux/features/create-point-of-sale-slice';
import { usePathname } from 'next/navigation';
import InfoViewRoutes from '../../infoView/InfoViewRoutes';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';
import { useManagePosInStore } from '@/app/hooks/API/usePos';
import PointOfSales from '@/core/models/Pos';
import { useToggleShopBarState } from '@/app/hooks/commons/useToggleShopData';
import Directions from './Directions';
import { generateRandomBrightColor } from '../map-utils/generateRandomColors';
import Road from '@/core/models/Roads';
import ActivitiesItem from '@/core/models/ActivitiItem';

export default function PosMap() {
  const position = { lat: 3.8852761566538545, lng: 11.502079803888337 };

  const { pos, shopData, road } = useManagePosInStore();

  const { pointOfSales, dispatch } = usePointOfSales();
  // console.log(road);
  // console.log(road);
  // console.log('++++++++++++++fgpddg lkdsjfgdopsfjk ');

  const { selectedRouteId, routes } = useRoutePlanning();

  const currentRoute = routes?.find(
    (route) => route?.id.toString() === selectedRouteId?.toString()
  );

  // const currentPos = console.log(
  //   'List of point of sales in state',
  //   pointOfSales
  // );

  const handleMapClick = (event: any) => {
    const { latLng } = event.detail;
    //onMapClick(event.latLng.lat(), event.latLng.lng());
    // console.log('Map got clicked');
    // console.log('event', event);
    // console.log('Coordinates clicked', latLng.lat, latLng.lng);

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
  const { toggleShopDataState } = useToggleShopBarState();

  function getColorOfChannelCluster(
    activitiesItem: ActivitiesItem[],
    pos: PointOfSales
  ) {
    console.log(pos);
    const getChanneCluster = activitiesItem.filter(
      (c) => c.channelClusters[0]._id === pos.channelCluster
    );
    console.log(getChanneCluster);
    return getChanneCluster[0].channelClusters[0].color || '';
  }
  console.log(shopData?.shopData);
  return (
    <>
      <Map
        center={position}
        zoom={15}
        mapId={'6fc7264e643ee8b1'}
        onClick={handleMapClick}
      >
        {road.map((route) => {
          let color = generateRandomBrightColor();
          console.log(shopData);
          // const channelCLusterColor = getColorOfChannelCluster(
          //   route.activities_items,
          //   shopData?.shopData!
          // );
          return <Directions route={route} color={color} key={route._id} />;
        })}

        {pos?.map((pos: PointOfSales) => {
          const position = { lat: pos.latitude, lng: pos.longitude };
          console.log('position of poss', road);
          return (
            <AdvancedMarkerWrapper
              type="BOTTOMSHEET"
              roadsData={road}
              position={position}
              pos={pos}
              active={true}
              key={pos._id}
              markerColor={'red'}
            >
              {/* {hasNumberInUrl(pathname) ? (
              <InfoViewRoutes shopDetails={pos} />
            ) : ( */}
              {/* <InfoView shopDetails={pos} /> */}
              {/* )}*/}
              <div>marker</div>
            </AdvancedMarkerWrapper>
          );
        })}
      </Map>
      {toggleShopDataState}
    </>
  );
}
