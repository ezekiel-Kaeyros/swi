import { POSDisplayNavigationList, RTTDisplayNavigationList, TrackingListType, TrackingListTypes, TrackingProfileNavigationList, trackingList } from '@/services/simulationData';
import { pointOfSales } from '@/utils/pointOfSalesData';
import { IPointOfSalesType } from '@/utils/types';
import { createSlice, current } from '@reduxjs/toolkit';
import { AgentNavigationType, AgentNavigationsType } from './types';



export type PointOfSaleViewState = {
  pointOfSales: IPointOfSalesType[];
  toggleMap: boolean;
  posDisplayNavigationList: any; 
  realTimeTrackingNavigationList: any; 
  trackingProfileNavigationList: any; 
  trackingList: TrackingListTypes; 
  selectedPlace: {
    latitude: number | null;
    longitude: number | null;
  };
};

const initialState: PointOfSaleViewState = {
  pointOfSales: pointOfSales,
  toggleMap: false, 
  posDisplayNavigationList: POSDisplayNavigationList,
  realTimeTrackingNavigationList: RTTDisplayNavigationList, 
  trackingProfileNavigationList: TrackingProfileNavigationList, 
  trackingList: trackingList, 
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

    toggleTrackingListElement: (state, action) => {
      const { id } = action.payload; 
      const updatedTabDatas: any = state?.trackingList.map((tab: TrackingListType) => {
        console.log("id inside slice", id)
        if (tab?.id === id) {
          return { ...tab, opened: !tab?.opened };
        } else {
          return tab;
        }
        // return { ...tab, opened: tab?.opened };
      });
      state.trackingList = updatedTabDatas;
    },

    navigationTabsInPOS: (state, action) => {
      const { id } = action.payload; 
      const updatedTabDatas: AgentNavigationsType = state?.posDisplayNavigationList.map((tab: AgentNavigationType) => {
        if (tab?.id === id) {
          return { ...tab, status: true, textColor: "blue-500" };
        }
        return { ...tab, status: false, textColor: "slate-500" };
      });
      state.posDisplayNavigationList = updatedTabDatas;
    },

    navigationTabsInRTT: (state, action) => {
      const { id } = action.payload; 
      const updatedTabDatas: AgentNavigationsType = state?.realTimeTrackingNavigationList.map((tab: AgentNavigationType) => {
        if (tab?.id === id) {
          return { ...tab, status: true, textColor: "blue-500" };
        }
        return { ...tab, status: false, textColor: "slate-500" };
      });
      state.realTimeTrackingNavigationList = updatedTabDatas;
    },

    navigationTabsInRTTProfile: (state, action) => {
      const { id } = action.payload; 
      const updatedTabDatas: AgentNavigationsType = state?.trackingProfileNavigationList.map((tab: AgentNavigationType) => {
        if (tab?.id === id) {
          return { ...tab, status: true, textColor: "blue-500" };
        }
        return { ...tab, status: false, textColor: "slate-500" };
      });
      state.trackingProfileNavigationList = updatedTabDatas;
    },

    updateSelectedPlace: (state, action) => {
      const { latitude, longitude } = action.payload;
      state.selectedPlace.latitude = latitude;
      state.selectedPlace.longitude = longitude;
    },

    loadAllPointOfSale: (state, action) => {
      const { allPointOfSales } = action?.payload; 
      console.log(allPointOfSales, "Loaded all POS")
      state.pointOfSales = allPointOfSales
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
export const { toggleMapView, toggleTrackingListElement, navigationTabsInPOS, navigationTabsInRTT, navigationTabsInRTTProfile, loadAllPointOfSale, updateSelectedPlace, createPointOfSales } =
  pointOfSaleView.actions;
export default pointOfSaleView.reducer;
