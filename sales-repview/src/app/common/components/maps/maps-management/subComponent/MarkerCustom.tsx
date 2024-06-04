import React from 'react';
import DefaultPOSMarker from '../../../../../../../public/icons/marker.svg';
import Image from 'next/image';
import { CustomMarker } from '@/core/svg/SvgIcon';
const MarkerCustom = ({
  color,
  type,
}: {
  type: 'START' | 'END' | 'IDLE';
  color: string;
}) => {
  return (
    <div className="flex flex-col">
      {type === 'END' ? (
        <div className="gap-4 flex">
          <svg
            className="absolute -top-3 left-1 gap-3"
            width="21"
            height="40"
            viewBox="0 0 21 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="20" height="20" fill="#F24F63" />
            <rect x="5.5" y="5" width="10" height="10" fill="#242424" />
            <rect x="9.5" y="20" width="2" height="20" fill="#F24F63" />
          </svg>

          <div className="font-medium text-[12px] leading-[16px] absolute -top-3 left-7 flex items-center justify-center whitespace-nowrap gap-3 h-[20px] w-[67px] px-4 py-[8px] bg-newPrimaryDark">
            End point
          </div>
        </div>
      ) : type === 'START' ? (
        <div className="flex">
          <svg
            className="absolute -top-3 left-1 gap-3"
            width="21"
            height="40"
            viewBox="0 0 21 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z"
              fill="#6DE2A6"
            />
            <path
              d="M5.5 10C5.5 7.23858 7.73858 5 10.5 5C13.2614 5 15.5 7.23858 15.5 10C15.5 12.7614 13.2614 15 10.5 15C7.73858 15 5.5 12.7614 5.5 10Z"
              fill="#242424"
            />
            <rect x="9.5" y="20" width="2" height="30" fill="#6DE2A6" />
          </svg>

          <div className="font-medium text-[12px] leading-[16px] absolute -top-3 left-7 flex items-center justify-center whitespace-nowrap gap-3 h-[20px] w-[67px] px-4 py-[8px] bg-newPrimaryDark">
            Start point
          </div>
        </div>
      ) : (
        ''
      )}

      <CustomMarker className={'z-10'} fill={color} height={71} width={34} />
    </div>
  );
};
export default MarkerCustom;
