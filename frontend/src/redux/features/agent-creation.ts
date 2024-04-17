import { createSlice } from '@reduxjs/toolkit';
import { AgentFormValueMainTypeMain, AgentFormValuesMainTypeMain, AgentFormValuesType, AgentNavigationType, AgentNavigationsType, IAgentCreation, IFormStep } from './types';

import { AgentNavigationList, SettingsDisplayNavigationList, stepsData } from '@/services/simulationData';
// import { updateCityProperty, updateContactDetailsProperty, updateCountryProperty, updateDateProperty, updateDepartementProperty, updateEmailAddressProperty, updateGenderProperty, updateJobTitleProperty, updateRegionsProperty, updateReportingManagerProperty, updateStartDateProperty, updateStreetAddressProperty, updateUserNameProperty } from '@/utils/updateUserValue';
import { formDataObj } from '@/services/selectFieldsData';


const initialState: IAgentCreation = {
  formStep: stepsData, 
  showCancelConfirmation: false, 
  showUserCreationPreview: false, 
  showAgentCreationModal: false, // was true for development has to be false
  showConfirmSuccesCreation: false, 
  showAgentDetail: false, 
  showOptionCountainer: false, 
  users: [], 
  currentUser: formDataObj, 
  salesRepsAgents: [] as AgentFormValuesMainTypeMain, 
  currentSalesRepsAgent: {} as AgentFormValueMainTypeMain, 
  showUploadCSVModal: false, 
  showAddButtonInPreview: true, 
  showEmptyUI: false, 
  showDataFieldUI: true, 
  settingPageNavigation: SettingsDisplayNavigationList, 
  detailPageNavigation: AgentNavigationList, 
  dateOfBirth: "",
};

// Create the slice
export const agentCreation = createSlice({
  name: 'agentCreation',
  initialState,
  reducers: {

    addUser: (state, action) => {
      const { user } = action.payload; 
      state.currentUser = user
      state.users = [...state.users as AgentFormValuesType, user]; 
    }, 

    addSalesRepAgents: (state, action) => {
      const { salesRepsAgent } = action.payload; 
      state.currentSalesRepsAgent = salesRepsAgent
      state.salesRepsAgents = [...state.salesRepsAgents as AgentFormValuesMainTypeMain, salesRepsAgent]; 
    }, 

    selectDetailViewTab: (state, action) => {
      const { id } = action.payload; 
      const updatedTabDatas: AgentNavigationsType = state?.detailPageNavigation.map((tab: AgentNavigationType) => {
        if (tab?.id === id) {
          return { ...tab, status: true, color: "white", textColor: "black" };
        }
        return { ...tab, status: false, color: "normalInputBg", textColor: "slate-500" };
      });
      state.detailPageNavigation = updatedTabDatas;

    }, 

    selectSettingsTab: (state, action) => {
      const { id } = action.payload; 
      const updatedTabDatas: AgentNavigationsType = state?.settingPageNavigation.map((tab: AgentNavigationType) => {
        if (tab?.id === id) {
          // return { ...tab, status: true, textColor: "settingViewBottomBorderColor" };
          return { ...tab, status: true, textColor: "blue-500" };
        }
        return { ...tab, status: false, textColor: "slate-500" };
      });
      state.settingPageNavigation = updatedTabDatas;

    },

    addDateOfBirth: (state, action) => {
      const { toggleValue } = action.payload; 
      state.dateOfBirth = toggleValue; 
    }, 

    toggleShowUploadCSVModal: (state, action) => {
      const { toggleValue } = action.payload; 
      state.showUploadCSVModal = toggleValue; 
    },

    toggleShowAddButtonInPreviw: (state, action) => {
      const { toggleValue } = action.payload; 
      state.showAddButtonInPreview = toggleValue; 
    },

    toggleAgentDetailView: (state, action) => {
      const { toggleValue } = action.payload; 
      state.showAgentDetail = toggleValue; 
    },

    toggleOptionsContainer: (state, action) => {
      const { toggleValue } = action.payload; 
      state.showOptionCountainer = toggleValue; 
    },

    toggleCancelCreation: (state, action) => {
      const { toggleValue } = action.payload; 
      state.showCancelConfirmation = toggleValue; 
      if (toggleValue === true) {
        state.showAgentCreationModal = false
        state.showUserCreationPreview = false
      }
    },

    toggleShowPreview: (state, action) => {
      const { toggleValue } = action.payload; 
      state.showUserCreationPreview = toggleValue
      if (toggleValue === true) {
        state.showCancelConfirmation = false
        state.showAgentCreationModal = false
      }
    },

    toggleShowAgentCreationModal: (state, action) => {
      const { toggleValue } = action.payload; 
      state.showAgentCreationModal = toggleValue; 
      if (toggleValue === true) {
        state.showUserCreationPreview = false; 
        state.showCancelConfirmation = false; 
      }
    },

    makeStepDone: (state, action) => {
      let { tabData, id } = action.payload; 
      const updatedTabData: any = state.formStep.map((tab: IFormStep) => {
        if (tab?.id === id) {
          return { ...tab, done: tabData };
        }
        return { ...tab };
      });
      state.formStep = updatedTabData;
    }, 

    activateStep: (state, action) => {
      const { tabData, id } = action.payload;
      const updatedTabData: any = state.formStep?.map((tab: IFormStep) => {
        if (tab?.id === id) {
          return { ...tab, active: tabData };
        }
        return { ...tab };
      });
      state.formStep = updatedTabData;
    }, 

    toggleShowForm: (state, action) => {
      const { tabData, id } = action.payload;
      const updatedTabData: any = state.formStep?.map((tab: IFormStep) => {
        if (tab?.id === id) {
          return { ...tab, showForm: true };
        }
        return { ...tab, showForm: false };
      });

      state.formStep = updatedTabData;
    }, 

  },
});

// Export actions and reducer
export const { 
  makeStepDone, 
  activateStep, 
  toggleShowForm, 
  toggleCancelCreation, 
  toggleShowPreview, 
  toggleShowAgentCreationModal, 
  addUser, 
  addSalesRepAgents, 
  toggleAgentDetailView, 
  toggleOptionsContainer, 
  selectDetailViewTab, 
  addDateOfBirth, 
  toggleShowUploadCSVModal, 
  selectSettingsTab, 
} = agentCreation.actions;
export default agentCreation.reducer;
