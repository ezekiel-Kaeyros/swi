import { pointOfSales } from '@/core/utils/pointOfSalesData';
import { IPointOfSalesType } from '@/core/utils/types';
import { createSlice, current } from '@reduxjs/toolkit';

export type PointOfSaleViewState = {
  pointOfSales: IPointOfSalesType[];
  toggleMap: boolean;
  selectedPlace: {
    latitude: number | null;
    longitude: number | null;
  };
};

const initialState: PointOfSaleViewState = {
  pointOfSales: pointOfSales,
  toggleMap: false,
  selectedPlace: {
    latitude: null,
    longitude: null,
  },
};

// Create the slice
export const pointOfSaleView = createSlice({
  name: 'pointOfSaleView',
  initialState,
  reducers: {
    toggleMapView: (state, action) => {
      state.toggleMap = action.payload.toggle;
    },
    updateSelectedPlace: (state, action) => {
      const { latitude, longitude } = action.payload;
      state.selectedPlace.latitude = latitude;
      state.selectedPlace.longitude = longitude;
    },

    // Create a new point of sales

    createPointOfSales: (state, action) => {
      const { newPointOfSales } = action?.payload;

      let id = state.pointOfSales?.length + 1;

      state.pointOfSales.push({ ...newPointOfSales, id: id });

      console.log('point sale updated', current(state.pointOfSales));
    },
  },
});

// Export actions and reducer
export const { toggleMapView, updateSelectedPlace, createPointOfSales } =
  pointOfSaleView.actions;
export default pointOfSaleView.reducer;
