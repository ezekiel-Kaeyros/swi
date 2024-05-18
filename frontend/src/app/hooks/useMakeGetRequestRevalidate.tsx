'use client';

import DataService from "@/services/dataService";
import { makeGetReques } from "@/utils/makePostReq";
// import { useQuery } from "react-query";
import useSWR from "swr"; 
import { QueryClientProvider, QueryClient } from "react-query";
import { useQuery } from "@tanstack/react-query";

// const queryClient = new QueryClient();

const useMakeGetRequestRevalidate = (url: string, key?: string) => {
  // SWR METHOD
  // const { data, error, isLoading, isValidating } = useSWR(url, async () => {
  //   const result = await makeGetReques (url)
  //   // console.log(result, "at the source: >>><<<>>><<<")
  //   const finalResult = result?.map((fin: any) => {
  //     return {
  //       ...fin, 
  //       opened: false, 
  //     }
  //   })
  //   return finalResult
  // }, { 
  //   refreshInterval: 10000, 
  //   keepPreviousData: true 
  // }); 

  // return { data, isLoading, isError: error }

  // REACT QUERY METHOD
  const result = useQuery({ 
    queryKey: [key ? key : "global"], 
    queryFn: async () => {
      const result = await makeGetReques (url)
      const finalResult = result?.map((fin: any) => {
        return {
          ...fin, 
          opened: false, 
        }
      }); 
      console.log("finalResult>>>", finalResult)
      return finalResult
    }, 
    refetchInterval: 10000
  })
  console.log("----------", result.data)
  return result;

}


export default useMakeGetRequestRevalidate; 

// export default useMakeGetRequestRevalidate;

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
  const service = new DataService();
  const { data, error, isLoading, isValidating } = useSWR(
    url,
    async () => {
      const result = await service.get(url);
      return result.data;
    },
    {
      refreshInterval: 30000,
      keepPreviousData: true,
      // revalidateOnFocus: true,
      // revalidateIfStale: true,
      // revalidateOnMount: true,
    }
  );

  return {
    data,
    isLoading,
    isError: error,
    isValidating,
  };
};
