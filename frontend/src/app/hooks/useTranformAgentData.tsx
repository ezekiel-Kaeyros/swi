"use client"
import React from 'react'
import useMakeGetRequestRevalidate from './useMakeGetRequestRevalidate'
import { AGENT_USEQUERY_KEY, BASE_URL } from '@/utils/constants'
import { AgentFormValuesMainTypeMain, GetAgentDataType } from '@/redux/features/types'
import { provincesData } from '@/services/selectFieldsData'

const useTranformAgentData = () => {

  // REQUEST TO GET ALL AGENTS DATA FROM BACKEND
  const { data: rawData, refetch } = useMakeGetRequestRevalidate (`${ BASE_URL }/salesrep`, AGENT_USEQUERY_KEY); 

  // TRANSFORMING AGENT DATA
  const agentData: AgentFormValuesMainTypeMain = rawData?.map ((dat: GetAgentDataType) => {

    console.log(">>><<<", dat)

    const findCity = provincesData.find((prov) =>{
      if (prov.extra === dat?.city) {
        return prov
      }
    }) 

    const findRegion = provincesData.find((prov) =>{
      if (prov.name === dat?.region) {
        return prov
      }
    }) 

    const finalD = {
      id: dat._id, 
      salesName: dat?.name, 
      dateOfBirth: dat?.dateOfBirth, 
      gender: {
        id: dat?.gender === "Male" ? 1 : 2, 
        name: dat?.gender
      }, 
      contactDetails: 5674879893, // manually hardcoded because backend does not provide it yet
      emailAddress: dat?.email, 
      country: dat?.country, 
      city: findCity, 
      region: findRegion, 
      jobTitle: dat?.job, 
      departement: dat?.departement, 
      reportingManager: {
        id: dat?.reportingManager[0]?._id, 
        name:`${dat?.reportingManager[0].first_name} ${dat?.reportingManager[0].last_name}`, 
        extra: "Douala", 
      } , 
      streetAddress: dat?.streetAddress, 
      startDate: dat?.startDate.split("T")[0], // transformed so that it can be displayed in the field when editing
      status: true
    }

    // TRYING TO FEED ALL TRANSFORMED DATA INDIVIDUALLY INTO THE 
    // CORRESPONDING STATE TO RATHER DISPLAY IT IN THE TABLE
    // IT WILL BE DONE LATER
    // dispatch(addSalesRepAgents({
    //   salesRepsAgent: finalD
    // }))

    // console.log(dat, "datTTTT")
    return finalD

  })

  // const { salesRepsAgents } = useClientFormStep ()
  // console.log(agentData, "in useTranformAgentData", salesRepsAgents)

  // TRYING TO FEED ALL TRANSFORMED DATA ALL AT ONCE INTO THE 
  // CORRESPONDING STATE TO RATHER DISPLAY IT IN THE TABLE
  // IT WILL BE DONE LATER
  // dispatch(addSalesRepAgentsAtOnce({
  //   salesRepsAgent: agentData
  // }))

  return {
    agentData
  }

}

export default useTranformAgentData