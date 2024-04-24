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

export const POSDisplayNavigationList: AgentNavigationsType = [
  {
    id: 1, 
    status: true, 
    label: "Active POS", 
    textColor: "blue-500 ", 
  }, 
  {
      id: 2, 
      status: false, 
      label: "Pending POS", 
      textColor: "slate-300", 
  }
]

export const RTTDisplayNavigationList: AgentNavigationsType = [
  {
    id: 1, 
    status: true, 
    label: "All Routes (15)", 
    textColor: "blue-500 ", 
  }, 
  {
      id: 2, 
      status: false, 
      label: "Ongoing Routes (5)", 
      textColor: "slate-300", 
  }, 
  {
    id: 3, 
    status: false, 
    label: "Completed Routes (10)", 
    textColor: "slate-300", 
  }
]


export const TrackingProfileNavigationList: AgentNavigationsType = [
  {
    id: 1, 
    status: true, 
    label: "Tracking", 
    textColor: "blue-500 ", 
  }, 
  {
      id: 2, 
      status: false, 
      label: "Details", 
      textColor: "slate-300", 
  }
]

export type TrackingListType = {
  id: number | string, 
  posName: string, 
  checkedTime: string, 
  timeGrading: string, 
  statTime: string, 
  arrivalTime: string, 
  checkingActivities: string, 
  departureTime: string, 
  color: string, 
  backgroundColor: string, 
  opened: boolean
}

export type TrackingListTypes = TrackingListType []

export const trackingList: TrackingListTypes = [
  {
      id: 1, 
      posName: "Santa Lucia Bonaberi", 
      checkedTime: "Checked 11:40", 
      timeGrading: "Off Schedule", 
      statTime: "08:20", 
      arrivalTime: "09:00", 
      checkingActivities: "10:20", 
      departureTime: "10:30", 
      color: "text-redishTextColor", 
      backgroundColor: "bg-keepEditingBtnBg", 
      opened: false
  }, 
  {
      id: 2, 
      posName: "Dovv Bonamoussadi", 
      checkedTime: "Checked 11:40", 
      timeGrading: "Completed on time", 
      statTime: "11:00", 
      arrivalTime: "11:40", 
      checkingActivities: "12:20", 
      departureTime: "12:40", 
      color: "text-activeTextColor", 
      backgroundColor: "bg-activeBgColor", 
      opened: false
  }, 
  {
      id: 3, 
      posName: "Orca Deco", 
      checkedTime: "Checked 12:40", 
      timeGrading: "Driving", 
      statTime: "12:50", 
      arrivalTime: "13:10", 
      checkingActivities: "13:30", 
      departureTime: "14:00", 
      color: "text-disabledText", 
      backgroundColor: "bg-blue-500", 
      opened: false
  }, 
  {
      id: 4, 
      posName: "Douala Mall", 
      checkedTime: "Checked 14:20", 
      timeGrading: "Next stop", 
      statTime: "14:50", 
      arrivalTime: "15:10", 
      checkingActivities: "15:30", 
      departureTime: "16:00", 
      color: "text-pendingTextColor", 
      backgroundColor: "bg-pendingBgcolor", 
      opened: false
  }
]