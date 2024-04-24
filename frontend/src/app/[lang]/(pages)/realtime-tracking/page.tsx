"use client"
import TabNavigation from '@/app/common/components/realtime-tracking/tab-navigation/TabNavigation';
import React from 'react';
import SearchBar from '@/app/common/components/searchbar/SearchBar';
import MapTabNavigation from '@/app/common/components/realtime-tracking/map-tab-navigation/MapTabNavigation';
import ReactTimeTrackingModules from './modules/ReactTimeTrackingModules';
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';

const realtTimeTracking = () => {
  return <ReactTimeTrackingModules />
  // OLD UI
  // return <TabNavigation />;
};

export default realtTimeTracking;
