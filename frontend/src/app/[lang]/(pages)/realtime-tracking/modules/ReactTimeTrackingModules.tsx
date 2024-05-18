'use client';
import React from 'react';
import GenericNavigation from '../../components/settings-navigation/GenericNavigation';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import SearchAndFilterPosForRTT from '@/app/common/components/realtime-tracking/new/SearchAndFilterPosForRTT';
import RTTList from '@/app/common/components/realtime-tracking/new/RTTList';

const ReactTimeTrackingModules = () => {
  let { selectNavigationTabsInRTT } = useChangeNavigationItem();
  const { dispatch, realTimeTrackingNavigationList } = useClientFormStep();
  return (
    <div className="px-[1rem] py-[2rem] h-100vh">
      <GenericNavigation
        settingPageNavigation={realTimeTrackingNavigationList}
        genericAction={selectNavigationTabsInRTT}
        settinPStyle={false}
        genericActionBoolean={true}
        agentDStyle={false}
      />
      <SearchAndFilterPosForRTT />
      <RTTList />
    </div>
  );
};

export default ReactTimeTrackingModules;
