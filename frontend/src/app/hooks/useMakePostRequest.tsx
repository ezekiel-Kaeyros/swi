"use client"; 

import DataService from "@/services/dataService";
// import { getRequest } from "@/utils/httpMethods/HTTPMethods";
import useSWR from "swr"


const useMakePostRequest = (url: string, newData: any, shouldFetch: boolean) => {

    const service = new DataService ()

    const { data, error, isLoading } = useSWR( shouldFetch ? url : null, async () => {
      const result = await service.post (url, newData); 
      return result.data; 
    });  

    return {
      data,
      isLoading,
      isError: error
    }
}

export default useMakePostRequest; 