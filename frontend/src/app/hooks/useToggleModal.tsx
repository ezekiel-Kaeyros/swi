
'use client';
import React from 'react'
import { useClientFormStep } from './useClientFormStep';
import { resetAfterFormSubmission, toggleAgentDetailView, toggleCancelCreation, toggleShowAgentCreationModal, toggleShowDataFieldUI, toggleShowPreview, toggleShowUploadCSVModal } from '@/redux/features/agent-creation';

const useToggleModal = () => {

    const { dispatch, showDataFieldUI } = useClientFormStep ();

    const showTableWithData = () => {
        dispatch(toggleShowDataFieldUI({
            val: true, 
        }));
    }

    const reset = () => {
        dispatch(resetAfterFormSubmission({
            toggleValue: false, 
        }));
    }

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

    const hideAgentPreviewInfo = () => {
        dispatch(toggleShowPreview({
            toggleValue: false, 
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
        reset, 
        closeAgentCreationModal, 
        closeCanceModal, 
        showAgentPreviewInfo, 
        hideAgentPreviewInfo, 
        openCanceModal, 
        hideAgentDetails, 
        showAgentDetails, 
        showTableWithData, 
    }
}

export default useToggleModal

