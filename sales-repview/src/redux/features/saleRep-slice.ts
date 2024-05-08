import { createSlice } from '@reduxjs/toolkit';
import { IActivity } from './types';
import { activities } from '@/utils/activities';

export type ShopActions = {
  openShopActions: boolean;
};

const initialState: ShopActions = {
  openShopActions: false,
};

// Create the slice
export const shopActions = createSlice({
  name: 'shopActions',
  initialState,
  reducers: {
    toogleShopBottomSheet: (state, action) => {
      console.log(action?.payload);
      state.openShopActions = action?.payload;
    },
  },
});

// Export actions and reducer
export const { toogleShopBottomSheet } = shopActions.actions;
export default shopActions.reducer;
