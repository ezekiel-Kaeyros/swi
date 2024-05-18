import { useState } from 'react';
import ActivityItem from './ActivityItem';
import { activities } from '@/core/utils/activities';
import Activitie from '@/core/models/Activitie';
import ActivitiesItem from '@/core/models/ActivitiItem';
import PointOfSales from '@/core/models/Pos';
import { convertMinutesToHoursAndMinutes } from '@/core/utils/utils';

const ActivityValue = ({ type = 'Low' }: { type: string }) => {
  const [status, setStatus] = useState(type);
  return (
    <>
      {status === 'Low' ? (
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="bg-[#162E66]/70 whitespace-nowrap py-2   text-[#5F8EFF] cursor-pointer text-[12px] flex text-center items-center justify-center   gap-[4px] w-[94px] h-[20px]  rounded-[4px]">
            <span>Low</span>
          </span>
        </div>
      ) : status === 'Medium' ? (
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="bg-[#05522B]/70 whitespace-nowrap py-3   text-[#6DE2A6] cursor-pointer text-[12px] flex text-center items-center justify-center   gap-[4px] w-[67px] h-[20px]  rounded-[4px]">
            <span>Medium</span>
          </span>
        </div>
      ) : (
        <span className="bg-[#600E18] whitespace-nowrap py-2   text-[#F57B8A] cursor-pointer text-[12px] flex text-center items-center justify-center   gap-[4px] w-[94px] h-[20px]  rounded-[4px]">
          High
        </span>
      )}
    </>
  );
};

const ActivitieStep = ({
  value,
  className,
}: {
  value: React.ReactNode | string;
  className?: string;
}) => {
  return (
    <div
      className={` ${className && className}
       flex text-center items-center justify-center text-white `}
    >
      {' '}
      {value ? value : '01'}
    </div>
  );
};

const ActivityDbItem = ({
  step,
  status,
  activityItem,
  Activitie,
  pos, // title={item.title}
}: {
  status: string;
  activityItem: ActivitiesItem;
  Activitie: Activitie;
  step: React.ReactNode | string;
  pos: PointOfSales;
  // title={item.title}
}) => {
  return (
    <div className="w-full flex gap-[10px] p-[10px] justify-between">
      <div className="flex justify-center  items-start ">
        <ActivitieStep
          className={`${
            activityItem.time > 5 ? 'bg-[#5F05D1] ' : 'bg-[#D99125]'
          } p-[10px] gap-[4px] w-[45px] h-[45px] rounded-[10px] `}
          value={step}
        />
      </div>
      <div className="flex w-full gap-8 justify-between my-auto border-b-bgColorDark border-b-2 pb-2">
        <div className="flex flex-col gap-2">
          <span className="text-[20px] font-bold leading-[20px] text-[#E8E8E8]">
            {Activitie.name}
          </span>
          <span className="text-[12px] font-normal leading-[20px] text-[#E8E8E8]">
            {pos.name} - {pos.city}
          </span>
          <span className="text-[14px] font-normal line-clamp-2 leading-[20px] text-[#E8E8E8]">
            {Activitie.description}
          </span>
        </div>

        <div className="flex-col space-y-2 text-center items-center justify-center  ">
          <span className="bg-bgColorDark/30 cursor-pointer  whitespace-nowrap py-3   text-[#5F8EFF]  text-[12px] flex text-center items-center justify-center   gap-[4px] w-[94px] h-[20px]  rounded-[4px]">
            {' '}
            {convertMinutesToHoursAndMinutes(activityItem.time)}
          </span>
          <ActivityValue type={status} />
        </div>
      </div>
    </div>
  );
};
export default ActivityDbItem;
