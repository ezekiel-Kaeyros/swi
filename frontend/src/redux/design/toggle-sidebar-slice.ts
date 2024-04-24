import { createSlice, current } from '@reduxjs/toolkit';
import { getToggleSidebarkies, setToggleSidebarCookies } from './cookies';

export type ToogleSidebarState = {
  toggleSibar: boolean;
};

const initialState: ToogleSidebarState = {
  toggleSibar: getToggleSidebarkies(),
};

// Create the slice
export const toggleSidebarSlice = createSlice({
  name: 'toggleSidebar',
  initialState,
  reducers: {
    setToggle: (state, action) => {
      console.log(action);
      setToggleSidebarCookies(action?.payload);
      state.toggleSibar = action?.payload;
    },
  },
});

// Export actions and reducer
export const { setToggle } = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;
