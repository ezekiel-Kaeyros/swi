'use client';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import React from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import Activity from '../realtime-tracking/activity/Activity';
import RealTimeMap from '../maps/RealTimeMap';

const SalesRepView = () => {
  const { routes, selectedRouteId } = useRoutePlanning();
  console.log('routes', routes);
  return (
    <div>
      <div className="w-full relative">
        <h1 className="font-bold text-xl p-8">Sales Rep</h1>
        <div className=" w-full px-8 top-[6rem]">
          <Tabs
            radius="full"
            color="primary"
            classNames={{
              tabList:
                'gap-4  bg-transparent w-full relative rounded-none p-0 ',
              cursor: 'w-full bg-buttonPrimary',
              tab: 'max-w-fit bg-cardDark px-4 h-10 ',
              tabContent: 'group-data-[selected=true]:text-white',
            }}
            variant="solid"
            aria-label="Tabs variants"
          >
            <Tab key="map" title="Map">
              <div className="w-full h-[70vh]">
                <RealTimeMap />
              </div>
            </Tab>
            <Tab key="activities" title="Activities">
              <div className="">
                <Activity />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SalesRepView;
