import { createSlice } from '@reduxjs/toolkit';
import { TUserState } from './types';

export const initialState: TUserState = {
  isAuthenticated: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSucceeded: (state) => {
      state.isAuthenticated = true;
    },
    logoutSucceeded: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const {
  actions: userActions,
  name: userSliceKey,
  reducer: userReducer,
} = slice;
