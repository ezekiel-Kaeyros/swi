
"use client";
import React from 'react'
import AgentForm from './agents-form/AgentForm.'
import FormSteps from './form-steps/FormSteps';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import { IFormStep, IFormSteps } from '@/redux/features/types';

const AgentModal = () => {

  const { 
    showAgentCreationModal, 
    showCancelConfirmation, 
  }: { 
    showAgentCreationModal: boolean, 
    showCancelConfirmation: boolean
  } = useClientFormStep (); 

  return (

    <div  className={`w-[902px] h-[448px] bg-newPrimaryDark text-white ${ showCancelConfirmation ? "z-0" : "z-10" }  rounded-2xl p-[1rem]`}>
        <div className='p-[1rem]'>
            <h1 className='font-bold text-[28px] '>Create Agent</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 px-[1rem]">
            <FormSteps />
            <div className="col-span-2">
              <AgentForm />
            </div>
        </div>
    </div>
  )
}

export default AgentModal