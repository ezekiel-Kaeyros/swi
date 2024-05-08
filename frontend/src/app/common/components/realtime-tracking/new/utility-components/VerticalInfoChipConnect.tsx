import React from 'react'
import { CarIcon, LocationIcon, WhiteVerticalLineIcon } from '../../../svgs/SvgsIcons'

type VerticalInfoChipConnectType = {
    presentLoc: string; 
    nextLoc: string; 
    svgIconOne?: any; 
    svgIconTwo?: any; 
}

const VerticalInfoChipConnect: React.FC<VerticalInfoChipConnectType> = ({ presentLoc, 
    nextLoc,  
    svgIconOne,  
    svgIconTwo,  }) => {
  return (
    <div className='flex flex-row gap-3'>
        <div className='flex flex-col items-center'>
            <div className='bg-stepsMarkerBlue rounded-full p-2'>
                { svgIconOne }
                {/* <LocationIcon /> */}
            </div>
            <WhiteVerticalLineIcon height={'41'} width={'2'} color={'none'} />
            <div className='bg-tomatoBg rounded-full p-2'>
                { svgIconTwo }
                {/* <CarIcon /> */}
            </div>
        </div>
        <div className='flex flex-col justify-between'>
            <div>
                <h1 className='text-slate-400'>Present Location</h1>
                <span>{ presentLoc }</span>
            </div>
            <div>
                <h1 className='text-slate-400'>Next Destination</h1>
                <span>{ nextLoc }</span>
            </div>
        </div>
    </div>
  )
}

export default VerticalInfoChipConnect