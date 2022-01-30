import { DarkTheme } from '@react-navigation/native';
import { colorBackgroundMain } from './colors';

export const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colorBackgroundMain,
  },
};
