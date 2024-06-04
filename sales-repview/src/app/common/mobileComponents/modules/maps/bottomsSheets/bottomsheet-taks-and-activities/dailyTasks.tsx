import React, { FC } from 'react';
import DelayShowAnimation from '../../../../components/delayShowAnimation';
import SlideDownToUp from '../../../../components/slideDownToUp';
import ActivityDbItemTask from '../../components/ActivityDbItemTask';
import Road from '@/core/models/Roads';
import { Priorities } from '@/core/constante';
import { ShopDataType } from '@/redux/features/roard-management-slice';
import ActivityDbItem from '../../components/activitDbItem';
import RoadsItem from '@/core/models/RoadsItem';
import { ActivitiesSvgIcon, TaskSvgIcon } from '@/core/svg/SvgIcon';
interface DailyTaskInterface {
  dailyRoadItem: RoadsItem[] | undefined;
  currentItemShop: string;
}
const DailyTasks: FC<DailyTaskInterface> = ({
  currentItemShop,
  dailyRoadItem,
}) => {
  return (
    // <DelayShowAnimation>
    //   <div className="flex flex-col mb-[200px]  ">
    //     {(roads || []).map((item, key) => {
    //       console.log(item);
    //       const getPriorityState = Priorities.find((p) =>
    //         item.activities_items.filter((c) => c.priority === p.id)
    //       )?.name;
    //       const channelCLusterId = item.activities_items.find(
    //         (c) => c.channelClusters[0]
    //       )?.channelClusters[0]._id;

    //       const getPos = item.pos.find(
    //         (c) => c.channelCluster === channelCLusterId
    //       );

    //       return (
    //         <>
    //           {item.activities_items
    //             .filter((c) => c.time < 5)
    //             .map((data, index) => {
    //               return (
    //                 <SlideDownToUp key={`card-item-${data._id}`}>
    //                   <ActivityDbItemTask
    //                     activityItem={data}
    //                     Activitie={data.activitie}
    //                     status={`${getPriorityState}`}
    //                     step={index}
    //                     pos={getPos!}
    //                     // title={item.title}
    //                     key={index}
    //                   />
    //                 </SlideDownToUp>
    //               );
    //             })}
    //         </>
    //       );
    //     })}
    //   </div>
    // </DelayShowAnimation>
    // <DelayShowAnimation>
    //   <div className="flex flex-col mb-[200px]  ">
    //     {(shopData?.activities || [])
    //       .filter((c) => c.time < 5)
    //       .map((item, key) => {
    //         // console.log(item);
    //         const getPriorityState = Priorities.find(
    //           (p) => item.priority === p.id
    //         )?.name;

    //         return (
    //           <>
    //             <SlideDownToUp key={`card-item-${item._id}`}>
    //               <ActivityDbItemTask
    //                 activityItem={item}
    //                 activitie={item.activityItem}
    //                 status={`${getPriorityState}`}
    //                 step={key}
    //                 pos={shopData?.shopData!}
    //               />
    //             </SlideDownToUp>

    //             {/* <div>vdgd</div> */}
    //           </>
    //         );
    //       })}
    //   </div>
    // </DelayShowAnimation>

    <DelayShowAnimation>
      <div className="flex flex-col mb-[200px]  ">
        {(dailyRoadItem || []).map((item, key) => {
          // console.log(item);

          return (
            // <>

            //     <SlideDownToUp key={`card-item-${item._id}`}>
            //       <ActivityDbItem
            //         activityItem={item}
            //         activitie={item.activityItem}
            //         status={`${getPriorityState}`}
            //         step={key}
            //         pos={shopData?.shopData!}
            //         // title={item.title}
            //         key={key}
            //       />
            //     </SlideDownToUp>

            //     {/* <div>vdgd</div> */}
            // </>
            <>
              {item.taskIds
                .filter((c) => c.activityItem.time > 3)
                .map((task, index) => {
                  const getPriorityState = Priorities.find(
                    (p) => task.priority === p.id
                  )?.name;
                  // console.log(task.activityItem);
                  return (
                    <SlideDownToUp key={`card-item-activity-task-${item._id}`}>
                      <ActivityDbItemTask
                        activityItem={task.activityItem}
                        activitie={task}
                        status={`${getPriorityState}`}
                        step={index}
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

export default DailyTasks;
