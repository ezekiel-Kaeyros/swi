"use client"
import EmployeeOptionLine from '@/app/common/components/employee-common/EmployeeOptionLine'
import React from 'react'
import EmployeeInfo from './EmployeeInfo'

const EmployeeBasicInfo = () => {
  return (
    <>
        <EmployeeOptionLine />
        <div className="flex flex-col gap-5">
            <h1 className="text-[30px] font-articulat font-bold ">Employee Information</h1>
            <EmployeeInfo />
        </div>
    </>
  )
}

export default EmployeeBasicInfo