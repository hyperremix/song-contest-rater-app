import Constants from 'expo-constants';
import { TAppEnv } from './TAppEnv';

const initEnvironment = (): TAppEnv => {
  return (Constants.manifest?.extra as TAppEnv) ?? {};
};

export const environment = initEnvironment();
