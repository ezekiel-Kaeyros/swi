import { TimerIcon } from 'lucide-react';
import React from 'react'
import { ConnectorIcon } from '../../../svgs/SvgsIcons';

type DoubleConnectedChipType = {
    contentChipOne: string; 
    contentChipTwo: string; 
    svgIcon?: any;
    bgColor1?: string;
    bgColor2?: string;
    textColor?: string;
}

const DoubleConnectedChip: React.FC<DoubleConnectedChipType> = ({ contentChipOne, textColor, svgIcon, bgColor1, bgColor2, contentChipTwo }) => {
  return (
    <div className='flex flex-row items-center'>
        <div className={`${ bgColor1 ? bgColor1 : "bg-transparent" }  py-1 px-2 rounded-lg flex flex-row items-center gap-3`}>
            {/* <TimerIcon /> */}
            {
                svgIcon ? 
                    svgIcon
                    :
                    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M6.00004 11.0001C8.39419 11.0001 10.335 9.05923 10.335 6.66508C10.335 4.27092 8.39419 2.33008 6.00004 2.33008C3.60588 2.33008 1.66504 4.27092 1.66504 6.66508C1.66504 9.05923 3.60588 11.0001 6.00004 11.0001Z" fill="#BABABA"/>
                        <path d="M6 6.875C5.795 6.875 5.625 6.705 5.625 6.5V4C5.625 3.795 5.795 3.625 6 3.625C6.205 3.625 6.375 3.795 6.375 4V6.5C6.375 6.705 6.205 6.875 6 6.875Z" fill="#6DE2A6"/>
                        <path d="M7.44482 1.725H4.55482C4.35482 1.725 4.19482 1.565 4.19482 1.365C4.19482 1.165 4.35482 1 4.55482 1H7.44482C7.64482 1 7.80482 1.16 7.80482 1.36C7.80482 1.56 7.64482 1.725 7.44482 1.725Z" fill="#6DE2A6"/>
                    </svg>
            }
            
            <div className={ `${textColor ? textColor : "text-slate-500"}` }>{ contentChipOne }</div>
        </div>
        <ConnectorIcon />
        <div className={`py-1 px-2 rounded-xl ${ bgColor2 ? bgColor2 : "bg-transparent" } flex justify-center items-center1`}>
            {/* { truncateText(routeObj?.remainingTime, 5) } */}
            { contentChipTwo }
        </div>
    </div>
  )
}

export default DoubleConnectedChip