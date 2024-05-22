import React from 'react';
import { IPointOfSalesType } from '@/utils/types';
// import PointOfSalesCard from '../../route-planning/point-of-sales-card/PointOfSalesCard';
import { useSettings } from '@/app/hooks/useSettings';
import { usePointOfSales } from '@/app/hooks/usePointOfSales';
import { IChannelCluster } from '@/redux/features/types';
import PointOfSalesCard from '../point-of-sales-card/PointOfSalesCard';

const PointOfSalesList = () => {
  const { channelClusters, channeClusterForSelectField } = useSettings();

  const { pointOfSales } = usePointOfSales();

  const getChannelClusterNameById = (id: string | number) => {
    const foundChannel = channelClusters?.find(
      (cluster: any) => cluster?._id! === id?.toString()
    );

    return foundChannel?.name;
  };

  return (
    <div className="space-y-6 pb-[10rem] pt-[2rem] overflow-y-auto">
      {/* Point of sales list */}
      {pointOfSales?.map((pos: IPointOfSalesType) => {
        // GETTING THE CHANNEL CLUSTERS OBJECT CORRESPONDING TO THE POS USING THE ID
        const foundChannelCluster = channelClusters?.find(
          (cc: IChannelCluster) => {
            return cc._id === (pos?.channelCluster as string);
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
