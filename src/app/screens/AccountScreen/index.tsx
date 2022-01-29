import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab } from '@ui-kitten/components';
import React from 'react';
import { SignInScreen } from '../SignInScreen';
import { SignUpScreen } from '../SignUpScreen';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <>
    <Tab title="Sign In" onSelect={() => navigation.navigate(SignInScreen)} />
    <Tab title="Sign Up" onSelect={() => navigation.navigate(SignUpScreen)} />
  </>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <TopTabBar {...props} />}>
    <Screen name="SignIn" component={SignInScreen} />
    <Screen name="SignUp" component={SignUpScreen} />
  </Navigator>
);

export const AccountScreen = () => {
  return (
    <>
      <TabNavigator />
    </>
  );
};
