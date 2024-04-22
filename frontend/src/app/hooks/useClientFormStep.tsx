'use client';
import { AgentFormValuesType, AgentNavigationType, AgentNavigationsType, IFormSteps } from '@/redux/features/types';
import { AppDispatch, RootState } from '@/redux/store';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const useClientFormStep = () => {

  const settingPageNavigation: AgentNavigationsType = useSelector(
    (state: RootState) => state.AgentCreationReducer.settingPageNavigation
  ); 

  const showEmptyUI: boolean = useSelector(
    (state: RootState) => state.AgentCreationReducer.showEmptyUI!
  ); 

  const showDataFieldUI: boolean = useSelector(
    (state: RootState) => state.AgentCreationReducer.showDataFieldUI!
  ); 

  const agentManagement: AgentNavigationType | undefined = settingPageNavigation.find((option: AgentNavigationType) => parseInt(option?.id as string) === 1); 
  const channelCluster: AgentNavigationType | undefined = settingPageNavigation.find((option: AgentNavigationType) => parseInt(option?.id as string) === 2); 
  const activities: AgentNavigationType | undefined = settingPageNavigation.find((option: AgentNavigationType) => parseInt(option?.id as string) === 3); 
  const roleAndModel: AgentNavigationType | undefined = settingPageNavigation.find((option: AgentNavigationType) => parseInt(option?.id as string) === 4); 

  const dateOfBirth: any = useSelector(
    (state: RootState) => state.AgentCreationReducer.dateOfBirth
  ); 

  const showUploadCSVModal: boolean = useSelector(
    (state: RootState) => state.AgentCreationReducer.showUploadCSVModal
  );

  const detailPageNavigation: AgentNavigationsType = useSelector(
    (state: RootState) => state.AgentCreationReducer.detailPageNavigation
  );

  const formSteps: IFormSteps = useSelector(
    (state: RootState) => state.AgentCreationReducer.formStep!
  );

  const showOptionCountainer: boolean = useSelector(
    (state: RootState) => state.AgentCreationReducer.showOptionCountainer!
  );

  const showAgentDetail: boolean = useSelector(
    (state: RootState) => state.AgentCreationReducer.showAgentDetail!
  );

  const users: AgentFormValuesType = useSelector(
    (state: RootState) => state.AgentCreationReducer.users!
  );

  const showCancelConfirmation: boolean = useSelector(
    (state: RootState) => state.AgentCreationReducer.showCancelConfirmation!
  );

  const showUserCreationPreview: boolean = useSelector(
    (state: RootState) => state.AgentCreationReducer.showUserCreationPreview!
  );

  const showAgentCreationModal: boolean = useSelector(
    (state: RootState) => state.AgentCreationReducer.showAgentCreationModal!
  );

  const dispatch = useDispatch<AppDispatch>();

  return {
    formSteps, 
    showCancelConfirmation, 
    showUserCreationPreview, 
    showAgentCreationModal, 
    showAgentDetail, 
    users, 
    showOptionCountainer, 
    detailPageNavigation, 
    dateOfBirth, 
    showUploadCSVModal, 
    settingPageNavigation, 
    agentManagement,
    channelCluster,
    activities,
    roleAndModel, 
    showEmptyUI, 
    showDataFieldUI, 
    dispatch
  };
};
