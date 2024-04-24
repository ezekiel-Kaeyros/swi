"use client"; 

import DataService from "@/services/dataService";
import { makeGetReques } from "@/utils/makePostReq";
import { useQuery } from "react-query";
import useSWR from "swr"

const useMakeGetRequestRevalidate = (url: string) => {
  const { data, error, isLoading, isValidating } = useSWR(url, async () => {
    const result = await makeGetReques (url)
    // console.log(result, "at the source: >>><<<>>><<<")
    return result
  }, { refreshInterval: 30000, keepPreviousData: true }); 

  return { data, isLoading, isError: error, isValidating }
}

export default useMakeGetRequestRevalidate; 


// const useMakeGetRequestRevalidate = (url: string) => {
//   const {
//     data,
//     error,
//     isLoading, 
//   } = useQuery("postsData", async () => {
//     // const result = await service.get (url); 
//     // return result.data; 
//     const result = await makeGetReques (url)
//     console.log(result, "at the source: >>><<<>>><<<")
//     return result; 
//   });

//   return { data, isLoading, isError: error }
// }

// export default useMakeGetRequestRevalidate; 



export const useMakeGetRequestRevalidateD = (url: string) => {
  const service = new DataService ()
  const { data, error, isLoading, isValidating } = useSWR(url, async () => {
    const result = await service.get (url); 
    return result.data; 
  }, { 
    refreshInterval: 30000, 
    keepPreviousData: true, 
    // revalidateOnFocus: true, 
    // revalidateIfStale: true,
    // revalidateOnMount: true, 
  }); 

  return {
    data,
    isLoading,
    isError: error, 
    isValidating
  }
}