import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';

export const isSystemLight: boolean = Appearance.getColorScheme() === 'light';

export const saveTheme = async (isLightTheme: boolean): Promise<void> => {
  try {
    await AsyncStorage.setItem('isLightTheme', `${isLightTheme}`);
  } catch (e) {
    // do nothing
  }
};

export const getThemeFromStorage = async (): Promise<boolean | null> => {
  try {
    const value = await AsyncStorage.getItem('isLightTheme');
    return value ? value === 'true' : null;
  } catch (e) {
    return null;
  }
};
