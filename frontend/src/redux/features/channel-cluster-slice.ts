import { channelClusters } from '@/utils/channelCluster';
import { createSlice, current } from '@reduxjs/toolkit';
import { ICategories, ICategory, IChannelCluster, TradeChannel, TradeChannels } from './types';
import { addContentIfNotExist, addTradeChannel } from '../utils';
import { generateId } from '@/utils/generateRandomID';


export type ChannelClusterState = {
  channelCluster: IChannelCluster[]; 
  locaChannelClusters?: IChannelCluster[];
  locaTradeChannels?: TradeChannel []; 
  tradeChannels: TradeChannels
  localCategories?: ICategories; 
  companies: any; 
};

const initialState: ChannelClusterState = {
  channelCluster: channelClusters, 
  tradeChannels: [], 
  locaChannelClusters: [], 
  locaTradeChannels: [], 
  localCategories: [], 
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
      console.log(allChannelCluster, "Loaded all Channels Clusters")
      state.channelCluster = allChannelCluster
    },

    // NOT USED ANYMORE
    addToggleStateToAllChannelCluster: (state, action) => {

      const allChannelClusterWithStatus = state.channelCluster?.map((chan: IChannelCluster) => {
        return {
          ...chan, 
          opened: false, 
        }
      })
      state.channelCluster = allChannelClusterWithStatus
    },

    toggleStateToAllChannelClusterBuilder: (state, action) => {
      const { id } = action.payload; 
      const updatedTabDatas: any = state?.channelCluster.map((tab: IChannelCluster) => {
        if (tab?._id === id) {
          return { ...tab, opened: !tab?.opened };
        }
        return { ...tab, opened: tab?.opened };
      });
      state.channelCluster = updatedTabDatas;
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


    // ------------ START FLOW BUILDER ACTIONS FOR CHANNEL CLUSTER-----------
    createLocalChannelCluster: (state, action) => {
      const { name, color, type, position } = action?.payload;
      const uniqID = generateId ()

      state.locaChannelClusters?.push({
        // id: state.locaChannelClusters?.length + 1,
        id: uniqID, 
        name,
        color: color.hex, 
        position, 
        type, 
        width: 250, 
        height: 94, 
        data: {
          name: name,
          id: uniqID
        }
      });
    },

    editLocalChannelCluster: (state, action) => {
      const { name, color, type, position, id } = action?.payload;
      console.log("name, color, type, position, id", name, color, type, position, id)

      const foudObj = state.locaChannelClusters?.map((lCC: IChannelCluster) => {
        let newRes;
        console.log(lCC, "lcc", lCC.id, id)
        if (lCC?.id.toString() === id.toString()) {
          console.log("okay it iss inside...")
          return newRes = {
            id: id, 
            name,
            color: color.hex, 
            position, 
            type, 
            width: 250, 
            height: 94, 
            data: {
              name: name, 
              id: id, 
            }
          }
        }
        return lCC
      })
      state.locaChannelClusters = foudObj as any
    },

    copyLocalChannelCluster: (state, action) => {
      const { id } = action?.payload;

      const foudObj = state.locaChannelClusters?.find((lCC: IChannelCluster) => {
        return lCC?.id.toString() === id.toString(); 
      })
      console.log("foudObj", foudObj)
      const newCopy = {
        ...foudObj, 
        id: state?.locaChannelClusters?.length! + 1, 
        name: foudObj?.name,
        color: foudObj?.color, 
        position: foudObj?.position, 
        type: foudObj?.type, 
        width: 250, 
        height: 94, 
        data: {
          name: foudObj?.name, 
          id: state?.locaChannelClusters?.length! + 1, 
        }
      }
      console.log(newCopy, "newCopy")
      state.locaChannelClusters?.push(newCopy as any)
    },

    deleteLocalChannelCluster: (state, action) => {
      const { id } = action?.payload;
      const remainingCC = state.locaChannelClusters?.filter((lCC: IChannelCluster) => {
        console.log(lCC, id, "lCCID")
        return lCC.id.toString() !== id.toString()
      })
      console.log(remainingCC, "remainingCC")
      state.locaChannelClusters = remainingCC as any
    },
    // ------------ END FLOW BUILDER ACTIONS FOR CHANNEL CLUSTER-----------


    // ------------ START FLOW BUILDER ACTIONS FOR TRADE CHANNELS-----------
    createLocalTradeChannel: (state, action) => {
      const { name, color, type, position } = action?.payload;
      const uniqID = generateId ()

      state.locaTradeChannels?.push({
        // id: state.locaTradeChannels?.length + 1,
        id: uniqID, 
        name,
        position, 
        type, 
        width: 250, 
        height: 94, 
        data: {
          name: name,
          id: uniqID, 
        }
      });
    },

    editLocalTradeChannel: (state, action) => {
      const { name, type, position, id } = action?.payload;

      const foudObj = state.locaTradeChannels?.map((lCC: TradeChannel) => {
        let newRes;
        console.log(lCC, "lcc", id)
        if (lCC?.id === id) {
          return newRes = {
            id: id, 
            name,
            position, 
            type, 
            width: 250, 
            height: 94, 
            data: {
              name: name, 
              id: id, 
            }
          }
        }
        return lCC
      })
      state.locaTradeChannels = foudObj as any
    },

    copyLocalTradeChannel: (state, action) => {
      const { id } = action?.payload;

      const foudObj = state.locaTradeChannels?.find((lCC: TradeChannel) => {
        return lCC?.id === id; 
      })
      const newCopy = {
        ...foudObj, 
        id: state?.locaTradeChannels?.length! + 1, 
        name: foudObj?.name,
        position: foudObj?.position, 
        type: foudObj?.type, 
        width: 250, 
        height: 94, 
        data: {
          name: foudObj?.name, 
          id: state?.locaTradeChannels?.length! + 1, 
        }
      }
      console.log(newCopy, "newCopy")
      state.locaTradeChannels?.push(newCopy as any)
    },

    deleteLocalTradeChannel: (state, action) => {
      const { id } = action?.payload;
      const remainingCC = state.locaTradeChannels?.filter((lCC: TradeChannel) => {
        console.log(lCC, id, "lCCID")
        return lCC.id !== id
      })
      console.log(remainingCC, "remainingCC")
      state.locaTradeChannels = remainingCC as any
    },
    // ------------ END FLOW BUILDER ACTIONS FOR TRADE CHANNELS-----------


    // ------------ START FLOW BUILDER ACTIONS FOR CATEGORY-----------
    createLocalCategory: (state, action) => {
      const { name, color, type, position } = action?.payload; 
      const uniqID = generateId (); 

      state.localCategories?.push({
        // id: state.localCategories?.length + 1,
        id: uniqID, 
        name,
        position, 
        type, 
        width: 250, 
        height: 94, 
        data: {
          name: name,
          id: uniqID, 
        }
      });
    },

    editLocalCategory: (state, action) => {
      const { name, type, position, id } = action?.payload;

      const foudObj = state.localCategories?.map((lCC: ICategory) => {
        let newRes;
        console.log(lCC, "lcc", id)
        if (lCC?.id === id) {
          return newRes = {
            id: id, 
            name,
            position, 
            type, 
            width: 250, 
            height: 94, 
            data: {
              name: name, 
              id: id, 
            }
          }
        }
        return lCC
      })
      state.localCategories = foudObj as any
    },

    copyLocalCategory: (state, action) => {
      const { id } = action?.payload;

      const foudObj = state.localCategories?.find((lCC: ICategory) => {
        return lCC?.id === id; 
      })
      const newCopy = {
        ...foudObj, 
        id: state?.localCategories?.length! + 1, 
        name: foudObj?.name,
        position: foudObj?.position, 
        type: foudObj?.type, 
        width: 250, 
        height: 94, 
        data: {
          name: foudObj?.name, 
          id: state?.localCategories?.length! + 1, 
        }
      }
      console.log(newCopy, "newCopy")
      state.localCategories?.push(newCopy as any)
    },

    deleteLocalCategory: (state, action) => {
      const { id } = action?.payload;
      const remainingCC = state.localCategories?.filter((lCC: ICategory) => {
        console.log(lCC, id, "lCCID")
        return lCC.id !== id
      })
      console.log(remainingCC, "remainingCC")
      state.localCategories = remainingCC as any
    },
    // ------------ END FLOW BUILDER ACTIONS FOR CATEGORY-----------
  },
});

// Export actions and reducer
export const { createChannelCluster, createLocalCategory,
  editLocalCategory,
  copyLocalCategory,
  deleteLocalCategory, createLocalTradeChannel,
  editLocalTradeChannel,
  copyLocalTradeChannel,
  deleteLocalTradeChannel, copyLocalChannelCluster, deleteLocalChannelCluster, editLocalChannelCluster, createLocalChannelCluster, toggleStateToAllChannelClusterBuilder, addToggleStateToAllChannelCluster, loadCompanies, loadAllChannelCluster, loadAllTradeChannels, addNewTradeChannel, addSubCategory } =
  channelCluster.actions;
export default channelCluster.reducer;
