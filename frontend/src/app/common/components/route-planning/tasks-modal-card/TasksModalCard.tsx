'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import React, { useState } from 'react';
import Image from 'next/image';

import TaskIcon from '../../../../../../public/icons/TasksIcon.svg';
import TaskChip from '../task-chip/TaskChip';
import { Button } from '@nextui-org/react';
import { addTaskToPointOfSales, selectTaskForPOS, sumUpSelectedPOSActivitiesTime } from '@/redux/features/route-planning-slice';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
// import { useSettings } from '@/app/hooks/useSettings';
// import { IActivity } from '@/redux/features/types';
// import { getAllActivitiesForPOS } from '@/utils/getAllActivitiesForPOS';
import { usePointOfSales } from '@/app/hooks/usePointOfSales';
import { IPointOfSalesType } from '@/utils/types';

const TasksModalCard = ( { posId, tasks }: { posId?: number | string, tasks?: IPointOfSalesType[] } ) => {
  const { dispatch, routes, selectedRouteId } = useRoutePlanning();

  const { pointOfSales } = usePointOfSales(); 

  // USING SELECTED POS ID, FIND ITS OBJECT IN LIST OF POS 
  const foundPOSObj = pointOfSales?.find((posC: IPointOfSalesType) => {
    return posC?._id === posId
  })

  // SELECTING TASK FOR TO PERFORM AT THE POS
  const handleSelected = (id: string, selected: boolean) => {

    // FIND SELECTED ACTIVITY BY ID FROM THE LIST OF POS ACTIVITIES
    let currentActivity = tasks?.find(
      (activity) => activity?._id?.toString() === id?.toString()
    ); 

    // SELECT A TASK FROM THE LIST OF POS TASK
    dispatch(
      selectTaskForPOS({
        posId: posId,
        routeId: selectedRouteId,
        selected, 
        ActivityId: currentActivity?._id,
      })
    );

    // INCREMENT TIMER AFTER A TASK WAS SELECTED
    dispatch(
      sumUpSelectedPOSActivitiesTime({
        posId: posId,
        routeId: selectedRouteId
      })
    );

  };

  // FOR THIS POS FIND ALL ALREADY SELECTED ACTIVITIES
  const selectedActivities = tasks?.filter((task: any) => {
    return task?.selected === true
  })
  // COUNT THE NUMBER OF SELECTED TASK FOR THIS ACTIVITY
  let tasksLength = selectedActivities?.length;

  return (
    <Popover placement="right-start" offset={10}>
      <PopoverTrigger className="flex items-center">
        <Button
          startContent={<Image src={TaskIcon} alt="Task icon" />}
          className={`${
            tasksLength! > 0 ? 'bg-buttonPrimary' : 'bg-transparent bg-white'
          } rounded-full py-4 px-5 w-fit border text-black text-base`}
        >
          {tasksLength! >= 1 ? (
            <div className="flex items-center">
              {tasksLength}{' '}
              <div className="ml-2">{`Activit${
                tasksLength! > 1 ? 'ies' : 'y'
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
              {/* THIS WILL REDESIGNED */}
              {tasks &&
                tasks?.map((value) => (
                  <TaskChip
                    duration={value?.time as number}
                    posId={ posId as string }
                    handleSelected={(id: string, selected: boolean) => handleSelected(id, selected)}
                    chipId={ value?._id as string }
                    key={value?._id}
                    title={value?.channeCName as string}
                    selected={ value?.selected }
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



{/* <TaskChip
  duration={value?.duration}
  posId={parseInt(`${posId}`)}
  handleSelected={(id) => handleSelected(id)}
  chipId={parseInt(`${value?.id}`)}
  key={value?.id}
  title={value?.name}
/> */}