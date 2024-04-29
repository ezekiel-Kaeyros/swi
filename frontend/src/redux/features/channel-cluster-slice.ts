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
  selectedCatID?: string;
  companies: any; 
};

const initialState: ChannelClusterState = {
  channelCluster: channelClusters, 
  tradeChannels: [], 
  locaChannelClusters: [], 
  locaTradeChannels: [], 
  localCategories: [], 
  selectedCatID: "", 
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
      // console.log(allChannelCluster, "Loaded all Channels Clusters")
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

    selectCatID: (state, action) => {
      const { id } = action?.payload;
      state.selectedCatID = id;
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
          id: uniqID, 
          color: color.hex, 
        }, 
        trade_channels_id: []
      });
    },

    createLocalChannelClusterFromDBData: (state, action) => {
      const { _id, name, color } = action?.payload;
      const uniqID = generateId ()

      state.locaChannelClusters?.push({
        // id: state.locaChannelClusters?.length + 1,
        id: _id, 
        name,
        color: color, 
        position: {
          x: 10, 
          y: 100
        }, 
        type: "channelClusterCreation", 
        width: 250, 
        height: 94, 
        data: {
          name: name,
          id: _id, 
          color: color, 
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
            ...lCC, 
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
              color: color.hex, 
            }
          }
        }
        return lCC
      })
      state.locaChannelClusters = foudObj as any
    },

    linkLocalChannelClusterToTradeChannel: (state, action) => {
      const { id, tradeChannelID, channelClus } = action?.payload;
      console.log("PUTTING TRADE CHANNEL IDS IN CHANNEL CLUSTER", id, tradeChannelID)

      // PUTTING TRADE CHANNEL ID IN CHANNEL CLUSTER
      const foudObj = state.locaChannelClusters?.map((lCC: IChannelCluster) => {
        let newRes;
        console.log(lCC, "lcc", lCC.id, id, lCC?.trade_channels_id)
        if (lCC?.id.toString() === id.toString()) {
          newRes = {
            ...lCC, 
            // trade_channels_id: [...lCC?.trade_channels_id as [], tradeChannelID]
            trade_channels_id: [...lCC?.trade_channels_id as [], tradeChannelID]
          }
          return newRes
        }
        return lCC
      })
      state.locaChannelClusters = foudObj as any; 
      // PUTTING CHANNEL CLUSTER ID IN TRADE CHANNEL
      const foudObj2 = state.locaTradeChannels?.map((lCC: TradeChannel) => {
        let newRes;
        console.log(lCC, "lcc", lCC.id, tradeChannelID)
        if (lCC?.id === tradeChannelID) {
          newRes = {
            ...lCC, 
            channel_cluster_ids: [...lCC.channel_cluster_ids as string[], channelClus]
          }
          return newRes
        }
        return lCC
      })
      state.locaTradeChannels = foudObj2 as any
    },

    copyLocalChannelCluster: (state, action) => {
      const { id } = action?.payload;
      const uniqID = generateId ()

      const foudObj = state.locaChannelClusters?.find((lCC: IChannelCluster) => {
        return lCC?.id.toString() === id.toString(); 
      })
      console.log("foudObj", foudObj)
      const newCopy = {
        ...foudObj, 
        id: uniqID, 
        name: foudObj?.name,
        color: foudObj?.color, 
        position: foudObj?.position, 
        type: foudObj?.type, 
        width: 250, 
        height: 94, 
        data: {
          name: foudObj?.name, 
          id: uniqID, 
          color: foudObj?.color, 
        }
      }
      console.log(newCopy, "newCopy")
      state.locaChannelClusters?.push(newCopy as any)
    },

    deleteLocalChannelCluster: (state, action) => {
      const { id } = action?.payload;
      const findChannelCluster = state.locaChannelClusters?.find((lCC: IChannelCluster) => {
        return lCC.id.toString() === id.toString()
      })
      let findIfAnyAttachedTradeChannel: any = ""
      // console.log(findChannelCluster?.trade_channels_id, findChannelCluster?.trade_channels_id?.length)
      // console.log(findChannelCluster?.trade_channels_id && findChannelCluster?.trade_channels_id?.length > 0, "is there any trade channel in channel cluster")
      if (findChannelCluster?.trade_channels_id && findChannelCluster?.trade_channels_id?.length > 0) {
        findIfAnyAttachedTradeChannel = findChannelCluster?.trade_channels_id[0]

        // NOW LETS FIND THE TRADE CHANNEL 
        const findTradeChannel = state.locaTradeChannels?.find((lCC: TradeChannel) => {
          // console.log(lCC, ",,,,,")
          // console.log(lCC.id === findIfAnyAttachedTradeChannel, lCC.id, findIfAnyAttachedTradeChannel)
          return lCC.id === findIfAnyAttachedTradeChannel
        })

        // console.log("findTradeChannelfindTradeChannel", findTradeChannel)

        const remainingTC = state.locaTradeChannels?.filter((lCC: TradeChannel) => {
          // console.log(lCC, id, "lCCID")
          return lCC.id !== findTradeChannel?.id
        })
        // console.log(remainingTC, "remainingCC")
        state.locaTradeChannels = remainingTC as any

      }
      console.log("No there is not trade channel in cc")
      const remainingCC = state.locaChannelClusters?.filter((lCC: IChannelCluster) => {
        // console.log(lCC, id, "lCCID")
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
        }, 
        categories_id: [], 
        channel_cluster_ids: [], 
      });
    },

    editLocalTradeChannel: (state, action) => {
      const { name, type, position, id } = action?.payload;

      const foudObj = state.locaTradeChannels?.map((lCC: TradeChannel) => {
        let newRes;
        console.log(lCC, "lcc", id)
        if (lCC?.id === id) {
          return newRes = {
            ...lCC, 
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

    linkLocalTradeChanneloCategory: (state, action) => {
      const { id, categoryID, tradeCID } = action?.payload;
      console.log("PUTTING CATEGORES ID IN CHANNEL CLUSTER", id, categoryID)

      const foudObj = state.locaTradeChannels?.map((lCC: TradeChannel) => {
        let newRes;
        console.log(lCC, "lcc", lCC.id, id)
        if (lCC?.id === id) {
          newRes = {
            ...lCC, 
            categories_id: [...lCC.categories_id as string[], categoryID]
          }
          return newRes
        }
        return lCC
      })
      state.locaTradeChannels = foudObj as any

      const foudObj3 = state.localCategories?.map((lCC: ICategory) => {
        let newRes;
        console.log(lCC, "lcc", lCC.id, categoryID)
        if (lCC?.id === categoryID) {
          newRes = {
            ...lCC, 
            trade_chanel_id: [...lCC.trade_chanel_id as string[], tradeCID], 
            data: {
              ...lCC?.data, 
              trade_chanel_id: [...lCC.trade_chanel_id as string[], tradeCID], 
            }
          }
          return newRes
        }
        return lCC
      })
      state.localCategories = foudObj3 as any
    },

    copyLocalTradeChannel: (state, action) => {
      const { id } = action?.payload;

      const uniqID = generateId ()

      const foudObj = state.locaTradeChannels?.find((lCC: TradeChannel) => {
        return lCC?.id === id; 
      })
      const newCopy = {
        ...foudObj, 
        id: uniqID, 
        name: foudObj?.name,
        position: foudObj?.position, 
        type: foudObj?.type, 
        width: 250, 
        height: 94, 
        data: {
          name: foudObj?.name, 
          id: uniqID, 
        }, 
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
          trade_chanel_id: []
        }, 
        trade_chanel_id: []
      });
    },

    editLocalCategory: (state, action) => {
      const { name, type, position, id } = action?.payload;

      const foudObj = state.localCategories?.map((lCC: ICategory) => {
        let newRes;
        console.log(lCC, "lcc", id)
        if (lCC?.id === id) {
          return newRes = {
            ...lCC, 
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

      const uniqID = generateId ()

      const foudObj = state.localCategories?.find((lCC: ICategory) => {
        return lCC?.id === id; 
      })
      const newCopy = {
        ...foudObj, 
        id: uniqID, 
        name: foudObj?.name,
        position: foudObj?.position, 
        type: foudObj?.type, 
        width: 250, 
        height: 94, 
        data: {
          name: foudObj?.name, 
          id: uniqID, 
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
  selectCatID, 
  editLocalCategory,
  copyLocalCategory,
  deleteLocalCategory, createLocalTradeChannel,
  editLocalTradeChannel,
  copyLocalTradeChannel,
  deleteLocalTradeChannel, createLocalChannelClusterFromDBData, copyLocalChannelCluster, deleteLocalChannelCluster, editLocalChannelCluster, createLocalChannelCluster, toggleStateToAllChannelClusterBuilder, addToggleStateToAllChannelCluster, loadCompanies, loadAllChannelCluster, loadAllTradeChannels, addNewTradeChannel, addSubCategory, 
  linkLocalChannelClusterToTradeChannel, 
  linkLocalTradeChanneloCategory,
} =
  channelCluster.actions;
export default channelCluster.reducer;
