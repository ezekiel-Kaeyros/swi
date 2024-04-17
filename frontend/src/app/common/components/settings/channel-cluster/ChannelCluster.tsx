'use client';
import React from 'react';
import ChannelClusterCard from './channel-cluster-card/ChannelClusterCard';
import Header from './header/Header';
import { useSettings } from '@/app/hooks/useSettings';

const ChannelCluster = () => {
  const { channelClusters } = useSettings();

  return (
    <div className="w-full space-x-4">
      <Header />
      <div className="grid pt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {channelClusters?.map((element) => (
          <ChannelClusterCard
            id={parseInt(`${element?.id}`)}
            key={element?.id}
            name={element?.name}
            content={element?.tradeChannel}
            color={element?.color}
          />
        ))}
      </div>

      {/* <ChannelClusterEmptyCard /> */}
    </div>
  );
};

export default ChannelCluster;
