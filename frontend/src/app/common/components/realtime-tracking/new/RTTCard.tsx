"use client"; 
import React, { useState } from 'react'
import { Button } from '../../button/Button'
import { CarIcon, CurvyRouteIcon, EyeIcon, LocationIcon, WhiteVerticalLineIcon } from '../../svgs/SvgsIcons'
import Image from 'next/image'
import Link from 'next/link'
import { truncateText } from '@/utils/truncateText'
import DoubleConnectedChip from './utility-components/DoubleConnectedChip'
import { TimerIcon } from 'lucide-react'
import VerticalInfoChipConnect from './utility-components/VerticalInfoChipConnect'
import CircularProgressBar from '../../circular-progress-bar/CircularProgressBar'

const RTTCard = ({ routeObj }: any) => {

    const [progress, setProgress] = useState(10)

  const onChangeProgress = () => {
    setProgress((prev) => prev + 10)
  }
  return (
    <div className='bg-bgColorDark rounded-xl p-4 flex flex-col gap-5 w-full'>

        

        <div className='flex flex-row gap-4 justify-between'>
            <div className='flex flex-row gap-4 items-center'>
                <div className=''>
                    <CurvyRouteIcon height="20" width="20" color="none" />
                </div>
                <Link href={ `/realtime-tracking/profile-view/${routeObj?.id}` }>
                    <h1 className='text-[20px] font-bold'>{ routeObj?.posName }</h1>
                </Link>
            </div>
            <div className=' w-11 flex justify-center items-center h-10'>
                <CircularProgressBar sqSize={160} strokeWidth={20} percentage={progress} mt_style='mt-10 h-10' radial_color="stroke-slate-200" />
            </div>
        </div>

        {/* <button
            onClick={onChangeProgress}
            className="text-neutral-800 rounded-lg border border-neutral-800 bg-transparent px-2 py-1 min-w-[140px] mt-4 hover:bg-gray-200 hover:border-gray-200 ">
            Update Progress
        </button> */}

        <DoubleConnectedChip textColor='text-activeTextColor' contentChipOne={ routeObj?.elapsedTime } contentChipTwo={ routeObj?.remainingTime } bgColor1='bg-activeBgColor' bgColor2={"bg-greyBg"}/>

        <VerticalInfoChipConnect
            presentLoc={ routeObj?.presentLocation }
            nextLoc={ routeObj?.nextDestination }
            svgIconOne={ <LocationIcon height="20" width="20" color="none" /> }
            svgIconTwo={ <CarIcon height="12" width="12" color="none"/> }
        />

        <div className='flex flex-row gap-1 items-center justify-between'>
            <div>
                <Link className='font-bold bg-settingViewBottomBorderColor rounded-full p-3 py-2 flex flex-row items-center gap-2' href={ `/realtime-tracking/profile-view/${routeObj?.id}` }>
                    <EyeIcon height="20" width="20" color="none" /> 
                    <span className='text-[12px]'>
                        Track Route
                    </span>
                </Link>
            </div>
            <div>
                <div className='font-bold bg-transparent rounded-full flex flex-row items-center justify-between gap-1'>
                    <Image src={ routeObj?.picture } alt='abriel' width={30} />
                    <span>
                        {/* { truncateText(routeObj?.agentName, 5) } */}
                        { routeObj?.agentName }
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default RTTCard