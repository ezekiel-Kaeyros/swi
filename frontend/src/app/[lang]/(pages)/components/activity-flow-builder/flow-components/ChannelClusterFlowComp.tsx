"use client"
import AddChannelClusterForm from '@/app/common/components/forms/activities-builder-forms/add-channel-cluster/AddChannelClusterForm'
// import AddChannelClusterForm from '@/app/common/components/forms/add-channel-cluster/AddChannelClusterForm'
import CustomModal from '@/app/common/components/modal/Modal'
import { ChannelClusterSvgIcon, DustbinIcon } from '@/app/common/components/svgs/SvgsIcons'
import { useSettings } from '@/app/hooks/useSettings'
import { copyLocalChannelCluster, deleteLocalChannelCluster, deleteLocalTradeChannel, linkLocalChannelClusterToTradeChannel } from '@/redux/features/channel-cluster-slice'
import { IChannelClusterDataType, TokenType, TradeChannel } from '@/redux/features/types'
import React, { useState } from 'react'
import { Handle, Position } from 'reactflow'
import FlowCompHoverButtons from './flow-mini-components/FlowCompHoverButtons'
import BaseFlowComponent from './base-flow-components/BaseFlowComponent'
import useMakeActions from '@/app/hooks/useMakeActions'
import { BASE_URL, CHANNELCLUSTER_API_URL, TRADECHANNEL_API_URL } from '@/utils/constants'
import { makePostReques } from '@/utils/makePostReq'
import { useActivities } from '@/app/hooks/useActivities'
import { generateId } from '@/utils/generateRandomID'
import { getUserCookies } from '@/cookies/cookies'
import { jwtDecode } from 'jwt-decode'

const ChannelClusterFlowComp = ({ data }: { data: IChannelClusterDataType }) => {
    const [ shouldUpdateCC, setShouldUpdateCC ] = useState (false)
    const [ openModal, setOpenModal ] = useState<boolean>(false); 
    // const { dispatch } = useSettings(); 
    const { dispatch, connectTwoNodes, deleteAndEdge, locaChannelClusters, locaTradeChannels, tradeChannels, localCategories, edgesConnectingNodes, activities, channelClusters } = useSettings(); 
    const { localActivities } = useActivities ()
    const finalColor = data?.color

    // const { locaTradeChannels } = useSettings (); 
    const { makeDeleteAction } = useMakeActions();

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const deleteCC = () => {
        const confirmation = confirm (`Do You want to remove Channel Cluster ${ data.name}`)
        if(confirmation) {
            dispatch(deleteLocalChannelCluster({
                id: data?.id
            })); 
            makeDeleteAction(`${BASE_URL}/${ CHANNELCLUSTER_API_URL }/${data?.id}`)
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

    

    const deleteTC = (id: string) => {
        dispatch(deleteLocalTradeChannel({
            id
        })); 
    }

    const creatTradeChannelInBE = async (tradeChannelLocalID: any) => { 
        const gettoken = getUserCookies();
        // console.log(gettoken, 'datagettoken');
        const decodeToken: TokenType = jwtDecode (gettoken)
        // console.log(decodeToken, 'decodeToken');
        const foundTradeC = locaTradeChannels?.find((foundTC: TradeChannel) => {
            return foundTC?.id === tradeChannelLocalID
        })
        const newDataD = {
            name: foundTradeC?.name, 
            // id_company: "661e46da0c5460e02b3c492b", 
            id_company: decodeToken?.user?.id_company,  
            channel_cluster_id: data?.id
        }
        // WE ENABLE BELOW CODE WHEN WE SEND DATA TO SERVER
        const result = await makePostReques (`${ BASE_URL }/${ TRADECHANNEL_API_URL }`, newDataD)
        deleteTC(tradeChannelLocalID)
    }

    const [ connectNode, setConnectNode ] = useState (true)
    const uniqID = generateId (); 

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

                {/* <Handle type="target" position={Position.Left} onConnect={(params) => {
                    console.log("Connecting from Nothing", params)
                }} /> */}
                <BaseFlowComponent 
                    id={ data?.id as string } 
                    headerTitle='Channel Cluster' 
                    flowCompName={ data?.name } 
                    activitiesNumber=''
                    ccBgColor={ finalColor as string }
                    executeSomthing={ () => console.log("hi") }
                >
                    <ChannelClusterSvgIcon height="20" width="20" color="none" />
                </BaseFlowComponent>

                <Handle id={`channelC`} type="source" position={Position.Right} onConnect={(params) => {
                    // console.log("Connecting to Trade Channel", params)
                    const completeData = [ ...locaChannelClusters as any, ...locaTradeChannels as any, ...localCategories as any, ...localActivities as any ]
                    const findSource = completeData?.find((parms: any) => {
                        return parms?.id === params.source
                    })
                    const findTarger = completeData?.find((parms: any) => {
                        return parms?.id === params.target
                    })
                    console.log(findSource, findTarger, "[[[]]]", params)
                    // return
                    if (findSource?.type === 'channelClusterCreation' && findTarger.type === 'categoryCreation') {
                        setConnectNode (false)
                        return false; // Prevent linkage
                    } else if (findSource?.type === 'channelClusterCreation' && findTarger.type === 'activityCreation') {
                        setConnectNode (false)
                        return false; // Prevent linkage
                    } else {
                        setConnectNode (true)
                        creatTradeChannelInBE (params.target)
                        linkToTradeChannel (params.target, params.source)
                    }
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