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
  handleSelected: (id: string, selected: boolean) => void;
  chipId: number | string;
  posId: number | string;
  duration: string | number; 
  selected?: boolean; 
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
  title, variant,
  chipId, selected, 
  className, duration,
  posId, handleSelected,
}) => {
  const { routes, selectedRouteId } = useRoutePlanning();

  const { channelClusters } = useSettings();

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const [seletedTasks, setSeletectedTasks] = useState<string[]>([]);

  // Find the routes and pos with id
  let currentRoute = routes?.find((route) => route?.id === selectedRouteId);

  console.log("taskChip currentRoute, ", currentRoute, posId)

  // return

  let currentPos = currentRoute?.pointOfSales?.find(
    (pos: { _id: string }) => pos?._id.toString() === posId?.toString()
  );

  // Get the correct color of minutes

  const getColor = (channelClusterId: string | number) => {
    // return the exact color
    const activeChannelCluster = channelClusters?.find(
      (cluster) => cluster?._id === channelClusterId
    );

    return activeChannelCluster?.color;
    // return activeChannelCluster?.color?.hex;
  };

  // function extractKeyValues(arrayOfObjects: any[], key: string | number) {
  //   return arrayOfObjects?.map((obj: { [x: string]: any }) => obj[key]);
  // }

  // useEffect(() => {
  //   let tasks = currentPos?.tasks;
  //   console.log(extractKeyValues(tasks, '_id'), tasks, currentPos, "extractKeyValues(tasks, 'name')")

  //   // setSeletectedTasks(extractKeyValues(tasks, 'channeCName'));
  //   setSeletectedTasks(extractKeyValues(tasks, '_id'));
  //   // if (seletedTasks?.includes(title)) {
  //   //   setIsSelected(false);
  //   // } else {
  //   //   setIsSelected(true);
  //   // }
  //   if (seletedTasks?.includes(chipId as string)) {
  //     setIsSelected(false);
  //   } else {
  //     setIsSelected(true);
  //   }
    
  //   console.log("seletedTasks22", seletedTasks)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [routes,  selectedRouteId, 
  //   // seletedTasks,
  //   // title, 
  //   chipId, 
  // ]);

  // console.log("<<<< +++", seletedTasks)

  return (
    <div
      onClick={() => {
        // setIsSelected(true), 
        handleSelected(chipId as string, !selected);
      }}
      className={` ${ selected === true ? 'bg-buttonPrimary' : "" } ${cn(
        taskChipVariants({ variant, className })
      )}`}
    >
      { selected === true ? <Image src={CheckedIcon} alt="Checked icon" /> : null}
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



























// 'use client';
// import { VariantProps, cva } from 'class-variance-authority';
// import Image from 'next/image';
// import React, { ButtonHTMLAttributes, FC, useEffect, useState } from 'react';

// import CheckedIcon from '../../../../../../public/icons/checkedIcon.svg';
// import { cn } from '@/utils/utils';
// import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
// import { useSettings } from '@/app/hooks/useSettings';

// interface TaskChipProps
//   extends ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof taskChipVariants> {
//   title: string;
//   handleSelected: (id: string) => void;
//   chipId: number | string;
//   posId: number | string;
//   duration: string | number;
// }

// const taskChipVariants = cva(
//   'w-fit cursor-pointer text-sm rounded-full text-white font-medium py-2 flex items-center justify-center px-3 border',

//   {
//     variants: {
//       variant: {
//         active: 'bg-buttonPrimary  text-white hover:opacity-90',
//         inactive: 'dark:border-white dark:text-white hover:opacity-90',
//       },
//     },

//     defaultVariants: {
//       variant: 'inactive',
//     },
//   }
// );

// const TaskChip: FC<TaskChipProps> = ({
//   title,
//   variant,
//   chipId,
//   className,
//   duration,
//   posId,
//   handleSelected,
// }) => {
//   const { routes, selectedRouteId } = useRoutePlanning();

//   const { channelClusters } = useSettings();

//   const [isSelected, setIsSelected] = useState<boolean>(false);

//   const [seletedTasks, setSeletectedTasks] = useState<string[]>([]);

//   // Find the routes and pos with id
//   let currentRoute = routes?.find((route) => route?.id === selectedRouteId);

//   console.log("taskChip currentRoute, ", currentRoute, posId)

//   // return

//   let currentPos = currentRoute?.pointOfSales?.find(
//     (pos: { _id: string }) => pos?._id.toString() === posId?.toString()
//   );

//   // Get the correct color of minutes

//   const getColor = (channelClusterId: string | number) => {
//     // return the exact color
//     const activeChannelCluster = channelClusters?.find(
//       (cluster) => cluster?._id === channelClusterId
//     );

//     return activeChannelCluster?.color;
//     // return activeChannelCluster?.color?.hex;
//   };

//   function extractKeyValues(arrayOfObjects: any[], key: string | number) {
//     return arrayOfObjects?.map((obj: { [x: string]: any }) => obj[key]);
//   }

//   useEffect(() => {
//     let tasks = currentPos?.tasks;
//     console.log(extractKeyValues(tasks, '_id'), tasks, currentPos, "extractKeyValues(tasks, 'name')")

//     // setSeletectedTasks(extractKeyValues(tasks, 'channeCName'));
//     setSeletectedTasks(extractKeyValues(tasks, '_id'));
//     // if (seletedTasks?.includes(title)) {
//     //   setIsSelected(false);
//     // } else {
//     //   setIsSelected(true);
//     // }
//     if (seletedTasks?.includes(chipId as string)) {
//       setIsSelected(false);
//     } else {
//       setIsSelected(true);
//     }
    
//     console.log("seletedTasks22", seletedTasks)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [routes,  selectedRouteId, 
//     seletedTasks,
//     // title, 
//     chipId, 
//   ]);

//   console.log("<<<< +++", seletedTasks)

//   return (
//     <div
//       onClick={() => {
//         setIsSelected(true), handleSelected(chipId as string);
//       }}
//       className={` ${!isSelected && 'bg-buttonPrimary'} ${cn(
//         taskChipVariants({ variant, className })
//       )}`}
//     >
//       {!isSelected && <Image src={CheckedIcon} alt="Checked icon" />}
//       <h1 className={`ml-2 flex items-center`}>
//         {title}{' '}
//         <div
//           className="py-1 px-2 rounded-full ml-1 text-sm"
//           style={{ backgroundColor: `${getColor(currentPos?.channelCluster)}` }}
//         >
//           {duration}min
//         </div>
//       </h1>
//     </div>
//   );
// };

// export default TaskChip;
