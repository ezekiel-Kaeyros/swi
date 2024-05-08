import React, { useState } from 'react';
import closeIconIcon from '../../../../../../../public/icons/closeIcon.png';
import { Button } from '@/app/common/components/button/Button';
import GenericPopupHeader from '@/app/common/components/employee-common/GenericPopupHeader';
import CustomModal from '@/app/common/components/modal/Modal';
import { useSettings } from '@/app/hooks/useSettings';
import SearchAndFilterPosForRTT from '@/app/common/components/realtime-tracking/new/SearchAndFilterPosForRTT';
import SearchForm from '@/app/common/components/realtime-tracking/new/searchbar';
import ChannelClusters from '../../../activity-flow-builder/ChannelClusters';
import { TradeChannelSvgIcon, CategorizationNoFillSvgIcon } from '@/app/common/components/svgs/SvgsIcons';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const ClusterSearchModal: React.FC<Props> = ({ onClose, isOpen }) => {
  const { channelClusters, dispatch } = useSettings();

  return (
    <CustomModal size="4xl" isOpen={isOpen} onClose={onClose}>
      <div>
        <SearchForm width="w-[100%]" paddingY="py-5" />
        <div className="flex flex-col justify-between gap-3">
          <div className="">
            <ChannelClusters channelClusters={channelClusters} />
          </div>
        </div>

        {/* Trade Channels */}
        <div>
          <div className='flex place-items-center'>
              <div className='text-[25px] mt-3 font-bold flex flex-row h-6'>
                <TradeChannelSvgIcon width='50px' height='20px' color='#fff' />
                Trade Channel
              </div>
          </div>
          <div className='gap-[10px] my-[20px]'>
            <div className='my-[10px]'>Cash & Carry</div>
            <div className='my-[10px]'>GT wholesalers</div>
            <div className='my-[10px]'>Supermarket (MT grocery)</div>
            <div className='my-[10px]'>Mini-Market</div>
            <div className='my-[10px]'>Health & Wellness</div>
          </div>
        </div>

        {/* Category Channels */}
        <div>
          <div className='flex place-items-center'>
              <div className='text-[25px] mt-3 font-bold flex flex-row h-6'>
                <CategorizationNoFillSvgIcon width='50px' height='20px' color='#fff' />
                Trade Channel
              </div>
          </div>
          <div className='gap-[10px] my-[20px] flex flex-row'>
            <div className='my-[10px] text-[12px] gap-2 mt-3 flex flex-row h-6'>
              <div className='p-1.5 flex justify-center text-center rounded bg-[grey]'>
                <CategorizationNoFillSvgIcon width='20px' height='20px' color='#fff'/>
              </div>
              Category A
            </div>
            <div className='my-[10px] text-[12px] gap-2 mt-3 flex flex-row h-6'>
              <div className='p-1.5 flex justify-center text-center rounded bg-[grey]'>
                <CategorizationNoFillSvgIcon width='20px' height='20px' color='#fff'/>
              </div>
              Category B
            </div>
            <div className='my-[10px] text-[12px] gap-2 mt-3 flex flex-row h-6'>
              <div className='p-1.5 flex justify-center text-center rounded bg-[grey]'>
                <CategorizationNoFillSvgIcon width='20px' height='20px' color='#fff'/>
              </div>
              Category C
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-9 ">
          <div>
            <Button
              type="button"
              className="rounded-xl transition-colors h-[48px] duration-300 bg-transparent hover:bg-bgColorDark w-[167px] flex justify-center font-bold"
              onClick={onClose} // Close the modal when "Keep Editing" button is clicked
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              className={`rounded-xl bg-blue-600 h-[48px] w-[167px] flex justify-center font-bold `}
              onClick={onClose} // Close the modal when "Cancel Editing" button is clicked
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ClusterSearchModal;
