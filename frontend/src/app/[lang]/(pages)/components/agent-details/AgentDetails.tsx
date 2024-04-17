"use client"; 

import closeIconIcon from "../../../../../../public/icons/closeIcon.png"; 

import React from 'react'
import AgentDetailNavigation from './agent-details-navigation/AgentDetailNavigation';
import GenericPopupHeader from '@/app/common/components/employee-common/GenericPopupHeader';
import EmployeeInfo from "./employee-info/EmployeeInfo";
import EmployeeOptionLine from "@/app/common/components/employee-common/EmployeeOptionLine";
import useToggleModal from "@/app/hooks/useToggleModal";
import { useClientFormStep } from "@/app/hooks/useClientFormStep";
import EmployeeBasicInfo from "./employee-info/EmployeeBasicInfo";
import EmployeeActivities from "./employee-activties/EmployeeActivities";
import EmployeePerformance from "./employee-performance/EmployeePerformance";

const AgentDetails = () => {

    const { hideAgentDetails } = useToggleModal ()
    const { detailPageNavigation } = useClientFormStep (); 

    return (
        <div className="z-20 w-[50%] h-screen bg-newPrimaryDark p-5 flex flex-col gap-10">
            <GenericPopupHeader textSize={ "30px" } label={ "Information" } closeCanceModal={ hideAgentDetails } closeIconIcon={ closeIconIcon } />
            <AgentDetailNavigation />
            {
                detailPageNavigation[0].status && 
                    <EmployeeBasicInfo />
            }
            {
                detailPageNavigation[1].status && 
                    <EmployeeActivities />
            }
            {
                detailPageNavigation[2].status && 
                    <EmployeePerformance />
            }
        </div>
    )
}

export default AgentDetails