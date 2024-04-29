import { OptionTypes } from "@/app/[lang]/(pages)/components/agents-creation/agents-form/select-field/selectTypes";

export type PositionType = {
  x: number, 
  y: number, 
}

export type IChannelClusterDataType = {
  name: string, 
  id: number | string, 
  color?: string; 
  frequency?: number; 
  duration?: number; 
  priority?: string; 
  trade_chanel_id?: []; 
  description?: string;
  channelCluster?: any[], 
  tradeChannel?: any[],
  category?: any[], 
}
export interface IChannelCluster {
  id: number | string;
  color?: { hex: string; fadeHex: string };
  name: string;
  trade_channels_id?: any[];
  tradeChannel?: any[];
  _id?: number | string;
  opened?: boolean; 
  type?: string; 
  position?: PositionType; 
  data?: IChannelClusterDataType; 
  width?: number, 
  height?: number, 
}

export type TradeChannel = {
  _id?: string,
  id?: number | string, 
  name: string,
  id_company?: string,
  channel_cluster_id?: string, 
  channel_cluster_ids?: any[],
  categories_id?: string[], 
  type?: string; 
  position?: PositionType; 
  data?: IChannelClusterDataType; 
  width?: number, 
  height?: number, 
}
export interface ICategory {
  id?: string | number;
  name?: string;
  id_company?: string;
  trade_chanel_id?: []; 
  // trade_chanel_ids?: [], 
  description?: any[]

  type?: string; 
  position?: PositionType; 
  data?: IChannelClusterDataType; 
  width?: number, 
  height?: number, 
}
export type ICategories = ICategory[]
export type TradeChannels = TradeChannel []

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

export interface IActivityNew {
  id: number | string;
  name: string;
  frequency: number;
  duration: number;
  channelCluster: []; 
  tradeChannel: string[];
  category: string[];
  status?: boolean;
  description?: string;

  frequency?: number; 
  duration?: number; 
  priority?: string; 

  type?: string; 
  position?: PositionType; 
  data?: IChannelClusterDataType; 
  width?: number, 
  height?: number, 
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
  id?: string;
  _id?: string | number; 
  name: string;
  salesName?: string | undefined;
  dateOfBirth: string;
  gender: OptionType;
  contactDetails?: string; // BACKEND PEOPLE FORGOT TO PUT THIS FIELD IN THE DB
  country: string;
  region: OptionType; 
  city: OptionType;
  streetAddress: string;
  job: string; 
  jobTitle?: string; 
  departement: OptionType; 
  reportingManager: OptionType; 
  startDate: string; 
  status?: boolean | Key | undefined | string, 
  email: string;
  emailAddress?: string;
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
  dateOfBirth?: any;
  deleteUrl?: string | undefined; 
}


export interface IUser {
  email_confirm: false,
  _id: string,
  role: string,
  address_id: string,
  first_name: string,
  last_name: string,
  contact: number,
  profile_picture: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  __v: 0
}

export type GetAgentDataType = {
  _id: string,
  dateOfBirth: string;
  gender: string;
  country: string;
  region: string; 
  city: string;
  job: string; 
  name: string; 
  streetAddress: string;
  departement: string;
  reportingManager: IUser [];
  startDate: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number
}

// email: string;
// name:string;
// dateOfBirth?: string;
// gender?:string;
// country?: string;
// region: string;
// streetAddress: string;
// job?: string;
// departement?: string;
// reportingManager?: any;
// startDate?: string;
// status?: string;


// GET USER 
// "_id": "661e4153da89a10ba058d428",
// "dateOfBirth": "2024-04-09",
// "gender": "Male",
// "country": "Cameroon",
// "region": "Centre",
// "city": "Yaounde",
// "job": "Front End Dev",
// "departement": "OptionTypeString",
// "reportingManager": [
//     {
//         "_id": "661e141e39ef710584fcf7a2",
//         "role": "Data Science",
//         "address_id": "yaounde",
//         "first_name": "Gleyne",
//         "email_confirm": false,
//         "last_name": "Monthe",
//         "contact": 6561888167,
//         "profile_picture": "https//image.com",
//         "email": "gm@test.com",
//         "password": "$2b$10$WihreqjQ2VFQB0CnyzNcTOPscSnG43otFLoFunDV2ekOEldfKlikq",
//         "createdAt": "2024-04-16T06:01:02.438Z",
//         "updatedAt": "2024-04-16T06:01:02.438Z",
//         "__v": 0
//     }
// ],
// "startDate": "2024-04-10T00:00:00.000Z",
// "email": "New Orlean",
// "createdAt": "2024-04-16T09:13:55.509Z",
// "updatedAt": "2024-04-16T09:13:55.509Z",
// "__v": 0


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


// 6571ae656f56ecf502bc75c8 gone
// 657194e945352d0f220be0b5 gone
// 6570c6eb897d213b72b95135 gone
// 656d9da17295cdd5d80b2b65 gone
// 656d9d3d7295cdd5d80b2b63 gone