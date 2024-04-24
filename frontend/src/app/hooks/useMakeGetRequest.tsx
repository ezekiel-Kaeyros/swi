"use client"; 

import DataService from "@/services/dataService";
import { makeGetReques } from "@/utils/makePostReq";
import { useQuery } from "react-query";
// import { getRequest } from "@/utils/httpMethods/HTTPMethods";
import useSWR from "swr"


const useMakeGetRequest = (url: string) => {

    const service = new DataService ()

    const { data, error, isLoading } = useSWR(url, async () => {
      // const result = await service.get (url); 
      // return result.data; 
      const result = await makeGetReques (url)
      console.log(result, "at the source: >>><<<>>><<<")
      return result; 
    }); 

    // const {
    //   data: posts,
    //   error,
    //   isLoading,
    // } = useQuery("postsData", async () => {
    //   // const result = await service.get (url); 
    //   // return result.data; 
    //   const result = await makeGetReques (url)
    //   console.log(result, "at the source: >>><<<>>><<<")
    //   return result; 
    // });
    console.log("data", data)
  
    return {
      data,
      isLoading,
      isError: error
    }
}

export default useMakeGetRequest; 