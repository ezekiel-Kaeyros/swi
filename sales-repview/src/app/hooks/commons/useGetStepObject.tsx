"use client"; 

import { AgentFormValueType, IFormStep, IFormSteps } from '@/redux/features/types';
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

const useGetStepObject = () => {

    const showAddButtonInPreview: boolean = useSelector(
        (state: RootState) => state.AgentCreationReducer.showAddButtonInPreview!
    );

    const currentUser: AgentFormValueType = useSelector(
        (state: RootState) => state.AgentCreationReducer.currentUser!
    );

    const formSteps: IFormSteps = useSelector(
        (state: RootState) => state.AgentCreationReducer.formStep!
    );

    const firstStepObj = formSteps.find((formStep: IFormStep) => {
        return formStep?.id === 1
    })

    const secondStepObj = formSteps.find((formStep: IFormStep) => {
        return formStep?.id === 2
    })

    const thirdStepObj = formSteps.find((formStep: IFormStep) => {
        return formStep?.id === 3
    })

  return {
    firstStepObj, 
    secondStepObj, 
    thirdStepObj, 
    currentUser, 
    showAddButtonInPreview, 
  };
}

export default useGetStepObject