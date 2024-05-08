'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { BASE_URL, TRADE_CHANNEL_USEQUERY_KEY } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadAllTradeChannels } from '@/redux/features/channel-cluster-slice';
import useMakeGetRequestRevalidate from './useMakeGetRequestRevalidate';

export const useChannelClusters = () => {

  const dispatch = useDispatch<AppDispatch>();
  // GET REQUEST FOR ALL TRADE CHANNEL
  let { data: tradeChannelsLoad } = useMakeGetRequestRevalidate (`${ BASE_URL }/tradeChannel`, TRADE_CHANNEL_USEQUERY_KEY); 

  // LOAD ALL TRADE CHANNELS FROM REQUEST
  dispatch(loadAllTradeChannels({
    allTradeChannel: tradeChannelsLoad, 
  }));

  // GET IT FROM THE STATE
  const tradeChannels = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.tradeChannels
  );

  const locaChannelClusters = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.locaChannelClusters
  );

  const locaTradeChannels = useSelector(
    (state: RootState) => state?.ChannelClusterReducer.locaTradeChannels
  );

  return { dispatch, locaChannelClusters, locaTradeChannels, tradeChannels };
};
