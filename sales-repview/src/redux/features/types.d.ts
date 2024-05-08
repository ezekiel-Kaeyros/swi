import { OptionTypes } from "@/app/[lang]/(pages)/components/agents-creation/agents-form/select-field/selectTypes";

export interface IChannelCluster {
  id: number | string;
  color?: { hex: string };
  name: string;
  tradeChannel?: any[];
}

export interface IActivity {
  id: number | string;
  name: string;
  frequency: number;
  duration: number;
  channelCluster: string | number;
  tradeChannel: string | number;
  category: string | number;
  status: boolean;
  priority?: string;
  description?: string;
}

export interface IFormStep {
  id: string | number, 
  done: boolean, 
  label?: string, 
  active?: boolean, 
  showForm: boolean, 
}

export type IFormSteps = IFormStep []

export type AgentFormValueType = {
  id?: string | number; 
  salesName: string;
  dateOfBirth: string;
  gender: OptionType;
  contactDetails: string;
  emailAddress: string;
  country: string;
  city: OptionType;
  region: OptionType; 
  streetAddress: string;
  jobTitle: string; 
  departement: OptionType; 
  reportingManager: OptionType; 
  startDate: string; 
  avatar?: any
  team?: any, 
  status?: boolean | Key | undefined | string, 
};

export type AgentFormValuesType = AgentFormValueType []

type AgentNavigationType = {
  id: number | string;
  status: boolean; 
  label: string; 
  color?: string; 
  textColor: string; 
}

type AgentNavigationsType = AgentNavigationType[]


export interface IAgentCreation {
  formStep: IFormSteps; 
  showCancelConfirmation: boolean;
  showUserCreationPreview: boolean; 
  showAgentCreationModal: boolean; 
  showConfirmSuccesCreation: boolean; 
  currentUser?: AgentFormValueType;
  showAgentDetail?: boolean; 
  showOptionCountainer?: boolean; 
  showAddButtonInPreview?: boolean; 
  users?: AgentFormValuesType; 
  showUploadCSVModal: boolean; 
  showEmptyUI?: boolean; 
  showDataFieldUI?: boolean; 
  settingPageNavigation: AgentNavigationsType; 
  detailPageNavigation: AgentNavigationsType; 
  dateOfBirth?: any
}