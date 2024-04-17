"use client"; 

import DataService from "@/services/dataService";
// import { getRequest } from "@/utils/httpMethods/HTTPMethods";
import useSWR from "swr"


const useMakeGetRequest = (url: string) => {

    const service = new DataService ()

    const { data, error, isLoading } = useSWR(url, async () => {
      const result = await service.get (url); 
      return result.data; 
    }); 
    // const { data, error, isLoading } = useSWR(url, () => getRequest (url)); 
  
    return {
      data,
      isLoading,
      isError: error
    }
}

export default useMakeGetRequest; 