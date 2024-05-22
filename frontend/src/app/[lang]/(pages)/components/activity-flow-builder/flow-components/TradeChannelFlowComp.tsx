"use client"; 
import AddTradeChannelForm from '@/app/common/components/forms/activities-builder-forms/add-trade-channel-form/AddTradeChannelForm';
import CustomModal from '@/app/common/components/modal/Modal'
import { DustbinIcon, TradeChannelSvgIcon } from '@/app/common/components/svgs/SvgsIcons'
import { useSettings } from '@/app/hooks/useSettings'
import { copyLocalTradeChannel, deleteLocalCategory, deleteLocalTradeChannel, linkLocalTradeChanneloCategory } from '@/redux/features/channel-cluster-slice'
import React, { useState } from 'react'
import { Handle, Position, ReactFlowProvider } from 'reactflow'
import FlowCompHoverButtons from './flow-mini-components/FlowCompHoverButtons';
import BaseFlowComponent from './base-flow-components/BaseFlowComponent';
import { makePostReques } from '@/utils/makePostReq';
import { BASE_URL, CATEGORY_API_URL, TRADECHANNEL_API_URL } from '@/utils/constants';
import useMakeActions from '@/app/hooks/useMakeActions';
import { generateId } from '@/utils/generateRandomID';
import { useActivities } from '@/app/hooks/useActivities';
// import { getUserCookies } from '@/cookies/cookies';
// import { TokenType } from '@/redux/features/types';
// import { jwtDecode } from 'jwt-decode';
import { useUserInfo } from '@/app/hooks/useUserInfo';

const TradeChannelFlowComp = ({ data }: { data: any }) => {
    const [ shouldUpdateCC, setShouldUpdateCC ] = useState (false)
    const [openModal, setOpenModal] = useState<boolean>(false);
    // const { dispatch } = useSettings(); 
    const { dispatch, connectTwoNodes, deleteAndEdge, locaChannelClusters, locaTradeChannels, tradeChannels, localCategories, edgesConnectingNodes, activities, channelClusters } = useSettings(); 
    const { localActivities } = useActivities (); 

    const { decodeToken } = useUserInfo (); 

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const { makeDeleteAction } = useMakeActions();

    const deleteCC = () => {
        const confirmation = confirm (`Do You want to remove Channel Cluster ${ data.name}`)
        if(confirmation) {
            dispatch(deleteLocalTradeChannel({
                id: data?.id
            })); 
            makeDeleteAction(`${BASE_URL}/${TRADECHANNEL_API_URL}/${data?.id}`)
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

    const deleteCat = (id: string) => {
        const confirmation = confirm(`Do You want to remove Channel Cluster ${data.name}`);
        if (confirmation) {
          dispatch(deleteLocalCategory({
              id
          }));
        } else {
          console.log('not deleted!');
        }
    };

    const createCategoryInBE = async (categoryLocalID: any) => {
        const foundTradeC = localCategories?.find((foundTC: any) => {
            return foundTC?.id === categoryLocalID
        })
        const newDataD = {
            name: foundTradeC?.name, 
            description: [foundTradeC?.name], 
            trade_chanel_id: data?.id, 
            id_company: decodeToken?.user?.id_company[0]?._id
            // id_company: decodeToken?.user?.id_company, 
            // id_company: "661e46da0c5460e02b3c492b", 
            // id_company: useUserInfo().user?.id_company, 
        }

        // WE ENABLE BELOW CODE WHEN WE SEND DATA TO SERVER
        const result = await makePostReques (`${ BASE_URL }/${ CATEGORY_API_URL }`, newDataD)
        deleteCat(categoryLocalID)
    }

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

                <Handle id={`trdCIn`} type="target" position={Position.Left} onConnect={(params) => {
                    console.log("Connecting from Channel Cluster", params)
                    // createCategoryInBE (params.source); 
                }} />

                <BaseFlowComponent 
                    id={ data?.id } 
                    headerTitle='Trade Channel' 
                    flowCompName={ data?.name } 
                    activitiesNumber=''
                    bg_color='bg-channelTradeMarkerBgColor' 
                    executeSomthing={ () => console.log("hi") }
                >
                    <TradeChannelSvgIcon color='#BF9BED' height="20" width="20" />
                </BaseFlowComponent>

                <Handle id={`trdC`} type="source" position={Position.Right} onConnect={(params) => {
                    const completeData = [ ...locaChannelClusters as any, ...locaTradeChannels as any, ...localCategories as any, ...localActivities as any ]
                    const findSource = completeData?.find((parms: any) => {
                        return parms?.id === params.source
                    })
                    const findTarger = completeData?.find((parms: any) => {
                        return parms?.id === params.target
                    })
                    console.log(findSource, findTarger, "[[[]]]", params)
                    debugger
                    // return
                    if (findSource?.type === 'tradeChannelCreation' && findTarger.type === 'activityCreation') {
                        // setConnectNode (false)
                        return false; // Prevent linkage
                    } else {
                        console.log("Connecting to Category", params); 
                        createCategoryInBE (params.target)
                        linkToCategory (params.target, params.source)
                    }
                    
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