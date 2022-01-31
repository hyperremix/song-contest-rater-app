import { Layout } from '@ui-kitten/components';
import { NavBar } from 'app/components/common';
import React, { FC, ReactElement } from 'react';
import { View } from 'react-native';
import { paddings } from 'theme';

type Props = {
  screenTitle?: string;
  hasDrawer?: boolean;
  onGoBack?: () => void;
  accessoryRightIcon?: ReactElement;
};

export const NavBarScreenShell: FC<Props> = ({
  screenTitle,
  hasDrawer,
  onGoBack,
  children,
  accessoryRightIcon,
}) => (
  <Layout style={{ flex: 1 }}>
    <NavBar
      screenTitle={screenTitle}
      hasDrawer={hasDrawer}
      onGoBack={onGoBack}
      accessoryRightIcon={accessoryRightIcon}
    />
    <View style={[{ flex: 1 }, paddings.m]}>{children}</View>
  </Layout>
);
