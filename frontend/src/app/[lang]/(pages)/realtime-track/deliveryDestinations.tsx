// Page.tsx
import React from 'react';
import Card from './card';
import { agentDelivery } from './fakeData';

interface Activity {
  activity: string;
  startTime: string;
  status: string;
}

interface Destination {
  location: string;
  subLocation: string;
  activities: Activity[];
}

const DeliveryDestinations: React.FC = () => {
  return (
    <div className="mt-8 flex flex-row flex-wrap gap-[30px]">
      {agentDelivery.destinations.map((destination, index) => (
        <Card key={index} destination={destination} />
      ))}
    </div>
  );
};

export default DeliveryDestinations;
