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

// *******************FOR DUMMY DATA****************
// THIS IS THE TYEP THAT VALIDATES THE DATA OF THE USER
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

// FOR DUMMY DATA
export type AgentFormValuesType = AgentFormValueType []

// *******************FOR DUMMY DATA****************



// *******************FOR BACKEND DATA****************
// THIS IS THE TYEP THAT VALIDATES THE DATA OF THE USER FROM BACKEND
export type AgentFormValueMainTypeMain = {
  _id?: string | number; 
  name: string;
  dateOfBirth: string;
  gender: OptionType;
  contactDetails?: string; // BACKEND PEOPLE FORGOT TO PUT THIS FIELD IN THE DB
  country: string;
  region: OptionType; 
  city: OptionType;
  streetAddress: string;
  job: string; 
  departement: OptionType; 
  reportingManager: OptionType; 
  startDate: string; 
  status?: boolean | Key | undefined | string, 
  email: string;

  avatar?: any
  team?: any, 
};

// FOR BACKEND DATA
export type AgentFormValuesMainTypeMain = AgentFormValueMainTypeMain []
// *******************FOR BACKEND DATA****************



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
  salesRepsAgents?: AgentFormValuesMainTypeMain; 
  currentSalesRepsAgent?: AgentFormValueMainTypeMain; 
  showUploadCSVModal: boolean; 
  showEmptyUI?: boolean; 
  showDataFieldUI?: boolean; 
  settingPageNavigation: AgentNavigationsType; 
  detailPageNavigation: AgentNavigationsType; 
  dateOfBirth?: any
}


// POSTED DATA
// {
//   "name": "test",
// "dateOfBirth": "14/04/2000",
// "gender": "Male",
// "contactDetails": "695500474", 
// "country": "Cameroon",
// "region": "Centre", 
// "city": "yaounde",
// "streetAddress": "mbankolo",
// "job": "Sales Rep", 
// "departement": "Marketing", 
// "reportingManager": "65c0d153f7a55c5757d884a3", 
// "startDate": "2024-04-15T21:15:07.0000000", 
// "status": true, 
// "email": "test@gmail.com"
// }

// RETURNED POSTED DATA
// {
//   "name": "test",
//   "dateOfBirth": "14/04/2000",
//   "gender": "Male",
//   "country": "Cameroon",
//   "region": "Centre",
//   "city": "yaounde",
//   "streetAddress": "mbankolo",
//   "job": "Sales Rep",
//   "departement": "Marketing",
//   "reportingManager": [
//       "65c0d153f7a55c5757d884a3"
//   ],
//   "startDate": "2024-04-15T20:15:07.000Z",
//   "status": "true",
//   "email": "test@gmail.com",
//   "_id": "661d05119c5e74d172e7b67a",
//   "createdAt": "2024-04-15T10:44:34.004Z",
//   "updatedAt": "2024-04-15T10:44:34.004Z",
//   "__v": 0
// }