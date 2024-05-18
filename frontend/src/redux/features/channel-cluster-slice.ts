import { channelClusters } from '@/utils/channelCluster';
import { createSlice, current } from '@reduxjs/toolkit';
import { ICategories, ICategory, IChannelCluster, TradeChannel, TradeChannels } from './types';
import { addContentIfNotExist, addTradeChannel } from '../utils';
import { generateId } from '@/utils/generateRandomID';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useDispatch } from 'react-redux';
// import { createEdges } from './edges-slice';
import { MarkerType } from 'reactflow';

export type TypeOfEdge = { 
  type: MarkerType 
} 

export type StyleTypes = {
  strokeWidth?: number,
  stroke?: string,
}

export type EdgeType = {
  id: string | null, 
  source: string | null;
  target: string | null;
  sourceHandle?: string | null;
  targetHandle?: string | null;
  type?: string, 
  markerEnd?: TypeOfEdge, 
  width?: number,
  height?: number,
  color?: string, 
  style?: StyleTypes, 
}


export type ChannelClusterState = {
  channelCluster: IChannelCluster[]; 
  locaChannelClusters?: IChannelCluster[];
  locaTradeChannels?: TradeChannel []; 
  tradeChannels: TradeChannels
  localCategories?: ICategories; 
  selectedCatID?: string;
  selectedTCID?: string;
  selectedCCID?: string;
  companies: any; 
  pushNextChannelClusterDown?: number;
  lastestHightCC?: number; 
  edgesConnectingNodes?: EdgeType[], 
  categories?: any;
};

const initialState: ChannelClusterState = {
  // channelCluster: channelClusters, 
  channelCluster: [], 
  tradeChannels: [], 
  locaChannelClusters: [], 
  locaTradeChannels: [], 
  localCategories: [], 
  selectedCatID: "", 
  selectedTCID: "", 
  selectedCCID: "", 
  companies: [], 
  pushNextChannelClusterDown: 100, 
  lastestHightCC: 100, 
  edgesConnectingNodes: [], 
  categories: [], 
};


