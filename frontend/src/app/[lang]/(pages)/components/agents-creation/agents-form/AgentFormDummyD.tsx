"use client"; 
import { useClientFormStep } from '@/app/hooks/useClientFormStep'
import React, { useEffect } from 'react'
import { Button } from '../../../../../common/components/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AgentFormValues } from './agentForm';
import InputField from './text-field/InputField';
import calendarIcon from '../../../../../../../public/icons/calendar.png'
import Image from 'next/image';
import { addSalesRepAgents, addUser } from '@/redux/features/agent-creation';
import closeIconStartDateIcon from '../../../../../../../public/icons/closeIconStartDate.png'
import dropDownIcon from '../../../../../../../public/icons/dropDown.png'
import SelectField from './select-field/SelectField';
import { departmentData, genderData, provincesData } from '@/services/selectFieldsData';
import useGetStepObject from '@/app/hooks/useGetStepObject';
import { fillSelect, navigateSteps } from '@/utils/updateUserValue';
import useToggleModal from '@/app/hooks/useToggleModal';
import { Calendar } from '@/components/ui/calendar';
import { DatePicker } from '@/app/common/components/date-picker/DatePicker';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';


const AgentForm = () => {

    // GET THE DISPATCH FROM HOOK
    const { 
        dispatch 
    } = useClientFormStep (); 

    // GETTING REACT HOOK ENGINE SET UP
    const { register, handleSubmit, setValue } = useForm<AgentFormValues>(); 
    
    // GETTING ALL OBJECT FOR THE FORM STEPS
    const { firstStepObj, secondStepObj, thirdStepObj, currentUser } = useGetStepObject (); 

    // GET THE ACTIONS FOR SHOWING PREVIEW AND OPEN CANCEL MODAL
    const { showAgentPreviewInfo, openCanceModal } = useToggleModal (); 

    // FILLING INPUTS WITH USER INFO IN CASE OF EDITING USER INFO
    useEffect (() => {
        setValue ("salesName", currentUser?.salesName); 
        setValue ("dateOfBirth", currentUser?.dateOfBirth); 
        setValue ("gender", currentUser?.gender); 
        setValue ("contactDetails", currentUser?.salesName); 
        setValue ("emailAddress", currentUser?.emailAddress); 
        setValue ("country", currentUser?.country); 
        setValue ("city", currentUser?.city); 
        setValue ("region", currentUser?.region); 
        setValue ("streetAddress", currentUser?.streetAddress); 
        setValue ("jobTitle", currentUser?.jobTitle); 
        setValue ("departement", currentUser?.departement); 
        setValue ("reportingManager", currentUser?.reportingManager); 
        setValue ("startDate", currentUser?.startDate); 
    }, [])

    // SUBMIT DATA AND DISPLAY PREVIEW DATA
    const onSubmit: SubmitHandler<AgentFormValues> = async (data) => {
        dispatch(addUser({
            user: data
        }))
        dispatch(addSalesRepAgents({
            salesRepsAgent: data
        }))
        showAgentPreviewInfo ()
    }

    // const [date, setDate] = React.useState<Date>()

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='relative' >
            {
                firstStepObj?.showForm &&
                    <div className=' flex flex-col gap-[1rem] '>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row justify-between gap-5'>
                                <div className='relative w-[50%]'>
                                    <h1>Sales Name</h1>
                                    <InputField
                                        name="salesName"
                                        register={register('salesName', { 
                                            required: true, 
                                        })}
                                        placeholder="Enter name"
                                    />
                                    
                                </div>
                                <div className='relative w-[50%]'>
                                    <h1>Date of Birth</h1>
                                    {/* <Calendar /> */}
                                    {/* <DatePicker 
                                        name="dateOfBirth" 
                                        register={register('dateOfBirth', { 
                                            required: true, 
                                        })}
                                    /> */}
                                    <InputField
                                        name="dateOfBirth"
                                        type='date'
                                        register={register('dateOfBirth', { 
                                            required: true, 
                                        })}
                                        limit={ new Date().toISOString().split('T')[0] }
                                        placeholder="Select Birth date"
                                    />
                                    {/* <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full mt-2 pl-12 h-[45px] rounded-xl bg-normalInputBg border-none justify-start text-left font-normal",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                                register={register('dateOfBirth', { 
                                                    required: true, 
                                                })}
                                            />
                                        </PopoverContent>
                                    </Popover> */}
                                    <div className='absolute bottom-[25%] z-10 right-[20%]'>
                                        <Image src={ calendarIcon } width={ 20 } alt='calendarIcon' />
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-[repeat(2,1fr)] gap-5'>
                                <div className='relative'>
                                    <SelectField
                                        name="gender"
                                        register={register('gender', { 
                                            required: true, 
                                        })}
                                        title="Select Gender" 
                                        options={ genderData }
                                        widthPercentage={ "100%" }
                                    />
                                    <div className='absolute bottom-[20%] z-10 right-[5%] '>
                                        <Image src={ dropDownIcon } width={ 30 } alt='calendarIcon' />
                                    </div>
                                </div>
                                <div>
                                    <h1>Contact Details</h1>
                                    <InputField
                                        name="contactDetails"
                                        type='number'
                                        inputMode='numeric'
                                        register={register('contactDetails', { 
                                            required: true, 
                                            minLength: 9
                                        })}
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-row justify-between pr-[1rem]'>
                                <div className='w-[50%]'>
                                    <h1>E-mail Address</h1>
                                    <InputField
                                        name="emailAddress"
                                        type='email'
                                        register={register('emailAddress', { 
                                            required: true, 
                                            // minLength: 10
                                            // pattern: /[a-zA-Z0-9,_]$/,
                                        })}
                                        placeholder="Select Gender"
                                    />

                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end gap-9'>
                            <div>
                                <Button type='button' className='rounded-sm bg-transparent w-[150px] flex justify-center' onClick={ openCanceModal }>
                                    Cancel
                                </Button>
                            </div>
                            <div>
                                <Button className={`rounded-lg bg-disabledNextButton w-[150px] flex justify-center`} onClick={ () => navigateSteps (dispatch, true, secondStepObj, true, firstStepObj, secondStepObj) }>
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
            }
            {
                secondStepObj?.showForm &&
                    <>
                        <div className='flex flex-col gap-[4rem] relative'>
                            <div className='flex flex-col gap-[1.5rem]'>
                                <div className='grid grid-cols-[repeat(2,1fr)] gap-5'>
                                    <div>
                                        <h1>Country</h1>
                                        <InputField
                                            name="country"
                                            register={register('country', { 
                                                required: true, 
                                            })}
                                            placeholder="Select Country"
                                        />
                                    </div>
                                    <div className='relative'>
                                        <SelectField
                                            name="region"
                                            register={register('region', { 
                                                required: true, 
                                                onChange: (e) => {
                                                    fillSelect (e, "city", provincesData, setValue); 
                                                }
                                            })}
                                            title="State/Province" 
                                            options={ provincesData }
                                            widthPercentage={ "100%" }
                                        />
                                        <div className='absolute bottom-[20%] z-10 right-[5%] '>
                                            <Image src={ dropDownIcon } width={ 30 } alt='calendarIcon' />
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-[repeat(2,1fr)] gap-5'>
                                    <div className='relative'>
                                        <SelectField
                                            name="city"
                                            register={register('city', { 
                                                required: true, 
                                                onChange: (e) => {
                                                    fillSelect (e, "region", provincesData, setValue)
                                                }
                                            })}
                                            title="City" 
                                            options={ provincesData }
                                            widthPercentage={ "100%" }
                                            ifExtra={ true }
                                        />
                                        <div className='absolute bottom-[20%] z-10 right-[5%] '>
                                            <Image src={ dropDownIcon } width={ 30 } alt='calendarIcon' />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h1>Street Address</h1>
                                        <InputField
                                            name="streetAddress"
                                            register={register('streetAddress', { 
                                                required: true, 
                                            })}
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-end'>
                                {/* <Button type='button' onClick={ (e) => {
                                    e.preventDefault()
                                    openCanceModal ()
                                } } className='absolute left-[-60%] rounded-sm bg-transparent text-red-600 w-[150px] flex justify-center'>
                                    Cancel
                                </Button> */}
                                <div className='flex flex-row justify-end'>
                                    <Button type='button' onClick={ (e) => {
                                        e.preventDefault()
                                        navigateSteps (dispatch, false, secondStepObj, false, firstStepObj, firstStepObj) 
                                    } } className='bg-normalInputBg rounded-sm bg-transparent w-[150px] flex justify-center'>
                                        Prev
                                    </Button>
                                    <Button type='button' onClick={ (e) => {
                                        e.preventDefault()
                                        navigateSteps (dispatch, true, thirdStepObj, true, secondStepObj, thirdStepObj) 
                                    } } className={`rounded-lg bg-disabledNextButton w-[150px] flex justify-center`} >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Button type='button' onClick={ (e) => {
                            e.preventDefault()
                            openCanceModal ()
                        } } className='absolute bottom-0 left-[-60%] rounded-sm bg-transparent text-red-600 w-[150px] flex justify-center'>
                            Cancel
                        </Button>
                    </>
            }
            {
                thirdStepObj?.showForm && 
                    <>
                        <div className='flex flex-col gap-[4rem] relative'>
                            <div className='flex flex-col gap-[1.5rem]'>
                                <div className='grid grid-cols-[repeat(2,1fr)] gap-5'>
                                    <div>
                                        <h1>Job</h1>
                                        <InputField
                                            name="jobTitle"
                                            register={register('jobTitle', { 
                                                required: true, 
                                            })}
                                            placeholder="Select Job Position"
                                        />
                                    </div>
                                    <div className='relative'>
                                        <SelectField
                                            name="departement"
                                            register={register('departement', { 
                                                required: true, 
                                                onChange: (e) => {
                                                    fillSelect (e, "reportingManager", departmentData, setValue); 
                                                }
                                            })}
                                            title="Departement" 
                                            options={ departmentData }
                                            widthPercentage={ "100%" }
                                            ifExtra={ true }
                                        />
                                        <div className='absolute bottom-[20%] z-10 right-[5%] '>
                                            <Image src={ dropDownIcon } width={ 30 } alt='calendarIcon' />
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-[repeat(2,1fr)] gap-5'>
                                    <div className='relative'>
                                        <SelectField
                                            name="reportingManager"
                                            register={register('reportingManager', { 
                                                required: true, 
                                                onChange: (e) => {
                                                    fillSelect (e, "departement", departmentData, setValue)
                                                }
                                            })}
                                            title="Reporting Manager" 
                                            options={ departmentData }
                                            widthPercentage={ "100%" }
                                        />
                                        <div className='absolute bottom-[20%] z-10 right-[5%] '>
                                            <Image src={ dropDownIcon } width={ 30 } alt='calendarIcon' />
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <h1>Start Date</h1>
                                        {/* <InputField
                                            name="dateOfBirth"
                                            type='date'
                                            register={register('dateOfBirth', { 
                                                required: true, 
                                            })}
                                            placeholder="Select Birth date"
                                        /> */}
                                        <InputField
                                            name="startDate"
                                            type='date'
                                            // limit={ new Date().toISOString().split('T')[0] }
                                            register={register('startDate', { 
                                                required: true, 
                                            })}
                                            placeholder="Start Date"
                                        />
                                        <div className='absolute bottom-[25%] z-10 right-[20%] '>
                                            <Image src={ closeIconStartDateIcon } width={ 20 } alt='calendarIcon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                {/* <div className='flex'>
                                    <Button type='button' onClick={ (e) => {
                                        e.preventDefault()
                                        openCanceModal ()
                                    } } className='absolute left-[-60%] rounded-sm bg-transparent text-red-600 w-[150px] flex justify-center'>
                                        Cancel
                                    </Button>
                                </div> */}
                                <div className='flex justify-end gap-4'>
                                    <Button type='button' onClick={ (e) => {
                                        e.preventDefault()
                                        navigateSteps (dispatch, false, thirdStepObj, false, secondStepObj, secondStepObj) 
                                    } } className='bg-normalInputBg rounded-sm bg-transparent w-[150px] flex justify-center'>
                                        Prev
                                    </Button>
                                    <Button type='submit' className={`rounded-lg bg-disabledNextButton w-[150px] flex justify-center`}>
                                        Create
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Button type='button' onClick={ (e) => {
                            e.preventDefault()
                            openCanceModal ()
                        } } className='absolute bottom-0 left-[-60%] rounded-sm bg-transparent text-red-600 w-[150px] flex justify-center'>
                            Cancel
                        </Button>
                    </>
            }

        </form>
    </div>
  )
}

export default AgentForm