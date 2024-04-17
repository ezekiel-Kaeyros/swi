'use client';

import React from 'react';
import AnimateClick from '../../animate-click/AnimateClick';
import Image from 'next/image';

import LeftIcon from '../../../../../../public/icons/arrowLeftIcon.svg';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { displayAllRoutes } from '@/redux/features/route-planning-slice';
import { useRouter } from 'next/router';

const HeaderRouteCreation = () => {
  const { push } = useRouter();
  const { dispatch } = useRoutePlanning();

  const handleOnClickBack = () => {
    dispatch(displayAllRoutes({ showAllRoutes: true }));
    push('/route-preparation');
  };

  return (
    <div className="flex items-center">
      <div>
        <AnimateClick>
          <div
            onClick={() => handleOnClickBack()}
            className="items-center w-fit rounded-md
    py-2 px-3 dark:bg-cardDark flex  hover:dark:opacity-80"
          >
            <Image src={LeftIcon} alt="Left icon" />
            <div className="ml-2">Back</div>
          </div>
        </AnimateClick>
      </div>

      <h1 className="ml-16 font-bold">Create a new route </h1>
    </div>
  );
};

export default HeaderRouteCreation;
