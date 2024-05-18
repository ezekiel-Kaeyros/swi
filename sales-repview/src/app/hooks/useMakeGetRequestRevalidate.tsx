'use client';

import DataService from '@/core/services/dataService';
// import { getRequest } from "@/utils/httpMethods/HTTPMethods";
import useSWR from 'swr';

const useMakeGetRequestRevalidate = (url: string) => {
  const service = new DataService();

  const { data, error, isLoading } = useSWR(
    url,
    async () => {
      const result = await service.get(url);
      return result.data;
    },
    { refreshInterval: 10000 }
  );
  // const { data, error, isLoading } = useSWR(url, () => getRequest (url), { refreshInterval: 10000 });
  // console.log("datadatadata: ", data)

  return {
    data,
    isLoading,
    isError: error,
  };
};

export default useMakeGetRequestRevalidate;
