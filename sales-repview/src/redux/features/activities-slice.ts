import { createSlice } from '@reduxjs/toolkit';
import { IActivity } from './types';
import { activities } from '@/core/utils/activities';

export type ActivityClusterState = {
  activities: IActivity[];
};

const initialState: ActivityClusterState = {
  activities: activities,
};

// Create the slice
export const activity = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    // Create a new Channel cluster

    createActivity: (state, action) => {
      const { name, frequency, duration, activity, tradeChannel, category } =
        action?.payload;

      state.activities.push({
        id: state.activities?.length + 1,
        ...action?.payload,
      });
    },
  },
});

// Export actions and reducer
export const { createActivity } = activity.actions;
export default activity.reducer;
