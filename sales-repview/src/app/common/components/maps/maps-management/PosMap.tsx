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
import RoadsItem from '@/core/models/RoadsItem';

export default function PosMap({ roads }: { roads: Road[] | undefined }) {
  const position = { lat: 3.8852761566538545, lng: 11.502079803888337 };

  const { pos, shopData, road } = useManagePosInStore();

  const { pointOfSales, dispatch } = usePointOfSales();
  // console.log(shopData);
  // console.log(road);
  // console.log(pos);
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

  // console.log('path', pathname);
  const { toggleShopDataState } = useToggleShopBarState();

  // function getColorOfChannelCluster(
  //   activitiesItem: ActivitiesItem[],
  //   pos: PointOfSales
  // ) {
  //   console.log(pos);
  //   const getChanneCluster = activitiesItem.filter(
  //     (c) => c.categories[0]._id === pos.category
  //   );
  //   console.log(getChanneCluster, ' get channel cluster ');
  //   return getChanneCluster[0].channelClusters[0].color || '';
  // }
  // console.log(shopData?.shopData);
  return (
    <>
      <Map
        center={position}
        zoom={15}
        mapId={'6fc7264e643ee8b1'}
        onClick={handleMapClick}
      >
        {(roads || []).map((route) => {
          let pointOfSalesList: PointOfSales[] = [];
          // let color = generateRandomBrightColor();
          // const getChanneCluster = route.activities_items.filter(
          //   (c) => c.categories[0]._id === pos.category
          // );
          // const channelCLusterColor = getColorOfChannelCluster(
          //   route.activities_items,
          //   shopData?.shopData!
          // );
          route.roadItems.map((roadItem) => {
            pointOfSalesList.push(roadItem.posId);
          });
          // console.log(pointOfSalesList);
          return (
            <Directions
              route={pointOfSalesList}
              color={'#5F8EFF'}
              key={route._id}
            />
          );
        })}

        {/* <Directions route={pos} color={'#5F8EFF'}  key={`route-draw-${route._id}`} /> */}

        {(roads || []).map((route) => {
          let pointOfSalesList: PointOfSales[] = [];
          // let color = generateRandomBrightColor();
          // const getChanneCluster = route.activities_items.filter(
          //   (c) => c.categories[0]._id === pos.category
          // );
          // const channelCLusterColor = getColorOfChannelCluster(
          //   route.activities_items,
          //   shopData?.shopData!
          // );

          // console.log(pointOfSalesList);
          return route.roadItems.map((pointOfSalesItem: RoadsItem, index) => {
            let colorOfMarker = '';
            const position = {
              lat: pointOfSalesItem?.posId?.latitude,
              lng: pointOfSalesItem?.posId?.longitude,
            };
            // console.log('position of poss', road);

            // console.log(colorOfMarker, 'fsdfjhskfsjk------------');
            return (
              <AdvancedMarkerWrapper
                type="BOTTOMSHEET"
                roadsData={pointOfSalesItem}
                position={position}
                pos={pointOfSalesItem?.posId}
                active={true}
                key={pointOfSalesItem?._id}
                markerType={
                  index === 0
                    ? 'START'
                    : index === route?.roadItems.length - 1
                      ? 'END'
                      : 'IDLE'
                }
                markerColor={
                  pointOfSalesItem?.posId?.channelCluster?.color || '#000000'
                }
              >
                {/* {hasNumberInUrl(pathname) ? (
                <InfoViewRoutes shopDetails={pos} />
              ) : ( */}
                {/* <InfoView shopDetails={pos} /> */}
                {/* )}*/}
                <div>marker</div>
              </AdvancedMarkerWrapper>
            );
          });
        })}
      </Map>
      {toggleShopDataState}
    </>
  );
}
