'use client';
import { Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import RoutesList from '../routes-list/RoutesList';
import SearchBar from '../../searchbar/SearchBar';

const TabNavigation = () => {
  return (
    <div className="w-full relative">
      <h1 className="font-bold text-xl p-8">Realtime tracking</h1>
      <div className=" w-full px-8 top-[6rem]">
        <Tabs
          radius="full"
          color="primary"
          classNames={{
            tabList: 'gap-4  bg-transparent w-full relative rounded-none p-0 ',
            cursor: 'w-full bg-buttonPrimary',
            tab: 'max-w-fit bg-cardDark px-4 h-10 ',
            tabContent: 'group-data-[selected=true]:text-white',
          }}
          variant="solid"
          aria-label="Tabs variants"
        >
          <Tab key="all" title="View all">
            <RoutesList />
          </Tab>
          <Tab key="active" title="Active">
            <div className="mt-24">Active</div>
          </Tab>
          <Tab key="completed" title="Completed">
            <div className="mt-24">Completed</div>
          </Tab>
        </Tabs>
      </div>
      <div className="px-8 absolute w-full top-[11rem] -mt-8 py-2">
        <SearchBar />
      </div>
    </div>
  );
};

export default TabNavigation;
