"use client"
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import React, { Suspense } from 'react'
import GenericModal from '../../components/modal/GenericModal';
import CancelingCreation from '../../components/agents-creation/cancel-creation/CancelingCreation';
import AgentModal from '../../components/agents-creation/AgentModal';
import AgentOverview from '../../components/agent-overview/AgentOverview';
import AgentTable from '@/app/common/components/tables/AgentTable';
import addAgentIcon from "../../../../../../public/icons/addAgent.png"
import importUserIcon from "../../../../../../public/icons/importUser.png"
import AgentDetails from '../../components/agent-details/AgentDetails';
import useTogglePopup from '@/app/hooks/useTogglePopup';
import AgentCSVUploadModal from '../../components/agent-details/agent-csv-modal/AgentCSVUploadModal';
import EmptyAgentMgntUI from '../../components/empty-agent-mgnt-ui/EmptyAgentMgntUI';
import SettingsNavigation from '../../components/settings-navigation/SettingsNavigation';
import ButtonLine from '@/app/common/components/button/ButtonLine';
import useTranformAgentData from '@/app/hooks/useTranformAgentData';
import ChannelCluster from '@/app/common/components/settings/channel-cluster/ChannelCluster';
import Activities from '@/app/common/components/settings/activities/Activities';
import LoadingUI from '@/app/common/components/loaders/LoadingUI';
import LoadingUIBoxes from '@/app/common/components/loaders/LoadingUIBoxes';


const SettingsModule = () => {

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

    const { agentData } = useTranformAgentData (); 

    // console.log("agentDataagentData", agentData); 

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

    return (

      <div className='p-[4rem] mt-10 font-articulat bg-optionContainerBg'>

        <SettingsNavigation />

        <div className='mt-10'>
          {/* START UI FOR AGENT MANAGEMENT TAB */}
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
                </>
              }
            </>
          }
          {/* END UI FOR AGENT MANAGEMENT TAB */}


          {/* START UI FOR CHANNEL CLUSTER */}
          {
            channelCluster.status && 
            <ChannelCluster />
          }
          {/* END UI FOR CHANNEL CLUSTER */}


          {/* START UI FOR ACTIVITIES */}
          {
            activities.status && 
            <Activities />
          }
          {/* END UI FOR ACTIVITIES */}


          {/* START UI FOR ROLE & MODEL */}
          {
            roleAndModel.status && 
            <>
              Role & Model {/* COMING SOON */}
            </>
          }
          {/* END UI FOR ROLE & MODEL */}
        </div>

      </div>
    )

}

export default SettingsModule

