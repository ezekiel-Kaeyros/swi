import React, { FC } from 'react';
import ActivityItem from '../../components/ActivityItem';
import { SalesRepAllActivitiesList } from '../../../../data';
import SlideDownToUp from '../../../../components/slideDownToUp';
import DelayShowAnimation from '../../../../components/delayShowAnimation';
import Road from '@/core/models/Roads';
import { Priorities } from '@/core/constante';
import ActivityDbItem from '../../components/activitDbItem';
import { ActivitiesSvgIcon, TaskSvgIcon } from '@/core/svg/SvgIcon';
import ActivitiesItem from '@/core/models/ActivitiItem';
import { ShopDataType } from '@/redux/features/roard-management-slice';
import RoadsItem from '@/core/models/RoadsItem';
interface AllActivitesInterface {
  dailyRoadItem: RoadsItem[] | undefined;
  currentItemShop: string;
}
const AllActivites: FC<AllActivitesInterface> = ({
  dailyRoadItem,
  currentItemShop,
}) => {
  // console.log(dailyRoadItem);
  return (
    <DelayShowAnimation>
      <div className="flex flex-col mb-[200px]  ">
        {(dailyRoadItem || []).map((item, key) => {
          // console.log(item);

          return (
            <>
              {item?.taskIds.map((task) => {
                const getPriorityState = Priorities.find(
                  (p) => task.priority === p.id
                )?.name;
                // console.log(task.activityItem);
                return (
                  <SlideDownToUp key={`card-item-all-activities-${task._id}`}>
                    <ActivityDbItem
                      activityItem={task.activityItem}
                      activitie={task}
                      status={`${getPriorityState}`}
                      step={
                        task.activityItem.time < 3 ? (
                          <ActivitiesSvgIcon />
                        ) : (
                          <TaskSvgIcon />
                        )
                      }
                      pos={item.posId}
                      // title={item.title}
                      key={key}
                    />
                  </SlideDownToUp>
                );
              })}
            </>
          );
        })}
      </div>
    </DelayShowAnimation>
  );
};

export default AllActivites;
