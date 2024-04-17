'use client';
import React, { useState } from 'react';
import AddIconGrey from '../../../../../../../public/icons/addIconGrey.svg';
import Image from 'next/image';
import AnimateClick from '../../../animate-click/AnimateClick';
import DynamicNestedAccordion from '../dynamic-nested-accordion/DynamicNestedAccordion';
import { ChannelClusterCardProps } from './channelClusterCard';
import CustomModal from '../../../modal/Modal';
import AddTradeChannelForm from '../../../forms/add-trade-channel-form/AddTradeChannelForm';

const ChannelClusterCard: React.FC<ChannelClusterCardProps> = ({
  id,
  content,
  name,
  color,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnClickAddTradeChannel = (id: number | string) => {
    setOpenModal(true);
    console.log('id', id);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="relative max-w-xs">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 232 59"
          fill="none"
        >
          <path
            d="M101.583 0.5H8C3.58172 0.5 0 4.08172 0 8.5V58.5H232V24.2083C232 19.7901 228.418 16.2083 224 16.2083H129.333C127.71 16.2083 126.126 15.7147 124.79 14.793L106.126 1.9153C104.79 0.993609 103.206 0.5 101.583 0.5Z"
            fill="#414C50"
          />
        </svg>

        <h1 className="absolute top-[45%] pb-2 left-6 font-bold text-xl">
          {name}
        </h1>

        <div
          style={{ backgroundColor: `${color?.hex}` }}
          className="absolute w-5 h-5 rounded-full top-[45%] pb-2 right-6 "
        />
      </div>

      {/*  */}
      <div className=" py-3 px-6 -mt-2 flex justify-center w-full items-center bg-bgColorDark rounded-lg">
        <div>
          <DynamicNestedAccordion clusterId={id} data={content} />
          <div className="w-full pt-4">
            <AnimateClick>
              <div
                onClick={() => handleOnClickAddTradeChannel(id)}
                className=" py-2 px-3 cursor-pointer flex justify-center space-x-2 items-center rounded-md w-full border border-dashed border-slate-400"
              >
                <Image src={AddIconGrey} alt="Add icon" />
                <h1>Add Trade channel</h1>
              </div>
            </AnimateClick>
          </div>
        </div>

        <CustomModal
          title="Create a trade channel"
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          classStyle="bg-cardDark  h-8/10 xl:h-[25vh] xl:max-w-[28rem] align-self-center"
        >
          <AddTradeChannelForm
            channelClusterId={id}
            handleCloseModal={handleCloseModal}
          />
        </CustomModal>
      </div>
    </div>
  );
};

export default ChannelClusterCard;
