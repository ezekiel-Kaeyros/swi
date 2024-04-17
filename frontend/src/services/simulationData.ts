import { AgentNavigationsType, IFormSteps } from "@/redux/features/types";

export const stepsData: IFormSteps = [
    {
      id: 1, 
      label: "Personal Information", 
      done: false, // changes when a step is already done and we moved to the next step. It influences only the color
      active: true, 
      showForm: true,
    }, 
    {
      id: 2, 
      label: "Address Information", 
      done: false, 
      active: false, 
      showForm: false,
    }, 
    {
      id: 3, 
      label: "Employment Information", 
      done: false, 
      active: false, 
      showForm: false,
    }, 
    
]

export const AgentNavigationList: AgentNavigationsType = [
  {
      id: 1, 
      status: true, 
      label: "Employee Information", 
      color: "white", 
      textColor: "black", 
  }, 
  {
      id: 2, 
      status: false, 
      label: "Activities", 
      color: "normalInputBg", 
      textColor: "slate-500", 
  }, 
  {
      id: 3, 
      status: false, 
      label: "Performance", 
      color: "normalInputBg", 
      textColor: "slate-500", 
  }, 
]

export const SettingsDisplayNavigationList: AgentNavigationsType = [
  {
    id: 1, 
    status: true, 
    label: "Agent Management", 
    textColor: "blue-500 ", 
  }, 
  {
      id: 2, 
      status: false, 
      label: "Channel Cluster", 
      textColor: "slate-300", 
  }, 
  {
      id: 3, 
      status: false, 
      label: "Activities", 
      textColor: "slate-300", 
  },
  {
    id: 4, 
    status: false, 
    label: "Role & Model",
    textColor: "slate-300", 
  }, 
]