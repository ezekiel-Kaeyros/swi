import React from 'react';

import { PointOfSalesDetailsInformationProps } from './PointOfSalesDetailsInformation.d';
import Image from 'next/image';
import { Chip } from '@nextui-org/react';
import UserCard from '../../../route-planning/user-assign-modal-card/user-card/UserCard';

const PointOfSalesDetailsInformation: React.FC<
  PointOfSalesDetailsInformationProps
> = ({
  contact,
  image,
  name,
  recentSalesAgent,
  salesAmount,
  shopLocation,
  shopOwner,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{shopLocation}</h3>
      <div className="my-2">
        {image && <Image src={image} alt="Shop image" />}
      </div>
      <h1 className="font-bold text-2xl mt-4">Shop Info</h1>
      <div className="flex space-x-2">
        <Chip>{shopOwner}</Chip>
        <Chip>{contact}</Chip>
      </div>

      <h1 className="font-bold text-2xl mb-1 mt-4">Recent Orders</h1>
      <div className="bg-cardDark rounded-xl ">
        <h1>Sales Amount</h1>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl">{salesAmount?.amount}</h1>
          <div className="bg-[#B7E4C7]">{salesAmount?.stat}</div>
        </div>
      </div>

      <h1 className="font-bold text-2xl mt-4 mb-2">Recent Sales Agent</h1>
      <UserCard
        email={recentSalesAgent?.email}
        id={parseInt(`${recentSalesAgent?.id}`)}
        image={recentSalesAgent?.picture}
        name={recentSalesAgent?.name}
      />
    </div>
  );
};

export default PointOfSalesDetailsInformation;
