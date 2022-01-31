import { createStackNavigator } from '@react-navigation/stack';
import { useAuthData } from 'app/hooks';
import { LoginScreen } from 'app/screens/LoginScreen';
import React, { FC } from 'react';
import { AppDrawerNavigation } from './AppDrawerNavigation';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigation: FC = () => {
  const { isAuthenticated } = useAuthData();

  return (
    <Navigator>
      {isAuthenticated ? (
        <Screen
          name="appDrawer"
          component={AppDrawerNavigation}
          options={{ headerShown: false, animationEnabled: false }}
        />
      ) : (
        <Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
      )}
    </Navigator>
  );
};
