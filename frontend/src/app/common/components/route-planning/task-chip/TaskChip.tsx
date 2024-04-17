'use client';
import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import React, { ButtonHTMLAttributes, FC, useEffect, useState } from 'react';

import CheckedIcon from '../../../../../../public/icons/checkedIcon.svg';
import { cn } from '@/utils/utils';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { useSettings } from '@/app/hooks/useSettings';

interface TaskChipProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof taskChipVariants> {
  title: string;
  handleSelected: (id: number) => void;
  chipId: number;
  posId: number;
  duration: string | number;
}

const taskChipVariants = cva(
  'w-fit cursor-pointer text-sm rounded-full text-white font-medium py-2 flex items-center justify-center px-3 border',

  {
    variants: {
      variant: {
        active: 'bg-buttonPrimary  text-white hover:opacity-90',
        inactive: 'dark:border-white dark:text-white hover:opacity-90',
      },
    },

    defaultVariants: {
      variant: 'inactive',
    },
  }
);

const TaskChip: FC<TaskChipProps> = ({
  title,
  variant,
  chipId,
  className,
  duration,
  posId,
  handleSelected,
}) => {
  const { routes, selectedRouteId } = useRoutePlanning();

  const { channelClusters } = useSettings();

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const [seletedTasks, setSeletectedTasks] = useState<string[]>([]);

  // Find the routes and pos with id
  let currentRoute = routes?.find((route) => route?.id === selectedRouteId);

  let currentPos = currentRoute?.pointOfSales?.find(
    (pos: { id: number }) => pos?.id.toString() === posId?.toString()
  );

  // Get the correct color of minutes

  const getColor = (channelClusterId: string | number) => {
    // return the exact color
    const activeChannelCluster = channelClusters?.find(
      (cluster) => cluster?.id === channelClusterId
    );

    return activeChannelCluster?.color?.hex;
  };

  function extractKeyValues(arrayOfObjects: any[], key: string | number) {
    return arrayOfObjects?.map((obj: { [x: string]: any }) => obj[key]);
  }

  useEffect(() => {
    let tasks = currentPos?.tasks;

    setSeletectedTasks(extractKeyValues(tasks, 'name'));
    if (seletedTasks?.includes(title)) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routes, seletedTasks, selectedRouteId, title]);

  return (
    <div
      onClick={() => {
        setIsSelected(true), handleSelected(chipId);
      }}
      className={` ${!isSelected && 'bg-buttonPrimary'} ${cn(
        taskChipVariants({ variant, className })
      )}`}
    >
      {!isSelected && <Image src={CheckedIcon} alt="Checked icon" />}
      <h1 className={`ml-2 flex items-center`}>
        {title}{' '}
        <div
          className="py-1 px-2 rounded-full ml-1 text-sm"
          style={{ backgroundColor: `${getColor(currentPos?.channelCluster)}` }}
        >
          {duration}min
        </div>
      </h1>
    </div>
  );
};

export default TaskChip;
