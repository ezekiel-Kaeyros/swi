'use client';
import React from 'react';
import ChannelClusterCard from './channel-cluster-card/ChannelClusterCard';
import Header from './header/Header';
import { useSettings } from '@/app/hooks/useSettings';
import LoadingUIBoxes from '../../loaders/LoadingUIBoxes';

const ChannelCluster = () => {
  const { channelClusters, isLoading, data } = useSettings(); 

  return (
    <div className="w-full space-x-4">
      <Header />
      {/* <LoadingUIBoxes loadingTitle='Loading Agents table' /> */}
      {
        channelClusters && channelClusters.length > 0 ? 
        <div className="grid pt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {channelClusters?.map((element: any) => {
            return(
            <ChannelClusterCard
              id={element?._id}
              key={element?._id}
              name={element?.name}
              content={element?.trade_channels_id}
              color={element?.color}
              // isValidating={ isValidating }
              isLoading={ isLoading }
            />
            // <ChannelClusterCard
            //   id={parseInt(`${element?.id}`)}
            //   key={element?.id}
            //   name={element?.name}
            //   content={element?.tradeChannel}
            //   color={element?.color}
            // />
          )})}
        </div>
        :
        <LoadingUIBoxes loadingTitle='Loading Agents table' />
      }

      {/* <ChannelClusterEmptyCard /> */}
    </div>
  );
};

export default ChannelCluster;
