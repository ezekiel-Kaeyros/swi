import FlowBuilderActivityItem from '@/app/common/components/activities-flow-builder/activities-list/FlowBuilderActivityItem'
import { ShopIcon } from '@/app/common/components/svgs/SvgsIcons'
import { useSettings } from '@/app/hooks/useSettings'
import { IActivity, IActivityNew, IChannelCluster, TradeChannel } from '@/redux/features/types'
import React from 'react'
import { Handle, Position } from 'reactflow'

const ActivityFlowComp = ({ data }: { data: IActivityNew }) => {

    const { dispatch, locaChannelClusters, priorities } = useSettings(); 

    const prioritiesName = priorities.filter((prio: any) => {
        return prio.id === data.priority
    })

    console.log(prioritiesName, data, "qqqqqqqqqq")

    // const allChannelCluster = data.channelCluster.map((llCC: any) => {
    //     const foundCC = locaChannelClusters?.find ((lCC: any) => {
    //         return llCC.id === lCC.id
    //     })
    //     return foundCC; 
    // })
  return (
    <>
        <Handle type="target" position={Position.Left} onConnect={(params) => {
            console.log("Connecting from Nothing", params)
        }} />
        <FlowBuilderActivityItem
            data={ data }
        />
        {/* <div>
            <div className='flex flex-row justify-between'>
                <div><h1>{ data?.name }</h1></div>
                <div className='flex flex-row justify-around'>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3334 1.62012H4.66671C2.66671 1.62012 1.33337 2.95345 1.33337 4.95345V8.95345C1.33337 10.9535 2.66671 12.2868 4.66671 12.2868V13.7068C4.66671 14.2401 5.26004 14.5601 5.70004 14.2601L8.66671 12.2868H11.3334C13.3334 12.2868 14.6667 10.9535 14.6667 8.95345V4.95345C14.6667 2.95345 13.3334 1.62012 11.3334 1.62012ZM8.00004 9.73345C7.72004 9.73345 7.50004 9.50678 7.50004 9.23345C7.50004 8.96012 7.72004 8.73345 8.00004 8.73345C8.28004 8.73345 8.50004 8.96012 8.50004 9.23345C8.50004 9.50678 8.28004 9.73345 8.00004 9.73345ZM8.84004 6.96678C8.58004 7.14012 8.50004 7.25345 8.50004 7.44012V7.58012C8.50004 7.85345 8.27337 8.08012 8.00004 8.08012C7.72671 8.08012 7.50004 7.85345 7.50004 7.58012V7.44012C7.50004 6.66678 8.06671 6.28678 8.28004 6.14012C8.52671 5.97345 8.60671 5.86012 8.60671 5.68678C8.60671 5.35345 8.33337 5.08012 8.00004 5.08012C7.66671 5.08012 7.39337 5.35345 7.39337 5.68678C7.39337 5.96012 7.16671 6.18678 6.89337 6.18678C6.62004 6.18678 6.39337 5.96012 6.39337 5.68678C6.39337 4.80012 7.11337 4.08012 8.00004 4.08012C8.88671 4.08012 9.60671 4.80012 9.60671 5.68678C9.60671 6.44678 9.04671 6.82678 8.84004 6.96678Z" fill="#BABABA"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20671 1.33325H10.7934C13.22 1.33325 14.6667 2.77992 14.66 5.20659V10.7933C14.66 13.2199 13.2134 14.6666 10.7867 14.6666H5.20671C2.78004 14.6666 1.33337 13.2199 1.33337 10.7866V5.20659C1.33337 2.77992 2.78004 1.33325 5.20671 1.33325ZM10.4749 11.1818L8.00004 8.70697L5.52517 11.1818C5.33189 11.3751 5.01134 11.3751 4.81806 11.1818C4.62478 10.9886 4.62478 10.668 4.81806 10.4747L7.29293 7.99987L4.81806 5.52499C4.62478 5.33172 4.62478 5.01116 4.81806 4.81789C5.01134 4.62461 5.33189 4.62461 5.52517 4.81789L8.00004 7.29276L10.4749 4.81789C10.6682 4.62461 10.9887 4.62461 11.182 4.81789C11.3753 5.01116 11.3753 5.33172 11.182 5.52499L8.70715 7.99987L11.182 10.4747C11.3753 10.668 11.3753 10.9886 11.182 11.1818C10.9887 11.3751 10.6682 11.3751 10.4749 11.1818Z" fill="#BABABA"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <p>{ data?.description } </p>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row justify-around'>
                    <div className='flex flex-row gap-1'>
                        <div>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M6.00004 11.0001C8.39419 11.0001 10.335 9.05923 10.335 6.66508C10.335 4.27092 8.39419 2.33008 6.00004 2.33008C3.60588 2.33008 1.66504 4.27092 1.66504 6.66508C1.66504 9.05923 3.60588 11.0001 6.00004 11.0001Z" fill="#BABABA"/>
                            <path d="M6 6.875C5.795 6.875 5.625 6.705 5.625 6.5V4C5.625 3.795 5.795 3.625 6 3.625C6.205 3.625 6.375 3.795 6.375 4V6.5C6.375 6.705 6.205 6.875 6 6.875Z" fill="#6DE2A6"/>
                            <path d="M7.44482 1.725H4.55482C4.35482 1.725 4.19482 1.565 4.19482 1.365C4.19482 1.165 4.35482 1 4.55482 1H7.44482C7.64482 1 7.80482 1.16 7.80482 1.36C7.80482 1.56 7.64482 1.725 7.44482 1.725Z" fill="#6DE2A6"/>
                            </svg>
                        </div>
                        <span>{ data?.duration } minutes</span>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M6.00004 11.0001C8.39419 11.0001 10.335 9.05923 10.335 6.66508C10.335 4.27092 8.39419 2.33008 6.00004 2.33008C3.60588 2.33008 1.66504 4.27092 1.66504 6.66508C1.66504 9.05923 3.60588 11.0001 6.00004 11.0001Z" fill="#BABABA"/>
                            <path d="M6 6.875C5.795 6.875 5.625 6.705 5.625 6.5V4C5.625 3.795 5.795 3.625 6 3.625C6.205 3.625 6.375 3.795 6.375 4V6.5C6.375 6.705 6.205 6.875 6 6.875Z" fill="#6DE2A6"/>
                            <path d="M7.44482 1.725H4.55482C4.35482 1.725 4.19482 1.565 4.19482 1.365C4.19482 1.165 4.35482 1 4.55482 1H7.44482C7.64482 1 7.80482 1.16 7.80482 1.36C7.80482 1.56 7.64482 1.725 7.44482 1.725Z" fill="#6DE2A6"/>
                            </svg>
                        </div>
                        <span>{ data?.frequency } repetition</span>
                    </div>
                </div>
                <div>
                    <div className='bg-black text-white rounded-xl'><h2>{ data?.frequency }</h2></div>
                </div>
            </div>
            <div className='flex flex-row p-4'>
               
                <div className='border border-white rounded-xl'>
                    <div><ShopIcon /></div>
                    <div><p>{ data?.channelCluster }</p></div>
                </div>
                <div className='border border-white rounded-xl'>
                    <div><ShopIcon /></div>
                    <div><p>General Trade retail</p></div>
                </div>
            </div>
        </div> */}
        <Handle type="source" position={Position.Right} onConnect={(params) => {
            console.log("Connecting to Category", params); 
            // linkToCategory (params.target)
        }} />
    </>
  )
}

export default ActivityFlowComp






 {/* {
                    allChannelCluster.length > 0 ? 
                        allChannelCluster.map((channeCC: IChannelCluster) => {
                            return (
                                <div className='border border-white rounded-xl'>
                                    <div><ShopIcon /></div>
                                    <div><p>{ data?.channelCluster }</p></div>
                                </div>
                            )
                        })
                        :
                        ""
                } */}