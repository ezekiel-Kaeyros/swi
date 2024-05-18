import Road from '@/core/models/Roads';
import { pointOfSales } from '@/core/utils/pointOfSalesData';
import { createSlice, current } from '@reduxjs/toolkit';

export type RoadMamangementstate = {
  roard: Road[];
};

const initialState: RoadMamangementstate = {
  roard: [],
};

// Create the slice
export const roadManagementView = createSlice({
  name: 'RoadView',
  initialState,
  reducers: {
    getRoards: (state, action) => {
      console.log(action);
      state.roard = action.payload;
    },
    // filter: (state, action) => {
    //   const { latitude, longitude } = action.payload;
    //   state.selectedPlace.latitude = latitude;
    //   state.selectedPlace.longitude = longitude;
    // },

    // Create a new point of sales

    // createPointOfSales: (state, action) => {
    //   const { newPointOfSales } = action?.payload;

    //   let id = state.pointOfSales?.length + 1;

    //   state.pointOfSales.push({ ...newPointOfSales, id: id });

    //   console.log('point sale updated', current(state.pointOfSales));
    // },
  },
});

// Export actions and reducer
export const { getRoards } = roadManagementView.actions;
export default roadManagementView.reducer;
