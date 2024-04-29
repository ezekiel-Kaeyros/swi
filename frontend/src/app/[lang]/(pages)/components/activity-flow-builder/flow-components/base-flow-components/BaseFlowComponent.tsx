import React from 'react'

const BaseFlowComponent = ({
    id, children, headerTitle, 
    flowCompName, activitiesNumber, 
    bg_color, ccBgColor, executeSomthing,
}: {
    id: string, children?: any, 
    headerTitle: string, flowCompName: string, 
    activitiesNumber?: string, bg_color?: string, 
    ccBgColor?: string, executeSomthing?: any, 
}) => {
  return (
    <div onClick={ () => executeSomthing () } key={ id } className=' bg-tranparent rounded-xl flex flex-col gap-3'>
        <div className='flex flex-row justify-between' >
            <div className='flex flex-row items-center justify-center gap-3'>
                <div style={{
                    backgroundColor: `${ccBgColor}`
                }} className={`${ bg_color }  p-3 rounded-xl`}>
                    { children }
                </div>
                <div className='flex flex-col'>
                    <span className='text-[20px] font-bold'>{ headerTitle }</span>
                    <span className='text-slate-300 text-[14px]'>{ flowCompName }</span>
                </div>
            </div>
        </div>
        {
            activitiesNumber && activitiesNumber !== "" ?
                <div className=''>
                    <span className='p-[.5rem] rounded-xl justify-center bg-white text-slate-500 text-[12px]'>
                        { activitiesNumber } Activities
                    </span>
                </div>
                :
                ""
        }
    </div>
  )
}

export default BaseFlowComponent