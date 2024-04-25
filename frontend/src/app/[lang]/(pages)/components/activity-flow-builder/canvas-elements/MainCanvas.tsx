// import React from 'react'

// const MainCanvas = () => {
//   return (
//     <div>MainCanvas</div>
//   )
// }

// export default MainCanvas









"use client"
import AddChannelClusterForm from '@/app/common/components/forms/add-channel-cluster/AddChannelClusterForm';
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
import ChannelClusterFlowComp from '../flow-components/ChannelClusterFlowComp';
import { useSettings } from '@/app/hooks/useSettings';
import AddTradeChannelForm from '@/app/common/components/forms/add-trade-channel-form/AddTradeChannelForm';
import AddSubCategoryForm from '@/app/common/components/forms/add-subcategory-form/AddSubCategoryForm';
import TradeChannelFlowComp from '../flow-components/TradeChannelFlowComp';
import CategoryFlowComp from '../flow-components/CategoryFlowComp';


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



const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' }, 
  // { id: 'e2-3', source: '2', target: '3' }, 
  // { id: 'e1-2', source: '1', target: '2' }, 
  // { id: 'e1-2', source: '1', target: '2' }, 
]; 

const nodeTypes = { 
  channelClusterCreation: ChannelClusterFlowComp, 
  tradeChannelCreation: TradeChannelFlowComp, 
  categoryCreation: CategoryFlowComp,
};

