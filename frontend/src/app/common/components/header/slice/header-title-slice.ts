import { createSlice, current } from '@reduxjs/toolkit';

export type HeaderTitleState = {
  title: string;
};

const initialState: HeaderTitleState = {
  title: '',
};

// Create the slice
export const headerSlice = createSlice({
  name: 'headerTitle',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action?.payload;
    },
  },
});

// Export actions and reducer
export const { setTitle } = headerSlice.actions;
export default headerSlice.reducer;
