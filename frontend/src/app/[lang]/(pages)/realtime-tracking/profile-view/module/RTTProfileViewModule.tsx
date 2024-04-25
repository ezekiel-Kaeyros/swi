"use client"; 
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'; 
import GenericNavigation from '../../../components/settings-navigation/GenericNavigation';
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import DoubleConnectedChip from '@/app/common/components/realtime-tracking/new/utility-components/DoubleConnectedChip';
import { CarIcon, ChevronDowngIcon, RecuringIcon, ShopIcon, WarningIcon } from '@/app/common/components/svgs/SvgsIcons';
import RTTrackingProfileList from '@/app/common/components/realtime-tracking/new/utility-components/rtt-tracking-card/RTTrackingProfileList';
import { useSettings } from '@/app/hooks/useSettings';
import Link from 'next/link';


const RTTProfileViewModule = () => {
    const pathName = usePathname ()
    let { selectNavigationTabsInRTTProfile } = useChangeNavigationItem (); 
    const { trackingProfileNavigationList } = useClientFormStep (); 
    // console.log(pathName.split('/')[pathName.split('/').length - 1], "pathname")

  return (
    <div className='px-[1rem] py-[2rem] flex flex-col gap-5 h-[90vh]'>
        <div className='flex flex-row gap-4 items-center'>
            <Link href={"/realtime-tracking"} className='border-b border-b-slate-300'>
                { pathName.split('/')[pathName.split('/').length - 3].split("-")[0].charAt(0).toLocaleUpperCase () + pathName.split('/')[pathName.split('/').length - 3].split("-")[0].slice(1) } { 
                pathName.split('/')[pathName.split('/').length - 3].split("-")[1].charAt(0).toLocaleUpperCase () + pathName.split('/')[pathName.split('/').length - 3].split("-")[1].slice(1) }
            </Link>
            <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M8.81979 5.68018L5.45312 8.20684V11.9468C5.45312 12.5868 6.22646 12.9068 6.67979 12.4535L10.1331 9.00018C10.6865 8.44684 10.6865 7.54684 10.1331 6.99351L8.81979 5.68018Z" fill="#BABABA"/>
                    <path d="M5.45312 4.05328V8.20662L8.81979 5.67995L6.67979 3.53995C6.22646 3.09328 5.45312 3.41328 5.45312 4.05328Z" fill="#BABABA"/>
                </svg>
            </div>
            <div>
                { pathName.split('/')[pathName.split('/').length - 2].split("-")[0].charAt(0).toLocaleUpperCase () + pathName.split('/')[pathName.split('/').length - 2].split("-")[0].slice(1) } { 
                pathName.split('/')[pathName.split('/').length - 2].split("-")[1].charAt(0).toLocaleUpperCase () + pathName.split('/')[pathName.split('/').length - 2].split("-")[1].slice(1) }
            </div>
        </div>

        <div className='mt-[2rem] flex flex-row justify-between'>
            <div>
                <h1 className='text-[20px] font-bold'>Abriel Mboma</h1>
                <span className='font'>Sales agent</span>
            </div>
            <div className='flex items-end'>
                <DoubleConnectedChip contentChipOne="2/10 shops" contentChipTwo="4hr30mins left" svgIcon={ <ShopIcon /> } bgColor1='bg-white' bgColor2={"bg-activeBgColor"} />
            </div>
        </div>

        <GenericNavigation settingPageNavigation={ trackingProfileNavigationList } genericAction={ selectNavigationTabsInRTTProfile } settinPStyle={ false } genericActionBoolean={ true } agentDStyle={ false } />

        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-2 items-center'>
                <h1 className='text-slate-500'>Last update: 12:23</h1>
                <RecuringIcon />
            </div>
            <div>
            <h1 className='text-slate-500'>Mon 11 jan 2024</h1>
            </div>
        </div>

        <RTTrackingProfileList />
    </div>
  )
}

export default RTTProfileViewModule





// const RTTProfileViewModule = () => {
//     const pathName = usePathname (); 
//     let { selectNavigationTabsInPOS, selectNavigationTabsInRTTProfile } = useChangeNavigationItem (); 
//     const { posDisplayNavigationList, trackingProfileNavigationList } = useClientFormStep (); 
//     console.log(pathName.split('/')[pathName.split('/').length - 2], "pathname")
//   return (
//     <div className='px-[1rem] py-[2rem] '>
//         <div>
//             <div>
//                 { pathName.split('/')[pathName.split('/').length - 4].split("-")[0].charAt(0).toLocaleUpperCase () + pathName.split('/')[pathName.split('/').length - 4].split("-")[0].slice(1) } { 
//                 pathName.split('/')[pathName.split('/').length - 4].split("-")[1].charAt(0).toLocaleUpperCase () + pathName.split('/')[pathName.split('/').length - 4].split("-")[1].slice(1) }
//             </div>
//             <div>
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path opacity="0.4" d="M8.81979 5.68018L5.45312 8.20684V11.9468C5.45312 12.5868 6.22646 12.9068 6.67979 12.4535L10.1331 9.00018C10.6865 8.44684 10.6865 7.54684 10.1331 6.99351L8.81979 5.68018Z" fill="#BABABA"/>
//                     <path d="M5.45312 4.05328V8.20662L8.81979 5.67995L6.67979 3.53995C6.22646 3.09328 5.45312 3.41328 5.45312 4.05328Z" fill="#BABABA"/>
//                 </svg>
//             </div>
//             <div>
//                 { pathName.split('/')[pathName.split('/').length - 3].split("-")[0].charAt(0).toLocaleUpperCase () + pathName.split('/')[pathName.split('/').length - 3].split("-")[0].slice(1) } { 
//                 pathName.split('/')[pathName.split('/').length - 3].split("-")[1].charAt(0).toLocaleUpperCase () + pathName.split('/')[pathName.split('/').length - 3].split("-")[1].slice(1) }
//             </div>
//         </div>
//         <GenericNavigation settingPageNavigation={ trackingProfileNavigationList } genericAction={ selectNavigationTabsInRTTProfile } settinPStyle={ false } genericActionBoolean={ true } agentDStyle={ false } />
//         RTTProfileViewModule { pathName.split('/')[pathName.split('/').length - 1] }
//     </div>
//   )
// }

// export default RTTProfileViewModule