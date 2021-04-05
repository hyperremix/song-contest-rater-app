import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar as ReactStatusBar,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectIsLightTheme } from 'theme/slice/selectors';
import { AccountScreen } from './screens/AccountScreen';
import { HomeScreen } from './screens/HomeScreen';
import { SettingsScreen } from './screens/SettingsScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => <Icon {...props} name="home" />;

const AccountIcon = (props) => <Icon {...props} name="person" />;

const SettingsIcon = (props) => <Icon {...props} name="settings" />;

const BottomTabBar = ({ navigation, state, style }) => (
  <BottomNavigation
    appearance="noIndicator"
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
    style={style}
  >
    <BottomNavigationTab icon={HomeIcon} />
    <BottomNavigationTab icon={AccountIcon} />
    <BottomNavigationTab icon={SettingsIcon} />
  </BottomNavigation>
);

export const App = () => {
  const styles = useStyleSheet(themedStyles);

  const isLightTheme = useSelector(selectIsLightTheme);

  return (
    <>
      {Platform.OS === 'ios' && <SafeAreaView style={styles.safeAreaTop} />}
      <SafeAreaView style={styles.safeAreaBottom}>
        <StatusBar style={!isLightTheme ? 'light' : 'dark'}></StatusBar>
        <NavigationContainer>
          <Layout style={styles.container}>
            <Navigator
              tabBar={(props) => (
                <BottomTabBar {...props} style={styles.bottomNavigation} />
              )}
            >
              <Screen name="Home" component={HomeScreen} />
              <Screen name="Account" component={AccountScreen} />
              <Screen name="Settings" component={SettingsScreen} />
            </Navigator>
          </Layout>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const themedStyles = StyleService.create({
  safeAreaTop: { flex: 0, backgroundColor: 'background-basic-color-2' },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  bottomNavigation: {
    backgroundColor: 'background-basic-color-2',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? ReactStatusBar.currentHeight : 0,
  },
});
