import React from 'react';
import { Filtertype } from '../types/filter';

function Filter({
  filter,
  currentShopSeletected,
  selectCurrentShop,
}: {
  filter: Filtertype[];
  currentShopSeletected: number;
  selectCurrentShop?: (value: any) => void;
}) {
  return (
    <div className="flex mb-2   w-full gap-4 pb-4 px-4">
      {filter.map((filterItem, index) => (
        <span
          key={index}
          className={` rounded-[10px] flex w-fit p-[10px] cursor-pointer text-[12px]  gap-2  text-white  ${
            currentShopSeletected === index
              ? 'bg-[#5F05D1] text-white '
              : ' bg-bgColorDark text-gray-500 gap-2 hover:text-gray-700'
          }`}
          onClick={() => selectCurrentShop && selectCurrentShop(filterItem.id)}
        >
          <span className="font-medium text-[14px] leading-[14px]  text-[#E8E8E8]">
            {filterItem.title}
          </span>
        </span>
      ))}
    </div>
  );
}

export default Filter;
