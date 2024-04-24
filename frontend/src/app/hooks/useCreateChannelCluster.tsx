"use c;ient"
import React from 'react'
import useMakePostRequest from './useMakePostRequest';
import { BASE_URL } from '@/utils/constants';

const useCreateChannelCluster = ({ shouldFetch, dataToUpload }: any) => {
    const { data } = useMakePostRequest (`${ BASE_URL }/company`, dataToUpload, shouldFetch); 
  return {
    result: data
  }
}

export default useCreateChannelCluster