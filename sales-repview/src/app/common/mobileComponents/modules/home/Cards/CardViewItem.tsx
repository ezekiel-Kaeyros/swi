import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CardItem } from '../../../types/cardItem';
const LeftIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.215 2.965L10.25 6L7.215 9.035"
        stroke="#BABABA"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.75 6H10.165"
        stroke="#BABABA"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
function CardViewItem({ description, icon, link, title }: CardItem) {
  return (
    <div className="w-[100%] flex h-[144px] border-2 border-bgColorDark bg-secondaryDark/50 gap-8 rounded-[12px] my-4">
      <div className="w-[70%] gap-2  px-[16px] pb-[16px] pt-[16px] flex-col flex ">
        <span className="font-semibold text-[20px] leading-[28px] font-articulat text-[#E8E8E8]">
          {' '}
          {title}
        </span>
        <span className="font-normal text-[14px] leading-[20px] font-articulat text-[#E8E8E8]">
          {' '}
          Visit your routes and start your journey now
        </span>
        <Link
          href={link.href}
          className="flex items-center text-[12px] justify-center  w-fit gap-2 cursor-pointer hover:bg-newPrimaryDark hover:rounded-sm"
        >
          <span> {link.name} </span>
          <LeftIcon />
        </Link>
      </div>
      <div className="w-[30%] h-[100%]  ">
        <Image
          className={`w-full h-full bg-cover object-cover`}
          src={icon}
          alt="icon"
        />
      </div>
    </div>
  );
}

export default CardViewItem;
