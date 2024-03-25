'use client';
import React from 'react';
import PointOfSalesCard from '../point-of-sales-card/PointOfSalesCard';
import { IPointOfSalesType } from '@/utils/types';
import { useSettings } from '@/app/hooks/useSettings';

const ListItem = ({
  item,
  provided,
  snapshot,
}: {
  item: IPointOfSalesType;

  provided: any;
  snapshot: any;
}) => {
  const { channelClusters } = useSettings();

  const getChannelClusterNameById = (id: string | number) => {
    const foundChannel = channelClusters?.find(
      (cluster) => cluster?.id.toString() === id?.toString()
    );

    return foundChannel?.name;
  };

  return (
    <div
      className="my-4 "
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <PointOfSalesCard
        category={`${getChannelClusterNameById(item?.channelCluster)}`}
        channelCluster={item?.id}
        totalActivitiesDuration={item?.totalActivitiesDuration}
        tradeChannel={item?.tradeChannel}
        isRoutePlanning={true}
        id={`${item?.id}`}
        shopName={item?.name}
        shopOwner={item?.shopOwner}
        contact={`${item?.contact}`}
        shopLocation={item?.shopLocation}
        firstStat={`${item?.firstStat}`}
        secondStat={`${item?.secondStat}`}
      />
      {provided?.placeholder}
    </div>
  );
};

export default ListItem;
