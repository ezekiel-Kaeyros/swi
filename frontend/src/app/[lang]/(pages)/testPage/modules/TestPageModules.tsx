'use client';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import React, { Suspense } from 'react'
// import React from 'react';
import GenericModal from '../../components/modal/GenericModal';
import CancelingCreation from '../../components/agents-creation/cancel-creation/CancelingCreation';
import AgentModal from '../../components/agents-creation/AgentModal';
import AgentOverview from '../../components/agent-overview/AgentOverview';
import AgentTable from '@/app/common/components/tables/AgentTable';
import addAgentIcon from '../../../../../../public/icons/addAgent.png';
import importUserIcon from '../../../../../../public/icons/importUser.png';
import AgentDetails from '../../components/agent-details/AgentDetails';
import useTogglePopup from '@/app/hooks/useTogglePopup';
import AgentCSVUploadModal from '../../components/agent-details/agent-csv-modal/AgentCSVUploadModal';
import EmptyAgentMgntUI from '../../components/empty-agent-mgnt-ui/EmptyAgentMgntUI';
import SettingsNavigation from '../../components/settings-navigation/SettingsNavigation';
import ButtonLine from '@/app/common/components/button/ButtonLine';
import useMakeGetRequest from '@/app/hooks/useMakeGetRequest';
import { BASE_URL } from '@/utils/constants';
import useTranformAgentData from '@/app/hooks/useTranformAgentData';
import ChannelCluster from '@/app/common/components/settings/channel-cluster/ChannelCluster';
import Activities from '@/app/common/components/settings/activities/Activities';
import LoadingUI from '@/app/common/components/loaders/LoadingUI';

const TestPageodules = () => {

    const { 
        showAgentCreationModal, 
        showCancelConfirmation, 
        showUserCreationPreview, 
        showAgentDetail, showUploadCSVModal, 
        showEmptyUI, showDataFieldUI, 
        agentManagement, channelCluster,
        activities, roleAndModel,
    }: { 
        showAgentCreationModal: boolean, 
        showCancelConfirmation: boolean, 
        showUserCreationPreview: boolean, 
        showAgentDetail: boolean, showUploadCSVModal: boolean, 
        showEmptyUI: boolean, showDataFieldUI: boolean, 
        agentManagement: any, channelCluster: any,
        activities: any, roleAndModel: any,
    } = useClientFormStep (); 

    // ACTIONS FOR THE TWO BUTTONS: SHOW UI TO CREATE AGENT & SHOW UI TO UPLOAD USERS
    const { toggleAgentCreationModal, displayUploadModal } = useTogglePopup (true); 

    // HOOK TO TRANSFORM THE AGENT DATA AFTER MAKING REQUEST FOR IT
    const { agentData } = useTranformAgentData (); 

    console.log("agentDataagentData", agentData); 

    // THESE UI WILL APPEAR WHEN A BUTTON IS CLICKED IN AN OVERLAY
    if (showCancelConfirmation) {
      return (
        <GenericModal>
          <CancelingCreation />
        </GenericModal>
      )
    } else if (showAgentCreationModal) {
      return (
        <GenericModal>
          <AgentModal />
        </GenericModal>
      )
    } else if (showUserCreationPreview) {
      return (
        <GenericModal>
          <AgentOverview />
        </GenericModal>
      )
    } else if (showAgentDetail) {
      return (
        <GenericModal>
          <div className='transparent h-screen w-full flex justify-end'>
            <AgentDetails />
          </div>
        </GenericModal>
      )
    } else if (showUploadCSVModal) {
      return (
        <GenericModal>
          <AgentCSVUploadModal />
        </GenericModal>
      )
    }

  // THESE UI WILL APPEAR WHEN A BUTTON IS CLICKED IN AN OVERLAY
  if (showCancelConfirmation) {
    return (
      <GenericModal>
      <div className='p-[4rem] mt-10 font-articulat bg-optionContainerBg'>

        <SettingsNavigation />

        <div className='mt-10'>
          {/* UI FOR AGENT MANAGEMENT TAB */}
          {
            agentManagement.status && 
            <>
              { showEmptyUI && <EmptyAgentMgntUI />}
              {
                showDataFieldUI && 
                <>
                  <ButtonLine 
                    firstBtnImg={ addAgentIcon } firstBtnFunc={ toggleAgentCreationModal } 
                    firstBtnLabel='Add sales agent' secondBtnImg={ importUserIcon }
                    secondBtnLabel='Upload agents CSV' secondBtnFunc={ displayUploadModal }
                    roundeStyle='rounded-xl' fontSizeStyle='font-medium' 
                    wrapperStyle={ "flex justify-end gap-5" }
                  />

                  {/* <AgentTable /> */}
                  {
                    agentData && agentData.length > 0 ?
                      <AgentTable agentData={ agentData } />
                    : 
                    <LoadingUI loadingTitle='Loading Agents table' />
                  }
                  {/* <Suspense fallback={"Loading..."}>
                    <AgentTable agentData={ agentData } />
                  </Suspense> */}
                </>
              }
            </>
          }
          {/* UI FOR CHANNEL CLUSTER */}
          {
            channelCluster.status && 
            <ChannelCluster />
          }
          {/* UI FOR ACTIVITIES */}
          {
            activities.status && 
            <Activities />
          }
          {/* UI FOR ROLE & MODEL */}
          {
            roleAndModel.status && 
            <>
              Role & Model
            </>
          }
        </div>
      </div>
      </GenericModal>
    );
  } else if (showUploadCSVModal) {
    return (
      <GenericModal>
        <AgentCSVUploadModal />
      </GenericModal>
    );
  }

  return (
    <div className="p-[4rem] mt-10 font-articulat">
      <SettingsNavigation />

      <div className="mt-10">
        {/* UI FOR AGENT MANAGEMENT TAB */}
        {agentManagement.status && (
          <>
            {showEmptyUI && <EmptyAgentMgntUI />}
            {showDataFieldUI && (
              <>
                <ButtonLine
                  firstBtnImg={addAgentIcon}
                  firstBtnFunc={toggleAgentCreationModal}
                  firstBtnLabel="Add sales agent"
                  secondBtnImg={importUserIcon}
                  secondBtnLabel="Upload agents CSV"
                  secondBtnFunc={displayUploadModal}
                  roundeStyle="rounded-xl"
                  fontSizeStyle="font-medium"
                  wrapperStyle={'flex justify-end gap-5'}
                />
                <AgentTable agentData={ agentData } />
              </>
            )}
          </>
        )}
        {/* UI FOR CHANNEL CLUSTER */}
        {channelCluster.status && <>Channel Cluster</>}
        {/* UI FOR ACTIVITIES */}
        {activities.status && <>Activities</>}
        {/* UI FOR ROLE & MODEL */}
        {roleAndModel.status && <>Role & Model</>}
      </div>
    </div>
  );
};

