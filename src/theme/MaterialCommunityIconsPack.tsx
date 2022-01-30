import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TMaterialIcon } from './TMaterialIcon';

export const MaterialCommunityIconsPack = {
  name: 'materialCommunityIcons',
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy(
    {},
    {
      get(_, name) {
        return IconProvider(name as TMaterialIcon);
      },
    },
  );
}

const IconProvider = (name: TMaterialIcon) => ({
  toReactElement: (props: any) => MaterialIcon({ name, ...props }),
});

function MaterialIcon({ name, style }: { name: TMaterialIcon; style: any }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return (
    <MaterialCommunityIcons
      name={name}
      size={height}
      color={tintColor}
      style={iconStyle}
    />
  );
}
