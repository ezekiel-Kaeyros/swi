import { AddSvgIcon, CopySvgIcon, DustbinIcon, EditSvgIconV2 } from '@/app/common/components/svgs/SvgsIcons'
import React from 'react'

const FlowCompHoverButtons = ({ 
    canAddActivity, addFunction, copyCC, 
    editChannelCluster, deleteCC, topPos, 
    addLabel, duplicateLabel, editLabel, deleteLabel
}: {
    canAddActivity: boolean, addFunction?: any, 
    copyCC: () => void, editChannelCluster: () => void, 
    deleteCC: () => void, addLabel: string, topPos?: string, 
    duplicateLabel: string, editLabel: string, deleteLabel: string
}) => {
  return (
    <div className={`immediate-child bg-newPrimaryDark p-[.5rem] rounded-xl absolute ${ topPos ? topPos : "top-[-55%]" }  left-0 hidden `}>
        {
            canAddActivity ? 
                <button onClick={() => addFunction ()} className='relative group rounded-xl p-[10px] bg-newPrimaryDark'>
                    {/* addRect(canvas) */}
                    <AddSvgIcon height="20" width="20" color="none" />
                    <div className='grand-child absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                        <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>{ addLabel }</span>
                    </div>
                </button>
                : 
                ""
        }
        <button onClick={ () => copyCC () } className='relative group rounded-xl  p-[10px] bg-newPrimaryDark'>
            <CopySvgIcon height="20" width="20" color="none"/>
            <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>{ duplicateLabel }</span>
            </div>
        </button>
        <button onClick={ () => editChannelCluster () } className='relative group rounded-xl  p-[10px] bg-newPrimaryDark'>
            <EditSvgIconV2 height="20" width="20" color="none" />
            <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>{ editLabel }</span>
            </div>
        </button>
        <button onClick={ () => deleteCC () } className='relative group rounded-xl  p-[10px] bg-newPrimaryDark'>
            <DustbinIcon height="20" width="20" color="none" />
            <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>{ deleteLabel }</span>
            </div>
        </button>
    </div>
  )
}

export default FlowCompHoverButtons