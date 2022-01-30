import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { spacing } from './spacing';

const iphonesWithPhysicalHomeButton = [
  'iPhone 6s',
  'iPhone 7',
  'iPhone 8',
  'iPhone SE',
];

const shouldAddPaddingBottom = (): boolean =>
  Platform.OS !== 'ios' ||
  iphonesWithPhysicalHomeButton.some((modelName) =>
    Device.modelName?.includes(modelName),
  );

export const scrollViewContentContainerStyle = {
  paddingBottom: shouldAddPaddingBottom() ? spacing.m : 0,
};
