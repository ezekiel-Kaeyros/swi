import { setDeleteUrl } from '@/redux/features/agent-creation';
import React from 'react'
import { useClientFormStep } from './useClientFormStep';
import useToggleModal from './useToggleModal';
import { BASE_URL } from '@/utils/constants';
import DataService from '@/services/dataService';

const useMakeActions = () => {

    // const { dispatch } = useClientFormStep ()
    // const newDataService = new DataService ()

    // const makeDeleteAction = (url: string) => {
    //     dispatch(setDeleteUrl({
    //         url: url, 
    //     }));
    // }

    const { hideAgentPreviewInfo, reset } = useToggleModal (); 
    
    const makeDeleteAction = async (url: string) => {
        try {
            // // METHOD 1 (6 seconds)
            // const response = await newDataService.delete (url)
            // console.log("result........", response); 
            // const result =  await response.data
            // console.log("result,,,,,", result)

            // METHOD 2 (2 seconds)
            const response = await fetch (url, {
              method: "DELETE",
            })

            const result =  await response.json()

            // CLEARING AND RESTING BACK ALL STATES
            hideAgentPreviewInfo (); 
            reset (); 

            // USE THIS FOR THE MEANTIME (LATER INTEGRATE NOTIFICATION LIBRARY)
            alert(`Deleted Successfully`); 
            return result
        } catch (error) {
            alert(`Something went wrong (${error})`)
        }
    }
  return {
    makeDeleteAction
  }
}

export default useMakeActions