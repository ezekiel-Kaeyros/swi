'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { BASE_URL, CHANNEL_CLUSTER_USEQUERY_KEY } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadAllChannelCluster } from '@/redux/features/channel-cluster-slice';
import useMakeGetRequestRevalidate from './useMakeGetRequestRevalidate';
import { extractArrayfromChannelCluster, tranformChannelCluster } from '@/utils/transformUsingMap';

export const useChannelClusters = () => {

  const dispatch = useDispatch<AppDispatch>();
  
  // GET REQUEST FOR ALL CHANNEL CLUSTERS
  let { data, isLoading } = useMakeGetRequestRevalidate (`${ BASE_URL }/channelCluster`, CHANNEL_CLUSTER_USEQUERY_KEY); 

  // ACTION TO LOAD ALL CHANNEL CLUSTERS FROM REQUEST
  dispatch(loadAllChannelCluster({
    allChannelCluster: data, 
  }));

  // FORMATING CHANNEL CLUSTERS FOR SELECT FIELDS
  const channeClusterForSelectField = tranformChannelCluster(data)
  
  const extractedtArrayfromChannelCluster = extractArrayfromChannelCluster (data)

  const channelClusters = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.channelCluster
  );

  const locaChannelClusters = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.locaChannelClusters
  );

  return { dispatch, locaChannelClusters, channeClusterForSelectField, extractedtArrayfromChannelCluster, isLoading, channelClusters, data };
};
