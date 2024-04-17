'use client';
import React from 'react';

import Card from '@/app/common/components/card/Card';
import PointOfSalesList from '@/app/common/components/point-of-sales/point-of-sales-list/PointOfSalesList';
import TabNavigation from '@/app/common/components/point-of-sales/tab-navigation/TabNavigation';
import SearchBar from '@/app/common/components/searchbar/SearchBar';
import { Button } from '@/app/common/components/button/Button';

import AddPOSIcon from '../../../../public/icons/addPOSIcon.svg';

const PointOfSales = () => {
  return (
    <Card>
      {/* Display details */}

      <SearchBar />

      {/* Tab Navigator */}
      <div className="my-4 flex items-center justify-between">
        <TabNavigation />
        <div>
          <Button href={`/point-of-sales/create`} icon={AddPOSIcon}>
            Add
          </Button>
        </div>
      </div>

      {/* Point of sales list */}
      <PointOfSalesList />
    </Card>
  );
};

export default PointOfSales;
