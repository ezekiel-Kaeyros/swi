import Image from 'next/image';
import React from 'react';

import InfoIcon from '../../../../../../../public/icons/InfoIcon.svg';
import EditIcon from '../../../../../../../public/icons/editIcon.svg';
import { ActivityCardsProps } from './activityCard';
import AnimateClick from '../../../animate-click/AnimateClick';

const ActivityCard: React.FC<ActivityCardsProps> = ({
  color,
  description,
  id,
  name,
  duration,
  tradeChannel,
  priority,
}) => {
  return (
    <div className="relative bg-cardDark p-4 rounded-lg">
      <div className={` bg-[${color}] h-full w-8 top-0 absolute left-0`} />

      <div className="flex justify-between">
        <h1 className="font-bold text-xl">{name}</h1>
        <div className="flex items-center space-x-3">
          <div>
            <AnimateClick>
              <Image src={InfoIcon} alt="Info icon" />
            </AnimateClick>
          </div>
          <div>
            <AnimateClick>
              <Image src={EditIcon} alt="Edit icon" />
            </AnimateClick>
          </div>
        </div>
      </div>

      <p className="my-4">{description}</p>

      <div className="flex justify-between">
        <div className="">
          <h1 className="text-slate-300 mb-2">Trade channel</h1>
          <div className="bg-[#CCEAF7] rounded-full py-1 px-2 text-sm text-buttonPrimary">
            {tradeChannel}
          </div>
        </div>

        <div className="">
          <h1 className="text-slate-300 mb-2">Priority</h1>
          <div className="bg-[#FFCCD5] rounded-full py-1 px-2 text-sm text-[#C9184A]">
            {priority} Medium
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-slate-300 mb-2">Total time</h1>
          <h1 className="font-bold">{duration}</h1>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
