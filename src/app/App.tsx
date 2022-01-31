import { NavigationContainer } from '@react-navigation/native';
import { Layout } from '@ui-kitten/components';
import { AppNavigation } from 'app/navigation/AppNavigation';
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar as ReactStatusBar,
} from 'react-native';
import { colorBackgroundDark } from 'theme';
import { navigationTheme } from 'theme/navigationTheme';

export const App: FC = () => (
  <Layout
    style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? ReactStatusBar.currentHeight : 0,
      backgroundColor: colorBackgroundDark,
    }}
  >
    <StatusBar style="light" />
    <SafeAreaView />
    <NavigationContainer theme={navigationTheme}>
      <AppNavigation />
    </NavigationContainer>
  </Layout>
);
