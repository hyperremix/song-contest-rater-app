import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from 'app/screens/SettingsScreen';
import React, { FC } from 'react';
import { DashboardScreen } from '../screens/DashboardScreen';

const { Navigator, Screen } = createStackNavigator();

export const DashboardNavigation: FC = () => (
  <Navigator>
    <Screen
      name="dashboard"
      component={DashboardScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="settings"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
  </Navigator>
);
