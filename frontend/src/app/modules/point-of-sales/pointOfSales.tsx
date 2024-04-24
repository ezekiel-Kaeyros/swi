'use client';
import React from 'react';

import Card from '@/app/common/components/card/Card';
import PointOfSalesList from '@/app/common/components/point-of-sales/point-of-sales-list/PointOfSalesList';
import TabNavigation from '@/app/common/components/point-of-sales/tab-navigation/TabNavigation';
import SearchBar from '@/app/common/components/searchbar/SearchBar';
import { Button } from '@/app/common/components/button/Button';

import AddPOSIcon from '../../../../public/icons/addPOSIcon.svg';
import GenericNavigation from '@/app/[lang]/(pages)/components/settings-navigation/GenericNavigation';
// import { POSDisplayNavigationList } from '@/services/simulationData';
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';

const PointOfSales = () => {
  let { selectNavigationTabsInPOS } = useChangeNavigationItem (); 
  const { dispatch, posDisplayNavigationList } = useClientFormStep (); 
  return (
    <Card>
      {/* Display details */}

      {/* Tab Navigator */}
      <div className=" flex flex-col items-start justify-between ">
        <GenericNavigation settingPageNavigation={ posDisplayNavigationList } genericAction={ selectNavigationTabsInPOS } settinPStyle={ false } genericActionBoolean={ true } agentDStyle={ false } />
        <SearchBar />
        <TabNavigation />
        <div>
          <Button href={`/point-of-sales/create`} icon={AddPOSIcon}>
            Add
          </Button>
        </div>
      </div>
      <div className='overflow-y-auto h-full px-3 py-3 mt-5'>
        {/* Point of sales list */}
        <PointOfSalesList />
      </div>

    </Card>
  );
};

export default PointOfSales;
