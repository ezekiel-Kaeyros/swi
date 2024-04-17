
'use client';
import React from 'react'
import { useClientFormStep } from './useClientFormStep';
import { toggleAgentDetailView, toggleCancelCreation, toggleShowAgentCreationModal, toggleShowPreview, toggleShowUploadCSVModal } from '@/redux/features/agent-creation';

const useToggleModal = () => {

    const { dispatch } = useClientFormStep ()

    const closeAgentCreationModal = () => {

        // WHEN YOU CLOSING THE AGENT FORM CLOSE THE AGEND DETAILS PANE
        hideAgentDetails (); 
        
        dispatch(toggleShowPreview({
            toggleValue: false, 
        }));
        dispatch(toggleCancelCreation({
            toggleValue: false, 
        }));
        dispatch(toggleShowAgentCreationModal({
            toggleValue: false, 
        }));
    }

    const closeCanceModal = () => {
        dispatch(toggleCancelCreation({
            toggleValue: false, 
        }));
        dispatch(toggleShowAgentCreationModal({
            toggleValue: true, 
        }));
    }

    // FUNCTION TO SHOW PREVIEW AFTER FILLING USER INFO SUCCESSFULY
    const showAgentPreviewInfo = () => {
        dispatch(toggleShowPreview({
            toggleValue: true, 
        }));
    }

    // FUNCTION TO SHOW CANCEL MODAL
    const openCanceModal = () => {
        dispatch(toggleCancelCreation({
            toggleValue: true, 
        }));
    }

    const hideAgentDetails = () => {
        dispatch(toggleAgentDetailView ({
          toggleValue: false
        }))
    }

    const showAgentDetails = () => {
        dispatch(toggleAgentDetailView ({
          toggleValue: true
        }))
    }

    return {
        closeAgentCreationModal, 
        closeCanceModal, 
        showAgentPreviewInfo, 
        openCanceModal, 
        hideAgentDetails, 
        showAgentDetails, 
    }
}

export default useToggleModal

