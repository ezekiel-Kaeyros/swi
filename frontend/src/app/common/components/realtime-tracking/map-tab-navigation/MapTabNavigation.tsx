'use client';
import React from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import RoutesList from '../routes-list/RoutesList';
import RealtimeTracking from '@/app/modules/realtime-tracking/RealtimeTracking';
import Link from 'next/link';
import NavItem from './nav-item/NavItem';

const MapTabNavigation = () => {
  const navigation = [
    {
      id: 1,
      title: 'Live Activities',
      url: '/fr/realtime-tracking',
    },
    {
      id: 2,
      title: 'Activity',
      url: '/fr/realtime-tracking/activity',
    },
    {
      id: 3,
      title: 'Directions',
      url: '/fr/realtime-tracking/directions',
    },
    {
      id: 1,
      title: 'Information',
      url: '/fr/realtime-tracking/information',
    },
  ];

  return (
    <div className="w-full relative">
      <ul className="flex items-center px-2 py-2 w-fit rounded-full bg-cardDark space-x-6">
        {navigation?.map((nav) => (
          <NavItem title={nav?.title} url={nav?.url} key={nav?.id} />
        ))}
      </ul>
    </div>
  );
};

export default MapTabNavigation;
