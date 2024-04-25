'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { BASE_URL } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useMakeGetRequest from './useMakeGetRequest';
import { addToggleStateToAllChannelCluster, loadAllChannelCluster, loadAllTradeChannels } from '@/redux/features/channel-cluster-slice';
import { useClientFormStep } from './useClientFormStep';
import useMakeGetRequestRevalidate from './useMakeGetRequestRevalidate';
import { loadAllPointOfSale } from '@/redux/features/create-point-of-sale-slice';
import { IChannelCluster } from '@/redux/features/types';
import { extractArrayfromChannelCluster, tranformChannelCluster } from '@/utils/transformUsingMap';
import { TrackingListTypes } from '@/services/simulationData';

export const useSettings = () => {

  const dispatch = useDispatch<AppDispatch>();
  
  // GET REQUEST FOR ALL CHANNEL CLUSTERS
  let { data, isLoading } = useMakeGetRequestRevalidate (`${ BASE_URL }/channelCluster`); 
  // GET REQUEST FOR ALL TRADE CHANNEL
  let { data: tradeChannelsLoad } = useMakeGetRequestRevalidate (`${ BASE_URL }/tradeChannel`); 


  // ACTION TO LOAD ALL CHANNEL CLUSTERS FROM REQUEST
  dispatch(loadAllChannelCluster({
    allChannelCluster: data, 
  }));

  // dispatch(addToggleStateToAllChannelCluster({}));

  // LOAD ALL TRADE CHANNELS FROM REQUEST
  dispatch(loadAllTradeChannels({
    allTradeChannel: tradeChannelsLoad, 
  }));


  // FORMATING CHANNEL CLUSTERS FOR SELECT FIELDS
  const channeClusterForSelectField = tranformChannelCluster(data)
  
  const extractedtArrayfromChannelCluster = extractArrayfromChannelCluster (data)

  const { data: posData } = useMakeGetRequestRevalidate (`${ BASE_URL }/pos`); 

  // console.log(tradeChannelsLoad, "let let...")

  // LOAD ALL CHANNEL CLUSTERS FROM REQUEST
  dispatch(loadAllPointOfSale({
    allPointOfSales: posData, 
  }));

  const channelClusters = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.channelCluster
  );

  const tradeChannels = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.tradeChannels
  );

  const companies = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.companies
  );

  const trackingList: TrackingListTypes = useSelector(
    (state: RootState) => state?.pointOfSaleViewReducer?.trackingList
  );

  const activities = useSelector(
    (state: RootState) => state?.ActivityReducer.activities
  );


  const locaChannelClusters = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.locaChannelClusters
  );

  const locaTradeChannels = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.locaTradeChannels
  );

  const localCategories = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.localCategories
  );

  return { dispatch, locaChannelClusters, locaTradeChannels, localCategories, trackingList, channeClusterForSelectField, extractedtArrayfromChannelCluster, isLoading, channelClusters, tradeChannels, activities, companies, data };
};
