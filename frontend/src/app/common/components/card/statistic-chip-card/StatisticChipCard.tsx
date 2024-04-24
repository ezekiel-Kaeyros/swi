import { truncateText } from '@/lib/utills';
import Image from 'next/image';
import React from 'react';

const StatisticChipCard = ({
  Icon,
  stat,
  bgColor,
  col,
}: {
  Icon: React.ComponentType<{ catCol: string | any }>;
  stat: string;
  bgColor?: string;
  col?: string;
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor ? bgColor : '#2D383C' }}
      className="px-3 mr-2 mt-2 h-8 py-1  rounded-xl flex items-center cursor-pointer"
    >
      <Icon catCol={col} />
      <div className={`ml-2 text-sm group relative`} style={{ color: col }}>
        {/* trimming the text when it is too long so it fits in the element normal size */}
        { truncateText(stat, 5)}
        {/* Adding Tooltip to view the full text of inside the element in case it was trunkated */}
        <div className='hidden absolute group-hover:flex group-hover:justify-center bg-newPrimaryDark p-4 whitespace-nowrap shadow-lg shadow-cyan-500/50 rounded-xl'>
          {stat}
        </div>
      </div>
    </div>
  );
};

export default StatisticChipCard;