export default TestPageodules;

// let objUrl = convertAndDownloadCSV (agentData)
// let objUrl = "/"
// if (agentData.length > 0) {
//     const titleKeys = Object.keys(agentData[0])

//     const refinedData = []
//     refinedData.push(titleKeys)

//     agentData.forEach(item => {
//         refinedData.push(Object.values(item))
//     })
//     let csvContent = ''
//     refinedData.forEach(row => {
//         csvContent += row.join(',') + '\n';
//     })
//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
//     objUrl = URL.createObjectURL(blob)
// }

// {/* <div className='flex justify-end gap-5'>
//                     <div>
//                       <button type='button' onClick={ toggleAgentCreationModal } className='font-articulat rounded-xl py-3 px-4 font-medium text-[13px] flex gap-2 items-center justify-center bg-stepsMarkerBlue'>
//                         <Image src={ addAgentIcon } height={ 15 } alt='importUserIcon'/>
//                         <span className='mt-[.2rem]'>
//                           Add sales agent
//                         </span>
//                       </button>
//                       {/* <Button icon={ addAgentIcon } type='button' className='rounded-xl font-medium bg-transparent flex items-center justify-center bg-stepsMarkerBlue' onClick={ toggleAgentCreationModal }>
//                         Add sales agent
//                       </Button> */}
//                     </div>
//                     <div>
//                       <button type='button' onClick={ displayUploadModal } className={`font-articulat rounded-xl py-3 px-4 font-medium text-[13px] flex gap-2 items-center justify-center bg-normalInputBg`}>
//                         <Image src={ importUserIcon } height={ 15 } alt='importUserIcon'/>
//                         <span className='mt-[.2rem]'>
//                           Upload agents CSV
//                         </span>
//                       </button>

//                       {/* <Button icon={ importUserIcon } type='button' className={`gap-2 whitespace-nowrap rounded-xl bg-normalInputBg flex justify-center p-4 text-[15px]`} onClick={ () => {
//                           dispatch(toggleShowUploadCSVModal({
//                             toggleValue: true,
//                           }))
//                       } }>
//                         Upload agents CSV
//                       </Button> */}
//                     </div>

//                     {/* <div>
//                       <Link href={ objUrl } className={`gap-2 whitespace-nowrap rounded-xl bg-normalInputBg flex justify-center p-4 text-[15px]`}>
//                         <Image src={ importUserIcon } width={ 20 } alt='importUserIcon'/>
//                         Upload agents CSV
//                       </Link>
//                     </div> */}
//                   </div> */}
