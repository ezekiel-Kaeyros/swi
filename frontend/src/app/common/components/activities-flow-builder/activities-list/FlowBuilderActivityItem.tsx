import React, { useState } from 'react';
import {
  ActivityFlowBuilderListProps,
  FlowBuilderActivityList,
} from './ActivityFlowBuilderList';
import { FlowBuilderActivityType } from '../../forms/activities-builder-forms/activity-detail-pages /addActivityForm';
import { ClockSvgIcon, DetailsSvgIcon, EditSvgIcon, RepeatSvgIcon } from '../../svgs/SvgsIcons';
import { IActivity, IActivityNew, IChannelCluster } from '@/redux/features/types';
import { useSettings } from '@/app/hooks/useSettings';
import AddActivityForm from '../../forms/activities-builder-forms/add-activity-form/AddActivityForm';
import CustomModal from '../../modal/Modal';



const ActivityStatus = ({ type }: { type: string }) => {

  console.log(type, "typeFFFFF")
  return (
    <div
      className={`h-[15px] items-center flex text-[14px]  gap-[4px] border-1.5 text-white rounded-[4px]  px-2 py-3 ${
        type === 'High'
          ? 'border-[#600E18] bg-[#8F1524]'
          : type === 'Low'
            ? 'border-[#295daa] bg-[#227fd6]'
            : 'border-[#662314] bg-[#CC4629]'
      }`}
    >
      {/* {type === 'high' ? 'High' : type === 'low' ? 'Low' : 'Medium'} */}
      { type }
    </div>
  );
};

function FlowBuilderActivityItem({
  data: { name, frequency, duration, priority, category, description, channelCluster, tradeChannel, ...data },
}: {
  data: IActivityNew;
}) {

  const dataToUpdate = {
    name, frequency, duration, time: duration, priority, category, description, channelCluster, tradeChannel
  }

  const { priorities, locaChannelClusters, locaTradeChannels } = useSettings(); 

  const prioritiesName = priorities.find((prio: any) => {
      return prio.id === priority
  })

  console.log(prioritiesName, "wwwwwwwwww", channelCluster, tradeChannel,)

  const channelCNameForDisplay = locaChannelClusters?.find((findIt: any) => {
    return findIt.id === channelCluster
  })

  console.log(channelCNameForDisplay, "channelCNameForDisplaywwwwwww",)

  const tradeChannelNameForDisplay = locaTradeChannels?.find((findIt: any) => {
    return findIt.id === tradeChannel
  })

  const [ shouldUpdateActivity, setShouldUpdateActivity ] = useState (false); 

  const editActivity = () => {
    setShouldUpdateActivity ( true )
    setOpenModal (true)
  }

  const [openModal, setOpenModal] = useState<boolean>(false); 
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  console.log(tradeChannelNameForDisplay, "tradeChannelNameForDisplaywwwwwww",)
  return (
    <>
      <div
        className="w-full cursor-pointer h-full rounded-[8px] p-[12px] gap-[13px] bg-bgColorDark flex flex-col"
        onClick={() => {}}
      >
        <div className="flex justify-between h-[28px] items-center  ">
          <span className="text-[18px] leading-[20px]  font-articulat font-medium line-clamp-1">
            {name}
          </span>
          <div className="justify-between items-center flex gap-[8px]">
            <div onClick={ () => editActivity () }>
              <EditSvgIcon />
            </div>
            <DetailsSvgIcon />
          </div>
        </div>
        <span className="text-[14px] leading-[20px] line-clamp-2  font-articulat font-normal text-deemGray">
          {' '}
          {description}
        </span>
        <div className="flex justify-between gap-5 h-[20px]">
          <div className="flex gap-[8px]">
            <div className="flex gap-1 items-center justify-center">
              <ClockSvgIcon />
              <span className="text-[14px] leading-[20px]  font-articulat font-semibold text-deemGray">
                {`${duration >= 0 ? duration + 'minute' : duration + 'minutes'}`}
              </span>
            </div>
            <div className="flex gap-1 item-center justify-center">
              <span className="flex my-auto">
                <RepeatSvgIcon />
              </span>
              <span className="text-[14px] leading-[20px]  font-articulat font-semibold text-deemGray">
                {`${
                  frequency >= 0 ? `${frequency} repetition` : `${frequency} repetitions`
                }`}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ActivityStatus type={prioritiesName?.name as string} />
          </div>
        </div>
      </div>
      <CustomModal
          title={shouldUpdateActivity ? "Update Activity" : "Create Activity"}
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
      >
          {/* <AddChannelClusterForm 
              channelClusterIdForUpdate={data.id}
              handleCloseModal={handleCloseModal} 
              title={ " Channel Cluster"} 
              shouldUpdate={shouldUpdateActivity} 
              existingData={ data.name }
          /> */}
          <AddActivityForm handleCloseModal={ handleCloseModal } shouldUpdate={ shouldUpdateActivity } dataToUpdate={ dataToUpdate }/>
      </CustomModal>
      
    </>
  );
}

export default FlowBuilderActivityItem;
