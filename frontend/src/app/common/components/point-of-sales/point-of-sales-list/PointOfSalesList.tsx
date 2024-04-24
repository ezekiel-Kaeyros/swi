import React from 'react';
import { IPointOfSalesType } from '@/utils/types';
import PointOfSalesCard from '../../route-planning/point-of-sales-card/PointOfSalesCard';
import { useSettings } from '@/app/hooks/useSettings';
import { usePointOfSales } from '@/app/hooks/usePointOfSales';
import { IChannelCluster } from '@/redux/features/types';

const PointOfSalesList = () => {
  const { channelClusters, channeClusterForSelectField } = useSettings();

  console.log(channelClusters, channeClusterForSelectField, "[[[[[[[")

  const { pointOfSales } = usePointOfSales();

  console.log("///...", pointOfSales)

  // console.log('point of sales', pointOfSales);
  const getChannelClusterNameById = (id: string | number) => {
    const foundChannel = channelClusters?.find(
      (cluster) => cluster?._id! === id?.toString()
    );

    return foundChannel?.name;
  };

  console.log(pointOfSales, 'this is my pointofSales');
  return (
    <div className="space-y-6 ">
      {/* Point of sales list */}
      {pointOfSales?.map((pos: IPointOfSalesType) => {

        // GETTING THE CHANNEL CLUSTERS OBJECT CORRESPONDING TO THE POS USING THE ID
        const foundChannelCluster = channelClusters?.find((cc: IChannelCluster) => {
          return cc._id === pos?.channelCluster
        })
        return(
        <div
          key={ pos?.id }
          className="space-y-4 flex flex-col"
        >
          <PointOfSalesCard
            tradeChannel={pos?.tradeChannel}
            category={`${getChannelClusterNameById(pos?.channelCluster)}`}
            channelCluster={ foundChannelCluster }
            isRoutePlanning={false}
            key={pos?.id}
            contact={`${pos?.contact}`}
            id={pos?._id as string}
            shopName={`${pos?.name}`}
            shopOwner={`${pos?.owner}`}
            shopLocation={`${pos?.location}`}
            firstStat={`${pos?.firstStat}`}
            secondStat={`${pos?.secondStat}`}
          />
        </div>
      )})}
    </div>
  );
};

export default PointOfSalesList;
