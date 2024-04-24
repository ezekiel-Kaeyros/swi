
'use client';
import React from 'react'
import { useClientFormStep } from './useClientFormStep';
import { toggleOptionsContainer, toggleShowAgentCreationModal, toggleShowUploadCSVModal } from '@/redux/features/agent-creation';

const useTogglePopup = (booleanVal: boolean) => {

    const { dispatch } = useClientFormStep ()

    // ACTION TO SHOW MODAL FOR AGENT CREATION
    const toggleAgentCreationModal = () => {
        dispatch(toggleShowAgentCreationModal({
            toggleValue: booleanVal, 
        }));
    }

    // ACTION TO SHOW LITTLE POPOVER WHERE YOU CAN DELETE OR UPDATE
    const toggleOptionContainer = () => {
        dispatch(toggleOptionsContainer({
            toggleValue: booleanVal, 
        }))
    }

    // ACTION TO DISPLAY THE UPLOAD FILE MODAL
    const displayUploadModal = () => {
        dispatch(toggleShowUploadCSVModal({
          toggleValue: true, 
        }))
    }

    return {
        toggleAgentCreationModal, 
        toggleOptionContainer, 
        displayUploadModal, 
        dispatch, 
    }
}

export default useTogglePopup

