import React, { FC } from 'react';
import ActivityItem from '../components/ActivityItem';
import { SalesRepActivitiesList } from '../../../data';
import DelayShowAnimation from '../../../components/delayShowAnimation';
import SlideDownToUp from '../../../components/slideDownToUp';
import Road from '@/core/models/Roads';
import { Priorities } from '@/core/constante';
import ActivityDbItem from '../components/activitDbItem';
interface DailyActivityTasksInterface {
  roads: Road[];
}
const DailyActivityTasks: FC<DailyActivityTasksInterface> = ({ roads }) => {
  console.log(roads);
  return (
    <DelayShowAnimation>
      <div className="flex flex-col mb-[200px]  ">
        {(roads || []).map((item, key) => {
          console.log(item);
          const getPriorityState = Priorities.find((p) =>
            item.activities_items.filter((c) => c.priority === p.id)
          )?.name;

          const channelCLusterId = item.activities_items.find(
            (c) => c.channelClusters[0]
          )?.channelClusters[0]._id;

          const getPos = item.pos.find(
            (c) => c.channelCluster === channelCLusterId
          );

          return (
            <>
              {item.activities_items
                .filter((c) => c.time > 5)
                .map((data, index) => {
                  return (
                    <SlideDownToUp key={`card-item-${data._id}`}>
                      <ActivityDbItem
                        activityItem={data}
                        Activitie={data.activitie}
                        status={`${getPriorityState}`}
                        step={index}
                        pos={getPos!}
                        // title={item.title}
                        key={index}
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

export default DailyActivityTasks;
