import Image from 'next/image';
import React from 'react';

const POSFilter = ({
  icon,
  stat,
  bgColor,
  col, 
  filterPosOnMap, 
  id
}: {
  icon: string;
  stat: string;
  bgColor?: string;
  col?: string;
  filterPosOnMap: (id: string) => void;
  id?: string
}) => {
  return (
    <div
    // key={ id }
    onClick={ () => filterPosOnMap (id as string) }
      style={{ backgroundColor: bgColor ? bgColor : '#2D383C' }}
      className="px-3 mr-2 h-8 py-5  rounded-full flex items-center cursor-pointer"
    >
      <Image src={icon} alt="Stat icon" className="w-5" />{' '}
      <div className={`ml-2 text-base text-[${col}]`}>{stat}</div>
    </div>
  );
};

export default POSFilter;
