import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer } from 'app/components/common/Drawer';
import React, { FC } from 'react';
import { DashboardNavigation } from './DashboardNavigation';

const { Navigator, Screen } = createDrawerNavigator();

export const AppDrawerNavigation: FC = () => (
  <Navigator drawerContent={Drawer}>
    <Screen name="dashboardNavigation" component={DashboardNavigation} />
  </Navigator>
);
