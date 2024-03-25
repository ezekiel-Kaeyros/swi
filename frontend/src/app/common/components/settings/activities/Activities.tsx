'use client';
import React from 'react';
import ActivityCard from './activity-card/ActivityCard';
import Header from './header/Header';
import { useSettings } from '@/app/hooks/useSettings';

const Activities = () => {
  const { activities } = useSettings();

  return (
    <div className="w-full">
      <Header />
      <div className="grid gap-4 mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
        {activities?.map((activity) => (
          <ActivityCard
            key={activity.id}
            color="#ffffff"
            description={activity?.description || 'Description of each task'}
            id={activity?.id}
            name={activity?.name}
            // Need to get the name by his id
            tradeChannel={activity?.tradeChannel}
            duration={activity.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
