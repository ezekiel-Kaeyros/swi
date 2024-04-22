
import React, { useState } from 'react'
import AgentModal from '../components/agents-creation/AgentModal'
import GenericModal from '../components/modal/GenericModal'
import { useClientFormStep } from '@/app/hooks/useClientFormStep'
import CancelingCreation from '../components/agents-creation/cancel-creation/CancelingCreation'
import TestPageodules from './modules/TestPageModules'

const TestPage = () => {
    
  return (
    <div className='font-articulat'>
      <TestPageodules />
    </div>
  )
}

export default TestPage