'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { ACTIVITIES_ITEMS_USEQUERY_KEY, ACTIVITIES_USEQUERY_KEY, BASE_URL, CHANNEL_CLUSTER_USEQUERY_KEY, POS_USEQUERY_KEY, TRADE_CHANNEL_USEQUERY_KEY } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useMakeGetRequest from './useMakeGetRequest';
import { addToggleStateToAllChannelCluster, deleteEdge, loadAllChannelCluster, loadAllTradeChannels, loadLocalChannelClusterFromDBData } from '@/redux/features/channel-cluster-slice';
// loadLocalChannelClusterFromDBData
import { useClientFormStep } from './useClientFormStep';
import useMakeGetRequestRevalidate, { useMakeGetRequestRevalidateD } from './useMakeGetRequestRevalidate';
import { loadAllPointOfSale } from '@/redux/features/create-point-of-sale-slice';
import { IChannelCluster } from '@/redux/features/types';
import { extractArrayfromChannelCluster, tranformChannelCluster } from '@/utils/transformUsingMap';
import { TrackingListTypes } from '@/services/simulationData';
import { loadActivitiesFromDB, loadAllActivities } from '@/redux/features/activities-slice';

export const useActivities = () => {

  const dispatch = useDispatch<AppDispatch>();
  
  let { data } = useMakeGetRequestRevalidate (`${ BASE_URL }/activities`, ACTIVITIES_USEQUERY_KEY); 
  // console.log(data, "-----Loaded all allActivities from db")

  // ACTION TO LOAD ALL CHANNEL CLUSTERS FROM REQUEST

  dispatch(loadAllActivities({
    allActivities: data
  }))

  const selectedActivity = useSelector(
    (state: RootState) => state?.ActivityReducer.selectedActivity
  );

  const localActivities = useSelector(
    (state: RootState) => state?.ActivityReducer.localActivities
  );

  const lastestHight = useSelector(
    (state: RootState) => state?.ActivityReducer.lastestHight
  );

  const activities = useSelector(
    (state: RootState) => state?.ActivityReducer.activities
  );

  

  return { dispatch, selectedActivity, lastestHight, localActivities, activities };
};
