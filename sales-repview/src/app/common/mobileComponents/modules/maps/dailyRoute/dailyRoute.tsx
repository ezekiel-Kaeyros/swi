import {
  TasksIconSvgIcon,
  TimerSvgIcon,
  VerctoreSvgIcon,
} from '@/core/svg/SvgIcon';
import DelayShowAnimation from '../../../components/delayShowAnimation';
import SlideDownToUp from '../../../components/slideDownToUp';
import CardViewItem from '../../home/Cards/CardViewItem';
import { CardItem } from '../../../types/cardItem';
import { useGetRoads, useManagePosInStore } from '@/app/hooks/API/usePos';
import { getUserCookies } from '@/core/cookies/cookies';
import Road from '@/core/models/Roads';
import { setRoards, setPosList } from '@/redux/features/roard-management-slice';
import { useState, useEffect, useCallback } from 'react';
import PointOfSales from '@/core/models/Pos';
import { tasks } from '@/core/utils/tasks';
import Link from 'next/link';
import RoadsItem from '@/core/models/RoadsItem';
import { convertMinutesToHoursAndMinutes } from '@/core/utils/utils';

const CardRoadItem = ({
  description,
  title,
  tasksLenght,
  estimateTime,
  id,
}: {
  description: string;
  title: string;
  estimateTime: string;
  tasksLenght: number;
  id: string;
}) => {
  return (
    <Link href={'/maps/' + id} className=" cursor-pointer">
      <div className="w-full  flex h-[140px] border-2 border-bgColorDark bg-[#242424] gap-8 rounded-[12px] my-4">
        <div className="w-full p-4 gap-2 px-[16px] pb-[16px] pt-[16px] flex-col flex ">
          <span className="font-semibold text-[20px] leading-[28px] font-articulat text-[#E8E8E8]">
            {' '}
            {title}
          </span>
          <span className="font-normal line-clamp-2 text-[14px] leading-[20px] font-articulat text-[#E8E8E8]">
            {' '}
            {description}
          </span>
          <div className="flex gap-3 ">
            <div className="w-fit h-fit flex gap-[4px] items-center justify-center  py-[4px] px-[4px] rounded-[4px]  bg-[#162E66]">
              <TimerSvgIcon />
              <span className=" text-[12px] leading-[16px] mt-0.5 font-medium items-center justify-center">
                EstimatedICon: {estimateTime}
              </span>
            </div>
            <div className="w-fit h-fit flex gap-[4px] items-center justify-center  py-[4px] px-[4px] rounded-[4px]  bg-[#662314]">
              <TasksIconSvgIcon />
              <span className=" text-[12px] leading-[16px] mt-0.5 font-medium items-center justify-center mr-2">
                Tasks: {tasksLenght}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[40hv] h-full   relative">
          <VerctoreSvgIcon className={`w-full h-full bg-cover object-cover`} />
          <div className="absolute gap-2 top-[47px] h-[56px] w-[56px] left-[32%] rounded-full bg-white place-content-center">
            <div className="text-black item-center flex justify-center text-[18px] leading-[24px] font-normal">
              {' '}
              02
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
const DailyRoute = () => {
  const { road, shopData, pos, dispatch } = useManagePosInStore();
  const user = getUserCookies();
  const roads = useGetRoads(user?._id || '');
  // const [myRoutes, setMyRoutes] = useState<Road[]>([]);
  // console.log(shopData);
  // console.log(myRoutes);

  /** this function save all the POS into the redux*/
  const setPostOfAllRoad = useCallback(function setPostOfAllRoad(
    roads: Road[]
  ) {
    if (roads !== undefined) {
      dispatch(setRoards(roads));
      // roads.map((road) => {
      //   // dispatch(setPosList([...road.pos]));
      // });
    }
  }, []);

  // useEffect(() => {
  //   if (roads.data?.data !== undefined) {
  //     setMyRoutes(roads.data?.data);

  //     /** saving Post int redux to use it into Maps  */
  //     setPostOfAllRoad(roads.data?.data);
  //     // console.log(road);
  //   }

  //   return () => {};
  // }, [roads, setPostOfAllRoad]);

  return (
    <DelayShowAnimation>
      <div className="py-[2px]">
        {(roads.data?.data || []).map((roadItem: Road, key) => {
          const posList: string[] = [];
          let taskLenght: number = 0;
          // const getEstimateTime = convertMinutesToHoursAndMinutes(
          //   new Date(roadItem.execution_date).getMinutes()
          // );
          console.log(new Date(roadItem.execution_date).getDate());
          console.log(roadItem.execution_date);
          /** get the list of pos according to the desgn  */
          roadItem.roadItems.map((posItem: RoadsItem) => {
            posList.push(posItem.posId.name + ' ');
            taskLenght = taskLenght + posItem.taskIds.length;
          });

          return (
            <SlideDownToUp key={`card-item-daily-route-${key}`}>
              <CardRoadItem
                id={roadItem._id}
                estimateTime={'4h'}
                tasksLenght={taskLenght}
                description={posList.toString()}
                title={roadItem.name}
              />
            </SlideDownToUp>
          );
        })}
      </div>
    </DelayShowAnimation>
  );
};

export default DailyRoute;
