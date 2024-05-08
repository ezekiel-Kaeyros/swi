"use client"

import CustomModal from '@/app/common/components/modal/Modal';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    applyEdgeChanges, 
    applyNodeChanges, 
    Node,
    ReactFlowProvider,
    updateEdge, 
    MarkerType, 
  } from 'reactflow';
   
import 'reactflow/dist/style.css';
import { useSettings } from '@/app/hooks/useSettings';
import ChannelClusterFlowComp from '../flow-components/ChannelClusterFlowComp';
import TradeChannelFlowComp from '../flow-components/TradeChannelFlowComp';
import CategoryFlowComp from '../flow-components/CategoryFlowComp';
import AddChannelClusterForm from '@/app/common/components/forms/activities-builder-forms/add-channel-cluster/AddChannelClusterForm';
import AddTradeChannelForm from '@/app/common/components/forms/activities-builder-forms/add-trade-channel-form/AddTradeChannelForm';
import AddSubCategoryForm from '@/app/common/components/forms/activities-builder-forms/add-subcategory-form/AddSubCategoryForm';
import ActivityFlowComp from '../flow-components/ActivityFlowComp';
import CanvasFloatingActionButtons from './main-canvas-micro-components/CanvasFloatingActionButtons';
import { IActivityNew, IChannelCluster, TradeChannel } from '@/redux/features/types';
import CustomEdgeComponent from '../flow-components/base-flow-components/CustomEdgeComponent';
import { makePostReques } from '@/utils/makePostReq';
import { ACTIVITIES_API_URL, ACTIVITIES_ITEMS_API_URL, BASE_URL, CATEGORY_API_URL, CHANNELCLUSTER_API_URL, TRADECHANNEL_API_URL } from '@/utils/constants';
import { priorities } from '@/utils/activities';
import { useActivities } from '@/app/hooks/useActivities';
import useMakeActions from '@/app/hooks/useMakeActions';
import { removeDuplicates } from '@/utils/removeDuplicate';

import { FilterIcon } from '@/app/common/components/svgs/SvgsIcons';
import GenericModal from '../../../components/modal/GenericModal';
import CancelingCreation from '../modal/FilterActivityFlowModal';
import { extractFirstThreeChars } from '@/utils/extractFirstThreeCharacter';
import ClusterSearchModal from '../modal/FilterActivityFlowModal';
import Modal from './modal';

const initialChannelClusterPositions = 10; 
const initialTradeChannelPositions = 10; 
const idIncrementForChannelClusters = 1; 
const idIncrementForTradeChannels = 1; 


const initialNodes: Node<any, string | undefined>[] = [
    { id: '1', type: 'channelClusterCreation',  position: { x: 10, y: 10 }, data: { name: 'Jackob' } },
];



const initialEdges: any = [
  // { id: 'e1-2', source: '1', target: '2' }, 
  // { id: 'e2-3', source: '2', target: '3' }, 
  // { id: 'e1-2', source: '1', target: '2' }, 
  // { id: 'e1-2', source: '1', target: '2' }, 
]; 

const nodeTypes = { 
  channelClusterCreation: ChannelClusterFlowComp, 
  tradeChannelCreation: TradeChannelFlowComp, 
  categoryCreation: CategoryFlowComp, 
  activityCreation: ActivityFlowComp, 
};

const edgeTypes = {
  // bidirectional: BiDirectionalEdge,
  // selfconnecting: SelfConnectingEdge,
  buttonedge: CustomEdgeComponent,
};

