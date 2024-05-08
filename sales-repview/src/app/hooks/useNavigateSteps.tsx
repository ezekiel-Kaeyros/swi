
'use client';
import React from 'react'
import { useClientFormStep } from './useClientFormStep';
import { activateStep, makeStepDone, toggleShowAgentCreationModal, toggleShowForm } from '@/redux/features/agent-creation';
import useGetStepObject from './useGetStepObject';
import { AgentFormValueType } from '@/redux/features/types';

const useNavigateSteps = () => {

    const { dispatch } = useClientFormStep (); 

    const { thirdStepObj }: {
        thirdStepObj: any, currentUser: AgentFormValueType
    } = useGetStepObject (); 

    const goBackToThirdFormPart = () => {

        // turning third step to inactive
        dispatch(activateStep({
            tabData: true, 
            id: thirdStepObj?.id, 
        })); 
    
        // turning second step to undone
        dispatch(makeStepDone({
            tabData: false, 
            id: thirdStepObj?.id, 
        }));
    
        // showing second step form and hidding all other forms
        dispatch(toggleShowForm({
            tabData: thirdStepObj, 
            id: thirdStepObj?.id, 
        })); 
    
        dispatch(toggleShowAgentCreationModal({
          toggleValue: true, 
        }));
    
    }

    return {
        goBackToThirdFormPart
    }
}

export default useNavigateSteps

