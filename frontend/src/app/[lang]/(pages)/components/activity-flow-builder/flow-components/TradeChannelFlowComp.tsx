"use client"; 
import AddTradeChannelForm from '@/app/common/components/forms/activities-builder-forms/add-trade-channel-form/AddTradeChannelForm';
// import AddChannelClusterForm from '@/app/common/components/forms/add-channel-cluster/AddChannelClusterForm'
// import AddTradeChannelForm from '@/app/common/components/forms/add-trade-channel-form/AddTradeChannelForm';
import CustomModal from '@/app/common/components/modal/Modal'
import { DustbinIcon, TradeChannelSvgIcon } from '@/app/common/components/svgs/SvgsIcons'
import { useSettings } from '@/app/hooks/useSettings'
import { copyLocalTradeChannel, deleteLocalTradeChannel, linkLocalTradeChanneloCategory } from '@/redux/features/channel-cluster-slice'
import React, { useState } from 'react'
import { Handle, Position, ReactFlowProvider } from 'reactflow'
import FlowCompHoverButtons from './flow-mini-components/FlowCompHoverButtons';
import BaseFlowComponent from './base-flow-components/BaseFlowComponent';

const TradeChannelFlowComp = ({ data }: { data: any }) => {
    const [ shouldUpdateCC, setShouldUpdateCC ] = useState (false)
    const [openModal, setOpenModal] = useState<boolean>(false);
    const { dispatch } = useSettings(); 

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const deleteCC = () => {
        const confirmation = confirm (`Do You want to remove Channel Cluster ${ data.name}`)
        if(confirmation) {
            dispatch(deleteLocalTradeChannel({
                id: data?.id
            })); 
        } else {
            console.log("not deleted!")
        }
    }

    const copyCC = () => {
        dispatch(copyLocalTradeChannel({
            id: data?.id
        })); 
    }

    const editChannelCluster = () => {
        setShouldUpdateCC ( true )
        setOpenModal (true)
    }

    const linkToCategory = (categoryID: any, tradeCID: any) => {
        dispatch(linkLocalTradeChanneloCategory({
            id: data.id, 
            categoryID, 
            tradeCID
        }));
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
                    console.log("Connecting from Channel Cluster", params)
                }} />

                <BaseFlowComponent 
                    id={ data?.id } 
                    headerTitle='Trade Channel' 
                    flowCompName={ data?.name } 
                    activitiesNumber=''
                    bg_color='bg-channelTradeMarkerBgColor' 
                    executeSomthing={ () => console.log("hi") }
                >
                    <TradeChannelSvgIcon backgroundColor='#BF9BED' />
                </BaseFlowComponent>

                <Handle type="source" position={Position.Right} onConnect={(params) => {
                    console.log("Connecting to Category", params); 
                    linkToCategory (params.target, params.source)
                }} />
            </div>
            <CustomModal
                title="Edit a Trade Channel"
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
            >
                <AddTradeChannelForm 
                    channelClusterId={data.id}
                    tradeChannelId={data.id}
                    handleCloseModal={handleCloseModal} 
                    title={ "Trade Channel"} 
                    shouldUpdate={shouldUpdateCC} 
                    existingData={ data.name }
                />
            </CustomModal>
        </>

    )
}

export default TradeChannelFlowComp