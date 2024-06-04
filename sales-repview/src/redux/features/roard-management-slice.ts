import ActivitiesItem from '@/core/models/ActivitiItem';
import PointOfSales from '@/core/models/Pos';
import Road from '@/core/models/Roads';
import RoadsItem from '@/core/models/RoadsItem';
import { pointOfSales } from '@/core/utils/pointOfSalesData';
import { createSlice, current } from '@reduxjs/toolkit';

export type ShopDataType = {
  shopData: PointOfSales;
  activities: ActivitiesItem[];
};
export type PosType = {
  shopData: PointOfSales;
  activities: RoadsItem;
};
export type RoadMamangementstate = {
  roard: Road[];
  currentRoad: Road | null;
  pointOfSales: PointOfSales[];
  shopData: PosType | null;
  dailyRoads: ShopDataType | null;
};

const initialState: RoadMamangementstate = {
  roard: [],
  currentRoad: null,
  pointOfSales: [],
  shopData: null,
  dailyRoads: null,
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
      console.log(action, '/////////////////////////////////////////////////');
      state.pointOfSales = action.payload;
      console.log(state.pointOfSales);
    },
    setShopData: (state, action) => {
      console.log(action);
      state.shopData = action.payload;
      console.log(state.pointOfSales);
    },
    setDailyRoads: (state, action) => {
      console.log(action);
      state.dailyRoads = action.payload;
      console.log(state.dailyRoads);
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
export const { setRoards, setPosList, setShopData, setDailyRoads } =
  roadManagementView.actions;
export default roadManagementView.reducer;
