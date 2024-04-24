'use client';
import React, { useState } from 'react';
import AddIconGrey from '../../../../../../../public/icons/addIconGrey.svg';
import Image from 'next/image';
import AnimateClick from '../../../animate-click/AnimateClick';
import DynamicNestedAccordion from '../dynamic-nested-accordion/DynamicNestedAccordion';
import { ChannelClusterCardProps } from './channelClusterCard';
import CustomModal from '../../../modal/Modal';
import AddTradeChannelForm from '../../../forms/add-trade-channel-form/AddTradeChannelForm';
import useTogglePopup from '@/app/hooks/useTogglePopup';
import OptionContainer from '../../../employee-common/option-container/OptionContainer';
import AddChannelClusterForm from '../../../forms/add-channel-cluster/AddChannelClusterForm';
import useMakeActions from '@/app/hooks/useMakeActions';
import { BASE_URL } from '@/utils/constants';
// import editIconIcon from "../../../../../../../public/icons/editIcon.svg"
// import { useClientFormStep } from '@/app/hooks/useClientFormStep';
// import SpinnerV1 from '../../../loaders/Spinner';

const ChannelClusterCard: React.FC<ChannelClusterCardProps> = ({
  id,
  content,
  name,
  color, 
  isLoading, 
  // isValidating, 
}) => {
  const [ openModal, setOpenModal ] = useState<boolean>(false);
  const [ shouldUpdate, setShouldUpdate ] = useState<boolean>(false); 
  const [ titleDescribed, settitleDescribed ] = useState<string>("Create a trade channel");
  
  // DELETE ACTION
  const { makeDeleteAction } = useMakeActions ()

  // SHOW FOR FOR ADDING CHANNEL CLUSTER
  const handleOnClickAddTradeChannel = (id: number | string) => {
    setOpenModal(true);
    settitleDescribed ("Create a trade channel")
    setShouldUpdate (false)
    console.log('id', id);
  };

  // SHOW UI FOR UPDATING A TRADING CHANNEL
  const handleEditChannelCluster = () => {
    settitleDescribed ("Modify Channel Cluster")
    setOpenModal(true);
    setShouldUpdate (true)
  }

  // CLOSE MODAL
  const handleCloseModal = () => {
    setOpenModal(false); 
  };

  // DELETE METHOD TO EXECUTE TO REMOVE A CHANNEL CLUSTER
  const deleteChannelCluster = () => {
    let confirmAction = confirm ("Are you sure to execute this action?")
    if (confirmAction) {
      makeDeleteAction (`${ BASE_URL }/channelCluster/${ id}`)
    } else {
      console.log("hi"); 
    }
  }

  // HOOK TO SHOW LITTLE POPOVER FOR DELETE AND UPDATE OPTION
  const { toggleOptionContainer } = useTogglePopup (true)

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
          // style={{ backgroundColor: `${color?.hex}` }}
          style={{ backgroundColor: `${color}` }}
          className="absolute w-5 h-5 rounded-full top-[45%] pb-2 right-10 "
        />
        <div onClick={ toggleOptionContainer } className='absolute right-1 top-8 group'>
            {/* THREE DOT UI BUTTON BELOW */}
            <AnimateClick>
              <svg width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z" fill="#BABABA"/>
                  <path d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z" fill="#BABABA"/>
                  <path d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z" fill="#BABABA"/>
              </svg>
            </AnimateClick>
            {/* LITTLE POPOVER UI APPEAR ONLY WHEN HOVER ON THREE DOTS UI DESCRIBED ABOVE */}
            <div className='relative'>
              <div className='hidden group-hover:block z-10 relative ease-in duration-300'>
                <OptionContainer firstAction={ handleEditChannelCluster } secondAction={ deleteChannelCluster } />
              </div>
            </div>
        </div>
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
          title={ titleDescribed }
          isOpen={ openModal }
          onClose={() => {
            setOpenModal(false); 
            setShouldUpdate(false); 
          }}
          classStyle={`${ shouldUpdate ? "bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center" : "bg-cardDark  h-8/10 xl:h-[25vh] xl:max-w-[28rem] align-self-center" }`}
        >
          {/* CONDITIONALLY DSIPLAY WHICH INTERFACE BASED ON WHETHER UPDATE OR ADD ACTION */}
          {
            shouldUpdate ? 
              // YES UPDATE CHANNEL CLUSTER
              <AddChannelClusterForm 
                channelClusterIdForUpdate={id}
                handleCloseModal={handleCloseModal} 
                title={ " Channel Cluster"} 
                shouldUpdate={ shouldUpdate }
                existingData={ name }
              />
              :
              // NO, SHOW TRADE CHANNEL ADD FORM
              <AddTradeChannelForm
                channelClusterId={id}
                handleCloseModal={handleCloseModal}
              />
          }
          
        </CustomModal>
      </div>
    </div>
  );
};

export default ChannelClusterCard;
