import { channelClusters } from '@/utils/channelCluster';
import { createSlice, current } from '@reduxjs/toolkit';
import { IChannelCluster } from './types';
import { addContentIfNotExist, addTradeChannel } from '../utils';

export type TradeChannel = {
  _id: string,
  name: string,
  id_company: string,
  channel_cluster_id: string,
  categories_id: string[],
}
export type TradeChannels = TradeChannel []

export type ChannelClusterState = {
  channelCluster: IChannelCluster[]; 
  companies: any; 
  tradeChannels: TradeChannels
};

const initialState: ChannelClusterState = {
  channelCluster: channelClusters,
  tradeChannels: [], 
  companies: []
};

// Create the slice
export const channelCluster = createSlice({
  name: 'channelCluster',
  initialState,
  reducers: {
    // Create a new Channel cluster

    // ADDING ALL CHANNEL CLUSTER FROM DB AT ONCE
    loadAllChannelCluster: (state, action) => {
      const { allChannelCluster } = action?.payload; 
      state.channelCluster = allChannelCluster
    },

    // ADDING ALL TRADE CHANNEL FROM DB AT ONCE
    loadAllTradeChannels: (state, action) => {
      const { allTradeChannel } = action?.payload; 
      state.tradeChannels = allTradeChannel
    },


    createChannelCluster: (state, action) => {
      const { name, color } = action?.payload;

      state.channelCluster.push({
        id: state.channelCluster.length + 1,
        name,
        color,
      });
    },

    loadCompanies: (state, action) => {
      const { comp }: any = action?.payload;
      // console.log(comp, "????????????????")
      state.companies = comp;
    },

    addNewTradeChannel: (state, action) => {
      const { tradeChannelName, channelClusterId } = action?.payload;

      const updatedChannelCluster = addTradeChannel(
        state.channelCluster,
        channelClusterId,
        tradeChannelName
      );

      state.channelCluster = updatedChannelCluster;
    },

    addSubCategory: (state, action) => {
      console.log('action.payload', action.payload);
      const { name, channelClusterId, idToBeUpdated, description } =
        action.payload;

      const updatedChannelCluster = addContentIfNotExist(
        name,
        state.channelCluster,
        channelClusterId,
        idToBeUpdated,
        description
      );

      state.channelCluster = updatedChannelCluster;
    },
  },
});

// Export actions and reducer
export const { createChannelCluster, loadCompanies, loadAllChannelCluster, loadAllTradeChannels, addNewTradeChannel, addSubCategory } =
  channelCluster.actions;
export default channelCluster.reducer;
