"use client";

import { Button } from '@/app/common/components/button/Button';
import EmployeeCommonInfo from '@/app/common/components/employee-common/EmployeeCommonInfo';
import useGetStepObject from '@/app/hooks/useGetStepObject';
import useMakePostRequest from '@/app/hooks/useMakePostRequest';
import useNavigateSteps from '@/app/hooks/useNavigateSteps';
import useToggleModal from '@/app/hooks/useToggleModal';
import useTranformUserData from '@/app/hooks/useTranformUserData';
import { getUserCookies } from '@/cookies/cookies';
import { AgentFormValueMainTypeMain, AgentFormValueType, TokenType, UserDataInToken } from '@/redux/features/types';
import {  genderData, provincesData } from '@/services/selectFieldsData';
// departmentData,
import { BASE_URL } from '@/utils/constants';
import { findElementInSelectList } from '@/utils/updateUserValue';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'


// THIS IS THE COMPONENT WHERE WE WILL MAKE 
// THE REQUEST TO THE API TO SAVE/UPDATE THE USER

const AgentOverview = () => {

  const { currentUser, showAddButtonInPreview, currentSalesRepsAgent }: {
    showAddButtonInPreview: boolean, 
    currentUser: AgentFormValueType, 
    currentSalesRepsAgent: AgentFormValueMainTypeMain, 
  } = useGetStepObject (); 

  const { departmentData } = useTranformUserData ();
  // console.log(departmentData, "inside Modal Component") 

  // console.log("currentSalesRepsAgentcurrentSalesRepsAgent", currentSalesRepsAgent)

  // BREAK CURRENTUSER DATA PORTION 1 FOR BETTER REPRESENTATION
  const dataLeft = [ 
    { id: 1, label: "Sales Name", name: currentSalesRepsAgent?.salesName}, 
    { id: 2, label: "Date of Birth", name: currentSalesRepsAgent?.dateOfBirth}, 
    { id: 3, label: "Email Address", name: currentSalesRepsAgent?.emailAddress}, 
    { id: 4, label: "Job Title", name: currentSalesRepsAgent?.jobTitle}, 
    { id: 5, label: "Department", name: findElementInSelectList(departmentData, currentSalesRepsAgent?.departement)?.extra  }, 
    { id: 6, label: "Gender", name: findElementInSelectList(genderData, currentSalesRepsAgent?.gender)?.name }, 
  ]

  // BREAK CURRENTUSER DATA PORTION 2 FOR BETTER REPRESENTATION
  const dataRight = [
    { id: 1, label: "Country", name: currentSalesRepsAgent?.country }, 
    { id: 2, label: "City", name: findElementInSelectList(provincesData, currentSalesRepsAgent?.city)?.extra }, 
    { id: 3, label: "Province / State", name: findElementInSelectList(provincesData, currentSalesRepsAgent?.region)?.name }, 
    { id: 4, label: "Reporting Manager", name: findElementInSelectList(departmentData, currentSalesRepsAgent?.reportingManager)?.name }, 
    { id: 5, label: "Start Date", name: currentSalesRepsAgent?.startDate }, 
  ]

  // ACTION OF GOING BACK TO THIRD STEP WITH A CUSTOM HOOK
  const { goBackToThirdFormPart } = useNavigateSteps ()

  // NECESSARY REQUEST LOGIC WILL GO BELLOW
  // api request logic here...

  const [ shouldFetch, setShouldFetch ] = useState (false); 

  const gettoken = getUserCookies();
  console.log(gettoken, 'datagettoken');
  const decodeToken: TokenType = jwtDecode (gettoken)
  console.log(decodeToken, 'decodeToken');

  const finalData = {
    name: currentSalesRepsAgent?.salesName, 
    dateOfBirth: currentSalesRepsAgent?.dateOfBirth,
    gender: findElementInSelectList(genderData, currentSalesRepsAgent?.gender)?.name,
    contactDetails: currentSalesRepsAgent?.contactDetails, // BACKEND PEOPLE FORGOT TO PUT THIS FIELD IN THE DB
    country: currentSalesRepsAgent?.country,
    region: findElementInSelectList(provincesData, currentSalesRepsAgent?.region)?.name, 
    city: findElementInSelectList(provincesData, currentSalesRepsAgent?.city)?.extra,
    email: currentSalesRepsAgent?.emailAddress,
    streetAddress: currentSalesRepsAgent?.streetAddress, 
    job: currentSalesRepsAgent?.jobTitle, 
    departement: "OptionTypeString", 
    // reportingManager: findElementInSelectList(departmentData, currentSalesRepsAgent?.reportingManager)?.id, 
    reportingManager: [decodeToken?.user?.userId], 
    id_company: decodeToken?.user?.id_company, 
    startDate: currentSalesRepsAgent?.startDate, 
    password: currentUser?.password, 
  }

  console.log(finalData, "wait wait")
  // return

  // const { data, isError, isLoading } = useMakePostRequest (`${ BASE_URL }/salesrep`, finalData, shouldFetch)

  const handdleShould = () => {
    setShouldFetch (true)
  }

  const { hideAgentPreviewInfo, reset, openCanceModal } = useToggleModal (); 

  const makePostReques = async () => {
    try {
      const response = await fetch (`${ BASE_URL }/salesrep`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData), // body data type must match "Content-Type" header
      })
      const result =  await response.json()
      console.log("result,,,,,", result)
      executeAfterSaving ()
      return result
    } catch (error) {
      alert(`Something went wrong (${error})`)
    }
  }

  const executeAfterSaving = () => {
    setShouldFetch (false)
    hideAgentPreviewInfo (); 
    reset (); 
  }

  // RESET THE EVERYTHING
  // useEffect (() => {
  //   console.log("inside useeffect")
  //   if (shouldFetch === true) {
  //     console.log("after shouldFetch useeffect")
  //     setShouldFetch (false)
  //     hideAgentPreviewInfo (); 
  //     reset (); 
  //     console.log("here we are")
  //   }
  // }, [shouldFetch])

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
          <Button type='button' onClick={ makePostReques} className={`rounded-lg bg-stepsMarkerBlue w-[100px] flex justify-center`} >
          {/* handdleShould */}
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