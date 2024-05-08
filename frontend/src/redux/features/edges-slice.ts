import { createSlice } from '@reduxjs/toolkit';
import { IActivity, IActivityNew } from './types';
import { activities, priorities } from '@/utils/activities';
import { generateId } from '@/utils/generateRandomID';
import { MarkerType } from 'reactflow';

export type SelectTypes = {
  id: string, 
  name: string, 
}

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

export type ActivityClusterState = {
  activities: IActivity[]; 
  localActivities?: IActivityNew[];
  priorities: SelectTypes[], 
  edgesConnectingNodes: EdgeType[], 
};

export type EdgeStateType = {
  edgesConnectingNodes: EdgeType[], 
};

const initialState: EdgeStateType = {
  edgesConnectingNodes: []
};

// Create the slice
export const edgesSlice: any = createSlice({
  name: 'edgesSlice',
  initialState,
  reducers: {
    // Create a new Edge will be enabled soon
    // createEdges: (state, action) => {
    //   const { source, target, arrowType } = action?.payload; 
    //   console.log(">><<>><<>><<Inside edge", source, target)
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

    deleteEdge: (state, action) => {
      const { id } = action?.payload; 
      // console.log(">><<>><<>><<", id)
      const remainingCC = state.edgesConnectingNodes?.filter((lCC: EdgeType) => {
        return lCC?.id !== id
      })
      state.edgesConnectingNodes = remainingCC
    }, 

  },
});

// Export actions and reducer
export const { deleteEdge, 
  // createEdges 
} = edgesSlice.actions;
export default edgesSlice.reducer;

