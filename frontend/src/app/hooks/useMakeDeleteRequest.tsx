"use client"; 

import DataService from "@/services/dataService";
import useSWR from "swr"
import { useClientFormStep } from "./useClientFormStep";


const useMakeDeleteRequest = (shouldDelete: boolean) => {
  const service = new DataService ()
  const { deleteUrl } = useClientFormStep ()
  const { data, error, isLoading } = useSWR(shouldDelete ? deleteUrl : null, async () => {
    const result = await service.delete (deleteUrl!); 
    return result.data; 
  }); 
  return {
    data,
    isLoading,
    isError: error
  }
}

export default useMakeDeleteRequest; 