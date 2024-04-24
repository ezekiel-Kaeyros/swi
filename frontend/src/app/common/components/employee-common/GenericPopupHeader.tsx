'use client';
import Image, { StaticImageData } from 'next/image';
import React, { MouseEventHandler } from 'react';

type GenericPopupHeaderType = {
  textSize?: string;
  label: string;
  closeCanceModal: MouseEventHandler<HTMLImageElement>;
  closeIconIcon: StaticImageData | string;
};

const GenericPopupHeader: React.FC<GenericPopupHeaderType> = ({
  textSize,
  label,
  closeCanceModal,
  closeIconIcon,
}) => {
  return (
    <div className="grid grid-cols-[repeat(2,1fr)] ">
      <div className="flex flex-row justify-start items-center">
        <h1
          className={`text-[${
            textSize ? textSize : '25px'
          }] font-bold leading-[36px] `}
        >
          {label}
        </h1>
      </div>
      <div className="flex flex-row justify-end items-center">
        <Image
          className="cursor-pointer"
          onClick={closeCanceModal}
          src={closeIconIcon}
          width={30}
          alt=""
        />
      </div>
    </div>
  );
};

export default GenericPopupHeader;
