import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import ShopIcon from '../../../../../../public/icons/pointOfSale.svg';
import MoreInfoToolTip from './more-info-tooltip/MoreInfoToolTip';
import StatisticChipCard from '../../card/statistic-chip-card/StatisticChipCard';
import MoneyIcon from '../../../../../../public/icons/moneyIconRed.svg';
import categoryIcon from '../../../../../../public/icons/categoryIcon.svg';
import categoryDice from '../../../../../../public/icons/category.svg';
import { CategoryDice } from './PointOfSalesIcons';
import { ArrowUp } from './PointOfSalesIcons';
import { Box } from './PointOfSalesIcons';
import { Shop } from './PointOfSalesIcons';
import ContactIcon from '../../../../../../public/icons/contactIconGreen.svg';
import userIcon from '../../../../../../public/icons/userIconGreen.svg';
import MenuIcon from '../../../../../../public/icons/hamburgerMenuIcon.svg';

import TasksModalCard from '../tasks-modal-card/TasksModalCard';
import { PointOfSalesCardProps } from './pointOfSalesCard';
import DurationIcon from '../icons/DurationIcon';
import { useSettings } from '@/app/hooks/useSettings';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { convertMinutesToHoursAndMinutes } from '../utils/utils';
import GenericPopoverOption from '../../generic-popover-options/GenericPopoverOption';
import useTogglePopup from '@/app/hooks/useTogglePopup';
import PopOverOptions from './PopOverOptions';
import Link from 'next/link';
import { getAllActivitiesForPOS } from '@/utils/getAllActivitiesForPOS';
import { FE_LINK_POINT_OF_SALES } from '@/utils/constants';
import { removePointOfSalesFromRoute } from '@/redux/features/route-planning-slice';

