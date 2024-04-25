"use client"
import AddChannelClusterForm from '@/app/common/components/forms/add-channel-cluster/AddChannelClusterForm'
import CustomModal from '@/app/common/components/modal/Modal'
import { DustbinIcon } from '@/app/common/components/svgs/SvgsIcons'
import { useSettings } from '@/app/hooks/useSettings'
import { copyLocalChannelCluster, deleteLocalChannelCluster } from '@/redux/features/channel-cluster-slice'
import { IChannelCluster } from '@/redux/features/types'
import React, { useState } from 'react'
import { Handle, Position } from 'reactflow'

const ChannelClusterFlowComp = ({ data }: { data: IChannelCluster }) => {
    const [ shouldUpdateCC, setShouldUpdateCC ] = useState (false)
    const [openModal, setOpenModal] = useState<boolean>(false);
    const { dispatch } = useSettings(); 
    
    console.log("data.id", data.id)

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const deleteCC = () => {
        const confirmation = confirm (`Do You want to remove Channel Cluster ${ data.name}`)
        if(confirmation) {
            dispatch(deleteLocalChannelCluster({
                id: data?.id
            })); 
        } else {
            console.log("not deleted!")
        }
    }

    const copyCC = () => {
        dispatch(copyLocalChannelCluster({
            id: data?.id
        })); 
    }

    const editChannelCluster = () => {
        setShouldUpdateCC ( true )
        setOpenModal (true)
    }

    return (
        <>
            <div className='big-parent relative bg-newPrimaryDark rounded-xl p-5 flex flex-col w-[300px]'>
                <div className='immediate-child bg-newPrimaryDark p-[.5rem] rounded-xl absolute top-[-55%] left-0 hidden '>
                    <button onClick={() => console.log("hellooo")} className='relative group rounded-xl p-[10px] bg-newPrimaryDark'>
                        {/* addRect(canvas) */}
                        <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H9" stroke="#BABABA" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 9V3" stroke="#BABABA" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <div className='grand-child absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                            <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Add Activity</span>
                        </div>
                    </button>
                    <button onClick={ copyCC } className='relative group rounded-xl  p-[10px] bg-newPrimaryDark'>
                        <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 6.45V8.55C8 10.3 7.3 11 5.55 11H3.45C1.7 11 1 10.3 1 8.55V6.45C1 4.7 1.7 4 3.45 4H5.55C7.3 4 8 4.7 8 6.45Z" fill="#BABABA"/>
                            <path d="M8.54988 1H6.44988C5.11771 1 4.39685 1.40854 4.12841 2.37301C3.97908 2.90953 4.45988 3.375 5.01679 3.375H5.54988C7.64988 3.375 8.62488 4.35 8.62488 6.45V6.98309C8.62488 7.54001 9.09035 8.0208 9.62687 7.87147C10.5913 7.60303 10.9999 6.88217 10.9999 5.55V3.45C10.9999 1.7 10.2999 1 8.54988 1Z" fill="#BABABA"/>
                        </svg>

                        <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                            <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Duplicate</span>
                        </div>
                    </button>
                    <button onClick={ editChannelCluster } className='relative group rounded-xl  p-[10px] bg-newPrimaryDark'>
                        <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.095 0H2.905C1.085 0 0 1.085 0 2.905V7.09C0 8.915 1.085 10 2.905 10H7.09C8.91 10 9.995 8.915 9.995 7.095V2.905C10 1.085 8.915 0 7.095 0ZM4.475 7.755C4.33 7.9 4.055 8.04 3.855 8.07L2.625 8.245C2.58 8.25 2.535 8.255 2.49 8.255C2.285 8.255 2.095 8.185 1.96 8.05C1.795 7.885 1.725 7.645 1.765 7.38L1.94 6.15C1.97 5.945 2.105 5.675 2.255 5.53L4.485 3.3C4.525 3.405 4.565 3.51 4.62 3.63C4.67 3.735 4.725 3.845 4.785 3.945C4.835 4.03 4.89 4.11 4.935 4.17C4.99 4.255 5.055 4.335 5.095 4.38C5.12 4.415 5.14 4.44 5.15 4.45C5.275 4.6 5.42 4.74 5.545 4.845C5.58 4.88 5.6 4.9 5.61 4.905C5.685 4.965 5.76 5.025 5.825 5.07C5.905 5.13 5.985 5.185 6.07 5.23C6.17 5.29 6.28 5.345 6.39 5.4C6.505 5.45 6.61 5.495 6.715 5.53L4.475 7.755ZM7.685 4.545L7.225 5.01C7.195 5.04 7.155 5.055 7.115 5.055C7.1 5.055 7.08 5.055 7.07 5.05C6.055 4.76 5.245 3.95 4.955 2.935C4.94 2.88 4.955 2.82 4.995 2.785L5.46 2.32C6.22 1.56 6.945 1.575 7.69 2.32C8.07 2.7 8.255 3.065 8.255 3.445C8.25 3.805 8.065 4.165 7.685 4.545Z" fill="#BABABA"/>
                        </svg>

                        <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                            <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Edit</span>
                        </div>
                    </button>
                    <button onClick={ deleteCC } className='relative group rounded-xl  p-[10px] bg-newPrimaryDark'>
                        <DustbinIcon />
                        <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                            <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Delete</span>
                        </div>
                    </button>
                </div>

                <Handle type="target" position={Position.Left} />
                <div className='flex flex-row justify-between' >
                    <div className='flex flex-row items-center justify-center gap-3'>
                        <div className='bg-channelClusterMarkerBgColor p-4 rounded-xl'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.1665 6.66663C5.54722 6.66663 6.6665 5.54734 6.6665 4.16663C6.6665 2.78591 5.54722 1.66663 4.1665 1.66663C2.78579 1.66663 1.6665 2.78591 1.6665 4.16663C1.6665 5.54734 2.78579 6.66663 4.1665 6.66663Z" fill="#BABABA"/>
                                <path d="M15.8335 12.5C17.2142 12.5 18.3335 11.3807 18.3335 10C18.3335 8.61929 17.2142 7.5 15.8335 7.5C14.4528 7.5 13.3335 8.61929 13.3335 10C13.3335 11.3807 14.4528 12.5 15.8335 12.5Z" fill="#BABABA"/>
                                <path d="M4.1665 18.3334C5.54722 18.3334 6.6665 17.2141 6.6665 15.8334C6.6665 14.4527 5.54722 13.3334 4.1665 13.3334C2.78579 13.3334 1.6665 14.4527 1.6665 15.8334C1.6665 17.2141 2.78579 18.3334 4.1665 18.3334Z" fill="#BABABA"/>
                                <path d="M4.1665 13.9583C3.82484 13.9583 3.5415 13.675 3.5415 13.3333V6.66663C3.5415 6.32496 3.82484 6.04163 4.1665 6.04163C4.50817 6.04163 4.7915 6.32496 4.7915 6.66663C4.7915 8.49163 5.67484 9.37496 7.49984 9.37496H13.3332C13.6748 9.37496 13.9582 9.65829 13.9582 9.99996C13.9582 10.3416 13.6748 10.625 13.3332 10.625H7.49984C6.3665 10.625 5.45817 10.3333 4.7915 9.78329V13.3333C4.7915 13.675 4.50817 13.9583 4.1665 13.9583Z" fill="#BABABA"/>
                            </svg>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[20px] font-bold'>Channel Cluster</span>
                            <span className='text-slate-300'>{ data?.name }</span>
                        </div>
                    </div>
                    <div className='cursor-pointer mt-[.5rem]'>
                        <svg width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z" fill="#BABABA"/>
                            <path d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z" fill="#BABABA"/>
                            <path d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z" fill="#BABABA"/>
                        </svg>
                    </div>
                </div>
                <Handle type="source" position={Position.Right} />
            </div>
            <CustomModal
                title="Create a channel cluster"
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
            >
                <AddChannelClusterForm 
                    channelClusterIdForUpdate={data.id}
                    handleCloseModal={handleCloseModal} 
                    title={ " Channel Cluster"} 
                    shouldUpdate={shouldUpdateCC} 
                    existingData={ data.name }
                />
            </CustomModal>
        </>
    )
}

export default ChannelClusterFlowComp