"use client";
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import { IFormStep, IFormSteps } from '@/redux/features/types';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import selectedIcon from "../../../../../../../public/icons/stepPassed.png"

const FormSteps = () => {

    const { formSteps } = useClientFormStep (); 
  return (
    <div className='flex flex-col justify-between relative h-[200px]'>
        <div className='absolute h-full w-[1.5px] left-[7%] bg-white'>
        </div>
        {
            formSteps?.map((formStep: IFormStep) => {
                return (
                    <div key={ formStep?.id } className='flex flex-row justify-start items-center gap-3 z-10'>
                        <div className={`flex justify-center items-center ${ formStep?.active ? "bg-stepsMarkerBlue px-[.3rem] py-[.3rem]" : "bg-stepMarkNotSelected" } rounded-full  h-[40px] w-[40px]`}>
                            {
                                formStep?.done ? 
                                <Image src={ selectedIcon } width={100} alt='stepPassedIcon' />
                                : 
                                <span>
                                    { formStep?.id }
                                </span>
                            }
                        </div>
                        <span>{ formStep?.label }</span>
                    </div>
                    
                )
            })
        }
        
    </div>
  )
}

export default FormSteps