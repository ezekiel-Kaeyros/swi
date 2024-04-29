import React from 'react';
import { Filtertype } from '../types/filter';

function Filter({
  filter,
  isSelected,
  setFilter,
}: {
  filter: Filtertype[];
  isSelected: boolean;
  setFilter?: (value: any) => void;
}) {
  return (
    <div className="flex mb-4 w-full   overflow-x-scroll gap-4">
      {/* {filter.map((filterItem, index) => ( */}
      <span
        //   key={index}
        className={` rounded-lg flex w-fit cursor-pointer text-[12px]  gap-2  text-white  ${
          isSelected
            ? 'bg-[#5F05D1] text-white '
            : ' bg-bgColorDark text-gray-500 gap-2 hover:text-gray-700'
        }`}
        //   onClick={() => setFilter && setFilter(filterItem.id)}
      >
        <span className="font-medium text-[14px] leading-[14px]  text-[#E8E8E8]">
          {/* {filterItem.title} */}
          dov bonamoussadi
        </span>
      </span>
      <span
        //   key={index}
        className={` rounded-lg flex cursor-pointer text-[12px]  gap-2  text-white  ${
          isSelected
            ? 'bg-[#5F05D1] text-white '
            : ' bg-bgColorDark text-gray-500 gap-2 hover:text-gray-700'
        }`}
        //   onClick={() => setFilter && setFilter(filterItem.id)}
      >
        <span className="font-medium text-[14px] leading-[14px]  text-[#E8E8E8]">
          {/* {filterItem.title} */}
          dov bonamoussadi
        </span>
      </span>
      <span
        //   key={index}
        className={` rounded-lg flex cursor-pointer text-[12px]  gap-2  text-white  ${
          isSelected
            ? 'bg-[#5F05D1] text-white '
            : ' bg-bgColorDark text-gray-500 gap-2 hover:text-gray-700'
        }`}
        //   onClick={() => setFilter && setFilter(filterItem.id)}
      >
        <span className="font-medium text-[14px] leading-[14px]  text-[#E8E8E8]">
          {/* {filterItem.title} */}
          dov bonamoussadi
        </span>
      </span>
      <span
        //   key={index}
        className={` rounded-lg flex cursor-pointer text-[12px]  gap-2  text-white  ${
          isSelected
            ? 'bg-[#5F05D1] text-white '
            : ' bg-bgColorDark text-gray-500 gap-2 hover:text-gray-700'
        }`}
        //   onClick={() => setFilter && setFilter(filterItem.id)}
      >
        <span className="font-medium text-[14px] leading-[14px]  text-[#E8E8E8]">
          {/* {filterItem.title} */}
          dov bonamoussadi
        </span>
      </span>
      <span
        //   key={index}
        className={` rounded-lg flex cursor-pointer text-[12px]  gap-2  text-white  ${
          isSelected
            ? 'bg-[#5F05D1] text-white '
            : ' bg-bgColorDark text-gray-500 gap-2 hover:text-gray-700'
        }`}
        //   onClick={() => setFilter && setFilter(filterItem.id)}
      >
        <span className="font-medium text-[14px] leading-[14px]  text-[#E8E8E8]">
          {/* {filterItem.title} */}
          dov bonamoussadi
        </span>
      </span>
      <span
        //   key={index}
        className={` rounded-lg flex cursor-pointer text-[12px]  gap-2  text-white  ${
          isSelected
            ? 'bg-[#5F05D1] text-white '
            : ' bg-bgColorDark text-gray-500 gap-2 hover:text-gray-700'
        }`}
        //   onClick={() => setFilter && setFilter(filterItem.id)}
      >
        <span className="font-medium text-[14px] leading-[14px]  text-[#E8E8E8]">
          {/* {filterItem.title} */}
          dov bonamoussadi
        </span>
      </span>

      {/* ))} */}
    </div>
  );
}

export default Filter;
