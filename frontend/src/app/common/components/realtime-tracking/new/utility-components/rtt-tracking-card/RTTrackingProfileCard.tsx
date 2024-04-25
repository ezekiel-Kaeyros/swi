"use client"; 
import CircularProgressBar from '@/app/common/components/circular-progress-bar/CircularProgressBar';
import { CarIcon, CheckingActivitiesIcon, ChevronDowngIcon, ShopIcon, ShopWhiteIcon, WarningIcon } from '@/app/common/components/svgs/SvgsIcons';
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import React, { useState } from 'react'

const RTTrackingProfileCard = ({ id, data }: any) => {

  const { toggleRTTProfileElement, dispatch } = useChangeNavigationItem (); 

  const handleToggle = (id: any) => {
    toggleRTTProfileElement (id)
  }

  const [progress, setProgress] = useState(10)

  return (
    <div className='bg-normalInputBg p-2 px-3 rounded-xl flex flex-col gap-3'>
      <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-2'>
              <div className={`${ data?.backgroundColor } rounded-full h-[30px] w-[30px] flex justify-center items-center`}>
                  <ShopIcon height="20" width="20" />
              </div>
              <span>{ data.checkedTime }</span>
          </div>
          <div className='flex items-center'>
              <h1>{ data.posName }</h1>
          </div>
          <div className={`flex flex-row items-center p-2 justify-center ${data.backgroundColor} ${ data.color } gap-1 rounded-lg`}>
              <WarningIcon height={ "20"} width={ "20" } />
              <span className='text-[14px] mt-1'>{ data.timeGrading }</span>
          </div>
          <div onClick={ () => {            
            handleToggle (id)
          } } className='flex items-center cursor-pointer'>
              <ChevronDowngIcon width="20" height="20" />
          </div>
      </div>
      <div className={`${ data.opened ? "transition-all duration-1000" : "translate-y-[-30%] opacity-0 h-0 transition-all duration-1000 hidden" }`}>
          <div className='flex flex-row justify-between'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row justify-start gap-2'>
                        <div className={`${ data?.backgroundColor } rounded-xl h-[40px] w-[40px] flex justify-center items-center`}>
                            <ShopIcon height="30" width="30" />
                        </div>
                        <div >
                            <h1 className='text-[18x] '>{ data.posName }</h1>
                            <span className='text-slate-400 text-[12px]'>Carrefour Bonamoussadi</span>
                        </div>
                    </div>
                </div>
                <div className=' w-11 flex justify-center items-center h-[5]'>
                    <CircularProgressBar sqSize={160} strokeWidth={20} percentage={10}  />
                    {/* radial_color={ data?.backgroundColor} */}
                </div>
          </div>
          <div className={`p-[2rem]`}>
              <div className='flex flex-row gap-3'>
                  <div>
                      <CarIcon height={ "30" } width={"30" } />
                  </div>
                  <div>
                      <h1 className='text-[18x] '>Driving</h1>
                      <span className='text-slate-400 text-[12px]'>14:20</span>
                  </div>
              </div>
              <div className='h-[60px] mb-3 ml-3 w-[5px] bg-white'>
              </div>
              <div className='flex flex-row gap-3'>
                  <div>
                      <ShopWhiteIcon height={ "30" } width={"30" } />
                  </div>
                  <div >
                      <h1 className='text-[18x] '>Arrived at point of sales</h1>
                      <span className='text-slate-400 text-[12px]'>14:20</span>
                  </div>
              </div>
              <div className='h-[60px] mb-3 ml-3 w-[5px] bg-white'>
              </div>
              <div className='flex flex-row gap-3'>
                  <div>
                      <CheckingActivitiesIcon height={ "30" } width={"30" } />
                  </div>
                  <div>
                      <h1 className='text-[18x] '>Checking activities</h1>
                      <span className='text-slate-400 text-[12px]'>14:20</span>
                  </div>
              </div>
              <div className='h-[60px] mb-3 ml-3 w-[5px] bg-white'>
              </div>
              <div className='flex flex-row gap-3'>
                  <div>
                      <CarIcon height={ "30" } width={"30" } />
                  </div>
                  <div >
                      <h1 className='text-[18x] '>Leaving area</h1>
                      <span className='text-slate-400 text-[12px]'>14:20</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default RTTrackingProfileCard