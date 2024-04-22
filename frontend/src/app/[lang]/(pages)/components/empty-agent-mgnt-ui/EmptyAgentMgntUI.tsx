
"use client"; 

import React from 'react'; 
import emptyUIIcon from "../../../../../../public/icons/table/emptyUI.png"
import Image from 'next/image';
import useTogglePopup from '@/app/hooks/useTogglePopup'; 
import addAgentIcon from "../../../../../../public/icons/addAgent.png"
import importUserIcon from "../../../../../../public/icons/importUser.png"
import { toggleShowUploadCSVModal } from '@/redux/features/agent-creation';
import ButtonLine from '@/app/common/components/button/ButtonLine';
// import ButtonLine from '@/app/common/components/button/ButtonLine';

const EmptyAgentMgntUI = () => {

    const { toggleAgentCreationModal, dispatch } = useTogglePopup (true); 

    const displayUploadModal = () => {
        dispatch(toggleShowUploadCSVModal({
        toggleValue: true, 
        }))
    }

  return (
    <div className='flex justify-center items-center w-full h-[70vh]'> 
        <div className='flex flex-col gap-5 w-[50%]'>
            <div className='flex justify-center'>
                <Image src={ emptyUIIcon } width={ 40 } alt='emptyUIIcon' />
            </div>
            <div className='flex justify-center'>
                <h1 className='font-bold text-[30px] text-articulat text-center'>
                    No Agent Found
                </h1>
            </div>
            <div className='flex justify-center'>
                <p className='text-deemGray text-center w-[350px]'>
                    Get started by adding members to your team to maximize your sales efficiency.
                </p>
            </div>
            <ButtonLine 
                firstBtnImg={ addAgentIcon } firstBtnFunc={ toggleAgentCreationModal } 
                firstBtnLabel='Add sales agent' secondBtnImg={ importUserIcon }
                secondBtnLabel='Upload agents CSV' secondBtnFunc={ displayUploadModal }
                roundeStyle='rounded-3xl' fontSizeStyle='font-bold'
                wrapperStyle={ "flex flex-row justify-center gap-5" }
            />

        </div>
    </div>
  )
}

export default EmptyAgentMgntUI