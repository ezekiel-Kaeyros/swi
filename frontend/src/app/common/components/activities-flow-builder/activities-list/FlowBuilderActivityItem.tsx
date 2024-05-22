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
  data: { name, frequency, duration, priority, category, description, channelCluster, tradeChannel, ...data }, cClusterToDisplay,
}: {
  data: IActivityNew; 
  cClusterToDisplay?: []
}) {

  const dataToUpdate = {
    name, frequency, duration, time: duration, priority, category, description, channelCluster, tradeChannel
  }

  // console.log("cClusterToDisplay", cClusterToDisplay)

  const extractOnlyChannelCluster = cClusterToDisplay?.map((cc: any) => {
    return cc?.channelClusters
  }).flat ()

  // console.log(extractOnlyChannelCluster, "extractOnlyChannelCluster")

  const finalChannelClusterArray = extractOnlyChannelCluster?.filter((obj, index, self) => {
    return self.findIndex((o: any) => o._id === obj._id) === index;
  });

  // console.log(finalChannelClusterArray, "finalChannelClusterArray")

  const { priorities, locaChannelClusters, locaTradeChannels } = useSettings(); 

  const prioritiesName = priorities.find((prio: any) => {
      return prio.id === priority
  })

  // console.log(prioritiesName, "wwwwwwwwww", channelCluster, tradeChannel)

  const channelCNameForDisplay = locaChannelClusters?.find((findIt: any) => {
    return findIt.id === channelCluster
  })

  // console.log(channelCNameForDisplay, "channelCNameForDisplaywwwwwww",)

  // const tradeChannelNameForDisplay = locaTradeChannels?.find((findIt: any) => {
  //   return findIt.id === tradeChannel
  // })

  const [ shouldUpdateActivity, setShouldUpdateActivity ] = useState (false); 

  const editActivity = () => {
    setShouldUpdateActivity ( true )
    setOpenModal (true)
  }

  const [openModal, setOpenModal] = useState<boolean>(false); 
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // console.log(tradeChannelNameForDisplay, "tradeChannelNameForDisplaywwwwwww",)
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
              <EditSvgIcon height="38" width="38" color="none" />
            </div>
            <DetailsSvgIcon height="20" width="20" color="none" />
          </div>
        </div>
        <span className="text-[14px] leading-[20px] line-clamp-2  font-articulat font-normal text-deemGray">
          {' '}
          {description}
        </span>
        <div className="flex justify-between gap-5 h-[20px]">
          <div className="flex gap-[8px]">
            <div className="flex gap-1 items-center justify-center">
              <ClockSvgIcon height="12" width="12" color="none" />
              <span className="text-[14px] leading-[20px]  font-articulat font-semibold text-deemGray">
                {`${duration >= 0 ? duration + 'minute' : duration + 'minutes'}`}
              </span>
            </div>
            <div className="flex gap-1 item-center justify-center">
              <span className="flex my-auto">
                <RepeatSvgIcon height="12" width="12" color="none"/>
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
        <div className='grid grid-cols-[repeat(auto-fill,minmax(50px,170px))] gap-2'>
        {/* grid grid-cols-[repeat(auto-fill,minmax(50px,170px))] gap-2 */}
        {/* mt-2 flex flex-wrap gap-2 w-full */}
          {
            finalChannelClusterArray && finalChannelClusterArray?.length > 0 ? 
            finalChannelClusterArray.map ((cmap: any) => {
                return (
                    <div key={cmap?._id} style={{
                      backgroundColor: cmap?.color as string
                      // backgroundColor: `"${cmap?.channelClusters[0]?.color as string}"`
                    }} className='rounded-xl w-[100%] p-1 whitespace-nowrap flex justify-center'>
                      {
                        cmap?.name
                      }
                    </div>
                )
              })
              : 
              ""
          }
        </div>
      </div>
      <CustomModal
          title={shouldUpdateActivity ? "Update Activity" : "Create Activity"}
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
      >
        <AddActivityForm handleCloseModal={ handleCloseModal } shouldUpdate={ shouldUpdateActivity } dataToUpdate={ dataToUpdate } id={data.id as string}/>
      </CustomModal>
      
    </>
  );
}

export default FlowBuilderActivityItem;
