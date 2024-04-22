"use client"; 

import React from 'react'
import closeIconIcon from "../../../../../../../public/icons/closeIcon.png"; 
import Image from 'next/image';
import { Button } from '@/app/common/components/button/Button';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import { toggleCancelCreation, toggleShowAgentCreationModal, toggleShowPreview } from '@/redux/features/agent-creation';
import GenericPopupHeader from '@/app/common/components/employee-common/GenericPopupHeader';
import useToggleModal from '@/app/hooks/useToggleModal';
// import useTogglePopup from '@/app/hooks/useTogglePopup';

const CancelingCreation = () => {

    // GETTING ACTION FROM HOOKS
    const { closeAgentCreationModal, closeCanceModal } = useToggleModal (); 

    return (
        <div className='flex flex-col justify-around absolute w-[480px] h-[236px] bg-newPrimaryDark text-white z-20 rounded-2xl p-[1rem]'>
            <div className='flex flex-col justify-between gap-3'>
                <GenericPopupHeader label={ "Canceling Creation" } closeCanceModal={ closeCanceModal } closeIconIcon={ closeIconIcon } />
                <div>
                    <p>
                        You have not yet finished creating an agent. The information will not be saved if you exit now
                    </p>
                </div>
            </div>
            <div className='flex justify-end gap-9 '>
                <div>
                    <Button type='button' className='rounded-sm bg-transparent w-[150px] flex justify-center font-bold' onClick={ closeCanceModal }>
                        Keep Editing
                    </Button>
                </div>
                <div>
                    <Button className={`rounded-lg bg-keepEditingBtnBg w-[150px] flex justify-center font-bold`} onClick={ closeAgentCreationModal }>
                        Cancel Editing
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CancelingCreation