'use client';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import PosMap from '@/app/common/components/maps/PosMap';
import AllDirections from '@/app/common/components/maps/AllDirections';
import Directions from '@/app/common/components/maps/Directions';
import ReactDirectionsMap from '@/app/common/components/maps/ReactDirectionsMap';
import { useEffect } from 'react';
import { selectedRoute } from '@/redux/features/route-planning-slice';
import POSFilter from '@/app/common/components/pos-filter/POSFilter';

// import POSFilter from '../../pos-filter/POSFilter';
import Shop from '../../../../../public/icons/shop.svg';
import Box from '../../../../../public/icons/posBox.svg';
import FolderConnection from '../../../../../public/icons/folder-connection.svg';
import Coffee from '../../../../../public/icons/coffee.svg';
import { useSettings } from '@/app/hooks/useSettings';
import { IChannelCluster } from '@/redux/features/types';
import { usePointOfSales } from '@/app/hooks/usePointOfSales';
import { IPointOfSalesType } from '@/utils/types';

export default function Layout({ children }: { children: React.ReactNode }) {
  const {
    toggleMapsValue,
    showAllRoutes,
    dispatch,
    selectedRouteId,
    showPOSMap,
  } = useRoutePlanning();
  const {
    locaChannelClusters,
    locaTradeChannels,
    localCategories,
    channelClusters,
    tradeChannels,
    activities,
  } = useSettings();
  const { pointOfSales } = usePointOfSales();

  useEffect(() => {
    showAllRoutes && dispatch(selectedRoute({ selectedRouteId: 0 }));
  }, []);

  let mapDisplay = <AllDirections />;

  if (showAllRoutes === true) {
    mapDisplay = <AllDirections />;
  }
  if (toggleMapsValue === true) {
    mapDisplay = <ReactDirectionsMap />;
  }
  if (showPOSMap === true) {
    const filterPosOnMap = (id: string) => {
      let result = pointOfSales.filter((pos: IPointOfSalesType) => {
        return pos?.channelCluster === id;
      });
      return result;
    };
    const getAllPosOnMap = (id: string) => {
      return pointOfSales;
    };
    mapDisplay = (
      <>
        <PosMap />
      </>
    );
  }

  return (
    <main className="flex w-full h-[calc(100vh-80px)] ">
      <div
        className={`${!showAllRoutes ? 'w-full' : ' w-7/12'}  overflow-y-auto `}
      >
        {children}
      </div>
      <div
        className={`${
          showAllRoutes || toggleMapsValue || showPOSMap ? 'w-full' : ' hidden'
        } `}
      >
        {mapDisplay}
      </div>
    </main>
  );
}

{
  /* {showAllRoutes ? (
          <AllDirections />
        ) : toggleMapsValue ? (
          <ReactDirectionsMap />
          // <PosMap />
        ) : (
          <PosMap />
          // <ReactDirectionsMap />
        )} */
}
{
  /* {
          showAllRoutes ? (
            <AllDirections />
          ) : null
        }
        {
          toggleMapsValue ? 
          <PosMap /> : <ReactDirectionsMap />
        } */
}
{
  /* <PosMap /> */
}

{
  /* <POSFilter
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
          /> */
}
