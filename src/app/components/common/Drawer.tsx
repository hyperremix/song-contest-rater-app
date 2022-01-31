import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Logo } from 'app/components/common';
import React, { FC } from 'react';
import { View } from 'react-native';
import { colorBackgroundMain, margins } from 'theme';

export const Drawer: FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colorBackgroundMain,
      }}
    >
      <View style={[{ alignItems: 'center' }, margins.ts]}>
        <Logo />
      </View>
    </DrawerContentScrollView>
  );
};
