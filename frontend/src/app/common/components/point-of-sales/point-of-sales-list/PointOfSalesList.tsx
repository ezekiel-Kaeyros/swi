import React from 'react';
import { IPointOfSalesType } from '@/utils/types';
import PointOfSalesCard from '../../route-planning/point-of-sales-card/PointOfSalesCard';
import Link from 'next/link';
import { useSettings } from '@/app/hooks/useSettings';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { usePointOfSales } from '@/app/hooks/usePointOfSales';

const PointOfSalesList = () => {
  const { channelClusters } = useSettings();

  const { pointOfSales } = usePointOfSales();

  console.log('point of sales', pointOfSales);
  const getChannelClusterNameById = (id: string | number) => {
    const foundChannel = channelClusters?.find(
      (cluster) => cluster?.id.toString() === id?.toString()
    );

    return foundChannel?.name;
  };
  return (
    <div className="space-y-6">
      {/* Point of sales list */}

      {pointOfSales?.map((pos: IPointOfSalesType) => (
        <Link
          className="space-y-4 flex flex-col"
          href={`/point-of-sales/${pos.id}`}
          key={pos?.id}
        >
          <PointOfSalesCard
            tradeChannel={pos?.tradeChannel}
            category={`${getChannelClusterNameById(pos?.channelCluster)}`}
            channelCluster={`${pos?.channelCluster}`}
            isRoutePlanning={false}
            key={pos?.id}
            contact={`${pos?.contact}`}
            id={pos?.id}
            shopName={`${pos?.name}`}
            shopOwner={`${pos?.shopOwner}`}
            shopLocation={`${pos?.shopLocation}`}
            firstStat={`${pos?.firstStat}`}
            secondStat={`${pos?.secondStat}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default PointOfSalesList;
