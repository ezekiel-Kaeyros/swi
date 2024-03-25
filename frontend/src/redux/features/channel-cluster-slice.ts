import { channelClusters } from '@/utils/channelCluster';
import { createSlice, current } from '@reduxjs/toolkit';
import { IChannelCluster } from './types';
import { addContentIfNotExist, addTradeChannel } from '../utils';

export type ChannelClusterState = {
  channelCluster: IChannelCluster[];
};

const initialState: ChannelClusterState = {
  channelCluster: channelClusters,
};

// Create the slice
export const channelCluster = createSlice({
  name: 'channelCluster',
  initialState,
  reducers: {
    // Create a new Channel cluster

    createChannelCluster: (state, action) => {
      const { name, color } = action?.payload;

      state.channelCluster.push({
        id: state.channelCluster.length + 1,
        name,
        color,
      });
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
export const { createChannelCluster, addNewTradeChannel, addSubCategory } =
  channelCluster.actions;
export default channelCluster.reducer;
