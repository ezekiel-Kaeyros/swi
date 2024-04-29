"use client"
import AddChannelClusterForm from '@/app/common/components/forms/activities-builder-forms/add-channel-cluster/AddChannelClusterForm'
// import AddChannelClusterForm from '@/app/common/components/forms/add-channel-cluster/AddChannelClusterForm'
import CustomModal from '@/app/common/components/modal/Modal'
import { ChannelClusterSvgIcon, DustbinIcon } from '@/app/common/components/svgs/SvgsIcons'
import { useSettings } from '@/app/hooks/useSettings'
import { copyLocalChannelCluster, deleteLocalChannelCluster, linkLocalChannelClusterToTradeChannel } from '@/redux/features/channel-cluster-slice'
import { IChannelCluster, IChannelClusterDataType } from '@/redux/features/types'
import React, { useState } from 'react'
import { Handle, Position } from 'reactflow'
import FlowCompHoverButtons from './flow-mini-components/FlowCompHoverButtons'
import BaseFlowComponent from './base-flow-components/BaseFlowComponent'

const ChannelClusterFlowComp = ({ data }: { data: IChannelClusterDataType }) => {
    const [ shouldUpdateCC, setShouldUpdateCC ] = useState (false)
    const [openModal, setOpenModal] = useState<boolean>(false); 
    const { dispatch } = useSettings(); 
    const finalColor = data?.color
    
    console.log("data.id", data)

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

    const linkToTradeChannel = (tradeChannelID: any, channelClus: any) => {
        dispatch(linkLocalChannelClusterToTradeChannel({
            id: data.id, 
            tradeChannelID, 
            channelClus
        }));
    }

    const editChannelCluster = () => {
        setShouldUpdateCC ( true )
        setOpenModal (true)
    }

    return (
        <>
            <div className='big-parent relative bg-newPrimaryDark rounded-xl p-5 flex flex-col w-[300px]'>

                <FlowCompHoverButtons 
                    canAddActivity={ false }
                    copyCC={ copyCC }
                    editChannelCluster={ editChannelCluster } 
                    deleteCC={ deleteCC } 
                    addLabel='Add Activity' 
                    deleteLabel='Delete' 
                    duplicateLabel='Duplicate' 
                    editLabel='Edit' 
                />

                <Handle type="target" position={Position.Left} onConnect={(params) => {
                    console.log("Connecting from Nothing", params)
                }} />
                <BaseFlowComponent 
                    id={ data?.id as string } 
                    headerTitle='Channel Cluster' 
                    flowCompName={ data?.name } 
                    activitiesNumber=''
                    ccBgColor={ finalColor }
                    executeSomthing={ () => console.log("hi") }
                >
                    <ChannelClusterSvgIcon />
                </BaseFlowComponent>
                {/* <div className='flex flex-row justify-between' >
                    <div className='flex flex-row items-center justify-center gap-3'>
                        <div style={{
                            backgroundColor: finalColor
                        }} className={`bg-channelClusterMarkerBgColor p-4 rounded-xl`}>
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
                </div> */}

                <Handle type="source" position={Position.Right} onConnect={(params) => {
                    console.log("Connecting to Trade Channel", params)
                    linkToTradeChannel (params.target, params.source)
                }} />
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