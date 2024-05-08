import { createSlice } from '@reduxjs/toolkit';
import { IActivity, IActivityNew } from './types';
import { activities, priorities } from '@/utils/activities';
import { generateId } from '@/utils/generateRandomID';

export type SelectTypes = {
  id: string, 
  name: string, 
}

export type EdgeType = {
  id: string | null, 
  source: string | null;
  target: string | null;
  sourceHandle?: string | null;
  targetHandle?: string | null;
}

export type ActivityClusterState = {
  activities: IActivity[]; 
  localActivities?: IActivityNew[];
  priorities: SelectTypes[], 
  edgesConnectingNodes: EdgeType[], 
  lastestHight?: number; 
  selectedActivity?: string; 
};

const initialState: ActivityClusterState = {
  activities: activities, 
  localActivities: [], 
  priorities: priorities, 
  edgesConnectingNodes: [], 
  lastestHight: 100, 
  selectedActivity: "", 
};

// Create the slice
export const activity = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    // Create a new Channel cluster

    // createEdges: (state, action) => {
    //   const { source, target, arrowType } = action?.payload; 
    //   console.log(">><<>><<>><<", source, target)
    //   const connection = {
    //     id: `reactflow__edge-${ source }-${ target }`,
    //     source, 
    //     target, 
    //     sourceHandle: null,
    //     targetHandle: null, 
    //     type: "buttonedge", 
    //     markerEnd: { type: arrowType }, 
    //     width: 20,
    //     height: 20,
    //     color: '#FF0072', 
    //     style: {
    //       strokeWidth: 2,
    //       stroke: '#FF0072',
    //     },
    //   }
    //   state.edgesConnectingNodes.push(connection)
    // }, 

    selectActivity: (state, action) => {
      const { id } = action?.payload; 
      // console.log("dispatched selectedTCID", id)
      state.selectedActivity = id;
    }, 


    // ADDING ALL CHANNEL CLUSTER FROM DB AT ONCE
    loadAllActivities: (state, action) => {
      const { allActivities } = action?.payload; 
      // console.log(allActivities, "Loaded all allActivities from db")
      state.activities = allActivities
    }, 

    deleteEdge: (state, action) => {
      const { id } = action?.payload; 
      console.log(">><<>><<>><<", id)
      const remainingCC = state.edgesConnectingNodes?.filter((lCC: EdgeType) => {
        return lCC?.id !== id
      })
      state.edgesConnectingNodes = remainingCC
    },

    createActivity: (state, action) => {
      const { name, frequency, duration, activity, tradeChannel, category } = action?.payload;
      state.activities.push({
        id: state.activities?.length + 1,
        ...action?.payload,
      });
    }, 

    createGapBetweenElementOnCanvas: (state, action) => {
      const { newMeasure } = action?.payload;
      state.lastestHight = state.lastestHight + newMeasure
    }, 

    linkLocaloActivityToCategory: (state, action) => {
      const { id, categoryID } = action?.payload;
      console.log("PUTTING TRADE CHANNEL IDS IN CHANNEL CLUSTER", id, categoryID)

      // PUTTING TRADE CHANNEL ID IN CHANNEL CLUSTER
      const foudObj = state.localActivities?.map((lCC: any) => {
        let newRes;
        console.log(lCC, "lcc", lCC.id, id, lCC?.category, categoryID)
        if (lCC?.id!.toString() === id.toString()) {
          newRes = {
            ...lCC, 
            // trade_channels_id: [...lCC?.trade_channels_id as [], tradeChannelID]
            category: [...lCC?.category as [], categoryID]
          }
          return newRes
        }
        return lCC
      })
      state.localActivities = foudObj as any; 
    },

    createLocalActivities: (state, action) => {
      const { finalValueA } = action?.payload; 
      console.log("finalValuefinalValue", finalValueA)
      // const uniqID = generateId ()
      state.localActivities?.push(finalValueA);
    },

    loadActivitiesFromDB: (state, action) => {
      const { allActivities } = action?.payload; 
      console.log("finalValuefinalValue", allActivities)
      // const uniqID = generateId ()

      allActivities?.forEach((allAct: any) => {
        allAct?.activitieItems?.forEach((element: any) => {

          console.log("finalValuefinalValue", element)
          state.localActivities?.push({
            // id: state.locaChannelClusters?.length + 1,
            id: element?._id, 
            name: allAct?.name,
            // color: color.hex, 
            position: {
              x: 1200, 
              y: state?.lastestHight as number
            }, 
            // type: element?.type, 
            width: 350, 
            height: 150, 
            frequency: element?.frequency, 
            duration: element?.time, 
            priority: element?.priority, 
            description: allAct?.description, 
            type: "activityCreation", 
            data: {
              name: allAct?.name,
              id: element?.id, 
              frequency: element?.frequency, 
              duration: element?.time, 
              time: element?.time, 
              priority: element?.priority, 
              description: allAct?.description, 
              channelCluster: element?.channelClust, 
              tradeChannel: element?.tradeChannel,
              category: element?.category
              // color: color.hex, 
            }, 
            channelCluster: element?.channelClust, 
            tradeChannel: element?.tradeChannel,
            category: element?.category
          });
        });
        // state.localActivities?.push({
        //   // id: state.locaChannelClusters?.length + 1,
        //   id: allAct?._id, 
        //   name: allAct?.name,
        //   // color: color.hex, 
        //   position: {
        //     x: 1200, 
        //     y: state?.lastestHight as number
        //   }, 
        //   // type: allAct?.type, 
        //   width: 350, 
        //   height: 150, 
        //   frequency: allAct?.frequency, 
        //   duration: allAct?.time, 
        //   priority: allAct?.priority, 
        //   description: allAct?.description, 
        //   type: "activityCreation", 
        //   data: {
        //     name: allAct?.name,
        //     id: allAct?.id, 
        //     frequency: allAct?.frequency, 
        //     duration: allAct?.duration, 
        //     priority: allAct?.priority, 
        //     description: allAct?.description, 
        //     channelCluster: allAct?.channelClust, 
        //     tradeChannel: allAct?.tradeChannel,
        //     category: allAct?.category
        //     // color: color.hex, 
        //   }, 
        //   channelCluster: allAct?.channelClust, 
        //   tradeChannel: allAct?.tradeChannel,
        //   category: allAct?.category
        // });

        state.lastestHight = state?.lastestHight! + 150
      });


      // const sourceHdle = finalValue.category

      // createEdges ({sourceHdle, uniqID})
    },

    copyLocalActivity: (state, action) => {
      const { id } = action?.payload;

      const uniqID = generateId ()

      const foudObj = state.localActivities?.find((lCC: any) => {
        return lCC?.id === id; 
      })

      const newCopy = {
        // id: state.locaChannelClusters?.length + 1,
        id: uniqID, 
        name: foudObj?.name,
        // color: color.hex, 
        position: {
          x: 1200, 
          y: 100
        }, 
        type: foudObj?.type, 
        width: 350, 
        height: 150, 
        frequency: foudObj?.frequency, 
        duration: foudObj?.duration, 
        priority: foudObj?.priority, 
        description: foudObj?.description, 
        data: {
          name: foudObj?.name,
          id: foudObj?.id, 
          frequency: foudObj?.frequency, 
          duration: foudObj?.duration, 
          priority: foudObj?.priority, 
          description: foudObj?.description, 
          channelCluster: foudObj?.channelCluster, 
          tradeChannel: foudObj?.tradeChannel,
          category: foudObj?.category
          // color: color.hex, 
        }, 
        channelCluster: foudObj?.channelCluster, 
        tradeChannel: foudObj?.tradeChannel,
        category: foudObj?.category
      };
      console.log(newCopy, "newCopy")
      state.localActivities?.push(newCopy as any)
    },

    editLocalActivity: (state, action) => {
      const { finalValue } = action?.payload;
      console.log("edit value inside the dispatch", finalValue)

      const foudObj = state.localActivities?.map((lCC: any) => {
        // IActivityNew
        let newRes;
        console.log(lCC, "IActivityNew", lCC.id, finalValue?.id)
        if (lCC?.id.toString() === finalValue?.id.toString()) {
          console.log("okay it iss inside...")
          return newRes = {
            id: finalValue.id, 
            name: finalValue.name,
            // color: color.hex, 
            position: {
              x: 1200, 
              y: 100
            }, 
            type: finalValue.type, 
            width: 350, 
            height: 150, 
            frequency: finalValue.frequency, 
            duration: finalValue.duration, 
            priority: finalValue.priority, 
            description: finalValue.description, 
            data: {
              name: finalValue.name,
              id: finalValue.id, 
              frequency: finalValue.frequency, 
              duration: finalValue.duration, 
              priority: finalValue.priority, 
              description: finalValue.description, 
              channelCluster: finalValue.channelCluster, 
              tradeChannel: finalValue.tradeChannel,
              category: finalValue.category
              // color: color.hex, 
            }, 
            channelCluster: finalValue.channelCluster, 
            tradeChannel: finalValue.tradeChannel,
            category: finalValue.category
          }
        }
        return lCC
      })
      // return
      state.localActivities = foudObj as any
    },

    deleteLocalActivity: (state, action) => {
      const { id } = action?.payload;
      const remainingCC = state.localActivities?.filter((lCC: any) => {
        console.log(lCC, id, "lCCID")
        return lCC.id !== id
      })
      console.log(remainingCC, "remainingCC")
      state.localActivities = remainingCC as any
    },
  },
});

// Export actions and reducer
export const { createActivity, 
  deleteEdge, loadAllActivities, deleteLocalActivity, 
  copyLocalActivity, linkLocaloActivityToCategory, 
  editLocalActivity, loadActivitiesFromDB, 
  // createEdges, 
  selectActivity, 
  createGapBetweenElementOnCanvas, 
  createLocalActivities } = activity.actions;
export default activity.reducer;
