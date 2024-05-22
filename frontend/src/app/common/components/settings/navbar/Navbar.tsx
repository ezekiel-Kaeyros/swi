'use client';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import ChannelCluster from '../channel-cluster/ChannelCluster';
import Activities from '../activities/Activities';
// import TestPageodules from '@/app/[lang]/(pages)/testPage/modules/TestPageModules';

const Navbar = () => {
  return (
    <div className="w-full relative">
      <div className=" flex items-start h-[6.5rem] px-8 dark:bg-bgColorDark">
        <div className="font-bold text-xl pt-4">Settings</div>
      </div>
      <div className="absolute w-full px-8 top-[4rem]">
        <Tabs
          radius="full"
          color="primary"
          classNames={{
            tabList: 'gap-6  w-full relative rounded-none p-0 ',
            cursor: 'w-full bg-buttonPrimary',
            tab: 'max-w-fit px-3 h-8 ',
            tabContent: 'group-data-[selected=true]:text-white',
          }}
          variant="underlined"
          aria-label="Tabs variants"
        >
          {/* <Tab key="agentManagement" title="Agent Management">
            <TestPageodules />
          </Tab> */}
          <Tab key="channelCluster" title="Channel Cluster">
            <ChannelCluster />
          </Tab>
          <Tab key="activities" title="Activities">
            <Activities />
          </Tab>
          <Tab key="travelTime" title="Travel Time">
            Travel time
          </Tab>
          <Tab key="role" title="Service and Sales Model">
            Service and sales model
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Navbar;
