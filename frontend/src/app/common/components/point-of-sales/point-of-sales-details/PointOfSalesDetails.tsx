'use client';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import PointOfSalesDetailsInformation from './point-of-sales-details-content/PointOfSalesDetailsInformation';
import { PointOfSalesDetailsInformationProps } from './point-of-sales-details-content/PointOfSalesDetailsInformation.d';

const PointOfSalesDetails = ({ posDetails }: { posDetails: any }) => {
  return (
    <div className="flex my-8 w-full flex-col">
      <Tabs
        radius="full"
        color="primary"
        classNames={{
          tabList: 'gap-6 w-full bg-transparent relative rounded-none p-0 ',
          cursor: 'w-full bg-buttonPrimary',
          tab: 'max-w-fit px-3 h-8',
          tabContent: 'group-data-[selected=true]:text-white',
        }}
        aria-label="Options"
      >
        <Tab key="information" title="Information">
          <Card className=" shadow-none bg-transparent">
            <CardBody>
              <PointOfSalesDetailsInformation
                name={posDetails?.name}
                // shopLocation={posDetails?.shopLocation}
                shopLocation={posDetails?.location}
                // shopOwner={posDetails?.shopOwner}
                shopOwner={posDetails?.owner}
                image={posDetails?.image}
                contact={posDetails?.contact}
                recentSalesAgent={posDetails?.recentSalesAgent}
                salesAmount={posDetails?.salesAmount}
              />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="billing" title="Billing">
          <Card className=" shadow-none bg-transparent">
            <CardBody>Coming soon</CardBody>
          </Card>
        </Tab>
        <Tab key="insights" title="Insights">
          <Card className=" shadow-none bg-transparent">
            <CardBody>Coming soon</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PointOfSalesDetails;
