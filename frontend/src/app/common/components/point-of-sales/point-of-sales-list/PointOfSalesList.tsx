import React from 'react';
import { IPointOfSalesType } from '@/utils/types';
// import PointOfSalesCard from '../../route-planning/point-of-sales-card/PointOfSalesCard';
import { useSettings } from '@/app/hooks/useSettings';
import { usePointOfSales } from '@/app/hooks/usePointOfSales';
import { IChannelCluster } from '@/redux/features/types';
import PointOfSalesCard from '../point-of-sales-card/PointOfSalesCard';

const PointOfSalesList = () => {
  const { channelClusters, channeClusterForSelectField } = useSettings();

  // console.log(channelClusters, channeClusterForSelectField, "[[[[[[[")

  const { pointOfSales } = usePointOfSales();

  // console.log("///...", pointOfSales)

  // console.log('point of sales', pointOfSales);
  const getChannelClusterNameById = (id: string | number) => {
    const foundChannel = channelClusters?.find(
      (cluster: any) => cluster?._id! === id?.toString()
    );

    return foundChannel?.name;
  };

  // console.log(pointOfSales, 'this is my pointofSales');
  return (
    <div className="space-y-6 ">
      {/* Point of sales list */}
      {pointOfSales?.map((pos: IPointOfSalesType) => {
        // GETTING THE CHANNEL CLUSTERS OBJECT CORRESPONDING TO THE POS USING THE ID
        const foundChannelCluster = channelClusters?.find(
          (cc: IChannelCluster) => {
            console.log('loglog', cc, pos);
            return cc._id === (pos?.channelCluster as string);
            // return
          }
        );
        return (
          <div key={pos?.id} className="space-y-4 flex flex-col">
            <PointOfSalesCard
              tradeChannel={pos?.tradeChannel}
              category={`${getChannelClusterNameById(pos?.category)}`}
              channelCluster={foundChannelCluster}
              isRoutePlanning={false}
              key={pos?._id}
              contact={`${pos?.contact}`}
              id={pos?._id as string}
              shopName={`${pos?.name}`}
              shopOwner={`${pos?.shopOwner}`}
              shopLocation={`${pos?.location}`}
              firstStat={`${pos?.firstStat}`}
              secondStat={`${pos?.secondStat}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PointOfSalesList;
