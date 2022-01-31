import { createSelector } from '@reduxjs/toolkit';
import { TUserState } from 'store/user/types';
import { TRootState } from '../TRootState';
import { initialState } from './index';

const selectSlice = (state: TRootState) => state.user || initialState;

export const selectIsAuthenticated = createSelector(
  [selectSlice],
  (state: TUserState) => state.isAuthenticated,
);
