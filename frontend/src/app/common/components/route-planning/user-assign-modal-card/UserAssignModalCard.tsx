'use client';
import { Button } from '@nextui-org/react';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import React, { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';

import UserIcon from '../../../../../../public/icons/userIcon.svg';
import SearchIcon from '../../../../../../public/icons/searchIcon.svg';

import { users } from '@/utils/usersData';
import UserCard from './user-card/UserCard';
import InputField from '../../forms/text-field/InputField';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { assignRouteToSalesRepresentative } from '@/redux/features/route-planning-slice';

const UserAssignModalCard = () => {
  const { routes, dispatch, selectedRouteId } = useRoutePlanning();

  const buttonRef = useRef<any>(null);

  const [filteredUsers, setFilteredUsers] = useState(users);

  // Get current route
  let currentRoute = routes?.find((route) => route?.id === selectedRouteId);

  let salesRep = currentRoute?.salesRepresentative;
  let numberOfSalesRep = currentRoute?.salesRepresentative?.length;

  // Handling filtering of the field

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('fired');
  };

  const handleSelected = (id: number) => {
    dispatch(
      assignRouteToSalesRepresentative({
        routeId: selectedRouteId,
        salesRepId: id,
      })
    );
  };

  //
  console.log('sales rep', salesRep);

  return (
    <Popover triggerType="dialog" placement="right-start" offset={10}>
      <PopoverTrigger className="flex items-center">
        <Button
          ref={buttonRef}
          startContent={<Image src={UserIcon} alt="User icon" />}
          className=" bg-buttonPrimary rounded-full py-4  w-fit "
        >
          {numberOfSalesRep >= 1 ? salesRep && salesRep[0] : <>Assign Route</>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-lg bg-bgColorDark">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            {/* Search filter */}
            <InputField
              icon={SearchIcon}
              type="text"
              name="search"
              placeholder="Search a user"
            />
            <div>
              <h1 className="font-bold my-4">Sales Agents</h1>
              <div className=" grid grid-cols-2 gap-4">
                {filteredUsers?.map((user) => (
                  <UserCard
                    key={user?.id}
                    email={user?.email}
                    id={user?.id}
                    name={user?.name}
                    image=""
                    handleSelect={() => handleSelected(user?.id)}
                  />
                ))}
              </div>
              <div className="relative">
                <Button
                  onClick={() => buttonRef.current?.click()}
                  className="bg-buttonPrimary mt-4 top-0 rounded-full py-4"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default UserAssignModalCard;
