
'use client';
import React from 'react'
import { useClientFormStep } from './useClientFormStep';
import { toggleOptionsContainer, toggleShowAgentCreationModal, toggleShowUploadCSVModal } from '@/redux/features/agent-creation';

const useTogglePopup = (booleanVal: boolean) => {

    const { dispatch } = useClientFormStep ()

    const toggleAgentCreationModal = () => {
        dispatch(toggleShowAgentCreationModal({
            toggleValue: booleanVal, 
        }));
    }

    const toggleOptionContainer = () => {
        dispatch(toggleOptionsContainer({
            toggleValue: booleanVal, 
        }))
    }

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

