import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ThemeState } from './types';
import { isSystemLight } from './utils';

export const initialState: ThemeState = {
  isLightTheme: isSystemLight,
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<boolean | null>) {
      state.isLightTheme = action.payload ?? isSystemLight;
    },
  },
});

export const { actions: themeActions } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
