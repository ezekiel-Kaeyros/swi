"use client"; 

import React from 'react'
import { Button } from '../button/Button';
import OptionContainer from './option-container/OptionContainer';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import useTogglePopup from '@/app/hooks/useTogglePopup';

import optionsContainericon from "../../../../../public/icons/table/optionsContainer.png"
import Image from 'next/image';
import placeholderIcon from "../../../../../public/icons/table/placeholder.png"
import useGetStepObject from '@/app/hooks/useGetStepObject';
import { AgentFormValueType } from '@/redux/features/types';
import { findElementInSelectList } from '@/utils/updateUserValue';
import { departmentData, genderData, provincesData } from '@/services/selectFieldsData';

const EmployeeOptionLine = () => {

    const { showOptionCountainer } = useClientFormStep (); 
    const { toggleOptionContainer } = useTogglePopup (true)
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
    <div className='flex flex-col justify-between gap-10'>
        <div className='flex flex-row w-full gap-5 items-start'>
            <div className=''>
                <Image src={ placeholderIcon } alt='placeholderIcon' width={ 100 } />
            </div>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex flex-row justify-between gap-5'>
                    <h1 className='text-[30px] font-bold'>{ currentUser?.salesName}</h1>
                    <div className={`${ currentUser?.status ? "bg-activeBgColor text-activeTextColor" : "bg-pendingBgcolor text-pendingTextColor" }  text-[15px] flex justify-center items-center  px-[1rem] rounded-lg`}>
                        <h1>{ currentUser?.status ? "Active" : "Pending"}</h1>
                    </div>
                </div>
                <div>
                    <p className='text-slate-500 text-[25px]'>{ currentUser?.jobTitle }</p>
                </div>
            </div>
        </div>
        <div className='flex flex-row gap-[1rem] justify-between'>
            <div className='flex flex-row gap-3'>
                <div key={ 1 } className='gap-2 flex flex-col justify-start'>
                    <div className='50%'>
                        <h1 className={ `font-bold` }>Date Of Birth</h1>
                    </div>
                    <p className={ `text-slate-400` }>{ currentUser?.dateOfBirth }</p>
                </div>
                <div key={ 2 } className='gap-2 flex flex-col justify-start'>
                    <div className='50%'>
                        <h1 className={ `font-bold` }>Work Phone</h1>
                    </div>
                    <p className={ `text-slate-400` }>{ currentUser?.contactDetails }</p>
                </div>
                <div key={ 3 } className='gap-2 flex flex-col justify-start'>
                    <div className='50%'>
                        <h1 className={ `font-bold` }>E-mail address</h1>
                    </div>
                    <p className={ `text-slate-400` }>{ currentUser?.emailAddress }</p>
                </div>
            </div>
            <div className='relative'>
                <div onClick={ toggleOptionContainer } className='rounded-lg cursor-pointer p-2 py-4 w-[50px] flex justify-center bg-normalInputBg'>
                    <Image src={ optionsContainericon } width={ 20 } alt='optionsContainericon' />
                </div>
                {/* <Button icon={ optionsContainericon } type='button' className='rounded-sm bg-transparent w-[50px] flex justify-center bg-normalInputBg' onClick={ toggleOptionContainer }>
                 </Button>  */}
                {
                    showOptionCountainer && <OptionContainer />
                }
            </div>
        </div>
    </div>
  )
}

export default EmployeeOptionLine