const RPPointOfSalesCard: React.FC<PointOfSalesCardProps> = ({
  id,
  shopName,
  shopLocation,
  shopOwner,
  contact,
  firstStat,
  // key, 
  secondStat,
  channelCluster,
  tradeChannel,
  totalActivitiesDuration,
  category,
  isRoutePlanning,
  handleSelected,
}) => {
  const { channelClusters, activities } = useSettings(); 

  const { dispatch, selectedRouteId, routes } = useRoutePlanning(); 
  const [ finalDuration, setFinalDuration ] = useState<any> (0)

  // Get current route
  const currentRoute = routes?.find(
    (route) => route?.id?.toString() === selectedRouteId?.toString()
  );

  // console.log("channelCluster9999", channelCluster, routes)

  
  // Compute total time for each POS
  
  const currentPos = currentRoute?.pointOfSales?.find(
    (pos: { _id: string | number }) => pos?._id?.toString() === id?.toString()
  );
  // const isChannelClusterInActivities = getAllActivitiesForPOS (activities as [], currentPos?.channelCluster as string); 

  // console.log("isChannelClusterInActivities1234", currentPos?.name, currentPos?.tasks)

  // Fetch card 3 colors
  const getColor = (channelClusterId: string | number) => {
    // return the exact color
    const activeChannelCluster = channelClusters?.find(
      (cluster: any) => cluster?.id === channelClusterId
    );

    return activeChannelCluster?.color;
    // return activeChannelCluster?.color?.hex;
  };

  // Fetch card 4 colors
  const getFadeColor = (channelClusterId: string | number) => {
    // return the exact color
    const activeChannelCluster = channelClusters?.find(
      (cluster: any) => cluster?.id === channelClusterId
    );

    return activeChannelCluster?.color;
    // return activeChannelCluster?.color?.fadeHex;
  };

  // Get time of each task and sum them
  function sumDurations(arrayOfObjects: any) {
    return arrayOfObjects?.reduce(
      (sum: any, obj: { time: any, selected: boolean }) => {
        if (obj.selected === true) {
          sum + obj.time 
        }
      },
      0
    );
  }

  useEffect(() => {
    setFinalDuration (sumDurations(currentPos?.tasks))
  }, [routes])

  // HOOK TO SHOW LITTLE POPOVER FOR DELETE AND UPDATE OPTION
  const { toggleOptionContainer } = useTogglePopup (true)
  // SHOW UI FOR UPDATING A TRADING CHANNEL
  const handleEditChannelCluster = () => {
    // settitleDescribed ("Modify Channel Cluster")
    // setOpenModal(true);
    // setShouldUpdate (true)
  }

  // DELETE METHOD TO EXECUTE TO REMOVE A CHANNEL CLUSTER
  const deleteChannelCluster = () => {
    let confirmAction = confirm ("Are you sure to execute this action?")
    if (confirmAction) {
      // makeDeleteAction (`${ BASE_URL }/channelCluster/${ id}`)
      dispatch(
        removePointOfSalesFromRoute({
          routeId: selectedRouteId,
          posId: id,
        })
      )
    } else {
      console.log("hi"); 
    }
  }

  const totalDurationPerPos = sumDurations(currentPos?.tasks);

  // console.log("channelCluster?.color", channelCluster, channelCluster?.color, id)

  return (
    <div
      onClick={() => handleSelected && handleSelected(id)}
      className="dark:bg-[#323232] rounded-xl w-full p-6 hover:opacity-90  overflow-y-hide"
    >
      <div className="flex items-start justify-between">
        <Link 
        href={`${ FE_LINK_POINT_OF_SALES }/${id}`}
        className="flex items-center">
          {/* {isRoutePlanning && (
            <Image src={MenuIcon} className="mr-2" alt="Menu icon" />
          )} */}
          <div
            className="flex items-center justify-center rounded-xl p-2"
            style={{ backgroundColor: channelCluster?.color }}
            // style={{ backgroundColor: getColor(channelCluster) }}
            // 
          >
            <Image src={ShopIcon} alt="Shop icon" />
          </div>
          <div className="mx-4">
            <h1 className="font-bold text-xl">{shopName}</h1>
            <h3 className=" mt-1 opacity-60">{shopLocation}</h3>
          </div>
          {/* <div>
            <GenericPopoverOption toggleOptionContainer={ toggleOptionContainer }>
              <PopOverOptions handleEditChannelCluster={ handleEditChannelCluster } deleteChannelCluster={ deleteChannelCluster }/>
            </GenericPopoverOption>
          </div> */}
        </Link>

        {/* WHEN IS ROUTEPLANNING IS DONE UNCOMMENT THE BELOW */}
        {/* {isRoutePlanning && (
          <div className="ml-4">
            <MoreInfoToolTip id={id} />
          </div>
        )} */}
        {/* WHEN IS ROUTEPLANNING IS DONE REMOVE THE BELOW */}
        <div className="ml-4">
          <MoreInfoToolTip id={id} methodExecute={ deleteChannelCluster } />
        </div>
      </div>
      <div className="flex  justify-between mt-4  items-center">
        {isRoutePlanning && (
          <div className="flex space-x-4 justify-start items-center flex-wrap max-w-sm bg-[#242424] px-4 py-2 rounded-full">
            <DurationIcon color={getColor(channelCluster) as string} />{' '}
            <h1>
              {currentPos?.taskTotalTime
                ? convertMinutesToHoursAndMinutes(currentPos?.taskTotalTime)
                : convertMinutesToHoursAndMinutes(0)}
            </h1>
          </div>
        )}
        <div className="">
          {/* {isRoutePlanning && <TasksModalCard posId={parseInt(`${id}`)} />} */}
          {isRoutePlanning && <TasksModalCard posId={ id } tasks={ currentPos?.tasks } />}
        </div>
      </div>
      <div className="mt-4">
        <div>Statistics</div>
        <div className="flex justify-between">
          {/* <StatisticChipCard
            color={getColor(channelCluster)}
            icon={categoryIcon}
            stat={category}
          /> */}
          <StatisticChipCard
            Icon={ArrowUp}
            stat="+5%"
            bgColor="#05522B"
            col={`#6DE2A6`}
          />
          <StatisticChipCard
            Icon={Box}
            stat="2/4"
            bgColor="#662314"
            col={`#FF9A85`}
          />
          <StatisticChipCard
            Icon={Shop}
            stat={ channelCluster?.name }
            bgColor={ channelCluster?.color }
            // stat="modern trade"
            // bgColor={`${getColor(channelCluster)}`}
            col={`#F7F9FF`}
          />
          <StatisticChipCard
            Icon={CategoryDice}
            stat="Cathegory A"
            bgColor={ channelCluster?.color }
            // bgColor={`${getFadeColor(channelCluster)}`}
            // col={`${getColor(channelCluster)}`}
            col={`#F7F9FF`}
          />
        </div>
      </div>
    </div>
  );
};

export default RPPointOfSalesCard;
