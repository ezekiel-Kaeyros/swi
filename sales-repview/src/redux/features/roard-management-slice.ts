import ActivitiesItem from '@/core/models/ActivitiItem';
import PointOfSales from '@/core/models/Pos';
import Road from '@/core/models/Roads';
import { pointOfSales } from '@/core/utils/pointOfSalesData';
import { createSlice, current } from '@reduxjs/toolkit';

export type ShopDataType = {
  shopData: PointOfSales;
  activities: ActivitiesItem[];
};
export type RoadMamangementstate = {
  roard: Road[];
  pointOfSales: PointOfSales[];
  shopData: ShopDataType | null;
};

const initialState: RoadMamangementstate = {
  roard: [],
  pointOfSales: [],
  shopData: null,
};

// Create the slice
export const roadManagementView = createSlice({
  name: 'RoadView',
  initialState,
  reducers: {
    setRoards: (state, action) => {
      console.log(action);
      state.roard = action.payload;
      console.log(state.roard);
    },
    setPosList: (state, action) => {
      console.log(action);
      state.pointOfSales = action.payload;
      console.log(state.pointOfSales);
    },
    setShopData: (state, action) => {
      console.log(action);
      state.shopData = action.payload;
      console.log(state.pointOfSales);
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
export const { setRoards, setPosList, setShopData } =
  roadManagementView.actions;
export default roadManagementView.reducer;
