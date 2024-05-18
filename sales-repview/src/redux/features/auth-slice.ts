import { IUser } from '@/core/models/User';
import { createSlice } from '@reduxjs/toolkit';

// Just a boiler plate, this file needs to be updated

type AuthState = {
  user: IUser;
  token: string;
};

const initialState: AuthState = {
  user: {
    _id: '',
    name: '',
    dateOfBirth: new Date(),
    gender: '',
    country: '',
    region: '',
    city: '',
    streetAddress: '',
    job: '',
    departement: '',
    password: '',
    reportingManager: [],
    id_company: [],
    email: '',
    startDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  token: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserInfos: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveUserInfos } = auth.actions;
export default auth.reducer;
