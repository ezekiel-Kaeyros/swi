
import React, { useState } from 'react'
import AgentModal from '../components/agents-creation/AgentModal'
import GenericModal from '../components/modal/GenericModal'
import { useClientFormStep } from '@/app/hooks/useClientFormStep'
import CancelingCreation from '../components/agents-creation/cancel-creation/CancelingCreation'
import TestPageodules from '../testPage/modules/TestPageModules'
// import TestPageodules from './modules/TestPageodules'

const TestPage = () => {
    
  return (
    <div>
      <TestPageodules />
    </div>
  )
}

export default TestPage