const MainCanvas = () => {

  const { dispatch, locaChannelClusters, locaTradeChannels, localCategories } = useSettings(); 

  console.log("all localChannelCluster: ", locaChannelClusters)
  console.log("all locaTradeChannels: ", locaTradeChannels)
  console.log("all localCategories: ", localCategories)

  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges); 

  const [nodes, setNodes ] = useState(initialNodes);
  // const [tradeChannelsNodes, setTradeChannelsNodes ] = useState(initialNodes);
  // const [categoriesNodes, setCategoriesNodes ] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges); 

  console.log("all current nodes: ", nodes)

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
 
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleCloseModal = () => {
    setOpenModal(false);
    setTradeCModal (false)
    setCategoryModal (false)
  };

  useEffect (() => {
    setNodes ([...locaChannelClusters as any, ...locaTradeChannels as any, ...localCategories as any])
    // setNodes (locaChannelClusters as any)
    // setTradeChannelsNodes (locaTradeChannels as any)
    // setCategoriesNodes (localCategories as any)
  }, [locaChannelClusters, locaTradeChannels, localCategories])

  console.log("all current nodes: ", "***", nodes)

  // const loadCCluster = useCallback (() => {
  //   setNodes (locaChannelClusters as any)
  // }, [locaChannelClusters])

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openTradeCModal, setTradeCModal] = useState<boolean>(false);
  const [openCategoryModal, setCategoryModal] = useState<boolean>(false);

  const yPos = useRef(0);

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
    <div className='relative' style={{ width: '100vw', height: '85vh' }}>

      {/* START SAVE ACTIVITIES BUTTON */}
      <div className='fixed top-[80px] right-10'>
          <button onClick={ () => console.log("hii")} className='rounded-xl p-[14px] bg-stepsMarkerBlue flex flex-row justify-between items-center gap-3'>
              {/* removeRect (canvas) */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12V6.66667H2V12H0.666667C0.29848 12 0 11.7015 0 11.3333V0.666667C0 0.29848 0.29848 0 0.666667 0H9.33333L12 2.66667V11.3333C12 11.7015 11.7015 12 11.3333 12H10ZM8.66667 12H3.33333V8H8.66667V12Z" fill="#F7F9FF"/>
              </svg>
              <span>Save</span>
          </button>
      </div>
      {/* END SAVE ACTIVITIES BUTTON */}
      {/* START BUTTOM ACTION BUTTONS */}
      <div className='fixed right-[20%] rounded-2xl bg-newPrimaryDark px-[1rem] py-[1rem] flex flex-row gap-10 bottom-10 z-30'>
        <div className='flex flex-row gap-2'>
          <button onClick={() => {
              // addRect(canvas); 
              console.log("")
          }} className='relative group rounded-xl p-[14px] bg-normalInputBg'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.4167 0.916648L17.0875 6.13998C17.1686 6.16687 17.2395 6.21804 17.2906 6.28657C17.3416 6.35509 17.3704 6.43766 17.3729 6.52307C17.3755 6.60848 17.3517 6.69261 17.3048 6.76406C17.2579 6.83551 17.1902 6.89081 17.1109 6.92248L9.83336 9.83331L6.14586 17.2083C6.10834 17.2834 6.04901 17.3454 5.97564 17.3862C5.90227 17.427 5.81828 17.4447 5.73469 17.437C5.65109 17.4292 5.57179 17.3964 5.50717 17.3428C5.44254 17.2892 5.39562 17.2174 5.37253 17.1366L0.884197 1.42665C0.863379 1.35379 0.862824 1.27663 0.882593 1.20347C0.902363 1.13032 0.941708 1.06394 0.996393 1.01148C1.05108 0.959026 1.11904 0.922475 1.19295 0.905765C1.26686 0.889055 1.34393 0.892817 1.41586 0.916648" fill="#BABABA"/>
              </svg>
              <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                  <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Select Tool (V)</span>
              </div>
          </button>
          <button className='relative group rounded-xl  p-[14px] bg-normalInputBg'>
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.37497 1.1875C7.37497 0.93886 7.47375 0.700403 7.64956 0.524587C7.82538 0.348772 8.06383 0.25 8.31247 0.25C8.56111 0.25 8.79957 0.348772 8.97539 0.524587C9.1512 0.700403 9.24997 0.93886 9.24997 1.1875V7.125C9.24997 7.29076 9.31582 7.44973 9.43303 7.56694C9.55024 7.68415 9.70921 7.75 9.87497 7.75C10.0407 7.75 10.1997 7.68415 10.3169 7.56694C10.4341 7.44973 10.5 7.29076 10.5 7.125V2.4375C10.5 2.18886 10.5987 1.9504 10.7746 1.77459C10.9504 1.59877 11.1888 1.5 11.4375 1.5C11.6861 1.5 11.9246 1.59877 12.1004 1.77459C12.2762 1.9504 12.375 2.18886 12.375 2.4375V8.375C12.375 8.54076 12.4408 8.69973 12.558 8.81694C12.6752 8.93415 12.8342 9 13 9C13.1657 9 13.3247 8.93415 13.4419 8.81694C13.5591 8.69973 13.625 8.54076 13.625 8.375V4.9375C13.6246 4.68886 13.7231 4.45027 13.8987 4.27422C14.0743 4.09817 14.3126 3.99908 14.5612 3.99875C14.8099 3.99842 15.0485 4.09687 15.2245 4.27245C15.4006 4.44803 15.4996 4.68636 15.5 4.935V10.875C15.5 11.8912 15.07 13.0125 14.5712 13.99C14.1025 14.8873 13.5664 15.7477 12.9675 16.5637C12.405 17.3412 11.5037 17.75 10.58 17.75H7.66997C6.47997 17.75 5.42372 17.075 4.85122 16.075C4.00085 14.6154 3.06895 13.2048 2.05997 11.85C1.60994 11.2419 1.14649 10.6438 0.669974 10.0563L0.649973 10.0312L0.646224 10.0262H0.644974C0.544553 9.90641 0.492698 9.75328 0.49964 9.59708C0.506582 9.44088 0.571818 9.29296 0.682474 9.1825C1.12122 8.745 1.63997 8.56625 2.16622 8.58C2.66622 8.5925 3.13872 8.77875 3.53622 9C3.78872 9.13875 4.02872 9.30375 4.24872 9.47375V2.4375C4.24872 2.18886 4.3475 1.9504 4.52331 1.77459C4.69913 1.59877 4.93758 1.5 5.18622 1.5C5.43486 1.5 5.67332 1.59877 5.84914 1.77459C6.02495 1.9504 6.12372 2.18886 6.12372 2.4375V7.125C6.12372 7.29093 6.18964 7.45006 6.30696 7.56738C6.42429 7.68471 6.58342 7.75063 6.74935 7.75063C6.91527 7.75063 7.0744 7.68471 7.19173 7.56738C7.30906 7.45006 7.37497 7.29093 7.37497 7.125V1.1875Z" fill="#BABABA"/>
              </svg>
              <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                  <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Hand Tool (H)</span>
              </div>
          </button>
        </div>
        <div className='flex flex-row gap-2'>
          <button onClick={ () => {
            setOpenModal(true); 
            addChannelCluster ();
          } } className='relative group rounded-xl  p-[14px] bg-normalInputBg'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.1665 6.66663C5.54722 6.66663 6.6665 5.54734 6.6665 4.16663C6.6665 2.78591 5.54722 1.66663 4.1665 1.66663C2.78579 1.66663 1.6665 2.78591 1.6665 4.16663C1.6665 5.54734 2.78579 6.66663 4.1665 6.66663Z" fill="#BABABA"/>
                  <path d="M15.8335 12.5C17.2142 12.5 18.3335 11.3807 18.3335 10C18.3335 8.61929 17.2142 7.5 15.8335 7.5C14.4528 7.5 13.3335 8.61929 13.3335 10C13.3335 11.3807 14.4528 12.5 15.8335 12.5Z" fill="#BABABA"/>
                  <path d="M4.1665 18.3334C5.54722 18.3334 6.6665 17.2141 6.6665 15.8334C6.6665 14.4527 5.54722 13.3334 4.1665 13.3334C2.78579 13.3334 1.6665 14.4527 1.6665 15.8334C1.6665 17.2141 2.78579 18.3334 4.1665 18.3334Z" fill="#BABABA"/>
                  <path d="M4.1665 13.9583C3.82484 13.9583 3.5415 13.675 3.5415 13.3333V6.66663C3.5415 6.32496 3.82484 6.04163 4.1665 6.04163C4.50817 6.04163 4.7915 6.32496 4.7915 6.66663C4.7915 8.49163 5.67484 9.37496 7.49984 9.37496H13.3332C13.6748 9.37496 13.9582 9.65829 13.9582 9.99996C13.9582 10.3416 13.6748 10.625 13.3332 10.625H7.49984C6.3665 10.625 5.45817 10.3333 4.7915 9.78329V13.3333C4.7915 13.675 4.50817 13.9583 4.1665 13.9583Z" fill="#BABABA"/>
              </svg>
              <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                  <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Channel Cluster</span>
              </div>
          </button>
          <button onClick={() => {
            setTradeCModal (true)
            addTradeChannel ();
          }} className='relative group rounded-xl  p-[14px] bg-normalInputBg'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4998 12.9167C12.4998 15.9083 10.0748 18.3333 7.08317 18.3333C4.0915 18.3333 1.6665 15.9083 1.6665 12.9167C1.6665 9.925 4.0915 7.5 7.08317 7.5C7.22484 7.5 7.37484 7.50833 7.5165 7.51667C10.1582 7.725 12.2748 9.84167 12.4832 12.4833C12.4915 12.625 12.4998 12.775 12.4998 12.9167Z" fill="#BABABA"/>
                  <path d="M18.3336 7.08329C18.3336 9.79996 16.3336 12.0416 13.7336 12.4333V12.3833C13.4752 9.14996 10.8502 6.52496 7.59189 6.26663H7.56689C7.95856 3.66663 10.2002 1.66663 12.9169 1.66663C15.9086 1.66663 18.3336 4.09163 18.3336 7.08329Z" fill="#BABABA"/>
                  <path d="M4.65817 1.66663H2.49984C2.0415 1.66663 1.6665 2.04163 1.6665 2.49996V4.65829C1.6665 5.39996 2.5665 5.77496 3.0915 5.24996L5.24984 3.09163C5.7665 2.56663 5.39984 1.66663 4.65817 1.66663Z" fill="#BABABA"/>
                  <path d="M15.3418 18.3333H17.5001C17.9584 18.3333 18.3334 17.9583 18.3334 17.5V15.3417C18.3334 14.6 17.4334 14.225 16.9084 14.75L14.7501 16.9083C14.2334 17.4333 14.6001 18.3333 15.3418 18.3333Z" fill="#BABABA"/>
              </svg>
              <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                  <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Trade Channel</span>
              </div>
          </button>
          <button onClick={ () => {
            setCategoryModal (true)
            addCategory ();
          }} className='relative group rounded-xl  p-[14px] bg-normalInputBg'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5585 1.66663H13.9752C12.1585 1.66663 11.2002 2.62496 11.2002 4.44163V6.02496C11.2002 7.84163 12.1585 8.79996 13.9752 8.79996H15.5585C17.3752 8.79996 18.3335 7.84163 18.3335 6.02496V4.44163C18.3335 2.62496 17.3752 1.66663 15.5585 1.66663Z" fill="#BABABA"/>
                  <path d="M6.03317 11.1917H4.44984C2.62484 11.1917 1.6665 12.15 1.6665 13.9667V15.55C1.6665 17.375 2.62484 18.3333 4.4415 18.3333H6.02484C7.8415 18.3333 8.79984 17.375 8.79984 15.5583V13.975C8.80817 12.15 7.84984 11.1917 6.03317 11.1917Z" fill="#BABABA"/>
                  <path d="M5.2415 8.81663C7.21592 8.81663 8.8165 7.21604 8.8165 5.24163C8.8165 3.26721 7.21592 1.66663 5.2415 1.66663C3.26709 1.66663 1.6665 3.26721 1.6665 5.24163C1.6665 7.21604 3.26709 8.81663 5.2415 8.81663Z" fill="#BABABA"/>
                  <path d="M14.7581 18.3334C16.7325 18.3334 18.3331 16.7328 18.3331 14.7583C18.3331 12.7839 16.7325 11.1833 14.7581 11.1833C12.7837 11.1833 11.1831 12.7839 11.1831 14.7583C11.1831 16.7328 12.7837 18.3334 14.7581 18.3334Z" fill="#BABABA"/>
              </svg>
              <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                  <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Category</span>
              </div>
          </button>
        </div>
      </div>
      {/* END BUTTOM ACTION BUTTONS */}

      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect} 
          nodeTypes={ nodeTypes }
          // style={{
          //   backgroundImage: "url('../../../../public/images/image.png')" 
          // }}
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
  )
}

export default MainCanvas