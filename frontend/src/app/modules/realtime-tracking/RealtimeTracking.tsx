import TabNavigation from '@/app/common/components/realtime-tracking/tab-navigation/TabNavigation';
import SearchBar from '@/app/common/components/searchbar/SearchBar';
import React from 'react';

const RealtimeTracking = () => {
  return (
    <div>
      <TabNavigation />
      <div className="mt-[1.5rem] mx-8">
        <SearchBar />
      </div>
    </div>
  );
};

export default RealtimeTracking;
