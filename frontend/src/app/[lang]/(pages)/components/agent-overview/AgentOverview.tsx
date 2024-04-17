"use client";

import { Button } from '@/app/common/components/button/Button';
import EmployeeCommonInfo from '@/app/common/components/employee-common/EmployeeCommonInfo';
import useGetStepObject from '@/app/hooks/useGetStepObject';
import useMakePostRequest from '@/app/hooks/useMakePostRequest';
import useNavigateSteps from '@/app/hooks/useNavigateSteps';
import { AgentFormValueMainTypeMain, AgentFormValueType } from '@/redux/features/types';
import { departmentData, genderData, provincesData } from '@/services/selectFieldsData';
import { BASE_URL } from '@/utils/constants';
import { findElementInSelectList } from '@/utils/updateUserValue';
import React, { useState } from 'react'


// THIS IS THE COMPONENT WHERE WE WILL MAKE 
// THE REQUEST TO THE API TO SAVE/UPDATE THE USER

const AgentOverview = () => {

  const { currentUser, showAddButtonInPreview, currentSalesRepsAgent }: {
    showAddButtonInPreview: boolean, 
    currentUser: AgentFormValueType, 
    currentSalesRepsAgent: AgentFormValueMainTypeMain, 
  } = useGetStepObject (); 

  // BREAK CURRENTUSER DATA PORTION 1 FOR BETTER REPRESENTATION
  const dataLeft = [ 
    { id: 1, label: "Sales Name", name: currentSalesRepsAgent?.name}, 
    { id: 2, label: "Date of Birth", name: currentSalesRepsAgent?.dateOfBirth}, 
    { id: 3, label: "Email Address", name: currentSalesRepsAgent?.email}, 
    { id: 4, label: "Job Title", name: currentSalesRepsAgent?.job}, 
    { id: 5, label: "Department", name: findElementInSelectList(departmentData, currentSalesRepsAgent?.departement)?.extra  }, 
    { id: 6, label: "Gender", name: findElementInSelectList(genderData, currentSalesRepsAgent?.gender)?.name }, 
  ]

  // BREAK CURRENTUSER DATA PORTION 2 FOR BETTER REPRESENTATION
  const dataRight = [
    { id: 1, label: "Country", name: currentSalesRepsAgent?.country }, 
    { id: 2, label: "City", name: findElementInSelectList(provincesData, currentUser?.city)?.extra }, 
    { id: 3, label: "Province / State", name: findElementInSelectList(provincesData, currentUser?.region)?.name }, 
    { id: 4, label: "Reporting Manager", name: findElementInSelectList(departmentData, currentUser?.reportingManager)?.name }, 
    { id: 5, label: "Start Date", name: currentUser?.startDate }, 
  ]

  // ACTION OF GOING BACK TO THIRD STEP WITH A CUSTOM HOOK
  const { goBackToThirdFormPart } = useNavigateSteps ()

  // NECESSARY REQUEST LOGIC WILL GO BELLOW
  // api request logic here...

  const [ shouldFetch, setShouldFetch ] = useState (false); 

  const { data, isError, isLoading } = useMakePostRequest (`${ BASE_URL }/salesrep`, currentSalesRepsAgent, shouldFetch)

  const handdleShould = () => {
    setShouldFetch (true)
  }

  return (
    <div className='flex flex-col justify-between px-[1rem] py-[1.5rem] w-[396px] h-[544px] bg-newPrimaryDark text-white rounded-lg z-20'>
      <div>
        <h1 className='text-[30px] font-bold'>Preview</h1>
      </div>
      <EmployeeCommonInfo horizontalView={ false } dataLeft={ dataLeft } dataRight={ dataRight } />
      <div className='flex justify-end gap-4'>
        <div>
          <Button type='button' className='rounded-sm bg-transparent w-[150px] flex justify-center' onClick={ goBackToThirdFormPart } >
              Edit
          </Button>
        </div>
        {/* {
          showAddButtonInPreview && 
        } */}
        <div>
          <Button type='button' onClick={ handdleShould } className={`rounded-lg bg-stepsMarkerBlue w-[100px] flex justify-center`} >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AgentOverview



// // BREAK CURRENTUSER DATA PORTION 1 FOR BETTER REPRESENTATION
// const dataLeft = [ 
//   { id: 1, label: "Sales Name", name: currentUser?.salesName}, 
//   { id: 2, label: "Date of Birth", name: currentUser?.dateOfBirth}, 
//   { id: 3, label: "Email Address", name: currentUser?.emailAddress}, 
//   { id: 4, label: "Job Title", name: currentUser?.jobTitle}, 
//   { id: 5, label: "Department", name: findElementInSelectList(departmentData, currentUser?.departement)?.extra  }, 
//   { id: 6, label: "Gender", name: findElementInSelectList(genderData, currentUser?.gender)?.name }, 
// ]

// // BREAK CURRENTUSER DATA PORTION 2 FOR BETTER REPRESENTATION
// const dataRight = [
//   { id: 1, label: "Country", name: currentUser?.country }, 
//   { id: 2, label: "City", name: findElementInSelectList(provincesData, currentUser?.city)?.extra }, 
//   { id: 3, label: "Province / State", name: findElementInSelectList(provincesData, currentUser?.region)?.name }, 
//   { id: 4, label: "Reporting Manager", name: findElementInSelectList(departmentData, currentUser?.reportingManager)?.name }, 
//   { id: 5, label: "Start Date", name: currentUser?.startDate }, 
// ]