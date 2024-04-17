import React from 'react';
import Image from 'next/image';

import ShopIcon from '../../../../../../public/icons/pointOfSale.svg';
import MoreInfoToolTip from './more-info-tooltip/MoreInfoToolTip';
import StatisticChipCard from '../../card/statistic-chip-card/StatisticChipCard';
import MoneyIcon from '../../../../../../public/icons/moneyIconRed.svg';
import categoryIcon from '../../../../../../public/icons/categoryIcon.svg';
import ContactIcon from '../../../../../../public/icons/contactIconGreen.svg';
import userIcon from '../../../../../../public/icons/userIconGreen.svg';
import MenuIcon from '../../../../../../public/icons/hamburgerMenuIcon.svg';

import TasksModalCard from '../tasks-modal-card/TasksModalCard';
import { PointOfSalesCardProps } from './pointOfSalesCard';
import DurationIcon from '../icons/DurationIcon';
import { useSettings } from '@/app/hooks/useSettings';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { convertMinutesToHoursAndMinutes } from '../utils/utils';

const PointOfSalesCard: React.FC<PointOfSalesCardProps> = ({
  id,
  shopName,
  shopLocation,
  shopOwner,
  contact,
  firstStat,
  secondStat,
  channelCluster,
  tradeChannel,
  totalActivitiesDuration,
  category,
  isRoutePlanning,
  handleSelected,
}) => {
  const { channelClusters } = useSettings();

  const { selectedRouteId, routes } = useRoutePlanning();

  // Get current route
  const currentRoute = routes?.find(
    (route) => route?.id?.toString() === selectedRouteId?.toString()
  );

  // Compute total time for each POS

  const currentPos = currentRoute?.pointOfSales?.find(
    (pos: { id: string | number }) => pos?.id.toString() === id.toString()
  );

  const getColor = (channelClusterId: string | number) => {
    // return the exact color
    const activeChannelCluster = channelClusters?.find(
      (cluster) => cluster?.id === channelClusterId
    );

    return activeChannelCluster?.color?.hex;
  };

  // Get time of each task and sum them
  function sumDurations(arrayOfObjects: any) {
    return arrayOfObjects?.reduce(
      (sum: any, obj: { duration: any }) => sum + obj.duration,
      0
    );
  }

  const totalDurationPerPos = sumDurations(currentPos?.tasks);

  return (
    <div
      onClick={() => handleSelected && handleSelected(id)}
      className="dark:bg-cardDark rounded-xl w-full p-6 hover:opacity-90  overflow-y-hide"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          {isRoutePlanning && (
            <Image src={MenuIcon} className="mr-2" alt="Menu icon" />
          )}
          <div
            className="flex items-center justify-center rounded-lg p-2"
            style={{ backgroundColor: getColor(channelCluster) }}
          >
            <Image src={ShopIcon} alt="Shop icon" />
          </div>
          <div className="mx-4">
            <h1 className="font-bold text-xl">{shopName}</h1>
            <h3 className=" mt-1 opacity-60">{shopLocation}</h3>
          </div>
        </div>

        {isRoutePlanning && (
          <div className="ml-4">
            <MoreInfoToolTip id={id} />
          </div>
        )}
      </div>
      <div className="flex  justify-between mt-4  items-center">
        {isRoutePlanning && (
          <div className="flex space-x-4 justify-start items-center flex-wrap max-w-sm ">
            <DurationIcon color={getColor(channelCluster)} />{' '}
            <h1>
              {totalDurationPerPos
                ? convertMinutesToHoursAndMinutes(totalDurationPerPos)
                : convertMinutesToHoursAndMinutes(0)}
            </h1>
          </div>
        )}
        <div className="">
          {isRoutePlanning && <TasksModalCard posId={parseInt(`${id}`)} />}
        </div>
      </div>
      <div className="flex justify-between mt-4 ">
        <StatisticChipCard
          color={getColor(channelCluster)}
          icon={categoryIcon}
          stat={category}
        />
        <StatisticChipCard icon={ContactIcon} stat={contact} />
        <StatisticChipCard icon={userIcon} stat={shopOwner} />
      </div>
    </div>
  );
};

export default PointOfSalesCard;
