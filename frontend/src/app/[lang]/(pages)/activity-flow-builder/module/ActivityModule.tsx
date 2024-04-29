"use client";
import ActivityFlowBuilder from '@/app/common/components/activities-flow-builder/ActivityFlowBuilder';
import LoadingUI from '@/app/common/components/loaders/LoadingUI';
import useMakeGetRequest from '@/app/hooks/useMakeGetRequest'
import { BASE_URL } from '@/utils/constants'
import React from 'react'
import Sidebar from '../../components/activity-flow-builder/sidebar-elements/Sidebar';
import MainCanvas from '../../components/activity-flow-builder/canvas-elements/MainCanvas';
import { useSettings } from '@/app/hooks/useSettings';
import { ReactFlowProvider } from 'reactflow';

const ActivityModule = () => {
  
  const { channelClusters, dispatch } = useSettings();

  // console.log("///////")

  return (
    // <div className='p-4 flex flex-row'>
    //   <ReactFlowProvider>
    //     <Sidebar channelClusters={ channelClusters } />
    //     <MainCanvas />
    //   </ReactFlowProvider>
    // </div>
    <Sidebar channelClusters={ channelClusters } />
  )
}

export default ActivityModule







// const { data } = useMakeGetRequest (`${ BASE_URL }/channelCluster`); 
//     console.log("channel cluster data", data, data && data?.lenght > 0)
// const ActivityModule = () => {

//   const { data } = useMakeGetRequest (`${ BASE_URL }/channelCluster`); 
//   console.log("channel cluster data", data, data && data?.lenght > 0)
// return (
//   // <ActivityFlowBuilder channelClustersData={data} />
//   <>
//       {
//         data && data?.length > 0 ?
//             <ActivityFlowBuilder channelClustersData={data} />
//             : 
//             <LoadingUI loadingTitle='Loading Activities data' />
//       }
//   </>
// )
// }