// const dispatch = useDispatch<AppDispatch>();

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

    // ADDING ALL CHANNEL CLUSTER FROM DB AT ONCE
    loadAllCategories: (state, action) => {
      const { allCategories } = action?.payload; 
      state.categories = allCategories
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
      const uniqID = generateId ()

      state.channelCluster.push({
        // id: state.channelCluster.length + 1,
        id: uniqID,
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
      console.log("dispatched selectedCatID", id)
      state.selectedCatID = id;
    }, 

    selectTCID: (state, action) => {
      const { id } = action?.payload; 
      console.log("dispatched selectedTCID", id)
      state.selectedTCID = id;
    }, 

    selectCCID: (state, action) => {
      const { id } = action?.payload;
      console.log("dispatched selectedCCID", id)
      state.selectedCCID = id;
    }, 

    


    // ------------ START FLOW BUILDER ACTIONS FOR CHANNEL CLUSTER-----------

    // ******************** EDGES METHODS ***************************
    // **************************************************************
    createEdges: (state, action) => {
      const { source, target, arrowType } = action?.payload; 
      console.log(">><<>><<>><<1111", source, target)
      const connection = {
        id: `reactflow__edge-${ source }-${ target }`,
        source, 
        target, 
        sourceHandle: null,
        targetHandle: null, 
        type: "buttonedge", 
        markerEnd: { type: arrowType }, 
        width: 20,
        height: 20,
        color: '#FF0072',  
        style: {
          strokeWidth: 2,
          stroke: '#FF0072',
        },
      }
      console.log(",.,.,.,.,???", connection)
      state?.edgesConnectingNodes?.push(connection)
    }, 

    deleteEdge: (state, action) => {
      const { id } = action?.payload; 
      console.log(">><<>><<>><<", id)
      const remainingCC = state.edgesConnectingNodes?.filter((lCC: EdgeType) => {
        return lCC?.id !== id
      })
      state.edgesConnectingNodes = remainingCC
    }, 
    // **************************************************************
    // ******************** EDGES METHODS ***************************

    createLocalChannelCluster: (state, action) => {
      const { name, color, type } = action?.payload;
      const uniqID = generateId ()

      state.locaChannelClusters?.push({
        // id: state.locaChannelClusters?.length + 1,
        id: uniqID, 
        name,
        color: color.hex, 
        position: {
          x: 10, 
          y: state?.lastestHightCC as number
        }, 
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

    createLocalChannelClusterFromDB: (state, action) => {
      const { finalCCValue } = action?.payload;
      state.locaChannelClusters?.push(finalCCValue);
    },

    createLocalTradeChannelFromDB: (state, action) => {
      const { finalTCValue } = action?.payload;
      state.locaTradeChannels?.push(finalTCValue);
    },

    createLocalCategoryFromDB: (state, action) => {
      const { finalCatValue } = action?.payload;
      state.localCategories?.push(finalCatValue);
    },

    createGapBetweenElementOnCanvasCC: (state, action) => {
      const { newMeasure } = action?.payload;
      state.lastestHightCC = state.lastestHightCC + newMeasure
    }, 

    loadLocalChannelClusterFromDBData: (state, action) => {
      const { allChannelCluster } = action?.payload;

      allChannelCluster?.forEach((elementCC: IChannelCluster) => {
        
        state.locaChannelClusters?.push({
          id: elementCC?._id as string, 
          name: elementCC?.name,
          color: elementCC?.color, 
          position: {
            x: 10, 
            y: state?.lastestHightCC as number
          }, 
          type: "channelClusterCreation", 
          width: 250, 
          height: 94,
          data: {
            name: elementCC?.name,
            id: elementCC?._id as string, 
            color: elementCC?.color as string, 
          }, 
          trade_channels_id: elementCC?.trade_channels_id
         });

        elementCC?.trade_channels_id?.forEach((elementTC: TradeChannel) => {
          state.lastestHightCC = state?.lastestHightCC! + 100
          state.locaTradeChannels?.push({
            id: elementTC?._id as string, 
            name: elementTC?.name,
            position: {
              x: 400, 
              y: state.lastestHightCC, 
            }, 
            type: "tradeChannelCreation", 
            width: 250, 
            height: 94, 
            data: {
              id: elementTC?._id as string, 
              name: elementTC?.name, 
              color: elementCC?.color as string, 
              categories_id: elementTC?.categories_id, //[], 
              channel_cluster_id: elementTC?.channel_cluster_id, 
            }, 
            categories_id: elementTC?.categories_id, //[], 
            channel_cluster_id: elementTC?.channel_cluster_id, 
            // channel_cluster_ids
          });

          const connectionCCTC = {
            id: `reactflow__edge-${ elementCC?._id }-${ elementTC?._id }`,
            source: elementCC?._id as string, 
            target: elementTC?._id as string, 
            sourceHandle: null,
            targetHandle: null, 
            type: "buttonedge", 
            markerEnd: { type: MarkerType.Arrow }, 
            width: 20,
            height: 20,
            color: '#FF0072', 
            style: {
              strokeWidth: 2,
              stroke: '#FF0072',
            },
          }
          state?.edgesConnectingNodes?.push(connectionCCTC)
  
          elementTC?.categories_id?.forEach((elementsCats: any) => {
            state.lastestHightCC = state?.lastestHightCC! + 100
            state.localCategories?.push({
              id: elementsCats?._id, 
              name: elementsCats?.name,
              position: {
                x: 800, 
                y: state.lastestHightCC, 
              }, 
              type: 'categoryCreation', 
              width: 250, 
              height: 94, 
              data: {
                name: elementsCats?.name,
                id: elementsCats?._id, 
                trade_chanel_id: elementsCats?.trade_chanel_id, 
                activities_ids: []
              }, 
              trade_chanel_id: elementsCats?.trade_chanel_id, 
              activities_ids: [], 
            });

            const connectionTCCAT = {
              id: `reactflow__edge-${ elementCC?._id }-${ elementTC?._id }`,
              source: elementTC?._id as string, 
              target: elementsCats?._id as string, 
              sourceHandle: null,
              targetHandle: null, 
              type: "buttonedge", 
              markerEnd: { type: MarkerType.Arrow }, 
              width: 20,
              height: 20,
              color: '#FF0072', 
              style: {
                strokeWidth: 2,
                stroke: '#FF0072',
              },
            }
            state?.edgesConnectingNodes?.push(connectionTCCAT)

          });
          
        });

        state.lastestHightCC = state?.lastestHightCC! + 100
      });

    }, 


    createLocalChannelClusterFromDBData: (state, action) => {
      const { _id, name, color, tradeChannels } = action?.payload;
      const uniqID = generateId ()
      
      state.locaChannelClusters?.push({
        id: _id, 
        name,
        color: color, 
        position: {
          x: 10, 
          y: state?.lastestHightCC as number
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

      tradeChannels.forEach((element: TradeChannel) => {
        state.lastestHightCC = state?.lastestHightCC! + 100
        state.locaTradeChannels?.push({
          id: element?._id as string, 
          name: element?.name,
          position: {
            x: 400, 
            y: state.lastestHightCC, 
          }, 
          type: "tradeChannelCreation", 
          width: 250, 
          height: 94, 
          data: {
            id: element?._id as string, 
            name: element?.name, 
            color: color, 
          }, 
          categories_id: [], 
          channel_cluster_ids: [], 
        });

        element?.categories_id?.forEach((cats: any) => {
          state.lastestHightCC = state?.lastestHightCC! + 100
          state.localCategories?.push({
            id: cats?._id, 
            name: cats?.name,
            position: {
              x: 800, 
              y: state.lastestHightCC, 
            }, 
            type: 'categoryCreation', 
            width: 250, 
            height: 94, 
            data: {
              name: cats?.name,
              id: cats?._id, 
              trade_chanel_id: [], 
              activities_ids: []
            }, 
            trade_chanel_id: [], 
            activities_ids: [], 
          });
        });
        
      });
      state.lastestHightCC = state?.lastestHightCC! + 100
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
        position: {
          x: 400, 
          y: state.lastestHightCC as number + 100, 
        }, 
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
      state.lastestHightCC = state.lastestHightCC! + 100
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
        position: {
          x: 800, 
          y: state.lastestHightCC as number + 100, 
        }, 
        // position, 
        type, 
        width: 250, 
        height: 94, 
        data: {
          name: name,
          id: uniqID, 
          trade_chanel_id: [], 
          activities_ids: []
        }, 
        trade_chanel_id: [], 
        activities_ids: [], 
      }); 
      state.lastestHightCC = state.lastestHightCC! + 100
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

    linkLocalCategoryToActivity: (state, action) => {
      const { id, activtyID } = action?.payload;
      console.log("PUTTING TRADE CHANNEL IDS IN CHANNEL CLUSTER", id, activtyID)

      // PUTTING TRADE CHANNEL ID IN CHANNEL CLUSTER
      const foudObj = state.localCategories?.map((lCC: ICategory) => {
        let newRes;
        console.log(lCC, "lcc", lCC.id, id, lCC?.activities_ids)
        if (lCC?.id === id) {
          newRes = {
            ...lCC, 
            // trade_channels_id: [...lCC?.trade_channels_id as [], tradeChannelID]
            activities_ids: [...lCC?.activities_ids as [], activtyID]
          }
          return newRes
        }
        return lCC
      })
      state.localCategories = foudObj as any; 
      // // PUTTING CHANNEL CLUSTER ID IN TRADE CHANNEL
      // const foudObj2 = state.locaTradeChannels?.map((lCC: TradeChannel) => {
      //   let newRes;
      //   console.log(lCC, "lcc", lCC.id, tradeChannelID)
      //   if (lCC?.id === tradeChannelID) {
      //     newRes = {
      //       ...lCC, 
      //       channel_cluster_ids: [...lCC.channel_cluster_ids as string[], channelClus]
      //     }
      //     return newRes
      //   }
      //   return lCC
      // })
      // state.locaTradeChannels = foudObj2 as any
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
  selectCatID, linkLocalCategoryToActivity, 
  editLocalCategory, copyLocalCategory,
  deleteLocalCategory, createLocalTradeChannel, 
  deleteEdge, createEdges, 
  // filterNodes, 
  selectTCID, selectCCID, createLocalChannelClusterFromDB, 
  editLocalTradeChannel, 
  createLocalTradeChannelFromDB, createLocalCategoryFromDB, 
  loadLocalChannelClusterFromDBData, 
  createGapBetweenElementOnCanvasCC, 
  copyLocalTradeChannel,
  deleteLocalTradeChannel, createLocalChannelClusterFromDBData, copyLocalChannelCluster, deleteLocalChannelCluster, editLocalChannelCluster, createLocalChannelCluster, toggleStateToAllChannelClusterBuilder, addToggleStateToAllChannelCluster, loadCompanies, loadAllChannelCluster, loadAllCategories, loadAllTradeChannels, addNewTradeChannel, addSubCategory, 
  linkLocalChannelClusterToTradeChannel, 
  linkLocalTradeChanneloCategory,
} =
  channelCluster.actions;
export default channelCluster.reducer;




















// filterNodes: (state, action) => {
//   const { id } = action?.payload; 

//   const filteredArray = state.locaChannelClusters?.find((element: IChannelCluster) => {
//     return element?._id === id
//   })

//   state.locaChannelClusters = []; 

//   state.edgesConnectingNodes = []

//   filteredArray?.tradeChannel?.forEach((elementTC: TradeChannel) => {
//     state.lastestHightCC = state?.lastestHightCC! + 100; 
//     state.locaTradeChannels = []; 
//     state.locaTradeChannels?.push({
//       id: elementTC?._id as string, 
//       name: elementTC?.name,
//       position: {
//         x: 400, 
//         y: state.lastestHightCC, 
//       }, 
//       type: "tradeChannelCreation", 
//       width: 250, 
//       height: 94, 
//       data: {
//         id: elementTC?._id as string, 
//         name: elementTC?.name, 
//         color: filteredArray?.color as string, 
//       }, 
//       categories_id: [], 
//       channel_cluster_ids: [], 
//     });

//     const connectionCCTC = {
//       id: `reactflow__edge-${ filteredArray?._id }-${ elementTC?._id }`,
//       source: filteredArray?._id as string, 
//       target: elementTC?._id as string, 
//       sourceHandle: null,
//       targetHandle: null, 
//       type: "buttonedge", 
//       markerEnd: { type: MarkerType.Arrow }, 
//       width: 20,
//       height: 20,
//       color: '#FF0072', 
//       style: {
//         strokeWidth: 2,
//         stroke: '#FF0072',
//       },
//     }
//     state?.edgesConnectingNodes?.push(connectionCCTC)

//     elementTC?.categories_id?.forEach((elementsCats: any) => {
//       state.lastestHightCC = state?.lastestHightCC! + 100; 
//       state.localCategories = []; 
//       state.localCategories?.push({
//         id: elementsCats?._id, 
//         name: elementsCats?.name,
//         position: {
//           x: 800, 
//           y: state.lastestHightCC, 
//         }, 
//         type: 'categoryCreation', 
//         width: 250, 
//         height: 94, 
//         data: {
//           name: elementsCats?.name,
//           id: elementsCats?._id, 
//           trade_chanel_id: [], 
//           activities_ids: []
//         }, 
//         trade_chanel_id: [], 
//         activities_ids: [], 
//       });

//       const connectionTCCAT = {
//         id: `reactflow__edge-${ elementTC?._id }-${ elementsCats?._id }`,
//         source: elementTC?._id as string, 
//         target: elementsCats?._id as string, 
//         sourceHandle: null,
//         targetHandle: null, 
//         type: "buttonedge", 
//         markerEnd: { type: MarkerType.Arrow }, 
//         width: 20,
//         height: 20,
//         color: '#FF0072', 
//         style: {
//           strokeWidth: 2,
//           stroke: '#FF0072',
//         },
//       }
//       state?.edgesConnectingNodes?.push(connectionTCCAT)

//     });
    
//   });

//   state.lastestHightCC = state?.lastestHightCC! + 100


// }, 


// loadLocalChannelClusterFromDBData: (state, action) => {
    //   const { allChannelCluster } = action?.payload;
    //   const uniqID = generateId ()

    //   allChannelCluster?.forEach((elementCC: IChannelCluster) => {
        
    //     state.locaChannelClusters?.push({
    //       id: elementCC?._id as string, 
    //       name: elementCC?.name,
    //       color: elementCC?.color, 
    //       position: {
    //         x: 10, 
    //         y: state?.lastestHightCC as number
    //       }, 
    //       type: "channelClusterCreation", 
    //       width: 250, 
    //       height: 94, 
    //       data: {
    //         name: elementCC?.name,
    //         id: elementCC?._id as string, 
    //         color: elementCC?.color?.hex, 
    //       }
    //     });

    //     elementCC?.trade_channels_id?.forEach((elementTC: TradeChannel) => {
    //       state.lastestHightCC = state?.lastestHightCC! + 100
    //       state.locaTradeChannels?.push({
    //         id: elementTC?._id as string, 
    //         name: elementTC?.name,
    //         position: {
    //           x: 400, 
    //           y: state.lastestHightCC, 
    //         }, 
    //         type: "tradeChannelCreation", 
    //         width: 250, 
    //         height: 94, 
    //         data: {
    //           id: elementTC?._id as string, 
    //           name: elementTC?.name, 
    //           color: elementCC?.color?.hex, 
    //         }, 
    //         categories_id: [], 
    //         channel_cluster_ids: [], 
    //       });

    //       createEdges({
    //         source: elementCC?._id, target: elementTC?._id, arrowType: MarkerType.Arrow
    //       });
  
    //       elementTC?.categories_id?.forEach((elementsCats: any) => {
    //         state.lastestHightCC = state?.lastestHightCC! + 100
    //         state.localCategories?.push({
    //           id: elementsCats?._id, 
    //           name: elementsCats?.name,
    //           position: {
    //             x: 800, 
    //             y: state.lastestHightCC, 
    //           }, 
    //           type: 'categoryCreation', 
    //           width: 250, 
    //           height: 94, 
    //           data: {
    //             name: elementsCats?.name,
    //             id: elementsCats?._id, 
    //             trade_chanel_id: [], 
    //             activities_ids: []
    //           }, 
    //           trade_chanel_id: [], 
    //           activities_ids: [], 
    //         });

    //         createEdges({
    //           source: elementTC?._id, target: elementsCats?._id, arrowType: MarkerType.Arrow
    //         });

    //       });
          
    //     });

    //   });

    //   state.lastestHightCC = state?.lastestHightCC! + 100
    // }, 
