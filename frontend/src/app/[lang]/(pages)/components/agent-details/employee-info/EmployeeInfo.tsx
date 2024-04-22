"use client"; 

import EmployeeCommonInfo from '@/app/common/components/employee-common/EmployeeCommonInfo';
import useGetStepObject from '@/app/hooks/useGetStepObject';
import { AgentFormValueType } from '@/redux/features/types';
import { departmentData, genderData, provincesData } from '@/services/selectFieldsData';
import { findElementInSelectList } from '@/utils/updateUserValue';
import React from 'react'

const EmployeeInfo = () => {

    const { thirdStepObj, currentUser }: {
        thirdStepObj: any, currentUser: AgentFormValueType
    } = useGetStepObject (); 

    const dataLeft = [ 
        { id: 1, label: "Sales Name", name: currentUser?.salesName}, 
        { id: 2, label: "Date of Birth", name: currentUser?.dateOfBirth}, 
        { id: 3, label: "Email Address", name: currentUser?.emailAddress}, 
        { id: 4, label: "Job Title", name: currentUser?.jobTitle}, 
        { id: 5, label: "Department", name: findElementInSelectList(departmentData, currentUser?.departement)?.extra  }, 
        { id: 6, label: "Gender", name: findElementInSelectList(genderData, currentUser?.gender)?.name }, 
    ]

    const dataRight = [
        { id: 1, label: "Country", name: currentUser?.country }, 
        { id: 2, label: "City", name: findElementInSelectList(provincesData, currentUser?.city)?.extra }, 
        { id: 3, label: "Province / State", name: findElementInSelectList(provincesData, currentUser?.region)?.name }, 
        { id: 4, label: "Reporting Manager", name: findElementInSelectList(departmentData, currentUser?.reportingManager)?.name }, 
        { id: 5, label: "Start Date", name: currentUser?.startDate }, 
    ]

    return (
        <EmployeeCommonInfo horizontalView={ true } dataLeft={ dataLeft } dataRight={ dataRight } />
    )

}

export default EmployeeInfo