const MainCanvas = ({ toggle }: any) => {

  const { dispatch, connectTwoNodes, deleteAndEdge, locaChannelClusters, locaTradeChannels, tradeChannels, localCategories, edgesConnectingNodes, activities, channelClusters } = useSettings(); 
  const { localActivities } = useActivities ()

  console.log("all localChannelCluster: ", locaChannelClusters, channelClusters)
  console.log("all locaTradeChannels: ", locaTradeChannels)
  console.log("all localCategories: ", localCategories)
  console.log("all localActivities: ", localActivities)
  console.log("all activities: ", activities)
  console.log("all trade channels: ", tradeChannels)

  const [nodes, setNodes ] = useState([] as any);
  const [edges, setEdges] = useState([] as any); 

  // console.log("all current nodes: ", nodes); 

  // console.log("all current edges: ", edges, "....", edgesConnectingNodes); 

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (params: any) => {
      // setEdges((eds: any) => addEdge(params, eds)); 
      console.log("[[[+++]]]", params)
      // debugger
      if (extractFirstThreeChars(params.sourceHandle) === "cha" && extractFirstThreeChars(params.targetHandle) === "cat") {
        return
      }

      if (extractFirstThreeChars(params.sourceHandle) === "cha" && extractFirstThreeChars(params.targetHandle) === "act") {
        return
      }

      if (extractFirstThreeChars(params.sourceHandle) === "trd" && extractFirstThreeChars(params.targetHandle) === "act") {
        return
      }
      connectTwoNodes(params.source, params.target, MarkerType.Arrow)
    },
    [connectTwoNodes],
  );

  const handleCloseModal = () => {
    setOpenModal(false);
    setTradeCModal (false)
    setCategoryModal (false)
  };

  useEffect (() => {
    setNodes ([...removeDuplicates(locaChannelClusters as []) , ...removeDuplicates(locaTradeChannels as any), ...removeDuplicates(localCategories as any), ...removeDuplicates(localActivities as any)])
  }, [locaChannelClusters, locaTradeChannels, localCategories, localActivities])

  // console.log("all current nodes: ", "***", nodes)

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openTradeCModal, setTradeCModal] = useState<boolean>(false);
  const [openCategoryModal, setCategoryModal] = useState<boolean>(false); 

  const yPos = useRef(0);

  const addChannelCluster = () => {
    yPos.current += 100;
    const newData = { id: '1', position: { x: 0, y: 0 }, data: { label: '1',  } }
    // console.log("adding channel cluster")
  }


  const addTradeChannel = () => {
    // console.log("adding trade channel")
  }

  const addCategory = () => {
    // console.log("adding category")
  }

  const addActivity = () => {
    // console.log("adding activity")
  }

  const { makeDeleteAction } = useMakeActions();



  const edgeUpdateSuccessful = useRef(true);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge: any, newConnection: any) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els: any) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_: any, edge: any) => {
    if (!edgeUpdateSuccessful.current) {
      deleteAndEdge(edge.id)
      setEdges((eds: any) => eds.filter((e: any) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openSearchClusterModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeSearchCluserModal = () => {
    setIsModalOpen(false);
  };

  
  return (
    <>

      <div className="relative">
        <div className="fixed top-[20px] right-[20px]" style={{zIndex: 1000}}>
          <button onClick={openSearchClusterModal} className="p-3 bg-gray-500 rounded">
            <FilterIcon />
          </button>
        </div>
        <ClusterSearchModal isOpen={isModalOpen} onClose={closeSearchCluserModal} />
      </div>


      {/* START SAVE ACTIVITIES BUTTON */}
      {/* <div className={`fixed top-[20px] ${ toggle ? "right-[-20%]" : "right-[-10%]" } z-10`}> */}
          {/* <button onClick={ () => { */}
            {/* // console.log("send to server") */}
            {/* // sendToBackend ();  */}
          {/* // }} className='rounded-xl p-[14px] bg-stepsMarkerBlue flex flex-row justify-between items-center gap-3'> */}
              {/* removeRect (canvas) */}
              {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12V6.66667H2V12H0.666667C0.29848 12 0 11.7015 0 11.3333V0.666667C0 0.29848 0.29848 0 0.666667 0H9.33333L12 2.66667V11.3333C12 11.7015 11.7015 12 11.3333 12H10ZM8.66667 12H3.33333V8H8.66667V12Z" fill="#F7F9FF"/>
              </svg> */}
              {/* <span>Remove all data</span> */}
          {/* </button> */}
      {/* </div> */}

      {/* END SAVE ACTIVITIES BUTTON */}
      <div className='relative' style={{ width: toggle ? '100vw' : '60vw', height: '85vh', zIndex: 100 }}>
        {/* START BUTTOM ACTION BUTTONS */}
        <CanvasFloatingActionButtons 
          setOpenModal={ setOpenModal }
          addChannelCluster={ addChannelCluster }
          setTradeCModal={ setTradeCModal }
          addTradeChannel={ addTradeChannel }
          setCategoryModal={ setCategoryModal }
          addCategory={ addCategory }
        />
        {/* END BUTTOM ACTION BUTTONS */}

        <ReactFlowProvider>
          <ReactFlow
            nodes={removeDuplicates(nodes as any)}
            edges={ removeDuplicates(edgesConnectingNodes as any) }
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect} 
            nodeTypes={ nodeTypes }
            onEdgeUpdate={onEdgeUpdate}
            onEdgeUpdateStart={onEdgeUpdateStart}
            onEdgeUpdateEnd={onEdgeUpdateEnd}
            attributionPosition="top-right"
            edgeTypes={edgeTypes}
            // fitView
          >
            <Controls />
            <MiniMap style={{
              background: "black"
            }} />
            <Background  gap={12} size={1} />
          </ReactFlow>
        </ReactFlowProvider>


        <CustomModal
          title="Create a channel cluster"
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
        >
          <AddChannelClusterForm handleCloseModal={handleCloseModal} />
        </CustomModal>

        <CustomModal
          title="Create a Trade channel"
          isOpen={openTradeCModal}
          onClose={() => setTradeCModal(false)}
          classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
        >
          <AddTradeChannelForm handleCloseModal={handleCloseModal} />
        </CustomModal>

        <CustomModal
          title="Create a Category"
          isOpen={openCategoryModal}
          onClose={() => setCategoryModal(false)}
          classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
        >
          <AddSubCategoryForm handleCloseModal={handleCloseModal} />
        </CustomModal>
      </div>
    </>
  )
}

export default MainCanvas




























// const sendToBackend = async () => {
//   // channelClusters?.forEach((element: any) => {
//   //   makeDeleteAction(`${BASE_URL}/${ CHANNELCLUSTER_API_URL }/${element?._id}`)
//   // });

//   // tradeChannels?.forEach((element: any) => {
//   //   makeDeleteAction(`${BASE_URL}/${ TRADECHANNEL_API_URL }/${element?._id}`)
//   // });

//   // localCategories?.forEach((element: any) => {
//   //   makeDeleteAction(`${BASE_URL}/${ CATEGORY_API_URL }/${element?.id}`)
//   // });

//   // // console.log(localActivities)

//   // activities?.forEach((element: any) => {
//   //   element?.activitieItems?.forEach((elementI: any) => {
//   //     makeDeleteAction(`${BASE_URL}/${ ACTIVITIES_ITEMS_API_URL }/${elementI?._id}`)
//   //   });
//   //   makeDeleteAction(`${BASE_URL}/${ ACTIVITIES_API_URL }/${element?._id}`)
//   // });
//   // SAVE CHANNEL CLUSTER
//   // localActivities?.forEach( async (localActiv: IActivityNew) => {
//   //   if (localActiv?.channelCluster instanceof Array) {
//   //     localActiv?.channelCluster[0].forEach((channelInActivity: string) => {
//   //       console.log(channelInActivity, "channelInActivitychannelInActivity")
//   //       const channelClusterID = locaChannelClusters?.find((iChannel: IChannelCluster) => {
//   //         console.log(iChannel?.id, "element.channelCluster === iChannel?.id"); 
//   //         if (iChannel.id === channelInActivity) {
//   //           return iChannel
//   //         }
//   //         // return element.channelCluster === iChannel?.id
//   //       }); 
//   //       console.log(channelClusterID, "channelClusterID"); 
//   //     });
//   //   } else {
//   //     console.log(localActiv?.channelCluster, "channelInActivitychannelInActivity"); 

//   //     // ******************** SAVING CHANNEL CLUSTER ******************************
//   //     // **************************************************************************
//   //     const channelClusterID = locaChannelClusters?.find((iChannel: IChannelCluster) => {
//   //       console.log(iChannel?.id, "element.channelCluster === iChannel?.id"); 
//   //       if (iChannel.id === localActiv?.channelCluster as any) {
//   //         return iChannel
//   //       }
//   //     }); 

//   //     console.log(channelClusterID, "channelClusterID"); 

//   //     const newDataS = {
//   //       name: channelClusterID?.name, 
//   //       id_company: "661d4c7ef54892933566b0be", 
//   //       color: channelClusterID?.color, 
//   //     }
//   //     const result = await makePostReques (`${ BASE_URL }/channelCluster`, newDataS); 
//   //     console.log(result, "the response from saving channel cluster.")
//   //     // coming from backend result.data

//   //     // ******************* NOW SAVING TRADE CHANNEL *****************************
//   //     // **************************************************************************
//   //     const tradeChannelID = locaTradeChannels?.find((iTchannel: TradeChannel) => {
//   //       console.log(iTchannel?.id, "element.channelCluster === iTchannel?.id"); 
//   //       if (iTchannel.id === localActiv?.tradeChannel as any) {
//   //         return iTchannel
//   //       }
//   //     }); 

//   //     console.log(tradeChannelID, "the found trade channel")

//   //     const newDataD = {
//   //       name: tradeChannelID?.name, 
//   //       id_company: "661e46da0c5460e02b3c492b", 
//   //       channel_cluster_id: result?.data?._id
//   //     }
  
//   //     // WE ENABLE BELOW CODE WHEN WE SEND DATA TO SERVER
//   //     const resultTC = await makePostReques (`${ BASE_URL }/tradeChannel`, newDataD)
//   //     console.log(resultTC, resultTC?.data, "the response from saving trade channel.")

//   //     // ********************* NOW SAVING CATEGORY ********************************
//   //     // **************************************************************************
//   //     const categoryID = locaTradeChannels?.find((iTchannel: TradeChannel) => {
//   //       console.log(iTchannel?.id, "element.channelCluster === iTchannel?.id"); 
//   //       if (iTchannel.id === localActiv?.tradeChannel as any) {
//   //         return iTchannel
//   //       }
//   //     }); 

//   //     console.log(categoryID, "the found trade channel")

//   //     const newDataCat = {
//   //       name: categoryID?.name, 
//   //       id_company: "661e46da0c5460e02b3c492b", 
//   //       description: [categoryID?.name], 
//   //       trade_chanel_id: resultTC?.data?._id
//   //     }

//   //     // WE ENABLE BELOW CODE WHEN WE SEND DATA TO SERVER
//   //     const resultCT = await makePostReques (`${ BASE_URL }/category`, newDataCat)
//   //     console.log(resultCT, resultCT?.data, "the response from saving trade channel.")

//   //     // ********************* NOW SAVING ACTIVITY ********************************
//   //     // **************************************************************************
//   //     const newDataActivity = {
//   //       name: localActiv?.name, 
//   //       description: localActiv?.description, 
//   //     }
  
//   //     // WE ENABLE BELOW CODE WHEN WE SEND DATA TO SERVER
//   //     const resultActivity = await makePostReques (`${ BASE_URL }/activities`, newDataActivity)
//   //     console.log(resultActivity, resultActivity?.data, "the response from saving trade channel.")

//   //     // ********************* NOW SAVING ACTIVITYITEM ********************************
//   //     // **************************************************************************

//   //     const foundPriority = priorities.find((prio: any) => {
//   //       return prio.id === localActiv?.priority
//   //     })
//   //     const newDataActivityItem = {
//   //       priority: foundPriority?.name,
//   //       colors: channelClusterID?.color, 
//   //       channelClusters: result?.data?._id, 
//   //       tradeChannels: resultTC?.data?._id, 
//   //       activitie: resultActivity?.data?._id, 
//   //       categories: resultCT?.data?._id, 
//   //       time: localActiv?.duration, // Temps fixe ou à calculer en fonction des canaux, clusters et catégories 
//   //       frequency: localActiv?.frequency, 
//   //     }

//   //     console.log(newDataActivityItem, "newDataActivityItemnewDataActivityItem")
  
//   //     // WE ENABLE BELOW CODE WHEN WE SEND DATA TO SERVER
//   //     const resultActivityItem = await makePostReques (`${ BASE_URL }/activitiesItem`, newDataActivityItem)
//   //     console.log(resultActivity, resultActivity?.data, "the response from saving trade channel.")
//   //   }
    
//   // });
//   // SAVE TRADE CHANNEL 
//   // SAVE CATEGORY
//   // SAVE ACTIVITY
// }