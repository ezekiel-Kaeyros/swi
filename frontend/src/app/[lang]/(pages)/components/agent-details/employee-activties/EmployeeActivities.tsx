"use client"; 
import { useClientFormStep } from '@/app/hooks/useClientFormStep'
import React from 'react'

const EmployeeActivities = () => {
    const { detailPageNavigation } = useClientFormStep ()
  return (
    <div>
        {
            detailPageNavigation[1].label
        }
    </div>
  )
}

export default EmployeeActivities