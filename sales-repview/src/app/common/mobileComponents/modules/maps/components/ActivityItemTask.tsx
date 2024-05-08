import { Checkbox } from '@nextui-org/react';
import { SalesRepActivities } from '../../../types/SalesRepActivities';
import React from 'react';

const ActivitieStep = ({
  value,
  className,
}: {
  value: React.ReactNode | string;
  className?: string;
}) => {
  return (
    <div
      className={` ${
        className && className
      } flex text-center items-center justify-center text-white `}
    >
      {' '}
      {value ? value : '01'}
    </div>
  );
};

const ActivityItemTask = ({
  description,
  status,
  step,
  title,
  displayRightSide,
}: SalesRepActivities) => {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <div className="w-full flex gap-[10px] p-[10px] justify-between">
      <div className="flex justify-center  items-start ">
        <ActivitieStep
          className="bg-[#D99125] text-[12px] p-[10px] w-[36px] h-[36px] rounded-[10px] gap-[4px] "
          value={step}
        />
      </div>
      <div className="flex w-full justify-between gap-8 my-auto border-b-bgColorDark border-b-2 pb-2">
        <div className="flex flex-col gap-2">
          <span className="text-[20px] font-bold leading-[20px] text-[#E8E8E8]">
            {title}
          </span>
          <span className="text-[14px] font-normal leading-[20px] text-[#E8E8E8]">
            {description}
          </span>
        </div>

        <div className="flex text-center items-center justify-center pr-[14px]">
          <Checkbox isSelected={isSelected} onValueChange={setIsSelected} />
        </div>
      </div>
    </div>
  );
};
export default ActivityItemTask;
