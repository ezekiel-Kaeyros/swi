'use client';
import Image from 'next/image';
import CustomModal from '../../modal/Modal';
import btnClose from '../../../../../../public/images/close.svg';
import { useState } from 'react';
const arrayShop = ['any', '1', '2', '3', '4', '5', '6'];
const FilterModal: React.FC<{ isOpen: boolean; onClose: any }> = ({
  isOpen,
  onClose,
}) => {
  const [shop, setShop] = useState('');
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between">
        <span className="font-bold text-3xl">Filters</span>
        <Image
          src={btnClose}
          alt=""
          onClick={() => {
            onClose();
          }}
          className="cursor-pointer"
        />
      </div>
      <p className="font-[500] text-base">Sort by</p>
      <div className="flex gap-2">
        <div className="px-4 py-3 rounded-xl bg-[#323232] text-[#E8E8E8] ">
          Route name
        </div>
        <div className="px-4 py-3 rounded-xl bg-[#323232] text-[#E8E8E8]">
          Town
        </div>
      </div>

      <p className="font-[500] text-base">Sort by</p>
      <div className="grid grid-cols-9 gap-2">
        {arrayShop.map((item, index) => (
          <div
            key={index}
            className={`${
              shop == item
                ? 'bg-white text-black'
                : 'bg-[#323232] text-[#E8E8E8]'
            } rounded-full text-center p-2 cursor-pointer`}
            onClick={() => {
              if (shop == item) {
                setShop('');
              } else {
                setShop(item);
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <p className="font-[500] text-base">Number of shops</p>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-[#323232] text-[#E8E8E8] px-5 py-5 rounded-xl">
          <p className="font-[500]">Min price</p>
          <p className="text-sm">10,000 FCFA</p>
        </div>
        <div className="bg-[#323232] text-[#E8E8E8] px-5 py-5 rounded-xl">
          <p className="font-[500]">Max price</p>
          <p className="text-sm">10,000 FCFA</p>
        </div>
      </div>

      <div className="flex justify-end items-center test-sm font-[500] gap-5">
        <div
          className="p-4 rounded-xl"
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </div>
        <div
          className="p-4 bg-[#3267E6] rounded-xl"
          onClick={() => {
            onClose();
          }}
        >
          Apply
        </div>
      </div>
    </CustomModal>
  );
};
export default FilterModal;
