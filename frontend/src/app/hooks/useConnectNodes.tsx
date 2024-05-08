'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { BASE_URL, CHANNEL_CLUSTER_USEQUERY_KEY, POS_USEQUERY_KEY, TRADE_CHANNEL_USEQUERY_KEY } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useMakeGetRequest from './useMakeGetRequest';
import { addToggleStateToAllChannelCluster, createEdges, deleteEdge, loadAllChannelCluster, loadAllTradeChannels } from '@/redux/features/channel-cluster-slice';
import { useClientFormStep } from './useClientFormStep';
import useMakeGetRequestRevalidate from './useMakeGetRequestRevalidate';
import { loadAllPointOfSale } from '@/redux/features/create-point-of-sale-slice';
import { IChannelCluster } from '@/redux/features/types';
import { extractArrayfromChannelCluster, tranformChannelCluster } from '@/utils/transformUsingMap';
import { TrackingListTypes } from '@/services/simulationData';
// import { createEdges, deleteEdge } from '@/redux/features/activities-slice';

export const useConnectNodes = () => {

  const dispatch = useDispatch<AppDispatch>();

  const edgesConnectingNodes = useSelector(
    (state: RootState) => state?.ActivityReducer.edgesConnectingNodes
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

  return { dispatch, deleteAndEdge, connectTwoNodes, edgesConnectingNodes };
};
