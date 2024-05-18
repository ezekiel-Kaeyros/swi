'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { ACTIVITIES_ITEMS_USEQUERY_KEY, ACTIVITIES_USEQUERY_KEY, BASE_URL, CATEGORY_API_URL, CATEGORY_USEQUERY_KEY, CHANNEL_CLUSTER_USEQUERY_KEY, POS_USEQUERY_KEY, ROUTE_API_URL, ROUTE_USEQUERY_KEY, TRADE_CHANNEL_USEQUERY_KEY } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import useMakeGetRequest from './useMakeGetRequest';
import { createEdges, deleteEdge, loadAllCategories, loadAllChannelCluster, loadAllTradeChannels, loadLocalChannelClusterFromDBData } from '@/redux/features/channel-cluster-slice';
// loadLocalChannelClusterFromDBData
// import { useClientFormStep } from './useClientFormStep';
import useMakeGetRequestRevalidate from './useMakeGetRequestRevalidate';
import { loadAllPointOfSale } from '@/redux/features/create-point-of-sale-slice';
// import { IChannelCluster } from '@/redux/features/types';
import { extractArrayfromChannelCluster, tranformChannelCluster } from '@/utils/transformUsingMap';
import { TrackingListTypes } from '@/services/simulationData';

// import { loadActivitiesFromDB, loadAllActivities } from '@/redux/features/activities-slice';

export const useSettings = () => {

  const dispatch = useDispatch<AppDispatch>();
  
  // GET REQUEST FOR ALL CHANNEL CLUSTERS
  let { data, isLoading } = useMakeGetRequestRevalidate (`${ BASE_URL }/channelCluster`, CHANNEL_CLUSTER_USEQUERY_KEY); 

  console.log(data, "ROUTE DATA1111")
  // GET REQUEST FOR ALL TRADE CHANNEL
  let { data: tradeChannelsLoad } = useMakeGetRequestRevalidate (`${ BASE_URL }/tradeChannel`, TRADE_CHANNEL_USEQUERY_KEY); 

  let { data: categoryLoad } = useMakeGetRequestRevalidate (`${ BASE_URL }/${ CATEGORY_API_URL }`, CATEGORY_USEQUERY_KEY); 

  // let { data: routeData } = useMakeGetRequestRevalidate (`${ BASE_URL }/${ ROUTE_API_URL }`, ROUTE_USEQUERY_KEY); 



  // ACTION TO LOAD ALL CATEGORIES FROM REQUEST
  dispatch(loadAllCategories({
    allCategories: categoryLoad, 
  }));

  // ACTION TO LOAD ALL CHANNEL CLUSTERS FROM REQUEST
  dispatch(loadAllChannelCluster({
    allChannelCluster: data, 
  }));

  // LOAD ALL CHANNEL CLUSTER IN THE CANVAS
  console.log("data...data./", data)

  // LOAD ALL TRADE CHANNELS FROM REQUEST
  dispatch(loadAllTradeChannels({
    allTradeChannel: tradeChannelsLoad, 
  }));


  // FORMATING CHANNEL CLUSTERS FOR SELECT FIELDS
  const channeClusterForSelectField = tranformChannelCluster(data)
  
  const extractedtArrayfromChannelCluster = extractArrayfromChannelCluster (data)

  const { data: posData } = useMakeGetRequestRevalidate (`${ BASE_URL }/pos`, POS_USEQUERY_KEY); 

  // LOAD ALL CHANNEL CLUSTERS FROM REQUEST
  dispatch(loadAllPointOfSale({
    allPointOfSales: posData, 
  }));

  const selectedCatID = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.selectedCatID
  );

  const selectedTCID = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.selectedTCID
  );
  const selectedCCID = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.selectedCCID
  );

  const channelClusters = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.channelCluster
  );

  // dispatch(loadLocalChannelClusterFromDBData({
  //   allChannelCluster: channelClusters, 
  // }));

  const categories = useSelector(
    (state: RootState) => state?.ChannelClusterReducer?.categories
  );

  // console.log(categories, "&&&&&&&&&&")

  const tradeChannels = useSelector(
    (state: RootState) => state?.ChannelClusterReducer?.tradeChannels
  );

  const companies = useSelector(
    (state: RootState) => state?.ChannelClusterReducer?.companies
  );

  const trackingList: TrackingListTypes = useSelector(
    (state: RootState) => state?.pointOfSaleViewReducer?.trackingList
  );

  const activities = useSelector(
    (state: RootState) => state?.ActivityReducer.activities
  );


  const locaChannelClusters = useSelector(
    (state: RootState) => state?.ChannelClusterReducer?.locaChannelClusters
  );

  const locaTradeChannels = useSelector(
    (state: RootState) => state?.ChannelClusterReducer?.locaTradeChannels
  );

  const localCategories = useSelector(
    (state: RootState) => state?.ChannelClusterReducer?.localCategories
  );
  
  const lastestHightCC = useSelector(
    (state: RootState) => state?.ChannelClusterReducer?.lastestHightCC
  );

  const localActivities = useSelector(
    (state: RootState) => state?.ActivityReducer.localActivities
  );

  

  const priorities = useSelector(
    (state: RootState) => state?.ActivityReducer.priorities
  );

  const edgesConnectingNodes = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.edgesConnectingNodes
  );

  const connectTwoNodes = (source: string, target: string, arrowType: any) => {
    dispatch(createEdges({
      source, target, arrowType
    }));
  }

  const deleteAndEdge = (id: string) => {
    dispatch(deleteEdge({
      id
    }))
  }

  
  

  return { dispatch, deleteAndEdge, connectTwoNodes, selectedCatID, 
    edgesConnectingNodes, priorities, lastestHightCC, 
    localActivities, locaChannelClusters, 
    locaTradeChannels, localCategories, categories,
    trackingList, channeClusterForSelectField, 
    extractedtArrayfromChannelCluster, isLoading, 
    channelClusters, tradeChannels, activities, 
    selectedTCID, selectedCCID, 
    companies, data 
  };
};
