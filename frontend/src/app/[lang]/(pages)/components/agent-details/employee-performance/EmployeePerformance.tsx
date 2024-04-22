"use client"; 
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import React from 'react'

const EmployeePerformance = () => {
    const { detailPageNavigation } = useClientFormStep (); 
    return (
        <div>
            {
                detailPageNavigation[2].label
            }
        </div>
    )
}

export default EmployeePerformance