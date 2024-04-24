'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import React, { useState } from 'react';
import Image from 'next/image';

import TaskIcon from '../../../../../../public/icons/TasksIcon.svg';
import TaskChip from '../task-chip/TaskChip';
import { Button } from '@nextui-org/react';
import { addTaskToPointOfSales } from '@/redux/features/route-planning-slice';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { useSettings } from '@/app/hooks/useSettings';
import { IActivity } from '@/redux/features/types';

const TasksModalCard = ({ posId }: { posId?: number }) => {
  const { dispatch, routes, selectedRouteId } = useRoutePlanning();

  const { activities } = useSettings();

  // Adding task in the point of sales
  const handleSelected = (id: number) => {
    // Find selected Activity by id
    let currentActivity = activities?.find(
      (activity) => activity?.id.toString() === id.toString()
    );

    dispatch(
      addTaskToPointOfSales({
        posId: posId,
        routeId: selectedRouteId,
        currentActivity: currentActivity,
        ActivityId: currentActivity?.id,
      })
    );
  };

  // Find the routes and pos with id

  let currentRoute = routes?.find((route) => route?.id === selectedRouteId);

  let currentPos = currentRoute?.pointOfSales?.find(
    (pos: { id: number }) => pos?.id.toString() === posId?.toString()
  );

  // Getting the length to be displayed
  let tasksLength = currentPos?.tasks?.length;

  // Filter activities according to the shop

  const filteredActivities: IActivity[] = activities?.filter(
    (activity) =>
      activity?.channelCluster.toString() ===
        currentPos?.channelCluster.toString() &&
      activity?.tradeChannel.toString() ===
        currentPos?.tradeChannel.toString() &&
      activity?.category.toString() === currentPos?.category.toString()
  );

  return (
    <Popover placement="right-start" offset={10}>
      <PopoverTrigger className="flex items-center">
        <Button
          startContent={<Image src={TaskIcon} alt="Task icon" />}
          className={`${
            tasksLength > 0 ? 'bg-buttonPrimary' : 'bg-transparent bg-white'
          } rounded-full py-4 px-5 w-fit border text-black text-base`}
        >
          {tasksLength >= 1 ? (
            <div className="flex items-center">
              {tasksLength}{' '}
              <div className="ml-2">{`Activit${
                tasksLength > 1 ? 'ies' : 'y'
              }`}</div>
            </div>
          ) : (
            'Add Activities'
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-sm bg-cardDark">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p
              className="text-small mb-4 font-bold text-foreground"
              {...titleProps}
            >
              Select activities
            </p>
            <div className="mt-2 flex flex-wrap gap-2 w-full">
              {filteredActivities &&
                filteredActivities?.map((value) => (
                  <TaskChip
                    duration={value?.duration}
                    posId={parseInt(`${posId}`)}
                    handleSelected={(id) => handleSelected(id)}
                    chipId={parseInt(`${value?.id}`)}
                    key={value?.id}
                    title={value?.name}
                  />
                ))}
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default TasksModalCard;
