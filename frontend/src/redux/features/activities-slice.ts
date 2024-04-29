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
  localActivities: IActivityNew[];
  priorities: SelectTypes[], 
  edgesConnectingNodes: EdgeType[], 
};

const initialState: ActivityClusterState = {
  activities: activities, 
  localActivities: [], 
  priorities: priorities, 
  edgesConnectingNodes: []
};

// Create the slice
export const activity = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    // Create a new Channel cluster

    createEdges: (state, action) => {
      const { source, target } = action?.payload; 
      console.log(">><<>><<>><<", source, target)
      const connection = {
        id: `reactflow__edge-${ source }-${ target }`,
        source, 
        target, 
        sourceHandle: null,
        targetHandle: null, 
      }
      state.edgesConnectingNodes.push(connection)
    }, 

    createActivity: (state, action) => {
      const { name, frequency, duration, activity, tradeChannel, category } = action?.payload;
      state.activities.push({
        id: state.activities?.length + 1,
        ...action?.payload,
      });
    },

    createLocalActivities: (state, action) => {
      const { finalValue } = action?.payload; 
      console.log("finalValuefinalValue", finalValue)
      const uniqID = generateId ()

      state.localActivities?.push({
        // id: state.locaChannelClusters?.length + 1,
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
          channelCluster: finalValue.channelClust, 
          tradeChannel: finalValue.tradeChannel,
          category: finalValue.category
          // color: color.hex, 
        }, 
        channelCluster: finalValue.channelClust, 
        tradeChannel: finalValue.tradeChannel,
        category: finalValue.category
      });

      // const sourceHdle = finalValue.category

      // createEdges ({sourceHdle, uniqID})
    },
  },
});

// Export actions and reducer
export const { createActivity, createEdges, createLocalActivities } = activity.actions;
export default activity.reducer;
