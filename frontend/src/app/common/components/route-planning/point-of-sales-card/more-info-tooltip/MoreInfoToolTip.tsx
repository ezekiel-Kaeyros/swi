'use client';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

import MenuIcon from '../../../../../../../public/icons/menuIcon.svg';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { removePointOfSalesFromRoute } from '@/redux/features/route-planning-slice';

const MoreInfoToolTip = ({ id }: { id: number | string }) => {
  const { dispatch, selectedRouteId } = useRoutePlanning();

  return (
    <Popover placement="right-start" offset={10}>
      <PopoverTrigger className="flex items-center">
        <Button
          isIconOnly
          size="md"
          startContent={
            <Image className="w-10" src={MenuIcon} alt="Menu icon" />
          }
          className="rounded-full py-1 bg-transparent w-fit"
        ></Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-sm bg-cardDark">
        {() => (
          <div className="px-1 py-2 w-full">
            <div className="mt-2 flex flex-wrap gap-2 w-full">
              <ul className="space-y-2">
                <li className="cursor-pointer">View</li>
                <li
                  className="cursor-pointer"
                  onClick={() =>
                    dispatch(
                      removePointOfSalesFromRoute({
                        routeId: selectedRouteId,
                        posId: id,
                      })
                    )
                  }
                >
                  Remove
                </li>
              </ul>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default MoreInfoToolTip;
