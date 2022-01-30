import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Logo } from 'app/components/common/Logo';
import React, { FC } from 'react';
import { View } from 'react-native';
import { colorBackgroundMain, margins } from 'theme';
import { DashboardStackNavigation } from './DashboardStackNavigation';

const { Navigator, Screen } = createDrawerNavigator();

export const AppDrawerNavigation: FC = () => {
  const CustomDrawerContent = (props: DrawerContentComponentProps) => {
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

  return (
    <Navigator drawerContent={CustomDrawerContent}>
      <Screen name="dashboardNavigation" component={DashboardStackNavigation} />
    </Navigator>
  );
};
