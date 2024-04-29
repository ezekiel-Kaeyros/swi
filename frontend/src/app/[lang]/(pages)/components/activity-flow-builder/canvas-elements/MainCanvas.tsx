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


const initialChannelClusterPositions = 10; 
const initialTradeChannelPositions = 10; 
const idIncrementForChannelClusters = 1; 
const idIncrementForTradeChannels = 1; 


const initialNodes: Node<any, string | undefined>[] = [
    { id: '1', type: 'channelClusterCreation',  position: { x: 10, y: 10 }, data: { name: 'Jackob' } },
    // { id: '2', type: 'channelClusterCreation',  position: { x: 10, y: 110 }, data: { name: 'Jackob' } }, 
    // { id: '3', type: 'channelClusterCreation',  position: { x: 10, y: 210 }, data: { name: 'Jackob' } },
    // { id: '4', type: 'channelClusterCreation',  position: { x: 10, y: 310 }, data: { name: 'Jackob' } },
    // <ChannelClusterFlowComp data={name: "hello"} />
    // { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
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

const MainCanvas = ({ toggle }: any) => {

  const { dispatch, connectTwoNodes, locaChannelClusters, locaTradeChannels, localCategories, localActivities, edgesConnectingNodes } = useSettings(); 

  console.log("all localChannelCluster: ", locaChannelClusters)
  console.log("all locaTradeChannels: ", locaTradeChannels)
  console.log("all localCategories: ", localCategories)
  console.log("all localActivities: ", localActivities)
  

  const [nodes, setNodes ] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges); 

  console.log("all current nodes: ", nodes); 

  console.log("all current edges: ", edges, "....", edgesConnectingNodes); 

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
 
  const onConnect = useCallback(
    (params: any) => {
      // setEdges((eds: any) => addEdge(params, eds)); 
      connectTwoNodes(params.source, params.target)
    },
    [connectTwoNodes],
  );

  const handleCloseModal = () => {
    setOpenModal(false);
    setTradeCModal (false)
    setCategoryModal (false)
  };

  useEffect (() => {
    setNodes ([...locaChannelClusters as any, ...locaTradeChannels as any, ...localCategories as any, ...localActivities as any])
  }, [locaChannelClusters, locaTradeChannels, localCategories, localActivities])

  console.log("all current nodes: ", "***", nodes)

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openTradeCModal, setTradeCModal] = useState<boolean>(false);
  const [openCategoryModal, setCategoryModal] = useState<boolean>(false);

  const yPos = useRef(0);

  const addChannelCluster = () => {
    yPos.current += 100;
    const newData = { id: '1', position: { x: 0, y: 0 }, data: { label: '1',  } }
    console.log("adding channel cluster")
  }


  const addTradeChannel = () => {
    console.log("adding trade channel")
  }

  const addCategory = () => {
    console.log("adding category")
  }

  const addActivity = () => {
    console.log("adding activity")
  }
  
  return (
    <>
      {/* START SAVE ACTIVITIES BUTTON */}
      <div className={`fixed top-[20px] ${ toggle ? "right-[-20%]" : "right-[-10%]" } z-10`}>
          <button onClick={ () => console.log("send to server")} className='rounded-xl p-[14px] bg-stepsMarkerBlue flex flex-row justify-between items-center gap-3'>
              {/* removeRect (canvas) */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12V6.66667H2V12H0.666667C0.29848 12 0 11.7015 0 11.3333V0.666667C0 0.29848 0.29848 0 0.666667 0H9.33333L12 2.66667V11.3333C12 11.7015 11.7015 12 11.3333 12H10ZM8.66667 12H3.33333V8H8.66667V12Z" fill="#F7F9FF"/>
              </svg>
              <span>Save</span>
          </button>
      </div>
      {/* END SAVE ACTIVITIES BUTTON */}
      <div className='relative' style={{ width: toggle ? '100vw' : '60vw', height: '85vh' }}>
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
            nodes={nodes}
            edges={ edgesConnectingNodes as any }
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect} 
            nodeTypes={ nodeTypes }
          >
            <Controls />
            <MiniMap color='black' />
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



  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges); 
  // const [tradeChannelsNodes, setTradeChannelsNodes ] = useState(initialNodes);
  // const [categoriesNodes, setCategoriesNodes ] = useState(initialNodes);


    // const addEdge = useCallback(({ source, target }) => {
  //   setEls((els) => {
  //     console.log(source, target);
  //     return [
  //       ...els,
  //       {
  //         id: Math.random(),
  //         source,
  //         target
  //       }
  //     ];
  //   });
  // }, []);