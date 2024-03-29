import { useNavigation } from '@react-navigation/native';
import { Icon, Logo } from 'app/components/common';
import { NavBarScreenShell } from 'app/screenShells/NavBarScreenShell';
import React, { FC } from 'react';
import { View } from 'react-native';

export const DashboardScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <NavBarScreenShell
      hasDrawer
      accessoryRightIcon={
        <Icon name="account" onPress={() => navigation.navigate('settings')} />
      }
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Logo />
      </View>
    </NavBarScreenShell>
  );
};
