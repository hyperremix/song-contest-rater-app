import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { AppDrawerNavigation } from './AppDrawerNavigation';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigation: FC = () => (
  <Navigator>
    <Screen
      name="appDrawer"
      component={AppDrawerNavigation}
      options={{ headerShown: false, animationEnabled: false }}
    />
  </Navigator>
);
