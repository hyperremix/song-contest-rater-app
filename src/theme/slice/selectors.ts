import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';
import { ThemeState } from './types';

const selectSlice = (state: RootState) => state.theme || initialState;

export const selectIsLightTheme = createSelector(
  [selectSlice],
  (state: ThemeState) => state.isLightTheme,
);
